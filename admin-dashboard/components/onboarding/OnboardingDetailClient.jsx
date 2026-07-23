"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import RagBadge from "@/components/common/RagBadge";
import { onboardingStages } from "@/lib/mock/onboardings";

export default function OnboardingDetailClient({ record }) {
  return (
    <Row className="g-3">
      <Col lg={8}>
        <Card className="hvc-card mb-3">
          <Card.Body>
            <Card.Title className="h6 mb-3">Onboarding stages</Card.Title>
            <ol className="list-group list-group-numbered">
              {onboardingStages.map((stage, idx) => {
                const stageNumber = idx + 1;
                const done = stageNumber < record.stage;
                const current = stageNumber === record.stage;
                return (
                  <li
                    key={stage}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      current ? "border-primary" : ""
                    }`}
                  >
                    <span className={done ? "text-secondary text-decoration-line-through" : ""}>{stage}</span>
                    {done ? <Badge bg="success">Done</Badge> : null}
                    {current ? <Badge bg="primary">In progress</Badge> : null}
                  </li>
                );
              })}
            </ol>
          </Card.Body>
        </Card>

        <Card className="hvc-card">
          <Card.Body>
            <Card.Title className="h6 mb-2">UX Visualisation sign-off (ADM-06)</Card.Title>
            <p className="text-secondary small">
              The interactive preview of the citizen journey must be reviewed and signed off by the MDA IT/Systems
              Officer before the onboarding can progress to UAT.
            </p>
            {record.uxSignOff ? (
              <Badge bg="success">
                <i className="bi bi-check-circle me-1" />
                Signed off
              </Badge>
            ) : (
              <div className="d-flex gap-2">
                <Button variant="outline-primary">
                  <i className="bi bi-eye me-1" />
                  Open UX preview
                </Button>
                <Button variant="primary">Record sign-off</Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4}>
        <Card className="hvc-card">
          <Card.Body>
            <Card.Title className="h6 mb-3">Summary</Card.Title>
            <dl className="row small mb-0">
              <dt className="col-5 text-secondary">RAG status</dt>
              <dd className="col-7">
                <RagBadge rag={record.rag} />
              </dd>
              <dt className="col-5 text-secondary">Lead</dt>
              <dd className="col-7">{record.lead}</dd>
              <dt className="col-5 text-secondary">Last updated</dt>
              <dd className="col-7">{record.updated}</dd>
              <dt className="col-5 text-secondary">MDA</dt>
              <dd className="col-7">{record.mda}</dd>
            </dl>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
