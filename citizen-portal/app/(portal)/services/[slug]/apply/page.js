import Link from "next/link";
import ApplicationWizardClient from "@/components/apply/ApplicationWizardClient";
import { findService } from "@/lib/mock/services";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = findService(slug);
  return { title: `Apply — ${service.name} — Huduma Virtual Centre` };
}

export default async function ApplyPage({ params }) {
  const { slug } = await params;
  const service = findService(slug);

  return (
    <div>
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
