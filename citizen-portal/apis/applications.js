// Mocked in-memory data source — no backend wired up yet. Swap these bodies
// for real HTTP calls once the applications service is available; callers
// already treat every export here as async.
const myApplications = [
  {
    id: "APP-88213",
    service: "National ID Card Replacement",
    status: "Awaiting biometrics",
    step: 8,
    totalSteps: 17,
    updated: "2026-07-21",
    slaDue: "2026-07-24",
    isDraft: false,
  },
  {
    id: "DRAFT-4471",
    service: "Driving Licence Renewal",
    status: "Draft",
    step: 4,
    totalSteps: 11,
    updated: "2026-07-19",
    slaDue: null,
    isDraft: true,
  },
  {
    id: "APP-87990",
    service: "Tax Compliance Certificate",
    status: "Approved",
    step: 6,
    totalSteps: 6,
    updated: "2026-07-10",
    slaDue: "2026-07-12",
    isDraft: false,
  },
];

const applicationHistory = [
  { id: "APP-87990", service: "Tax Compliance Certificate", date: "2026-07-10", amount: "Free", status: "Approved" },
  { id: "APP-86502", service: "National ID Card Replacement", date: "2026-04-02", amount: "KES 1,150", status: "Collected" },
  { id: "APP-85210", service: "Business Name Registration", date: "2026-01-18", amount: "KES 950", status: "Approved" },
];

const applicationTimelines = {
  "APP-88213": [
    { step: "Application submitted", at: "2026-07-21 09:12", state: "done" },
    { step: "Documents validated", at: "2026-07-21 09:14", state: "done" },
    { step: "Payment received — PRN 900214477", at: "2026-07-21 10:02", state: "done" },
    { step: "Awaiting fingerprint capture — Nairobi GPO", at: "—", state: "current" },
    { step: "Waiting Card available for download", at: "—", state: "pending" },
    { step: "ID ready for collection / delivery", at: "—", state: "pending" },
  ],
};

const fallbackTimeline = [{ step: "Application submitted", at: "—", state: "done" }];

export const getMyApplications = () => Promise.resolve(myApplications);

export const getApplicationHistory = () => Promise.resolve(applicationHistory);

export const getApplicationById = (id) =>
  Promise.resolve(myApplications.find((a) => a.id === id) ?? myApplications[0]);

export const getApplicationTimeline = (id) =>
  Promise.resolve(applicationTimelines[id] ?? fallbackTimeline);
