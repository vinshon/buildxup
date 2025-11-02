import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "../../components/sidebar/sideBarMenu";
import DashboardProvider from "../../context/DashboardContext";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DashboardProvider>
      <div className="bg-bgfadeColor min-h-screen overflow-hidden">
        <div className="w-full flex h-screen">
          {/* Sidebar (fixed height and no scroll) */}
          <div className="lg:w-60 lg:flex hidden overflow-hidden">
            <SideBarMenu />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header (fixed height) */}
            <div className="h-[72px] w-full bg-white shrink-0 flex items-center justify-end">
              <div className="flex items-center  lg:justify-end w-full gap-3 px-5 py-4 ">
                <div className=" hidden lg:flex items-center gap-2 ">
                  <img
                    src="/dashboard/icon/profile.png"
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="font-bold">Unknown</span>
                </div>
                <div className=" lg:hidden">
                {/* Navigation Toggle (Mobile) */}
                <div className=" py-6 text-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="py-2 px-2 mr-10 inline-flex justify-center items-center gap-x-2 bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>

                {/* Sidebar */}
                <div
                  className={`text-black fixed top-0 left-0 z-50 w-full h-full transform transition-transform duration-300 bg-white dark:border-neutral-700 lg:translate-x-0 lg:static lg:block ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <header className="p-4 flex justify-between items-center">
                      <a
                        href="#"
                        className="font-semibold text-xl text-black "
                      >
                        Brand
                      </a>
                      {/* Close Button (Mobile) */}
                      <div className="lg:hidden">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="flex justify-center items-center hover:text-gray-600 "
                        >
                          <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" />
                          </svg>
                        </button>
                      </div>
                    </header>

                    {/* Body */}
                    <nav className="flex-1 overflow-y-auto px-2 pb-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-100 text-sm "
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <path d="M9 22V12h6v10" />
                            </svg>
                            Dashboard
                          </a>
                        </li>

                      </ul>
                    </nav>
                  </div>
                </div>

                {/* Overlay for mobile */}
                {isOpen && (
                  <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
                  ></div>
                )}
              </div>
              </div>
              
            </div>

            {/* Scrollable Main Area (below header) */}
            <div className="flex-1 overflow-y-auto w-full lg:p-4 p-2">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
