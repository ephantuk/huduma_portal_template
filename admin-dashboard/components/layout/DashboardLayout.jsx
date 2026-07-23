"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="hvc-app-shell d-flex">
      <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen ? (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1030 }}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      ) : null}
      <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>
        <Topbar onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        <main className="flex-grow-1 p-3 p-lg-4">{children}</main>
      </div>
    </div>
  );
}
