import Head from "next/head";
import AccountClient from "@/components/account/AccountClient";
import PortalLayout from "@/components/layout/PortalLayout";

export default function AccountPage() {
  return (
    <div>
      <Head>
        <title>Account — Huduma Virtual Centre</title>
      </Head>
      <h1 className="h4 mb-4">Account &amp; Preferences</h1>
      <AccountClient />
    </div>
  );
}

AccountPage.getLayout = (page) => <PortalLayout>{page}</PortalLayout>;
