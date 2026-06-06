# Exploration: retheme-portfolio-dddominio

## Current State

The portfolio is built on **Astro 5 + React 19 + TypeScript + Tailwind CSS v4**. It uses a custom color scale registered as `@theme` tokens in `src/styles/global.css`:

- **Mariner palette** (cyan-blue, 50-950): from `#eff8ff` (50) down to `#162c55` (950), with `#5db8fd` (400) and `#3799fa` (500) as the visual anchors.
- **Neon system** in `global.css`: `.neon-text`, `.neon-container`, `.neon-presentation`, `.neon-button`, `.shadow-neon`, plus hardcoded glows with `#91d2ff` / `#5db8fd` / `#3799fa` / `#217bef` / `#1a66e0` / `#1b51b2`.
- **Layout grid**: `max-w-7xl mx-auto` with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` is the dominant pattern for Projects and Training.
- **Active sections** are highlighted with hardcoded `#5db8fd` in `Navbar.astro` (lines 57-72).
- **Scrollbar** in `Layout.astro` is tinted with mariner hex values (`#1c478c` track, `#217bef` thumb).

The **dddominio blog** (`src/layouts/BlogLayout.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[id].astro`, `src/pages/blog/all.astro`) uses a completely different, **subtle aesthetic**:

- Primary accent: **Tailwind's built-in `indigo-400` = `#818cf8`** (NOT a custom theme token; uses Tailwind defaults).
- Borders: `border-white/10` (no per-color variants).
- Tags: `border border-indigo-400/30 text-indigo-400`.
- Text hierarchy: `text-white`, `text-white/60`, `text-white/40`, `text-white/30`.
- **No neon effects, no glows, no shadow-blur tricks.**
- Mermaid theme variables are hardcoded to `#818cf8` and `#0a0a0a`.
- Scrollbar styled with `#818cf8` thumb and `#1f2937` track.

The proposal is to **unify the portfolio's identity with the blog's** by replacing mariner/neon with the indigo-400-based system.

---

## Files That Need Changes

### 1. `src/styles/global.css` — **CORE**
- **Mariner theme tokens** (lines 79-91): all 11 `--color-mariner-*` definitions MUST be removed.
- **Neon utilities** (lines 39-65): `.neon-text`, `.neon-container`, `.neon-presentation`, `.neon-button` MUST be removed or replaced with subtle equivalents.
- **`.shadow-neon`** (lines 93-95): MUST be removed.
- **Hardcoded hex glows** (lines 40-41, 58, 63, 94): MUST be removed/replaced.
- **Decision needed**: replace the mariner `@theme` block with a new `@theme` block defining `indigo` shades aligned with Tailwind defaults, OR rely on Tailwind's built-in `indigo-*` palette directly (no custom tokens).
- The `prose-neon` utility (lines 4-20) uses `#818cf8` already — good baseline; rename to `prose-blog` and align with new system.

### 2. `src/layouts/Layout.astro`
- **Scrollbar CSS** (lines 110-119): hex values `#1c478c` and `#217bef` MUST be replaced with `#818cf8` (thumb) and `#1f2937` (track) to match blog.

### 3. `src/components/Navbar.astro`
- **Desktop nav** (lines 3, 5, 10-15, 20): `border-mariner-900/50`, `text-mariner-200/300`, `text-mariner-400`, `border-mariner-700/400` → indigo or white variants.
- **Mobile nav** (line 28): `bg-mariner-950/90 border-mariner-700 shadow-neon` → `bg-black/90 border-white/10` (matches blog header).
- **Mobile icons** (lines 30, 34, 38, 42, 46, 50): `text-mariner-600 hover:text-mariner-400` → `text-white/50 hover:text-white` (matches blog).
- **Style block** (lines 55-74): active state uses hex `#5db8fd` and `#3799fa` glows → use `#818cf8` without glow.
- **Layout change**: NO, navbar stays as is.

### 4. `src/components/SectionTitle.astro`
- `border-mariner-400 shadow-neon` (line 5) → `border-white/10` (subtle, blog-like).
- `text-mariner-100 drop-shadow-neon-mariner` (line 6) → `text-white` (no drop-shadow).
- `drop-shadow-neon-mariner` is a non-existent Tailwind class — currently a no-op, but visually the design relies on the mariner text color; with indigo it would need an explicit `text-indigo-400` or just white.

### 5. `src/components/Hero.astro`
- No direct color refs, just structure — **no changes needed for colors**, but **layout adjustments** if scoped.

### 6. `src/components/hero/Presentation.astro` — **HEAVY**
- `sm:border-mariner-400 sm:shadow-neon-blue sm:neon-presentation` (line 3) → `sm:border-white/10` (or `sm:border-indigo-400/30` for subtle accent), remove neon.
- `text-mariner-200` / `text-mariner-300` (lines 5, 10) → `text-white` (or `text-indigo-300` for accents).
- `bg-mariner-800/70 text-mariner-200 border-mariner-600` tags (line 37) → `bg-white/5 text-white/80 border-white/10` (blog-style).
- `shadow-neon-blue` is a non-existent class — visual fallback is the `.neon-presentation` utility applied alongside. Both need to go.

### 7. `src/components/hero/Stiker.astro`
- `bg-mariner-400 opacity-40 blur-2xl` glow (line 5) → `bg-indigo-400/30` or just `bg-indigo-500/20` (subtle).
- Hardcoded `border-[#5db8fd]` (line 11) → `border-indigo-400` (or remove glow, use white).
- `bg-mariner-900` (line 11) → `bg-zinc-900` or `bg-neutral-900` fallback.

### 8. `src/components/hero/Buttons.astro`
- `border-mariner-400 text-mariner-400 hover:bg-mariner-400/10` (line 2, 11) → `border-white/15 text-white hover:bg-white/5` (blog-style outlined button) or `border-indigo-400 text-indigo-400 hover:bg-indigo-400/10` (accent style).

### 9. `src/components/hero/SocialMedia.astro`
- `border-mariner-400 hover:bg-mariner-400/10 hover:drop-shadow-mariner-glow` (lines 8, 18, 26) → `border-white/15 hover:bg-white/5` (no glow).
- `text-mariner-400` icons (lines 12, 22, 30) → `text-white/70 hover:text-white`.
- `drop-shadow-mariner-glow` is non-existent in Tailwind — currently no-op.

### 10. `src/components/hero/ScrollDown.astro`
- `border-mariner-400/30` (line 3) → `border-white/10`.
- `text-mariner-400 drop-shadow-neon-blue` (line 5) → `text-white/50` (no shadow).
- `drop-shadow-neon-blue` is non-existent.

### 11. `src/components/Projects.astro` — **LAYOUT FOCUS**
- Card border `border-mariner-600 hover:border-mariner-400` (line 86) → `border-white/10 hover:border-indigo-400/50` (subtle hover accent).
- Card bg `bg-mariner-950/40` (line 86) → `bg-white/[0.02]` or `bg-zinc-900/30` (matches blog).
- Image divider `border-mariner-700` (line 88) → `border-white/10`.
- Tag divider `border-mariner-800` (line 136) → `border-white/10`.
- Tag `bg-mariner-800/60 text-mariner-300 border-mariner-700` (line 139) → `bg-white/5 text-white/70 border-white/10`.
- Toggle button `text-mariner-400 hover:text-mariner-200` (line 148) → `text-indigo-400 hover:text-indigo-300`.
- `hover:shadow-neon` (line 86) → remove or replace with subtle `hover:shadow-lg` / `hover:shadow-indigo-500/5`.
- **LAYOUT**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (line 84) → **see "Approaches" below**.

### 12. `src/components/TrainingSection.astro` — **LAYOUT FOCUS**
- Card border/bg: same pattern as Projects (lines 11, 15).
- `text-mariner-100/300/500` text colors (lines 27-29) → `text-white`, `text-white/60`, `text-white/40`.
- Tag styles: same as Projects (line 39).
- CTA button `bg-mariner-700/60 text-mariner-100 border-mariner-600 hover:bg-mariner-600` (line 63) → `bg-indigo-500/10 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/20` or `bg-white/5 text-white border-white/15 hover:bg-white/10`.
- **LAYOUT**: same as Projects, see "Approaches".

### 13. `src/components/Contact.astro`
- `border-mariner-900` top border (line 3) → `border-white/10`.
- Card `bg-mariner-950/40 border-mariner-700` (line 5) → `bg-white/[0.02] border-white/10`.
- Text colors `text-mariner-200/500` (lines 9, 12) → `text-white/80` and `text-white/40`.
- Email button `border-mariner-400 text-mariner-300 hover:bg-mariner-400/10` (line 24) → `border-indigo-400/30 text-indigo-400 hover:bg-indigo-400/10`.
- Social icons `text-mariner-600 hover:text-mariner-400` (lines 35, 44, 53) → `text-white/40 hover:text-white`.
- DDDominio link `text-mariner-600` (line 53) → `text-indigo-400`.

### 14. `src/components/Books.tsx` (mobile carousel mode)
- Mobile chevrons `text-mariner-400`, hover `bg-mariner-900/50` (lines 60, 62, 99, 101) → `text-white/70 hover:bg-white/5`.
- Mobile card `border-mariner-400` (line 69) → `border-white/10`.
- Mobile book `text-mariner-300/600` (lines 79, 82) → `text-white` and `text-white/50`.
- Button `bg-mariner-900 text-mariner-300` (line 83) → `bg-white/5 text-white`.
- Desktop hint `text-mariner-700` (line 129) → `text-white/40`.
- Desktop detail panel `bg-mariner-950 border-mariner-400` (line 133) → `bg-zinc-900/50 border-white/10`.
- Desktop detail `text-mariner-100/300/100` (lines 141, 144, 148) → `text-white` and `text-white/60`.
- `shadow-neon` (line 137) → `shadow-lg`.
- `neon-effect` (line 148) → remove (or rename, but it's a non-existent class).
- Desktop button `bg-mariner-900 text-mariner-300` (line 151) → `bg-white/5 text-white`.

### 15. `src/components/Experience.tsx`
- No direct color refs; **no changes needed**.

### 16. `src/components/experience/ExperienceTimelineItem.tsx` — **ACTIVE TIMELINE**
- Tag pills `bg-mariner-900/60 text-mariner-300 border-mariner-800` (line 25) → `bg-white/5 text-white/70 border-white/10`.
- Card `bg-mariner-950/40 border-mariner-700 hover:border-mariner-400` (line 40) → `bg-white/[0.02] border-white/10 hover:border-indigo-400/50`.
- Section dividers `border-mariner-800 bg-mariner-950/60` (lines 43, 91) → `border-white/10 bg-white/[0.02]`.
- Logo container `bg-mariner-950 border-mariner-800` (line 49) → `bg-zinc-900 border-white/10`.
- `text-mariner-300/500/400/200` (lines 59, 60, 65) → `text-white/60`, `text-white/40`, `text-indigo-400` (active state), `text-white` (hover).
- Description `text-mariner-300` (lines 84, 86) → `text-white/60`.

### 17. `src/components/experience/ExperienceCards.tsx` — **LEGACY FILE**
- File is **NOT imported** anywhere in the current code (`index.astro` uses `Experience.tsx` which uses `ExperienceTimelineItem`). Verified via search.
- **Recommendation**: clean up the mariner references opportunistically OR leave for future archival. LOW priority.

### 18. `src/components/experience/data/experience-data.tsx`
- `text-mariner-400` on React/Tailwind icons (lines 51, 52, 78, 79, 101, 104) → `text-indigo-400`.
- Other brand colors (`text-blue-500`, `text-green-500`, etc.) are **brand-specific** (PostgreSQL, AWS, etc.) — KEEP.

### 19. `src/components/BackToTop.astro`
- `border-mariner-600 bg-mariner-950/80 hover:bg-mariner-900 text-mariner-400 shadow-neon` (line 6) → `border-white/10 bg-black/80 hover:bg-white/5 text-white/70` (no shadow).

### 20. `src/components/Books.astro` — **LEGACY FILE**
- File is **NOT imported** in `index.astro` (the active version is `Books.tsx`). Verified.
- Contains `shadow-neon` reference (line 25) — low priority; clean up if convenient.

### 21. `src/components/training/TrainingTech.tsx` — **LEGACY FILE**
- File is **NOT imported** in `TrainingSection.astro`. Verified.
- Contains `text-mariner-300`, `bg-mariner-800`, `shadow-mariner-500`, and `text-blue-500` — low priority.

### 22. `src/pages/index.astro`
- No direct color/layout refs — **no changes needed**.

---

## Blog Color Palette Reference

| Token | Hex | Usage in blog |
|-------|-----|---------------|
| `indigo-400` | `#818cf8` | Primary accent — links, headings, icon highlights, hovers, Mermaid, scrollbar thumb |
| `indigo-400/30` | rgba(129,140,248,0.3) | Tag borders, subtle accents |
| `indigo-400/50` | rgba(129,140,248,0.5) | Subdued link state |
| `indigo-400/60` | rgba(129,140,248,0.6) | Footer/secondary links |
| `indigo-400/70` | rgba(129,140,248,0.7) | Section kicker text |
| `white` | `#ffffff` | Primary headings, primary text |
| `white/60` | rgba(255,255,255,0.6) | Body text, descriptions |
| `white/50` | rgba(255,255,255,0.5) | Footer text, social icons |
| `white/40` | rgba(255,255,255,0.4) | Captions, meta text, hints |
| `white/30` | rgba(255,255,255,0.3) | Muted labels |
| `border-white/10` | rgba(255,255,255,0.1) | All section/card dividers |
| `bg-black` | `#000000` | Page background |
| `bg-black/70` | rgba(0,0,0,0.7) | Content overlay |
| `bg-zinc-900` / `#0a0a0a` | `#0a0a0a` | Mermaid node bg, code blocks |
| `#1f2937` | `#1f2937` | Scrollbar track (Tailwind `gray-800`) |

**Aesthetic principles:**
- No glows, no neon shadows, no blur effects on cards.
- Indigo-400 is used SPARINGLY — only for clickable text and active states.
- Cards/borders rely on `border-white/10` (1px subtle), not colored borders.
- Background is pure black; all depth comes from opacity, not from saturated colors.

---

## Desktop Layout Issues Identified

### Current state of `Projects.astro` (line 84):
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto
```

### Issues:
1. **3 columns on `lg+` is too narrow per card**: cards become skinny, descriptions wrap aggressively, and the image (`h-40`) looks like a thumbnail next to a lot of empty card body.
2. **No featured item**: all 5 projects (DDDominio, ddd-code-generator, RocketShort, Code Finances, Vexel) have equal visual weight — but DDDominio is clearly the flagship (user says "mi principal activo de posicionamiento").
3. **No visual rhythm**: each card is identical, so the eye doesn't know where to land first.
4. **`max-w-7xl` (1280px) is good, but the cards don't take advantage of it** — there's room to make ONE card bigger.
5. **Image-to-content ratio is off**: image is `h-40` (160px) and content area is `flex-grow`, so cards end up looking thin on wide screens.

### Current state of `TrainingSection.astro` (line 8):
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-xs md:max-w-3xl lg:max-w-7xl mx-auto
```

### Issues:
1. **Same 3-column problem** as Projects.
2. **Wide `max-w-xs` on mobile is weird** (320px) — the parent `px-4` already adds 32px. This makes mobile cards awkwardly small.
3. **CTA button at the bottom of each card** is fine, but the cards have inconsistent height because of `flex-grow` on the description — logos vary in size, and the cards can look ragged in a row.
4. **No differentiation between formal degrees and short courses** — UAB (5y degree) looks the same as a 1-year master's as a 6-hour online course.

### Cross-section issues:
1. **Visual monotony**: Projects and Training look near-identical (same border, same hover, same tag style, same grid). On desktop, scrolling past both feels repetitive.
2. **No "above the fold" hero card** in either section — the eye has to scan a flat grid.
3. **Hover state (`hover:shadow-neon`)** is a heavy cyan glow that doesn't match a clean blog-style aesthetic.

---

## Approaches for Color Migration

### Approach 1: Full palette replacement — define new `@theme` tokens named `indigo` (or `brand`)
**Description**: Replace the `mariner-*` block in `global.css` with a new `indigo-*` block using the same 50-950 scale but matching the blog's `#818cf8` anchor. Add `find-replace mariner → indigo` across all files.

- **Pros**: Minimal change to the component layer (just rename classes); preserves all spacing/structural decisions; one search-and-replace.
- **Cons**: **Tailwind v4 already ships `indigo-*` as a built-in palette**. Defining a custom `indigo` token would either shadow Tailwind's built-in (confusing) or require a different name (e.g., `accent`). Also, the blog doesn't use a custom palette — it uses Tailwind's `indigo-400` directly. This would create divergence from the blog.
- **Effort**: Low–Medium

### Approach 2: Direct replacement — use Tailwind's built-in `indigo-*` palette, no custom tokens
**Description**: Remove the `mariner-*` block from `@theme` entirely. Replace `mariner-X` with `indigo-X` (using Tailwind defaults) or `white/X` (for opacity-based) directly in components. This is what the blog already does.

- **Pros**: **Matches the blog 1:1**, no token drift, no shadowing of built-in palette, simpler `global.css`.
- **Cons**: Some mariner-900/950 dark backgrounds (deep navy) don't have an indigo equivalent — need to fall back to `zinc-900` / `neutral-900` / `white/5` opacity variants.
- **Effort**: Medium

### Approach 3: Hybrid — keep `mariner` token name, retune hex values
**Description**: Keep the `@theme --color-mariner-*` structure but change the hex values to indigo range. Avoid touching class names.

- **Pros**: Zero class-name changes; smallest diff.
- **Cons**: **Misleading naming** — `mariner` would no longer be mariner blue. Future readers will be confused. **Not recommended.**
- **Effort**: Low (but bad design)

**Recommendation: Approach 2.** It's the cleanest, matches the blog exactly, and is the most idiomatic Tailwind v4.

---

## Approaches for Desktop Layout

### Approach A: Enhanced grid with featured first item (asymmetric)
**Description**: Keep the grid but use `col-span` to make the first project a "hero card" spanning 2 columns on `lg+`. The remaining cards fall into a 2-column layout below or alongside.

Example (Projects):
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  - card 1 (DDDominio) → lg:col-span-2 lg:row-span-2 (bigger image, more text room)
  - cards 2-5 → standard 1-column cards
```

- **Pros**: Adds visual hierarchy; highlights the flagship project; uses the wide `max-w-7xl` better.
- **Cons**: Requires deciding "what is the featured item" (data-driven via a `featured: true` flag, OR always the first item).
- **Effort**: Medium

### Approach B: Asymmetric layout with magazine-style grid
**Description**: Drop the uniform `grid-cols-3` entirely. Use a CSS grid with named areas or use a 12-column system: card 1 spans 8 cols + card 2 spans 4 cols on first row; cards 3-5 span 4 cols each on second row.

- **Pros**: Maximum visual impact; magazine-like density on wide screens.
- **Cons**: Complex; harder to maintain responsive behavior; might feel "design-y" for a portfolio.
- **Effort**: High

### Approach C: Keep the 3-column grid, but improve card density and consistency
**Description**: Keep `grid-cols-3` on `lg+` but:
- Increase image height (`h-48` or `h-56`).
- Add `aspect-ratio` to cards so they all line up.
- Tighten the tag list (show 3, not 4).
- Differentiate Projects from Training via accent color (Projects hover = indigo-400, Training hover = white/30).
- Add a subtle "View all" link.

- **Pros**: Lowest risk; minimal structural change; improves density without overhauling.
- **Cons**: Doesn't address the "no featured item" problem; visual hierarchy stays flat.
- **Effort**: Low

### Approach D: Hybrid — featured first card + tighter density for the rest
**Description**: Combine A and C. First card is a 2x2 hero, remaining cards use improved density. Same for Training (with the highest-credential item featured: probably the UAB degree).

- **Pros**: Best of both worlds; addresses hierarchy AND density.
- **Cons**: Most code to write; needs a `featured: boolean` on the data model OR a hardcoded "first item is featured" rule.
- **Effort**: Medium

**Recommendation: Approach D for Projects, Approach C for Training.** The flagship project (DDDominio) deserves visual prominence, but Training is more like a list of credentials — uniform cards with good density is fine there. Also: introduce an `aspect-ratio` rule so both sections look tidy on `lg+`.

---

## Risks

1. **Tailwind v4 `@theme` token collision**: If we keep the `mariner-*` name (Approach 3), no risk. If we use `indigo-*` (Approach 2), there's NO risk because Tailwind's `indigo` is a built-in and we just use it directly. If we ever define a custom `--color-indigo-400: ...` token, we'd shadow the built-in. **Decision: do NOT define custom `indigo-*` tokens; use Tailwind defaults.**

2. **Legacy files** (`ExperienceCards.tsx`, `Books.astro`, `TrainingTech.tsx`): These still have mariner references but are not imported. If we leave them, the `tsc`/`astro check` should still pass (they compile, just unused). **Mitigation: delete or comment out during the refactor; they're dead code.**

3. **Non-existent Tailwind classes** (`shadow-neon-blue`, `drop-shadow-neon-blue`, `drop-shadow-neon-mariner`, `drop-shadow-mariner-glow`, `neon-effect`): These are used in 6 places but don't exist in Tailwind — they're visual no-ops. Replacing them is easy, but the original developer might have INTENDED them to be defined in `global.css` and forgot. **Verify before assuming.**

4. **Active nav state CSS in `Navbar.astro`** uses hex `#5db8fd` and `#3799fa` directly in a `<style>` block. If we go full Tailwind-only, we should move these to `class:` utilities OR keep the `<style>` block but with new hex (`#818cf8`).

5. **Visual regression**: Removing all the neon glows will make the page feel "less alive" at first glance. The blog aesthetic is intentionally more muted. **Mitigation: add subtle `transition-colors` and `hover:` states to compensate.**

6. **Image URLs** in Projects are mostly external (Unsplash, npm logos, GitHub). If any of those break, cards look empty. Out of scope for this change but worth noting.

7. **`drop-shadow-neon-mariner` and `drop-shadow-neon-blue` are mentioned in 6 components** but I couldn't find a `tailwind.config` defining them. If they were intended to be defined, removing them silently might miss a design intent. **Action: ask the user whether these were intentional or typos.**

8. **The `prose-neon` utility** (used in blog) is named "neon" but uses `#818cf8` — it's a misnomer leftover from the old design. **Rename to `prose-blog` during the change.**

9. **Mobile carousel in `Books.tsx`** uses a chevron that is hidden on md+. If the user wants this carousel re-themed to be a more standard library view, that's a separate decision. **Don't touch the Books layout unless asked.**

10. **TypeScript/JSX component naming**: `ExperienceCardv1` and `ExperienceCard` are both exported in `ExperienceCards.tsx`. Renaming or cleanup is out of scope, but worth flagging.

---

## Ready for Proposal

**Yes.** Exploration is complete. The change has two clear axes (color migration + desktop layout) that are largely independent and can be sequenced. Recommend breaking into two phases if the change gets large:

- **Phase 1 — Color migration**: global.css + all class renames + hex replacements. Atomic commit. High confidence.
- **Phase 2 — Desktop layout**: Projects + TrainingSection restructure. Requires design call on whether to use a featured-item pattern (Approach D) or just density tweaks (Approach C). Worth a quick user confirmation before spec.

Open questions to surface to the user before proposal:
1. Confirm Approach 2 (use Tailwind's built-in `indigo-*`) over defining a custom palette.
2. Confirm Approach D for Projects (featured first card) vs Approach C (just better density).
3. Confirm: delete legacy files (`ExperienceCards.tsx`, `Books.astro`, `TrainingTech.tsx`) or keep them as historical reference?
4. The non-existent classes `drop-shadow-neon-blue`, `drop-shadow-neon-mariner`, `drop-shadow-mariner-glow`, `shadow-neon-blue`, `neon-effect` — intentional or typos?
