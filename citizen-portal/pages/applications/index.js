import Head from "next/head";
import MyApplicationsClient from "@/components/applications/MyApplicationsClient";
import PortalLayout from "@/components/layout/PortalLayout";
import { myApplications } from "@/lib/mock/applications";

export default function ApplicationsPage() {
  return (
    <div>
      <Head>
        <title>My Applications — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-1">My Applications</h1>
      <p className="text-secondary mb-4">
        Applications in progress across every service, including drafts you can resume (UR-CAT-05, UR-CONT-03).
      </p>
      <MyApplicationsClient applications={myApplications} />
    </div>
  );
}

ApplicationsPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
