# Contributing to DevPev Website

Thanks for wanting to contribute! This project is open source and we welcome pull requests from the community.

---

## Writing a Blog Article

### 1. Create your file

Add a new `.md` file inside `src/articles/`. Use lowercase words separated by hyphens — no spaces.

```
src/articles/your-article-title-here.md
```

### 2. Add the required frontmatter

Every article must start with this YAML block:

```yaml
---
title: "Your Article Title"
date: "YYYY-MM-DD"
author: Your Name
github: your_github_handle
tags: ["#tag1", "#tag2"]
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Shown on the blog listing and article page |
| `date` | yes | Format: `YYYY-MM-DD` |
| `author` | yes | Your full name or display name |
| `github` | yes | GitHub username without `@` |
| `tags` | yes | At least one tag, prefixed with `#` |

### 3. Write your content

Write your article in Markdown below the frontmatter block.

```markdown
---
title: "How I built X with Y"
date: "2026-03-31"
author: Asilbek Nazarov
github: asilbek_dev
tags: ["#webdev", "#opensource"]
---

Your article content goes here.

## A section heading

More content...
```

### 4. Open a pull request

- Fork the repo and create a branch: `article/your-article-slug`
- Add your `.md` file to `src/articles/`
- Open a PR with a short description of what your article is about

---

## Other Contributions

Found a bug or want to improve the site? Same flow:

1. Fork the repo
2. Create a branch: `fix/short-description` or `feat/short-description`
3. Make your changes
4. Open a PR describing what you changed and why

Please keep PRs focused — one thing per PR.

---

## Dev Setup

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

---

## Questions?

Reach us on Telegram: [@devpevuz](https://t.me/devpevuz)
