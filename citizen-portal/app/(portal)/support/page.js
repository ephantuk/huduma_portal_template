import SupportClient from "@/components/support/SupportClient";

export const metadata = { title: "Support — Huduma Virtual Centre" };

export default function SupportPage() {
  return (
    <div>
      <h1 className="h4 mb-4">Support</h1>
      <SupportClient />
    </div>
  );
}
