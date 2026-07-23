"use client";

import Card from "react-bootstrap/Card";
import OnboardingTable from "@/components/onboarding/OnboardingTable";

export default function OnboardingCard({ rows }) {
  return (
    <Card className="hvc-card">
      <Card.Body>
        <OnboardingTable rows={rows} />
      </Card.Body>
    </Card>
  );
}
