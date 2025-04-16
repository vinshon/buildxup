import React from "react";

export default function AboutUs() {
  return (
    <div className=" w-full ">
      {/* Section 1 */}
      <div className=" grid lg:grid-cols-12 grid-cols-1 gap-4  lg:h-[650px] lg:w-[80%] lg:mx-auto lg:px-0 px-4 lg:py-0 py-10">
        <div className=" lg:col-span-6 flex items-center justify-center ">
          <img src="/aboutus/aboutUs.png" alt="section 1" />
        </div>
        <div className=" lg:col-span-6  flex flex-col justify-center ">
          <h1 className=" lg:text-5xl text-2xl font-bold lg:text-start text-center text-primary">
            About us
          </h1>
          <p className=" font-semibold lg:text-2xl text-lg lg:mt-4 mt-2 lg:text-start text-center">
            Empowering Projects. Simplifying Management.
          </p>
          <div className=" text-fadetext lg:text-base text-sm ">
            <p className="  lg:mt-4 mt-2 lg:text-start text-justify  ">
              At BuildXup, we believe managing projects and teams shouldn't be
              complicated. That’s why we’ve built a smart, adaptable platform
              that helps businesses of all sizes stay organized, efficient, and
              in control.
            </p>
            <p className=" lg:mt-4 mt-2 lg:text-start text-justify  ">
              Whether you're running a startup, managing a growing team, or
              overseeing large-scale operations, BuildXup gives you the tools to
              track attendance, manage salaries, monitor project timelines, and
              generate insightful reports — all from a single, intuitive
              dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" bg-white">
        <div className=" lg:w-[80%] lg:mx-auto lg:px-0 px-4  lg:py-10 py-10">
          <div className=" flex flex-col items-center justify-center">
            <img
              src="/aboutus/icon-1.png"
              alt="about us png"
              className=" h-12 object-contain"
            />
            <h2 className=" lg:text-4xl text-xl font-bold text-center mt-2  ">
              Unlock the future of construction.
            </h2>
            <p className="lg:text-lg text-sm  text-fadetext lg:mt-4 mt-2 text-center">
              With BuildXup, it’s easier than ever to organize your projects,
              empower your team, and deliver results that stick.
            </p>
            <div className=" grid grid-cols-2 lg:gap-0 gap-y-4 lg:flex flex-wrap lg:justify-between mt-5 lg:mt-10 text-center text-sm lg:text-lg font-medium ">
              <div className=" lg:border-r  lg:px-10 px-4">
                <p className=" lg:text-5xl text-2xl font-bold text-primary">100+</p>
                <p className=" mt-2  ">Happy Customers</p>
              </div>
              <div className=" lg:border-r  lg:px-10 px-4 ">
                <p className=" lg:text-5xl text-2xl font-bold text-primary">110+</p>
                <p className=" mt-2  ">Projects Completed</p>
              </div>
              <div className=" lg:border-r  lg:px-10 px-4 ">
                <p className=" lg:text-5xl text-2xl font-bold text-primary">25+</p>
                <p className=" mt-2  ">Serving Across Cities</p>
              </div>
              <div className=" lg:px-10 px-4 ">
                <p className=" lg:text-5xl text-2xl font-bold text-primary">10+</p>
                <p className=" mt-2  ">Years of Combined Experience</p>
              </div>
            </div>
            <div className=" mt-10 lg:mt-16 ">
              <img src="/aboutus/section-2.png" alt="video" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className=" bg-white ">
        <div className=" lg:w-[80%] lg:mx-auto lg:px-0 px-4 lg:pt-10 lg:pb-28 lg:py-0 py-10">
          <div className=" flex flex-col justify-center  items-center">
            <p className=" text-primary text-base font-medium ">
              1200+ Happy Buildxup Users
            </p>
            <h2 className=" lg:text-5xl text-3xl font-bold lg:text-left text-center  mt-2  ">
              What our customers say about us
            </h2>
            <div className=" grid lg:grid-cols-2 gap-5  mt-10 ">
              <div className=" flex flex-wrap lg:flex-nowrap  lg:gap-5 lg:justify-between    items-center justify-center lg:items-start ">
                <img
                  src="/aboutus/anjaliR.png"
                  alt="anjali.R"
                  className=" max-h-48 object-contain"
                />
                <div className=" py-5 flex items-center justify-center lg:items-start flex-col gap-2 lg:justify-between ">
                  <img
                    src="/aboutus/Review.png"
                    alt="review star"
                    className=" w-20 object-contain"
                  />
                  <p className="text-center lg:text-start">
                    BuildXup has completely transformed how we manage projects.
                    It’s intuitive, fast, and keeps our entire team on the same
                    page.
                  </p>
                  <p>
                    <b>Anjali R</b>{" "}
                    <span className=" text-fadetext ml-5">BrightBuild Co</span>
                  </p>
                </div>
              </div>
              <div className=" flex flex-wrap lg:flex-nowrap lg:gap-5 lg:justify-between  items-center justify-center lg:items-start ">
                <img
                  src="/aboutus/sundarV.png"
                  alt="anjali.R"
                  className=" max-h-48 object-contain"
                />
                <div className=" py-5 flex items-center justify-center lg:items-start flex-col gap-2 lg:justify-between ">
                  <img
                    src="/aboutus/Review.png"
                    alt="review star"
                    className=" w-20 object-contain"
                  />
                  <p className="text-center lg:text-start">
                    Our onboarding time was cut in half thanks to BuildXup. It’s
                    the smartest move we’ve made this year.
                  </p>
                  <p>
                    <b>Sundar V.</b>{" "}
                    <span className=" text-fadetext ml-5">CoreConstruct</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
