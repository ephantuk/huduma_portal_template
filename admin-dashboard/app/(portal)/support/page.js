import PageHeader from "@/components/common/PageHeader";
import TicketsCard from "@/components/support/TicketsCard";
import { tickets } from "@/lib/mock/tickets";

export const metadata = { title: "Support & Escalations — Huduma DGSP Admin" };

export default function SupportPage() {
  return (
    <div>
      <PageHeader
        title="Support & Escalations"
        description="T2/T3 escalations with full citizen context and SLA countdowns (ADM-15); security/ITSM incidents (ADM-23)."
      />
      <TicketsCard rows={tickets} />
    </div>
  );
}
