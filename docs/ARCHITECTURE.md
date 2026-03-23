# Architecture and Technical Documentation — UI Components Library

## 1. Overview

This repository is a **base project** for building a **UI component library in Angular**, containing:

- **Reusable components** (e.g., `Button`, `FormField`) implemented as **standalone components**.
- **Demo pages** within the Angular app itself for validation in real runtime (routing, forms, DI, etc.).
- **Storybook** as the **official documentation tool** (single source of truth) with interactive examples, controls, and Docs pages.
- **Storybook deployment pipeline to GitHub Pages** (for consumption by teams and stakeholders without needing to run locally).

### Goal

Create a solid and scalable foundation for UI component development that:

- Is **interactively documented** (Storybook).
- Can be **validated in real Angular context** (demo pages).
- Is **ready for future evolution** as a publishable npm library.

---

## 2. Folder Structure

The structure clearly separates "product code" from "examples/demonstrations":

### `src/app/ui/`

**Responsibility:** UI component implementation ("library" code).

**Typical content:**
- `button/` 
  - `button.component.ts|html|scss`
  - `button.stories.ts`
- `form-field/`
  - `form-field.component.ts|html|scss`
  - `form-field.stories.ts`

**Rationale:** 
- Keep component code centralized, predictable, and easy to consume by both the demo app and Storybook.
- Facilitate future migration to a separate Angular package (`projects/ui-library`).

**What goes here:**
- Standalone components
- Styles and templates
- Storybook stories (co-located with the component)
- Unit tests (`.spec.ts`)

**What does NOT go here:**
- Demo routes
- Application/business logic

---

### `src/app/demo/`

**Responsibility:** demo pages/routes for **manual QA** in a "real" Angular environment.

**Existing routes:**
- `/components/button` → `ButtonDemoComponent`
- `/components/form-field` → `FormFieldDemoComponent`

**Rationale:** 
- Storybook documents and helps with isolated component exploration.
- Demo pages validate integration with full Angular runtime:
  - ReactiveForms and validations
  - Navigation and guards
  - Providers and services
  - Interaction between multiple components

**What goes here:**
- Route components (demo)
- Real-world usage examples of UI components
- Complex manual test cases

---

### `docs/`

**Responsibility:** technical and architecture documentation.

**Files:**
- `FOLDERS.md` — Folder structure rationale
- `ARCHITECTURE.md` — This document (overview, dependencies, workflows)

---

## 3. Main Dependencies

### Angular (`^21.1.0`)

**Why:**
- Standard stack for the company's product/ecosystem.
- Native support for standalone components, signals, and DX improvements.
- Good integration with build and test tools.

**Usage:**
- Base framework for all UI components.
- Standalone components to facilitate tree-shaking and modularity.

---

### Storybook (`@storybook/angular` `^10.2.8`)

**Why:**
- **Living and interactive documentation** of components.
- Allows visual exploration of variations (via Controls/Args).
- Generates automatic "Docs" pages with JSDoc/metadata.
- Publishable as a static site (GitHub Pages).

**Usage:**
- Each component in `src/app/ui/` has a corresponding story (`.stories.ts`).
- Stories define:
  - Main variations (Primary, Secondary, Disabled, Error, etc.)
  - Interactive controls for inputs
  - Inline documentation

**Installed addons:**
- `@storybook/addon-a11y` — Accessibility verification
- `@storybook/addon-docs` — Documentation generation
- `@storybook/addon-onboarding` — Initial guide

---

### Compodoc (`^1.2.1`)

**Why:**
- Technical documentation generation from TypeScript/Angular code.
- Integration with Storybook to enrich Docs pages.

**Usage:**
- Automatically executed during Storybook build.
- Generates `documentation.json` consumed by Storybook.

---

### GitHub Actions + GitHub Pages

**Why:**
- Automated Storybook publishing.
- Simple access for anyone (dev, QA, design, product) via public URL.
- Zero server configuration.

**Workflow:**
- File: `.github/workflows/storybook-pages.yml`
- Trigger: push to `main` branch
- Steps:
  1. Code checkout
  2. Node.js setup
  3. `npm ci`
  4. `npm run build-storybook`
  5. Deploy to GitHub Pages

**Access URL:**
- `https://gc-vv.github.io/cb-ds-components/`

---

### Vitest (`^4.0.8`)

**Why:**
- Modern, fast test runner compatible with Angular.
- Configured via `@angular/build:unit-test`.

**Usage:**
- Unit tests for components (`.spec.ts`).
- Command: `npm test`

---

## 4. Implemented Business Rules

The current scope is primarily **UI/UX and API consistency** of components. There are no complex domain rules yet, but rather interface patterns.

### Button Component

**Inputs:**
- `variant: 'primary' | 'secondary' | 'danger'` — Defines visual style
- `type: 'button' | 'submit' | 'reset'` — HTML button type
- `disabled: boolean` — Disabled state

**Technical rules:**
- CSS classes applied via `[class.btn--*]` to avoid overwriting base `btn` class.
- `disabled` state reflected in HTML `[disabled]` attribute.
- Button content via `<ng-content>` (content projection).

**Variations documented in Storybook:**
- Primary
- Secondary
- Danger
- Disabled

---

### FormField Component

**Inputs:**
- `label: string` — Field label
- `hint: string` — Help text (displayed when there's no error)
- `error: string` — Error message (overrides hint when present)

**Display rules:**
- If `error` exists and is not empty, displays error message in red.
- Otherwise, displays `hint` in gray.
- Label always visible.

**Expected usage:**
- Wrap real inputs (text, email, etc.) via `<ng-content>`.
- Integration with ReactiveForms to display validation errors.

**Variations documented in Storybook:**
- Default (with hint)
- WithError (with error message)

---

## 5. Workflows

### 5.1. Development Workflow (Developer)

#### Local development

**Start demo app:**
```bash
npm run start
```
- Access `http://localhost:4200`
- Available routes:
  - `/components/button`
  - `/components/form-field`

**Start Storybook:**
```bash
npm run storybook
```
- Access `http://localhost:6006`
- Use for:
  - Validate variations via Controls
  - Document component API
  - Quickly review layout/styling

---

#### Create new component (recommended pattern)

1. **Create component structure:**
   ```bash
   # Example: create a new Input component
   mkdir -p src/app/ui/input
   ```

2. **Implement the component:**
   - `input.component.ts` (standalone component)
   - `input.component.html`
   - `input.component.scss`

3. **Create Storybook story:**
   - `input.stories.ts`
   - Define:
     - Meta (title, component, argTypes)
     - Main stories (Default, Disabled, Error, etc.)
     - Interactive controls

4. **(Optional) Create demo page:**
   - When the component needs validation in real Angular context:
     - ReactiveForms
     - Navigation
     - Providers/services
   - Create in `src/app/demo/components/input-demo/`
   - Add route in `src/app/app.routes.ts`

5. **Validate:**
   - Test in Storybook (`npm run storybook`)
   - Test in demo page (`npm run start`)
   - Write unit tests (`.spec.ts`)

---

#### Documentation publishing

**Local Storybook build:**
```bash
npm run build-storybook
```
- Output: `storybook-static/`

**Automatic deployment:**
- When pushing to `main` branch, the `.github/workflows/storybook-pages.yml` workflow automatically publishes to GitHub Pages.
- Verify deployment:
  - GitHub → Actions → Workflow "Deploy Storybook to GitHub Pages"
  - Wait for "deploy" job to turn green

**Access published Storybook:**
- `https://gc-vv.github.io/cb-ds-components/`

---

### 5.2. Consumption Workflow (Business / UX / QA)

#### Who consumes the documentation

- **Developers:** API reference, variations, states, code examples.
- **QA:** quick validation of states and visual regressions.
- **Design/Product:** review of component behavior and consistency (without needing to run locally).

#### How to consume

1. **Access published Storybook:**
   - URL: `https://gc-vv.github.io/cb-ds-components/`

2. **Navigate through components:**
   - Left sidebar lists all available components
   - Each component has:
     - "Docs" page (automatically generated documentation)
     - Individual stories (variations)

3. **Test variations:**
   - Use controls (Controls panel) to dynamically change inputs
   - View changes in real-time

4. **Validate accessibility:**
   - A11y addon displays accessibility warnings/errors

---

### 5.3. Manual QA Workflow (Demo Pages)

For cases requiring validation in real Angular context:

1. **Run demo app locally:**
   ```bash
   npm run start
   ```

2. **Access demo routes:**
   - `/components/button` — Tests Button in different states
   - `/components/form-field` — Tests FormField with ReactiveForms

3. **Validate:**
   - Interactions (click, disabled, submit)
   - Form validations
   - Navigation between routes
   - Integration with services (if applicable)

---

## 6. Governance and Standards for Future Components

For upcoming components (e.g., inputs, selects, modals, toast, tabs, etc.), the expected standard is:

### Consistent API

- **Well-defined inputs:**
  - Restricted types when possible (union types, enums)
  - Sensible default values
  - JSDoc documentation for each input

- **Explicit states:**
  - `disabled`, `loading`, `error`, `readonly` (when applicable)
  - Reflect states in DOM (attributes, classes, ARIA)

- **Clear outputs:**
  - Events with descriptive names (`@Output() valueChange`, `@Output() submit`)

---

### Storybook as Contract

Every relevant visual/behavioral feature should have:

1. **"Default" story:**
   - Component default state
   - Inputs with default values

2. **Important state stories:**
   - Disabled
   - Error
   - Loading
   - Empty state
   - Size/style variations

3. **Configured controls:**
   - ArgTypes for main inputs
   - Allow interactive exploration

4. **Inline documentation:**
   - JSDoc in components
   - Descriptions in stories when necessary

---

### Demo Page When Necessary

Create demo page primarily for workflows involving:

- **ReactiveForms and validation:**
  - Form components (input, select, checkbox, etc.)
  - Synchronous/asynchronous validations
  - Dynamic error messages

- **Navigation and guards:**
  - Components that depend on routing
  - Modals/dialogs that affect navigation

- **Services/providers:**
  - Components that consume Angular services
  - Integration with HTTP, state management, etc.

---

### Preparation for Evolution (npm library)

- **`src/app/ui` is the natural candidate** to migrate to a future package (`projects/ui-library/`) when it's time to publish to npm.

- **Keep components independent:**
  - Avoid dependencies between components when possible
  - Use composition instead of inheritance
  - Standalone components facilitate tree-shaking

- **Always updated documentation:**
  - Storybook reflects current code state
  - README and technical docs updated with each significant change

---

## 7. Architectural Decisions

### Why Standalone Components?

- **Modularity:** each component is self-contained
- **Tree-shaking:** better bundle optimization
- **Angular's future:** official framework direction
- **Facilitates migration:** to npm library in the future

---

### Why Storybook instead of Zeroheight?

**Decision:** Storybook is the single source of documentation (Zeroheight was removed).

**Reasons:**
- **Full control:** code and documentation in the same repository
- **Automation:** automatic deployment via GitHub Actions
- **Interactivity:** controls, variations, visual tests
- **Cost:** free and open-source
- **Integration:** better integration with development workflow

---

### Why Demo Pages in addition to Storybook?

Storybook is excellent for isolated documentation, but:

- **Context limitations:** doesn't simulate full Angular runtime
- **Real validation:** demo pages allow testing:
  - ReactiveForms with complex validations
  - Navigation and guards
  - Providers and DI
  - Interaction between multiple components

**Conclusion:** Storybook for documentation, demo pages for QA in real context.

---

## 8. Technical Roadmap

### Short term (next sprints)

- [ ] Create unit tests for `Button` and `FormField`
- [ ] Remove `src/app/design-system` folder (legacy Zeroheight)
- [ ] Add more basic components:
  - Input (text, email, password)
  - Checkbox
  - Radio
  - Select

### Medium term

- [ ] Configure visual regression tests (Chromatic or similar)
- [ ] Add complex components:
  - Modal/Dialog
  - Toast/Notification
  - Tabs
  - Accordion
- [ ] Document accessibility standards (WCAG)

### Long term

- [ ] Migrate `src/app/ui` to Angular library (`projects/ui-library`)
- [ ] Publish to npm (internal or public registry)
- [ ] Configure semantic versioning and changelog
- [ ] Create contribution guide (CONTRIBUTING.md)

---

## 9. Useful Links

- **Published Storybook:** https://gc-vv.github.io/cb-ds-components/
- **Repository:** (add GitHub link)
- **Angular Documentation:** https://angular.dev
- **Storybook Documentation:** https://storybook.js.org/docs/angular

---

## 10. Contact and Support

For questions, suggestions, or contributions:

- **Responsible team:** [add team/squad]
- **Slack channel:** [add channel]
- **Issues:** [GitHub issues link]

---

**Last updated:** February 2026
