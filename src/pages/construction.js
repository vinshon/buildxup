import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function Construction() {
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
    <div className=" lg:h-[600px] flex items-center justify-center ">
      <div className=" lg:w-[80%] mx-auto grid lg:grid-cols-12 lg:px-0 px-4  ">
        <div className=" lg:col-span-4 mx-auto lg:mx-0 py-10 lg:py-0  ">
          <img
            src="/construction/construction.png"
            alt="construction"
            className=" max-h-56 lg:max-h-none object-contain  "
          />
        </div>
        <div className=" lg:col-span-8 flex flex-col  items-center justify-center text-sm lg:text-lg   ">
          <h1 className=" font-bold text-2xl lg:text-5xl ">
            Prebook Your Login
          </h1>
          <div className="flex flex-col  items-center justify-center ">
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
              or call us at{" "}
              <a
                href="tel:+916382714031"
                className="text-primary hover:underline font-semibold"
              >
                6382714031
              </a>
              .
            </p>
            <div className="mt-5 space-x-4">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="message"
                  className=" border px-4 py-2 lg:py-1.5 focus:outline-none rounded-md "
                  placeholder="Enter your Email Address"
                />
                <button
                  type="submit"
                  className=" font-medium hover:bg-blue-600 bg-primary px-4 py-2 border-primary rounded-md text-white"
                >
                  Submit
                </button>
              </form>
            </div>
            <p className=" mt-10">
              <span className="  text-fadetext">Already User Login Count:</span>{" "}
              <b>32</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
