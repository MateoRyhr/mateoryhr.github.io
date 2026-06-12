# Design System — Mateo Ryhr Portfolio (Dark Terminal)

> ⚠️ **ARCHIVED** — This was the original design. Replaced by the
> professional/minimalist design. Kept for reference.
>
> Fecha de archivado: 2025-06-12

---

## Original Design: "Terminal Modern"

The portfolio blended a developer's terminal aesthetic with a sleek, modern
dark-mode UI. Dark backgrounds, glowing accents, monospaced code elements,
and tech-inspired patterns.

| Pillar | Description |
|--------|-------------|
| **Dark-first** | Deep navy/charcoal background (`#0F172A`) — no light mode |
| **Console cues** | `>` prefix, green terminal accent, monospace fonts for tech elements |
| **Tech glow** | Cyan and green neon-like glow effects on hover and focus |
| **Card-based** | Content organized in elevated cards with subtle borders |
| **Data-driven** | UI rendered from static JS data files |

---

## Original Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-dark` | `#0F172A` | Main background (deep navy) |
| `--bg-card` | `#1E293B` | Card backgrounds |
| `--text-main` | `#F8FAFC` | Primary text (off-white) |
| `--text-muted` | `#94A3B8` | Secondary text |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-cyan` | `#22D3EE` | Primary accent: buttons, links, borders |
| `--accent-green` | `#10B981` | Secondary accent: tech tags, console text |

---

## Original Typography

```
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', Consolas, monospace;
```

| Usage | Font | Weight | Size |
|-------|------|--------|------|
| Headings (h1) | Inter | 800 | `clamp(2.5rem, 5vw, 4rem)` |
| Section titles (h2) | Inter | 800 | `clamp(1.8rem, 3vw, 2rem)` |
| Body text | Inter | 400 | 1.125rem |
| Console prefix | JetBrains Mono | 700 | 1.1rem |
| Tech tags | JetBrains Mono | 400 | 0.8rem – 0.9rem |
| Buttons | JetBrains Mono | 700 | 0.9rem |

---

## Original Component Details

- Profile photo: 180px circle, green border, cyan glow
- Console greeting: green terminal text with `>` prefix
- Skills tags: monospace green on green-tinted bg
- Project links: `>` console prefix before each link
- Bullet lists: `>` green prefix instead of standard bullets
- Buttons: cyan outline/glow aesthetic
- Status dot: pulsing green dot in footer
- Footer: darker background (#0a0a0a) with #222 border

---

## Full Reference

See the git history or `DESIGN.md` before this date for the complete
original design specification (362 lines, 10 sections).
