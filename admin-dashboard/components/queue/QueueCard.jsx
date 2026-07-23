"use client";

import Card from "react-bootstrap/Card";
import QueueTable from "@/components/queue/QueueTable";

export default function QueueCard({ rows }) {
  return (
    <Card className="hvc-card">
      <Card.Body>
        <QueueTable rows={rows} />
      </Card.Body>
    </Card>
  );
}
