# Architecture — System Design

> This file defines the system architecture for the Mateo Ryhr portfolio.
> This is a **static Single-Page Application (SPA)** deployed on GitHub Pages.
> There is no backend server, no database, and no API.

---

## 1. System Overview

```
┌──────────────────────────────────────────────────┐
│                   Browser                         │
│  (Chrome, Firefox, Safari, mobile browsers)       │
└──────────────┬───────────────────────────────────┘
               ↕ HTTP (prebuilt static files)
┌──────────────┴───────────────────────────────────┐
│              GitHub Pages (CDN)                    │
│  Serves files from gh-pages branch or GitHub      │
│  Actions artifact. Custom domain or *.github.io.   │
└──────────────┬───────────────────────────────────┘
               ↕
┌──────────────┴───────────────────────────────────┐
│            React SPA (Vite build output)           │
│                                                    │
│  dist/                                             │
│  ├── index.html        ← Entry point               │
│  ├── assets/           ← Bundled JS + CSS          │
│  └── 404.html          ← SPA fallback              │
└────────────────────────────────────────────────────┘
```

### Key Properties

- **No runtime server.** All files are prebuilt during `npm run build`.
- **No API calls.** Every piece of content is imported at build time from static JS files.
- **Client-side routing.** React Router intercepts navigation; no server-side rendering.
- **Zero database.** Portfolio content lives in `src/data/projects.js` and `src/data/skills-data.js`.
- **Fully static.** Can be served from any static file host (GitHub Pages, Netlify, Vercel static).

---

## 2. React Component Architecture

### Component Tree

```
index.html
  └─ src/main.jsx (React 19 createRoot)
      └─ App.jsx
          ├─ <BrowserRouter>
          │   ├─ <Routes>
          │   │   ├─ <Route path="/" element={<Home />} />
          │   │   └─ <Route path="/proyecto/:projectId" element={<ProjectDetail />} />
          │   └─ <Footer />
          └─ </BrowserRouter>
```

### Page Components

| Page | Route | Components Used | Purpose |
|------|-------|----------------|---------|
| **Home** | `/` | ProfileHeader, Skills, Projects | Landing page with all sections |
| **ProjectDetail** | `/proyecto/:id` | (standalone) | Deep-dive into one project |

### Component Responsibilities

#### Structural Components

| Component | Type | Responsibility |
|-----------|------|----------------|
| `App.jsx` | Root | BrowserRouter setup, route definitions, layout wrapper |
| `Home.jsx` | Page | Composes ProfileHeader + Skills + Projects sections |
| `Footer.jsx` | Global | Copyright, social links, terminal status indicator |

#### Feature Components

| Component | Responsibility |
|-----------|----------------|
| `ProfileHeader.jsx` | Hero section: profile photo, name, dev title, description, CTA buttons. Terminal-style greeting. |
| `Skills.jsx` | Grid of skill categories. Data-driven from `src/data/skills-data.js`. |
| `Projects.jsx` | Grid of project cards. Data-driven from `src/data/projects.js`. Each card links to detail page. |
| `ProjectDetail.jsx` | Full technical breakdown: ordered challenges, solution lists, tech badges, external links. |

---

## 3. Data Flow

```
Static Data Files (src/data/)
├── projects.js             → Projects.jsx, ProjectDetail.jsx
└── skills-data.js          → Skills.jsx
        │
        ▼
  Direct JavaScript import (ES modules)
        │
        ▼
  Component renders DOM nodes
        │
        ▼
  User sees the portfolio
```

### No network requests
- Data is **imported at compile time**, not fetched at runtime.
- React state is used only for UI interactions (not data fetching).
- There is no loading state, no error state, no refetch logic.

---

## 4. Styling Architecture

### CSS Layers

```
Layer 0: CSS Reset (App.css — universal selector)
Layer 1: CSS Custom Properties (App.css :root, styles/variables.css)
Layer 2: Global Typography (App.css — h1, h2, p, .highlight)
Layer 3: Shared Component Classes (App.css — .btn, .project-card, .tech-tag)
Layer 4: Component-Scoped Styles (components/*.css)
Layer 5: Responsive Overrides (media queries within each CSS file)
```

### Design Token Flow

```
:root (App.css / variables.css)
  ├── Component CSS files reference var(--bg-dark), var(--accent-cyan), etc.
  ├── No hardcoded colors in component CSS (except rgba() for specific effects)
  └── Font stacks are variables too: var(--font-sans), var(--font-mono)
```

---

## 5. Routing Design

### Route Table

| URL Pattern | Component | Scroll Behavior |
|---|---|---|
| `/` | Home | Top of page |
| `/proyecto/:projectId` | ProjectDetail | Top of page |

### Navigation Patterns

- **Internal**: `<Link to="/proyecto/2">` from Projects cards.
- **Back**: `<Link to="/">` from ProjectDetail.
- **External**: `<a href="..." target="_blank" rel="noreferrer">` for GitHub, LinkedIn, Web, Play Store.
- **Anchor**: `<a href="#projects">` for same-page scroll on homepage.

### SPA Fallback

GitHub Pages does not support SPA rewrites natively. The `404.html` page in `public/` is configured to serve `index.html` so React Router can handle the route on client side. Alternatively, a GitHub Actions workflow handles the redirect.

---

## 6. Deployment Architecture

### Build Pipeline

```
npm run build
  │
  ▼
Vite bundles:
  ├── JS (React, React Router, app code) → dist/assets/
  ├── CSS (global + component, auto-scoped) → dist/assets/
  ├── index.html (injected script/link tags) → dist/
  └── Static assets (images, favicon) → dist/assets/
```

### Deploy to GitHub Pages

Two approaches:

1. **gh-pages package**: `npm run deploy` → pushes `dist/` to `gh-pages` branch.
2. **GitHub Actions**: On push to `main`, runs `npm run build` and deploys `dist/` to Pages.

### Environment

| Setting | Value |
|---------|-------|
| Vite `base` | `/` (root domain) or repo name |
| Node version | 18+ (LTS) |
| Build output | `dist/` |
| Host | `mateoryhr.github.io` |

---

## 7. No-Backend Constraints

Because there is no backend:

- **All content is immutable at runtime.** To update projects or skills, edit `src/data/` and redeploy.
- **No forms** (no contact form, no newsletter — unless using a third-party service like Formspree).
- **No user accounts** — this is a public read-only portfolio.
- **No analytics** (unless added via a third-party snippet).
- **No authentication** — not needed.

### When to Add a Backend

If future requirements demand:
- A blog with CMS
- Contact form with server-side processing
- Admin dashboard for content management
- User authentication

...then a backend would be added. Until then, the architecture remains intentionally simple.
