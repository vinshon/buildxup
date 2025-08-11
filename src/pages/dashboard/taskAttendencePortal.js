import { useState, useEffect } from "react";
import AddEmployeeModal from "../../components/employee/addNewEmployee";
import { useSearchParams } from "react-router-dom";
import AllEmployeesPopup from "../../components/employee/allEmployee";
import ConfirmationDialog from "../../components/employee/confirmationPopup";
import EditEmployeeData from "../../components/employee/editEmployeeattendence";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Miscellaneous from "../../components/employee/miscellaneous";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Notes from "../../components/employee/notes";
import ProjectImages from "../../components/employee/projectImage";

export default function ChildProjectInfo() {
  const [open, setOpen] = useState(false);
  const [openAllEmployees, setOpenAllEmployees] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);
  const [attendanceRefresh, setAttendanceRefresh] = useState(false);
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("id");
  const token = localStorage.getItem("token");
  const [createEmployeeData, setCreateEmployeeData] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [openEditEmployeePopup, setOpenEditEmployeePopup] = useState(false);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await fetch(
          `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${taskId}/attendance`,
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
        setAttendanceData(data.data);
        console.log(data); // Or set state here
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };

    fetchProjectData();
  }, [attendanceRefresh, taskId, token]);

  const attendanceCreate = async (payload) => {
    console.log("paoload", payload);
    try {
      const res = await fetch(
        `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${taskId}/attendance/bulk`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit attendance data");
      }
      setAttendanceRefresh(!attendanceRefresh);
      setAttendanceData(data.data);
      // Assuming API returns updated attendance
      console.log(data);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  const deleteEmployee = (employeData) => {
    console.log("hi", employeData);
    setSelectedEmp(employeData);
    setConfirmOpen(true);
  };
  const editEmployee = (employeData) => {
    console.log("hi", employeData);
    setSelectedEmp(employeData);
    setOpenEditEmployeePopup(true);
  };

  const deleteEmployeeAttendance = async () => {
    if (!selectedEmp?.task_id || !selectedEmp?.id) {
      console.error("Missing task_id or attendance_id");
      return;
    }

    try {
      const res = await fetch(
        `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${selectedEmp.task_id}/attendance/${selectedEmp.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      setAttendanceRefresh(!attendanceRefresh);

      console.log("Deleted attendance successfully");
    } catch (err) {
      console.error("Error deleting attendance:", err);
    }
  };

  return (
    <div className="">
      <div className=" ">
        {/* Left Section */}
        <div className=" flex flex-col gap-4">
          {/* Employee Attendance - 80% height */}
          <div className="bg-white rounded-xl shadow flex flex-col ">
            <div className="flex flex-wrap  lg:gap-0 gap-5 justify-between items-center py-4 px-6 border-b ">
              <h2 className=" lg:text-lg font-medium flex flex-wrap gap-2   ">
                Employee Attendance{" "}
                <span className="text-sm text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                 {attendanceData.length|| 0} Employs
                </span>
              </h2>
              <div className="lg:space-x-2 gap-2 flex flex-wrap item-center justify-center lg:items-start lg:justify-normal lg:gap-4 text-sm lg:text-base">
                <button
                  onClick={() => setOpen(true)}
                  className=" w-44 border border-primary flex items-center justify-center gap-2 text-primary px-3 py-1.5 rounded-md hover:bg-primary hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  New Employee
                </button>
                <button
                  onClick={() => setOpenAllEmployees(true)}
                  className=" w-44  border border-primary flex items-center justify-center gap-2 text-white px-3 py-1.5 rounded-md hover:bg-darkBlue bg-primary"
                >
                  Select Employees
                </button>
              </div>
            </div>
            {attendanceData.length > 0 ? (
              <div className="lg:p-5 p-2 flex-1">
                <div className="border shadow rounded-lg overflow-hidden h-full">
                  <div className="overflow-x-auto">
                    <div className="min-w-[950px]">
                      {/* Header Table */}
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                          <tr className=" grid grid-cols-12 ">
                            <th className="col-span-2 pl-6 py-3 text-left whitespace-nowrap">
                              Name
                            </th>
                            <th className="col-span-2 py-3 text-left whitespace-nowrap">
                              Role
                            </th>
                            <th className="col-span-2 py-3 whitespace-nowrap">
                              Phone
                            </th>
                            <th className="col-span-2 py-3 whitespace-nowrap">
                              Advance
                            </th>
                            <th className="col-span-2 py-3 text-left whitespace-nowrap">
                              Salary
                            </th>
                            <th className="col-span-1 py-3 whitespace-nowrap">
                              Status
                            </th>
                            <th className="col-span-1 py-3 whitespace-nowrap"></th>
                          </tr>
                        </thead>
                      </table>

                      {/* Scrollable Body Table */}
                      <div className=" h-[44vh]  overflow-y-auto">
                        <table className="w-full h-full text-sm text-left table-fixed ">
                          <tbody className="divide-y divide-gray-200 ">
                            {attendanceData.map((emp, index) => (
                              <tr
                                key={emp.employee_id}
                                className="grid grid-cols-12"
                              >
                                <td className=" col-span-2 pl-6  py-3 whitespace-nowrap">
                                  {emp.name}
                                </td>
                                <td className="col-span-2  py-3 whitespace-nowrap">
                                  {emp.role}
                                </td>
                                <td className="col-span-2  py-3 whitespace-nowrap">
                                  {emp.phone}
                                </td>
                                <td className="col-span-2  py-3 whitespace-nowrap">
                                  ₹ {emp.advance || 0}
                                </td>
                                <td className="col-span-2  py-3 whitespace-nowrap">
                                  ₹ {emp.salary_for_task}
                                </td>
                                <td className="col-span-1  py-3 whitespace-nowrap">
                                  <span
                                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                                      emp.status === "present"
                                        ? "bg-green-100 text-green-800"
                                        : emp.status === "half_day"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-red-100 text-red-800"
                                    }`}
                                  >
                                    {emp.status === "half_day"
                                      ? "Half Day"
                                      : emp.status.charAt(0).toUpperCase() +
                                        emp.status.slice(1)}
                                  </span>
                                </td>
                                <td className=" py-3  overflow-visible">
                                  {/* <button className="text-black hover:text-gray-800">
                                    <PencilSquareIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                  </button> */}

                                  <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                  >
                                    <MenuButton className="inline-flex items-center justify-center rounded-md p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                      <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                                    </MenuButton>

                                    <MenuItems
                                      className={`absolute 
                                       ${
                                         [
                                           attendanceData.length - 1,
                                           attendanceData.length - 2,
                                         ].includes(index) ||attendanceData.length - 1 !== 1||2  && "bottom-10"
                                       }
                                      right-0  z-20 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                    >
                                      <div className="py-1">
                                        <MenuItem>
                                          {({ active }) => (
                                            <button
                                              onClick={() => editEmployee(emp)}
                                              className={` flex items-center w-full px-4 py-2 text-sm text-primary hover:bg-gray-100`}
                                            >
                                              <PencilSquareIcon className="w-4 h-4 mr-2" />
                                              Edit
                                            </button>
                                          )}
                                        </MenuItem>
                                        <MenuItem>
                                          {({ active }) => (
                                            <button
                                              onClick={() =>
                                                deleteEmployee(emp)
                                              }
                                              className={` flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100  `}
                                            >
                                              <TrashIcon className="w-4 h-4 mr-2" />
                                              Delete
                                            </button>
                                          )}
                                        </MenuItem>
                                      </div>
                                    </MenuItems>
                                  </Menu>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" flex items-center justify-center h-96">
                <div className="flex flex-col items-center text-gray-400 text-center ">
                  <img
                    src="/Empty-Data.png"
                    alt="Empty"
                    className="w-28 mb-2"
                  />
                  <p>Attendance details have not been entered yet.</p>
                </div>
              </div>
            )}
          </div>

          {/* Project Images - 20% height */}
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 mt-5 gap-4">
          {/* Miscellaneous Info - 80% */}
          {/* <div className="bg-white rounded-xl shadow flex flex-col">
            <div className="flex justify-between items-center py-4 px-6 border-b">
              <h2 className="text-lg font-medium">Miscellaneous Info</h2>
              <button className="border border-primary flex items-center gap-2 text-primary px-3 py-1.5 rounded-md hover:bg-primary hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add New
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center text-gray-400 text-center">
                <img src="/Empty-Data.png" alt="Empty" className="w-12 mb-2" />
                <p>Miscellaneous info missing. Please update.</p>
              </div>
            </div>
          </div> */}

          <Miscellaneous taskId={taskId} />
          <Notes taskId={taskId}  />
          {/* Notes + Download - 20% */}
          {/* <div className="flex flex-col">
            <div className="bg-white rounded-xl shadow flex-1 flex flex-col">
              <div className="flex justify-between items-center py-3 px-6 border-b">
                <h2 className="text-lg font-medium">Notes</h2>
                <button className="border border-primary flex items-center gap-2 text-primary px-3 py-1 rounded-md hover:bg-primary hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center text-gray-400 text-center">
                <p>Add a description to this Project.</p>
              </div>
            </div>

          </div> */}
        </div>
                  <ProjectImages taskId={taskId}/>

        {/* <div className="bg-white rounded-xl mt-5 shadow flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center py-3 px-6 border-b">
            <h2 className="text-lg font-medium">Project Images</h2>
            <button className="border border-primary flex items-center gap-2 text-primary px-3 py-1 rounded-md hover:bg-primary hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add New
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center text-gray-400 text-center">
              <img src="/Empty-Data.png" alt="Empty" className="w-12 mb-2" />
              <p>Project Images missing. Please update.</p>
            </div>
          </div>
        </div> */}
      </div>
      <AddEmployeeModal
        open={open}
        setOpen={setOpen}
        taskId={taskId}
        setAttendanceRefresh={setAttendanceRefresh}
        attendanceRefresh={attendanceRefresh}
        attendanceCreate={attendanceCreate}
        setCreateEmployeeData={setCreateEmployeeData}
        createEmployeeData={createEmployeeData}
      />
      <AllEmployeesPopup
        open={openAllEmployees}
        setOpen={setOpenAllEmployees}
        attendanceCreate={attendanceCreate}
      />
      <ConfirmationDialog
        open={confirmOpen}
        setOpen={setConfirmOpen}
        title="Delete Attendance"
        message={`Are you sure you want to remove attendance for ${selectedEmp?.name}?`}
        onConfirm={() => deleteEmployeeAttendance()}
        confirmLabel="Delete"
        cancelLabel="Cancel"
      />

      <EditEmployeeData
        open={openEditEmployeePopup}
        setOpen={setOpenEditEmployeePopup}
        isEdit={true}
        editEmployeeData={selectedEmp}
        setAttendanceRefresh={setAttendanceRefresh}
        attendanceRefresh={attendanceRefresh}
      />
    </div>
  );
}
