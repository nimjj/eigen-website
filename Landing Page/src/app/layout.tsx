import { Outlet } from "react-router";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-[#FAF9F5] text-[#1B1B1B] font-body selection:bg-black selection:text-white flex flex-col antialiased">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
