import Link from "next/link";
import ApplicationDetailClient from "@/components/applications/ApplicationDetailClient";
import { myApplications, applicationTimelines } from "@/lib/mock/applications";

const fallbackTimeline = [{ step: "Application submitted", at: "—", state: "done" }];

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `${id} — My Applications — Huduma Virtual Centre` };
}

export default async function ApplicationDetailPage({ params }) {
  const { id } = await params;
  const application = myApplications.find((a) => a.id === id) ?? myApplications[0];
  const timeline = applicationTimelines[application.id] ?? fallbackTimeline;

  return (
    <div>
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
