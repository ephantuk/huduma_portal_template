"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StatusBadge from "@/components/common/StatusBadge";

export default function ApplicationDetailClient({ application, timeline }) {
  const approved = application.status === "Approved";

  return (
    <Row className="g-3">
      <Col lg={8}>
        <Card className="hvc-card">
          <Card.Body>
            <Card.Title className="h6 mb-3">Progress (CWA-11)</Card.Title>
            <ul className="list-unstyled mb-0">
              {timeline.map((event) => (
                <li key={event.step} className="d-flex gap-3 mb-3">
                  <div
                    className={`hvc-step-circle ${
                      event.state === "done"
                        ? "bg-success text-white"
                        : event.state === "current"
                        ? "bg-primary text-white"
                        : "bg-secondary-subtle text-secondary"
                    }`}
                  >
                    <i className={`bi ${event.state === "done" ? "bi-check" : "bi-clock"}`} />
                  </div>
                  <div>
                    <div className={event.state === "pending" ? "text-secondary" : ""}>{event.step}</div>
                    <div className="text-secondary small">{event.at}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4}>
        <Card className="hvc-card mb-3">
          <Card.Body>
            <Card.Title className="h6 mb-3">Summary</Card.Title>
            <dl className="row small mb-0">
              <dt className="col-5 text-secondary">Status</dt>
              <dd className="col-7">
                <StatusBadge status={application.status} />
              </dd>
              <dt className="col-5 text-secondary">Updated</dt>
              <dd className="col-7">{application.updated}</dd>
              {application.slaDue ? (
                <>
                  <dt className="col-5 text-secondary">SLA due</dt>
                  <dd className="col-7">{application.slaDue}</dd>
                </>
              ) : null}
            </dl>
          </Card.Body>
        </Card>

        <Card className="hvc-card">
          <Card.Body>
            <Card.Title className="h6 mb-2">Certificate (CWA-13)</Card.Title>
            <p className="text-secondary small">
              Once approved, your certificate with an embedded QR verification code becomes available here — no need
              to visit a Huduma Centre.
            </p>
            <Button variant={approved ? "primary" : "outline-secondary"} className="w-100" disabled={!approved}>
              <i className="bi bi-qr-code me-1" />
              {approved ? "Download certificate" : "Not yet available"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
