import Head from "next/head";
import PageHeader from "@/components/common/PageHeader";
import DashboardClient from "@/components/dashboard/DashboardClient";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { overviewStats, weeklyVolume, serviceMix } from "@/lib/mock/kpis";
import { applications } from "@/lib/mock/applications";

export default function DashboardPage() {
  return (
    <div>
      <Head>
        <title>Dashboard — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="Overview"
        description="Platform-wide snapshot across all onboarded MDAs (ADM-18, ADM-20)."
      />
      <DashboardClient
        overviewStats={overviewStats}
        weeklyVolume={weeklyVolume}
        serviceMix={serviceMix}
        applications={applications}
      />
    </div>
  );
}

DashboardPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
