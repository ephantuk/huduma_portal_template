import Head from "next/head";
import Link from "next/link";
import ApplicationDetailClient from "@/components/applications/ApplicationDetailClient";
import PortalLayout from "@/components/layout/PortalLayout";
import { myApplications, applicationTimelines } from "@/lib/mock/applications";

const fallbackTimeline = [{ step: "Application submitted", at: "—", state: "done" }];

export async function getServerSideProps({ params }) {
  const application = myApplications.find((a) => a.id === params.id) ?? myApplications[0];
  const timeline = applicationTimelines[application.id] ?? fallbackTimeline;
  return { props: { application, timeline } };
}

export default function ApplicationDetailPage({ application, timeline }) {
  return (
    <div>
      <Head>
        <title>{application.id} — My Applications — Huduma Virtual Centre</title>
      </Head>
      <Link href="/applications" className="small text-secondary text-decoration-none d-inline-block mb-2">
        <i className="bi bi-arrow-left me-1" />
        Back to my applications
      </Link>
      <h1 className="h4 mb-1">{application.service}</h1>
      <p className="text-secondary mb-4">{application.id}</p>
      <ApplicationDetailClient application={application} timeline={timeline} />
    </div>
  );
}

ApplicationDetailPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
