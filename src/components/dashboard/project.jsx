import React from "react";

const projectData = [
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
  {
    name: "Ananya's Garden 2",
    location: "Coimbatore",
    image: "/dashboard/building.jpg",
  },
];

export default function project() {
  return (
    <div className=" w-full h-full">
      <div className=" flex justify-between ">
        <div>
          <div className=" flex items-center gap-2 font-medium">
            <h2 className=" text-lg ">Total Projects</h2>
            <span className=" px-4 py-1.5 bg-blue-50	rounded-3xl text-primary text-sm ">
              24 Projects
            </span>
          </div>
          <p className=" text-fadetext mt-1 text-sm ">
            Keep track of vendor and their security ratings.
          </p>
        </div>
        <div>
          <button className=" flex gap-1 items-center bg-primary px-4 py-2 rounded-full font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            Add projects
          </button>
        </div>
      </div>
      <div>
        <div className=" flex  justify-between items-center mt-6 ">
          <div className=" flex items-center gap-4">
            <div>
              <p className=" flex gap-2">
                <span className=" font-medium text-fadetext ">
                  Projects Validation Amount:
                </span>{" "}
                <b className=" font-semibold ">$12,426</b>
              </p>
            </div>
            <p className=" h-10 w-[1px] bg-gray-200"></p>
            <div>
              <p className=" flex gap-2">
                <span className=" font-medium text-fadetext ">
                  Spend Amount:
                </span>{" "}
                <b className=" font-semibold ">$12,426</b>
              </p>
            </div>
          </div>
          <div className=" text-fadetext border rounded-md">
            <button className=" px-4 py-1.5 hover:text-primary ">Closed</button>
            <button className=" px-4 py-1.5  border-l hover:text-primary ">
              Progress
            </button>
            <button className=" px-4 py-1.5 border-l hover:text-primary">
              Closed
            </button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-6 mt-10 h-[62vh] overflow-y-auto p-2 cursor-pointer">
        {projectData.map((item, i) => {
          const dotColors = ["bg-orange-500", "bg-green-500", "bg-blue-500"];
          const dotColor = dotColors[i % dotColors.length];

          return (
            <div
              key={i}
              className="border rounded-lg bg-white shadow-md hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.image}
                  className="h-32 object-cover w-full rounded-t-lg"
                />
                <p
                  className={`h-3 w-3 ${dotColor} rounded-full absolute right-3 top-3`}
                ></p>
              </div>
              <div className="py-2 px-4 flex flex-col gap-2 font-medium text-base text-fadetext">
                <div className="flex gap-2">
                  <img
                    src="/dashboard/buildingIcon.png"
                    className="h-5 object-contain"
                  />
                  <p>{item.name}</p>
                </div>
                <div className="flex gap-2">
                  <img
                    src="/dashboard/locationIcon.png"
                    className="h-5 object-contain"
                  />
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
