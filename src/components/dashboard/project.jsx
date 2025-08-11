import AddProjectPopup from "../../components/dashboard/addProjectPopup";
import { useNavigate } from "react-router-dom";

const status = [
  { item: "Pending", value: "pending" },
  { item: "Progress", value: "in_progress" },
  { item: "Closed", value: "closed" },
];

export default function Project({
  setRoute,
  addProjectPopup,
  setAddProjectPopup,
  projectData,
  projectCreatedRefresh,
  setProjectCreatedRefresh,
  totalProjects,
  projectStatus,
  setProjectStatus,
  overviewData,
  setOverviewData,
  setSelectedProjectId,
}) {
  const navigate = useNavigate();

  console.log(overviewData);
  return (
    <div className="w-full h-full flex flex-col">
      <div className=" ">
        <div className=" flex flex-wrap  justify-between ">
          <div>
            <div className=" flex items-center gap-2 font-medium">
              <h2 className=" text-lg ">Total Projects</h2>
              <span className=" px-4 py-1.5 bg-blue-50	rounded-3xl text-primary text-sm ">
                {totalProjects} Projects
              </span>
            </div>
            <p className=" text-fadetext mt-1 text-sm ">
              Keep track of vendor and their security ratings.
            </p>
          </div>
          <div className=" mt-4 lg:mt-0">
            <button
              onClick={() => setAddProjectPopup(true)}
              className=" flex gap-1 items-center bg-primary border border-primary hover:bg-white px-4 py-2 rounded-full font-medium text-white hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
              Add projects
            </button>
          </div>
        </div>
        <div>
          <div className=" flex flex-wrap  justify-between items-center mt-6 ">
            <div className=" flex flex-wrap items-center gap-2 lg:gap-4">
              <div>
                <p className=" flex gap-2">
                  <span className=" font-medium text-fadetext ">
                    Projects Validation Amount:
                  </span>{" "}
                  <b className=" font-semibold ">
                    ${overviewData.total_validation_amount}
                  </b>
                </p>
              </div>
              <p className=" lg:flex hidden h-10 w-[1px] bg-gray-200"></p>
              <div>
                <p className=" flex gap-2">
                  <span className=" font-medium text-fadetext ">
                    Spend Amount:
                  </span>{" "}
                  <b className=" font-semibold ">
                    ${overviewData.total_spent_amount}
                  </b>
                </p>
              </div>
            </div>
            <div className=" text-fadetext border rounded-md mt-4 lg:mt-0 shadow-sm ">
              <button
                onClick={() => {
                  setProjectStatus("");
                }}
                className={` px-4 py-1.5 hover:text-primary border-l ${
                  projectStatus === "" ? "text-primary font-medium" : ""
                } `}
              >
                All ({overviewData?.total_projects || 0})
              </button>
              {status.map((item, i) => (
                <button
                  onClick={() => {
                    setProjectStatus(item.value);
                  }}
                  className={` px-4 py-1.5 hover:text-primary border-l ${
                    projectStatus === item.value
                      ? "text-primary font-medium"
                      : ""
                  } `}
                >
                  {item.item}{" "}
                  <span>
                    ({overviewData?.status_counts?.[item.value] || 0})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className=" overflow-auto">
          {projectData.length ? (
            <div
              className="mt-6 px-2 py-4 overflow-y-auto scroll-smooth  lg:max-h-[calc(100vh_-_320px)]"

            >
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                {projectData.map((item, i) => (
                  <div
                    key={i}
                    className="border rounded-lg bg-white shadow-md lg:hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => navigate(`/dashboard/project?id=${item.id}`)}
                  >
                    <div className="relative">
                      <img
                        src="/dashboard/building.jpg"
                        alt=""
                        className="h-32 md:h-44 lg:h-32 object-cover w-full rounded-t-lg"
                      />
                      <span
                        className={`h-3 w-3 absolute right-3 top-3 rounded-full ${
                          item.project_status === "in_progress"
                            ? "bg-orange-500"
                            : item.project_status === "pending"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      ></span>
                    </div>
                    <div className="py-2 px-4 flex flex-col gap-2 font-medium text-base text-fadetext">
                      <div className="flex gap-2">
                        <img
                          alt=""
                          src="/dashboard/buildingIcon.png"
                          className="h-5 object-contain"
                        />
                        <p>{item.project_name}</p>
                      </div>
                      <div className="flex gap-2">
                        <img
                          alt=""
                          src="/dashboard/locationIcon.png"
                          className="h-5 object-contain"
                        />
                        <p>{item.project_location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="flex flex-1 items-center justify-center"
              style={{ height: "calc(100vh - 320px)" }}
            >
              <div className="flex flex-col items-center justify-center text-gray-400 text-center">
                <img src="/Empty-Data.png" alt="Empty" className=" max-w-32 mb-2" />
                <p className=" mt-5">Looks like you don’t have any projects here. Add one to begin tracking!</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <AddProjectPopup
        open={addProjectPopup}
        setOpen={setAddProjectPopup}
        projectCreatedRefresh={projectCreatedRefresh}
        setProjectCreatedRefresh={setProjectCreatedRefresh}
      />
    </div>
  );
}
