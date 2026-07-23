export const overviewStats = [
  { label: "Pending applications", value: "342", delta: "+18 today", icon: "bi-inbox", tone: "primary" },
  { label: "SLA breaches (7d)", value: "12", delta: "-4 vs last week", icon: "bi-exclamation-triangle", tone: "danger" },
  { label: "Revenue collected (7d)", value: "KES 4.82M", delta: "+9.2%", icon: "bi-cash-coin", tone: "success" },
  { label: "MDAs onboarding", value: "5", delta: "2 in UAT", icon: "bi-signpost-split", tone: "info" },
];

export const weeklyVolume = [
  { day: "Mon", submitted: 62, approved: 41 },
  { day: "Tue", submitted: 75, approved: 58 },
  { day: "Wed", submitted: 58, approved: 49 },
  { day: "Thu", submitted: 90, approved: 66 },
  { day: "Fri", submitted: 81, approved: 70 },
  { day: "Sat", submitted: 24, approved: 20 },
  { day: "Sun", submitted: 12, approved: 9 },
];

export const serviceMix = [
  { name: "National ID Replacement", value: 48 },
  { name: "Driving Licence Renewal", value: 27 },
  { name: "Business Name Registration", value: 15 },
  { name: "Tax Compliance Certificate", value: 10 },
];

export const countyPerformance = [
  { county: "Nairobi", applications: 1284, avgDays: 3.2 },
  { county: "Mombasa", applications: 612, avgDays: 4.1 },
  { county: "Kisumu", applications: 401, avgDays: 3.8 },
  { county: "Nakuru", applications: 355, avgDays: 4.4 },
  { county: "Uasin Gishu", applications: 210, avgDays: 5.0 },
];
