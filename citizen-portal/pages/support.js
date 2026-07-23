import Head from "next/head";
import SupportClient from "@/components/support/SupportClient";
import PortalLayout from "@/components/layout/PortalLayout";

export default function SupportPage() {
  return (
    <div>
      <Head>
        <title>Support — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-4">Support</h1>
      <SupportClient />
    </div>
  );
}

SupportPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
