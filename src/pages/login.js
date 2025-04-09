import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full">
      <div className=" grid grid-cols-12 ">
        <div
          style={{ backgroundImage: "url('/login/loginBg.jpg')" }}
          className=" col-span-6 flex items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat  "
        >
          <img
            src="/login/login.png"
            alt="login"
            className=" max-h-[500px] object-contain"
          />
        </div>
        <div className=" col-span-6 flex items-center justify-center  bg-white">
          <div className=" w-[420px] mx-auto  ">
            <div className=" flex flex-col gap-1 items-center justify-center">
              <img src="/logo-buildxup.png" alt="logo" className=" h-12 object-contain" />
              <h1 className=" text-4xl font-bold">Login</h1>
              <p className=" mt-1 text-center text-fadetext text-base font-medium">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
            </div>

            <div className=" mt-8 ">
              <label for="phone or email" className=" text-lg block">
                <b>Phone Number / Email</b>
              </label>

              <input
                type="text"
                name="phone or email"
                className=" w-full mt-3 p-2 border focus:outline-none rounded-md "
              />
            </div>
            <button className=" bg-primary w-full py-2 rounded-md text-white  font-semibold mt-6 ">
              Log in
            </button>
            <div className=" flex gap-2 items-center justify-center mt-5">
              <p>Don't have an account?</p>{" "}
              <Link className="text-primary hover:underline">
                Create free account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
