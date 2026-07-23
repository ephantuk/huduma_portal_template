import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import OnboardingDetailClient from "@/components/onboarding/OnboardingDetailClient";
import { onboardings } from "@/lib/mock/onboardings";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `${id} — Onboarding — Huduma DGSP Admin` };
}

export default async function OnboardingDetailPage({ params }) {
  const { id } = await params;
  const record = onboardings.find((o) => o.id === id) ?? onboardings[0];

  return (
    <div>
      <PageHeader
        title={record.id}
        description={`${record.mda} — ${record.service}`}
        actions={
          <Link href="/onboarding" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-1" />
            Back to pipeline
          </Link>
        }
      />
      <OnboardingDetailClient record={record} />
    </div>
  );
}
