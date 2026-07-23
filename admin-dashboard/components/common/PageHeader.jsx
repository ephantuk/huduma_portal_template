export default function PageHeader({ title, description, actions }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
      <div>
        <h1 className="h3 mb-1">{title}</h1>
        {description ? <p className="text-secondary mb-0">{description}</p> : null}
      </div>
      {actions ? <div className="d-flex gap-2 flex-wrap">{actions}</div> : null}
    </div>
  );
}
