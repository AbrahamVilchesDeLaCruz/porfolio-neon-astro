# Design: Bookshelf Neon Redesign

## Technical Approach

Refactor `Books.tsx` in-place: replace the current flat `flex-wrap` desktop grid with a CSS Grid multi-row shelf wrapped in a dark-wood-textured container, add indigo neon `box-shadow` layers for the ambient glow and hover effects, and keep the existing carousel state machine (`currentIndex` + `useBreakpoint`) for mobile unchanged. Extend `books.ts` with 9 new entries (IDs 14–22) following the exact existing object shape. No new dependencies; no new files.

## Architecture Decisions

| Option | Tradeoff | Decision |
|---|---|---|
| CSS Grid vs `flex-wrap` for shelf | Grid gives precise row-break control needed for "shelf line" dividers; flex-wrap reflows unpredictably | **CSS Grid** with `auto-fill` columns |
| Tailwind arbitrary values vs inline `style` | Tailwind arbitrary values are static; dynamic hover/selected glow intensity requires runtime values | **Tailwind** for static classes; **`style` prop** only for toggled glow intensity |
| Pseudo-element (`::before`) for neon ambient vs wrapper `div` | Pseudo-elements are inaccessible in React JSX without a CSS file; wrapper div avoids extra CSS | **Wrapper `div`** with `box-shadow` via Tailwind arbitrary value |
| `will-change: transform` via Tailwind vs inline | Tailwind exposes `will-change-transform` utility class directly | **`will-change-transform`** Tailwind utility |
| CSS file vs all-Tailwind | Project convention: zero separate CSS files for component styling (verified in `Books.tsx`, `Projects.astro`, `Presentation.astro`) | **All Tailwind**, no new CSS files |

## Data Flow

```
books.ts (static array, 22 entries)
       │
       ▼
Books (React FC)
  ├── useBreakpoint() ──→ isMobile: boolean
  ├── useState(selectedBook) ──→ detail card visibility
  └── useState(currentIndex) ──→ carousel position (mobile only)

Desktop path:
  books[] ──→ CSS Grid container ──→ BookSpine divs (onClick → setSelectedBook)
                                           │
                                     selectedBook !== null
                                           │
                                           ▼
                                   SelectedBookDetail (below grid)

Mobile path:
  books[currentIndex] ──→ single BookCard ──→ prev/next buttons (setCurrentIndex)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/Books.tsx` | Modify | Replace desktop `flex-wrap` layout with CSS Grid shelf; add wood texture container + neon `box-shadow` layers; update hover/selected state styling; keep carousel and `useBreakpoint` intact |
| `src/components/books/data/books.ts` | Modify | Append 9 new book objects (IDs 14–22); same shape: `{ id, title, author, image, summary, amazonUrl }` |
| `src/pages/index.astro` | Unchanged | Already renders `<Books client:visible />` — no integration change needed |

## Interfaces / Contracts

The `IBook` interface already defined in `Books.tsx` covers all required fields. The `amazonUrl` optional field already exists. No interface changes needed.

New entries in `books.ts` must satisfy:

```ts
// All 9 new entries must include amazonUrl (not optional in practice)
{ id: number; title: string; author: string; image: string; summary: string; amazonUrl: string }
```

`useBreakpoint` hook signature is unchanged: `() => boolean`.

## Component Tree (desktop shelf)

```
Books
└── <div> shelf-wrapper  [wood texture + ambient neon box-shadow]
    └── <div> CSS Grid   [grid-cols auto-fill, minmax ~100px]
        └── <div> book-spine × N  [hover: lift + glow]
            └── <img loading="lazy" />
    └── <p> hint text  [shown when selectedBook === null]
    └── <div> SelectedBookDetail  [shown when selectedBook !== null]
        ├── <img> cover
        └── <article> title / author / summary / amazon link
```

## Styling Reference

The shelf visual layers stack as follows (outermost → innermost):

```
[dark wood container]   bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950
  + ambient neon        box-shadow: inset 0 -8px 24px rgba(99,102,241,0.15)
    [book-spine item]   rounded, overflow-hidden, cursor-pointer, will-change-transform
      on hover          translateY(-4px) + box-shadow rgba(99,102,241,0.5)
      when selected     box-shadow rgba(99,102,241,0.7) — stronger ring
```

Breakpoint for view switch: `window.innerWidth < 768` (existing `useBreakpoint` threshold — unchanged).

## Testing Strategy

| Layer | What to Test | Approach |
|---|---|---|
| Manual | Desktop shelf renders 22 books in multi-row grid | Visual check at `md`, `lg`, `xl` viewports |
| Manual | Clicking a book sets detail card below shelf | Click interaction in browser |
| Manual | Mobile carousel prev/next wraps correctly at 22 books | Resize to `< 768px`, step through |
| Manual | New books (IDs 14–22) display covers and detail | Verify image URLs and text |

*Per proposal scope: no automated tests are in scope for this change.*

## Migration / Rollout

No migration required. Data is static; the component is self-contained. Rollback: `git checkout HEAD~1 -- src/components/Books.tsx src/components/books/data/books.ts`.

## Open Questions

- [ ] Cover image URLs for the 9 new books (IDs 14–22): must be confirmed before `sdd-apply`. The spec agent may provide them; if not, placeholder Amazon media URLs must be sourced before implementation.
