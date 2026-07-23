import Head from "next/head";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import ReportsClient from "@/components/reports/ReportsClient";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { overviewStats, weeklyVolume } from "@/lib/mock/kpis";

export default function ReportsPage() {
  return (
    <div>
      <Head>
        <title>Agency Reports — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="Agency Reports & Analytics"
        description="Real-time service usage, processing times and bottlenecks, configurable by date range (ADM-18). KPI dashboards auto-activate at service go-live (ADM-20)."
        actions={
          <Link href="/reports/executive" className="btn btn-outline-primary">
            <i className="bi bi-graph-up-arrow me-1" />
            Executive dashboard
          </Link>
        }
      />
      <ReportsClient overviewStats={overviewStats} weeklyVolume={weeklyVolume} />
    </div>
  );
}

ReportsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
