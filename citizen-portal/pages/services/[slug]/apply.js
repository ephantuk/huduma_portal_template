import Head from "next/head";
import Link from "next/link";
import ApplicationWizardClient from "@/components/apply/ApplicationWizardClient";
import PortalLayout from "@/components/layout/PortalLayout";
import { findService } from "@/lib/mock/services";

export async function getServerSideProps({ params }) {
  const service = findService(params.slug);
  return { props: { service, slug: params.slug } };
}

export default function ApplyPage({ service, slug }) {
  return (
    <div>
      <Head>
        <title>Apply — {service.name} — Huduma Virtual Centre</title>
      </Head>
      <div className="mb-4">
        <Link href={`/services/${slug}`} className="small text-secondary text-decoration-none d-inline-block mb-2">
          <i className="bi bi-arrow-left me-1" />
          Back to roadmap
        </Link>
        <h1 className="h4 mb-0">{service.name} — Application</h1>
      </div>
      <ApplicationWizardClient service={service} />
    </div>
  );
}

ApplyPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
