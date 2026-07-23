"use client";

import Badge from "react-bootstrap/Badge";
import DataTable from "@/components/common/DataTable";

const priorityTone = { P1: "danger", P2: "warning", P3: "info", P4: "secondary" };

const columns = [
  { key: "id", label: "Ticket" },
  { key: "reason", label: "Reason" },
  { key: "appRef", label: "Application" },
  {
    key: "priority",
    label: "Priority",
    render: (row) => <Badge bg={priorityTone[row.priority] || "secondary"}>{row.priority}</Badge>,
  },
  { key: "slaCountdown", label: "SLA countdown" },
  { key: "status", label: "Status" },
  { key: "escalatedBy", label: "Escalated by" },
];

export default function TicketsTable({ rows }) {
  return <DataTable columns={columns} rows={rows} searchKeys={["id", "reason", "appRef"]} />;
}
