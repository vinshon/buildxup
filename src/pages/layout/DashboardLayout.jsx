import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "../../components/sidebar/sideBarMenu";
import DashboardProvider from "../../context/DashboardContext";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <div className="h-screen bg-bgfadeColor">
        <div className="grid lg:grid-cols-12">
          {/* Sidebar */}
          <SideBarMenu />

          {/* Main Content */}
          <div className="lg:col-span-10">
            <div className="h-24 w-full bg-white shadow"></div>
            <div className="w-full lg:p-4 p-2">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
