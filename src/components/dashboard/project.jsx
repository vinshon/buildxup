import { useState } from "react";
import AddProjectPopup from "../../components/dashboard/addProjectPopup";

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

export default function Project({setRoute}) {
  const [addProjectPopup, setAddProjectPopup] = useState(false);

  return (
    <div className=" lg:col-span-9 col-span-1 bg-white p-4 md:p-8 shadow-md rounded-md ">

      <div className=" w-full h-full">
        <div className=" flex flex-wrap  justify-between ">
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
          <div className=" mt-4 lg:mt-0">
            <button
              onClick={() => setAddProjectPopup(true)}
              className=" flex gap-1 items-center bg-primary border border-primary hover:bg-white px-4 py-2 rounded-full font-medium text-white hover:text-primary"
            >
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
          <div className=" flex flex-wrap  justify-between items-center mt-6 ">
            <div className=" flex flex-wrap items-center gap-2 lg:gap-4">
              <div>
                <p className=" flex gap-2">
                  <span className=" font-medium text-fadetext ">
                    Projects Validation Amount:
                  </span>{" "}
                  <b className=" font-semibold ">$12,426</b>
                </p>
              </div>
              <p className=" lg:flex hidden h-10 w-[1px] bg-gray-200"></p>
              <div>
                <p className=" flex gap-2">
                  <span className=" font-medium text-fadetext ">
                    Spend Amount:
                  </span>{" "}
                  <b className=" font-semibold ">$12,426</b>
                </p>
              </div>
            </div>
            <div className=" text-fadetext border rounded-md mt-4 lg:mt-0">
              <button className=" px-4 py-1.5 hover:text-primary ">
                Closed
              </button>
              <button className=" px-4 py-1.5  border-l hover:text-primary ">
                Progress
              </button>
              <button className=" px-4 py-1.5 border-l hover:text-primary">
                Closed
              </button>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2   gap-6 mt-10 h-[62vh] overflow-y-auto p-2 cursor-pointer">
          {projectData.map((item, i) => {
            const dotColors = ["bg-orange-500", "bg-green-500", "bg-blue-500"];
            const dotColor = dotColors[i % dotColors.length];

            return (
              <div
                key={i}
                className="border rounded-lg bg-white shadow-md lg:hover:scale-105"
                onClick={()=>{setRoute("projects")}}
              >
                <div className="relative">
                  <img
                  alt=""
                    src={item.image}
                    className=" h-32 md:h-44 lg:h-32 object-cover w-full rounded-t-lg"
                  />
                  <p
                    className={`h-3 w-3 ${dotColor} rounded-full absolute right-3 top-3`}
                  ></p>
                </div>
                <div className="py-2 px-4 flex flex-col gap-2 font-medium text-base text-fadetext">
                  <div className="flex gap-2">
                    <img
                    alt=""
                      src="/dashboard/buildingIcon.png"
                      className="h-5 object-contain"
                    />
                    <p>{item.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                    alt=""
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
      <AddProjectPopup open={addProjectPopup} setOpen={setAddProjectPopup} />
    </div>
  );
}
