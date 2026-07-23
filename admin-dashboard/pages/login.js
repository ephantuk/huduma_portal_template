import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AuthShell from "@/components/layout/AuthShell";
import OtpInput from "@/components/common/OtpInput";

function StepTrack({ step }) {
  return (
    <div className="hvc-step-track mb-4">
      <div className={`hvc-step-dot ${step > 1 ? "done" : "active"}`}>{step > 1 ? <i className="bi bi-check-lg" /> : "1"}</div>
      <span className={step > 1 ? "text-secondary" : "fw-semibold"}>Credentials</span>
      <div className="hvc-step-line" />
      <div className={`hvc-step-dot ${step === 2 ? "active" : "upcoming"}`}>2</div>
      <span className={step === 2 ? "fw-semibold" : "text-secondary"}>Verification</span>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("j.mwangi@publicservice.go.ke");
  const [seconds, setSeconds] = useState(47);

  useEffect(() => {
    if (step !== 2) return undefined;
    setSeconds(47);
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [step]);

  function handleCredentialsSubmit(e) {
    e.preventDefault();
    setStep(2);
  }

  function handleVerify(e) {
    e.preventDefault();
    router.push("/dashboard");
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <>
      <Head>
        <title>Admin Portal Sign In — Huduma DGSP</title>
      </Head>

      <h1 className="h2 fw-bold mb-1">Admin Portal Sign In</h1>
      <p className="text-secondary mb-4">Authorised MDA staff and system administrators only.</p>

      <StepTrack step={step} />

      {step === 1 && (
        <Form onSubmit={handleCredentialsSubmit}>
          <Form.Group className="mb-3" controlId="staff-email">
            <Form.Label>Staff Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="staff-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="••••••••" required />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" className="w-100 mb-3">
            Continue
          </Button>
        </Form>
      )}

      {step === 2 && (
        <Form onSubmit={handleVerify}>
          <div className="hvc-surface-muted rounded-3 p-3 d-flex justify-content-between align-items-center mb-4">
            <div>
              <div className="text-secondary small">Staff Email</div>
              <div className="fw-semibold">{email}</div>
            </div>
            <button type="button" className="btn btn-link p-0" onClick={() => setStep(1)}>
              Change
            </button>
          </div>

          <div className="hvc-card border-top border-primary border-3 p-4 mb-3">
            <h2 className="h5 mb-2">Two-Factor Authentication</h2>
            <p className="text-secondary small">
              Enter the 6-digit code sent via SMS to
              <br />
              <span className="fw-semibold text-body">+254 7•• •••456</span>
            </p>
            <div className="mb-3">
              <OtpInput />
            </div>
            <div className="d-flex justify-content-between small mb-4">
              <span>
                Code expires in <span className="text-warning fw-semibold">{mm}:{ss}</span>
              </span>
              <button type="button" className="btn btn-link p-0" onClick={() => setSeconds(47)}>
                Resend code
              </button>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-100 mb-3">
              Verify &amp; Sign In
            </Button>
            <Form.Check type="checkbox" id="trust-device" label="Trust this device for 30 days" />
          </div>

          <div className="d-flex justify-content-between small mb-4">
            <a href="#trouble" className="fw-semibold">
              Trouble signing in?
            </a>
            <button type="button" className="btn btn-link p-0 fw-semibold" onClick={() => setStep(1)}>
              Back to credentials
            </button>
          </div>
        </Form>
      )}

      <Alert variant="warning" className="small mb-0">
        <i className="bi bi-exclamation-triangle me-1" />
        Unauthorised access is prohibited and monitored. All logins are logged.
      </Alert>
    </>
  );
}

LoginPage.getLayout = (page) => <AuthShell>{page}</AuthShell>;
