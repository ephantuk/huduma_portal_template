"use client";

import Card from "react-bootstrap/Card";
import WorkflowsTable from "@/components/workflows/WorkflowsTable";

export default function WorkflowsCard({ rows }) {
  return (
    <Card className="hvc-card">
      <Card.Body>
        <WorkflowsTable rows={rows} />
      </Card.Body>
    </Card>
  );
}
