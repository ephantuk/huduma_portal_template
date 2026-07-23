import Button from "react-bootstrap/Button";
import PageHeader from "@/components/common/PageHeader";
import WorkflowsCard from "@/components/workflows/WorkflowsCard";
import { workflows } from "@/lib/mock/workflows";

export const metadata = { title: "Workflow Designer — Huduma DGSP Admin" };

export default function WorkflowsPage() {
  return (
    <div>
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
