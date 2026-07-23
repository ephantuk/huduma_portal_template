"use client";

import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="hvc-topbar px-3 px-lg-4 py-2 d-flex align-items-center gap-3">
      <button
        type="button"
        className="btn btn-outline-secondary d-lg-none"
        onClick={onToggleSidebar}
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list" />
      </button>

      <Form className="flex-grow-1 d-none d-md-block" style={{ maxWidth: 420 }}>
        <Form.Control
          type="search"
          placeholder="Search applications, MDAs, citizens (hashed ID)..."
          aria-label="Global search"
        />
      </Form>

      <div className="ms-auto d-flex align-items-center gap-2">
        <ThemeToggle />

        <Dropdown align="end">
          <Dropdown.Toggle variant="outline-secondary" size="sm" className="position-relative" id="notif-dropdown">
            <i className="bi bi-bell" />
            <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
              4
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: 320 }}>
            <Dropdown.Header>Notifications</Dropdown.Header>
            <Dropdown.Item>SLA breach — APP-88198 (Payment pending)</Dropdown.Item>
            <Dropdown.Item>New onboarding submitted — BRS</Dropdown.Item>
            <Dropdown.Item>UX sign-off required — NTSA workflow</Dropdown.Item>
            <Dropdown.Item>Escalated ticket TCK-500 (P1)</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-center text-secondary">View all</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown align="end">
          <Dropdown.Toggle variant="outline-secondary" size="sm" id="account-dropdown">
            <i className="bi bi-person-circle me-1" />
            Ramson M.
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/settings">Settings &amp; Security</Dropdown.Item>
            <Dropdown.Item disabled>PDSL/Huduma System Administrator</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/login">Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}
