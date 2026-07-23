import Head from "next/head";
import ServiceCatalogueClient from "@/components/catalogue/ServiceCatalogueClient";
import PortalLayout from "@/components/layout/PortalLayout";
import { services, categories } from "@/lib/mock/services";
import { myApplications } from "@/lib/mock/applications";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Huduma Virtual Centre — Services</title>
      </Head>
      <div className="hvc-hero rounded-4 p-4 p-lg-5 mb-4">
        <h1 className="h3 mb-2">Government services, online.</h1>
        <p className="mb-0" style={{ opacity: 0.85 }}>
          The Huduma Virtual Centre — the digital equivalent of a Huduma Centre (CWA-03, CWA-04, UR-CAT-01).
        </p>
      </div>
      <ServiceCatalogueClient services={services} categories={categories} myApplications={myApplications} />
    </div>
  );
}

HomePage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
