// layout/DashboardLayout.jsx

import { NavLink, Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";

const DashboardLayout = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="flex min-h-screen my-26">
        {/* Sidebar */}
        <aside className="w-36 md:w-64 bg-base-200 p-4 space-y-2">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <NavLink to="/dashboard" end className="btn btn-sm w-full">
            Overview
          </NavLink>
          <NavLink to="/dashboard/gardeners" className="btn btn-sm w-full">
            All Items
          </NavLink>
          <NavLink to="/dashboard/myTips" className="btn btn-sm w-full">
            My Tips
          </NavLink>
          <NavLink to="/dashboard/shareTips" className="btn btn-sm w-full">
            Share Tips
          </NavLink>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <Outlet />
        </main>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default DashboardLayout;
