import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const steps = ["identify", "mobile", "otp", "password", "consent"];

export default function Register() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  function next(e) {
    e.preventDefault();
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      router.push("/");
    }
  }

  return (
    <>
      <Head>
        <title>Create Account — Huduma Virtual Centre</title>
      </Head>

      <h1 className="h2 fw-bold mb-1">Create a Huduma Virtual Services account</h1>
      <p className="text-secondary mb-4">Step {stepIndex + 1} of {steps.length} (UR-AUTH-02).</p>

      {step === "identify" && (
        <Form onSubmit={next}>
          <Form.Group className="mb-4" controlId="identifier">
            <Form.Label>National ID Number or Email</Form.Label>
            <Form.Control type="text" placeholder="e.g. 32145678 or jane@example.com" required autoFocus />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" className="w-100">
            Continue
          </Button>
        </Form>
      )}

      {step === "mobile" && (
        <Form onSubmit={next}>
          <p className="text-secondary small">Input your mobile number to receive a one-time password.</p>
          <Form.Group className="mb-4" controlId="mobile">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="tel" placeholder="07xx xxx xxx" required autoFocus />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" className="w-100">
            Send OTP
          </Button>
        </Form>
      )}

      {step === "otp" && (
        <Form onSubmit={next}>
          <p className="text-secondary small">Enter the OTP sent via SMS to validate your mobile number (CWA-01).</p>
          <Form.Group className="mb-4" controlId="otp">
            <Form.Label>One-time password</Form.Label>
            <Form.Control type="text" inputMode="numeric" maxLength={6} placeholder="000000" required autoFocus />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" className="w-100">
            Verify
          </Button>
        </Form>
      )}

      {step === "password" && (
        <Form onSubmit={next}>
          <p className="text-secondary small">Create a password to secure your account.</p>
          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="••••••••" required autoFocus />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" className="w-100">
            Continue
          </Button>
        </Form>
      )}

      {step === "consent" && (
        <Form onSubmit={next}>
          <Alert variant="info" className="small">
            <i className="bi bi-shield-check me-1" />
            CWA-02: Before you continue, please review how your data will be used, aligned to the Kenya Data
            Protection Act 2019.
          </Alert>
          <Form.Check
            type="checkbox"
            id="consent-check"
            className="mb-4"
            label="I have read and understood how my personal data will be collected and used by the Huduma Virtual Centre."
            required
          />
          <Button type="submit" variant="primary" size="lg" className="w-100">
            Create account &amp; continue
          </Button>
        </Form>
      )}

      <p className="text-center mt-4 mb-0">
        Already have an account?{" "}
        <Link href="/login" className="fw-semibold">
          Sign in
        </Link>
      </p>
    </>
  );
}
