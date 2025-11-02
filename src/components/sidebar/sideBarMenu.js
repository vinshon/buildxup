
import {
  HomeIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sideMenuData = [
  { name: "Dashboard", icon: <HomeIcon className="h-5 w-5" />, path: "/dashboard" },
  { name: "Projects", icon: <FolderIcon className="h-5 w-5" />, path: "/under-Construction" },
  { name: "Attendance", icon: <CalendarIcon className="h-5 w-5" />, path: "/under-Construction" },
  { name: "Documents", icon: <DocumentDuplicateIcon className="h-5 w-5" />, path: "/under-Construction" },
  { name: "Reports", icon: <ChartBarIcon className="h-5 w-5" />, path: "/under-Construction" },
  { name: "Teams", icon: <UsersIcon className="h-5 w-5" />, path: "/under-Construction" },
];

const recentProjects = ["Ananya's Garden 2", "Prime Villa", "Royal Fort"];

export default function SideBarMenu() {
  const [selectedSideMenu, setSelectedSideMenu] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col bg-white  border-r border-gray-200 lg:text-base text-sm w-full">
      {/* Logo (fixed) */}
      <div className="py-4 flex justify-center items-center border-b shrink-0 w-full">
        <img src="/logo.png" alt="logo" className="h-10" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden scroll-smooth px-5">
        <ul className="space-y-2 font-medium mt-4">
          {sideMenuData.map((item, index) => (
            <li
              key={"Side menu" + index}
              onClick={() => {
                setSelectedSideMenu(item.name);
                navigate(item.path);
              }}
              className={`flex items-center gap-x-4 p-3 rounded-md cursor-pointer hover:bg-menuHover hover:text-primary ${
                selectedSideMenu === item.name ? "bg-menuHover text-primary" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>

      </div>

     
    </div>
  );
}
