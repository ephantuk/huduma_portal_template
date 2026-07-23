"use client";

import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const devices = [
  { value: "web", label: "Web", icon: "bi-display" },
  { value: "mobile", label: "Mobile", icon: "bi-phone" },
  { value: "kiosk", label: "Kiosk", icon: "bi-easel2" },
];

export default function WorkflowDetailClient({ workflow, steps, feeRules }) {
  const [device, setDevice] = useState("web");

  return (
    <Card className="hvc-card">
      <Card.Body>
        <Tabs defaultActiveKey="designer" className="mb-3">
          <Tab eventKey="designer" title="Designer">
            <p className="text-secondary small">
              Drag-and-drop designer supporting sequential and parallel approval stages, decision points and
              notifications (ADM-07). Steps below reflect the configured BPMN sequence for {workflow.service}.
            </p>
            <ol className="list-group list-group-numbered">
              {steps.map((step) => (
                <li key={step} className="list-group-item d-flex justify-content-between align-items-center">
                  {step}
                  <Badge bg="light" text="dark" className="border">
                    Human/system task
                  </Badge>
                </li>
              ))}
            </ol>
          </Tab>

          <Tab eventKey="fees" title="Fees & PRN (ADM-08)">
            <p className="text-secondary small">
              Define flat, tiered or conditional pricing and PRN generation rules validated against the E-Citizen
              specification.
            </p>
            <Table bordered responsive className="align-middle">
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Applies to</th>
                </tr>
              </thead>
              <tbody>
                {feeRules.map((rule) => (
                  <tr key={rule.rule}>
                    <td>{rule.rule}</td>
                    <td>{rule.type}</td>
                    <td>{rule.amount}</td>
                    <td>{rule.appliesTo}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="outline-primary" size="sm">
              <i className="bi bi-play-fill me-1" />
              Run test payment (E-Citizen sandbox)
            </Button>
          </Tab>

          <Tab eventKey="preview" title="Multi-device preview (ADM-09)">
            <ButtonGroup className="mb-3">
              {devices.map((d) => (
                <ToggleButton
                  key={d.value}
                  id={`device-${d.value}`}
                  type="radio"
                  variant="outline-secondary"
                  name="device"
                  value={d.value}
                  checked={device === d.value}
                  onChange={(e) => setDevice(e.currentTarget.value)}
                >
                  <i className={`bi ${d.icon} me-1`} />
                  {d.label}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Row>
              <Col md={8}>
                <div
                  className="hvc-surface-muted border rounded-3 d-flex align-items-center justify-content-center text-secondary"
                  style={{ height: 360 }}
                >
                  <div className="text-center">
                    <i className="bi bi-phone fs-1 d-block mb-2" />
                    {device.charAt(0).toUpperCase() + device.slice(1)} layout preview placeholder
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <Card className="hvc-card">
                  <Card.Body>
                    <Card.Title className="h6">AI usability suggestions</Card.Title>
                    <ul className="small text-secondary ps-3 mb-0">
                      <li>Consider shortening the document upload step copy for mobile.</li>
                      <li>Fee summary could move above the fold on kiosk layout.</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
