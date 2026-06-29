import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#080B14] text-white flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isAuthPage ? "" : ""}`}>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}