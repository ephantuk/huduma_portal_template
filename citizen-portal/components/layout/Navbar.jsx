"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import ThemeToggle from "@/components/common/ThemeToggle";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useLocale } from "@/context/LocaleProvider";

const links = [
  { href: "/", label: "Services" },
  { href: "/applications", label: "My Applications" },
  { href: "/history", label: "History" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const { t } = useLocale();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="hvc-navbar px-3 px-lg-4 py-2">
      <div className="d-flex align-items-center gap-3">
        <button
          type="button"
          className="btn btn-outline-secondary d-lg-none"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
        >
          <i className="bi bi-list" />
        </button>

        <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-2 fw-bold text-white"
            style={{ width: 34, height: 34, background: "var(--bs-primary)" }}
          >
            HK
          </span>
          <span className="fw-semibold d-none d-sm-inline">Huduma Virtual Centre</span>
        </Link>

        <nav className="d-none d-lg-flex gap-1 ms-3" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`btn btn-sm ${active ? "btn-primary" : "btn-light"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Form className="d-none d-md-block ms-auto" style={{ maxWidth: 320 }} role="search">
          <Form.Control type="search" placeholder={t("home.searchPlaceholder")} aria-label="Search services" />
        </Form>

        <div className={`d-flex align-items-center gap-2 ${"ms-md-3"} ${"ms-auto ms-md-0"}`}>
          <LanguageSwitcher />
          <ThemeToggle />
          <Dropdown align="end">
            <Dropdown.Toggle variant="outline-secondary" size="sm" id="citizen-notif-dropdown" className="position-relative">
              <i className="bi bi-bell" />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                2
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 300 }}>
              <Dropdown.Header>Notifications</Dropdown.Header>
              <Dropdown.Item>Payment received for APP-88213</Dropdown.Item>
              <Dropdown.Item>Waiting Card ready to download soon</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown align="end">
            <Dropdown.Toggle variant="outline-secondary" size="sm" id="citizen-account-dropdown">
              <i className="bi bi-person-circle me-1" />
              <span className="d-none d-sm-inline">Jane W.</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/account">Account &amp; preferences</Dropdown.Item>
              <Dropdown.Item href="/login">Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn btn-light text-start"
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
