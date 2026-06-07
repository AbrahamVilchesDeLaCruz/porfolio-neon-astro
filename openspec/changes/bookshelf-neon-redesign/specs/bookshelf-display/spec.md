# Delta for bookshelf-display

## ADDED Requirements

### Requirement: Expanded Book Collection

The system MUST expand the book collection to a total of 22 books.

- The 9 new books SHALL be appended to the existing list, assigned sequential IDs from 14 to 22.
- Each new book entry MUST conform to the existing data structure: `{ id, title, image, author, summary, amazonUrl }`.

#### Scenario: Verify New Book Data

- GIVEN the book data source is loaded
- WHEN the system counts the total number of books
- THEN the count MUST be 22
- AND a book with ID 14, titled "A Philosophy of Software Design", MUST be present
- AND a book with ID 22, titled "System Design Interview – Volume 2", MUST be present.

### Requirement: Desktop-Specific Multi-Row Shelf Layout

On viewports wider than the mobile breakpoint (768px), the system MUST display books in a multi-row grid, resembling a bookshelf.

- The bookshelf container SHALL have a dark wood texture background.
- The layout MUST automatically wrap books to the next row to fill the available horizontal space with consistent gaps.
- A subtle indigo neon glow effect MUST be rendered behind the books on the shelf.

#### Scenario: Desktop Bookshelf Rendering

- GIVEN the user is viewing the site on a desktop device
- WHEN the "Biblioteca Personal" section is visible
- THEN all 22 books MUST be rendered as cover images within a multi-row grid.
- AND the background of the grid container MUST display a dark wood texture.
- AND an indigo neon glow MUST be visible behind the book covers.

### Requirement: Book Hover and Selection Effects

The system MUST provide distinct visual feedback for hovering over and selecting a book.

- On hover, a book cover MUST appear to lift slightly and display a more prominent indigo neon glow.
- When selected, a book MUST have a persistent highlight or glow that is visually distinct from the hover effect.

#### Scenario: Hovering over a book

- GIVEN the user is on a desktop device
- WHEN the user's cursor hovers over a book cover
- THEN the book cover MUST scale up or lift via a CSS transform.
- AND an indigo neon glow MUST appear around the book cover.

#### Scenario: Selecting a book

- GIVEN the user is on a desktop device
- WHEN the user clicks a book cover
- THEN the book MUST display a persistent selected state (e.g., a brighter border or glow).
- AND this selected state MUST be different from the hover glow.

## MODIFIED Requirements

### Requirement: Responsive Layout Behavior

The bookshelf display MUST adapt its layout based on the viewport size.
(Previously: The component only rendered a carousel view.)

- On viewports narrower than 768px (mobile), the system SHALL render a single-item carousel with previous/next navigation controls.
- On viewports 768px or wider (desktop), the system SHALL render the multi-row grid layout.

#### Scenario: Mobile Carousel View

- GIVEN the user is viewing the site on a mobile device
- WHEN the "Biblioteca Personal" section is visible
- THEN the bookshelf MUST render as a single-item carousel.
- AND previous and next navigation buttons MUST be visible and functional.

#### Scenario: Desktop Grid View

- GIVEN the user is viewing the site on a desktop device
- WHEN the "Biblioteca Personal" section is visible
- THEN the bookshelf MUST render as a multi-row grid.
- AND carousel navigation buttons MUST NOT be visible.

### Requirement: Book Detail Display

Clicking a book cover MUST display its detailed information.
(Previously: This interaction existed but is now applied within two different layouts.)

- In both mobile and desktop layouts, clicking a book cover SHALL render a detail card below the bookshelf/carousel.
- The detail card MUST contain the book's cover image, title, author, summary, and a link to its Amazon page.
- The Amazon link MUST open in a new tab and include `rel="noopener noreferrer nofollow sponsored"`.
- Clicking the same selected book again MUST hide the detail card (toggle behavior).

#### Scenario: Show and Hide Book Details

- GIVEN the bookshelf is displayed
- WHEN a user clicks on a book cover for the first time
- THEN a detail card for that book MUST appear below the bookshelf.
- AND WHEN the user clicks the same book cover again
- THEN the detail card MUST be removed from view.

#### Scenario: Switch Selected Book

- GIVEN a book's detail card is currently displayed
- WHEN a user clicks on a *different* book cover
- THEN the previously displayed detail card MUST be replaced by the new book's detail card.
