"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatCard from "@/components/common/StatCard";
import VolumeAreaChart from "@/components/charts/VolumeAreaChart";

export default function ReportsClient({ overviewStats, weeklyVolume }) {
  return (
    <>
      <Card className="hvc-card mb-4">
        <Card.Body className="d-flex flex-wrap gap-3 align-items-end">
          <Form.Group>
            <Form.Label className="small text-secondary mb-1">Agency</Form.Label>
            <Form.Select style={{ minWidth: 220 }} defaultValue="all">
              <option value="all">All agencies</option>
              <option value="nrb">National Registration Bureau</option>
              <option value="ntsa">NTSA</option>
              <option value="brs">Business Registration Service</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label className="small text-secondary mb-1">Date range</Form.Label>
            <Form.Select style={{ minWidth: 180 }} defaultValue="7d">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="qtd">Quarter to date</option>
            </Form.Select>
          </Form.Group>
          <div className="ms-auto d-flex gap-2">
            <Button variant="outline-secondary">
              <i className="bi bi-filetype-pdf me-1" />
              Export PDF
            </Button>
            <Button variant="outline-secondary">
              <i className="bi bi-filetype-xlsx me-1" />
              Export Excel
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Row className="g-3 mb-4">
        {overviewStats.map((stat) => (
          <Col key={stat.label} xs={12} sm={6} xl={3}>
            <StatCard {...stat} />
          </Col>
        ))}
      </Row>

      <Card className="hvc-card">
        <Card.Body>
          <Card.Title className="h6">Processing volume trend</Card.Title>
          <VolumeAreaChart data={weeklyVolume} />
        </Card.Body>
      </Card>
    </>
  );
}
