import PageHeader from "@/components/common/PageHeader";
import QueueCard from "@/components/queue/QueueCard";
import { applications } from "@/lib/mock/applications";

export const metadata = { title: "Application Queue — Huduma DGSP Admin" };

export default function QueuePage() {
  return (
    <div>
      <PageHeader
        title="Application Queue"
        description="Sortable, filterable pending applications with SLA highlighting (ADM-10)."
      />
      <QueueCard rows={applications} />
    </div>
  );
}
