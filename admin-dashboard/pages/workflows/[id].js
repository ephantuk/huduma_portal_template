import Head from "next/head";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import WorkflowDetailClient from "@/components/workflows/WorkflowDetailClient";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { workflows, nationalIdSteps, feeRules } from "@/lib/mock/workflows";

export async function getServerSideProps({ params }) {
  const workflow = workflows.find((w) => w.id === params.id) ?? workflows[0];
  return { props: { workflow } };
}

export default function WorkflowDetailPage({ workflow }) {
  return (
    <div>
      <Head>
        <title>{workflow.id} — Workflow Designer — Huduma DGSP Admin</title>
      </Head>
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

WorkflowDetailPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
