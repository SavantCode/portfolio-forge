# Portfolio content guide

## Structure

- `src/data/portfolio.ts`: typed profile, experience, project, and article data.
- `src/components/portfolio/`: shared navigation, listings, headings, and experience views.
- `src/routes/`: page composition and metadata; project and article details use dynamic routes.
- `src/styles.css`: semantic theme tokens, layout, motion, and print styling.
- `src/assets/`: bundled portrait and product visuals.

## Add a project

1. Import the project's cover image into `src/data/portfolio.ts`.
2. Add a new entry to `projects`, following the `Project` interface. Use a unique URL-safe `slug`.
3. Set its categories, stack, status, challenges, learnings, and overview.

The project listing, category counts, related projects, and `/projects/<slug>` case study update automatically. Current previews are static product illustrations; live demos and repositories can be integrated later.

## Add an article

Add an entry to `articles` with a unique slug and its paragraphs. The blog listing, search, and `/blog/<slug>` reading page use the same record.

## Replace demo content

All names, employment, achievements, contact information, and projects are fictional examples. Replace the profile and content data, portrait, page metadata, and `public/alex-morgan-resume.txt` before using this as a real personal portfolio. The resume also supports browser printing to PDF.

## Runtime

This project uses TypeScript, React 19, and TanStack Start, not Next.js. Navigation and metadata follow the workspace's file-based routing conventions. No backend or external data service is required for the current demo.