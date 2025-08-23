import React from "react";

export default function Overview({ overviewData, setOverviewData }) {
  // Fallback to prevent errors if overviewData is not ready
  if (
    !overviewData ||
    Array.isArray(overviewData) ||
    !overviewData.status_counts ||
    typeof overviewData.total_projects !== "number"
  ) {
    return (
      <div className="col-span-3 h-full bg-white flex items-center justify-center text-gray-400">
        Loading overview...
      </div>
    );
  }

  
  const {
    status_counts,
    total_projects,
    total_spent_amount,
    total_validation_amount,
  } = overviewData;

  const getPercentage = (count) =>
    total_projects > 0 ? Math.round((count / total_projects) * 100) : 0;

  return (
    <div className="h-full w-full flex flex-col gap-4 overflow-y-auto pr-2">
      {/* Projects Overview */}
      <div className="bg-white rounded-md shadow-md">
        <h2 className="p-4 font-semibold border-b sticky top-0 bg-white z-10">
          Projects Overview
        </h2>
        <div className="p-4">
          {["in_progress", "pending", "closed"].map((status) => (
            <div className="p-2" key={status}>
              <div className="flex justify-between">
                <p className="capitalize">{status.replace("_", " ")}</p>
                <span>{status_counts[status]}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${getPercentage(status_counts[status])}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today Overview */}
      <div className="bg-white rounded-md shadow-md">
        <h2 className="p-4 font-semibold border-b sticky top-0 bg-white z-10">
          Today Overview
        </h2>
        <div className="py-4 px-6 flex flex-col gap-2">
          <div>
            <p className="font-medium">Project info</p>
            <div className="text-fadetext flex justify-between mt-1">
              <p>Working Project</p>
              <span>02</span>
            </div>
          </div>
          <div>
            <p className="font-medium">Attendance</p>
            <div className="text-fadetext flex justify-between mt-1">
              <p>Present Employees</p>
              <span>02</span>
            </div>
          </div>
          <div className="pb-2">
            <p className="font-medium">Expenses Info</p>
            <div className="flex gap-2 flex-col mt-1">
              <div className="text-fadetext flex justify-between">
                <p>Employees Salary</p>
                <span>02</span>
              </div>
              <div className="text-fadetext flex justify-between">
                <p>Material Amount</p>
                <span>02</span>
              </div>
              <div className="text-fadetext flex justify-between">
                <p>Others</p>
                <span>02</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="text-fadetext flex justify-between">
              <p>Total Spent Amount</p>
              <span>{total_spent_amount ?? "N/A"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* View Project Images Button */}
      <div>
        <button className="flex gap-2 items-center bg-primary hover:bg-white border border-primary justify-center w-full text-white hover:text-primary py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 object-contain"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          View Project Images
        </button>
      </div>
    </div>
  );
}
