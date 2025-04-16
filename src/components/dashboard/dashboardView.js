import React from "react";
import Project from "../dashboard/project";
import Overview from "../dashboard/overview";

export default function DashboardView({setRoute}) {
  return (
    <div className=" grid lg:grid-cols-12 lg:gap-4 h-[86vh] ">
      <Project setRoute={setRoute} />
      <Overview />
    </div>
  );
}
