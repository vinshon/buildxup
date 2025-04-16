import { useState } from "react";
import DashboardView from "../components/dashboard/dashboardView";
import ProjectView from "../components/dashboard/projectView/projectview"

export default function Dashboard() {
  const [route, setRoute] = useState("dashboard");

  // Route-to-component mapping
  const routes = {
    dashboard: <DashboardView setRoute={setRoute} />,
    projects: <ProjectView />,

  };
  return <div className=" ">{routes[route] || <div>Not Found</div>}</div>;
}
