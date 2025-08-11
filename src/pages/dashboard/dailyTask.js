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
          `http://localhost:4000/tasks?project_id=${projectId}`,
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
        console.log("task data",data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
      try {
        const res = await fetch(`http://localhost:4000/projects/${projectId}`, {
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
        setProjectDetails(data.data);
        console.log(data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };

    fetchProjectData();
  }, [taskRefresh , projectId]);

  return (
    <div className=" grid grid-cols-12 gap-4 min-h-[86vh] pt-4 ">
      <div className=" col-span-9 px-6 py-6 bg-white rounded-md  ">
        <div className=" ">
          {/* <div className=" py-4  ">
            <p className=" text-fadetext text-sm flex  items-center gap-1">
              Dashboard{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 "
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Ananya's Garden
            </p>
          </div> */}
          <div className="">
            <div className=" flex items-center justify-between ">
              <h2 className=" capitalize text-lg font-medium">
                {projectDetails?.project_name || "N/A"}
              </h2>
              <div className=" flex gap-4 items-center">
                {/* <div className="  p-1.5 border-black/10 border rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </div> */}

                <button
                  onClick={() => setOpen(true)}
                  className=" flex items-center gap-1 rounded-md  border border-primary hover:bg-primary text-primary hover:text-white px-1.5 py-1.5 font-medium"
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
        </div>
        <div className=" w-full h-[1px] bg-black/10 my-5 "></div>
        {taskData.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5 py-4">
            {taskData.map((card, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white shadow-lg rounded-md"
                onClick={() => {
                  navigate(`/dashboard/taskAttendencePortal?id=${card.id}`);
                }}
              >
                <img
                  src={"/dashboard/building.jpg"}
                  alt={"Project Building"}
                  className="h-32 object-cover w-full rounded-t-md shadow-sm"
                />
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
         <div className="flex items-center justify-center h-96">
          <div className="flex flex-col items-center text-gray-400 text-center">
            <img src="/Empty-Data.png" alt="Empty" className="w-12 mb-2 mt-2" />
            <p>Add New Task By Clicking Above Button</p>
          </div>
        </div>
        )}
      </div>
      <div className=" col-span-3 ">
        <div className=" bg-white  shadow rounded-md h-full p-6 space-y-6">
          <img
            src="/dashboard/building.jpg"
            alt="building"
            className=" max-h-52  w-full rounded-lg shadow-md"
          />
          <div className=" px-2 ">
            <div className=" flex justify-between items-center ">
              <h3 className=" pl-1 font-medium capitalize">
                {projectDetails?.project_name || "N/A"}
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-fadetext hover:text-black cursor-pointer"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </div>
            </div>
            <p className=" flex items-center gap-1 mt-2 text-sm text-fadetext">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {projectDetails?.project_location || "N/A"}
            </p>
          </div>
          <div className="px-2">
            {/* <h3 className="font-medium py-2 border-b">
              {projectDetails?.project_name || "N/A"}
            </h3> */}
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

          <div className=" px-2 ">
            <div>
              <h3 className=" font-medium">Description</h3>
            </div>
            <div className=" flex justify-between items-center ">
              <p className=" mt-2  flex items-center gap-1 text-sm text-fadetext">
                Add a description to this Project.
              </p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" size-5 text-fadetext hover:text-black cursor-pointer"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <button className=" w-full bg-primary rounded-md text-white border border-primary py-2 font-medium items-center justify-center flex gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              Download Report
            </button>
          </div>
        </div>
      </div>
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
