import Head from "next/head";
import PageHeader from "@/components/common/PageHeader";
import TicketsCard from "@/components/support/TicketsCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { tickets } from "@/lib/mock/tickets";

export default function SupportPage() {
  return (
    <div>
      <Head>
        <title>Support & Escalations — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="Support & Escalations"
        description="T2/T3 escalations with full citizen context and SLA countdowns (ADM-15); security/ITSM incidents (ADM-23)."
      />
      <TicketsCard rows={tickets} />
    </div>
  );
}

SupportPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
