import { useState } from "react";
import DashboardView from "../components/dashboard/dashboardView";
// import ProjectView from "./dashboard/dailyTask"

export default function Dashboard() {
  const [route, setRoute] = useState("dashboard");
    const [selectedProjectId, setSelectedProjectId] = useState(null);


  return (
    <DashboardView setRoute={setRoute}  setSelectedProjectId={setSelectedProjectId} />
  )
}
