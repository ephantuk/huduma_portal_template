import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useLocale } from "@/context/LocaleProvider";

const PRN = "900214477";

export default function Checkout() {
  const router = useRouter();
  const { t } = useLocale();
  const [state, setState] = useState("pending");

  return (
    <div>
      <Head>
        <title>Checkout — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-4">Payment</h1>

      <Card className="hvc-card">
        <Card.Body>
          <Card.Title className="h6 mb-3">Checkout — eCitizen (UR-PAY-01)</Card.Title>

          <div className="hvc-surface-muted rounded-3 p-3 mb-3">
            <div className="d-flex justify-content-between small mb-1">
              <span className="text-secondary">Payment Registration Number (PRN)</span>
              <span className="fw-semibold">{PRN}</span>
            </div>
            <div className="d-flex justify-content-between small mb-1">
              <span className="text-secondary">Service fee</span>
              <span className="fw-semibold">KES 1,000</span>
            </div>
            <div className="d-flex justify-content-between small">
              <span className="text-secondary">Total due</span>
              <span className="fw-semibold">KES 1,000</span>
            </div>
          </div>

          {state === "pending" && (
            <div className="d-flex flex-column gap-2">
              <Button variant="primary" onClick={() => setState("success")}>
                <i className="bi bi-box-arrow-up-right me-1" />
                {t("checkout.payNow")}
              </Button>
              <Button variant="outline-danger" onClick={() => setState("failed")}>
                Simulate failed payment
              </Button>
            </div>
          )}

          {state === "success" && (
            <div>
              <Alert variant="success">
                <i className="bi bi-check-circle me-1" />
                Payment successful. A digital receipt has been sent via SMS and email (CWA-09).
              </Alert>
              <Button variant="primary" className="w-100" onClick={() => router.push("/applications")}>
                View my application status
              </Button>
            </div>
          )}

          {state === "failed" && (
            <div>
              <Alert variant="danger">
                <i className="bi bi-exclamation-triangle me-1" />
                Your payment could not be completed. Please try again, or contact the call centre if this continues
                (CWA-10).
              </Alert>
              <div className="d-flex gap-2">
                <Button variant="primary" onClick={() => setState("pending")}>
                  Retry payment
                </Button>
                <Button variant="outline-secondary" href="/support">
                  Contact call centre
                </Button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
