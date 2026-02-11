# cb-ds-components

Base project for building a company UI component library (Angular), with:

- Local demo pages for manual QA
- Storybook for component documentation and interactive examples
- Zeroheight integration (Zeroheight embeds the published Storybook)

## Quick start

Install dependencies:

```bash
npm ci
```

Run the demo app:

```bash
npm run start
```

## Local demo routes

These routes are meant for quickly validating components in an Angular app runtime:

- `/components/button`
- `/components/form-field`

## Storybook

Run Storybook locally:

```bash
npm run storybook
```

Build the static Storybook site:

```bash
npm run build-storybook
```

### Zeroheight integration

Zeroheight is expected to embed the **published Storybook**.

- Configure a Storybook resource in Zeroheight pointing to the Storybook base URL (no `?path=...`).
- When embedding in pages, prefer linking to a specific component docs page (e.g. `?path=/docs/...`).

## Design system (Zeroheight iframe)

The demo app includes a `/design-system` route that embeds Zeroheight.

Configure the Zeroheight URL in:

- `src/environments/environment.ts`
- `src/environments/environment.production.ts`

## Deploy Storybook to GitHub Pages

This repo includes a GitHub Actions workflow that builds Storybook and deploys it to GitHub Pages.

Enable it in GitHub:

1. Settings -> Pages
2. Source: GitHub Actions

Notes:

- The workflow runs on pushes to `main`.
- If the deploy job is blocked, check Settings -> Environments -> `github-pages` and ensure `main` is allowed to deploy.

## Folder structure

See `docs/FOLDERS.md` for the rationale behind `src/app/ui`, `src/app/demo`, and `src/app/design-system`.
