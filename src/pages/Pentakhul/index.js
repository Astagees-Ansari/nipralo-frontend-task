import React, { useState } from 'react'
import PentakuhlVideo from "../../assets/videos/pentakuhl-video.mp4"
import PeliLogo from "../../assets/images/png/peli-logo.png"
import CoolguardLogo from "../../assets/images/png/coolguard-logo.png"
import CoolguardAdvanceLogo from "../../assets/images/png/coolguard-advance-logo.png"
import CredoCubeLogo from "../../assets/images/png/credocube-logo.png"
import CoolpallLogo from "../../assets/images/png/peli-logo.png"
import CoolpallAdvanceLogo from "../../assets/images/png/coolpall-advance-logo.png"
import CredoExtremeLogo from "../../assets/images/png/credoextreme-logo.png"
// import CredoCargoLogo from "../../assets/images/png/credocargo-logo.png"
import CredoCargoLogo from "../../assets/images/png/credocargo-logo.png"
import "../../assets/styles/pentakuhl.css"
import { seriesGuide, pentakuhlFaq } from '../../data'
import FAQ from '../../components/FAQ'
import ParallaxCTA from '../../components/ParallaxCTA'
import PentakuhlParallax from "../../assets/images/jpg/pentakuhl-parallax.jpeg"
import TextScroll from '../../components/TextScroll'

const Pentakuhl = () => {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/* =============== LANDING SECTION ================ */}
            <section className="pentakuhl-landing-section">
                <div className="h-[calc(100vh-64px)] relative">
                    <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                        <video
                            src={PentakuhlVideo}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
                    <div className="w-full md:max-w-[80%] lg:max-w-[60%] h-full flex flex-col justify-center items-center px-6 mx-auto">
                        <h1 className="text-center md:text-[48px] lg:text-[56px] text-[24px] text-white">
                            Ensuring Safe Transport for Temperature-Sensitive Products
                        </h1>
                        <div className="border-b border-b-[#fff] w-full mt-10 mb-6"></div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="lg:max-w-[70%] xl:max-w-[60%] md:text-[22px] text-center md:text-left lg:text-left text-white">
                                Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features
                            </p>
                            <a href="#pentakuhl-about-us" className="md:pt-0 pt-5">
                                <button
                                    className='outline-0 bg-vivid-yangelo hover:bg-abstract-orange text-white font-medium px-6 py-4 rounded flex items-center transition ease-in-out'
                                >
                                    Explore
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="ml-2 text-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============== ABOUT PENTAKUHL SECTION ================ */}
            <section className="pentakuhl-about-us-section" id='pentakuhl-about-us'>
                <div className="w-[85%] lg:w-[60%] flex flex-col md:flex-row text-fiord items-center justify-between mx-auto gap-5 py-20">
                    <div className="w-[70%] md:w-[35%] lg:w-[25%] flex flex-col items-center">
                        <h2 className="py-3 text-vivid-yangelo font-bold text-xl">ABOUT</h2>
                        <p className="py-3 text-vivid-yangelo font-bold text-xl border-t-vivid-yangelo border-t-[3px]">PENTA KUHL</p>
                    </div>
                    <div className="w-full md:w-[70%]">
                        <p className="text-center md:text-start md:text-[20px] md:p-0 px-3 text-xl font-light text-fiord">
                            At <span className="font-[700]">Pentakuhl</span>, we specialize in providing durable, effective packaging
                            solutions that maintain temperature <span className="font-[700]">stability</span> during transit,
                            <span className="font-[700]">protecting</span> your valuable products. Our innovative designs cater to various
                            industries, including pharmaceuticals, food, and biotechnology.
                        </p>
                    </div>
                </div>
            </section>

            {/* =============== DISTRIBUTORS SECTION ================ */}
            <section className="pentakuhl-distribution-section px-7 lg:px-0 py-10 md:py-20 bg-fiord">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-around">
                    <div className="flex items-center justify-center px-8 pt-5 mb-4 bg-white rounded-xl">
                        <img src={PeliLogo} alt="peli logo" className='h-32 mb-4 rounded-lg' />
                    </div>
                    <div className="text-center">
                        <h2 className="text-[24px] md:text-[32px] text-center text-white">
                            Authorized Distributors for Pelican BioThermal<sub>tm</sub> Products
                        </h2>
                        <button className='primary-btn mt-4'>
                            <span data-title="Let's go!">Read more</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* =============== PRODUCT SOLUTIONS SECTION ================ */}
            <section className="pentakuhl-product-section">
                <div className="relative mx-auto my-8">
                    <div className="flex items-center justify-center text-[32px] md:text-[56px] text-black">Product Solutions</div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-[48%] z-10 my-5 md:my-8 shippers">
                            <div className="flex flex-col items-center py-10">
                                <h2 className="text-[24px] md:text-[36px] lg:text-[56px] mb-6">Parcel Shippers</h2>
                                <p className="md:text-[22px] text-center w-[90%]">
                                    We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.
                                </p>

                                <div className="w-full flex flex-col gap-10 mt-10 justify md:px-6 lg:px-12">
                                    <div className="grid p-3 shadow md:grid-cols-3">
                                        <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                            <h3 className="text-[24px] lg:text-[28px] xl:text-[32px] pl-2 font-medium mb-4 md:mb-0">Single Use</h3>
                                        </div>
                                        <div className="col-span-2 flex justify-evenly">
                                            <div className="flex items-center justify-center sm:border-l">
                                                <img src={CoolguardLogo} alt="coolguard logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                            <div className="flex justify-center sm:border-l">
                                                <img src={CoolguardAdvanceLogo} alt="coolguard advance logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid p-3 shadow md:grid-cols-3">
                                        <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                            <h3 className="text-[24px] lg:text-[28px] xl:text-[32px] pl-2 font-medium mb-4 md:mb-0">Reusable</h3>
                                        </div>
                                        <div className="col-span-2 flex justify-evenly">
                                            <div className="flex items-center justify-center sm:border-l">
                                                <img src={CredoCubeLogo} alt="credcube logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='primary-btn mt-8'>
                                    <span data-title="Let's go!">Parcel Shippers</span>
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-[48%] z-10 my-5 md:my-8 shippers">
                            <div className="flex flex-col items-center py-10">
                                <h2 className="text-[24px] md:text-[36px] lg:text-[56px] mb-6">Pallet Shippers</h2>
                                <p className="md:text-[22px] text-center w-[90%]">
                                    We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.
                                </p>

                                <div className="w-full flex flex-col gap-10 mt-10 justify md:px-6 lg:px-12">
                                    <div className="grid p-3 shadow md:grid-cols-3">
                                        <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                            <h3 className="text-[24px] lg:text-[28px] xl:text-[32px] pl-2 font-medium mb-4 md:mb-0">Single Use</h3>
                                        </div>
                                        <div className="col-span-2 flex justify-evenly">
                                            <div className="flex items-center justify-center sm:border-l">
                                                <img src={CoolpallLogo} alt="coolpall logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                            <div className="flex justify-center sm:border-l">
                                                <img src={CoolpallAdvanceLogo} alt="coolpall advance logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid p-3 shadow md:grid-cols-3">
                                        <div className="flex justify-center items-center col-span-2 md:col-span-1">
                                            <h3 className="text-[24px] lg:text-[28px] xl:text-[32px] pl-2 font-medium mb-4 md:mb-0">Reusable</h3>
                                        </div>
                                        <div className="col-span-2 flex justify-evenly">
                                            <div className="flex items-center justify-center sm:border-l">
                                                <img src={CredoExtremeLogo} alt="credo extreme Logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                            <div className="flex justify-center sm:border-l">
                                                <img src={CredoCargoLogo} alt="coolcargo logo" className='object-contain w-[120px] md:w-24 h-auto xl:w-26' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='primary-btn mt-8'>
                                    <span data-title="Let's go!">Pallet Shippers</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============== SERIES GUIDE SECTION ================ */}
            <section className="pentekuhl-series-guide-section">
                <div className="max-w-[1200px] mx-auto px-7 py-10">

                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-[32px] md:text-[36px]">
                            Series <span className="text-grey">Guide</span>
                        </h2>
                        <p className="">
                            This guide outlines temperature-controlled packaging solutions designed for the safe transport
                            and storage of sensitive products, like vaccines and biologics, across various thermal conditions,
                            from refrigerated to deep-freeze.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="bg-white shadow rounded-md flex flex-wrap md:flex-nowrap justify-between text-center mt-10 overflow-hidden">
                        {seriesGuide.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                className={`w-1/2 md:w-auto md:flex-1 my-3 md:my-4 cursor-pointer text-sm md:text-base border-r last:border-r-0 transition
                                    ${active === index ? "text-vivid-yangelo font-bold" : "text-black"}
                                `}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div
                        key={active}
                        className="mt-6 p-8 rounded shadow bg-white opacity-0 translate-y-6 animate-fadeUp"
                    >
                        {seriesGuide[active].content}
                    </div>

                </div>
            </section>

            {/* =============== TEXT SCROLL SECTION ================ */}
            <TextScroll />

            {/* =============== FAQ SECTION ================ */}
            <FAQ
                para={"Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features."}
                data={pentakuhlFaq}
            />

            {/* =============== PARALLAX SECTION ================ */}
            <ParallaxCTA
                title={"Protecting What Matters Most"}
                subtitle={"Get in touch to ensure safe and temperature-stable transit for your sensitive products."}
                buttonText={"Contact Us Today"}
                image={PentakuhlParallax}
            />
        </div>
    )
}

export default Pentakuhl