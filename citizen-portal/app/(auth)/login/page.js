"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState("entry");

  function next(nextStep) {
    return (e) => {
      e?.preventDefault?.();
      setStep(nextStep);
    };
  }

  return (
    <Card className="hvc-card shadow-sm">
      <Card.Body className="p-4">
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3 fw-bold"
            style={{ width: 48, height: 48, background: "var(--bs-primary)", color: "#fff" }}
          >
            HK
          </div>
          <h1 className="h4 mb-1">Huduma Virtual Centre</h1>
          <p className="text-secondary small mb-0">UR-AUTH-01 to UR-AUTH-07</p>
        </div>

        {step === "entry" && (
          <div className="d-grid gap-2">
            <p className="text-secondary small text-center">
              Sign in using exactly one of the two methods below (UR-AUTH-04).
            </p>
            <Button variant="primary" size="lg" onClick={next("identify")}>
              <i className="bi bi-person-badge me-2" />
              Login / Create a Huduma Virtual Services account
            </Button>
            <Button variant="outline-primary" size="lg" onClick={next("ecitizen")}>
              <i className="bi bi-box-arrow-in-right me-2" />
              Login with eCitizen
            </Button>
          </div>
        )}

        {step === "ecitizen" && (
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" aria-hidden="true" />
            <p className="text-secondary small">
              Redirecting to eCitizen SSO... on return, you land in the same Service Area as a Huduma Virtual
              Services login (UR-AUTH-05).
            </p>
            <Button variant="primary" className="w-100" onClick={next("consent")}>
              Simulate successful eCitizen login
            </Button>
          </div>
        )}

        {step === "identify" && (
          <Form onSubmit={next("mobile")}>
            <Form.Group className="mb-3" controlId="identifier">
              <Form.Label>National ID Number or Email</Form.Label>
              <Form.Control type="text" placeholder="e.g. 32145678 or jane@example.com" required autoFocus />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Continue
            </Button>
          </Form>
        )}

        {step === "mobile" && (
          <Form onSubmit={next("otp")}>
            <p className="small text-secondary">Input your mobile number to receive a one-time password.</p>
            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control type="tel" placeholder="07xx xxx xxx" required autoFocus />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Send OTP
            </Button>
          </Form>
        )}

        {step === "otp" && (
          <Form onSubmit={next("password")}>
            <p className="small text-secondary">Enter the OTP sent via SMS to validate your mobile number (CWA-01).</p>
            <Form.Group className="mb-3" controlId="otp">
              <Form.Label>One-time password</Form.Label>
              <Form.Control type="text" inputMode="numeric" maxLength={6} placeholder="000000" required autoFocus />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Verify
            </Button>
          </Form>
        )}

        {step === "password" && (
          <Form onSubmit={next("consent")}>
            <p className="small text-secondary">Create a password to secure your Huduma Virtual Services account.</p>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="••••••••" required autoFocus />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Create account
            </Button>
          </Form>
        )}

        {step === "consent" && (
          <div>
            <Alert variant="info" className="small">
              <i className="bi bi-shield-check me-1" />
              CWA-02: Before you continue, please review how your data will be used, aligned to the Kenya Data
              Protection Act 2019.
            </Alert>
            <Form.Check
              type="checkbox"
              id="consent-check"
              className="mb-3"
              label="I have read and understood how my personal data will be collected and used by the Huduma Virtual Centre."
              required
            />
            <Button variant="primary" className="w-100" onClick={() => router.push("/")}>
              Continue to Virtual Service Centre
            </Button>
          </div>
        )}

        {step !== "entry" && (
          <Button variant="link" className="w-100 mt-2" onClick={next("entry")}>
            Start over
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
