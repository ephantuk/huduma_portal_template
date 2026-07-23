import Head from "next/head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PageHeader from "@/components/common/PageHeader";
import DataTable from "@/components/common/DataTable";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { auditLog } from "@/lib/mock/users";

export default function AuditPage() {
  const columns = [
    { key: "at", label: "Timestamp" },
    { key: "id", label: "Ref" },
    { key: "actor", label: "Actor" },
    { key: "action", label: "Action" },
    { key: "category", label: "Category" },
  ];

  return (
    <div>
      <Head>
        <title>Audit, Compliance & Security Oversight — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="Audit, Compliance & Security Oversight"
        description="Immutable, append-only audit trail across applications, payments and admin actions (ADM-21)."
        actions={
          <Button variant="outline-secondary">
            <i className="bi bi-download me-1" />
            Export for external audit
          </Button>
        }
      />

      <Row className="g-3 mb-4">
        <Col lg={7}>
          <Card className="hvc-card h-100">
            <Card.Body>
              <Card.Title className="h6 mb-3">Search audit trail</Card.Title>
              <DataTable columns={columns} rows={auditLog} searchKeys={["actor", "action", "category", "id"]} pageSize={6} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card className="hvc-card mb-3">
            <Card.Body>
              <Card.Title className="h6">Data retention policy (ADM-22)</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary">Agency</Form.Label>
                  <Form.Select defaultValue="nrb">
                    <option value="nrb">National Registration Bureau</option>
                    <option value="ntsa">NTSA</option>
                    <option value="brs">Business Registration Service</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary">Retention period (months)</Form.Label>
                  <Form.Control type="number" defaultValue={36} min={1} />
                </Form.Group>
                <Button variant="primary" size="sm">
                  Save retention policy
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card className="hvc-card">
            <Card.Body>
              <Card.Title className="h6">Compliance posture</Card.Title>
              <ul className="small text-secondary ps-3 mb-0">
                <li>Kenya Data Protection Act 2019 — audit store append-only, PII hashed.</li>
                <li>ISO 27001 — PAM session logging enabled (ADM-02).</li>
                <li>Automatic purge/archival jobs run nightly per agency policy.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

AuditPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
