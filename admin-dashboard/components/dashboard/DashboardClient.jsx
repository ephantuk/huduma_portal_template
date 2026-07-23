"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StatCard from "@/components/common/StatCard";
import RecentApplicationsTable from "@/components/dashboard/RecentApplicationsTable";
import VolumeAreaChart from "@/components/charts/VolumeAreaChart";
import ServiceMixPieChart from "@/components/charts/ServiceMixPieChart";

export default function DashboardClient({ overviewStats, weeklyVolume, serviceMix, applications }) {
  return (
    <>
      <Row className="g-3 mb-4">
        {overviewStats.map((stat) => (
          <Col key={stat.label} xs={12} sm={6} xl={3}>
            <StatCard {...stat} />
          </Col>
        ))}
      </Row>

      <Row className="g-3 mb-4">
        <Col lg={7}>
          <Card className="hvc-card h-100">
            <Card.Body>
              <Card.Title className="h6">Weekly submission &amp; approval volume</Card.Title>
              <VolumeAreaChart data={weeklyVolume} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5}>
          <Card className="hvc-card h-100">
            <Card.Body>
              <Card.Title className="h6">Service mix (7 days)</Card.Title>
              <ServiceMixPieChart data={serviceMix} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="hvc-card">
        <Card.Body>
          <Card.Title className="h6 mb-3">Applications nearing SLA</Card.Title>
          <RecentApplicationsTable rows={applications} />
        </Card.Body>
      </Card>
    </>
  );
}
