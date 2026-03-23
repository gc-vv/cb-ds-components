# Folder responsibilities

This repository intentionally separates the component library source, the demo application pages, and the design system documentation entry point.

## `src/app/ui`

**What it is**

The actual UI component source code.

**Why it exists**

- Keeps the component implementation in a single, predictable place.
- Makes it easy to reference components from both the demo pages and Storybook.
- Keeps “production code” (components) separate from “documentation and examples” (stories and demo routes).

**What goes here**

- Standalone components (e.g. `ButtonComponent`, `FormFieldComponent`)
- Component-level styles, templates, and tests

**What should not go here**

- Demo pages / app routes
- Storybook stories (keep stories close to components or under a dedicated stories location)

## `src/app/demo`

**What it is**

An Angular application layer used to create human-friendly demo pages (routes) for quick manual QA.

**Why it exists**

- Storybook is great for interactive documentation, but you still often need to validate components inside a real Angular runtime (routing, forms, DI, etc.).
- Demo pages are also useful as stable, embeddable examples when you want to show “real app usage”.

**What goes here**

- Route-level demo components such as:
  - `/components/button`
  - `/components/form-field`

## Notes on future evolution (npm library)

Today, components live under `src/app/ui` (app-local).

When you move to publishing via npm, the content under `src/app/ui` is the part that typically migrates into an Angular library package (e.g. `projects/ui/`).
The `demo` area typically remains part of a host application that consumes the library.
