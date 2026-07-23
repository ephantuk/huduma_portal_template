// Mocked in-memory data source — no backend wired up yet. Swap these bodies
// for real HTTP calls once the service catalogue is available; callers
// already treat every export here as async.
const categories = ["All", "Registration", "Licensing", "Permits", "Certificates", "Renewals"];

const services = [
  {
    slug: "national-id-replacement",
    name: "National ID Card Replacement",
    mda: "National Registration Bureau (NRB)",
    category: "Registration",
    icon: "bi-person-vcard",
    summary: "Replace a lost, damaged or worn-out National Identity Card.",
    channels: ["Web", "Mobile", "Kiosk"],
    fee: "KES 1,000 (+ KES 150 if delivered)",
  },
  {
    slug: "driving-licence-renewal",
    name: "Driving Licence Renewal",
    mda: "National Transport & Safety Authority (NTSA)",
    category: "Renewals",
    icon: "bi-car-front",
    summary: "Renew an expired or expiring driving licence.",
    channels: ["Web", "Mobile"],
    fee: "From KES 3,050 (by licence class)",
  },
  {
    slug: "business-name-registration",
    name: "Business Name Registration",
    mda: "Business Registration Service (BRS)",
    category: "Registration",
    icon: "bi-briefcase",
    summary: "Register a new business name with BRS.",
    channels: ["Web"],
    fee: "KES 950",
  },
  {
    slug: "tax-compliance-certificate",
    name: "Tax Compliance Certificate",
    mda: "Kenya Revenue Authority (KRA)",
    category: "Certificates",
    icon: "bi-file-earmark-check",
    summary: "Obtain a certificate confirming your tax compliance status.",
    channels: ["Web", "Mobile"],
    fee: "Free",
  },
];

export const getServices = () => Promise.resolve(services);

export const getCategories = () => Promise.resolve(categories);

export const getServiceBySlug = (slug) =>
  Promise.resolve(services.find((s) => s.slug === slug) ?? services[0]);
