"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function TaskModal({ open, setOpen, projectId , setTaskRefresh, taskRefresh }) {
  const [previewSrc, setPreviewSrc] = useState("");
  const [taskFile, setTaskFile] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const token = localStorage.getItem("token"); // Get token from localStorage

  useEffect(() => {
    // Set today's date on mount
    const today = new Date().toISOString().split("T")[0];
    setTaskDate(today);
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewSrc(imageUrl);
      setTaskFile(file);
      return () => URL.revokeObjectURL(imageUrl);
    }
  };

  const handleSubmit = async () => {
    if (!taskTitle || !taskDate || !taskFile) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("task_name", taskTitle);
    formData.append("due_date", taskDate);
    formData.append("images", taskFile);
    formData.append("task_description", "");
    formData.append("project_id", projectId);

    try {
      const response = await fetch("https://api-stage.buildxup.com/tasks", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to submit task");

      const data = await response.json();
      console.log("Task created:", data);
      setOpen(false);
      setTaskRefresh(!taskRefresh)
    } catch (error) {
      console.error("Error submitting task:", error);
      alert("Failed to submit task.");
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all">
            <div className="bg-white px-6 py-5 border-b flex justify-between items-center">
              <div>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  Task Information
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-1">
                  Fill out the information related to your task.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 py-5 space-y-6">
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task Image
                </label>
                <div className="flex items-center space-x-4">
                  <img
                    src={previewSrc}
                    alt="Preview"
                    className={`h-24 w-36 rounded-md object-cover border ${
                      previewSrc ? "block" : "hidden"
                    }`}
                  />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                </div>
              </div> */}

              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                {previewSrc ? (
                  <img
                    src={previewSrc}
                    alt="Preview"
                    className="mx-auto h-40 object-cover rounded"
                  />
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 16l4-4 4 4m5 0h4m-2-2v4m-6 4a9 9 0 110-18 9 9 0 010 18z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      <label className="cursor-pointer text-blue-600 hover:underline">
                        Upload a file
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Title
                  </label>
                  <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Date
                  </label>
                  <input
                    type="date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="border-t px-6 py-4 flex justify-end space-x-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
