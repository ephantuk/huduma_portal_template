import Head from "next/head";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import OnboardingDetailClient from "@/components/onboarding/OnboardingDetailClient";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { onboardings } from "@/lib/mock/onboardings";

export async function getServerSideProps({ params }) {
  const record = onboardings.find((o) => o.id === params.id) ?? onboardings[0];
  return { props: { record } };
}

export default function OnboardingDetailPage({ record }) {
  return (
    <div>
      <Head>
        <title>{record.id} — Onboarding — Huduma DGSP Admin</title>
      </Head>
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

OnboardingDetailPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
