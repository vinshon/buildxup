import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const sideMenuData = [
  { name: "Dashboard", icon: "/dashboard/icon/SVG.png", path: "/dashboard" },
  {
    name: "Projects",
    icon: "/dashboard/icon/SVG-1.png",
    path: "/dashboard/project",
  },
  {
    name: "Attendance",
    icon: "/dashboard/icon/SVG-2.png",
    path: "#",
  },
  {
    name: "Documents",
    icon: "/dashboard/icon/SVG-3.png",
    path: "#",
  },
  {
    name: "Reports",
    icon: "/dashboard/icon/SVG-4.png",
    path: "#",
  },
  {
    name: "Teams",
    icon: "/dashboard/icon/SVG-5.png",
    path: "#",
  },
];

const recentProjects = ["Ananya's Garden 2", "Prime Villa", "Royal Fort"];

export default function SideBarMenu() {
  const [selectedSideMenu, setSelectedSideMenu] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" relative lg:col-span-2 bg-white h-screen shadow-md lg:block hidden">
      <div className="h-24 w-full pl-5 pt-5">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="py-10 pl-5">
        <ul className="font-medium cursor-pointer">
          {sideMenuData.map((item, i) => (
            <li
              key={"Side menu" + i}
              onClick={() => {
                setSelectedSideMenu(item.name);
                navigate(item.path);
              }}
              className={`flex gap-x-4 rounded-md hover:bg-menuHover hover:text-primary p-4 ${
                selectedSideMenu === item.name
                  ? "text-primary bg-menuHover"
                  : ""
              }`}
            >
              <img src={item.icon} alt={item.name} /> {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="pl-5">
        <h2 className="text-fadetext">Recent Projects</h2>
        <ul className="font-medium cursor-pointer mt-2">
          {recentProjects.map((item, i) => (
            <li
              className="flex items-center gap-x-4 rounded-md hover:bg-menuHover hover:text-primary p-4 group"
              key={"Recent project" + i}
            >
              <span className="shadow-sm px-3 py-1 border group-hover:border-primary rounded-md">
                {item[0]}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className=" absolute bottom-8 left-8 flex gap-2 items-center ">
        <img
          src="/dashboard/icon/profile.png"
          alt="profile"
          className=" h-8 object-contain"
        />
        <p className=" font-bold ">Sethupathi</p>
      </div>
    </div>
  );
}
