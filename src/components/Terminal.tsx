"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { ArticleMeta } from "@/lib/articles";
import type { Job } from "@/lib/jobs";
import type { Event } from "@/lib/events";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Segment = { text: string; color?: string };
type OutputRow = Segment[];

type HistoryLine =
  | { type: "prompt"; command: string }
  | { type: "output"; rows: OutputRow[] }
  | { type: "error"; text: string }

export interface TerminalProps {
  articles: ArticleMeta[];
  jobs: Job[];
  freelanceJobs: Job[];
  upcomingEvents: Event[];
  pastEvents: Event[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const GREEN = "#28c840";
const DIM = "#999999";
const MUTED = "#666666";
const NORMAL = "#c9c9c9";
const WHITE = "#ffffff";
const RED = "#ff5f57";
const ACCENT = "#914848";
const YELLOW = "#febc2e";


const NEOFETCH_LOGO = [
  "  ____            ____           ",
  " |  _ \\  _____  _|  _ \\ _____  __",
  " | | | |/ _ \\ \\/ / |_) / _ \\ \\/ /",
  " | |_| |  __/>  <|  __/  __/>  < ",
  " |____/ \\___/_/\\_\\_|   \\___/_/\\_\\",
  "                                  ",
  "                                  ",
];

const NEOFETCH_INFO = [
  [
    { text: "OS: ", color: GREEN },
    { text: "DevPev OS 1.0.0", color: WHITE },
  ],
  [
    { text: "Host: ", color: GREEN },
    { text: "Tashkent, Uzbekistan", color: NORMAL },
  ],
  [
    { text: "Members: ", color: GREEN },
    { text: "300+", color: WHITE },
  ],
  [
    { text: "Meetups: ", color: GREEN },
    { text: "12+", color: WHITE },
  ],
  [
    { text: "Projects: ", color: GREEN },
    { text: "8+", color: WHITE },
  ],
  [
    { text: "Speakers: ", color: GREEN },
    { text: "20+", color: WHITE },
  ],
  [
    { text: "Shell: ", color: GREEN },
    { text: "devpev", color: NORMAL },
  ],
  [
    { text: "Language: ", color: GREEN },
    { text: "uz / en", color: NORMAL },
  ],
];

function makeRow(...segs: Segment[]): OutputRow {
  return segs;
}

function text(t: string, color = NORMAL): Segment {
  return { text: t, color };
}

// ---------------------------------------------------------------------------
// Command implementations (pure — return rows)
// ---------------------------------------------------------------------------

function cmdHelp(): OutputRow[] {
  const col1 = 16;
  const commands: [string, string][] = [
    ["help", "show this message"],
    ["about", "learn about DevPev"],
    ["whoami", "find out who you are"],
    ["blog", "list recent articles"],
    ["blog <slug>", "show article details"],
    ["jobs", "browse open positions"],
    ["events", "upcoming & past events"],
    ["neofetch", "system info"],
    ["ping devpev", "check the connection"],
    ["clear", "clear the terminal"],
    ["", ""],
    ["hack", "???"],
    ["matrix", "???"],
    ["secret", "???"],
  ];
  return [
    makeRow(text("available commands:", DIM)),
    makeRow(text("─".repeat(40), MUTED)),
    ...commands.map(([cmd, desc]) =>
      cmd === ""
        ? makeRow(text(""))
        : makeRow(
            text(cmd.padEnd(col1), WHITE),
            text("  " + desc, DIM)
          )
    ),
  ];
}

function cmdAbout(): OutputRow[] {
  return [
    makeRow(text("DevPev", ACCENT), text(" — O'zbekistondagi ochiq dasturchilar jamiyati", NORMAL)),
    makeRow(text("")),
    makeRow(text("by developers, for developers.", WHITE)),
    makeRow(text("")),
    makeRow(text("stats:", DIM)),
    makeRow(text("  members   ", DIM), text("300+", WHITE)),
    makeRow(text("  meetups   ", DIM), text("12+ (monthly)", WHITE)),
    makeRow(text("  projects  ", DIM), text("8+ active", WHITE)),
    makeRow(text("  speakers  ", DIM), text("20+", WHITE)),
    makeRow(text("")),
    makeRow(text("find us:", DIM)),
    makeRow(text("  telegram  ", DIM), text("@devpevuz", GREEN)),
    makeRow(text("  twitter   ", DIM), text("@devpevuz", GREEN)),
    makeRow(text("  instagram ", DIM), text("@devpevuz", GREEN)),
  ];
}

function cmdWhoami(): OutputRow[] {
  return [
    makeRow(text("you are a developer.", WHITE)),
    makeRow(text("welcome home.", ACCENT)),
  ];
}

function cmdBlog(articles: ArticleMeta[]): OutputRow[] {
  if (articles.length === 0) {
    return [makeRow(text("no articles found.", DIM))];
  }
  return [
    makeRow(text("recent articles:", DIM)),
    makeRow(text("─".repeat(60), MUTED)),
    ...articles.map((a) =>
      makeRow(
        text(a.title, WHITE),
        text("  " + a.date, DIM),
        text("  @" + a.author, MUTED)
      )
    ),
    makeRow(text("")),
    makeRow(text("tip: ", DIM), text("blog <slug>", NORMAL), text(" to view details", DIM)),
  ];
}

function cmdBlogSlug(slug: string, articles: ArticleMeta[]): OutputRow[] {
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return [
      makeRow(text(`article not found: "${slug}"`, RED)),
      makeRow(text("try ", DIM), text("blog", NORMAL), text(" to see all slugs", DIM)),
    ];
  }
  return [
    makeRow(text(article.title, WHITE)),
    makeRow(text("─".repeat(50), MUTED)),
    makeRow(text("author   ", DIM), text(article.author, NORMAL)),
    makeRow(text("date     ", DIM), text(article.date, NORMAL)),
    makeRow(text("github   ", DIM), text("@" + article.github, GREEN)),
    makeRow(
      text("tags     ", DIM),
      text(article.tags.join("  "), ACCENT)
    ),
    makeRow(text("")),
    makeRow(text("read it at ", DIM), text(`/blog/${article.slug}`, GREEN)),
  ];
}

function cmdJobs(jobs: Job[], freelanceJobs: Job[]): OutputRow[] {
  const rows: OutputRow[] = [
    makeRow(text("positions:", DIM)),
    makeRow(text("─".repeat(50), MUTED)),
  ];
  for (const job of jobs) {
    rows.push(
      makeRow(
        text(job.title, WHITE),
        text("  @ ", DIM),
        text(job.company, ACCENT),
        text("  " + job.location, DIM)
      )
    );
    rows.push(
      makeRow(
        text("  " + job.type + "  ", MUTED),
        text(job.tags.join("  "), MUTED)
      )
    );
  }
  rows.push(makeRow(text("")));
  rows.push(makeRow(text("freelance:", DIM)));
  rows.push(makeRow(text("─".repeat(50), MUTED)));
  for (const job of freelanceJobs) {
    rows.push(
      makeRow(
        text(job.title, WHITE),
        text("  " + job.location, DIM)
      )
    );
    rows.push(makeRow(text("  " + job.tags.join("  "), MUTED)));
  }
  return rows;
}

function cmdEvents(upcoming: Event[], past: Event[]): OutputRow[] {
  const rows: OutputRow[] = [
    makeRow(text("upcoming:", DIM)),
    makeRow(text("─".repeat(50), MUTED)),
  ];
  for (const e of upcoming) {
    rows.push(makeRow(text(e.date + "  ", GREEN), text(e.title, WHITE)));
    rows.push(makeRow(text("       ", DIM), text(e.time + "  " + e.location, MUTED)));
  }
  rows.push(makeRow(text("")));
  rows.push(makeRow(text("past:", DIM)));
  rows.push(makeRow(text("─".repeat(50), MUTED)));
  for (const e of past) {
    rows.push(makeRow(text(e.date + "  ", MUTED), text(e.title, NORMAL)));
    rows.push(makeRow(text("       ", DIM), text(e.time + "  " + e.location, MUTED)));
  }
  return rows;
}

function cmdNeofetch(): OutputRow[] {
  const rows: OutputRow[] = [];
  const maxLines = Math.max(NEOFETCH_LOGO.length, NEOFETCH_INFO.length);
  for (let i = 0; i < maxLines; i++) {
    const logoLine = NEOFETCH_LOGO[i] ?? "                                  ";
    const infoLine = NEOFETCH_INFO[i];
    const row: OutputRow = [text(logoLine, GREEN)];
    if (infoLine) {
      for (const seg of infoLine) {
        row.push(seg);
      }
    }
    rows.push(row);
  }
  return rows;
}

function cmdPing(): OutputRow[] {
  return [
    makeRow(text("PING devpev.uz", DIM)),
    makeRow(text("")),
    makeRow(text("pong!", GREEN), text("  latency: 0ms", DIM), text("  (we're already here)", MUTED)),
  ];
}

function cmdSecret(): OutputRow[] {
  return [
    makeRow(text("[ classified ]", RED)),
    makeRow(text("")),
    makeRow(text("DevPev started in 2025 as a Telegram chat.", NORMAL)),
    makeRow(text("Three developers. One idea: build in the open.", NORMAL)),
    makeRow(text("")),
    makeRow(text("the first meetup had 11 people and a borrowed projector.", DIM)),
    makeRow(text("the last one had 80.", WHITE)),
    makeRow(text("")),
    makeRow(text("you found this. that means you belong here.", ACCENT)),
  ];
}

function cmdSudo(rest: string): OutputRow[] {
  return [
    makeRow(text(`sudo: ${rest}: Permission denied.`, RED)),
    makeRow(text("nice try though.", DIM)),
  ];
}

function cmdRmRf(): OutputRow[] {
  return [
    makeRow(text("rm: /: Operation not permitted", RED)),
    makeRow(text("")),
    makeRow(text("wait...", YELLOW)),
  ];
}

function cmdUnknown(cmd: string): HistoryLine {
  return {
    type: "error",
    text: `command not found: ${cmd}. Type 'help' for available commands.`,
  };
}

// ---------------------------------------------------------------------------
// Boot message
// ---------------------------------------------------------------------------

const BOOT_LINES: HistoryLine[] = [
  {
    type: "output",
    rows: [
      makeRow(text("DevPev Terminal", GREEN), text(" v1.0.0", MUTED)),
      makeRow(text("O'zbekistondagi ochiq dasturchilar jamiyati", DIM)),
      makeRow(text("")),
      makeRow(text("type ", DIM), text("help", WHITE), text(" to get started.", DIM)),
      makeRow(text("")),
    ],
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Terminal({
  articles,
  jobs,
  freelanceJobs,
  upcomingEvents,
  pastEvents,
}: TerminalProps) {
  const [history, setHistory] = useState<HistoryLine[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [inputDraft, setInputDraft] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHacking, setIsHacking] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isFirstRender = useRef(true);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(id);
  }, []);

  // Auto-scroll inside the terminal body (not the page) on new output
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      for (const t of timeoutsRef.current) clearTimeout(t);
    };
  }, []);

  const pushOutput = useCallback((rows: OutputRow[]) => {
    setHistory((prev) => [...prev, { type: "output", rows }]);
  }, []);

  const pushLine = useCallback((line: HistoryLine) => {
    setHistory((prev) => [...prev, line]);
  }, []);

  // Animations
  const runHack = useCallback(() => {
    setIsAnimating(true);
    const schedule = (ms: number, rows: OutputRow[]) => {
      const t = setTimeout(() => pushOutput(rows), ms);
      timeoutsRef.current.push(t);
    };

    const fakeIps = ["192.168.0.1", "10.0.0.254", "172.16.0.3"];

    setIsHacking(true);
    schedule(0, [makeRow(text("Initializing connection...", DIM))]);
    schedule(400, [makeRow(text("Scanning ports: 22, 80, 443...", NORMAL))]);
    schedule(900, [makeRow(text("Target acquired: " + fakeIps[0], NORMAL))]);
    schedule(1150, [makeRow(text("Target acquired: " + fakeIps[1], NORMAL))]);
    schedule(1400, [makeRow(text("Target acquired: " + fakeIps[2], NORMAL))]);
    schedule(1800, [makeRow(text("Bypassing firewall...", YELLOW))]);
    schedule(2400, [makeRow(text("Decrypting credentials...", YELLOW))]);
    schedule(3000, [makeRow(text("ACCESS GRANTED", GREEN))]);
    const t = setTimeout(() => {
      setIsHacking(false);
      pushOutput([
        makeRow(text("")),
        makeRow(text("...just kidding. stay ethical :)", DIM)),
        makeRow(text("")),
      ]);
      setIsAnimating(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }, 3500);
    timeoutsRef.current.push(t);
  }, [pushOutput]);

  const runMatrix = useCallback(() => {
    setIsAnimating(true);

    // Create fullscreen canvas overlay
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Object.assign(canvas.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "9999",
      pointerEvents: "none",
      opacity: "1",
      transition: "opacity 0.8s ease",
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    const fontSize = 16;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: cols }, () => Math.random() * -50);
    const CHARS = "01アイウエオカキクケコサシスセソタチ";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        // Head char is bright white, trail is green
        const y = drops[i] * fontSize;
        ctx.fillStyle = drops[i] * fontSize > 0 && Math.random() > 0.95 ? "#ffffff" : "#28c840";
        ctx.fillText(char, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const rafRef = { id: 0 };
    let lastTime = 0;
    const animate = (time: number) => {
      if (time - lastTime > 40) {
        draw();
        lastTime = time;
      }
      rafRef.id = requestAnimationFrame(animate);
    };
    rafRef.id = requestAnimationFrame(animate);

    // After 3s start fade out, cleanup at 3.8s
    const fadeOut = setTimeout(() => {
      canvas.style.opacity = "0";
    }, 3000);

    const cleanup = setTimeout(() => {
      cancelAnimationFrame(rafRef.id);
      document.body.removeChild(canvas);
      setIsAnimating(false);
      setTimeout(() => inputRef.current?.focus(), 0);
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          rows: [
            makeRow(text("")),
            makeRow(text("...you took the green pill.", DIM)),
            makeRow(text("")),
          ],
        },
      ]);
    }, 3800);

    timeoutsRef.current.push(fadeOut, cleanup);
  }, []);

  const execute = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      // push the prompt line
      setHistory((prev) => [...prev, { type: "prompt", command: trimmed }]);

      const [cmd, ...args] = trimmed.split(/\s+/);
      const rest = args.join(" ");
      const lower = cmd.toLowerCase();

      if (lower === "clear") {
        setHistory([]);
        return;
      }
      if (lower === "help") return pushOutput(cmdHelp());
      if (lower === "about") return pushOutput(cmdAbout());
      if (lower === "whoami") return pushOutput(cmdWhoami());
      if (lower === "neofetch") return pushOutput(cmdNeofetch());
      if (lower === "secret") return pushOutput(cmdSecret());
      if (lower === "ping" && rest.toLowerCase() === "devpev")
        return pushOutput(cmdPing());
      if (lower === "sudo") return pushOutput(cmdSudo(rest || "command"));
      if (lower === "rm") {
        pushOutput(cmdRmRf());
        const t = setTimeout(() => {
          pushOutput([makeRow(text("just kidding. we kept your files.", DIM)), makeRow(text(""))]);
        }, 1200);
        timeoutsRef.current.push(t);
        return;
      }
      if (lower === "hack") return runHack();
      if (lower === "matrix") return runMatrix();
      if (lower === "blog") {
        if (args.length === 0) return pushOutput(cmdBlog(articles));
        return pushOutput(cmdBlogSlug(args[0], articles));
      }
      if (lower === "jobs") return pushOutput(cmdJobs(jobs, freelanceJobs));
      if (lower === "events")
        return pushOutput(cmdEvents(upcomingEvents, pastEvents));

      pushLine(cmdUnknown(trimmed));
    },
    [
      articles,
      jobs,
      freelanceJobs,
      upcomingEvents,
      pastEvents,
      pushOutput,
      pushLine,
      runHack,
      runMatrix,
    ]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        if (isAnimating) return;
        const cmd = input;
        setCmdHistory((prev) => {
          const next = [...prev, cmd].slice(-50);
          return next;
        });
        setHistIdx(-1);
        setInputDraft("");
        setInput("");
        execute(cmd);
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCmdHistory((prev) => {
          if (prev.length === 0) return prev;
          const newIdx = histIdx === -1 ? prev.length - 1 : Math.max(0, histIdx - 1);
          if (histIdx === -1) setInputDraft(input);
          setHistIdx(newIdx);
          setInput(prev[newIdx]);
          return prev;
        });
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (histIdx === -1) return;
        setCmdHistory((prev) => {
          const newIdx = histIdx + 1;
          if (newIdx >= prev.length) {
            setHistIdx(-1);
            setInput(inputDraft);
          } else {
            setHistIdx(newIdx);
            setInput(prev[newIdx]);
          }
          return prev;
        });
        return;
      }
    },
    [input, inputDraft, histIdx, isAnimating, execute]
  );

  return (
    <div
      className={`relative border border-[#e7e6e6] rounded-[20px] overflow-hidden cursor-text${isHacking ? " terminal-hacking" : ""}`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="bg-[rgba(255,255,255,0.07)] border-b border-[#e7e6e6] px-6 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[13px] text-[#c9c9c9]">devpev</span>
        <div className="w-16" />
      </div>

      {/* Terminal body */}
      <div ref={bodyRef} className="p-6 h-[500px] overflow-y-auto font-mono text-[14px] leading-relaxed">
        {history.map((line, i) => {
          if (line.type === "prompt") {
            return (
              <div key={i} className="flex items-center gap-2 mt-3">
                <span style={{ color: GREEN }}>devpev</span>
                <span style={{ color: DIM }}>~</span>
                <span style={{ color: WHITE }}>$</span>
                <span style={{ color: NORMAL }} className="ml-1">{line.command}</span>
              </div>
            );
          }

          if (line.type === "output") {
            return (
              <div key={i} className="mt-1">
                {line.rows.map((row, ri) => (
                  <div key={ri} className="leading-6">
                    {row.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      row.map((seg, si) => (
                        <span key={si} style={{ color: seg.color ?? NORMAL }}>
                          {seg.text}
                        </span>
                      ))
                    )}
                  </div>
                ))}
              </div>
            );
          }

          if (line.type === "error") {
            return (
              <div key={i} className="mt-1" style={{ color: RED }}>
                {line.text}
              </div>
            );
          }

          return null;
        })}

        {/* Live input line */}
        <div className="flex items-center gap-2 mt-3">
          <span style={{ color: GREEN }}>devpev</span>
          <span style={{ color: DIM }}>~</span>
          <span style={{ color: WHITE }}>$</span>
          <span className="ml-1 relative flex-1">
            <span style={{ color: NORMAL }}>{input}</span>
            <span
              className="inline-block w-[8px] h-[15px] ml-[1px] align-middle"
              style={{
                backgroundColor: cursorVisible ? WHITE : "transparent",
                transition: "background-color 0.1s",
              }}
            />
          </span>
        </div>

      </div>

      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="terminal input"
        className="absolute opacity-0 pointer-events-none w-px h-px"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />
    </div>
  );
}
