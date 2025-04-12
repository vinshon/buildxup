import Project from "../components/dashboard/project";
import ProjectOverview from "../components/dashboard/projectOverview";
import TodayOverview from "../components/dashboard/todayOverview";

export default function Dashboard() {
  return (
    <div className=" ">
      <div className=" grid grid-cols-12 gap-4 h-[86vh] ">
        <div className=" col-span-9 bg-white p-8 shadow-md rounded-md ">
          <Project />
        </div>
        <div className=" col-span-3 bg-white"></div>
      </div>
    </div>
  );
}
