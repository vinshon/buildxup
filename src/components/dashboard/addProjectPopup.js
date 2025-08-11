"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";

export default function Example({
  open,
  setOpen,
  projectCreatedRefresh,
  setProjectCreatedRefresh,
}) {
  const [previewSrc, setPreviewSrc] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [location, setLocation] = useState("");
  const [validationAmount, setValidationAmount] = useState("");
  const [spentAmount, setSpentAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectStatus, setprojectStatus] = useState("in_progress");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewSrc(imageUrl);
      setImageFile(file);
      return () => URL.revokeObjectURL(imageUrl);
    }
  };

  useEffect(() => {
    if (open) {
      setImageFile(null);
      setProjectName("");
      setLocation("");
      setValidationAmount("");
      setSpentAmount("");
      setStartDate("");
      setEndDate("");
      setPreviewSrc("");
    }
  }, [open]);

  const handleSubmit = async () => {
    console.log(startDate, endDate)
    const formData = new FormData();
    formData.append("project_name", projectName);
    formData.append("project_location", location);
    formData.append("project_vaildation_amount", validationAmount);
    formData.append("project_spent_amount", spentAmount);
    formData.append("project_start_date", startDate);
    formData.append("project_end_date", endDate);
    formData.append("project_status", projectStatus);
    if (imageFile) {
      formData.append("project_image", [imageFile]);
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://xq64uxw8qb.execute-api.us-east-1.amazonaws.com/Stage/projects", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create project.");
      }
      setProjectCreatedRefresh(!projectCreatedRefresh);

      // Optional: Success feedback
      console.log("Project created:", data);
      setOpen(false);
    } catch (err) {
      console.error(err.message);
      alert(err.message); // Or use toast
    }
  };
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
          >
            <div className="bg-gray-50 px-8 py-4 flex justify-between items-center pb-6 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-xl font-semibold text-gray-900"
                  >
                    Project Information
                  </DialogTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div
                onClick={() => setOpen(false)}
                className="bg-gray-100 rounded-full p-2 cursor-pointer hover:text-fadetext"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 object-contain"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 border-t sm:flex sm:flex-row-reverse">
              <div className="w-full">
                <div className="px-8 py-6">
                  <label className="font-medium">Project Profile Image</label>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-4">
                    <div className="flex justify-center sm:justify-start">
                      <img
                        id="preview_img"
                        className={`h-24 w-36 object-cover rounded-md ${
                          previewSrc ? "visible" : "invisible"
                        }`}
                        src={previewSrc}
                        alt="Preview"
                      />
                    </div>

                    <label className="block w-full sm:w-auto">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-primary
        hover:file:bg-blue-100"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8 mt-5 lg:w-full w-[90%]">
                    <div className="">
                      <label className="block ml-1">Project Name</label>
                      <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="p-3 hover:border-black border bg-white border-gray-300 rounded-md mt-3 w-full focus:outline-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block ml-1">Project Location</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="p-3 hover:border-black border bg-white border-gray-300 rounded-md mt-3 w-full focus:outline-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block ml-1">
                        Project Validation Amount
                      </label>
                      <input
                        type="text"
                        value={validationAmount}
                        onChange={(e) => setValidationAmount(e.target.value)}
                        className="p-3 hover:border-black border bg-white border-gray-300 rounded-md mt-3 w-full focus:outline-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block ml-1">Project Spent Amount</label>
                      <input
                        type="text"
                        value={spentAmount}
                        onChange={(e) => setSpentAmount(e.target.value)}
                        className="p-3 hover:border-black border bg-white border-gray-300 rounded-md mt-3 w-full focus:outline-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block ml-1 mb-3 ">
                        Project Start Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="p-3 hover:border-black border bg-white border-gray-300 rounded-md mt-3 w-full focus:outline-blue-500"
                      />
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          className=" bg-white border rounded-md mt-3 w-full"
                          onChange={(newValue) => setStartDate(newValue)}
                        />
                      </LocalizationProvider> */}
                    </div>

                    <div>
                      <label className="block ml-1 mb-3 ">
                        Project End Date
                      </label>
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          slotProps={{
                            textField: {
                              variant: "outlined",
                              fullWidth: true,
                              className:
                                "bg-white rounded-md mt-3 focus:outline-none focus:ring-0 focus:border-transparent hover:border-transparent ",
                              InputProps: {
                                disableUnderline: true,
                              },
                            },
                          }}
                          onChange={(newValue) => setEndDate(newValue)}
                        />
                      </LocalizationProvider> */}
                       <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="p-3 hover:border-black border bg-white border-gray-300 rounded-md mt-3 w-full focus:outline-blue-500"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block ml-1 mb-2">Project Status</label>
                      <div className="flex items-center space-x-6 pl-2 mt-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="status"
                            value="in_progress"
                            checked={projectStatus === "in_progress"}
                            onChange={(e) => setprojectStatus(e.target.value)}
                            className="accent-blue-600"
                          />
                          <span>In Progress</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="status"
                            value="pending"
                            checked={projectStatus === "pending"}
                            onChange={(e) => setprojectStatus(e.target.value)}
                            className="accent-blue-600"
                          />
                          <span>Pending</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="status"
                            value="closed"
                            checked={projectStatus === "closed"}
                            onChange={(e) => setprojectStatus(e.target.value)}
                            className="accent-blue-600"
                          />
                          <span>Closed</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t py-6 px-8 space-x-4 flex items-center justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="border border-primary bg-white px-4 py-2 rounded-md font-medium text-primary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-primary border border-primary px-4 py-2 rounded-md font-medium text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
