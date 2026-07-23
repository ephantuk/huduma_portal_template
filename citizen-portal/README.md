# Huduma Virtual Centre (HVC) — Citizen Portal (template)

Next.js 16 (**Pages Router**) + React 19 + Bootstrap 5 (via `react-bootstrap`) template for the **citizen-facing
web portal** of the Huduma Virtual Centre, per `HVC_User_Requirements_Document_v1.1.docx` (Section 5) and
`DGSP_User_Stories.docx` (Module B — Citizen Web App, epics B1–B9).

Requirement/story IDs (e.g. `CWA-05`, `UR-PAY-01`) are referenced in page copy so each screen traces back to
its source requirement.

## Stack

- **Next.js 16**, **Pages Router** (`pages/` directory — not `app/`), JavaScript
- **React 19**
- **react-bootstrap 2 + Bootstrap 5**
- **recharts** installed (available for future analytics-style pages; not currently used on the citizen side)
- **Sass** theme layer (`styles/globals.scss`) — same Huduma green palette as the admin-dashboard template,
  plus a mobile bottom tab bar (`components/layout/BottomNav.jsx`) so the web build already reads as
  "mobile app ready" on small screens, per the omnichannel requirement (UR-OMNI-01 to UR-OMNI-06).
- A minimal EN/SW dictionary (`lib/i18n/dictionary.js` + `context/LocaleProvider.jsx`) demonstrates the
  language switch (CWA-17); swap for `next-intl`/`react-i18next` for a real multi-locale build.
- All data is mocked (`lib/mock/*.js`) — no backend wired up yet.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## How routing works here (Pages Router)

- `pages/_app.js` — global CSS imports, `ThemeProvider` + `LocaleProvider`, and the `getLayout` pattern.
- `pages/_document.js` — customizes the outer `<html>`/`<body>`.
- Every file under `pages/` is a route: `pages/checkout.js` → `/checkout`, `pages/services/[slug]/index.js` →
  `/services/national-id-replacement`, `pages/services/[slug]/apply.js` → `.../apply`, etc.
- **Per-page layout**: each page sets `Page.getLayout = (page) => <PortalLayout>{page}</PortalLayout>` (or
  `<AuthShell>` for `/login`) — `_app.js` reads `Component.getLayout` and wraps accordingly. This is how two
  different shells (navbar+bottom-nav vs. centered auth card) coexist without App Router's nested `layout.js`.
- **Dynamic route data**: `[slug].js`/`[id].js` pages use `getServerSideProps({ params })` to look up the mock
  record and pass it in as a prop.
- **Page `<title>`**: each page renders its own `<Head><title>...</title></Head>` from `next/head` (no
  `metadata` export in Pages Router).
- There is no Server/Client Component split in the Pages Router — every component (including
  `react-bootstrap`'s `Card`, `Form`, `Tabs`, etc.) can be used directly in any page, no special handling
  required.

## Page map (epics/requirements → routes)

| Route | File | Epic / requirement |
|---|---|---|
| `/login` | `pages/login.js` | UR-AUTH-01 to 07, CWA-01, CWA-02 — HVC account or eCitizen SSO, OTP, consent |
| `/` | `pages/index.js` | CWA-03, CWA-04, UR-CAT-01, UR-CAT-04, UR-CAT-05 — service catalogue + continue-in-progress |
| `/services/[slug]` | `pages/services/[slug]/index.js` | UR-RM-01 to 05 — Roadmap (summary, documents, fees) |
| `/services/[slug]/apply` | `pages/services/[slug]/apply.js` | CWA-05, CWA-06, CWA-07 — dynamic form wizard, save/resume, document upload |
| `/checkout` | `pages/checkout.js` | UR-PAY-01 to 06, CWA-08, CWA-09, CWA-10 — eCitizen payment, receipt, retry |
| `/applications`, `/applications/[id]` | `pages/applications/` | CWA-11, CWA-13, UR-CONT-01 to 06 — status tracking, drafts/resume, certificate + QR |
| `/history` | `pages/history.js` | CWA-18 — application & payment history |
| `/support` | `pages/support.js` | CWA-14, CWA-15 — AI assistant stub, document checklists, call for help |
| `/account` | `pages/account.js` | CWA-17, UR-NOT-05 — profile, notification channel prefs, language |

The concrete example used throughout the apply/roadmap flow (`lib/mock/roadmap.js`) is **National ID Card
Replacement**, the confirmed MVP Service 1 from URD Section 5.11 (Police Abstract → Waiting Card).

## Extending this template

- **Formio**: intentionally not wired up. The application wizard (`components/apply/ApplicationWizardClient.jsx`)
  is a plain multi-step Bootstrap form standing in for a Form.io-rendered dynamic schema (CWA-05) — swap its
  steps for a `@formio/react` `<Form>` bound to each service's JSON schema.
- **Real auth**: `/login` mocks both entry points (UR-AUTH-04) with local state only. Wire up Keycloak SSO
  and the eCitizen SSO redirect for real.
- **Real payments**: `/checkout` simulates PRN + eCitizen redirect/success/failure. Replace with the actual
  eCitizen/PesaFlow checkout integration (UR-PAY-01 to 05).
- **i18n**: `lib/i18n/dictionary.js` only covers a handful of strings as a proof of concept — extend the
  dictionary or replace with a proper i18n library before adding more locales/pages.
- **Omnichannel**: USSD and Kiosk are out of scope for this web template by nature of the channel, but service
  data (`lib/mock/services.js`) already carries a `channels` array per service, mirroring UR-CFG-08/UR-OMNI-05
  so the same service metadata could drive channel-specific renderers later.
