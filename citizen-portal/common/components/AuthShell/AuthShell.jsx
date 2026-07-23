const bullets = [
  "Browse and apply for government services online",
  "Track your application status in real time",
  "Pay securely through the eCitizen gateway",
  "Download approved certificates with QR verification",
];

export default function AuthShell({ children }) {
  return (
    <div className="min-vh-100 d-flex">
      <aside className="hvc-auth-hero d-none d-lg-flex flex-column">
        <div className="hvc-flag-stripe" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="p-4 p-xl-5 flex-grow-1 d-flex flex-column">
          <div className="hvc-logo-card mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/huduma-logo.jpg" alt="Huduma Kenya" />
          </div>

          <h1 className="display-6 fw-bold text-white mb-4">
            Government services,
            <br />
            online.
          </h1>

          <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
            {bullets.map((b) => (
              <li key={b} className="d-flex align-items-start gap-2 text-white-50">
                <i className="bi bi-check-circle-fill text-white mt-1" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex-grow-1 d-flex align-items-end justify-content-center">
            <i className="bi bi-building hvc-hero-icon" aria-hidden="true" />
          </div>

          <p className="text-white-50 small mb-1">Web · Mobile · USSD · Kiosk — one Virtual Centre.</p>
        </div>

        <div className="px-4 px-xl-5 py-3 border-top border-light border-opacity-10">
          <p className="text-white-50 small mb-0">
            © 2026 Huduma Kenya — Digital Government Services Platform
          </p>
        </div>
      </aside>

      <div className="flex-grow-1 d-flex flex-column hvc-auth-panel">
        <div className="d-flex justify-content-end align-items-center gap-3 p-3 px-4 small text-secondary">
          <span className="fw-semibold text-body">EN</span>
          <span>|</span>
          <span>SW</span>
          <span className="ms-3 d-none d-sm-inline">
            Need help? <a href="/support">Contact Huduma Call Centre</a>
          </span>
        </div>
        <div className="flex-grow-1 d-flex align-items-center justify-content-center px-3 pb-5">
          <div className="w-100" style={{ maxWidth: 480 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
