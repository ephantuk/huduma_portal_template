"use client";

import Link from "next/link";
import DataTable from "@/components/common/DataTable";
import StatusBadge from "@/components/common/StatusBadge";

const columns = [
  { key: "id", label: "Ref" },
  { key: "service", label: "Service" },
  { key: "mda", label: "MDA" },
  { key: "channel", label: "Channel" },
  { key: "status", label: "Status", render: (row) => <StatusBadge status={row.status} /> },
  { key: "submitted", label: "Submitted" },
  {
    key: "slaDue",
    label: "SLA due",
    render: (row) => <span className={row.overdue ? "text-danger fw-semibold" : ""}>{row.slaDue}</span>,
  },
  {
    key: "actions",
    label: "",
    render: (row) => (
      <Link href={`/queue/${row.id}`} className="btn btn-sm btn-outline-primary">
        Review
      </Link>
    ),
  },
];

export default function QueueTable({ rows }) {
  return (
    <DataTable
      columns={columns}
      rows={rows}
      searchKeys={["id", "service", "mda"]}
      rowClassName={(row) => (row.overdue ? "table-danger" : "")}
    />
  );
}
