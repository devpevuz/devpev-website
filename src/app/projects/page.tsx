"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const projects = [
  {
    name: "devpev-website",
    description: "The community website you're looking at. Built with Next.js, open to contributions.",
    tags: ["nextjs", "typescript", "tailwind"],
    status: "active",
    url: "https://github.com/devpev/devpev-website",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-8 pb-20">
        <div className="w-full max-w-[1063px]">

          {/* Header */}
          <div className="flex items-end justify-between border-b border-border pb-6 mb-0">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">open source</p>
              <h1 className="mt-2 font-sans text-[48px] sm:text-[56px] leading-tight text-foreground">Projects</h1>
            </div>
            <a
              href="https://github.com/devpev"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              github.com/devpev ↗
            </a>
          </div>

          {/* Intro */}
          <div className="border-b border-border py-6 grid lg:grid-cols-[1fr_1fr] gap-8">
            <p className="font-mono text-[13px] leading-6 text-muted-foreground">
              DevPev builds open-source projects as a community. Anyone can contribute — open an issue, submit a PR, or propose a new project.
            </p>
            <p className="font-mono text-[13px] leading-6 text-muted-foreground">
              All projects live on our GitHub org. If you have an idea worth building with the community, bring it to a meetup or open a discussion on GitHub.
            </p>
          </div>

          {/* Project list */}
          <div className="mt-0 border-b border-border">
            {projects.map((project) => (
              <div key={project.name} className="border-b border-border last:border-b-0 py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="font-sans text-[24px] text-foreground">{project.name}</h2>
                    <span className="font-mono text-[10px] uppercase tracking-widest border border-primary/60 text-primary px-2 py-0.5">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-[12px] leading-5 text-muted-foreground max-w-[560px]">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" }) + " shrink-0"}
                >
                  view on github ↗
                </a>
              </div>
            ))}
          </div>

          {/* Contribute CTA */}
          <div className="border border-t-0 border-border px-6 py-8 sm:px-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">get involved</p>
            <h3 className="mt-2 font-sans text-[28px] sm:text-[34px] leading-tight text-foreground">
              Want to build something with us?
            </h3>
            <p className="mt-3 font-mono text-[12px] leading-6 text-muted-foreground max-w-[520px]">
              Come to a meetup and pitch your idea, or open a discussion on GitHub. We build in the open — contributors welcome at any level.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="https://github.com/devpev"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Browse GitHub ↗
              </a>
              <Link href="/events" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Come to a meetup
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
