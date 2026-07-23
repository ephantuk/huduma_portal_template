import Head from "next/head";
import Button from "react-bootstrap/Button";
import PageHeader from "@/components/common/PageHeader";
import OnboardingCard from "@/components/onboarding/OnboardingCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { onboardings } from "@/lib/mock/onboardings";

export default function OnboardingPage() {
  return (
    <div>
      <Head>
        <title>MDA Onboarding — Huduma DGSP Admin</title>
      </Head>
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

OnboardingPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
