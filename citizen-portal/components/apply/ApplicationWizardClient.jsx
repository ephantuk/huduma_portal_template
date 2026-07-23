"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Alert from "react-bootstrap/Alert";

const steps = [
  { key: "details", label: "Your details" },
  { key: "documents", label: "Upload documents" },
  { key: "biometric", label: "Biometric capture" },
  { key: "review", label: "Review & submit" },
];

export default function ApplicationWizardClient({ service }) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  function handleNext(e) {
    e.preventDefault();
    if (isLast) {
      router.push("/checkout");
      return;
    }
    setStepIndex((i) => i + 1);
  }

  function handleSaveDraft() {
    setSaved(true);
  }

  return (
    <Card className="hvc-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="small text-secondary">
            Step {stepIndex + 1} of {steps.length} — {step.label}
          </span>
          <Button variant="link" size="sm" onClick={handleSaveDraft}>
            <i className="bi bi-cloud-arrow-down me-1" />
            Save &amp; resume later (CWA-06)
          </Button>
        </div>
        <ProgressBar now={((stepIndex + 1) / steps.length) * 100} style={{ height: 6 }} className="mb-4" />

        {saved ? (
          <Alert variant="success" className="small py-2">
            <i className="bi bi-check-circle me-1" />
            Draft saved. You can resume this application from &quot;My Applications&quot; on web, mobile or kiosk
            (UR-CONT-02, UR-CONT-05).
          </Alert>
        ) : null}

        <Form onSubmit={handleNext}>
          {step.key === "details" && (
            <div className="row g-3">
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control defaultValue="Jane Wanjiku" required />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>National ID number</Form.Label>
                  <Form.Control defaultValue="32145678" required />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control defaultValue="0712 345 678" required />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" defaultValue="jane.wanjiku@example.com" />
                </Form.Group>
              </div>
              <p className="text-secondary small mb-0">
                Form fields render dynamically from {service.name}&apos;s configured schema (CWA-05); conditional
                fields appear based on earlier answers.
              </p>
            </div>
          )}

          {step.key === "documents" && (
            <div className="d-flex flex-column gap-3">
              {["Police Abstract", "Passport photo", "Birth certificate copy"].map((doc) => (
                <div key={doc} className="hvc-surface-muted rounded-3 p-3">
                  <Form.Label className="fw-semibold small mb-2 d-block">{doc}</Form.Label>
                  <Form.Control type="file" accept="image/*,application/pdf" />
                  <div className="form-text">
                    <i className="bi bi-info-circle me-1" />
                    OCR pre-validates legibility before submission (CWA-07).
                  </div>
                </div>
              ))}
            </div>
          )}

          {step.key === "biometric" && (
            <div>
              <p className="text-secondary small">Choose how your fingerprints will be captured.</p>
              <Form.Check
                type="radio"
                name="biometric"
                id="biometric-physical"
                label="Physical fingerprint capture at a Huduma Centre"
                defaultChecked
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="biometric"
                id="biometric-digital"
                label="Digital biometric capture via the HVC Kiosk"
                className="mb-3"
              />
              <Form.Group>
                <Form.Label>Preferred Huduma Centre</Form.Label>
                <Form.Select defaultValue="nairobi-gpo">
                  <option value="nairobi-gpo">Nairobi GPO Huduma Centre</option>
                  <option value="mombasa">Mombasa Huduma Centre</option>
                  <option value="kisumu">Kisumu Huduma Centre</option>
                </Form.Select>
              </Form.Group>
            </div>
          )}

          {step.key === "review" && (
            <div>
              <p className="text-secondary small">
                Review your application summary below. Submitting will take you to eCitizen checkout to make the
                service payment (UR-PAY-01).
              </p>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Service</span>
                  <span className="fw-semibold">{service.name}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Applicant</span>
                  <span className="fw-semibold">Jane Wanjiku</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Biometric method</span>
                  <span className="fw-semibold">Physical — Nairobi GPO Huduma Centre</span>
                </li>
              </ul>
            </div>
          )}

          <div className="d-flex justify-content-between mt-4">
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
              disabled={stepIndex === 0}
            >
              Back
            </Button>
            <Button type="submit" variant="primary">
              {isLast ? "Submit & proceed to payment" : "Continue"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
