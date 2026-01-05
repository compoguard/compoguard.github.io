# Compoguard GitHub Pages Site

This repository contains the static website for **Compoguard** (`compoguard.github.io`). It is a bilingual (English / Turkish) landing page that showcases the SecOps platform.

## Files
- `index.html` – The main HTML page with SEO meta tags and language‑specific content.
- `styles.css` – Premium styling (glass‑morphism, dark‑mode, responsive layout).
- `script.js` – Small JavaScript that toggles the language and remembers the choice in `localStorage`.
- `README.md` – This file.
- `.nojekyll` – Empty file to disable Jekyll processing on GitHub Pages.

## How to Deploy to GitHub Pages
1. **Commit & push** the files to the `main` branch of the repository.
   ```bash
   git add index.html styles.css script.js README.md .nojekyll
   git commit -m "Add bilingual landing page"
   git push origin main
   ```
2. **Enable GitHub Pages**:
   - Go to the repository on GitHub → Settings → Pages.
   - Under *Source*, select **Branch: main** (or `/docs` if you prefer that folder) and click **Save**.
   - GitHub will provide a URL like `https://<your‑username>.github.io/compoguard.github.io/`.
3. **Verify**:
   - Open the URL in a browser.
   - The page should display with the default language (English or Turkish based on your browser locale).
   - Click the **Türkçe / English** button to toggle languages; the choice is saved for future visits.
   - Dark‑mode will automatically apply if your OS prefers a dark theme.

## Development
- To test locally, simply open `index.html` in a browser (`file:///.../index.html`).
- No build step is required because the site is static.
- If you want hot‑reloading, you can serve the folder with a simple HTTP server, e.g.:
  ```bash
  npx serve .
  ```

## Customization
- Update the content inside the `<section>` elements in `index.html` to match your branding.
- Adjust colors in `styles.css` by editing the CSS variables under `:root`.
- Replace the placeholder logo text with your actual logo image if desired.

Enjoy your new corporate landing page! 🎉
