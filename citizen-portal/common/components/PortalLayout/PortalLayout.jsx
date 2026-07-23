import Navbar from "@/common/components/Navbar";
import BottomNav from "@/common/components/BottomNav";
import Footer from "@/common/components/Footer";

export default function PortalLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container-xl py-4">{children}</main>
      <Footer />
      <BottomNav />
    </div>
  );
}
