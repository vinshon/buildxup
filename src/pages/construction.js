import React from "react";

export default function construction() {
  return (
    <div className=" h-[600px] flex items-center justify-center ">
      <div className=" w-[80%] mx-auto grid grid-cols-12  ">
        <div className=" col-span-4 ">
          <img src="/construction/construction.png" alt="construction" />
        </div>
        <div className=" col-span-8 flex flex-col  items-center justify-center text-lg   ">
          <h1 className=" font-bold text-5xl ">Prebook Your Login</h1>
          <div className="flex flex-col  items-center justify-center text-lg ">
            <p className=" mt-5 text-black">
              Be among the first to access our platform when we go live! Secure
              your account now.
            </p>
            <p className=" mt-2 ">
              For inquiries, reach out to us at{" "}
              <a
                href="mailto:buildxup@outlook.com"
                className="text-primary hover:underline font-semibold"
              >
                buildxup@outlook.com
              </a>{" "}
              or call us at <b>6382714031</b>.
            </p>
            <div className="mt-5 space-x-4">
              <input
                className=" border px-4 py-1.5 focus:outline-none rounded-md "
                placeholder="Enter your Email Address"
              />
              <button className=" font-medium hover:bg-blue-600 bg-primary px-4 py-1 border-primary rounded-md text-white">
                Submit
              </button>
            </div>
            <p className=" mt-10">
              <span className=" text-lg text-fadetext">
                Already User Login Count:
              </span>{" "}
              <b>2943</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
