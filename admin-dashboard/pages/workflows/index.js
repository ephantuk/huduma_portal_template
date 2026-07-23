import Head from "next/head";
import Button from "react-bootstrap/Button";
import PageHeader from "@/components/common/PageHeader";
import WorkflowsCard from "@/components/workflows/WorkflowsCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { workflows } from "@/lib/mock/workflows";

export default function WorkflowsPage() {
  return (
    <div>
      <Head>
        <title>Workflow Designer — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="No-Code Workflow Designer"
        description="Configure BPMN-style steps, decision points, notifications and fee rules per service (ADM-07, ADM-08, ADM-09)."
        actions={
          <Button variant="primary">
            <i className="bi bi-plus-lg me-1" />
            New workflow
          </Button>
        }
      />
      <WorkflowsCard rows={workflows} />
    </div>
  );
}

WorkflowsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
