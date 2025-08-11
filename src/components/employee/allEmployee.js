"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function EmployeeListModal({ open, setOpen, attendanceCreate }) {
  const [employees, setEmployees] = useState([]);
  const [attendances, setAttendances] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("http://localhost:4000/employees", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setEmployees(data.data || []);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };
    if (open) fetchEmployees();
  }, [open, token]);

  const handleCheckboxChange = (emp) => {
    setAttendances((prev) => {
      const exists = prev.find((a) => a.employee_id === emp.id);
      if (exists) {
        return prev.filter((a) => a.employee_id !== emp.id);
      } else {
        return [
          ...prev,
          {
            employee_id: emp.id,
            salary_for_task: emp.basic_salary,
            status: "present",
          },
        ];
      }
    });
  };

  const handleStatusChange = (id, value) => {
    setAttendances((prev) =>
      prev.map((a) => (a.employee_id === id ? { ...a, status: value } : a))
    );
  };

  const isSelected = (id) => attendances.some((a) => a.employee_id === id);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-6xl transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <div>
                <DialogTitle className="text-lg font-semibold text-gray-900">
                  Employee List
                </DialogTitle>
                <p className="text-sm text-gray-500">
                  Select the employee and mark their attendance.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 py-5">
              <input
                type="text"
                disabled
                placeholder="Search Employee"
                title="Coming Soon.."
                className="mb-4 w-full border p-2 rounded-md bg-gray-100 disabled:cursor-not-allowed"
              />
              <div className="overflow-x-auto">
                <div className="max-h-[50vh] overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 whitespace-nowrap"></th>
                        <th className="text-left px-4 py-2 whitespace-nowrap">
                          Name
                        </th>
                        <th className="text-left px-4 py-2 whitespace-nowrap">
                          Role
                        </th>
                        <th className="text-left px-4 py-2 whitespace-nowrap">
                          Phone
                        </th>
                        <th className="text-left px-4 py-2 whitespace-nowrap">
                          Aadhar No
                        </th>
                        <th className="text-left px-4 py-2 whitespace-nowrap">
                          Salary
                        </th>
                        <th className="text-left px-4 py-2 whitespace-nowrap">
                          Attendance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {employees.map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2">
                            <input
                              type="checkbox"
                              checked={isSelected(emp.id)}
                              onChange={() => handleCheckboxChange(emp)}
                            />
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            {emp.name}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            {emp.role}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            {emp.phone}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            {emp.aadhar_number}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            ₹ {emp.basic_salary.toLocaleString()}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <select
                              value={
                                attendances.find(
                                  (a) => a.employee_id === emp.id
                                )?.status || ""
                              }
                              onChange={(e) =>
                                handleStatusChange(emp.id, e.target.value)
                              }
                              className="border rounded-md p-1 text-sm"
                            >
                              <option value="">Select</option>
                              <option value="present">Present</option>
                              <option value="half_day">Half Day</option>
                              <option value="absent">Absent</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm text-gray-500">
                {attendances.length} Employee
                {attendances.length !== 1 ? "'s" : ""} Selected
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    console.log(
                      "Final payload:",
                      JSON.stringify({ attendances }, null, 2)
                    );
                    attendanceCreate({ attendances: attendances });
                    setOpen(false);
                  }}
                  className="px-4 py-2 border border-blue-600 text-white rounded-md font-medium bg-primary hover:bg-darkBlue"
                >
                  Submit
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
