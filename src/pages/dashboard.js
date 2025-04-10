import { useState } from "react";

const sideMenuData = [
  { name: "Dashboard", icon: "/dashboard/icon/SVG.png", Active:true},
  { name: "Projects", icon: "/dashboard/icon/SVG-1.png", Active:false },
  { name: "Attendance", icon: "/dashboard/icon/SVG-2.png", Active:false },
  { name: "Documents", icon: "/dashboard/icon/SVG-3.png", Active:false },
  { name: "Reports", icon: "/dashboard/icon/SVG-4.png", Active:false },
  { name: "Teams", icon: "/dashboard/icon/SVG-5.png" , Active:false},
];

const recentProjects = ["Ananya's Garden 2", "Prime Villa", "Royal Fort"];

export default function Dashboard() {
  const [selectedSideMenu, setSelectedSideMenu] = useState("Dashboard");

  return (
    <div className="h-screen bg-bgfadeColor">
      <div className=" grid grid-cols-12 ">
        <div className=" col-span-2 bg-white h-screen shadow-md ">
          <div className=" h-24 w-full pl-5 pt-5">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className=" py-10 pl-5">
            <ul className="  font-medium cursor-pointer">
              {sideMenuData.map((item, i) => (
                <li
                  className={` flex gap-x-4  rounded-md hover:bg-menuHover hover:text-primary p-4 ${
                    selectedSideMenu === item.name
                      ? "text-primary bg-menuHover"
                      : ""
                  } `}
                  key={"Side menu" + i}
                  onClick={()=>{setSelectedSideMenu(item.name)}}
                >
                  <img src={item.icon} alt={item.name} /> {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="  pl-5">
            <h2 className=" text-fadetext ">Recent Projects</h2>
            <ul className="  font-medium cursor-pointer mt-2">
              {recentProjects.map((item, i) => (
                <li
                  className=" flex items-center gap-x-4  rounded-md hover:bg-menuHover hover:text-primary p-4 group "
                  key={"Side menu" + i}
                >
                  <span className="shadow-sm  px-3 py-1 border group-hover:border-primary rounded-md ">
                    {" "}
                    {item[0]}{" "}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" col-span-10">
          <div className=" h-24 w-full bg-white shadow"></div>
          <div className=" w-full p-4 grid grid-cols-12 gap-5  ">
            <div className=" col-span-9 bg-white h-[790px] shadow-sm"></div>
            <div className=" col-span-3 bg-white  shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
