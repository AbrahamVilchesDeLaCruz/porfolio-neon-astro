# Tasks: Retheme Portfolio for DDDominio Alignment

## Forecast

**Decision needed before apply:** No  
**Chained PRs recommended:** No  
**Chain strategy:** size-exception  
**400-line budget risk:** Medium

---

## Phase 1: Foundation (Global Styles)

### [x] Task 1.1: Remove `@theme` color tokens and neon utilities from `global.css`

**File:** `src/styles/global.css`

**Actions:**
1. Delete the entire `@theme` block that defines `--color-mariner-*` custom properties.
2. Delete the following neon utility classes:
   - `.neon-text`
   - `.neon-container`
   - `.neon-presentation`
   - `.neon-button`
   - `.shadow-neon`
3. Keep `.prose-neon` — it already uses `#818cf8` (indigo-400 equivalent) and is used in Blog pages outside this change's scope.

**Expected Impact:**
- All components now rely on Tailwind's built-in `indigo-*` palette instead of custom `mariner-*` tokens.
- No neon glow effects remain in the global stylesheet.

**Verification:**
```bash
grep -r "@theme\|neon-text\|neon-container\|neon-presentation\|neon-button\|shadow-neon" src/styles/global.css
# Must return zero results (except prose-neon)
```

---

## Phase 2: Layout (Core Layout Components)

### [x] Task 2.1: Update `Layout.astro` scrollbar colors

**File:** `src/layouts/Layout.astro`

**Actions:**
1. Replace `scrollbar-thumb-mariner-*` → `scrollbar-thumb-indigo-*`
2. Replace `scrollbar-track-mariner-*` → `scrollbar-track-indigo-*`

**Verification:**
```bash
grep "mariner" src/layouts/Layout.astro
# Must return zero results
```

---

### [x] Task 2.2: Update `Navbar.astro` colors

**File:** `src/components/Navbar.astro`

**Actions:**
1. Replace all `text-mariner-*` → `text-indigo-*` for active link states.
2. Replace all `hover:text-mariner-*` → `hover:text-indigo-*`.
3. Replace `border-mariner-*` → `border-indigo-*`.

**Verification:**
```bash
grep "mariner" src/components/Navbar.astro
# Must return zero results
```

---

### [x] Task 2.3: Update `SectionTitle.astro` colors

**File:** `src/components/SectionTitle.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.

**Verification:**
```bash
grep "mariner" src/components/SectionTitle.astro
# Must return zero results
```

---

### [x] Task 2.4: Update `BackToTop.astro` colors

**File:** `src/components/BackToTop.astro`

**Actions:**
1. Replace `bg-mariner-*` → `bg-indigo-*`.
2. Replace `hover:bg-mariner-*` → `hover:bg-indigo-*`.
3. Replace `text-mariner-*` → `text-indigo-*`.

**Verification:**
```bash
grep "mariner" src/components/BackToTop.astro
# Must return zero results
```

---

### [x] Task 2.5: Update `Contact.astro` colors

**File:** `src/components/Contact.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.
3. Replace `hover:text-mariner-*` → `hover:text-indigo-*`.

**Verification:**
```bash
grep "mariner" src/components/Contact.astro
# Must return zero results
```

---

## Phase 3: Hero Section

### [x] Task 3.1: Update `Presentation.astro` colors and remove neon classes

**File:** `src/components/hero/Presentation.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Remove `neon-presentation` class reference (defined in global.css, now deleted).
3. Remove any non-existent classes that might have been left over from previous refactors.

**Verification:**
```bash
grep -E "mariner|neon-presentation" src/components/hero/Presentation.astro
# Must return zero results
```

---

### [x] Task 3.2: Update `Stiker.astro` colors

**File:** `src/components/hero/Stiker.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace hardcoded hex color `#3799fa` → `#818cf8` (indigo-400).

**Verification:**
```bash
grep -E "mariner|#3799fa" src/components/hero/Stiker.astro
# Must return zero results
```

---

### [x] Task 3.3: Update `Buttons.astro` colors

**File:** `src/components/hero/Buttons.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.
3. Replace `hover:bg-mariner-*` → `hover:bg-indigo-*/10`.

**Verification:**
```bash
grep "mariner" src/components/hero/Buttons.astro
# Must return zero results
```

---

### [x] Task 3.4: Update `SocialMedia.astro` colors and remove neon effects

**File:** `src/components/hero/SocialMedia.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Remove `drop-shadow-neon-blue` class reference.
3. Remove `neon-effect` class reference.

**Verification:**
```bash
grep -E "mariner|drop-shadow-neon-blue|neon-effect" src/components/hero/SocialMedia.astro
# Must return zero results
```

---

### [x] Task 3.5: Update `ScrollDown.astro` colors and remove neon effects

**File:** `src/components/hero/ScrollDown.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Remove `drop-shadow-neon-mariner` class reference.
3. Remove `drop-shadow-mariner-glow` class reference.

**Verification:**
```bash
grep -E "mariner|drop-shadow-neon-mariner|drop-shadow-mariner-glow" src/components/hero/ScrollDown.astro
# Must return zero results
```

---

## Phase 4: Content Sections

### [x] Task 4.1: Update `Projects.astro` colors and layout

**File:** `src/components/Projects.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.
3. Replace `bg-mariner-950/40` → `bg-white/[0.03]`.
4. Replace `hover:shadow-neon` → `hover:border-indigo-400 transition-all`.
5. **Layout change for featured card:**
   - Add `md:col-span-2` to the first card (`DDDominio` project).
   - Change card image height from `h-40` → `h-48` for the first card only.
6. Verify grid stays `md:grid-cols-2 lg:grid-cols-3`.

**Verification:**
```bash
grep -E "mariner|shadow-neon" src/components/Projects.astro
# Must return zero results
```

**Manual:**
- On desktop, `DDDominio` card should be 2 columns wide with a taller image.
- Other cards should remain single-column.

---

### [x] Task 4.2: Update `TrainingSection.astro` colors and layout

**File:** `src/components/TrainingSection.astro`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.
3. Replace `bg-mariner-*` → `bg-indigo-*` or `bg-white/[0.03]` as appropriate.
4. Replace `hover:shadow-neon` → `hover:border-indigo-400 transition-all`.
5. **Layout changes:**
   - Remove `max-w-xs` constraint on mobile cards.
   - Change card image height from `h-28` → `h-36`.

**Verification:**
```bash
grep -E "mariner|shadow-neon|max-w-xs" src/components/TrainingSection.astro
# Must return zero results (except for max-w-xs removal)
```

**Manual:**
- On mobile, cards should not clip images at 320px.
- On desktop, images should be taller (h-36).

---

### [x] Task 4.3: Update `ExperienceTimelineItem.tsx` colors

**File:** `src/components/experience/ExperienceTimelineItem.tsx`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.
3. Replace `bg-mariner-*` → `bg-indigo-*`.

**Verification:**
```bash
grep "mariner" src/components/experience/ExperienceTimelineItem.tsx
# Must return zero results
```

---

### [x] Task 4.4: Update `experience-data.tsx` icon colors

**File:** `src/components/experience/data/experience-data.tsx`

**Actions:**
1. Replace all SVG `fill` attributes with hardcoded hex values to `#818cf8` (indigo-400).
2. Verify no `mariner` references remain.

**Verification:**
```bash
grep -E "mariner|#3799fa|#5eadfa" src/components/experience/data/experience-data.tsx
# Must return zero results
```

---

### [x] Task 4.5: Update `Books.tsx` colors

**File:** `src/components/Books.tsx`

**Actions:**
1. Replace `text-mariner-*` → `text-indigo-*`.
2. Replace `border-mariner-*` → `border-indigo-*`.
3. Replace `hover:bg-mariner-*` → `hover:bg-indigo-*/10`.

**Verification:**
```bash
grep "mariner" src/components/Books.tsx
# Must return zero results
```

---

## Phase 5: Cleanup

### [x] Task 5.1: Delete `ExperienceCards.tsx`

**File:** `src/components/experience/ExperienceCards.tsx`

**Actions:**
1. Delete the file.
2. Verify no imports reference it.

**Verification:**
```bash
grep -r "ExperienceCards" src/
# Must return zero results
```

---

### [x] Task 5.2: Delete `Books.astro`

**File:** `src/components/Books.astro`

**Actions:**
1. Delete the file.
2. Verify no imports reference it (note: `Books.tsx` is kept, `Books.astro` is deleted).

**Verification:**
```bash
grep -r "Books\.astro\|from.*Books\.astro" src/
# Must return zero results
```

---

### [x] Task 5.3: Delete `TrainingTech.tsx`

**File:** `src/components/training/TrainingTech.tsx`

**Actions:**
1. Delete the file.
2. Verify no imports reference it.

**Verification:**
```bash
grep -r "TrainingTech" src/
# Must return zero results
```

---

### [x] Task 5.4: Run global verification

**Actions:**
1. Run `astro build` — must succeed with exit code 0.
2. Verify no `mariner-*` classes remain:
   ```bash
   grep -r "mariner-" src/
   # Must return zero results
   ```
3. Verify no `neon-*` classes remain:
   ```bash
   grep -r "neon-\|shadow-neon\|drop-shadow-neon\|drop-shadow-mariner" src/
   # Must return zero results (except prose-neon in global.css)
   ```
4. Verify deleted files have no remaining imports:
   ```bash
   grep -r "ExperienceCards\|Books\.astro\|TrainingTech" src/
   # Must return zero results
   ```
5. **Manual visual inspection:**
   - Hero section: indigo colors, no neon glow.
   - Navbar: indigo accent on active links.
   - Projects section: first card (DDDominio) is 2-column wide on desktop, taller image.
   - Training section: taller images, no card clipping on mobile.
   - Experience timeline: indigo icons and accents.
   - Contact: indigo links.

---

## Success Criteria

- [x] All `mariner-*` color references are replaced with `indigo-*` or `white/*` equivalents.
- [x] No `neon-*` or `shadow-neon` classes remain in the codebase (except `prose-neon` in global.css).
- [x] The DDDominio project card is visually distinct (2-column wide, taller image) on desktop.
- [x] Projects and Training sections have visually distinct layouts (featured card + improved density).
- [x] All 3 legacy files are deleted (`ExperienceCards.tsx`, `Books.astro`, `TrainingTech.tsx`).
- [x] The command `astro build` completes without errors.
- [x] Visual parity with DDDominio blog: clean, professional, indigo accent palette.

---

## Notes

- **Chained PRs:** With 22 files touched, consider splitting into 2 PRs:
  - PR1: Phases 1-2 (Foundation + Layout) — ~6 files
  - PR2: Phases 3-5 (Hero + Content + Cleanup) — ~16 files
- **Decision point:** Before starting implementation, confirm with the user whether to proceed with a single PR or split into chained PRs.
- **Testing:** No automated tests exist for styles. Rely on `astro build` + manual visual inspection.
