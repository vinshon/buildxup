// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const sideMenuData = [
//   { name: "Dashboard", icon: "/dashboard/icon/SVG.png", path: "/dashboard" },
//   {
//     name: "Projects",
//     icon: "/dashboard/icon/SVG-1.png",
//     path: "/dashboard/project",
//   },
//   {
//     name: "Attendance",
//     icon: "/dashboard/icon/SVG-2.png",
//     path: "#",
//   },
//   {
//     name: "Documents",
//     icon: "/dashboard/icon/SVG-3.png",
//     path: "#",
//   },
//   {
//     name: "Reports",
//     icon: "/dashboard/icon/SVG-4.png",
//     path: "#",
//   },
//   {
//     name: "Teams",
//     icon: "/dashboard/icon/SVG-5.png",
//     path: "#",
//   },
// ];

// const recentProjects = ["Ananya's Garden 2", "Prime Villa", "Royal Fort"];

// export default function SideBarMenu() {
//   const [selectedSideMenu, setSelectedSideMenu] = useState("Dashboard");
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <div className=" relative flex flex-col justify-between    xl:text-base text-sm overflow-y-auto">
//       <div>
//         <div className=" py-4 xl:py-10 pl-5">
//           <ul className="font-medium cursor-pointer">
//             {sideMenuData.map((item, i) => (
//               <li
//                 key={"Side menu" + i}
//                 onClick={() => {
//                   setSelectedSideMenu(item.name);
//                   navigate(item.path);
//                 }}
//                 className={`flex gap-x-4 rounded-md hover:bg-menuHover hover:text-primary p-4 ${
//                   selectedSideMenu === item.name
//                     ? "text-primary bg-menuHover"
//                     : ""
//                 }`}
//               >
//                 <img src={item.icon} alt={item.name} /> {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="xl:pl-5 pl-3">
//           <h2 className="text-fadetext">Recent Projects</h2>
//           <ul className="font-medium  cursor-pointer mt-2">
//             {recentProjects.map((item, i) => (
//               <li
//                 className="flex items-center gap-x-4 rounded-md hover:bg-menuHover hover:text-primary p-4 group"
//                 key={"Recent project" + i}
//               >
//                 <span className="shadow-sm px-3 py-1 border group-hover:border-primary rounded-md">
//                   {item[0]}
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className=" flex items-center  gap-2 pl-10 py-4">
//         <img
//           src="/dashboard/icon/profile.png"
//           alt="profile"
//           className=" h-8 object-contain"
//         />
//         <p className=" font-bold ">Sethupathi</p>
//       </div>
//     </div>
//   );
// }


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

        {/* Recent Projects */}
        {/* <div className="mt-8">
          <h2 className="text-xs text-fadetext font-semibold mb-3 uppercase">Recent Projects</h2>
          <ul className="space-y-2 font-medium">
            {recentProjects.map((project, i) => (
              <li
                key={"Recent project" + i}
                className="flex items-center gap-x-3 p-3 rounded-md cursor-pointer hover:bg-menuHover hover:text-primary group"
              >
                <span className="border px-3 py-1 rounded-md text-sm group-hover:border-primary">
                  {project[0]}
                </span>
                {project}
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* Profile (sticky bottom) */}
      <div className="flex items-center gap-3 px-5 py-4 border-t shrink-0">
        <img
          src="/dashboard/icon/profile.png"
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="font-bold">Sethupathi</span>
      </div>
    </div>
  );
}
