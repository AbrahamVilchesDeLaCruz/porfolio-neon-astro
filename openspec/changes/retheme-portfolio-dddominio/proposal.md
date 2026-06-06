# Proposal: Retheme Portfolio for DDDominio Alignment

## Intent

Unify the portfolio's visual identity with the dddominio blog. This involves adopting the indigo/purple color palette, removing all neon effects for a cleaner aesthetic, improving desktop layout for key sections, and cleaning up legacy code and styles.

## Scope

### In Scope
- Migrate all `mariner-*` custom colors to Tailwind's `indigo-*` palette.
- Remove all neon effects (`.neon-text`, `.shadow-neon`, etc.).
- Implement a "featured first card" layout for the Projects section on desktop.
- Improve card density and visual rhythm in the Training section.
- Delete confirmed unused/legacy components and CSS classes.

### Out of Scope
- Replacing project or training images.
- Modifying website content or copy.
- Significant changes to the mobile layout.
- Adding new sections or pages.

## Capabilities

> This section is the CONTRACT between proposal and specs phases.
> The sdd-spec agent reads this to know exactly which spec files to create or update.
> Research `openspec/specs/` before filling this in.

### New Capabilities
<!-- Capabilities being introduced. Each becomes a new `openspec/specs/<name>/spec.md`.
     Use kebab-case names (e.g., user-auth, data-export, api-rate-limiting).
     Leave empty if no new capabilities. -->
- None

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec.
     Use existing spec names from openspec/specs/. Leave empty if none. -->
- None

## Approach

1.  **Phase 1 (Global Styles):** Replace `mariner-*` tokens with `indigo-*` in `src/styles/global.css` and remove all neon-related utility classes.
2.  **Phase 2 (Component Migration):** Update component-specific styles to use the new color tokens.
3.  **Phase 3 (Projects Layout):** Adjust the grid classes in `Projects.astro` to create the featured card layout.
4.  **Phase 4 (Training Layout):** Refine grid and card styles in `TrainingSection.astro` for better density.
5.  **Phase 5 (Cleanup):** Delete legacy files and remove references to non-existent CSS classes.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/styles/global.css` | Modified | Replace mariner-* tokens & remove neon utilities |
| `src/layouts/Layout.astro` | Modified | Update scrollbar colors |
| `src/components/Navbar.astro` | Modified | Replace colors |
| `src/components/hero/Presentation.astro` | Modified | Replace colors, remove unused classes |
| `src/components/hero/Stiker.astro`| Modified | Replace colors |
| `src/components/hero/Buttons.astro`| Modified | Replace colors |
| `src/components/hero/SocialMedia.astro` | Modified | Replace colors |
| `src/components/hero/ScrollDown.astro` | Modified | Replace colors, remove unused classes |
| `src/components/SectionTitle.astro` | Modified | Replace colors |
| `src/components/Projects.astro`| Modified | Replace colors, update grid layout |
| `src/components/TrainingSection.astro`| Modified | Replace colors, update grid layout |
| `src/components/Contact.astro`| Modified | Replace colors |
| `src/components/Books.tsx`| Modified | Replace colors |
| `src/components/BackToTop.astro`| Modified | Replace colors |
| `src/components/experience/ExperienceTimelineItem.tsx` | Modified | Replace colors |
| `src/components/experience/data/experience-data.tsx` | Modified | Replace icon colors |
| `src/components/experience/ExperienceCards.tsx` | Removed | Unused legacy component |
| `src/components/books/Books.astro` | Removed | Unused legacy component |
| `src/components/training/TrainingTech.tsx` | Removed | Unused legacy component |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Visual regressions from removing neon effects | Medium | Compensate with subtle, clean Tailwind transitions and shadows. |
| Large number of files (22) touched increases regression surface | Medium | Verify each component visually after changes. `astro build` must succeed. |
| Broken styles from incorrect class replacement | Low | Manually verify all class replacements. Use global search to ensure no `mariner-*` or `neon-*` classes remain. |

## Rollback Plan

Revert the feature branch commits via `git revert <commit-hash>`.

## Success Criteria

- [ ] All `mariner-*` color references are replaced with `indigo-*` or `white/*` equivalents.
- [ ] No `neon-*` or `shadow-neon` classes remain in the codebase.
- [ ] The DDDominio project card is visually distinct and larger on desktop.
- [ ] Projects and Training sections have visually distinct layouts.
- [ ] All specified legacy files are deleted.
- [ ] The command `astro build` completes without errors.
