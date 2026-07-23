// Sidebar navigation, grouped to mirror the Admin Portal & Dashboard epics
// (Module A, DGSP User Stories, epics A1-A8).
export const navConfig = [
  {
    heading: "Overview",
    items: [{ label: "Dashboard", href: "/dashboard", icon: "bi-speedometer2" }],
  },
  {
    heading: "MDA Onboarding",
    items: [
      { label: "Onboarding Pipeline", href: "/onboarding", icon: "bi-signpost-split" },
    ],
  },
  {
    heading: "Service Configuration",
    items: [
      { label: "Workflow Designer", href: "/workflows", icon: "bi-diagram-3" },
    ],
  },
  {
    heading: "Operations",
    items: [
      { label: "Application Queue", href: "/queue", icon: "bi-inbox" },
      { label: "Support & Escalations", href: "/support", icon: "bi-headset" },
    ],
  },
  {
    heading: "Administration",
    items: [
      { label: "Users & Roles", href: "/users", icon: "bi-people" },
      { label: "Audit & Compliance", href: "/audit", icon: "bi-shield-check" },
    ],
  },
  {
    heading: "Insights",
    items: [
      { label: "Agency Reports", href: "/reports", icon: "bi-bar-chart" },
      { label: "Executive Dashboard", href: "/reports/executive", icon: "bi-graph-up-arrow" },
    ],
  },
  {
    heading: "Account",
    items: [{ label: "Settings & Security", href: "/settings", icon: "bi-gear" }],
  },
];
