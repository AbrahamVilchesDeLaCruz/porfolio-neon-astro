# Proposal: Bookshelf Neon Redesign

## Intent

To replace the current "Biblioteca Personal" section with a visually striking, realistic bookshelf design featuring a dark wood texture and indigo neon glow effects. This change aims to enhance the portfolio's aesthetic, create a more engaging user experience, and accommodate an expanded collection of 22 books.

## Scope

### In Scope
- Redesign the `Books.tsx` component to a multi-row, realistic bookshelf for desktop screen sizes.
- Maintain the existing carousel/swiper behavior for mobile devices.
- Add 9 new books to the collection, bringing the total to 22.
- Implement a dark wood texture background for the shelf with a subtle indigo neon glow behind the books.
- Add a subtle neon glow effect on book hover.
- Integrate the new design with the existing `SectionTitle` component.
- Preserve the current interaction model: clicking a book cover displays its details below the shelf.

### Out of Scope
- Modifying the layout or styling of the book detail card.
- Introducing client-side data fetching; book data will remain static.
- Changing any other sections of the portfolio website.
- Implementing a custom test runner or adding unit/E2E tests for this component.

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
- `bookshelf-display`: The visual presentation and layout rules for displaying the book collection are changing significantly, moving from a simple row to a multi-row shelf on desktop.

## Approach

1.  **Data Update**: Extend the existing `src/components/books/data/books.ts` file to include the 9 new books, complete with titles, authors, cover image URLs, summaries, and Amazon links.
2.  **Component Refactor**: The primary logic in `Books.tsx` will be refactored.
    -   **Desktop View**: A new layout will be created using CSS Grid or Flexbox to arrange book covers in a multi-row shelf. The dark wood texture and neon glow will be applied via Tailwind CSS classes, likely using pseudo-elements (`::before` or `::after`) for the glow.
    -   **Mobile View**: The existing Swiper.js implementation for the mobile carousel will be preserved.
    -   **Responsiveness**: A media query breakpoint (likely `md:` or `lg:`) will be used to switch between the mobile carousel and the desktop shelf.
3.  **Styling**:
    -   Utilize Tailwind CSS for all styling, creating new utility classes if necessary for the wood texture and neon effects.
    -   The neon hover effect will be implemented using CSS transitions and box-shadow or filter properties.
4.  **Integration**: The modified `Books.tsx` component will be rendered within the main `src/pages/index.astro` page, ensuring it correctly receives props from and integrates with the `SectionTitle` component.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/Books.tsx` | Modified | Complete visual and structural overhaul of the component. |
| `src/components/books/data/books.ts` | Modified | Nine new book objects will be added to the exported array. |
| `src/pages/index.astro` | Unchanged | No changes expected, as it already renders the `Books.tsx` component. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Visual inconsistencies with the existing neon-indigo theme. | Low | Strictly adhere to the project's existing color palette from Tailwind config. The neon glow will use established `indigo` shades. |
| Poor performance due to large cover images or complex CSS. | Medium | All book cover images will be optimized (e.g., converted to WebP, resized) before implementation. CSS effects will be chosen for performance, avoiding heavy animations. |
| Responsive layout breaking on certain screen sizes. | Medium | Thoroughly test the component across multiple breakpoints during development, ensuring a smooth transition between the mobile carousel and desktop shelf. |

## Rollback Plan

If the new component introduces critical bugs or visual regressions, we will revert the changes by running `git checkout HEAD~1 -- src/components/Books.tsx src/components/books/data/books.ts`. Since the changes are isolated to this component and its data source, a rollback is simple and low-risk.

## Dependencies

- No new external dependencies are required. The project already uses Astro, React, and Swiper.js.

## Success Criteria

- [ ] All 22 books are correctly displayed on the new bookshelf.
- [ ] The desktop view shows a multi-row shelf with a dark wood texture and neon glow.
- [ ] The mobile view retains the existing carousel functionality.
- [ ] Clicking a book cover displays its details below the shelf, preserving the existing interaction.
- [ ] The component's aesthetic is consistent with the site's overall neon-indigo theme.
