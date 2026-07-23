"use client";

import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useLocale } from "@/context/LocaleProvider";

export default function RoadmapClient({ service, roadmap }) {
  const { t } = useLocale();

  return (
    <Row className="g-3">
      <Col lg={8}>
        <Card className="hvc-card mb-3">
          <Card.Body>
            <Card.Title className="h6 mb-2">About this service (UR-RM-02)</Card.Title>
            <p className="text-secondary">{roadmap.summary}</p>
          </Card.Body>
        </Card>

        <Card className="hvc-card">
          <Card.Body>
            <Card.Title className="h6 mb-3">Process steps</Card.Title>
            <ol className="list-group list-group-numbered">
              {roadmap.steps.map((step) => (
                <li key={step} className="list-group-item">
                  {step}
                </li>
              ))}
            </ol>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4}>
        <Card className="hvc-card mb-3">
          <Card.Body>
            <Card.Title className="h6 mb-2">{t("roadmap.documents")} (UR-RM-03)</Card.Title>
            <ul className="small text-secondary ps-3 mb-2">
              {roadmap.documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
            <button type="button" className="btn btn-outline-secondary btn-sm w-100">
              <i className="bi bi-printer me-1" />
              Print checklist
            </button>
          </Card.Body>
        </Card>

        <Card className="hvc-card mb-3">
          <Card.Body>
            <Card.Title className="h6 mb-2">{t("roadmap.fees")} (UR-RM-04)</Card.Title>
            {roadmap.fees.map((fee) => (
              <div key={fee.label} className="d-flex justify-content-between small mb-1">
                <span className="text-secondary">{fee.label}</span>
                <span className="fw-semibold">{fee.amount}</span>
              </div>
            ))}
          </Card.Body>
        </Card>

        <Card className="hvc-card">
          <Card.Body>
            <div className="d-flex flex-wrap gap-1 mb-3">
              {service.channels.map((c) => (
                <Badge key={c} bg="light" text="dark" className="border">
                  {c}
                </Badge>
              ))}
            </div>
            <Link href={`/services/${service.slug}/apply`} className="btn btn-primary w-100">
              {t("roadmap.getService")}
            </Link>
            <p className="text-secondary small mt-2 mb-0 text-center">UR-RM-05: proceeding confirms you've reviewed this roadmap.</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
