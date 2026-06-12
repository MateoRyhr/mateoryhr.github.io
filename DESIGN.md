# Design System — Mateo Ryhr Portfolio

> This document defines the visual design system of the portfolio.
> Every color, font, spacing, and interaction is documented here
> so that any agent or contributor can maintain visual consistency.

---

## 1. Design Philosophy

**"Professional Clarity"** — The portfolio is designed to communicate
competence, trustworthiness, and technical skill in a way that resonates
with both technical hiring managers and non-technical HR professionals.
Clean, minimal, and accessible — the design steps back so the work speaks.

| Pillar | Description |
|--------|-------------|
| **Light-first** | Clean white/light background (`#FAFAFA`) — familiar, professional, print-like |
| **Typography-driven** | Hierarchy and whitespace do the heavy lifting, not decorative elements |
| **Trustworthy blues** | Blue accents evoke reliability, professionalism, and clarity |
| **Subtle elegance** | Soft shadows, refined borders, no neon or glow effects |
| **Content-forward** | The projects and skills are the focus — the UI is invisible |

---

## 2. Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-main` | `#FAFAFA` | Main background (warm off-white, easier on the eyes than pure white) |
| `--bg-card` | `#FFFFFF` | Card and container backgrounds |
| `--bg-muted` | `#F3F4F6` | Subtle background for sections or hover states |
| `--text-primary` | `#1F2937` | Primary text (dark slate, high contrast but softer than pure black) |
| `--text-secondary` | `#6B7280` | Secondary text, descriptions, metadata |
| `--text-tertiary` | `#9CA3AF` | Placeholder/disabled text, subtle labels |
| `--border-light` | `#E5E7EB` | Borders, dividers, card outlines |
| `--border-hover` | `#D1D5DB` | Border on hover state |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#2563EB` | Primary accent: links, buttons, key highlights |
| `--accent-primary-dark` | `#1D4ED8` | Hover state for primary accent |
| `--accent-primary-light` | `#DBEAFE` | Subtle background for highlighted elements |
| `--accent-success` | `#059669` | Success indicators, tech tags, positive signals |

### Derived Colors (used inline with `rgba()`)

| Context | Value | Usage |
|---------|-------|-------|
| Card shadow | `rgba(0, 0, 0, 0.04)` | Subtle card elevation |
| Card shadow hover | `rgba(0, 0, 0, 0.08)` | Slightly deeper shadow on hover |
| Button shadow | `rgba(37, 99, 235, 0.2)` | Primary button glow |
| Overlay | `rgba(0, 0, 0, 0.02)` | Very subtle section background shift |

---

## 3. Typography

### Font Stack

```
--font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

Inter is chosen for its excellent readability at various sizes, its
professional appearance, and its availability as a variable font (light
weight = smaller file).

### Type Scale

| Usage | Font | Weight | Size | Line Height | Letter Spacing |
|-------|------|--------|------|-------------|----------------|
| Name / Hero heading (h1) | Inter | 700 (Bold) | `clamp(2.2rem, 4vw, 3.5rem)` | 1.15 | `-0.02em` |
| Section title (h2) | Inter | 600 (Semibold) | `clamp(1.5rem, 2.5vw, 2rem)` | 1.25 | `-0.01em` |
| Card title (h3) | Inter | 600 | `1.25rem` | 1.3 | `0` |
| Detail subtitle (h4) | Inter | 600 | `1.1rem` | 1.35 | `0` |
| Body text | Inter | 400 (Regular) | `1rem` | 1.6 | `0` |
| Body large (hero description) | Inter | 400 | `1.125rem` | 1.6 | `0` |
| Small / metadata | Inter | 400 | `0.875rem` | 1.5 | `0` |
| Caption / tags | Inter | 500 (Medium) | `0.8rem` | 1.4 | `0.01em` |
| Code / tech tags | JetBrains Mono | 500 | `0.8rem` | 1.4 | `0` |
| Button text | Inter | 600 | `0.9rem` | 1 | `0.01em` |
| Nav / links | Inter | 500 | `0.9rem` | 1 | `0` |

### Import

Fonts are imported once in `src/App.css` via Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

---

## 4. Spacing & Layout

### Spacing Scale

A consistent 4px spacing scale is used throughout:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` (8px) | Tight gaps, icon spacing |
| `--space-sm` | `1rem` (16px) | Component internal padding |
| `--space-md` | `1.5rem` (24px) | Between related elements |
| `--space-lg` | `2rem` (32px) | Section to card, card padding |
| `--space-xl` | `3rem` (48px) | Between major sections |
| `--space-2xl` | `5rem` (80px) | Page section separation |

### Container Widths

| Context | Value |
|---------|-------|
| Page content max-width | `1024px` |
| Text content max-width | `720px` (for readability) |
| Card max-width | `480px` |

### Breakpoints

| Breakpoint | Target |
|------------|--------|
| `max-width: 768px` | Tablet / small laptop |
| `max-width: 640px` | Large phone |
| `max-width: 480px` | Small phone |

### Layout Patterns

- **Sections**: centered container with `max-width: 1024px`, `padding: var(--space-2xl) var(--space-lg)`, and `margin: 0 auto`
- **Grids**: `display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))` with `gap: var(--space-lg)`
- **Whitespace**: generous padding around all content — nothing feels cramped
- **Vertical rhythm**: consistent `margin-bottom` using the spacing scale

---

## 5. Component Design

### 5.1 ProfileHeader (Hero)

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│    ┌──────────┐                                             │
│    │  Photo   │  Mateo Ryhr                                 │
│    │ (circle) │  Fullstack Backend Developer                │
│    │          │  React & React Native                       │
│    └──────────┘                                             │
│                                                             │
│    Specialized in scalable API architecture with Node.js    │
│    and cross-platform application development. Passionate   │
│    about building complete solutions from database design   │
│    to end-user experience.                                  │
│                                                             │
│    [View Projects]  [GitHub Profile]                        │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Visual details:**
- Profile photo: 140px × 140px, circular (`border-radius: 50%`), with a subtle border (`3px solid var(--border-light)`)
- Name: largest text on page (h1), bold, `var(--text-primary)`, prominent
- Title: `var(--text-secondary)`, regular weight, below name
- Description: `var(--text-secondary)`, max-width 640px, generous bottom margin
- Primary CTA: `var(--accent-primary)` blue background, white text, rounded (`8px`), with subtle hover darkening
- Secondary CTA: white background, `var(--accent-primary)` border and text
- Layout: photo left, text right on desktop; stacked vertically on mobile

### 5.2 Skills Cards

```
┌─────────────────────────┐
│  📱  Mobile Development │  ← icon + title, no bottom border
│─────────────────────────│
│  React Native           │  ← clean tags, medium weight
│  Expo                   │
│  UI/UX Mobile           │
│  Play Store Deploy      │
└─────────────────────────┘
```

**Visual details:**
- Card: white background (`#FFFFFF`), soft shadow (`0 1px 3px rgba(0,0,0,0.04)`), `10px` border-radius
- Hover: subtle shadow elevation (`0 4px 12px rgba(0,0,0,0.08)`), slight translateY(-2px)
- Header: icon (`1.4rem`) + category title (`var(--text-primary)`, semibold), no separator, just `gap: 0.6rem`
- Tags: `var(--accent-primary)` text on `var(--accent-primary-light)` background, `6px` border-radius, `0.3rem 0.7rem` padding, clean pill shape
- Grid: `auto-fit, minmax(260px, 1fr)`

### 5.3 Project Cards

```
┌──────────────────────────────────────┐
│  Project Title                        │
│  Category • Category                  │
│                                      │
│  Brief description of the project    │
│  that explains what it does and      │
│  the problem it solves.              │
│                                      │
│  React Native  Kotlin               │  ← clean pill tags
│                                      │
│  ─────────────────────────────────  │  ← subtle divider
│  Details & Architecture  →          │  ← blue link
│  GitHub  Web  Play Store            │  ← inline links
└──────────────────────────────────────┘
```

**Visual details:**
- Card: white background, `12px` border-radius, `1.8rem` padding, soft shadow (`0 1px 3px rgba(0,0,0,0.04)`)
- Hover: shadow deepens (`0 8px 25px rgba(0,0,0,0.08)`), slight lift (`translateY(-3px)`), no border color change
- Title: `var(--text-primary)`, semibold, `1.25rem`
- Category: `var(--text-tertiary)`, small, `•` separator between multiple categories
- Description: `var(--text-secondary)`, `0.95rem`, clean paragraph
- Tech tags: `var(--accent-primary)` text on very light blue background (`var(--accent-primary-light)`), `6px` radius, pill shape
- "Details": `var(--accent-primary)` blue link with `→` arrow, no border, no button — just a styled link
- Links section: separated by `1px solid var(--border-light)` divider, inline horizontal layout
- Links: `var(--text-secondary)` color, clean underline-on-hover, no console prefix
- Empty Play Store: shown as disabled/placeholder text instead of italic
- Grid: `auto-fit, minmax(340px, 1fr)`, `1.5rem` gap

### 5.4 ProjectDetail

```
←  Back to Portfolio          (top left, secondary text)

Project Name                  (h1, primary text)
Category                      (small, tertiary text)

Brief description paragraph   (secondary text, max 720px)

Node.js  React  PostgreSQL    (clean pill tags)

───

## Engineering & Technical Challenges

1. Challenge Title             (bold, primary text)
   Context paragraph explaining the problem.
   • Solution item in plain text
   • Another solution item

[View on GitHub]              (primary button, blue)
```

**Visual details:**
- Page: white/light background, generous padding
- Back link: `var(--text-secondary)` with `←` arrow, underline on hover, blue on hover
- Header block: no left border accent — just clean stacked typography
- Title: `clamp(2rem, 3.5vw, 2.8rem)`, bold, `var(--text-primary)`
- Section divider: thin `1px solid var(--border-light)` line
- Technical sections: clean numbered titles with standard bullet lists (`•`)
- Bullet items: standard `•` disc (no console prefix)
- Code references: `JetBrains Mono` inline only for actual code/CLI snippets
- Tech badges: same pill style as project cards (blue on light blue)
- Links section: white card, subtle shadow, secondary button style

### 5.5 Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  © 2025 Mateo Ryhr. Built with React.                       │
│                                                              │
│  LinkedIn  •  GitHub  •  mateoryhr29@gmail.com              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Visual details:**
- Background: `#FFFFFF` (matching cards), with `1px solid var(--border-light)` top border
- Padding: `2.5rem 2rem`
- Layout: two rows — copyright on top, links below
- Text: `var(--text-tertiary)`, small and unobtrusive
- Links: `var(--text-secondary)`, `•` separator between them, `var(--accent-primary)` on hover
- Email: same styling as other links (no special blue/monospace treatment)
- No status indicator, no pulsing dots, no system status text
- Mobile: single column, centered

---

## 6. Interaction States

### Transition Standard

All hover/focus transitions: `0.2s ease` (snappier, more professional feel than 0.3s).

### Card Interactions

| Element | Normal | Hover | Focus |
|---------|--------|-------|-------|
| Project/Skill card | White bg, soft shadow | Elevated shadow, lift 3px | Same as hover |
| Primary button | Blue fill, white text | Darker blue (`var(--accent-primary-dark)`) | Ring outline |
| Secondary button | White bg, blue border+text | Light blue bg (`var(--accent-primary-light)`) | Ring outline |
| Text link | `var(--accent-primary)` | Underline | Underline + ring |
| Inline link (cards) | `var(--text-secondary)` | `var(--accent-primary)`, underline | — |
| Back button | `var(--text-secondary)` | `var(--accent-primary)`, underline | — |
| Tech tag | Blue text on light blue bg | Slightly darker bg | — |

### Shadow Scale

```css
/* Card — normal */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

/* Card — hover */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

/* Button — primary */
box-shadow: 0 2px 6px rgba(37, 99, 235, 0.2);
```

### Focus States

- All interactive elements have visible focus indicators
- Buttons and links: `outline: 2px solid var(--accent-primary)` with `outline-offset: 2px`
- Cards (if clickable): same outline pattern

---

## 7. CSS Architecture

### Variable Sources

| File | What it defines |
|------|----------------|
| `src/App.css` `:root` | All design tokens (colors, fonts, spacing, shadows) |
| `src/components/*.css` | Component-scoped styles referencing `var(--*)` tokens |

### File Organization

```
src/App.css               → CSS reset, :root variables, typography, shared utilities
src/index.css              → Legacy entry CSS (migrate to App.css gradually)
src/styles/variables.css   → Removed or merged into App.css
src/components/*.css       → Component-scoped styles (one per component)
```

### CSS Coding Patterns

**Good (uses variables):**
```css
.skill-tag {
  color: var(--accent-primary);
  background: var(--accent-primary-light);
  font-family: var(--font-sans);
}
```

**Good (clean shadows):**
```css
.project-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}
```

**Bad (terminal holdovers):**
```css
.link::before {
  content: "> "; /* Remove console prefix */
}
```

**Bad (neon/glow effects):**
```css
button {
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.2); /* Remove glow */
}
```

---

## 8. Responsive Behavior

| Component | Mobile (< 768px) | Desktop (≥ 768px) |
|-----------|------------------|-------------------|
| ProfileHeader | Stack vertically, center text | Photo left, text right |
| Profile image | 110px circle | 140px circle |
| Skills grid | Single column | Multi-column (auto-fit) |
| Projects grid | Single column | Multi-column (auto-fit) |
| Footer links | Stack vertically with `•` sep | Horizontal row |
| ProjectDetail | Standard padding | Wider content area |
| Buttons | Full-width on very small screens | Inline |
| Section padding | `3rem 1rem` | `5rem 2rem` |

---

## 9. Iconography

- **Skill icons**: Emoji icons (⚙️, 💻, 📱, 🧠, 🤝) — kept from previous design, they add warmth
- **Navigation indicator**: `→` arrow character on "Details" link — standard, clean
- **Separator**: `•` middle-dot between categories and footer links
- **No console prefixes** (`>` removed from all links and list items)
- **No pulsing indicators** (status dot removed from footer)
- **No decorative icons** — content is the decoration
- **All icons are inline text or emoji** — no external icon libraries

---

## 10. Design Rules Summary

1. **Always use `var(--*)` for colors, spacing, and fonts** — never hardcode values
2. **Light background is the default** — white cards on warm off-white (`#FAFAFA`)
3. **Blue is the primary accent** — `#2563EB` for links, buttons, highlights
4. **No neon, no glow, no terminal aesthetic** — professional subtlety
5. **Cards use shadows, not colored borders** — elevation indicates interactivity
6. **Transitions are `0.2s ease`** — snappier, more refined
7. **Standard typography hierarchy** — no monospace for decorative elements
8. **No console prefixes** (`>` removed) — links are clean text
9. **Generous whitespace** — let content breathe
10. **Content-forward** — the UI should be invisible; projects and skills speak first
11. **Accessible by default** — sufficient color contrast, visible focus states, semantic HTML
12. **All interactive elements have hover and focus states** — nothing feels dead
