# CHECKPOINTS — Final State Evaluation

> In multi-agent systems, the path is not evaluated — the destination is.
> These are the objective checkpoints that a judge (human or AI) can use
> to decide if the project is healthy.

---

## C1 — The harness is complete

- [ ] Base files exist: `AGENTS.md`, `feature_list.json`,
      `progress/current.md`, `CHECKPOINTS.md`, `docs/verification.md`, `DESIGN.md`.
- [ ] Subagents are defined in `.opencode/agents/`.
- [ ] `feature_list.json` has coherent state (max 1 `in_progress`,
      valid statuses).
- [ ] The harness accurately reflects the actual project (static portfolio,
      not a full-stack app).

## C2 — The state is coherent

- [ ] At most one feature in `in_progress` in `feature_list.json`.
- [ ] Every `done` feature has code that follows `docs/01-conventions.md`
      (JSX patterns, CSS custom properties, component structure).
- [ ] `progress/current.md` is empty or describes the active session
      (does not contain garbage from previous sessions).

## C3 — The code respects the architecture

- [ ] React components live in `src/components/` (not `client/`).
- [ ] Pages live in `src/pages/` (not `client/`).
- [ ] Data files live in `src/data/` and are imported as ES modules (no fetch).
- [ ] No `console.log` statements in production code.
- [ ] No orphaned TODOs without context.
- [ ] No hardcoded color values — all colors use `var(--*)` from `:root`.
- [ ] Files do not exceed line limits (200 lines JSX, 200 lines CSS, 200 lines data).

## C4 — The verification is real

- [ ] `npm run build` exits 0 with no errors.
- [ ] `npm run lint` exits 0.
- [ ] All images have alt text.
- [ ] The reviewer has approved the current feature.
- [ ] The work has been verified (build succeeds, or human confirms).

## C5 — The session was closed properly

- [ ] No suspicious untracked files (temporary files, build artifacts, `.env`).
- [ ] `progress/history.md` has an entry for the last session.
- [ ] The last feature worked on is reflected with its correct status in
      `feature_list.json`.
- [ ] Cleanup is complete (no leftover debug state).

---

**How to use this file:** a reviewer agent (`.opencode/agents/reviewer.md`)
goes through each checkbox, marks `[x]` or `[ ]`, and rejects session closure
if any boxes remain empty in C1-C5.
