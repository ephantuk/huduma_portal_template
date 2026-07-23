import Head from "next/head";
import PageHeader from "@/components/common/PageHeader";
import ExecutiveDashboardClient from "@/components/reports/ExecutiveDashboardClient";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { serviceMix, countyPerformance } from "@/lib/mock/kpis";

export default function ExecutiveDashboardPage() {
  return (
    <div>
      <Head>
        <title>Executive Dashboard — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="National Executive Dashboard"
        description="Service utilisation, county-level comparisons, revenue trends and citizen feedback analytics (ADM-19)."
      />
      <ExecutiveDashboardClient serviceMix={serviceMix} countyPerformance={countyPerformance} />
    </div>
  );
}

ExecutiveDashboardPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
