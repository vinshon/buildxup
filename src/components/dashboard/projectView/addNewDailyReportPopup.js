"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Example({ open, setOpen }) {
  const [previewSrc, setPreviewSrc] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewSrc(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    }
  };

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
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-gray-50 px-8 py-4 flex justify-between items-center pb-6 ">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center  sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-xl font-semibold text-gray-900"
                  >
                    Project Information
                  </DialogTitle>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setOpen(false)}
                className=" bg-gray-100 rounded-full p-2 cursor-pointer hover:text-fadetext"
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
            <div className="bg-gray-50   sm:flex sm:flex-row-reverse  border-t ">
              <div className=" w-full ">
                <div className=" px-8 py-6">
                  <label className=" font-medium ">Project Profile Image</label>

                  <div className="flex items-center space-x-6 mt-4">
                    <div className="">
                      <img
                        id="preview_img"
                        className={` h-24 w-36 object-cover rounded-md  ${
                          previewSrc ? "visible" : " invisible"
                        }`}
                        src={previewSrc}
                        alt="Current profile "
                      />
                    </div>

                    <label className="block">
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

                  <div className=" grid grid-cols-2 gap-y-6 gap-x-8 mt-5">
                    <div className=" ">
                      <label className="  block ml-1">Project Name</label>
                      <input
                        type="text"
                        className=" p-2 bg-white border rounded-md mt-3 w-full"
                      />
                    </div>
                    <div>
                      <label className=" block ml-1">Project Location</label>
                      <input
                        type="text"
                        className=" p-2 bg-white border rounded-md mt-3 w-full"
                      />
                    </div>
                    <div>
                      <label className=" block ml-1">
                        Project Validation Amount
                      </label>
                      <input
                        type="text"
                        className=" p-2 bg-white border rounded-md mt-3 w-full"
                      />
                    </div>
                    <div>
                      <label className=" block ml-1">
                        Project Spent Amount
                      </label>
                      <input
                        type="text"
                        className=" p-2 bg-white border rounded-md mt-3 w-full"
                      />
                    </div>
                    <div>
                      <label className=" block ml-1">Project Start Date</label>
                      <input className=" p-2 bg-white border rounded-md mt-3 w-full" />
                    </div>
                    <div>
                      <label className=" block ml-1">Project End Date</label>
                      <input className=" p-2 bg-white border rounded-md mt-3 w-full" />
                    </div>
                  </div>
                </div>

                <div className=" border-t py-6 px-8 space-x-4 flex items-center justify-end  ">
                  <button
                    onClick={() => setOpen(false)}
                    className=" border border-primary bg-white px-4 py-2 rounded-md font-medium  text-primary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-primary border border-primary  px-4 py-2 rounded-md font-medium text-white \"
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
