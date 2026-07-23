export default function EmptyState({ icon = "bi-inbox", title, description }) {
  return (
    <div className="text-center py-5 text-secondary">
      <i className={`bi ${icon} fs-1 d-block mb-2`} />
      <div className="fw-semibold">{title}</div>
      {description ? <div className="small">{description}</div> : null}
    </div>
  );
}
