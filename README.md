# CbAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Zeroheight

The project includes a `/design-system` route that embeds Zeroheight.

## Component demo routes

Use these routes as embeddable examples in Zeroheight:

- `/components/button`
- `/components/form-field`

Configure the URL in:

- `src/environments/environment.ts`
- `src/environments/environment.production.ts`

## Storybook

Run Storybook locally:

```bash
npm run storybook
```

Build the static Storybook site:

```bash
npm run build-storybook
```

### Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds Storybook and deploys it to GitHub Pages.

Steps to enable:

1. In GitHub: Settings -> Pages
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually)

Once deployed, embed the published Storybook URL in Zeroheight (preferably linking directly to a specific component docs page using `?path=/docs/...`).

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
