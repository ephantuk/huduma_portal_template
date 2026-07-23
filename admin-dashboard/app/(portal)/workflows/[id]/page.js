import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import WorkflowDetailClient from "@/components/workflows/WorkflowDetailClient";
import { workflows, nationalIdSteps, feeRules } from "@/lib/mock/workflows";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `${id} — Workflow Designer — Huduma DGSP Admin` };
}

export default async function WorkflowDetailPage({ params }) {
  const { id } = await params;
  const workflow = workflows.find((w) => w.id === id) ?? workflows[0];

  return (
    <div>
      <PageHeader
        title={`${workflow.service} (${workflow.version})`}
        description={`${workflow.mda} — ${workflow.status}`}
        actions={
          <Link href="/workflows" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-1" />
            Back to workflows
          </Link>
        }
      />
      <WorkflowDetailClient workflow={workflow} steps={nationalIdSteps} feeRules={feeRules} />
    </div>
  );
}
