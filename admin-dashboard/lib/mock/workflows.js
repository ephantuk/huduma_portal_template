export const workflows = [
  {
    id: "WF-001",
    service: "National ID Card Replacement",
    mda: "NRB",
    status: "Published",
    version: "v3",
    channels: ["Web", "Mobile", "Kiosk"],
    steps: 17,
    feeModel: "Flat + conditional delivery fee",
  },
  {
    id: "WF-002",
    service: "Driving Licence Renewal",
    mda: "NTSA",
    status: "Draft",
    version: "v1",
    channels: ["Web", "Mobile"],
    steps: 11,
    feeModel: "Tiered by licence class",
  },
  {
    id: "WF-003",
    service: "Business Name Registration",
    mda: "BRS",
    status: "Draft",
    version: "v1",
    channels: ["Web"],
    steps: 9,
    feeModel: "Flat",
  },
];

export const nationalIdSteps = [
  "Obtain Police Abstract",
  "Create HVC account / eCitizen login",
  "Select National ID Card Replacement service",
  "Upload police abstract",
  "Upload passport photo",
  "Upload birth certificate copy",
  "Choose biometric capture method",
  "Select Huduma Centre for fingerprints",
  "Acknowledgement sent (email + SMS)",
  "Service payment — KES 1,000 (eCitizen)",
  "Citizen views progress on portal",
  "Officer confirms fingerprints captured",
  "Citizen downloads Waiting Card",
  "Select ID collection method",
  "Delivery details + KES 150 fee (if delivery)",
  "Officer confirms NRB has released ID",
  "Citizen alerted — ready for collection/delivery",
];

export const feeRules = [
  { rule: "Base service fee", type: "Flat", amount: "KES 1,000", appliesTo: "All applicants" },
  { rule: "Delivery fee", type: "Conditional", amount: "KES 150", appliesTo: "If ID collection method = Delivery" },
];
