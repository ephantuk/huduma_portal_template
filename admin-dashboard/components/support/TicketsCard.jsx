"use client";

import Card from "react-bootstrap/Card";
import TicketsTable from "@/components/support/TicketsTable";

export default function TicketsCard({ rows }) {
  return (
    <Card className="hvc-card">
      <Card.Body>
        <TicketsTable rows={rows} />
      </Card.Body>
    </Card>
  );
}
