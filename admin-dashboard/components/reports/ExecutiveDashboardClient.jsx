"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import ServiceMixPieChart from "@/components/charts/ServiceMixPieChart";

export default function ExecutiveDashboardClient({ serviceMix, countyPerformance }) {
  const maxApplications = Math.max(...countyPerformance.map((c) => c.applications));

  return (
    <>
      <Alert variant="warning" className="small">
        <i className="bi bi-lock me-1" />
        This view is gated to the Huduma Kenya Executive access tier.
      </Alert>

      <Row className="g-3 mb-4">
        <Col lg={7}>
          <Card className="hvc-card h-100">
            <Card.Body>
              <Card.Title className="h6 mb-3">County-level comparison</Card.Title>
              <Table borderless className="align-middle mb-0">
                <tbody>
                  {countyPerformance.map((c) => (
                    <tr key={c.county}>
                      <td style={{ width: 140 }}>{c.county}</td>
                      <td>
                        <ProgressBar now={(c.applications / maxApplications) * 100} style={{ height: 8 }} />
                      </td>
                      <td className="text-end text-secondary small" style={{ width: 160 }}>
                        {c.applications} apps · {c.avgDays}d avg
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card className="hvc-card h-100">
            <Card.Body>
              <Card.Title className="h6">National service mix</Card.Title>
              <ServiceMixPieChart data={serviceMix} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-3">
        <Col md={6}>
          <Card className="hvc-card">
            <Card.Body>
              <Card.Title className="h6">Revenue collection trend</Card.Title>
              <p className="display-6 mb-0">KES 62.4M</p>
              <p className="text-success small mb-0">
                <i className="bi bi-arrow-up-short" />
                11.4% vs previous month
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="hvc-card">
            <Card.Body>
              <Card.Title className="h6">Citizen feedback sentiment rollup</Card.Title>
              <div className="d-flex gap-3">
                <div>
                  <div className="fs-4 fw-semibold text-success">78%</div>
                  <div className="small text-secondary">Positive</div>
                </div>
                <div>
                  <div className="fs-4 fw-semibold text-warning">15%</div>
                  <div className="small text-secondary">Neutral</div>
                </div>
                <div>
                  <div className="fs-4 fw-semibold text-danger">7%</div>
                  <div className="small text-secondary">Negative</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
