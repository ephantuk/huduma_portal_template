import Badge from "react-bootstrap/Badge";

const toneMap = {
  Approved: "success",
  Collected: "success",
  "Ready for collection": "success",
  "Awaiting biometrics": "warning",
  Draft: "secondary",
  Submitted: "info",
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
