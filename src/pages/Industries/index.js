// import React from 'react'
// import FAQ from '../../components/FAQ';
// import { industriesCard, industriesFaq } from '../../data';
// import ParallaxCTA from '../../components/ParallaxCTA';
// import IndustriesParallax from "../../assets/images/jpg/industries-parallax.jpeg";
// import "../../assets/styles/industries.css";

// const Industries = () => {
//     return (
//         <div>
//             {/* =============== LANDING SECTION ================ */}
//             <section className="industries-landing-section">
//                 <div className="flex flex-col justify-center items-center px-6 py-10">
//                     <h2 className="has-mask-fill !text-[#000] md:text-[42px] text-[32px]">INDUSTRIES</h2>
//                     <p className="md:text-[18px] mt-2 md:w-[30%] w-[100%] text-center">
//                         Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
//                     </p>
//                 </div>

//                 <div className="w-full md:max-w-[1300px] flex flex-wrap justify-evenly mx-auto">
//                     {industriesCard.map((card) => (
//                         <div key={card.id} className="w-full lg:w-[350px] h-auto md:h-[250px] lg:h-[350px] flex justify-center items-center bg-transparent mx-6 my-5 md:mx-10 lg:m-10 relative">
//                             <div className="industries-card w-full h-full rounded-[16px] py-10">
//                                 <div className="flex flex-col justify-center h-full gap-2 px-4 my-auto">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-max p-3 rounded-full border border-vivid-yangelo" style={{ background: "linear-gradient(344deg, rgba(255, 255, 255, 0) 0%, rgba(240, 108, 48, 0.796) 100%)" }}>
//                                             <img src={card.icon} alt="Pharmaceuticals" className='w-auto h-12' />
//                                         </div>
//                                         <h3 className="text-white text-xl md:text-2xl font-bold">{card.head}</h3>
//                                     </div>
//                                     <p className="text-white mt-2 md:text-sm">{card.para}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* =============== FAQ SECTION ================ */}
//             <FAQ
//                 para={"Find answers to common industry questions, ensuring clarity on our services, processes, and solutions."}
//                 data={industriesFaq}
//             />

//             {/* =============== PARALLAX SECTION ================ */}
//             <ParallaxCTA
//                 title={"Tailored Logistics for Every Industry"}
//                 subtitle={"Delivering tailored supply chain solutions to meet the unique needs of industries worldwide."}
//                 buttonText={"Contact Us Today"}
//                 image={IndustriesParallax}
//             />
//         </div>
//     )
// }

// export default Industries;

import React, { useEffect, useRef } from 'react'
import FAQ from '../../components/FAQ';
import { industriesCard, industriesFaq } from '../../data';
import ParallaxCTA from '../../components/ParallaxCTA';
import IndustriesParallax from "../../assets/images/jpg/industries-parallax.jpeg";
import "../../assets/styles/industries.css";

const Industries = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {/* =============== LANDING SECTION ================ */}
            <section className="industries-landing-section">

                <div className="industries-scroll-wrapper">

                    {/* LEFT — Sticky heading */}
                    <div className="industries-sticky-left">
                        <h2 className="has-mask-fill">INDUSTRIES</h2>
                        <p>
                            Over the past two decades we have been coming up with
                            innovative ways to enable global trade across various industries.
                        </p>
                    </div>

                    {/* RIGHT — Animated cards */}
                    <div className="industries-cards-right">
                        {industriesCard.map((card, index) => (
                            <div
                                key={card.id}
                                className="industries-card-wrapper"
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                <div className="industries-card">
                                    <div className="industries-card-inner">
                                        <div className="industries-card-header">
                                            <div className="industries-card-icon">
                                                <img src={card.icon} alt={card.head} />
                                            </div>
                                            <h3>{card.head}</h3>
                                        </div>
                                        <p>{card.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* =============== FAQ SECTION ================ */}
            <FAQ
                para={"Find answers to common industry questions, ensuring clarity on our services, processes, and solutions."}
                data={industriesFaq}
            />

            {/* =============== PARALLAX SECTION ================ */}
            <ParallaxCTA
                title={"Tailored Logistics for Every Industry"}
                subtitle={"Delivering tailored supply chain solutions to meet the unique needs of industries worldwide."}
                buttonText={"Contact Us Today"}
                image={IndustriesParallax}
            />
        </div>
    )
}

export default Industries;