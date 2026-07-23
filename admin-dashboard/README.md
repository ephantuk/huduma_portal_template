# Huduma DGSP — Admin Portal & Dashboard (template)

Next.js 16 (App Router) + React 19 + Bootstrap 5 (via `react-bootstrap`) template for the
**Admin Portal & Dashboard** surface of the Huduma Kenya Digital Government Services Platform (DGSP).

Structure and page set are derived from `DGSP_User_Stories.docx` (Module A, epics A1–A8) and
`HVC_User_Requirements_Document_v1.1.docx`, both in the repo root. Story/requirement IDs (e.g. `ADM-07`)
are referenced directly in page copy so you can trace each screen back to its source requirement.

## Stack

- **Next.js 16**, App Router, JavaScript (no TypeScript)
- **React 19**
- **react-bootstrap 2 + Bootstrap 5** — component library (not just CSS classes)
- **recharts** — charts on the overview / reports pages
- **Sass** — theme overrides layered on top of compiled Bootstrap CSS (`app/globals.scss`)
- All data is mocked (`lib/mock/*.js`) — there is no backend wired up yet

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## Page map (epics → routes)

| Route | Epic / requirement |
|---|---|
| `/login` | ADM-01, ADM-02 — username/password + MFA |
| `/dashboard` | ADM-18, ADM-20 — KPI overview |
| `/onboarding`, `/onboarding/[id]` | ADM-04, ADM-05, ADM-06 — MDA onboarding pipeline & UX sign-off |
| `/workflows`, `/workflows/[id]` | ADM-07, ADM-08, ADM-09 — no-code designer, fees/PRN, multi-device preview |
| `/queue`, `/queue/[id]` | ADM-10 to ADM-14 — application queue, document review, messaging, certificate |
| `/users` | ADM-16, ADM-17 — role management + audit log |
| `/audit` | ADM-21, ADM-22, ADM-23 — audit trail, retention policy |
| `/reports`, `/reports/executive` | ADM-18 to ADM-20 — agency + national dashboards |
| `/support` | ADM-15, ADM-23 — escalations |
| `/settings` | ADM-02 — MFA / IP allowlist / PAM session controls |

## ⚠️ Architectural gotcha found while building this: react-bootstrap `Card` and Server Components

`react-bootstrap` ships several **compound components** built with `Object.assign(Card, { Body, Title, ... })`
across sibling files (`Card`, `Form`, `Alert`, `Tabs`, `ListGroup`, `Pagination`, `Accordion`, `Dropdown`,
`Navbar`, `Nav`, `Offcanvas`, `Modal`, and others — anything with a `.Body`/`.Item`/`.Title` sub-component).

Under **Next.js 16 + Turbopack**, rendering one of these directly from a plain **Server Component** page
(no `"use client"`) intermittently/deterministically fails at build or request time with:

```
Error: Element type is invalid: expected a string ... but got: undefined.
```

This is a module-evaluation-order issue specific to how Turbopack's server/RSC graph resolves these
cross-file `Object.assign` exports — it is **not** a mistake in the JSX itself. `Badge`, `Button`, `Table`,
`ProgressBar` and other single-file components are unaffected.

**The fix applied throughout this template:** any UI that uses one of the affected compound components lives
in its own `"use client"` component (see `components/*/​*Card.jsx`, `*Client.jsx`, `*Table.jsx`). Server
Component `page.js` files only keep `export const metadata`, data fetching/`params`, and pass **plain,
serializable props** down — never JSX built from a risky component, and never functions (see the second
gotcha below).

**Rule of thumb for new pages:** if a `page.js` has no `"use client"` directive, don't import `Card`, `Form`,
`Alert`, `Tabs`, `ListGroup`, `Pagination`, `Accordion`, `Dropdown`, `Navbar`, `Nav`, `Offcanvas`, `Modal`,
`Toast`, `Popover`, `Tooltip`, `Carousel`, `Breadcrumb`, `Figure`, `InputGroup`, `Switch`, or
`ToggleButtonGroup` into it directly — wrap the content in a small client component first.

## Another RSC gotcha: don't pass `render` functions into `DataTable`

`components/common/DataTable.jsx` is `"use client"`. Its `columns` prop supports a `render(row)` function per
column for custom cell rendering. If a **Server Component** page defines that function and passes it down as
a prop, Next.js throws `Functions cannot be passed directly to Client Components...` — functions aren't
serializable across the server/client boundary.

The fix: each list page delegates to a small `"use client"` wrapper (e.g. `components/queue/QueueTable.jsx`)
that defines its own `columns` (with `render` closures) locally and only receives plain `rows` data as a prop
from the server page. Follow this pattern for any new table.

## Extending this template

- **Formio**: intentionally not wired up yet. The workflow designer (`/workflows/[id]`) and fee configuration
  are placeholders for where a real form-builder/renderer would plug in.
- **Real auth**: `/login` is a two-step UI mock (credentials → MFA code) that just redirects on submit. Replace
  with real calls to your identity provider (see ADM-01/ADM-02 for the intended MFA/PAM/IP-allowlist behaviour).
- **Real data**: replace `lib/mock/*.js` imports with API/data-layer calls. Keep the Server Component vs.
  Client Component boundaries described above when doing so.
- **Charts**: `components/charts/*` wrap `recharts`; swap the mock arrays for real aggregates.
