import Head from "next/head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PageHeader from "@/components/common/PageHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  return (
    <div>
      <Head>
        <title>Settings & Security — Huduma DGSP Admin</title>
      </Head>
      <PageHeader title="Settings & Security" description="Account profile and privileged access controls (ADM-02)." />

      <Card className="hvc-card">
        <Card.Body>
          <Tabs defaultActiveKey="security" className="mb-3">
            <Tab eventKey="profile" title="Profile">
              <Row className="g-3" style={{ maxWidth: 560 }}>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Full name</Form.Label>
                    <Form.Control defaultValue="Ramson Mwangi" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Role</Form.Label>
                    <Form.Control defaultValue="PDSL/Huduma System Administrator" disabled />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Email</Form.Label>
                    <Form.Control type="email" defaultValue="ramson.mwangi@pdsl.co.ke" />
                  </Form.Group>
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="security" title="Security (MFA / PAM)">
              <Row className="g-3" style={{ maxWidth: 640 }}>
                <Col md={12}>
                  <Form.Check type="switch" id="mfa-switch" label="Require MFA on every new session" defaultChecked />
                </Col>
                <Col md={12}>
                  <Form.Check type="switch" id="ip-switch" label="Restrict login to whitelisted IP ranges" defaultChecked />
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Session timeout (minutes)</Form.Label>
                    <Form.Control type="number" defaultValue={15} min={1} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Failed attempt lockout threshold</Form.Label>
                    <Form.Control type="number" defaultValue={5} min={1} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Whitelisted IP ranges (CIDR, one per line)</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue={"41.90.0.0/16\n197.232.0.0/16"} />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" className="mt-3">
                Save security settings
              </Button>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}

SettingsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
