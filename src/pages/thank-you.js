import React from "react";
export default function Success_email() {
  

  return (
    <div className=" lg:h-[600px] flex items-center justify-center ">
      <div className=" lg:w-[70%] mx-auto grid lg:grid-cols-12 lg:px-0 px-4  ">
        <div className=" lg:col-span-4 mx-auto lg:mx-0 py-10 lg:py-0  ">
          <img
            src="/construction/successpage/success-image.png"
            alt="construction"
            className=" max-h-56 lg:max-h-none object-contain  "
          />
        </div>
        <div className=" lg:col-span-8 flex flex-col  items-center justify-center   ">
          <h1 className=" font-bold text-2xl lg:text-5xl text-center">
          Thank you for your patience and support!
          </h1>
          <div className="flex flex-col  items-center justify-center ">
            <p className=" mt-5 text-fadetext lg:text-lg ">
            Please wait, our team will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
