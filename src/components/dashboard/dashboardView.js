import { useState, useEffect } from "react";
import Project from "../dashboard/project";
import Overview from "../dashboard/overview";

export default function DashboardView({ setRoute, setSelectedProjectId }) {
  const [overviewData, setOverviewData] = useState([]);
  const [addProjectPopup, setAddProjectPopup] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [projectCreatedRefresh, setProjectCreatedRefresh] = useState(false);
  const [totalProjects, setTotalProjects] = useState(0);
  const [projectStatus, setProjectStatus] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage

      try {
        const res = await fetch(
          `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/projects?status=${projectStatus}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(token);

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch project data");
        }
        setProjectData(data.data);
        setTotalProjects(data.data.length);
        console.log(data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
      try {
        const res = await fetch(`https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/projects/overview`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(token);

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch project data");
        }

        setOverviewData(data.data);
        setTotalProjects(data.data.total_projects);
        console.log("overview", data.data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };

    fetchProjectData();
  }, [projectCreatedRefresh, projectStatus]);

  return (
    <div className="">
      {/* Left side: Project */}
      <div className=" lg:h-[calc(100vh-105px)] overflow-y-hidden  bg-white p-4 md:p-8 shadow-md rounded-md">
        <Project
          setRoute={setRoute}
          overviewData={overviewData}
          setOverviewData={setOverviewData}
          addProjectPopup={addProjectPopup}
          setAddProjectPopup={setAddProjectPopup}
          projectData={projectData}
          setProjectData={setProjectData}
          projectCreatedRefresh={projectCreatedRefresh}
          setProjectCreatedRefresh={setProjectCreatedRefresh}
          totalProjects={totalProjects}
          setTotalProjects={setTotalProjects}
          projectStatus={projectStatus}
          setProjectStatus={setProjectStatus}
          setSelectedProjectId={setSelectedProjectId}
        />
      </div>

      {/* Right side: Overview */}
      {/* <div className="lg:col-span-3 h-[calc(100vh-120px)] overflow-y-auto">
        <Overview
          overviewData={overviewData}
          setOverviewData={setOverviewData}
        />
      </div> */}
    </div>
  );
}
