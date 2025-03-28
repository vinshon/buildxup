import React from "react";

const Footer = () => (
    <footer className=" w-full text-white lg:p-10 p-6 ">
        <div className=" lg:w-[80%] flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-4 bg-darkBlue text-white  lg:py-12 py-6 lg:px-14 px-8 lg:mx-auto rounded-xl ">
            <p className=" text-center font-semibold lg:text-7xl text-2xl ">
                Ready to work with us?
            </p>
            <button className=" flex items-center gap-2 bg-white hover:bg-primary text-primary hover:text-white lg:text-xl font-medium border border-primary lg:px-6 px-4 lg:py-4 py-2 rounded-full">
                Get Started<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
        <div className=" grid lg:grid-cols-12 lg:w-[80%] mx-auto lg:mt-10 mt-8 ">
            <div className=" col-span-4 ">
                <img src="/logo.png" alt="logo" />
                <p className=" text-fadetext mt-4 ">
                    Streamline project management, track attendance, and generate accurate reports effortlessly with BuildXup’s powerful tools. Scale your business and boost efficiency with ease.
                </p>
                <ul className=" flex gap-4 mt-4 ">
                    <li>
                        <img src="/footer/facebook.svg" alt="facebook" />
                    </li>
                    {/* <li>
                        <img src="/footer/twitter.svg" alt="twitter" />
                    </li> */}
                    <li>
                        <img src="/footer/linkedin.svg" alt="linkedin" />
                    </li>
                    <li>
                        <img src="/footer/instagram.svg" alt="instagram" />
                    </li>
                </ul>
            </div>
            <div className=" col-span-8 grid lg:grid-cols-12 grid-cols-2 gap-4 ">
                <div className=" lg:col-span-4 flex justify-center ">
                    <ul className=" mt-4 space-y-2 ">
                        <li className=" text-fadetext  hover:underline ">
                            About Us
                        </li>
                        <li className=" text-fadetext  hover:underline ">
                            Services
                        </li>
                        <li className=" text-fadetext  hover:underline ">
                            Pricing
                        </li>
                        <li className=" text-fadetext  hover:underline ">
                            Help Center
                        </li>
                        <li className=" text-fadetext  hover:underline ">
                            Contact
                        </li>
                    </ul>
                </div>
                <div className=" lg:col-span-4 flex justify-center ">
                    <ul className=" mt-4 space-y-2 ">
                        <li className=" text-fadetext  hover:underline ">
                            Privacy Policy
                        </li>
                        <li className=" text-fadetext  hover:underline ">
                            Copyright
                        </li>
                        <li className=" text-fadetext  hover:underline ">
                            Email Address
                        </li>
                    </ul>
                </div>
                <div className=" lg:col-span-4  flex justify-center ">
                    <ul className=" mt-4 space-y-2 ">
                        <li className=" flex items-center gap-2 text-fadetext  hover:underline ">
                            <img src="/footer/phone.png" alt="phone" className=" h-5 object-contain " /> 98765433210
                        </li>
                        <li className=" flex items-center gap-2 text-fadetext  hover:underline ">
                            <img src="/footer/mail.png" alt="email" className=" h-5 object-contain " /> Buildx@gmail.com
                        </li>
                        <li className=" flex  gap-2 text-fadetext  hover:underline ">
                            <img src="/footer/location.png" alt="loaction" className=" h-5 object-contain " /> 2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </li>

                    </ul>
                </div>

            </div>
        </div>

    </footer>
);

export default Footer;
