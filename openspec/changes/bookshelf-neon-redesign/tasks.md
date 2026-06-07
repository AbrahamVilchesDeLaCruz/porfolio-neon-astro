# Tasks: Bookshelf Neon Redesign

This document breaks down the "bookshelf-neon-redesign" change into concrete implementation tasks, derived from the proposal, design, and delta specs.

---

## [x] Task 1: Add 9 new books to data file

**ID**: TASK-001  
**Name**: Expand book collection with 9 new entries  
**Files**:
- `src/components/books/data/books.ts`

**Description**:  
Add 9 new book objects (IDs 14–22) to the existing `books` array. Keep the existing 13 books (IDs 1–13) exactly as they are. Each new entry must follow the established object shape: `{ id, title, author, image, summary, amazonUrl }`.

**Books to add**:
1. **id: 14** — "A Philosophy of Software Design" by John K. Ousterhout  
   - image: `https://m.media-amazon.com/images/I/71r0V0UWkFL._SL1500_.jpg`  
   - summary: "Aborda cómo descomponer sistemas de software complejos en módulos manejables, con foco en gestionar la complejidad como problema fundamental del diseño."  
   - amazonUrl: `https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X`

2. **id: 15** — "Software Architecture: The Hard Parts" by Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani  
   - image: `https://m.media-amazon.com/images/I/81oFxjQXJCL._SL1500_.jpg`  
   - summary: "Analiza los trade-offs de arquitecturas distribuidas, abordando granularidad de servicios, orquestación de workflows y transacciones distribuidas."  
   - amazonUrl: `https://www.amazon.com/Software-Architecture-Trade-Off-Distributed-Architectures/dp/1492086894`

3. **id: 16** — "Algoritmos Iluminados (Serie completa)" by Tim Roughgarden  
   - image: `https://m.media-amazon.com/images/I/71CAaHfUYCL._SL1500_.jpg`  
   - summary: "Serie de 4 volúmenes que cubre desde análisis asintótico y algoritmos de ordenación hasta grafos, programación dinámica y problemas NP-hard. Accesible y rigurosa."  
   - amazonUrl: `https://www.amazon.com/Algorithms-Illuminated/dp/B07GRHC52F`

4. **id: 17** — "Git y GitHub desde cero" by Brais Moure  
   - image: `https://m.media-amazon.com/images/I/71Q3XcYaZZL._SL1500_.jpg`  
   - summary: "Guía teórico-práctica paso a paso para aprender Git y GitHub desde cero, con 45 lecciones, decenas de comandos y un curso en vídeo de 5 horas incluido."  
   - amazonUrl: `https://www.amazon.com/Git-GitHub-desde-cero-te%C3%B3rico-pr%C3%A1ctica/dp/B0C1J3FG6Q`

5. **id: 18** — "Principios de Cloud Computing" by Firebird Ricardo Molina Alvarez  
   - image: `https://m.media-amazon.com/images/I/51kZ3UAKBWL.jpg`  
   - summary: "Introducción a los conceptos fundamentales del cloud computing en empresas: modelos de servicio, escalabilidad, costes y flexibilidad en la nube."  
   - amazonUrl: `https://www.amazon.com/-/es/Firebird-Ricardo-Molina-Alvarez-ebook/dp/B0BTYLNMXF`

6. **id: 19** — "Mastering API Architecture" by James Gough, Daniel Bryant, Matthew Auburn  
   - image: `https://m.media-amazon.com/images/I/81JMcDYJV0L._SL1500_.jpg`  
   - summary: "Estrategias para construir, probar y evolucionar APIs REST usando gateways y service meshes, con foco en seguridad, escalabilidad y migración a la nube."  
   - amazonUrl: `https://www.amazon.com/Mastering-API-Architecture-Operate-API-Based/dp/1492090638`

7. **id: 20** — "The Hundred-Page Machine Learning Book" by Andriy Burkov  
   - image: `https://m.media-amazon.com/images/I/61l3AMJPoAL._SL1500_.jpg`  
   - summary: "Condensación magistral del machine learning en ~100 páginas: teoría, matemáticas y práctica. Recomendado por Peter Norvig y Aurélien Géron."  
   - amazonUrl: `https://www.amazon.com/Hundred-Page-Machine-Learning-Book/dp/1999579518`

8. **id: 21** — "Diseño Ágil con TDD" by Carlos Blé Jurado  
   - image: `https://m.media-amazon.com/images/I/51hL8yFjVkL.jpg`  
   - summary: "El primer libro de TDD en castellano. Enseña a escribir tests que mejoran la calidad del código y a aplicar TDD dentro de la metodología XP de forma práctica."  
   - amazonUrl: `https://www.amazon.com/Dise%C3%B1o-%C3%81gil-Spanish-Carlos-Jurado/dp/1445264714`

9. **id: 22** — "System Design Interview – Volume 2" by Alex Xu, Sahn Lam  
   - image: `https://m.media-amazon.com/images/I/81AEYVIlqkL._SL1500_.jpg`  
   - summary: "Continuación del Vol. 1, cubre nuevas preguntas de diseño de sistemas distribuidos con un framework paso a paso y ejemplos reales para preparar entrevistas técnicas."  
   - amazonUrl: `https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119`

**Subtasks**:
1. Open `src/components/books/data/books.ts` and locate the closing bracket of the `books` array.
2. Append the 9 new book objects (IDs 14–22) before the closing bracket, maintaining the same object structure as existing entries.
3. Verify that all 22 entries are present and sequential (IDs 1–22).

**Acceptance Criteria**:
- The `books` array contains exactly 22 entries.
- IDs are sequential from 1 to 22.
- All new entries match the existing object shape: `{ id, title, author, image, summary, amazonUrl }`.
- No existing entries (IDs 1–13) are modified.

**Estimate**: ~40 lines of code  
**Dependencies**: None

---

## [x] Task 2: Bookshelf desktop layout with CSS Grid

**ID**: TASK-002  
**Name**: Implement multi-row grid shelf for desktop  
**Files**:
- `src/components/Books.tsx`

**Description**:  
Replace the current desktop `flex-wrap` layout (lines ~106–127) with a CSS Grid-based multi-row bookshelf. The shelf container must have a dark wood texture background and an indigo neon glow effect. Each book cover will be rendered as a grid cell with a fixed aspect ratio.

**Implementation details**:
- **Grid container**: Use `grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))` for responsive column layout.
- **Dark wood texture**: Apply Tailwind gradient classes: `bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950` with an inset shadow for depth.
- **Neon glow**: Add an indigo glow using `box-shadow: 0 0 20px rgba(99,102,241,0.3)` on the outer shelf container.
- **Book cells**: Each cell should have a fixed aspect ratio (~3:4 portrait), with `object-cover` on the image to fill the space.
- **Responsive breakpoints**: Adjust `minmax` values for `md`, `lg`, and `xl` breakpoints to ensure proper column distribution.

**Subtasks**:
1. Create a new outer container with dark wood gradient and neon glow styling.
2. Replace the existing `flex-wrap` container with a CSS Grid container using `grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))`.
3. Map `books` array into grid cells, rendering each book cover as an `<img>` with `object-cover`.
4. Add responsive breakpoints (`md:`, `lg:`, `xl:`) to adjust column width for different screen sizes.

**Acceptance Criteria**:
- Desktop view renders a multi-row grid with all 22 books.
- Dark wood gradient background is visible behind the books.
- Indigo neon glow is visible around the shelf container.
- Grid columns adjust responsively at different breakpoints.

**Estimate**: ~60 lines of code  
**Dependencies**: Task 1 (requires 22 books in data)

---

## [x] Task 3: Book hover and click interaction

**ID**: TASK-003  
**Name**: Add hover glow and click selection state  
**Files**:
- `src/components/Books.tsx`

**Description**:  
Implement visual feedback for book interactions: a lift-and-glow effect on hover, and a persistent glow for the selected book. Clicking the same book again should toggle the selection off.

**Implementation details**:
- **Hover effect**: Apply `transform: translateY(-2px)` and increase glow intensity: `box-shadow: 0 0 30px rgba(99,102,241,0.6)`.
- **Click behavior**: On click, set `selectedBook` state to the clicked book. If the same book is clicked again, set `selectedBook` to `null` (toggle off).
- **Selected state**: The selected book gets the strongest glow: `box-shadow: 0 0 40px rgba(99,102,241,0.8)`.
- **Transitions**: All hover and selection transitions should be `300ms ease`.
- **Performance**: Add `will-change-transform` Tailwind utility (`will-change-transform`) to hover targets.

**Subtasks**:
1. Add Tailwind hover classes for `translateY(-2px)` and increased glow (`hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]`).
2. Wire `onClick` handler to each book cell, implementing toggle logic: if `selectedBook?.id === book.id`, set `selectedBook` to `null`; otherwise, set to `book`.
3. Add conditional styling for the selected book: apply strongest glow when `selectedBook?.id === book.id`.
4. Add `transition-all duration-300 ease-in-out` and `will-change-transform` to book cells.

**Acceptance Criteria**:
- Hovering over a book lifts it slightly and increases neon glow.
- Clicking a book selects it and applies the strongest glow.
- Clicking the same book again deselects it.
- All transitions are smooth (300ms).

**Estimate**: ~30 lines of code  
**Dependencies**: Task 2 (requires grid layout)

---

## [x] Task 4: Book detail card (below shelf)

**ID**: TASK-004  
**Name**: Style book detail card with neon theme  
**Files**:
- `src/components/Books.tsx`

**Description**:  
Update the existing book detail card styling to match the neon-indigo theme. The card should render below the shelf (not inline) when a book is selected, showing the book's cover, title, author, summary, and Amazon link.

**Implementation details**:
- **Container styling**: `bg-indigo-950/80`, `border-2 border-indigo-400`, `rounded-lg`, with subtle neon glow via `box-shadow`.
- **Layout**: Flex row on desktop (image left, text right), flex column on mobile.
- **Content**:
  - Cover image: ~`w-48`, `object-cover`
  - Title: `text-indigo-100`, `text-xl`, `font-semibold`
  - Author: `text-indigo-300`, `text-sm`
  - Summary: `text-indigo-100`, `text-sm`
  - Amazon link button: `bg-indigo-900`, `text-indigo-300`, `rounded-lg`, `px-4 py-2`
- **Amazon link attributes**: `target="_blank"`, `rel="noopener noreferrer nofollow sponsored"`
- **Conditional rendering**: Show card only when `selectedBook !== null`.

**Subtasks**:
1. Update the existing detail card container with new Tailwind classes: `bg-indigo-950/80 border-2 border-indigo-400 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.3)]`.
2. Apply flex layout: `flex-col md:flex-row` for responsive layout.
3. Update text styling for title, author, and summary with indigo color palette.
4. Ensure Amazon link button has correct styling and attributes.

**Acceptance Criteria**:
- Detail card renders below the shelf when a book is selected.
- All fields (cover, title, author, summary, Amazon link) are visible and styled correctly.
- Card uses neon-indigo color palette.
- Amazon link opens in new tab with correct `rel` attributes.

**Estimate**: ~40 lines of code  
**Dependencies**: Task 3 (requires click selection logic)

---

## [x] Task 5: Mobile carousel styling with neon theme

**ID**: TASK-005  
**Name**: Update mobile carousel with neon-indigo styling  
**Files**:
- `src/components/Books.tsx`

**Description**:  
Keep the existing carousel logic (`useBreakpoint`, `useState` for `currentIndex`, prev/next buttons, single visible book) but update the visual styling to match the neon-indigo theme and dark wood aesthetic.

**Implementation details**:
- **Container styling**: Apply dark wood background (`bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950`) and neon glow (`box-shadow: 0 0 20px rgba(99,102,241,0.3)`).
- **Book card**: `border-2 border-indigo-400`, `bg-indigo-950/40`, `rounded-lg`.
- **Navigation buttons**: Transparent background, `text-indigo-400`, `hover:bg-indigo-900/50`.
- **Text styling**: Title in `text-indigo-300`, author in `text-indigo-600`.
- **Image**: Centered, `max-h-[250px]`, `object-contain`, `p-6`.
- **Carousel height**: `h-[440px]`.
- **"Más información" button**: `bg-indigo-900 text-indigo-300 px-4 py-2 rounded-lg`.

**Subtasks**:
1. Update carousel container with dark wood gradient and neon glow.
2. Update book card styling: border, background, and rounded corners.
3. Update navigation button styling: transparent background, indigo text, hover effect.
4. Update text styling for title and author.

**Acceptance Criteria**:
- Mobile carousel works correctly (prev/next navigation cycles through all 22 books).
- Carousel container has dark wood background and neon glow.
- Book card uses neon-indigo styling.
- Navigation buttons are styled with indigo colors and hover effects.

**Estimate**: ~40 lines of code  
**Dependencies**: Task 1 (requires 22 books in data)

---

## Review Workload Forecast

| Metric | Value |
|--------|-------|
| Total estimated lines | ~210 lines |
| Number of files | 2 files (`Books.tsx`, `books.ts`) |
| Budget flag | **OK** (under 400 lines) |
| Recommendation | Single PR |

**Decisions needed**: None. All design decisions have been resolved in the design phase.

---

## Summary

This task breakdown covers:
1. Data expansion (9 new books)
2. Desktop multi-row grid shelf with dark wood + neon glow
3. Hover and selection interactions
4. Detail card styling
5. Mobile carousel styling

All tasks are concrete, testable, and aligned with the delta spec requirements. The total estimated workload (~210 lines) fits within a single reviewable PR.
