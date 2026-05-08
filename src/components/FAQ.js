import React, { useState } from "react";

const FAQ = ({ para, data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="max-w-[1200px] mx-auto px-7 md:px-8">

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-1/2">
                        <h2 className="text-[36px] mb-6">
                            Frequently Asked{" "}
                            <span className="text-grey">Questions</span>
                        </h2>

                        <p className="text-grey mt-6">
                            {para}

                        </p>
                    </div>

                    {/* RIGHT ACCORDION */}
                    <div className="lg:w-1/2">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-300 py-4 cursor-pointer
                    ${index === 0 && "border-t border-gray-300"}
                  `}
                                onClick={() => toggle(index)}
                            >
                                {/* QUESTION */}
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-[16px]">
                                        {item.question}
                                    </h3>

                                    <span className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} >
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[#808080]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </span>
                                </div>

                                {/* ANSWER */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeIndex === index
                                        ? "max-h-[200px] mt-3 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="mt-2 text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;