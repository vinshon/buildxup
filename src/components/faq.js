import { useState } from 'react'



export default function Faq({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-300 w-full">
            {/* Question Button */}
            <button
                className="flex justify-between items-center w-full py-4 text-left lg:text-lg font-semibold focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <svg
                    className={`h-5 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {/* Answer Section with Smooth Transition */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="pb-4 text-gray-900">{answer}</div>
            </div>
        </div>
    )
}

