import Head from "next/head";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import StatusBadge from "@/common/components/StatusBadge";
import EmptyState from "@/common/components/EmptyState";

export default function MyApplications({ applications }) {
  return (
    <div>
      <Head>
        <title>My Applications — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-1">My Applications</h1>
      <p className="text-secondary mb-4">
        Applications in progress across every service, including drafts you can resume (UR-CAT-05, UR-CONT-03).
      </p>

      {applications.length === 0 ? (
        <Card className="hvc-card">
          <Card.Body>
            <EmptyState
              icon="bi-folder2-open"
              title="No applications yet"
              description="Start a new application from the Services page."
            />
          </Card.Body>
        </Card>
      ) : (
        <Row className="g-3">
          {applications.map((app) => (
            <Col key={app.id} md={6}>
              <Card className="hvc-card h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <div className="fw-semibold">{app.service}</div>
                      <div className="text-secondary small">{app.id}</div>
                    </div>
                    <StatusBadge status={app.status} />
                  </div>
                  <div className="small text-secondary mb-1">
                    Step {app.step} of {app.totalSteps}
                  </div>
                  <ProgressBar now={(app.step / app.totalSteps) * 100} style={{ height: 6 }} className="mb-3" />
                  <div className="d-flex justify-content-between small text-secondary mb-3">
                    <span>Updated {app.updated}</span>
                    {app.slaDue ? <span>SLA due {app.slaDue}</span> : null}
                  </div>
                  <Link href={`/applications/${app.id}`} className="btn btn-outline-primary btn-sm w-100">
                    {app.isDraft ? "Resume application (UR-CONT-04)" : "View status"}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
