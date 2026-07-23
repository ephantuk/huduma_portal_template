import Head from "next/head";
import HistoryClient from "@/components/history/HistoryClient";
import PortalLayout from "@/components/layout/PortalLayout";
import { applicationHistory } from "@/lib/mock/applications";

export default function HistoryPage() {
  return (
    <div>
      <Head>
        <title>History — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-1">Application &amp; Payment History</h1>
      <p className="text-secondary mb-4">Every past interaction with government services in one place (CWA-18).</p>
      <HistoryClient records={applicationHistory} />
    </div>
  );
}

HistoryPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
