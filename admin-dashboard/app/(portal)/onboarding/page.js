import Button from "react-bootstrap/Button";
import PageHeader from "@/components/common/PageHeader";
import OnboardingCard from "@/components/onboarding/OnboardingCard";
import { onboardings } from "@/lib/mock/onboardings";

export const metadata = { title: "MDA Onboarding — Huduma DGSP Admin" };

export default function OnboardingPage() {
  return (
    <div>
      <PageHeader
        title="MDA Onboarding Pipeline"
        description="Track onboarding stage and RAG status across parallel MDA engagements (ADM-04, ADM-05)."
        actions={
          <Button variant="primary">
            <i className="bi bi-plus-lg me-1" />
            New Service Intake Form
          </Button>
        }
      />
      <OnboardingCard rows={onboardings} />
    </div>
  );
}
