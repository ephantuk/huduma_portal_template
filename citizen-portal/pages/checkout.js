import Head from "next/head";
import CheckoutClient from "@/components/checkout/CheckoutClient";
import PortalLayout from "@/components/layout/PortalLayout";

export default function CheckoutPage() {
  return (
    <div>
      <Head>
        <title>Checkout — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-4">Payment</h1>
      <CheckoutClient />
    </div>
  );
}

CheckoutPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
