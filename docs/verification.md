# Verification — How to Demonstrate That Work Functions

> Golden rule: **the agent does not say "it works", it demonstrates it**.
> Every feature ends with executable evidence, not assertions.

## Verification Flow

```
implementer writes code
        ↓
implementer self-verifies against docs/01-conventions.md
        ↓
reviewer validates manually (structure, code, conventions)
        ↓
build succeeds + lint passes
        ↓
human tests → gives feedback
        ↓
positive feedback + reviewer approved → feature marked done
```

---

## Level 1 — Code Structure (mandatory)

Every source file must:

1. Have the correct file extension (`.jsx` for components, `.js` for data/hooks, `.css` for styles).
2. Follow the organization conventions (`src/components/`, `src/pages/`, `src/data/`, `src/styles/`).
3. Have appropriate exports (default export for components, named exports for utilities).
4. Not exceed the line limit (200 lines for JSX/CSS, 200 for data files).

---

## Level 2 — Code Conventions (mandatory)

All code must respect `docs/01-conventions.md`:

- **JSX**: functional components, one per file, PascalCase names, no class components.
- **CSS**: custom properties for colors/fonts, component-scoped CSS files, no Tailwind, no Sass.
- **No inline styles** except for truly dynamic values.
- **Semantic HTML** (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).
- **Accessibility**: alt text on images, proper heading hierarchy, ARIA where needed.
- **No `console.log`** in production code.

Verification (reviewer):

```bash
# Check for console.log
grep -rn "console\.log" src/

# Check for inline styles
grep -rn "style={{" src/

# Check for hardcoded colors not using CSS variables
grep -rn "#[0-9A-Fa-f]\{6\}" src/components/*.css | grep -v "var(--"
```

---

## Level 3 — Project Architecture (mandatory)

Every module must:

1. Follow the organization defined in `docs/02-architecture.md`.
2. Use proper imports/exports (no barrel files unless justified).
3. Import data directly from `src/data/` — no fetch/axios calls.
4. Components are composed in pages: data flows top-down via props or direct imports.

---

## Level 4 — Consistency (mandatory)

Verify that:

1. All CSS references `var(--*)` from `:root` in `App.css` when using colors/fonts.
2. Font imports (Google Fonts) are only in `App.css` (single source).
3. All interactive elements have hover and focus states.
4. Responsive breakpoints are consistent (max-width: 768px, max-width: 480px, max-width: 600px).
5. No dead CSS — every class defined is used in the corresponding JSX file.

---

## Level 5 — Build/Test Verification (mandatory before marking done)

Before closing a feature as `done`:

### Build

```bash
npm run build
# must exit 0 with no errors
```

### Lint

```bash
npm run lint
# must exit 0
```

### Preview (optional but recommended)

```bash
npm run preview
# Open http://localhost:4173 and verify the feature works visually
```

---

## Anti-Patterns (do not do)

- ❌ "I added the code, it should work." → must verify build passes.
- ❌ Hardcoded color values like `#123456` in component CSS → use `var(--bg-dark)`.
- ❌ Multiple Google Fonts imports → import once in `App.css`.
- ❌ Inline styles in React components → use CSS classes and custom properties.
- ❌ `console.log` in production code → remove before committing.
- ❌ Dead/duplicate CSS — check that every style rule does something visible.
- ❌ Marking the feature as `done` without build passing + reviewer approval.

---

## Final Verification Before Closing

1. The reviewer has gone through `CHECKPOINTS.md` and all checks pass.
2. `npm run build` succeeds.
3. `npm run lint` passes.
4. The human has verified the feature visually (via `npm run dev` or `npm run preview`).
5. `progress/current.md` reflects the verification result.

If anything fails, **do not** mark anything as `done`. Record the blockage
in `progress/current.md` with status `blocked` in `feature_list.json`.
