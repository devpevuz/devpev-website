---
title: "Building custom skills for Claude Code — what we learned at DevPev"
date: "2026-03-24"
author: "Asilbek Nazarov"
github: "@asilbek_dev"
tags: ["#ai", "#claude", "#dx"]
---

At our last meetup we spent an afternoon hacking together custom skills for Claude Code. The goal was simple: stop repeating the same instructions across projects and codify them into reusable slash commands. What followed was three hours of trial, error, and a few genuinely useful tools we now use every day.

## What is a skill, exactly?

A skill is a markdown file that lives in `.claude/skills/` in your project or globally in `~/.claude/skills/`. When you type `/skill-name` in Claude Code, the file gets expanded into the conversation as a full prompt. Think of it as a macro — the contents of the file replace the slash command before Claude ever sees it.

## The skills we built

The most immediately useful one was a `/commit` skill that enforces our team's commit message format: type, scope, short summary, and a co-authored-by line. Before this, every developer had slightly different habits. Now the output is consistent without anyone having to think about it.

We also built a `/review` skill that pulls in our internal code review checklist — security considerations, test coverage expectations, and naming conventions specific to our codebase. Claude now applies these automatically whenever we invoke it.

## What surprised us

The biggest surprise was how much context a well-written skill can encode. We started writing short, imperative prompts. They worked, but the results were inconsistent. When we rewrote them to include examples — showing Claude the before and after of what we wanted — the quality jumped noticeably.

The second surprise was how fast iteration cycles are. A skill is just a markdown file. You edit it, save it, and the next invocation uses the new version. No restart, no build step.

## What we'd do differently

Start with the CLAUDE.md file before writing skills. We wasted time writing skills that duplicated project context that should have lived in CLAUDE.md. Once we separated "always-on project context" from "on-demand actions", the structure became much cleaner.

If you're at the next DevPev meetup, bring a workflow you repeat more than twice a week. Chances are it can be a skill.
