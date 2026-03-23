# Story: Likely Components Catalog (Base: DS Forró)
 
 As a **Design System team (Design + Engineering)**
 I want **to catalog and validate the likely components for the new Design System, using DS Forró as the baseline**
 So that **we align scope and prioritization and reduce rework while building the Design System MVP**
 
 ## Context
 
 We need to consolidate which components will be part of the new Design System. We already have **DS Forró** as a reference, which serves as a baseline for naming, UI patterns, and behaviors.
 
 Current situation:
 - The “likely components” list exists in text form, without standardization and without classification (standalone vs. composed).
 
 Expected situation:
 - A versioned document with the components catalog.
 - An initial classification of what tends to be **standalone** vs. **composed**.
 - Official references (Jira + DS Forró) linked to support discovery and implementation.
 
 Business rules / notes:
 - Items marked with `*` in DS Forró are “likely to be used”, but **may not become standalone components** if the solution is better delivered via **composition**.
 
 Value delivered:
 - Baseline for prioritization and backlog creation (epics/stories)
 - Shared language across teams
 - Less rework by reusing existing patterns
 
 ## Acceptance Criteria
 
 - [ ] **Versioned catalog:** Components list is documented and versioned in this repository
 - [ ] **Baseline reference:** Document explicitly states DS Forró as the base reference
 - [ ] **Preserved `*` items:** Items flagged with `*` are kept as per the original source
 - [ ] **`*` rule documented:** It is stated that `*` items can be composed (not necessarily standalone)
 - [ ] **Initial classification:** Components are classified as "likely standalone" and "likely composed" (subject to validation)
 - [ ] **References included:** Links to Jira and DS Forró are included
 
 ## Dependencies / Assumptions
 
 - **DS Forró (docs/storybook):** access is required to validate naming, states, and behavior
 - **Reference ticket (Jira):** traceability with `KAN-8`
 - **Design/UX:** scope and prioritization validation
 - **Engineering:** technical validation (standalone vs. composed) and impacts on shared libraries
 
 ## Test Scenarios
 
 - **TS01 - Catalog validation:** ensure all listed components are present in the document with no duplicates
 - **TS02 - `*` flag validation:** ensure `*` items remain flagged and the composition rule is documented
 - **TS03 - Reference validation:** ensure links (Jira and DS Forró) are reachable and relevant
 - **TS04 - Classification validation:** ensure every item is classified (standalone or composed)
 
 *(Register these test cases in Zephyr or an equivalent tool, attaching the document and links as evidence.)*
 
 ## Technical Refinement
 
 ### Components List (Base: DS Forró)
 
 As agreed, below are the components we will likely use in the new Design System (baseline: DS Forró):

- Accordion
- Alert
- Bagde
- Breadcrumbs
- Chips and tags
- Combo box*
- Copy container
- Divider
- Drawer*
- Drop zone
- Feed Pagination
- Input
- Input Stepper
- Lists
- Modal
- Multi Select
- Page Control
- Pagination
- Progress bar
- Radio button
- Slider
- Spinner
- Swiper*
- Tab
- Text area*
- Timeline tracker
- Toast
- Toggle
- Tooltips
- Tipografia*
- Upload files*

 **Note about `*` items:**
 Items marked with `*` were flagged in DS Forró as “likely to be used”; **some may not need to be standalone components**, as they can be **composed from base components**.
 
 ### Initial classification (for backlog creation)
 
 This classification is a starting point for organization and technical refinement.
 
 #### Likely standalone

- Accordion
- Alert
- Breadcrumbs
- Divider
- Input
- Input Stepper
- Lists
- Modal
- Pagination
- Progress bar
- Radio button
- Slider
- Spinner
- Tab
- Toast
- Toggle
- Tooltips

 #### Likely composed (or composition candidates)

- Bagde
- Chips and tags
- Combo box*
- Copy container
- Drawer*
- Drop zone
- Feed Pagination
- Multi Select
- Page Control
- Swiper*
- Text area*
- Timeline tracker
- Tipografia*
- Upload files*

 ### References

 - Jira:
   - https://casasbahia-tw-modernizacao-fe.atlassian.net/browse/KAN-8
 - DS Forró:
   - https://forrods.via.com.br/?path=/docs/concepts-introdução--page
 
 ### Suggested next steps
 
 - Break this catalog into **epics** (e.g., Form Controls, Overlay/Feedback, Navigation, Data Display).
 - For each component:
   - Define required states (Default/Disabled/Loading/Error)
   - Define the minimum API (inputs/outputs)
   - Decide whether it requires a demo page (in addition to Storybook)
