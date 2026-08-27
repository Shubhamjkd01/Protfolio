# Shubham Raj — Portfolio

A static-exported Next.js portfolio for Shubham Raj, focused on AI/ML, Python development, and practical software systems.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is generated in `out/`.

## Deploy to GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is pushed. In the repository settings, set **Pages → Source** to **GitHub Actions**. The build automatically uses the repository name as the Next.js base path for project-site URLs.

## Edit content

Project data, services, skills, links, and contact copy live in `app/page.tsx`. Global styling and responsive behavior live in `app/globals.css`. The contact form validates in the browser and opens a pre-filled `mailto:` message, so no backend or secret is required.
