// Mocked in-memory data source — no backend wired up yet. Swap this body
// for a real HTTP call once the roadmap service is available; callers
// already treat this export as async.
const nationalIdRoadmap = {
  summary:
    "Replace your National ID Card entirely online: report the loss, upload your documents, choose how your fingerprints are captured, pay the service fee, and track progress until your Waiting Card and, later, your new ID are ready.",
  documents: ["Police Abstract", "Clean passport photo", "Copy of birth certificate"],
  fees: [
    { label: "Service fee", amount: "KES 1,000" },
    { label: "Delivery fee (optional)", amount: "KES 150" },
  ],
  steps: [
    "Obtain Police Abstract",
    "Create an HVC account or log in with eCitizen",
    "Select the National ID Card Replacement service",
    "Upload the police abstract",
    "Upload a clean passport photo",
    "Upload a copy of the birth certificate",
    "Choose a biometric capture method",
    "Select the Huduma Centre for fingerprint capture",
    "Receive acknowledgement via email and SMS",
    "Make the service payment (KES 1,000) via eCitizen",
    "View progress on the self-service portal",
    "Officer confirms fingerprints captured",
    "Log in and download a Waiting Card",
    "Select the ID collection method",
    "For delivery: provide address and pay KES 150",
    "Officer confirms NRB has released the ID",
    "Receive alert that the ID is ready",
  ],
};

const genericRoadmap = {
  summary: "Complete this service online end-to-end: submit your details, upload supporting documents, pay the applicable fee, and track your application until it's ready.",
  documents: ["National ID copy", "Supporting document (service-specific)"],
  fees: [{ label: "Service fee", amount: "As shown at checkout" }],
  steps: [
    "Create an HVC account or log in with eCitizen",
    "Complete the service application form",
    "Upload required documents",
    "Make the service payment via eCitizen",
    "Track progress on the self-service portal",
    "Receive your output once approved",
  ],
};

export const getRoadmap = (slug) =>
  Promise.resolve(slug === "national-id-replacement" ? nationalIdRoadmap : genericRoadmap);
