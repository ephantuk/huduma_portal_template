"use client";

import Link from "next/link";
import Badge from "react-bootstrap/Badge";
import DataTable from "@/components/common/DataTable";

const columns = [
  { key: "id", label: "Ref" },
  { key: "service", label: "Service" },
  { key: "mda", label: "MDA" },
  {
    key: "status",
    label: "Status",
    render: (row) => <Badge bg={row.status === "Published" ? "success" : "secondary"}>{row.status}</Badge>,
  },
  { key: "version", label: "Version" },
  { key: "steps", label: "Steps" },
  {
    key: "channels",
    label: "Channels",
    render: (row) =>
      row.channels.map((c) => (
        <Badge key={c} bg="light" text="dark" className="border me-1">
          {c}
        </Badge>
      )),
  },
  {
    key: "actions",
    label: "",
    render: (row) => (
      <Link href={`/workflows/${row.id}`} className="btn btn-sm btn-outline-primary">
        Open designer
      </Link>
    ),
  },
];

export default function WorkflowsTable({ rows }) {
  return <DataTable columns={columns} rows={rows} searchKeys={["service", "mda"]} />;
}
