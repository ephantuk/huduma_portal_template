const ragMap = {
  green: { bg: "success", label: "On track" },
  amber: { bg: "warning", label: "At risk" },
  red: { bg: "danger", label: "Off track" },
};

export default function RagBadge({ rag }) {
  const cfg = ragMap[rag] || ragMap.amber;
  return (
    <span className={`badge bg-${cfg.bg}-subtle text-${cfg.bg} border border-${cfg.bg}-subtle`}>
      <i className="bi bi-circle-fill me-1" style={{ fontSize: "0.5rem" }} />
      {cfg.label}
    </span>
  );
}
