"use client";

import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusBadge from "@/components/common/StatusBadge";

const docToneMap = { Verified: "success", "Needs review": "warning", Rejected: "danger" };

export default function ApplicationReviewClient({ application, detail }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(detail.messages);

  function handleSend(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { from: "You (MDA Officer)", text: message, at: "just now" }]);
    setMessage("");
  }

  return (
    <Row className="g-3">
      <Col lg={8}>
        <Card className="hvc-card">
          <Card.Body>
            <Tabs defaultActiveKey="documents" className="mb-3">
              <Tab eventKey="documents" title="Documents (ADM-11)">
                <ListGroup variant="flush">
                  {detail.documents.map((doc) => (
                    <ListGroup.Item key={doc.name} className="d-flex justify-content-between align-items-center px-0">
                      <span>
                        <i className="bi bi-file-earmark-text me-2" />
                        {doc.name}
                      </span>
                      <div className="d-flex align-items-center gap-2">
                        <Badge bg={docToneMap[doc.status] || "secondary"}>{doc.status}</Badge>
                        <Button size="sm" variant="outline-secondary">
                          View
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="d-flex gap-2 mt-3">
                  <Button variant="outline-danger" size="sm">
                    <i className="bi bi-x-circle me-1" />
                    Reject with reason
                  </Button>
                  <Button variant="success" size="sm">
                    <i className="bi bi-check-circle me-1" />
                    Approve stage
                  </Button>
                </div>
              </Tab>

              <Tab eventKey="timeline" title="Timeline">
                <ul className="list-unstyled">
                  {detail.timeline.map((event) => (
                    <li key={event.at} className="d-flex gap-3 mb-3">
                      <div className="text-secondary small" style={{ minWidth: 140 }}>
                        {event.at}
                      </div>
                      <div>
                        <div>{event.step}</div>
                        <div className="text-secondary small">{event.actor}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab>

              <Tab eventKey="message" title="Message citizen (ADM-14)">
                <div className="hvc-surface-muted rounded-3 p-3 mb-3" style={{ maxHeight: 220, overflowY: "auto" }}>
                  {messages.map((m, i) => (
                    <div key={i} className="mb-2">
                      <div className="small fw-semibold">{m.from}</div>
                      <div className="small">{m.text}</div>
                      <div className="text-secondary" style={{ fontSize: "0.75rem" }}>
                        {m.at}
                      </div>
                    </div>
                  ))}
                </div>
                <Form onSubmit={handleSend} className="d-flex gap-2">
                  <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Request clarification or additional documents..."
                  />
                  <Button type="submit" variant="primary">
                    Send
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4}>
        <Card className="hvc-card mb-3">
          <Card.Body>
            <Card.Title className="h6">Application summary</Card.Title>
            <dl className="row small mb-0">
              <dt className="col-5 text-secondary">Status</dt>
              <dd className="col-7">
                <StatusBadge status={application.status} />
              </dd>
              <dt className="col-5 text-secondary">Citizen ref</dt>
              <dd className="col-7">{application.citizenRef}</dd>
              <dt className="col-5 text-secondary">Channel</dt>
              <dd className="col-7">{application.channel}</dd>
              <dt className="col-5 text-secondary">Submitted</dt>
              <dd className="col-7">{application.submitted}</dd>
              <dt className="col-5 text-secondary">SLA due</dt>
              <dd className="col-7">{application.slaDue}</dd>
            </dl>
          </Card.Body>
        </Card>

        <Card className="hvc-card">
          <Card.Body>
            <Card.Title className="h6">Certificate generation (ADM-13)</Card.Title>
            <p className="text-secondary small">
              On final approval, a PDF certificate with an embedded QR verification code is generated automatically
              and delivered via the citizen&apos;s preferred channel.
            </p>
            <Button variant="outline-primary" size="sm" disabled={application.status !== "Approved"}>
              <i className="bi bi-qr-code me-1" />
              Preview certificate
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
