# Huduma Virtual Centre (HVC) — Citizen Portal (template)

Next.js 16 (App Router) + React 19 + Bootstrap 5 (via `react-bootstrap`) template for the **citizen-facing
web portal** of the Huduma Virtual Centre, per `HVC_User_Requirements_Document_v1.1.docx` (Section 5) and
`DGSP_User_Stories.docx` (Module B — Citizen Web App, epics B1–B9).

Requirement/story IDs (e.g. `CWA-05`, `UR-PAY-01`) are referenced in page copy so each screen traces back to
its source requirement.

## Stack

- **Next.js 16**, App Router, JavaScript
- **React 19**
- **react-bootstrap 2 + Bootstrap 5**
- **recharts** installed (available for future analytics-style pages; not currently used on the citizen side)
- **Sass** theme layer (`app/globals.scss`) — same Huduma green palette as the admin-dashboard template,
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

## Page map (epics/requirements → routes)

| Route | Epic / requirement |
|---|---|
| `/login` | UR-AUTH-01 to 07, CWA-01, CWA-02 — HVC account or eCitizen SSO, OTP, consent |
| `/` | CWA-03, CWA-04, UR-CAT-01, UR-CAT-04, UR-CAT-05 — service catalogue + continue-in-progress |
| `/services/[slug]` | UR-RM-01 to 05 — Roadmap (summary, documents, fees) |
| `/services/[slug]/apply` | CWA-05, CWA-06, CWA-07 — dynamic form wizard, save/resume, document upload |
| `/checkout` | UR-PAY-01 to 06, CWA-08, CWA-09, CWA-10 — eCitizen payment, receipt, retry |
| `/applications`, `/applications/[id]` | CWA-11, CWA-13, UR-CONT-01 to 06 — status tracking, drafts/resume, certificate + QR |
| `/history` | CWA-18 — application & payment history |
| `/support` | CWA-14, CWA-15 — AI assistant stub, document checklists, call for help |
| `/account` | CWA-17, UR-NOT-05 — profile, notification channel prefs, language |

The concrete example used throughout the apply/roadmap flow (`lib/mock/roadmap.js`) is **National ID Card
Replacement**, the confirmed MVP Service 1 from URD Section 5.11 (Police Abstract → Waiting Card).

## ⚠️ Architectural gotcha carried over from the admin-dashboard template

`react-bootstrap`'s compound components (`Card`, `Form`, `Alert`, `Tabs`, `Dropdown`, `Navbar`, `Nav`,
`Offcanvas`, `ListGroup`, `Pagination`, `Accordion`, and anything else with a `.Body`/`.Item`/`.Title`
sub-component attached via `Object.assign` across sibling files) **must not be rendered directly from a plain
Server Component** (`page.js` without `"use client"`) under Next.js 16 + Turbopack — it fails with:

```
Error: Element type is invalid: expected a string ... but got: undefined.
```

Every page in this template already follows the safe pattern: `page.js` stays a Server Component (keeps
`export const metadata`, reads `params`, passes plain serializable data as props), and all Bootstrap-heavy
markup lives in a co-located `"use client"` component (`components/**/*Client.jsx`). Follow the same split
for any new route — see `admin-dashboard/README.md` in the sibling project for the full write-up (same repo
root, same bug, same fix).

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
