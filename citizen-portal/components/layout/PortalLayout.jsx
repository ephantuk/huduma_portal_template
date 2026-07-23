import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Footer from "./Footer";

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
