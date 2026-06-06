# Design: Retheme Portfolio for DDDominio Alignment

## Technical Approach

Replace the custom `mariner-*` color system and neon CSS utilities with Tailwind v4 built-in `indigo-*` palette, delete legacy files, and improve grid layouts in Projects and Training sections. The goal is visual parity with the DDDominio blog: clean, professional, no glow effects.

## Architecture Decisions

| Decision | Choice | Rejected | Rationale |
|----------|--------|----------|-----------|
| Color tokens | Remove `@theme` block; use `indigo-*` directly | Keep mariner as alias | Fewer abstractions; blog already uses `indigo-400` raw; Tailwind v4 built-ins are complete |
| Neon removal | Delete `.neon-*` + `.shadow-neon` from global.css; replace with `hover:border-indigo-400 transition-all` | Fade neon opacity | Clean cut. Keeping faded neon still adds complexity and visual noise |
| `prose-neon` utility | Keep — already uses `#818cf8` (= `indigo-400`); rename is out of scope | Rename to `prose-indigo` | Zero functional change needed; renaming risks breaking Blog pages not in this change's scope |
| Featured card | First card (`DDDominio`) gets `md:col-span-2`; grid stays `md:grid-cols-2 lg:grid-cols-3` | Separate hero-style section | Minimal markup change; keeps grid coherent for remaining cards |
| Training grid mobile | Remove `max-w-xs` constraint on mobile | Keep constraint | `max-w-xs` (320px) clips cards on most phones; `max-w-sm` or no cap is better |

## Data Flow

No runtime data flow changes. This is a pure styling migration:

```
global.css (@theme removed, neon removed)
    └── all components consume indigo-* via Tailwind JIT
        ├── Projects.astro   (grid + color classes updated)
        └── TrainingSection.astro (grid + color classes updated)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/styles/global.css` | Modify | Delete `@theme` block (mariner tokens), delete `.neon-text`, `.neon-container`, `.neon-presentation`, `.neon-button`, `.shadow-neon` |
| `src/layouts/Layout.astro` | Modify | Scrollbar colors: `mariner-*` → `indigo-*` |
| `src/components/Navbar.astro` | Modify | Active state + color classes → `indigo-*` |
| `src/components/hero/Presentation.astro` | Modify | Colors + remove `neon-presentation`, non-existent classes |
| `src/components/hero/Stiker.astro` | Modify | Colors + hardcoded hex `#3799fa` → `#818cf8` |
| `src/components/hero/Buttons.astro` | Modify | Colors → `indigo-*` |
| `src/components/hero/SocialMedia.astro` | Modify | Colors + remove `drop-shadow-neon-blue`, `neon-effect` |
| `src/components/hero/ScrollDown.astro` | Modify | Colors + remove `drop-shadow-neon-mariner`, `drop-shadow-mariner-glow` |
| `src/components/SectionTitle.astro` | Modify | Colors → `indigo-*` |
| `src/components/Projects.astro` | Modify | Colors + first card `md:col-span-2` + `h-40`→`h-48` + remove `hover:shadow-neon` → `hover:border-indigo-400` |
| `src/components/TrainingSection.astro` | Modify | Colors + `h-28`→`h-36` + remove `max-w-xs` + remove `hover:shadow-neon` |
| `src/components/Contact.astro` | Modify | Colors → `indigo-*` |
| `src/components/Books.tsx` | Modify | Colors → `indigo-*` |
| `src/components/BackToTop.astro` | Modify | Colors → `indigo-*` |
| `src/components/experience/ExperienceTimelineItem.tsx` | Modify | Colors → `indigo-*` |
| `src/components/experience/data/experience-data.tsx` | Modify | SVG `fill` hex values → `#818cf8` |
| `src/components/experience/ExperienceCards.tsx` | Delete | Unused legacy — no imports found |
| `src/components/Books.astro` | Delete | Unused legacy — no imports found |
| `src/components/training/TrainingTech.tsx` | Delete | Unused legacy — no imports found |

## Interfaces / Contracts

No new interfaces. The class replacement mapping is the contract:

```
text-mariner-{n}     → text-indigo-{n}   (accent text)
text-mariner-{100..300} → text-white/{opacity}  (non-accent body text)
bg-mariner-950/40    → bg-white/[0.03]
bg-mariner-950       → bg-zinc-950
bg-mariner-{700..800}/60 → bg-indigo-{700..800}/60
border-mariner-{n}   → border-indigo-{n} or border-white/10
hover:bg-mariner-*   → hover:bg-indigo-*/10
hover:shadow-neon    → hover:border-indigo-400 transition-all
scrollbar-*-mariner  → scrollbar-*-indigo
hardcoded #3799fa    → #818cf8
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Build | No compilation errors | `astro build` must exit 0 |
| Visual | No mariner-*/neon-* classes remain | `grep -r "mariner-\|neon-\|shadow-neon\|neon-effect\|drop-shadow-neon\|drop-shadow-mariner" src/` → zero results |
| Visual | Deleted files have no remaining imports | `grep -r "ExperienceCards\|Books.astro\|TrainingTech" src/` → zero results |
| Visual | Manual inspection in browser | Hero, Navbar, Projects (featured card), Training (taller images) |

## Migration / Rollout

No migration required. Feature branch; revert via `git revert` if needed.

## Open Questions

None — all decisions confirmed with user.
