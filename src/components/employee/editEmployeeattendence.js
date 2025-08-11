"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function EditAttendanceModal({
  open,
  setOpen,
  editEmployeeData,
  setAttendanceRefresh,
  attendanceRefresh,
}) {
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("present");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (editEmployeeData) {
      setSalary(editEmployeeData.salary_for_task?.toString() || "");
      setStatus(editEmployeeData.status || "present");
    }
  }, [editEmployeeData]);
  console.log(editEmployeeData);
  const updateEmployeeAttendance = async () => {
    try {
      const res = await fetch(
        `https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/tasks/${editEmployeeData.task_id}/attendance/${editEmployeeData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            employee_id: editEmployeeData.employee_id,
            salary_for_task: Number(salary),
            status: status,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update attendance");
      } else {
        setAttendanceRefresh(!attendanceRefresh);
        setOpen(false);
      }

      const data = await res.json();
      console.log("Updated attendance:", data);
      return data;
    } catch (err) {
      console.error("Update failed:", err);
      throw err;
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white shadow-xl p-6 space-y-4">
            <DialogTitle className="text-lg font-semibold text-gray-800">
              Edit Attendance
            </DialogTitle>

            <div className="space-y-3 text-left">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={editEmployeeData?.name || ""}
                  disabled
                  className="w-full border p-2 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  value={editEmployeeData?.phone || ""}
                  disabled
                  className="w-full border p-2 rounded-md bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Salary</label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full border p-2 rounded-md "
                />
              </div>

              <div>
                <label className="text-sm font-medium">Attendance Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border p-2 rounded-md"
                >
                  <option value="present">Present</option>
                  <option value="half_day">Half Day</option>
                  <option value="absent">Absent</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={updateEmployeeAttendance}
                disabled={isSubmitting}
                className={`px-4 py-2 text-sm rounded-md text-white ${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Updating..." : "Update"}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
