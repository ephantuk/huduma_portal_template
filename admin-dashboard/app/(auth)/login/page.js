"use client";

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState("credentials");

  function handleCredentialsSubmit(e) {
    e.preventDefault();
    setStep("mfa");
  }

  function handleMfaSubmit(e) {
    e.preventDefault();
    router.push("/dashboard");
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
          <h1 className="h4 mb-1">Huduma DGSP Admin Portal</h1>
          <p className="text-secondary small mb-0">Module A — Admin Portal &amp; Dashboard (ADM-01, ADM-02)</p>
        </div>

        {step === "credentials" ? (
          <Form onSubmit={handleCredentialsSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="e.g. r.mwangi" required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="••••••••" required />
            </Form.Group>
            <Alert variant="info" className="small py-2">
              <i className="bi bi-shield-lock me-1" />
              Privileged sessions are subject to IP allowlisting and Privileged Access Management (PAM) per ADM-02.
            </Alert>
            <Button type="submit" variant="primary" className="w-100">
              Continue
            </Button>
          </Form>
        ) : (
          <Form onSubmit={handleMfaSubmit}>
            <p className="small text-secondary">
              Enter the 6-digit code from your authenticator app, or the SMS OTP sent to your registered number.
            </p>
            <Form.Group className="mb-3" controlId="mfa-code">
              <Form.Label>Two-factor code</Form.Label>
              <Form.Control type="text" inputMode="numeric" maxLength={6} placeholder="000000" required autoFocus />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100 mb-2">
              Verify &amp; Sign in
            </Button>
            <Button type="button" variant="link" className="w-100" onClick={() => setStep("credentials")}>
              Back
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}
