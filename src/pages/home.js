import React from 'react'
import AccordionItem from '../components/faq'

const faqData = [
    {
        question:
            "How do I change my subscription plan?",
        answer: (
            <>
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </>
        ),
    },
    {
        question: "What happens if I miss a daily call update?",
        answer: (
            <>
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.

            </>
        ),
    },
    {
        question: "Can I export attendance and salary reports?",
        answer: (
            <>
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </>
        ),
    },
    {
        question: "How do I reset my password?",
        answer: (
            <>
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </>
        ),
    },
    {
        question: "How do I contact support?",
        answer: (
            <>
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </>
        ),
    },
];

export default function home() {
    return (
        <div className=" w-full ">
            {/* Section 1 */}
            <div className=' grid grid-cols-12 gap-4  h-[650px] w-[80%] mx-auto '>
                <div className=' col-span-7  flex flex-col justify-center '>
                    <h1 className=' text-5xl font-bold  '>
                        Maximize Profits by Managing Your Projects
                    </h1>
                    <p className=' text-lg mt-8 '>
                        Streamline project management, track attendance, and generate accurate reports effortlessly with BuildXup’s powerful tools. Scale your business and boost efficiency with ease.
                    </p>
                    <div className=' mt-8 '>
                        <ul className=' flex items-center gap-6  '>
                            <li className=' flex items-center gap-2 font-semibold '>
                                <p className=' w-[6px] h-[6px] rounded-full bg-fadetext '></p>Automate Salary Calculations
                            </li>
                            <li className=' flex items-center gap-2 font-semibold '>
                                <p className=' w-[6px] h-[6px] rounded-full bg-fadetext '></p>Track Progress & Attendance
                            </li>
                            <li className=' flex items-center gap-2 font-semibold '>
                                <p className=' w-[6px] h-[6px] rounded-full bg-fadetext '></p>Get Custom Solutions
                            </li>
                        </ul>

                    </div>
                    <div className=' flex gap-4 mt-10 '>
                        <button className=' flex gap-2 items-center bg-primary hover:bg-white border border-primary  text-white hover:text-primary font-medium px-5 py-3 rounded-full '>
                            Schedule a Demo<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                        <button className=' font-medium underline underline-offset-4 px-6 py-2 rounded-md '>
                            Get 7 days free trial*
                        </button>
                    </div>
                </div>
                <div className=' col-span-5 flex items-center justify-center '>
                    <img src="/home/section/section-1.png" alt="section 1" />
                </div>

            </div>

            {/* Section 2 */}
            <div className=' grid grid-cols-12 gap-4 w-[80%] mx-auto py-10 '>

                <div className=' col-span-6 flex items-center justify-center '>
                    <img src="/home/section/section-2.png" alt="section 1" />
                </div>
                <div className=' col-span-6  flex flex-col justify-center '>
                    <h2 className=' text-5xl text-primary font-bold  '>
                        About us
                    </h2>
                    <h3 className=' text-4xl font-bold mt-8 '>
                        Our Story
                    </h3>
                    <p className=' text-lg text-fadetext mt-8 '>
                        BuildXup was born out of a simple need—to simplify project management and make operations seamless for companies juggling multiple projects. Our founders, with extensive experience in the construction and project management industries, realized the challenges of tracking attendance, managing payroll, and keeping projects on schedule.
                    </p>
                    <p className=' text-lg text-fadetext mt-4 '>
                        To bridge this gap, we went a step further. <span className=' font-semibold '>Unlike traditional platforms, we don’t just rely on automated inputs—we call our subscribed clients every day to gather real-time updates, ensuring accuracy and accountability.</span>
                    </p>
                </div>

            </div>

            {/* Section 3 */}
            <div className=' grid grid-cols-12 gap-4 w-[80%] mx-auto py-10 '>


                <div className=' col-span-6  flex flex-col justify-center '>
                    <h2 className=' text-5xl text-primary font-bold  '>
                        What We Do
                    </h2>
                    <p className=' text-lg text-fadetext mt-8 '>
                        We designed BuildXup to eliminate bottlenecks by offering a powerful, intuitive platform that:
                    </p>
                    <div className=' mt-8 '>
                        <ul className=' space-y-10 font-semibold '>
                            <li className=' flex items-center gap-2 '>
                                <img src='/home/icon/FeaturedIcon-1.png' alt='icon 1' className=' h-10 ' /> Automates Attendance Tracking
                            </li>
                            <li className=' flex items-center gap-2 '>
                                <img src='/home/icon/FeaturedIcon-2.png' alt='icon 2' className=' h-10 ' /> Calculates Salaries & Generates Reports
                            </li>
                            <li className=' flex items-center gap-2 '>
                                <img src='/home/icon/FeaturedIcon-3.png' alt='icon 3' className=' h-10 ' /> Monitors Project Timelines with Precision
                            </li>
                            <li className=' flex items-center gap-2 '>
                                <img src='/home/icon/FeaturedIcon-4.png' alt='icon 4' className=' h-10 ' /> Daily Call Updates for Real-Time Data Accuracy
                            </li>
                        </ul>

                    </div>
                </div>
                <div className=' col-span-6 flex items-center justify-center '>
                    <img src="/home/section/section-3.png" alt="section 1" />
                </div>

            </div>

            {/* Section 4 */}
            <div className=' w-[80%] mx-auto py-10 '>
                <div>
                    <h2 className=' text-5xl text-primary font-bold text-center  '>
                        Our Services
                    </h2>
                    <p className="text-lg text-fadetext mt-8 text-center">
                        At BuildXup, we offer a suite of powerful services designed to streamline
                        <span className="block">project management, enhance efficiency, and ensure accurate reporting.</span>
                    </p>
                </div>
                <div className=' grid grid-cols-3 gap-x-6  gap-y-12 mt-10 '>
                    <div className=' bg-white border p-8 shadow-lg rounded-lg '>
                        <p className=' w-3 h-3 rounded-full bg-primary '></p>
                        <h3 className=' text-2xl font-bold mt-2 '>
                            Easy Project Management
                        </h3>
                        <p className=' text-fadetext mt-4 '>
                            Track project progress, manage deadlines, and monitor milestones with real-time updates.
                        </p>

                    </div>
                    <div className=' bg-white border p-8 shadow-lg rounded-lg '>
                        <p className=' w-3 h-3 rounded-full bg-orange-600 '></p>
                        <h3 className=' text-2xl font-bold mt-2 '>
                            Smart Attendance Tracking
                        </h3>
                        <p className=' text-fadetext mt-4 '>
                            Capture attendance effortlessly through mobile check-ins, geo-fencing, or manual updates, ensuring accuracy without paperwork.
                        </p>

                    </div>
                    <div className=' bg-white border p-8 shadow-lg rounded-lg '>
                        <p className=' w-3 h-3 rounded-full bg-violet-600 '></p>
                        <h3 className=' text-2xl font-bold mt-2 '>
                            Salary & Payroll Automation
                        </h3>
                        <p className=' text-fadetext mt-4 '>
                            Eliminate errors and reduce manual work by automating payroll calculations based on attendance and project hours.
                        </p>

                    </div>
                    <div className=' bg-white border p-8 shadow-lg rounded-lg '>
                        <p className=' w-3 h-3 rounded-full bg-violet-600 '></p>
                        <h3 className=' text-2xl font-bold mt-2 '>
                            Call Updates for Accuracy
                        </h3>
                        <p className=' text-fadetext mt-4 '>
                            Our unique daily call feature ensures that your project records are updated in real time, adding a human touch to automated data collection.
                        </p>

                    </div>
                    <div className=' bg-white border p-8 shadow-lg rounded-lg '>
                        <p className=' w-3 h-3 rounded-full bg-orange-600 '></p>
                        <h3 className=' text-2xl font-bold mt-2 '>
                            Custom Reports & Analytics
                        </h3>
                        <p className=' text-fadetext mt-4 '>
                            Generate insightful reports to analyze project performance, identify trends, and make informed decisions.
                        </p>

                    </div>
                    <div className=' bg-white border p-8 shadow-lg rounded-lg '>
                        <p className=' w-3 h-3 rounded-full bg-primary '></p>
                        <h3 className=' text-2xl font-bold mt-2 '>
                            Tailored Enterprise Solutions
                        </h3>
                        <p className=' text-fadetext mt-4 '>
                            For large firms, we offer custom solutions tailored to meet your unique business needs after a personalized consultation
                        </p>

                    </div>

                </div>

            </div>
            <div className=' w-full bg-white py-10'>

                {/* Section 5 */}
                <div className=' w-[80%]  mx-auto bg-gray-50 p-10  '>
                    <div className=' flex flex-col items-center justify-center'>
                        <img src='/home/icon/Avatar group.png' alt='Get in touch' />
                        <span className=' block text-2xl font-bold mt-4 '>
                            Still have questions?
                        </span>
                        <p className=' text-lg text-fadetext mt-4 '>
                            Can’t find the answer you’re looking for? Please chat to our friendly team.
                        </p>
                        <button className=' flex gap-2 items-center bg-primary hover:bg-white border border-primary  text-white hover:text-primary font-medium px-5 py-3 mt-4 rounded-full '>
                            Get in touch<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Section 5 */}
                <div className=' lg:w-[60%]  mx-auto  p-10  '>
                    <h2 className=' text-5xl text-primary font-bold text-center  '>
                        Frequently asked questions
                    </h2>
                    <p className=' text-lg text-fadetext mt-8 text-center '>
                        Everything you need to know about the product and billing.
                    </p>

                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}

                </div>

            </div>



        </div>
    )
}
