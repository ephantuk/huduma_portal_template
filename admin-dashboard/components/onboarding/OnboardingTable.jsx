"use client";

import Link from "next/link";
import ProgressBar from "react-bootstrap/ProgressBar";
import DataTable from "@/components/common/DataTable";
import RagBadge from "@/components/common/RagBadge";
import { onboardingStages } from "@/lib/mock/onboardings";

const columns = [
  { key: "id", label: "Ref" },
  { key: "mda", label: "MDA" },
  { key: "service", label: "Service" },
  {
    key: "stage",
    label: "Stage",
    render: (row) => (
      <div style={{ minWidth: 180 }}>
        <div className="small mb-1">{onboardingStages[row.stage - 1]}</div>
        <ProgressBar now={(row.stage / onboardingStages.length) * 100} style={{ height: 6 }} />
      </div>
    ),
  },
  { key: "rag", label: "RAG", render: (row) => <RagBadge rag={row.rag} /> },
  { key: "lead", label: "Lead" },
  { key: "updated", label: "Updated" },
  {
    key: "actions",
    label: "",
    render: (row) => (
      <Link href={`/onboarding/${row.id}`} className="btn btn-sm btn-outline-primary">
        Open
      </Link>
    ),
  },
];

export default function OnboardingTable({ rows }) {
  return <DataTable columns={columns} rows={rows} searchKeys={["mda", "service", "lead"]} />;
}
