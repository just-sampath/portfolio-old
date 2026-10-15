# Personal Portfolio Website

Terminal-inspired portfolio for Sai Sampath Yellapanthula — Full Stack & AI Engineer. Built as a single-page React app with a contact form powered by EmailJS.

## Features

- Responsive terminal-style layout (sections: About, Experience, Case Studies, Skills, Projects, Contact)
- Boot screen (once per session; skipped with reduced motion)
- Résumé PDF served from `public/`
- Contact form via EmailJS (`@emailjs/browser`)
- SEO meta tags, Open Graph (PNG), Twitter Card, canonical, robots/sitemap
- Type-safe development with TypeScript
- Unit tests with Vitest and Testing Library

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`)
- EmailJS (`@emailjs/browser`)
- Vitest
- ESLint
- Lucide React (icons)
- Node 20+ (Volta pin / CI)

## Project Structure

```
src/
├── components/
│   ├── layout/       # Terminal shell layout
│   ├── sections/     # Hero, skills, experience, projects, contact, footer
│   └── ui/           # Boot screen
├── data/             # Profile, skills, experience, projects content
├── hooks/            # Contact form, scroll spy, interval
├── lib/              # Validation and EmailJS client
├── types/            # Ambient type declarations
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/just-sampath/sampath.github.io.git
   cd sampath.github.io
   ```

2. Install dependencies (Node 20+):
   ```bash
   npm install
   ```

3. Configure EmailJS for the local contact form:
   ```bash
   cp .env.example .env
   ```
   Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.

   EmailJS template variables expected: `from_name`, `from_email`, `message`, `reply_to`.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Run tests, lint, and production build:
   ```bash
   npm test
   npm run lint
   npm run build
   ```

## Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start Vite dev server              |
| `npm run build`      | Typecheck and build for production |
| `npm run preview`    | Preview the production build       |
| `npm test`           | Run Vitest once                    |
| `npm run test:watch` | Vitest in watch mode               |
| `npm run lint`       | ESLint                             |
| `npm run deploy`     | Build and publish `dist/` via gh-pages |

## Production / Deploy

Deploy is driven by `.github/workflows/deploy.yml` on pushes to `main`. The workflow:

1. `npm ci`
2. `npm test`
3. `npm run lint`
4. Optionally notes whether EmailJS secrets are present (does **not** fail without them)
5. `npm run build` (EmailJS env injected if secrets exist; Vite bakes `VITE_*` at build time)
6. Publishes `dist/` via `gh-pages`

### GitHub secrets

| Secret | Required? | Purpose |
| ------ | --------- | ------- |
| `PORTFOLIO_TOKEN` | **Yes** | PAT for `gh-pages` push |
| `VITE_EMAILJS_SERVICE_ID` | Optional | EmailJS service (public-in-bundle) |
| `VITE_EMAILJS_TEMPLATE_ID` | Optional | EmailJS template (public-in-bundle) |
| `VITE_EMAILJS_PUBLIC_KEY` | Optional | EmailJS public key (public-in-bundle) |

EmailJS secrets are **skippable for now**. Deploy succeeds without them; the live contact form shows an unavailable message until all three are set and a new deploy runs.

### EmailJS dashboard

Treat the public key as public. In the EmailJS console:

- Restrict allowed domains (e.g. `just-sampath.in`)
- Enable rate limits / quota alerts
- Use escaped template fields only (no raw HTML injection of user input)

Local `.env` does **not** ship to production; only CI secrets used at build time do.

## Configuration

- `vite.config.ts` — Vite + React plugin
- `vitest.config.ts` — Vitest
- `eslint.config.js` — ESLint flat config
- `tsconfig.json` / `tsconfig.app.json` — TypeScript
- `.env.example` — EmailJS public env placeholders
- Tailwind 4 is configured via `@tailwindcss/vite` and `src/index.css` (no separate `tailwind.config.js`)

## License

MIT License — feel free to use this code for your own portfolio.
