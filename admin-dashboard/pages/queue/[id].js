import Head from "next/head";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import ApplicationReviewClient from "@/components/queue/ApplicationReviewClient";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { applications, applicationDetail } from "@/lib/mock/applications";

const fallbackDetail = {
  timeline: [{ step: "Application submitted", at: "—", actor: "Citizen" }],
  documents: [{ name: "Supporting document.pdf", status: "Needs review" }],
  messages: [],
};

export async function getServerSideProps({ params }) {
  const application = applications.find((a) => a.id === params.id) ?? applications[0];
  const detail = applicationDetail[application.id] ?? fallbackDetail;
  return { props: { application, detail } };
}

export default function ApplicationReviewPage({ application, detail }) {
  return (
    <div>
      <Head>
        <title>{application.id} — Application Queue — Huduma DGSP Admin</title>
      </Head>
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

ApplicationReviewPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
