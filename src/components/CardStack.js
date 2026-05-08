// import React, { useEffect, useRef } from "react";
// import { cardStackCards } from "../data";
// import "../assets/styles/cardStack.css";

// const CardStack = () => {
//     const cardsRef = useRef([]);

//     useEffect(() => {
//         const handleScroll = () => {
//             cardsRef.current.forEach((card) => {
//                 if (!card) return;

//                 const rect = card.getBoundingClientRect();
//                 const offset = rect.top;

//                 if (offset < 120) {
//                     const scale = 1 - Math.min((120 - offset) / 600, 0.1);
//                     card.style.transform = `scale(${scale})`;
//                 } else {
//                     card.style.transform = "scale(1)";
//                 }
//             });
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div className="stack-container">
//             {cardStackCards.map((card, i) => (
//                 <div
//                     key={card.id}
//                     ref={(el) => (cardsRef.current[i] = el)}
//                     className="stack-card"
//                 >
//                     {/* FLEX CONTROL (LEFT / RIGHT IMAGE) */}
//                     <div
//                         className={`card-stack-bg-img flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
//                             } xl:h-[500px] rounded-[30px] overflow-hidden relative`}
//                     >

//                         {/* IMAGE */}
//                         <div className="w-full md:w-1/2 h-[280px] md:h-auto">
//                             <img
//                                 src={card.imgSrc}
//                                 alt={card.title}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* OVERLAY (MOBILE ONLY) */}
//                         <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>

//                         {/* CONTENT */}
//                         <div className="w-full md:w-1/2 flex flex-col justify-center text-white md:text-black px-6 md:px-10 py-8 relative z-10">

//                             <h3 className="text-[24px] md:text-[32px] mb-3">
//                                 {card.title}
//                             </h3>

//                             {card.paras.map((para, index) => (
//                                 <p key={index} className="mb-2 text-[14px] md:text-[16px]">
//                                     {para}
//                                 </p>
//                             ))}

//                             {/* POINTS */}
//                             <div className="flex flex-wrap gap-3 mt-5 mb-6">
//                                 {card.points.map((point, index) => (
//                                     <span
//                                         key={index}
//                                         className="border rounded-[12px] px-3 py-1 text-[13px] md:text-[14px]"
//                                     >
//                                         {point}
//                                     </span>
//                                 ))}
//                             </div>

//                             <button className="primary-btn">
//                                 <span data-title="Let's go!">Read more</span>
//                             </button>

//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CardStack;

import React, { useEffect, useRef } from "react";
import { cardStackCards } from "../data";
import "../assets/styles/cardStack.css";

const CardStack = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            cardsRef.current.forEach((card, index) => {
                const rect = card.getBoundingClientRect();

                const offset = rect.top;

                if (offset < 120) {
                    const scale = 1 - Math.min((120 - offset) / 600, 0.1);
                    card.style.transform = `scale(${scale})`;
                } else {
                    card.style.transform = "scale(1)";
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="stack-container">
            {cardStackCards.map((card, i) => (
                <div
                    key={card.id}
                    ref={(el) => (cardsRef.current[i] = el)}
                    className="stack-card"
                >
                    <div
                        className="card-stack-bg-img xl:h-[500px] bg-cover bg-left md:bg-center rounded-[30px] relative"
                        style={{ backgroundImage: `url(${card.imgSrc})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl md:hidden"></div>
                        <div
                            className={`md:w-1/2 flex flex-col justify-center text-white md:text-black px-10 py-10 relative 
                                ${i % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                        >
                            <h3 className="text-[24px] md:text-[32px] mb-2 lg:mb-5">
                                {card.title}
                            </h3>
                            {card.paras.map((para) => (
                                <p className="md:w-10/12 mb-2 lg:mb-3 text-[14px] md:text-[16px]">
                                    {para}
                                </p>
                            ))}

                            <div className="flex flex-wrap gap-4 mb-6 lg:mb-9 gap-y-2 lg:gap-y-4 mt-5">
                                {card.points.map((point) => (
                                    <span className="border rounded-[12px] flex items-center justify-center basis-[45%] md:basis-[20%] text-[14px] md:text-[16px] px-2">
                                        {point}
                                    </span>
                                ))}
                            </div>
                            <button className="primary-btn">
                                <span data-title="Let's go!">Read more</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardStack;