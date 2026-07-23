import { useMemo, useState } from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useLocale } from "@/context/LocaleProvider";

export default function ServiceCatalogue({ services, categories, myApplications }) {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery = (s.name + s.summary + s.mda).toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [services, category, query]);

  const inProgress = myApplications.filter((a) => a.status !== "Approved");

  return (
    <div>
      {inProgress.length > 0 ? (
        <Card className="hvc-card mb-4">
          <Card.Body>
            <Card.Title className="h6 mb-3">Continue where you left off</Card.Title>
            <Row className="g-3">
              {inProgress.map((app) => (
                <Col key={app.id} md={6} lg={4}>
                  <div className="hvc-surface-muted rounded-3 p-3 h-100">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="fw-semibold small">{app.service}</span>
                      <Badge bg={app.isDraft ? "secondary" : "warning"}>{app.status}</Badge>
                    </div>
                    <div className="small text-secondary mb-2">
                      Step {app.step} of {app.totalSteps}
                    </div>
                    <ProgressBar now={(app.step / app.totalSteps) * 100} style={{ height: 6 }} className="mb-3" />
                    <Link href="/applications" className="btn btn-sm btn-outline-primary w-100">
                      {t("applications.continue")}
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      ) : null}

      <div className="d-flex flex-column flex-md-row gap-3 mb-4">
        <Form.Control
          type="search"
          placeholder={t("home.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search services"
        />
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ maxWidth: 220 }}
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Form.Select>
      </div>

      <Row className="g-3">
        {filtered.map((service) => (
          <Col key={service.slug} md={6} lg={4}>
            <Card className="hvc-card h-100">
              <Card.Body className="d-flex flex-column">
                <div className="hvc-service-icon bg-primary-subtle text-primary mb-3">
                  <i className={`bi ${service.icon}`} />
                </div>
                <Card.Title className="h6">{service.name}</Card.Title>
                <div className="text-secondary small mb-2">{service.mda}</div>
                <p className="small text-secondary flex-grow-1">{service.summary}</p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {service.channels.map((c) => (
                    <Badge key={c} bg="light" text="dark" className="border">
                      {c}
                    </Badge>
                  ))}
                </div>
                <Link href={`/services/${service.slug}`} className="btn btn-primary w-100">
                  {t("roadmap.getService")}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {filtered.length === 0 ? (
          <Col xs={12}>
            <div className="text-center text-secondary py-5">
              <i className="bi bi-search fs-1 d-block mb-2" />
              No services matched your search.
              <div className="mt-2">
                <Link href="/support" className="btn btn-outline-primary btn-sm">
                  Ask the AI Assistant
                </Link>
              </div>
            </div>
          </Col>
        ) : null}
      </Row>
    </div>
  );
}
