# Design System — Mateo Ryhr Portfolio

> This document defines the visual design system of the portfolio.
> Every color, font, spacing, and interaction is documented here
> so that any agent or contributor can maintain visual consistency.

---

## 1. Design Philosophy

**"Terminal Modern"** — The portfolio blends a developer's terminal aesthetic
with a sleek, modern dark-mode UI. It evokes the feeling of a developer's
workspace: dark backgrounds, glowing accents, monospaced code elements,
and subtle tech-inspired patterns.

| Pillar | Description |
|--------|-------------|
| **Dark-first** | Deep navy/charcoal background (`#0F172A`) — no light mode |
| **Console cues** | `>` prefix, green terminal accent, monospace fonts for tech elements |
| **Tech glow** | Cyan and green neon-like glow effects on hover and focus |
| **Card-based** | Content organized in elevated cards with subtle borders |
| **Data-driven** | UI rendered from static JS data files — no hardcoded content |

---

## 2. Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-dark` | `#0F172A` | Main background (deep navy) |
| `--bg-card` | `#1E293B` | Card backgrounds, slightly lighter than main bg |
| `--text-main` | `#F8FAFC` | Primary text (off-white) |
| `--text-muted` | `#94A3B8` | Secondary text, descriptions, metadata |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-cyan` | `#22D3EE` | Primary accent: buttons, links, borders, code highlights |
| `--accent-green` | `#10B981` | Secondary accent: tech tags, console text, success indicators |

### Derived Colors (used inline with `rgba()`)

| Context | Value | Usage |
|---------|-------|-------|
| Card border | `rgba(255, 255, 255, 0.05)` | Subtle card outlines on dark bg |
| Card border hover | `var(--accent-cyan)` | Cyan border on card hover |
| Tech tag bg | `rgba(16, 185, 129, 0.1)` | Green-tinted background for tech badges |
| Tech tag border | `rgba(16, 185, 129, 0.2)` | Subtle green border on tech badges |
| Cyan glow | `rgba(34, 211, 238, 0.2)` | Button and image glow effects |
| Separator | `rgba(255, 255, 255, 0.1)` | Dividers between sections |
| Category text | `#D8B4FE` | Project category labels (light purple) |
| Link color | `#4fc1ff` | Footer email link (blue) |
| Terminal dot | `#27c93f` | Status indicator dot (green) |

---

## 3. Typography

### Font Stack

```
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', Consolas, monospace;
```

| Usage | Font | Weight | Size |
|-------|------|--------|------|
| Headings (h1) | Inter | 800 (ExtraBold) | `clamp(2.5rem, 5vw, 4rem)` |
| Section titles (h2) | Inter | 800 | `clamp(1.8rem, 3vw, 2rem)` |
| Card titles (h3) | Inter | 800 | 1.6rem |
| Body text | Inter | 400 (Regular) | 1.125rem |
| Muted body | Inter | 400 | 1.05rem |
| Console prefix | JetBrains Mono | 700 (Bold) | 1.1rem |
| Tech tags | JetBrains Mono | 400 | 0.8rem – 0.9rem |
| Buttons | JetBrains Mono | 700 | 0.9rem |
| Navigation links | JetBrains Mono | 600 | 0.9rem |
| Detail headings | JetBrains Mono | — | 1.4rem |

### Import

Fonts are imported once in `src/App.css` via Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');
```

---

## 4. Spacing & Layout

### General Spacing

| Context | Value |
|---------|-------|
| Page max width | 1000px – 1126px (centered) |
| Section padding | `2rem` horizontal, `4rem – 8rem` vertical |
| Card padding | `2rem – 2.5rem` |
| Grid gap | `2rem – 2.5rem` |
| Component gap | `1.25rem – 1.5rem` |

### Breakpoints

| Breakpoint | Target |
|------------|--------|
| `max-width: 768px` | Tablet / small laptop |
| `max-width: 600px` | Large phone |
| `max-width: 480px` | Small phone |

### Layout Patterns

- **Sections**: centered container with `max-width: 1000px` and `margin: 0 auto`
- **Grids**: `display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`
  — auto-responsive, no media query needed for column count
- **Flexbox**: used for inline layouts (buttons, links, card headers)
- **Vertical rhythm**: controlled by `margin-bottom` on headings and paragraphs

---

## 5. Component Design

### 5.1 ProfileHeader (Hero)

```
┌────────────────────────────────────────────┐
│        ┌──────────┐                        │
│        │  Photo   │  > console.log(...)    │
│        │ (circle) │                        │
│        └──────────┘  Mateo Ryhr            │
│                       Fullstack Backend Dev │
│                       │ React & React Native│
│                                              │
│                       Description paragraph │
│                                              │
│  [Explorar Proyectos]  [GitHub]             │
└────────────────────────────────────────────┘
```

**Visual details:**
- Profile photo: 180px × 180px, circular (`border-radius: 50%`), green border (`4px solid var(--accent-green)`), cyan glow (`box-shadow: 0 0 25px rgba(16, 185, 129, 0.15)`)
- Console greeting: green `var(--accent-green)`, monospace font, `>` prefix
- Name: extra large clamp font, off-white
- Title: muted gray, regular weight, cyan pipe separator
- Description: muted, max-width 650px, strong elements in white
- Primary button: cyan filled bg → transparent on hover (bg swap)
- Secondary button: transparent with white border → brighter on hover

### 5.2 Skills Cards

```
┌──────────────────────┐
│  [icon]  Category    │  ← header with bottom border
├──────────────────────┤
│  Tag1  Tag2  Tag3    │  ← flex-wrap, monospace tags
│  Tag4  Tag5         │
└──────────────────────┘
```

**Visual details:**
- Card: `--bg-card` background (1px border, `rgba(255,255,255,0.05)`, 8px radius)
- Hover: lift 5px (`translateY(-5px)`), accent border color
- Header: icon (1.5rem) + category title, bottom border separator
- Tags: monospace, green text on green-tinted background (`rgba(99,102,241,0.1)`), 4px radius
- Grid: `auto-fit, minmax(240px, 1fr)`

### 5.3 Project Cards

```
┌──────────────────────────────────────┐
│  Project Title                        │
│  category-label                       │
│                                      │
│  Description paragraph               │
│                                      │
│  Tech1 | Tech2 | Tech3              │  ← green monospace
│                                      │
│  [Ver Detalles y Arquitectura →]    │  ← cyan dashed btn
│  ─────────────────────────────────  │  ← separator line
│  > GitHub                            │  ← console-prefix links
│  > Web                               │
│  > En fase de pruebas...            │  ← italic if empty
└──────────────────────────────────────┘
```

**Visual details:**
- Card: `--bg-card`, 12px radius, 2.5rem padding, 1px subtle border
- Hover: lift 5px, border turns cyan
- Title: 1.6rem, bold, off-white
- Category: `#D8B4FE` (purple), monospace, uppercase-ish
- Tech stack: green items (`var(--accent-green)`), muted ` | ` separators, monospace
- "Ver Detalles": cyan dashed border → solid on hover, shifts right 5px
- Links section: separated by `1px solid rgba(255,255,255,0.1)` divider
- All links have `> ` console prefix in muted color, turn cyan on hover
- Empty Play Store: italic muted text instead of link
- Grid: `auto-fit, minmax(320px, 1fr)`, 2.5rem gap

### 5.4 ProjectDetail

```
← Volver al portafolio          (top left, muted)

┌── (cyan left border, 4px)
│  CATEGORY                     (purple, uppercase mono)
│  Project Title                (large clamp h1)
│  Description                  (muted, 700px max)
│
│  [Tech] [Badge] [Badge]      (green badges)
└──

## Ingeniería y Desafíos Técnicos

1. TITLE IN CYAN UPPERCASE     (ordered list)
   Italic description
   > Item bullet               (green > prefix)
   > Item bullet

[Ver Código en GitHub]         (secondary button)
```

**Visual details:**
- Page: full `min-height: 100vh`, dark bg
- Back button: muted, monospace, turns cyan on hover
- Header block: 4px cyan left border, 2rem left padding
- Category: purple (#D8B4FE), uppercase, monospace, letter-spaced
- Title: `clamp(2.5rem, 5vw, 3.5rem)`, bold
- Section h2: `1.8rem`, bottom border separator
- Ordered list titles: cyan uppercase, inline with `ol` number
- Description text: italic, muted, left margin
- Bullet items: `>` green console prefix, no default list style
- Tech badges: green text on green-tinted bg, 4px radius, 1px border
- Links section: `--bg-card` background, 12px radius, centered

### 5.5 Footer

```
┌──────────────────────────────────────────┐
│  © 2025 — Construido con React por Mateo │
│  ● Sistema operativo: online             │  ← pulsing green dot
│                                          │
│  LinkedIn  GitHub  mateoryhr29@gmail.com │
└──────────────────────────────────────────┘
```

**Visual details:**
- Background: `#0a0a0a` (darker than main bg)
- Top border: `1px solid #222`
- Padding: `3rem 2rem`, margin-top: `4rem`
- Text color: `#888`
- Status dot: 8px green circle with pulse animation (scale + opacity)
- Email: monospace, `#007acc` blue
- Links: gray → white on hover
- Mobile: stacks vertically at 600px

---

## 6. Interaction States

| Element | Normal | Hover | Focus |
|---------|--------|-------|-------|
| Primary button | Cyan fill, dark text | Transparent, cyan text, glow | Same as hover |
| Secondary button | Transparent, white border | Solid white border, subtle bg | Same as hover |
| Project card | Default card | Lift 5px, cyan border | — |
| Skill card | Default card | Lift 5px, accent border | — |
| "Ver detalles" | Cyan dashed border | Solid fill, bg swap, shift right 5px, glow | Same as hover |
| Link (`> link`) | Muted `>` + white text | Cyan text and prefix | Same as hover |
| Back button | Muted text | Cyan text | Same as hover |

### Transition Standard

All hover/focus transitions: `0.3s ease` (unless specified otherwise).

### Glow Effect Standard

```css
box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);   /* cyan glow (buttons) */
box-shadow: 0 0 25px rgba(16, 185, 129, 0.15);  /* green glow (image) */
```

---

## 7. CSS Architecture

### Variable Sources

| File | What it defines |
|------|----------------|
| `src/App.css` `:root` | Main design tokens (bg/text/accent colors, fonts) |
| `src/styles/variables.css` | Legacy/override variables (partially unused) |

### File Organization

```
src/App.css               → Global reset, CSS variables, typography, shared classes
src/index.css              → Legacy entry CSS (keep minimal)
src/styles/variables.css   → Secondary variable definitions
src/components/*.css       → Component-scoped styles (one per component)
```

### CSS Coding Patterns

**Good (uses variables):**
```css
.skill-item {
  color: var(--accent-green);
  font-family: var(--font-mono);
}
```

**Good (rgba for specific effects):**
```css
.project-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

**Bad (hardcoded hex that should be a variable):**
```css
.some-class {
  color: #22D3EE; /* should be var(--accent-cyan) */
}
```

---

## 8. Responsive Behavior

| Component | Mobile (< 768px) | Desktop (≥ 768px) |
|-----------|------------------|-------------------|
| ProfileHeader | Stack vertically | Photo + text side by side |
| Profile image | 140px circle | 180px circle |
| Skills grid | Single column | Multi-column (auto-fit) |
| Projects grid | Single column | Multi-column (auto-fit) |
| Footer links | Stack below copyright | Horizontal layout |
| ProjectDetail header | 1rem left padding | 2rem left padding |
| Detail links | Stack vertically | Horizontal row |
| Action buttons (hero) | Center aligned | Left aligned |

---

## 9. Iconography

- **Skill icons**: Emoji icons (⚙️, 💻, 📱, 🧠, 🤝) in skill cards
- **Console prefix**: `> ` text character (not an icon) used for links and list items
- **Navigation indicator**: `→ ` arrow character on "Ver Detalles" link
- **Status indicator**: CSS-only pulsing dot (not an image)
- **No SVG icons** are currently used in the component code (only in `public/` and `src/assets/`)

---

## 10. Design Rules Summary

1. **Always use `var(--*)` for colors and fonts** — never hardcode hex values
2. **Prefer `clamp()` for font sizes** — fluid typography, no fixed sizes
3. **Cards always have hover effects** — lift + border color change
4. **Monospace for anything "code/tag/tech"** — JetBrains Mono
5. **Sans-serif for body text** — Inter
6. **Dark bg only** — no light mode, no `prefers-color-scheme: light` overrides
7. **Transitions are 0.3s ease** — consistent motion language
8. **Console prefix `>`** for links and list items — reinforces terminal theme
9. **Accent cyan for interactive elements**, accent green for static tech indicators
10. **Component-scoped CSS files** — no global class name pollution
