import Head from "next/head";
import Link from "next/link";
import RoadmapClient from "@/components/roadmap/RoadmapClient";
import PortalLayout from "@/components/layout/PortalLayout";
import { findService } from "@/lib/mock/services";
import { getRoadmap } from "@/lib/mock/roadmap";

export async function getServerSideProps({ params }) {
  const service = findService(params.slug);
  const roadmap = getRoadmap(params.slug);
  return { props: { service, roadmap } };
}

export default function ServiceRoadmapPage({ service, roadmap }) {
  return (
    <div>
      <Head>
        <title>{service.name} — Roadmap — Huduma Virtual Centre</title>
      </Head>
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <Link href="/" className="small text-secondary text-decoration-none d-inline-block mb-2">
            <i className="bi bi-arrow-left me-1" />
            Back to services
          </Link>
          <h1 className="h4 mb-1">{service.name}</h1>
          <p className="text-secondary mb-0">{service.mda}</p>
        </div>
      </div>
      <RoadmapClient service={service} roadmap={roadmap} />
    </div>
  );
}

ServiceRoadmapPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
