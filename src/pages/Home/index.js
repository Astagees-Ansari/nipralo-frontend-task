import React from 'react'
import landingVdo from "../../assets/videos/homevideo.mp4"
import scrollDownImg from "../../assets/images/png/scroll-to-down.png"
import smokeImg from "../../assets/images/png/smoke-bg.png"
import "../../assets/styles/home.css"
import CardStack from '../../components/CardStack'
import whyIcon1 from "../../assets/images/png/why-icon-1.png"
import whyIcon2 from "../../assets/images/png/why-icon-2.png"
import whyIcon3 from "../../assets/images/png/why-icon-3.png"
import CustomerSwiper from '../../components/CustomerSwiper'
import cargoImg from "../../assets/images/png/cargo-logo.png"
import sunLogo from "../../assets/images/png/sunpharma-logo.png"
import watson from "../../assets/images/png/wetson-logo.png"
import MapImg from "../../assets/images/web/map.webp"
import { SwiperSlide } from 'swiper/react'
import { awardCard, certificationSliderImg, reviewsCard } from '../../data'

function Home() {
    return (
        <div>
            {/* ////////////// Home Section / landing Section ////////////// */}
            <section className='landing-section relative overflow-hidden'>
                <div className='w-full h-auto lg:h-[calc(100vh-64px)]'>
                    <video
                        src={landingVdo}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"

                    />
                </div>
                <a href="#home-about-us" className="w-[120px] md:w-[300px] flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer">
                    <img src={scrollDownImg} alt="scroll-down-image" />
                </a>
            </section>

            {/* ////////////// About Us Section ////////////// */}
            {/* <section className="home-about-us-section relative" id='home-about-us'>
                <div className="home-about-us-bg-img h-[70vh] md:h-[100vh] bg-top bg-cover">
                    <img src={smokeImg} alt="" className='absolute top-0 left-0 w-full h-[120vh]' />
                    <div className="w-[85%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row items-center md:gap-[40px] mx-auto pt-6 relative">
                        <div className="w-[60%] flex flex-col items-center">
                            <h2 className="py-3 font-bold text-vivid-yangelo">ABOUT US</h2>
                            <p className="py-3 font-bold text-vivid-yangelo border-t-vivid-yangelo border-t-[3px]">PENTA FREIGHT</p>
                        </div>
                        <div className="">
                            <p className="text-center md:text-start md:text-[20px] text-[18px] md:text-2xl sm:text-xl font-light text-fiord">
                                Penta Freight provides reliable <span className="font-[700]">logistics solutions</span>, specializing in
                                temperature-sensitive shipments.We ensure safe, <span className="font-[700]">on-time delivery</span> worldwide.
                                Trust us for seamless supply chain management.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="home-about-us-section relative" id='home-about-us'>
                <div className="home-about-us-bg-img h-[70vh] md:h-[100vh] bg-top bg-cover">
                    <img src={smokeImg} alt="" className='absolute top-0 left-0 w-full h-[120vh]' />
                    <div className="w-[85%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row items-center md:gap-[40px] mx-auto pt-6 relative">
                        <div className="w-[60%] flex flex-col items-center">
                            <h2 className="py-3 font-bold text-vivid-yangelo">ABOUT US</h2>
                            <p className="py-3 font-bold text-vivid-yangelo border-t-vivid-yangelo border-t-[3px]">PENTA FREIGHT</p>
                        </div>
                        <div className="flex">
                            <p className="text-center md:text-start text-[16px] md:text-[20px] font-light text-fiord 
                                bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none 
                                    rounded-lg p-2 md:p-0"
                            >
                                Penta Freight provides reliable{" "}
                                <span className="font-[700]">logistics solutions</span>, specializing in
                                temperature-sensitive shipments. We ensure safe,{" "}
                                <span className="font-[700]">on-time delivery</span> worldwide. Trust us
                                for seamless supply chain management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ////////////// philosophy Section ////////////// */}
            <section className="home-philosophy-section">
                <div className="home-philosophy-bg-img bg-no-repeat bg-cover py-10 bg-fiord">
                    <div className="w-[85%] md:w-[60%] flex flex-col justify-center items-center text-center mx-auto">
                        <h2 className="mb-6 md:text-[36px] lg:text-[36px] text-[28px] font-[500] text-vivid-yangelo">
                            Our Philosophy
                        </h2>
                        <p className="text-white mb-6">
                            Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with
                            precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting
                            partnerships founded on trust and excellence.
                        </p>
                        <button className='primary-btn'>
                            <span data-title="Let's go!">Read more</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ////////////// Service & Why Us Section ////////////// */}
            <section className="home-service-n-why-us-section">

                {/* =============== SERVICE PART ================ */}
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center px-7 my-10">
                        <div className="flex-col md:flex-row justify-between items-start w-full">
                            <div className="flex items-center mb-4 md:mb-6">
                                <span className="black-dot"></span>
                                <span className="text-[20px] px-5 py-[2px] rounded-3xl border border-smooth-grey">Services</span>
                            </div>
                            <h2 className="lg:text-[36px] md:text-[32px] text-[24px] mt-[-10px]">
                                Seamless Solutions for
                                <br />
                                <span className="text-grey">Every Logistics Need</span>
                            </h2>
                        </div>
                        <p>Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and multimodal transport.</p>
                    </div>
                </div>

                {/* =============== CARD STACK PART ================ */}
                <div className="max-w-[1200px] mx-auto px-6 lg:px-14 xl:px-1">
                    <CardStack />
                </div>

                {/* =============== WHY US PART ================ */}
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid items-start lg:grid-cols-4 md:grid-cols-2 gap-x-0 lg:px-6 md:px-10 px-7 my-10">
                        <div className="h-full px-0 py-5 border-0 lg:border-r md:border-0 lg:py-10 md:py-10 lg:px-6 md:px-10">
                            <div className="flex items-center mb-4 md:mb-6">
                                <span className="black-dot"></span>
                                <span className="text-[20px] px-5 py-[2px] rounded-3xl border border-smooth-grey">Why us</span>
                            </div>
                            <h2 className="lg:text-[36px] md:text-[32px] text-[24px] mt-[-10px]">
                                Why choose
                                <br />
                                <span className="text-grey">Penta Freight.</span>
                            </h2>
                        </div>

                        <div className="h-full px-0 py-5 border-0 lg:border-r md:border-0 lg:py-10 md:py-10 lg:px-6 md:px-10">
                            <img src={whyIcon1} alt="why us icon" className='max-h-[60px] mb-4' />
                            <h3 className="mb-1 text-[20px]">Comprehensive Solutions</h3>
                            <p className="text-grey">
                                Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.
                            </p>
                        </div>

                        <div className="h-full px-0 py-5 border-0 lg:border-r md:border-0 lg:py-10 md:py-10 lg:px-6 md:px-10">
                            <img src={whyIcon2} alt="why us icon" className='max-h-[60px] mb-4' />
                            <h3 className="mb-1 text-[20px]">Expertise and Experience</h3>
                            <p className="text-grey">
                                Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.
                            </p>
                        </div>

                        <div className="h-full px-0 py-5 border-0 lg:border-r md:border-0 lg:py-10 md:py-10 lg:px-6 md:px-10">
                            <img src={whyIcon3} alt="why us icon" className='max-h-[60px] mb-4' />
                            <h3 className="mb-1 text-[20px]">State-of-the-Art Facilities</h3>
                            <p className="text-grey">
                                Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* =============== ACHIEVEMENTS SECTION ================ */}
            < section className="home-achievement-section" >
                <div className="home-achievement-bg-img bg-no-repeat bg-cover bg-fiord">
                    <div className="flex flex-col lg:flex-row md:gap-x-14 max-w-[1200px] mx-auto justify-between items-center md:px-10 lg:px-6 px-6 py-20">
                        <div className="md:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                            <h2 className="mb-6 md:text-[36px] lg:text-[36px] text-[28px] font-[500] text-vivid-yangelo">
                                Our Achievements
                            </h2>
                            <p className="text-white mb-6">
                                Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
                            </p>
                        </div>

                        <div className="w-full md:w-[60%] flex flex-col lg:flex-row justify-around lg:justify-around gap-10 lg:gap-20">
                            <div className="flex flex-col items-center gap-y-10 lg:items-start">
                                <div className="text-center lg:text-left">
                                    <div className="lg:text-[56px] text-[32px] text-white font-semibold">7+</div>
                                    <h4 className="text-[24px] md:text-[24px] text-white">Strategic Domestic Offices</h4>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="lg:text-[56px] text-[32px] text-white font-semibold">200+</div>
                                    <h4 className="text-[24px] md:text-[24px] text-white">Logistics Experts</h4>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-y-10 lg:items-start">
                                <div className="text-center lg:text-left">
                                    <div className="lg:text-[56px] text-[32px] text-white font-semibold">USA</div>
                                    <h4 className="text-[24px] md:text-[24px] text-white">Global presence</h4>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="lg:text-[56px] text-[32px] text-white font-semibold">50+</div>
                                    <h4 className="text-[24px] md:text-[24px] text-white">Awards & Accolades</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============== REVIEWS SECTION ================ */}
            < section className="home-review-section" >
                <div className="max-w-[1200px] mx-auto my-20">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 px-7 my-10">

                        {/* =============== REVIEWS PART ================ */}
                        <div className="md:w-[35%] review-sticky">
                            <div className="flex items-center mb-4 md:mb-6">
                                <span className="black-dot"></span>
                                <span className="text-[20px] px-5 py-[2px] rounded-3xl border border-smooth-grey">Reviews</span>
                            </div>
                            <h2 className="lg:text-[36px] md:text-[32px] text-[24px] mt-[-10px]">
                                Hear From Our Satisfied
                                <br />
                                <span className="text-grey">Clients Worldwide.</span>
                            </h2>
                            <p>Explore what industry leaders and long-term partners say about our commitment to excellence and innovation.</p>
                        </div>

                        {/* =============== REVIEWS CARDS PART TILL TABS SIZE ================ */}
                        <div className="w-[60%] lg:w-[55%] md:flex flex-wrap justify-between hidden">
                            <div className="w-[45%] h-max review-card px-6 py-8 rounded-[16px]">
                                <img src={cargoImg} alt="Lufthansa Cargo Icon" className='mx-auto mb-6' />
                                <p className="max-h-[90%] text-center">
                                    “Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa
                                    Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference
                                    to our business. Their continuous high focus on customer service and their strive towards individual
                                    solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various
                                    ways: They were amongst the first forwarders to become our Premium Partner and so far they are the
                                    only one in India.... ”
                                </p>
                                <h4 className="text-[20px] font-[400] mt-4 text-center">Frank Naeve</h4>
                                <p className="text-center">Vice President Asia Pacific</p>
                            </div>

                            <div className="w-[45%] h-max review-card px-6 py-8 rounded-[16px] mt-[300px]">
                                <img src={sunLogo} alt="Lufthansa Cargo Icon" className='mx-auto mb-6' />
                                <p className="max-h-[90%] text-center">
                                    “We highly regard Penta Freight's professionalism and knowledge in the freight field. Their team
                                    takes the work load and worry off our shoulders. For about two decades we have been satisfied by
                                    the flexible, reliable and trustworthy service and excellent quality of work. One key feature that
                                    Penta Freight portrays is that they understand our needs and put their best efforts in making
                                    thing possible. They have continued to innovate and change with the freight industry.... ”
                                </p>
                                <h4 className="text-[20px] font-[400] mt-4 text-center">Frank Naeve</h4>
                                <p className="text-center">General Manager Head - Export Logistics</p>
                            </div>

                            <div className="w-[45%] h-max review-card lg:mt-[-200px] px-6 py-8 rounded-[16px]">
                                <img src={watson} alt="Lufthansa Cargo Icon" className='mx-auto mb-6' />
                                <p className="max-h-[90%] text-center">
                                    “Penta Freight has been one of our export LSP’s for several years and our experience with them
                                    has been consistently good. Besides having strong relationships with airlines to obtain
                                    competitive rates, Penta Freight has the ability to get things done in a compliant manner.
                                    In addition, an excellent service level and professional relationship was maintained throughout
                                    the course of export operations. Best wishes for all success. ”
                                </p>
                                <h4 className="text-[20px] font-[400] mt-4 text-center">Ryan Veigas</h4>
                                <p className="text-center">Vice President - Supply Chain & Procurement</p>
                            </div>

                            <div className="w-[45%] mt-[50px] h-max review-card px-6 py-8 rounded-[16px]">
                                <img src={cargoImg} alt="Lufthansa Cargo Icon" className='mx-auto mb-6' />
                                <p className="max-h-[90%] text-center">
                                    “Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa
                                    Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference
                                    to our business. Their continuous high focus on customer service and their strive towards individual
                                    solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various
                                    ways: They were amongst the first forwarders to become our Premium Partner and so far they are the
                                    only one in India.... ”
                                </p>
                                <h4 className="text-[20px] font-[400] mt-4 text-center">Frank Naeve</h4>
                                <p className="text-center">Vice President Asia Pacific</p>
                            </div>
                        </div>

                        {/* =============== REVIEWS CARDS PART FOR MOBILE SIZE ================ */}
                        <div className="block md:hidden w-full">
                            <CustomerSwiper slidesPerView={1} navigation spaceBetween={10} speed={500}>
                                {reviewsCard.map((review) => (
                                    <SwiperSlide key={review.id}>
                                        <div className="review-card px-6 py-8 rounded-[16px] border">
                                            <img src={review.img} alt="Lufthansa Cargo Icon" className='mx-auto mb-6' />
                                            <h4 className="text-[20px] font-[400] mt-4 text-center">{review.name}</h4>
                                            <p className="text-center text-bold-grey mb-6">{review.designation}</p>
                                            <p className="max-h-[90%] text-center text-bold-grey">
                                                {review.para}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </CustomerSwiper>
                        </div>
                    </div>
                </div>
            </section >

            {/* =============== CERTIFICATIONS SECTION ================ */}
            < section className="home-certifications-section" >
                <div className="home-certifications-bg-img bg-no-repeat bg-cover py-10 bg-fiord">
                    <div className="max-w-[1200px] mx-auto mt-[30px]">
                        <div className="text-center">
                            <h2 className="mb-6 md:text-[36px] lg:text-[36px] text-[28px] font-[500] text-vivid-yangelo">
                                Certifications
                            </h2>
                            <p className="text-white mb-6">
                                Certified excellence, ensuring compliance, quality, and global logistics reliability.
                            </p>
                            <div className="mt-10">
                                <CustomerSwiper autoplay={true} loop={true} spaceBetween={20} slidesPerView={"auto"} delay={0} speed={3500}>
                                    {certificationSliderImg.map((img) => (
                                        <SwiperSlide key={img.id}>
                                            <div className="w-[140px] md:w-[250px] h-[140px] md:h-[250px] bg-white flex items-center justify-center gap-4 relative rounded-2xl p-5 md:px-8 md:py-6">
                                                <div className="h-full flex flex-row items-center justify-center mt-6">
                                                    <img src={img.img} alt="accai logo" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </CustomerSwiper>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            {/* =============== AWARDS SECTION ================ */}
            < section className="home-awards-section" >
                <div className="py-5">
                    <div className="max-w-[1200px] mx-auto mt-[60px] lg:px-6 md:px-10 px-6">
                        <div className="">
                            <div className="flex items-center mb-4 md:mb-6">
                                <span className="black-dot"></span>
                                <span className="text-[20px] px-5 py-[2px] rounded-3xl border border-smooth-grey">Awards</span>
                            </div>
                            <h2 className="lg:text-[36px] md:text-[32px] text-[24px] mt-[-10px]">
                                Proudly Recognized with Prestigious
                                <br />
                                <span className="text-grey">Awards and Accolades.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-2">
                            {awardCard.map((award) => (
                                <div key={award.id} className="block w-full h-full p-2">
                                    <div className="award-card bg-white rounded-2xl h-full w-full p-8">
                                        <div className="flex justify-center min-h-[100px] mb-3">
                                            <img src={award.img} alt="emirates sky cargo logo" className='mt-1 object-contain max-h-[100px] w-auto' />
                                        </div>
                                        {award.para.map((item, index) => (
                                            <p key={index} className="mt-0 tracking-wide text-sm">{item}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* =============== GLOBAL FOOTPRINT SECTION ================ */}
            < section className="home-global-footprint-section" >
                <div className="home-global-footprint-bg-img bg-no-repeat bg-cover py-10 bg-fiord">
                    <div className="max-w-[1200px] mx-auto text-center">
                        <h2 className="mb-6 md:text-[36px] lg:text-[36px] text-[28px] font-[500] text-vivid-yangelo">
                            Our Global Footprint
                        </h2>
                        <div>
                            <img src={MapImg} alt="global footprint map" className=' lg:w-[70%] lg:mx-auto opacity-100 object-cover' />
                        </div>
                    </div>
                </div>
            </section >

        </div>

    )
}

export default Home