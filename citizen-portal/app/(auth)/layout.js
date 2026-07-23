export default function AuthLayout({ children }) {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center hvc-surface-muted py-4">
      <div className="w-100 px-3" style={{ maxWidth: 460 }}>
        {children}
      </div>
    </div>
  );
}
