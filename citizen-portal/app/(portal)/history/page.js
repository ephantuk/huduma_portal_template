import HistoryClient from "@/components/history/HistoryClient";
import { applicationHistory } from "@/lib/mock/applications";

export const metadata = { title: "History — Huduma Virtual Centre" };

export default function HistoryPage() {
  return (
    <div>
      <h1 className="h4 mb-1">Application &amp; Payment History</h1>
      <p className="text-secondary mb-4">Every past interaction with government services in one place (CWA-18).</p>
      <HistoryClient records={applicationHistory} />
    </div>
  );
}
