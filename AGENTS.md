# Project — AI Agent Navigation Map

> This file is the **entry point** for any agent working in this
> repository. It is NOT a rule book: it is a **map**. Read only what
> you need when you need it (progressive disclosure).

---

## 1. Before Starting (mandatory)

1. Read `feature_list.json` and verify: maximum 1 feature in `in_progress`,
   all statuses are valid (`pending`, `in_progress`, `done`, `blocked`).
2. Read `progress/current.md` to understand the state left from the last session.
3. Read `feature_list.json` and pick **one** task with status `pending`. Do
   not work on more than one at a time.

---

## 2. Project Summary

- **Project name:** Mateo Ryhr — Portfolio
- **Description:** Personal portfolio website showcasing software engineering projects, skills, and technical architecture. Built with React and deployed via GitHub Pages.
- **Technology stack:** React 19, Vite 8, React Router v7, CSS Custom Properties, ESLint, Babel (React Compiler)
- **Target platform:** Web browser (static single-page application)
- **Deployment:** GitHub Pages (`mateoryhr.github.io`)
- **Input method:** Static data files (`src/data/`) power the UI; no API backend

---

## 3. Repository Map

| File / folder                | What it contains                                          | When to read it |
|------------------------------|-----------------------------------------------------------|-----------------|
| `feature_list.json`          | Task list with status (pending/in_progress/done)          | Always, at start |
| `progress/current.md`        | Current session state                                     | Always, at start |
| `progress/history.md`        | Append-only log of previous sessions                      | If you need historical context |
| `docs/01-conventions.md`   | Coding style rules for JSX, CSS, React, and project structure | Before writing code |
| `docs/02-architecture.md` | System architecture: React SPA → GitHub Pages          | Before implementing |
| `docs/verification.md`    | How to verify your work works                             | Before declaring a task `done` |
| `CHECKPOINTS.md`          | Objective criteria for "correct final state"              | For self-evaluation |
| `DESIGN.md`               | Visual design system: colors, typography, components      | Before styling/UI work |
| `.opencode/agents/`        | Subagent definitions (leader, implementer, reviewer, explorer) | If orchestrating work |
| `src/`                     | React application source (Vite entry: `src/index.jsx`)    | To implement features |
| `src/components/`          | Reusable React components (ProfileHeader, Skills, Projects, ProjectDetail, Footer) | To implement UI |
| `src/pages/`               | Route-level page components (Home)                        | To add/change routes |
| `src/data/`                | Static data files (projects.js, skills-data.js)           | To update portfolio content |
| `src/styles/`              | Global CSS variables and style foundation (variables.css) | For design tokens |
| `src/assets/`              | Static images and icons (hero, profile, SVG assets)       | For visual assets |
| `public/`                  | Static public files (favicon, ads.txt)                    | For site metadata |

---

## 4. Hard Rules (non-negotiable)

- **One feature at a time.** Do not mix changes from multiple tasks in the same session.
- **Do not declare a task `done` without review.** The reviewer must approve and you
  must verify the work functions.
- **Document what you do** in `progress/current.md` as you work, not at the end.
- **Leave the repository clean** before closing the session (see §6).
- **If you don't know something, look in `docs/`** before inventing it.
- **Keep components focused.** If a file exceeds the line limit defined in your conventions, split it.
- **Never commit secrets.** Use environment variables if needed and keep `.env` out of version control.
- **Semantic HTML and accessibility** are required for all components (proper headings, ARIA attributes, keyboard navigation where applicable).

---

## 5. How to Pick a Task

```
1. Open feature_list.json
2. Filter by status == "pending"
3. Pick the one with the lowest "id"
4. Change its status to "in_progress" and save
5. Note in progress/current.md: feature, start time, brief plan
```

---

## 6. Session Close (lifecycle)

Before finishing:

1. If the task is done: mark `status: "done"` in `feature_list.json`.
2. Move the summary from `progress/current.md` to the end of `progress/history.md`.
3. Empty `progress/current.md` leaving only the template.
4. Do not leave temporary files, debug print statements, or TODOs without context.

---

## 7. If You Get Blocked

- Re-read the relevant section of `docs/`.
- If you cannot proceed, **do not invent a workaround**:
  document the blockage in `progress/current.md` and stop the session.

---

## 8. Available Subagents

The leader (main agent) can launch the following subagents:

| Subagent | Role | Tools |
|----------|------|-------|
| `implementer` | Writes code in `src/`, creates components, implements features | read, write, edit, glob, grep, bash, task |
| `reviewer` | Validates code against conventions and checkpoints | read, glob, grep, bash |
| `explorer` | Researches APIs, libraries, best practices | read, glob, grep, bash, websearch, webfetch |

### Effort Scaling

| Complexity | Subagents |
|-------------|-----------|
| Trivial (1 component) | 1 implementer |
| Medium (2-3 components across features) | 1 implementer + 1 reviewer |
| Complex (prior research needed) | 1 explorer → 1 implementer → 1 reviewer |
| Very complex | Split into sub-tasks and reapply |

---

## 9. Quick Architecture

```
┌──────────────────────────────────┐
│        GitHub Pages              │
│  (Static Hosting + CDN)          │
└──────────┬───────────────────────┘
           ↕ HTTP (prebuilt static files)
┌──────────────────────────────────┐
│     React SPA (Vite Build)       │
│  src/                            │
│  ├── pages/Home.jsx              │
│  ├── components/                 │
│  │   ├── ProfileHeader.jsx       │
│  │   ├── Skills.jsx              │
│  │   ├── Projects.jsx            │
│  │   ├── ProjectDetail.jsx       │
│  │   └── Footer.jsx              │
│  └── data/                       │
│      ├── projects.js             │
│      └── skills-data.js          │
└──────────────────────────────────┘
```

**Key characteristic:** This is a **static SPA**. There is no backend server, no database, no API. All content is served from prebuilt static files. React Router handles client-side navigation. GitHub Actions or `gh-pages` handles deployment.

See `docs/02-architecture.md` for full details.

---

## 10. Deployment Context

- **Hosting:** GitHub Pages via `gh-pages` branch or GitHub Actions
- **Build command:** `npm run build` (produces `dist/`)
- **Base URL:** `/` (deployed at custom domain or `mateoryhr.github.io`)
- **No backend services:** This is a static portfolio; no Express, no databases
- **CI/CD:** GitHub Actions workflow or manual `npm run deploy` (configured as needed)
