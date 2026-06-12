# Conventions — Coding Style Rules

> This file defines the coding conventions for the Mateo Ryhr portfolio:
> React + Vite with CSS Custom Properties. This is a **static SPA** —
> no backend, no database, no API.

---

## 1. File Organization

### Project Layout

```
mateoryhr.github.io/
├── public/                   # Static assets served as-is (favicon, ads.txt)
├── src/                      # React application source
│   ├── assets/               # Images and binary assets (profile photo, SVGs)
│   ├── components/           # Reusable UI components
│   │   ├── ComponentName.jsx
│   │   └── ComponentName.css   # Component-scoped styles
│   ├── data/                 # Static data files (portfolio content)
│   │   ├── projects.js
│   │   └── skills-data.js
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Route-level page components
│   │   └── Home.jsx
│   ├── styles/               # Global style foundation
│   │   └── variables.css
│   ├── App.jsx               # Root component with routing
│   ├── App.css               # Global styles, CSS variables, shared classes
│   ├── index.css             # Entry CSS (legacy — keep minimal)
│   ├── index.jsx             # Entry point 1 (legacy)
│   └── main.jsx              # Entry point 2 (React 19 createRoot)
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

---

## 2. Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Component files | PascalCase + `.jsx` | `ProfileHeader.jsx` |
| Component CSS | PascalCase + `.css` | `ProfileHeader.css` |
| Page files | PascalCase + `.jsx` | `Home.jsx` |
| Hook files | `use` + camelCase + `.js` | `useScrollPosition.js` |
| Data files | camelCase + `.js` | `projects.js`, `skills-data.js` |
| CSS files (global) | kebab-case + `.css` | `variables.css` |
| CSS classes | kebab-case (BEM-lite) | `.profile-header-container`, `.tech-stack` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |

---

## 3. JavaScript/JSX Conventions

- **No TypeScript** — this project uses plain JavaScript (JSX). Avoid type annotations.
- **React 19** — use functional components only. No class components.
- **One component per file.** File name matches component name.
- **Props** via destructuring at the function signature. Document expected props with JSDoc when non-obvious.
- **`children`** typed loosely via `prop-types` if needed, or just documented.
- **Extract logic into custom hooks** when reused across components (e.g., `src/hooks/`).
- **Avoid prop drilling** beyond 2 levels — use React Context or component composition.
- **No inline styles** except for truly dynamic values computed from props (use CSS classes with custom properties).

### React Component Template

```jsx
import React from 'react';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <section className="component-name-container">
      <h2>{prop1}</h2>
      <p>{prop2}</p>
    </section>
  );
};

export default ComponentName;
```

---

## 4. CSS Conventions

### CSS Architecture (Custom Properties)

This project uses **CSS Custom Properties** (not Tailwind CSS, not Sass). The design system lives in CSS variables.

**Global variables** are defined in `src/App.css` (`:root`):

```css
:root {
  --bg-dark: #0F172A;
  --bg-card: #1E293B;
  --text-main: #F8FAFC;
  --text-muted: #94A3B8;
  --accent-cyan: #22D3EE;
  --accent-green: #10B981;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### CSS Rules

- **Component-scoped CSS files**: each component gets its own `.css` file in `src/components/`.
- **No global class name collisions**: prefix classes with component name (e.g., `.profile-image`, `.skill-card`).
- **Use `clamp()`** for fluid typography: `font-size: clamp(2.5rem, 5vw, 4rem)`.
- **Mobile-first responsive design**: use `@media (max-width: 768px)` for overrides.
- **Transitions**: standardize on `0.3s ease` for hover/focus transitions.
- **No `!important`** — use specificity instead.
- **Dark theme** is the default (and only) theme. No light mode.
- **Hover effects** on interactive cards: translateY(-5px) + border color change.
- **Box shadows** use `rgba()` with low opacity for glow effects.

---

## 5. Component Architecture

### Component Hierarchy

```
App.jsx (BrowserRouter)
├── Home.jsx
│   ├── ProfileHeader.jsx    — Hero section with photo, name, CTAs
│   ├── Skills.jsx           — Skill categories grid
│   ├── Projects.jsx         — Project cards grid
│   └── AutomationDemo.jsx   — Interactive n8n webhook demo form
└── ProjectDetail.jsx        — Full project breakdown (route: /proyecto/:id)
Footer.jsx                   — Global footer (in App.jsx layout)
```

### Component Responsibilities

| Component | Responsibility |
|-----------|----------------|
| `ProfileHeader` | Hero: photo, name, title, description, CTA buttons |
| `Skills` | Grid of skill category cards, each with icon, title, and tag list |
| `Projects` | Grid of project cards with title, tech stack, links, read-more |
| `ProjectDetail` | Full technical breakdown of one project with challenges and solutions |
| `AutomationDemo` | Interactive demo form: POSTs to n8n webhook, shows loading/success/error states |
| `Footer` | Copyright, social links |

---

## 6. Data Management

- **All content is static.** Portfolio data lives in `src/data/` as JavaScript arrays/objects.
- **No fetch/axios calls.** No API endpoints. No async data loading.
- **Import data directly** into components:
  ```jsx
  import { projects } from '../data/projects';
  import { skills } from '../data/skills-data';
  ```
- **Project IDs** are integers matched via `useParams()` from React Router.

---

## 6b. External Webhook Calls

- **Forms that POST to external webhooks are permitted** for demo/interactive features.
- The webhook URL **must** be defined in `src/data/config.js` as a named export, never hardcoded in components.
- Use `fetch()` with `POST` method, `Content-Type: application/json`, and proper error handling (try/catch).
- Show loading, success, and error states to the user. Never leave the UI hanging.
- The portfolio must remain fully functional if the webhook is unreachable (graceful degradation).
- No authentication tokens, API keys, or secrets in client-side code.
- CORS must be configured on the external endpoint; document this in the architecture docs.

---

## 7. Routing Conventions

- **React Router v7** with `BrowserRouter` in `App.jsx`.
- Routes:
  - `/` → `<Home />` (ProfileHeader + Skills + Projects)
  - `/proyecto/:projectId` → `<ProjectDetail />`
- Use `<Link>` for internal navigation, `<a>` for external links.
- Back navigation uses `<Link to="/">`.

---

## 8. Line Limits

| File Type | Limit |
|-----------|-------|
| React component (`.jsx`) | 200 lines |
| CSS files (`.css`) | 200 lines |
| Data files (`.js`) | 200 lines |
| Page components | 100 lines |

---

## 9. Linting & Formatting

| Scope | Tool | Config |
|-------|------|--------|
| JS/JSX linting | ESLint | `eslint.config.js` (root) |
| React hooks linting | `eslint-plugin-react-hooks` | Included in config |
| Build | Vite | `vite.config.js` |

### Key Scripts

```bash
npm run dev       # Vite dev server
npm run build     # Production build (outputs dist/)
npm run lint      # ESLint check
npm run preview   # Preview production build locally
```

---

## 10. Accessibility

- **Semantic HTML5** elements: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`.
- **Proper heading hierarchy**: one `<h1>`, followed by `<h2>`, `<h3>`.
- **Alt text** on all images (`<img alt="...">`).
- **Link text** is descriptive (not "click here").
- **Color contrast**: text on dark backgrounds meets WCAG AA (use muted colors only for decorative/optional text).
- **Focus styles**: visible focus indicators on all interactive elements.
- **ARIA** where semantic HTML is insufficient (e.g., `aria-label` on icon-only links).

---

## 11. Git Conventions

### Commit Messages

```
feat: add ProfileHeader hero section with console greeting
fix: correct mobile layout in Skills grid
style: update accent colors in CSS variables
docs: add DESIGN.md with visual style guide
refactor: extract tech stack into reusable component
```

### Branch Naming

```
feat/profile-hero
feat/skills-section
fix/mobile-layout
docs/design-system
```
