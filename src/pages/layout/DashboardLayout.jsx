import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "../../components/sidebar/sideBarMenu";
import DashboardProvider from "../../context/DashboardContext";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <div className="bg-bgfadeColor min-h-screen overflow-hidden">
        <div className="w-full flex h-screen">
          {/* Sidebar (fixed height and no scroll) */}
          <div className="lg:w-60 lg:flex hidden overflow-hidden">
            <SideBarMenu />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header (fixed height) */}
            <div className="h-[72px] w-full bg-white shrink-0" />

            {/* Scrollable Main Area (below header) */}
            <div className="flex-1 overflow-y-auto w-full lg:p-4 p-2">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
