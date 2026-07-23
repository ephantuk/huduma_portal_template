import PageHeader from "@/components/common/PageHeader";
import DashboardClient from "@/components/dashboard/DashboardClient";
import { overviewStats, weeklyVolume, serviceMix } from "@/lib/mock/kpis";
import { applications } from "@/lib/mock/applications";

export const metadata = { title: "Dashboard — Huduma DGSP Admin" };

export default function DashboardPage() {
  return (
    <div>
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
