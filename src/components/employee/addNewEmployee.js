import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function AddEmployeeModal({
  open,
  setOpen,
  taskId,
  setAttendanceRefresh,
  attendanceRefresh,
  attendanceCreate,
  setCreateEmployeeData,
  createEmployeeData,
}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    mobile: "",
    salary: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(3);
  const token = localStorage.getItem("token"); // Get token from localStorage

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.salary.trim()) newErrors.salary = "Salary is required";
    else if (isNaN(formData.salary))
      newErrors.salary = "Salary must be a number";

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit number";
    }

    if (formData.aadhar && !/^\d{12}$/.test(formData.aadhar)) {
      newErrors.aadhar = "Enter a valid 12-digit Aadhar number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    const payload = {
      name: formData.name,
      role: formData.role,
      phone: formData.mobile,
      aadhar_number: formData.aadhar,
      basic_salary: Number(formData.salary),
    };

    try {
      const response = await fetch("http://localhost:4000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit employee data");

      const data = await response.json();
      const newEmployee = data.data;

      console.log("Submitted:", newEmployee);

      setEmployeeCount((prev) => prev + 1);
      setFormData({ name: "", role: "", mobile: "", salary: "", aadhar: "" });
      setOpen(false);
      setAttendanceRefresh(!attendanceRefresh);
      setCreateEmployeeData(newEmployee);

      // 💡 Immediately send to attendance
      const attendancePayload = {
        attendances: [
          {
            employee_id: newEmployee.id,
            salary_for_task: newEmployee.basic_salary,
            status: "present",
          },
        ],
      };
      attendanceCreate(attendancePayload);
    } catch (err) {
      console.error(err);
      alert("Error submitting employee. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-xl transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <div>
                <DialogTitle className="text-lg font-semibold text-gray-900">
                  New Employee
                </DialogTitle>
                <p className="text-sm text-gray-500">
                  Please fill in the details of the new employee.
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

            <div className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Employee Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.role && (
                    <p className="text-sm text-red-500 mt-1">{errors.role}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mobile Number
                  </label>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.mobile && (
                    <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Salary <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.salary && (
                    <p className="text-sm text-red-500 mt-1">{errors.salary}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Aadhar Card No
                  </label>
                  <input
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.aadhar && (
                    <p className="text-sm text-red-500 mt-1">{errors.aadhar}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t flex justify-end items-center">
              {/* <p className="text-sm text-gray-500">
                {employeeCount} Employee{employeeCount !== 1 && "'s"} Added
              </p> */}
              <div className="space-x-2">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-md font-medium text-white ${
                    isSubmitting
                      ? "bg-blue-300 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
