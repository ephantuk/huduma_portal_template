import Badge from "react-bootstrap/Badge";

const toneMap = {
  Approved: "success",
  "Ready for collection": "success",
  Active: "success",
  Published: "success",
  Resolved: "success",
  Closed: "secondary",
  "Payment pending": "warning",
  "Document review": "warning",
  "Awaiting biometrics": "warning",
  Draft: "secondary",
  Submitted: "info",
  Open: "danger",
  "In Progress": "warning",
  Suspended: "danger",
  Rejected: "danger",
};

export default function StatusBadge({ status }) {
  const tone = toneMap[status] || "secondary";
  return (
    <Badge bg={tone} className="fw-normal">
      {status}
    </Badge>
  );
}
