"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  driftX: number;
  driftY: number;
  driftSpeed: number;
  driftPhase: number;
}

const SPACING = 38;
const MOUSE_RADIUS = 120;
const PUSH_STRENGTH = 60;
const SPRING = 0.06;
const DAMPING = 0.75;

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas always matches the viewport only — it is `fixed`
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildDots();
    };

    // Dots are defined in a grid large enough to tile the viewport
    // Their baseX/baseY are in viewport space (0..innerWidth, 0..innerHeight)
    const buildDots = () => {
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      const dots: Dot[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            radius: Math.random() < 0.4 ? 0.55 : 0.8,
            opacity: Math.random() * 0.5 + 0.25,
            driftX: (Math.random() - 0.5) * 14,
            driftY: (Math.random() - 0.5) * 10,
            driftSpeed: 0.0003 + Math.random() * 0.0004,
            driftPhase: Math.random() * Math.PI * 2,
          });
        }
      }
      dotsRef.current = dots;
    };

    const draw = (t: number) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Mouse is already in viewport coords (clientX/clientY) — no scroll offset needed
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Scroll offset used only to shift the dot grid so it tiles as you scroll
      const scrollOffset = window.scrollY % SPACING;

      for (const dot of dotsRef.current) {
        // Apply scroll tiling: shift base position by scroll offset
        const tiledY = ((dot.baseY - scrollOffset) % H + H) % H;

        // Gentle float drift in viewport space
        const driftedX = dot.baseX + dot.driftX * Math.sin(t * dot.driftSpeed + dot.driftPhase);
        const driftedY = tiledY + dot.driftY * Math.cos(t * dot.driftSpeed + dot.driftPhase * 1.3);

        // Mouse repulsion — pure viewport coords
        const dx = driftedX - mx;
        const dy = driftedY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * PUSH_STRENGTH;
          dot.vx += (dx / dist) * force * 0.15;
          dot.vy += (dy / dist) * force * 0.15;
        }

        // Spring back
        dot.vx += (driftedX - dot.x) * SPRING;
        dot.vy += (driftedY - dot.y) * SPRING;
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;
        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${dot.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
