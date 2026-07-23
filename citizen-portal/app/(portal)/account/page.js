import AccountClient from "@/components/account/AccountClient";

export const metadata = { title: "Account — Huduma Virtual Centre" };

export default function AccountPage() {
  return (
    <div>
      <h1 className="h4 mb-4">Account &amp; Preferences</h1>
      <AccountClient />
    </div>
  );
}
