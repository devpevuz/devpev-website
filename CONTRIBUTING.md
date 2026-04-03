# Contributing to DevPev Website

Thanks for wanting to contribute! This project is open source and we welcome pull requests from the community.

---

## Writing a Blog Article

### 1. Create your file

Add a new `.md` file inside `articles/`. Use lowercase words separated by hyphens — no spaces.

```
articles/your-article-title-here.md
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
- Add your `.md` file to `articles/`
- Open a PR with a short description of what your article is about

---

## Posting a Job

### 1. Create your file

Add a new `.md` file inside `jobs/`. Use lowercase words separated by hyphens.

```
jobs/role-company-name.md
```

### 2. Add the required frontmatter

```yaml
---
title: "Job Title"
company: "Company Name"
location: "City, Country or Remote"
type: "full-time"
tags: ["tag1", "tag2"]
url: "https://your-application-link.com"
date: "YYYY-MM-DD"
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Role title shown in the listing |
| `company` | yes | Company or client name |
| `location` | yes | e.g. `Tashkent, Uzbekistan` or `Remote` |
| `type` | yes | `full-time` or `freelance` |
| `tags` | yes | Tech stack, e.g. `["react", "typescript"]` |
| `url` | no | Link to apply — omit if not available |
| `date` | yes | Format: `YYYY-MM-DD`, used for sorting |

### 3. Write the job description

Add the full job details in Markdown below the frontmatter — responsibilities, requirements, what you offer, etc.

```markdown
---
title: "Frontend Developer"
company: "Acme Corp"
location: "Tashkent, Uzbekistan"
type: "full-time"
tags: ["react", "typescript"]
url: "https://acme.uz/jobs"
date: "2026-04-01"
---

We are looking for a Frontend Developer to join our team.

## Responsibilities

- Build UI features with React and TypeScript
- ...

## Requirements

- 2+ years of React experience
- ...
```

### 4. Open a pull request

- Fork the repo and create a branch: `job/role-company`
- Add your `.md` file to `jobs/`
- Open a PR with a short description of the role

Jobs are reviewed by maintainers before merging. Please only post real, active positions.

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
