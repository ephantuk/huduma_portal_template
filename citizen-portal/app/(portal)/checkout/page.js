import CheckoutClient from "@/components/checkout/CheckoutClient";

export const metadata = { title: "Checkout — Huduma Virtual Centre" };

export default function CheckoutPage() {
  return (
    <div>
      <h1 className="h4 mb-4">Payment</h1>
      <CheckoutClient />
    </div>
  );
}
