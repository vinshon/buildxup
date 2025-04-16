import React from 'react'

export default function Overview() {
  return (
    <div className=" col-span-3  ">
          <div className=" bg-white  rounded-md  shadow-md">
            <h2 className=" p-4 font-semibold border-b ">Projects Overview</h2>
            <div className="p-4">
              <div className=" p-2">
                <div className=" flex justify-between  ">
                  <p className="">In progress </p>
                  <span>12</span>
                </div>
                <div className="w-full mx-auto bg-white rounded-full h-2 dark:bg-gray-100 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
              <div className=" p-2">
                <div className=" flex justify-between  ">
                  <p className="">Pending </p>
                  <span>02</span>
                </div>
                <div className="w-full mx-auto bg-white rounded-full h-2 dark:bg-gray-100 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[50%]"></div>
                </div>
              </div>
              <div className=" p-2">
                <div className=" flex justify-between  ">
                  <p className="">Closed</p>
                  <span>10</span>
                </div>
                <div className="w-full mx-auto bg-white rounded-full h-2 dark:bg-gray-100 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[35%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white  rounded-md  shadow-md mt-4">
            <h2 className=" p-4 font-semibold border-b ">Today Overview</h2>
            <div className="py-4 px-6 flex flex-col gap-2">
              <div className=" ">
                <div className=" ">
                  <p className=" font-medium ">Project info</p>
                </div>
                <div className=" text-fadetext flex justify-between mt-1  ">
                  <p className=" ">Working Project </p>
                  <span>02</span>
                </div>
              </div>
              <div className=" ">
                <div className=" ">
                  <p className=" font-medium ">Attendance</p>
                </div>
                <div className=" text-fadetext flex justify-between mt-1 ">
                  <p className=" ">Present Employees</p>
                  <span>02</span>
                </div>
              </div>
              <div className=" pb-2">
                <div className=" ">
                  <p className=" font-medium ">Expenses Info</p>
                </div>
                <div className=" flex gap-2 flex-col mt-1">
                  <div className=" text-fadetext flex justify-between  ">
                    <p className=" ">Employees Salary </p>
                    <span>02</span>
                  </div>
                  <div className=" text-fadetext flex justify-between  ">
                    <p className=" ">Material Amount</p>
                    <span>02</span>
                  </div>
                  <div className=" text-fadetext flex justify-between  ">
                    <p className=" ">Others</p>
                    <span>02</span>
                  </div>
                </div>
              </div>
              <div className="  border-t pt-4">
                <div className=" text-fadetext flex justify-between  ">
                  <p className=" ">Total Spent Amount </p>
                  <span>02</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <button className=" flex gap-2 items-center bg-primary hover:bg-white border border-primary justify-center w-full text-white hover:text-primary py-2 rounded-md ">
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
  )
}
