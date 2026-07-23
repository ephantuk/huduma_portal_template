"use client";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Badge from "react-bootstrap/Badge";
import PageHeader from "@/components/common/PageHeader";
import DataTable from "@/components/common/DataTable";
import { staffUsers, roleTemplates, auditLog } from "@/lib/mock/users";

export default function UsersPage() {
  const userColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "agency", label: "Agency" },
    {
      key: "status",
      label: "Status",
      render: (row) => <Badge bg={row.status === "Active" ? "success" : "danger"}>{row.status}</Badge>,
    },
    {
      key: "actions",
      label: "",
      render: () => (
        <div className="d-flex gap-1">
          <Button size="sm" variant="outline-secondary">
            Edit
          </Button>
          <Button size="sm" variant="outline-danger">
            Deactivate
          </Button>
        </div>
      ),
    },
  ];

  const auditColumns = [
    { key: "at", label: "Timestamp" },
    { key: "actor", label: "Actor" },
    { key: "action", label: "Action" },
    { key: "category", label: "Category" },
  ];

  return (
    <div>
      <PageHeader
        title="Users & Role Management"
        description="Role templates, bulk import, and an immutable audit log of every user-management action (ADM-16, ADM-17)."
        actions={
          <>
            <Button variant="outline-secondary">
              <i className="bi bi-upload me-1" />
              Bulk import
            </Button>
            <Button variant="primary">
              <i className="bi bi-person-plus me-1" />
              New user
            </Button>
          </>
        }
      />

      <Card className="hvc-card mb-3">
        <Card.Body>
          <Card.Title className="h6 mb-2">Role templates</Card.Title>
          <div className="d-flex flex-wrap gap-2">
            {roleTemplates.map((role) => (
              <Badge key={role} bg="light" text="dark" className="border fw-normal py-2 px-3">
                {role}
              </Badge>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Card className="hvc-card">
        <Card.Body>
          <Tabs defaultActiveKey="staff" className="mb-3">
            <Tab eventKey="staff" title="Staff accounts">
              <DataTable columns={userColumns} rows={staffUsers} searchKeys={["name", "email", "agency"]} />
            </Tab>
            <Tab eventKey="audit" title="Audit log">
              <DataTable columns={auditColumns} rows={auditLog} searchKeys={["actor", "action", "category"]} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}
