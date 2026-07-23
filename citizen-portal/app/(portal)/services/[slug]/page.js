import Link from "next/link";
import RoadmapClient from "@/components/roadmap/RoadmapClient";
import { findService } from "@/lib/mock/services";
import { getRoadmap } from "@/lib/mock/roadmap";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  return { title: `${service.name} — Roadmap — Huduma Virtual Centre` };
}

export default async function ServiceRoadmapPage({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  const roadmap = getRoadmap(slug);

  return (
    <div>
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
