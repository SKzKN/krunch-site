# Krunch — temporary landing page

Static site, no build step. Open `index.html` or serve the folder with any web server.

## Structure
- `index.html` — single page, semantic HTML
- `css/styles.css` — all styles; design tokens in `:root` at the top
- `js/main.js` — EN/ET language switch (strings dictionary at top) + blob parallax; no dependencies
- `assets/` — logo PNGs (brown + cream), product bag photo, `blob.svg` (the brand blob, recolorable)

## Editing
- **Copy/translations:** edit the `STRINGS` object in `js/main.js`. Elements are bound by `data-i18n="key"`.
- **Order email:** the mailto links are set from `STRINGS.<lang>.mailto`.
- **Colors/fonts:** CSS variables in `:root` (`--ink`, `--paper`, `--gold`, `--pansy`).
- **Bag crop:** `.hero-bag` `clip-path: inset(0 0 15% 0)` and the matching `-15%` bottom margin.
- **Social links:** placeholder URLs — search for `instagram.com/krunch` etc.

## Notes
- Fonts load from Google Fonts (Paytone One, DM Sans). Self-host them for production if needed.
- The founder/kitchen photo in the story section is a placeholder `<span>` — replace with an `<img>`.
