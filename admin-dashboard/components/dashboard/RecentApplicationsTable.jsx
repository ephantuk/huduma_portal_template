"use client";

import DataTable from "@/components/common/DataTable";
import StatusBadge from "@/components/common/StatusBadge";

const columns = [
  { key: "id", label: "Application" },
  { key: "service", label: "Service" },
  { key: "mda", label: "MDA" },
  { key: "status", label: "Status", render: (row) => <StatusBadge status={row.status} /> },
  { key: "slaDue", label: "SLA due" },
];

export default function RecentApplicationsTable({ rows }) {
  return <DataTable columns={columns} rows={rows} searchKeys={["id", "service", "mda"]} pageSize={5} />;
}
