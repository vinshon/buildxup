import { useState, useEffect } from "react";
import AddNewDailyReport from "../../components/dashboard/projectView/addNewDailyReportPopup";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const reportCards = [
//   {
//     title: "Light Work",
//     date: "March 12, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Heavy Duty",
//     date: "March 13, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Inspection Day",
//     date: "March 14, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Light Work",
//     date: "March 12, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Heavy Duty",
//     date: "March 13, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Inspection Day",
//     date: "March 14, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Light Work",
//     date: "March 12, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Heavy Duty",
//     date: "March 13, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Inspection Day",
//     date: "March 14, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Light Work",
//     date: "March 12, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Heavy Duty",
//     date: "March 13, 2023",
//     image: "/dashboard/building.jpg",
//   },
//   {
//     title: "Inspection Day",
//     date: "March 14, 2023",
//     image: "/dashboard/building.jpg",
//   },
// ];
export default function Daily_task() {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");
  const [taskData, setTaskData] = useState([]);
  const [taskRefresh, setTaskRefresh] = useState(false);
  const [projectDetails, setProjectDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage

      try {
        const res = await fetch(
          `https://api-stage.buildxup.com/tasks?project_id=${projectId}`,
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
        setTaskData(data.data);
        console.log("task data", data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
      try {
        const res = await fetch(
          `https://api-stage.buildxup.com/projects/${projectId}`,
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
        setProjectDetails(data.data);
        console.log(data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };

    fetchProjectData();
  }, [taskRefresh, projectId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[86vh] pt-4">
      {/* Left Side */}
      <div className="col-span-1 lg:col-span-9 px-4 sm:px-6 py-6 bg-white rounded-md">
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="capitalize text-lg font-medium">
              {projectDetails?.project_name || "N/A"}
            </h2>
            <div className="flex gap-3 items-center w-full sm:w-auto">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-1 rounded-md border border-primary hover:bg-primary text-primary hover:text-white px-3 py-2 font-medium text-sm w-full sm:w-auto justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                Add New
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/10 my-5"></div>

        {taskData.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 py-4">
            {taskData.map((card, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white shadow-lg rounded-md"
                onClick={() => {
                  navigate(`/dashboard/taskAttendencePortal?id=${card.id}`);
                }}
              >
                <div className="p-2">
                  <img
                    src={
                      card?.images[0]?.image_url || "/dashboard/building.jpg"
                    }
                    alt="Project Building"
                    className="h-32 object-cover w-full rounded-t-md shadow-sm"
                  />
                </div>
                <div className="space-y-1 mt-2 text-sm p-2">
                  <p className="font-medium">{card.task_name}</p>
                  <p className="text-fadetext">
                    {new Date(card.due_date)
                      .toLocaleDateString("en-GB")
                      .replaceAll("/", "-")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 sm:h-96">
            <div className="flex flex-col items-center text-gray-400 text-center">
              <img
                src="/Empty-Data.png"
                alt="Empty"
                className="w-12 mb-2 mt-2"
              />
              <p>Add New Task By Clicking Above Button</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="col-span-1 lg:col-span-3">
        <div className="bg-white shadow rounded-md h-full p-6 space-y-6">
          <img
            src="/dashboard/building.jpg"
            alt="building"
            className="max-h-52 w-full rounded-lg shadow-md"
          />
          <div className="px-2">
            <div className="flex justify-between items-center">
              <h3 className="pl-1 font-medium capitalize">
                {projectDetails?.project_name || "N/A"}
              </h3>
            </div>
            <p className="flex items-center gap-1 mt-2 text-sm text-fadetext">
              📍 {projectDetails?.project_location || "N/A"}
            </p>
          </div>

          <div className="px-2">
            <div className="text-fadetext flex flex-col text-sm">
              <div className="flex justify-between items-center py-2 border-b">
                <p>Project Start Date</p>
                <p>
                  {projectDetails?.project_start_date
                    ? new Date(projectDetails.project_start_date)
                        .toLocaleDateString("en-GB")
                        .replaceAll("/", "-")
                    : "N/A"}
                </p>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <p>Project End Date</p>
                <p>
                  {projectDetails?.project_end_date
                    ? new Date(projectDetails.project_end_date)
                        .toLocaleDateString("en-GB")
                        .replaceAll("/", "-")
                    : "N/A"}
                </p>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <p>Project Status</p>
                <p className="capitalize">
                  {projectDetails?.project_status?.replace("_", " ") || "N/A"}
                </p>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <p>Validation Amount</p>
                <p>₹{projectDetails?.project_vaildation_amount || "0"}</p>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <p>Spent Amount</p>
                <p>₹{projectDetails?.project_spent_amount || "0"}</p>
              </div>
            </div>
          </div>

          <div className="px-2">
            <h3 className="font-medium">Description</h3>
            <p className="mt-2 text-sm text-fadetext">
              Add a description to this Project.
            </p>
          </div>

          <div>
            <button className="w-full bg-primary rounded-md text-white border border-primary py-2 font-medium items-center justify-center flex gap-1">
              ⬇ Download Report
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AddNewDailyReport
        open={open}
        setOpen={setOpen}
        projectId={projectId}
        setTaskRefresh={setTaskRefresh}
        taskRefresh={taskRefresh}
      />
    </div>
  );
}
