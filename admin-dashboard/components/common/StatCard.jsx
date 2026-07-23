import Card from "react-bootstrap/Card";

export default function StatCard({ label, value, delta, icon, tone = "primary" }) {
  return (
    <Card className="hvc-card h-100">
      <Card.Body className="d-flex align-items-start gap-3">
        <div
          className={`hvc-stat-icon bg-${tone}-subtle text-${tone}`}
          aria-hidden="true"
        >
          <i className={`bi ${icon}`} />
        </div>
        <div>
          <div className="text-secondary small">{label}</div>
          <div className="fs-4 fw-semibold">{value}</div>
          {delta ? <div className="text-secondary small">{delta}</div> : null}
        </div>
      </Card.Body>
    </Card>
  );
}
