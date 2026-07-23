import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import ApplicationReviewClient from "@/components/queue/ApplicationReviewClient";
import { applications, applicationDetail } from "@/lib/mock/applications";

const fallbackDetail = {
  timeline: [{ step: "Application submitted", at: "—", actor: "Citizen" }],
  documents: [{ name: "Supporting document.pdf", status: "Needs review" }],
  messages: [],
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `${id} — Application Queue — Huduma DGSP Admin` };
}

export default async function ApplicationReviewPage({ params }) {
  const { id } = await params;
  const application = applications.find((a) => a.id === id) ?? applications[0];
  const detail = applicationDetail[application.id] ?? fallbackDetail;

  return (
    <div>
      <PageHeader
        title={application.id}
        description={`${application.service} — ${application.mda}`}
        actions={
          <Link href="/queue" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-1" />
            Back to queue
          </Link>
        }
      />
      <ApplicationReviewClient application={application} detail={detail} />
    </div>
  );
}
