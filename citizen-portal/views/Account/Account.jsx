import Head from "next/head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import LanguageSwitcher from "@/common/components/LanguageSwitcher";

export default function Account() {
  return (
    <div>
      <Head>
        <title>Account — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-4">Account &amp; Preferences</h1>
      <Card className="hvc-card">
        <Card.Body>
          <Tabs defaultActiveKey="profile" className="mb-3">
            <Tab eventKey="profile" title="Profile">
              <Row className="g-3" style={{ maxWidth: 560 }}>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Full name</Form.Label>
                    <Form.Control defaultValue="Jane Wanjiku" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">National ID</Form.Label>
                    <Form.Control defaultValue="32145678" disabled />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="small text-secondary">Email</Form.Label>
                    <Form.Control type="email" defaultValue="jane.wanjiku@example.com" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" className="mt-3">
                Save profile
              </Button>
            </Tab>

            <Tab eventKey="notifications" title="Notifications (UR-NOT-05)">
              <p className="text-secondary small">Choose how you&apos;d like to receive updates on your applications.</p>
              <Form.Check type="checkbox" id="notif-sms" label="SMS" defaultChecked className="mb-2" />
              <Form.Check type="checkbox" id="notif-email" label="Email" defaultChecked className="mb-2" />
              <Form.Check type="checkbox" id="notif-push" label="Push notifications (mobile app)" className="mb-3" />
              <Button variant="primary">Save preferences</Button>
            </Tab>

            <Tab eventKey="language" title="Language (CWA-17)">
              <p className="text-secondary small">Choose your preferred language for forms, notifications and chat.</p>
              <LanguageSwitcher />
            </Tab>

            <Tab eventKey="security" title="Security">
              <Form.Check type="switch" id="mfa-switch" label="Require OTP on every new session" defaultChecked className="mb-3" />
              <Button variant="outline-danger" size="sm">
                Sign out of all devices
              </Button>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}
