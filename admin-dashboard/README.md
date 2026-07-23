# Huduma DGSP — Admin Portal & Dashboard (template)

Next.js 16 (**Pages Router**) + React 19 + Bootstrap 5 (via `react-bootstrap`) template for the
**Admin Portal & Dashboard** surface of the Huduma Kenya Digital Government Services Platform (DGSP).

Structure and page set are derived from `DGSP_User_Stories.docx` (Module A, epics A1–A8) and
`HVC_User_Requirements_Document_v1.1.docx`, both in the repo root. Story/requirement IDs (e.g. `ADM-07`)
are referenced directly in page copy so you can trace each screen back to its source requirement.

## Stack

- **Next.js 16**, **Pages Router** (`pages/` directory — not `app/`), JavaScript (no TypeScript)
- **React 19**
- **react-bootstrap 2 + Bootstrap 5** — component library (not just CSS classes)
- **recharts** — charts on the overview / reports pages
- **Sass** — theme overrides layered on top of compiled Bootstrap CSS (`styles/globals.scss`)
- All data is mocked (`lib/mock/*.js`) — there is no backend wired up yet

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## How routing works here (Pages Router)

- `pages/_app.js` — the app shell: global CSS imports, `ThemeProvider`, and the `getLayout` pattern (see below).
- `pages/_document.js` — customizes the outer `<html>`/`<body>`.
- Every file under `pages/` is a route: `pages/dashboard.js` → `/dashboard`, `pages/onboarding/index.js` →
  `/onboarding`, `pages/onboarding/[id].js` → `/onboarding/ONB-1001`, etc.
- **Per-page layout**: pages attach their layout via `Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>`
  (or `<AuthShell>` for `/login`). `_app.js` reads `Component.getLayout` and wraps the page with it — this is the
  standard Pages Router way to have more than one layout (there's no nested-layout file convention like App Router's
  `layout.js`).
- **Dynamic route data**: `[id].js` pages use `getServerSideProps({ params })` to look up the mock record and pass
  it in as a prop — the Pages Router equivalent of the async Server Component + `await params` pattern.
- **Page `<title>`**: since there's no `metadata` export in Pages Router, each page renders its own
  `<Head><title>...</title></Head>` from `next/head`.
- There is no Server/Client Component split in the Pages Router — every component (including anything from
  `react-bootstrap`) can be used directly in any page with no special handling.

## Page map (epics → routes)

| Route | File | Epic / requirement |
|---|---|---|
| `/login` | `pages/login.js` | ADM-01, ADM-02 — username/password + MFA |
| `/dashboard` | `pages/dashboard.js` | ADM-18, ADM-20 — KPI overview |
| `/onboarding`, `/onboarding/[id]` | `pages/onboarding/` | ADM-04, ADM-05, ADM-06 — MDA onboarding pipeline & UX sign-off |
| `/workflows`, `/workflows/[id]` | `pages/workflows/` | ADM-07, ADM-08, ADM-09 — no-code designer, fees/PRN, multi-device preview |
| `/queue`, `/queue/[id]` | `pages/queue/` | ADM-10 to ADM-14 — application queue, document review, messaging, certificate |
| `/users` | `pages/users.js` | ADM-16, ADM-17 — role management + audit log |
| `/audit` | `pages/audit.js` | ADM-21, ADM-22, ADM-23 — audit trail, retention policy |
| `/reports`, `/reports/executive` | `pages/reports/` | ADM-18 to ADM-20 — agency + national dashboards |
| `/support` | `pages/support.js` | ADM-15, ADM-23 — escalations |
| `/settings` | `pages/settings.js` | ADM-02 — MFA / IP allowlist / PAM session controls |

## Extending this template

- **Formio**: intentionally not wired up yet. The workflow designer (`/workflows/[id]`) and fee configuration
  are placeholders for where a real form-builder/renderer would plug in.
- **Real auth**: `/login` is a two-step UI mock (credentials → MFA code) that just redirects on submit. Replace
  with real calls to your identity provider (see ADM-01/ADM-02 for the intended MFA/PAM/IP-allowlist behaviour).
- **Real data**: replace `lib/mock/*.js` imports and `getServerSideProps` lookups with real API/data-layer calls.
- **Charts**: `components/charts/*` wrap `recharts`; swap the mock arrays for real aggregates.
