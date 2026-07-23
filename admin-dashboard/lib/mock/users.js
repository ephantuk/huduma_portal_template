export const roleTemplates = [
  "PDSL/Huduma System Administrator",
  "Huduma Virtual Center Admin",
  "MDA Operations Staff",
  "Supervisor / Approver",
  "MDA IT/Systems Officer",
  "MDA Finance / Legal-Compliance Officer",
  "T2/T3 Support Staff",
];

export const staffUsers = [
  { id: "U-001", name: "Ramson Mwangi", email: "ramson.mwangi@pdsl.co.ke", role: "PDSL/Huduma System Administrator", agency: "PDSL", status: "Active" },
  { id: "U-002", name: "Faith Muthoni", email: "faith.muthoni@pdsl.co.ke", role: "Huduma Virtual Center Admin", agency: "Huduma Kenya", status: "Active" },
  { id: "U-003", name: "Grace Wanjiru", email: "g.wanjiru@nrb.go.ke", role: "MDA Operations Staff", agency: "NRB", status: "Active" },
  { id: "U-004", name: "Peter Otieno", email: "p.otieno@nrb.go.ke", role: "Supervisor / Approver", agency: "NRB", status: "Active" },
  { id: "U-005", name: "Aisha Noor", email: "a.noor@ntsa.go.ke", role: "MDA IT/Systems Officer", agency: "NTSA", status: "Suspended" },
  { id: "U-006", name: "Brian Kiprotich", email: "b.kiprotich@huduma.go.ke", role: "T2/T3 Support Staff", agency: "Huduma Kenya", status: "Active" },
];

export const auditLog = [
  { id: "AUD-9001", actor: "Ramson Mwangi", action: "Deactivated account U-005 (Aisha Noor)", at: "2026-07-22 08:41", category: "User Management" },
  { id: "AUD-9000", actor: "Faith Muthoni", action: "Published workflow — National ID Card Replacement v3", at: "2026-07-21 16:05", category: "Service Configuration" },
  { id: "AUD-8999", actor: "Peter Otieno", action: "Approved APP-88150 (final stage)", at: "2026-07-21 14:30", category: "Application Processing" },
  { id: "AUD-8998", actor: "System", action: "Retention purge job completed for NRB (36-month policy)", at: "2026-07-21 02:00", category: "Compliance" },
  { id: "AUD-8997", actor: "Grace Wanjiru", action: "Requested clarification on APP-88213", at: "2026-07-21 11:20", category: "Citizen Communication" },
];
