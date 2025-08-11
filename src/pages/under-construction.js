"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function MaintenanceSection4() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t3lxqgs", "template_0cogz7c", form.current, {
        publicKey: "zZJhs6s1xJsa88EgI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/thank-you");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" bg-white lg:min-h-[87vh] flex items-center justify-center ">
      <div className=" lg:w-[80%] mx-auto flex items-center justify-center flex-col gap-10 lg:px-0 px-4  ">
        <div className=" lg:col-span-4 mx-auto lg:mx-0 py-10 lg:py-0  ">
          <img
            src="/construction/construction.png"
            alt="construction"
            className=" max-h-56  object-contain  "
          />
        </div>
        <div className="lg:col-span-8 flex flex-col items-center justify-center text-sm lg:text-lg">
          <h1 className="font-bold text-xl lg:text-3xl text-center">
            We're Building Something Awesome!
          </h1>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="mt-5 text-black">
              Our platform is currently under construction. We're working hard
              behind the scenes to bring you an amazing experience.
            </p>

           
            {/* <div className="mt-5">
              <form className="space-x-4" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="message"
                  className="border px-4 py-2 lg:py-2.5 focus:outline-none rounded-md"
                  placeholder="Enter your Email Address"
                />
                <button
                  type="submit"
                  className="font-medium hover:bg-blue-600 bg-primary px-4 py-2 border-primary rounded-md text-white"
                >
                  Notify Me
                </button>
              </form> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
