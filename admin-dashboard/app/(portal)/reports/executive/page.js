import PageHeader from "@/components/common/PageHeader";
import ExecutiveDashboardClient from "@/components/reports/ExecutiveDashboardClient";
import { serviceMix, countyPerformance } from "@/lib/mock/kpis";

export const metadata = { title: "Executive Dashboard — Huduma DGSP Admin" };

export default function ExecutiveDashboardPage() {
  return (
    <div>
      <PageHeader
        title="National Executive Dashboard"
        description="Service utilisation, county-level comparisons, revenue trends and citizen feedback analytics (ADM-19)."
      />
      <ExecutiveDashboardClient serviceMix={serviceMix} countyPerformance={countyPerformance} />
    </div>
  );
}
