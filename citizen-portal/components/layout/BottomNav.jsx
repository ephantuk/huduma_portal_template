"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Services", icon: "bi-grid" },
  { href: "/applications", label: "Applications", icon: "bi-folder2-open" },
  { href: "/support", label: "Support", icon: "bi-headset" },
  { href: "/account", label: "Account", icon: "bi-person" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="hvc-bottom-nav" aria-label="Mobile primary">
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href} className={pathname === tab.href ? "active" : ""}>
          <i className={`bi ${tab.icon}`} />
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
