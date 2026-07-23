import Head from "next/head";
import PageHeader from "@/components/common/PageHeader";
import QueueCard from "@/components/queue/QueueCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { applications } from "@/lib/mock/applications";

export default function QueuePage() {
  return (
    <div>
      <Head>
        <title>Application Queue — Huduma DGSP Admin</title>
      </Head>
      <PageHeader
        title="Application Queue"
        description="Sortable, filterable pending applications with SLA highlighting (ADM-10)."
      />
      <QueueCard rows={applications} />
    </div>
  );
}

QueuePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
