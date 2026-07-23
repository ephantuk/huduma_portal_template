"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { navConfig } from "@/lib/nav-config";

export default function Sidebar({ open, onNavigate }) {
  const { pathname } = useRouter();

  return (
    <aside className={`hvc-sidebar d-flex flex-column py-3 ${open ? "hvc-sidebar-open" : ""}`}>
      <Link href="/dashboard" className="d-flex align-items-center gap-2 px-3 mb-2 text-decoration-none">
        <span
          className="d-inline-flex align-items-center justify-content-center rounded-2 bg-white fw-bold"
          style={{ width: 32, height: 32, color: "#0f6e3d" }}
        >
          HK
        </span>
        <span className="text-white fw-semibold">Huduma DGSP Admin</span>
      </Link>

      <nav className="flex-grow-1 overflow-auto hvc-scroll-thin px-2">
        {navConfig.map((section) => (
          <div key={section.heading}>
            <div className="nav-section-label">{section.heading}</div>
            <div className="nav flex-column gap-1">
              {section.items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    onClick={onNavigate}
                  >
                    <i className={`bi ${item.icon}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-3 pt-3 mt-2 border-top border-secondary-subtle border-opacity-25">
        <div className="small" style={{ color: "var(--hvc-sidebar-muted)" }}>
          Module A — Admin Portal &amp; Dashboard
          <br />
          DGSP/PDSL/HDM/US/2026
        </div>
      </div>
    </aside>
  );
}
