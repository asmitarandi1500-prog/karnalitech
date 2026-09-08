# Project guidance

- React + TypeScript frontend built with Vite and Tailwind CSS v4.
- Run locally: `npm run dev -- --host 127.0.0.1 --strictPort` (port 3000).
- Verify changes with `npm run lint` (TypeScript checking), `npm run build`, and `git diff --check`.
- The current landing page is static and does not require an API key to run. The API-key step in the original AI Studio README is not needed for this frontend.
- Active page sections are composed in `src/App.tsx`; older trading-demo components remain in the repository but are not rendered.
- Use the root transparent PNG logo through Vite asset URLs. Brand name: Karnali Technology; colors: navy, blue, cyan, and white.
- Software features belong in static descriptions, not interactive browser trading simulations. Keep the testimonials section.
- All software download links use `DOWNLOAD_URL` from `src/config.ts` and visible text `Download`. Preserve the configured destination unless specifically asked to change it.
- For browser checks, verify mobile navigation and Escape handling, keyboard FAQ expansion, logo loading, and layouts at 320, 390, 620, 768, 1024, and 1440 pixels. Intercept external download navigation during automated tests; do not download or execute the software to test the website.
