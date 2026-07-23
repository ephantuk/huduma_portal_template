"use client";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import StatusBadge from "@/components/common/StatusBadge";

export default function HistoryClient({ records }) {
  return (
    <Card className="hvc-card">
      <Card.Body>
        <div className="table-responsive">
          <Table hover className="align-middle mb-0">
            <thead>
              <tr>
                <th className="text-secondary small text-uppercase">Reference</th>
                <th className="text-secondary small text-uppercase">Service</th>
                <th className="text-secondary small text-uppercase">Date</th>
                <th className="text-secondary small text-uppercase">Amount</th>
                <th className="text-secondary small text-uppercase">Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.service}</td>
                  <td>{r.date}</td>
                  <td>{r.amount}</td>
                  <td>
                    <StatusBadge status={r.status} />
                  </td>
                  <td>
                    <Button size="sm" variant="outline-secondary">
                      <i className="bi bi-download me-1" />
                      Export
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}
