// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import pentaImg from "../assets/images/png/pentaImg.png"
// import "../assets/styles/header.css";

// const Header = () => {

//     const { pathname } = useLocation();

//     const [showNavbar, setShowNavbar] = useState(true);
//     const lastScrollY = useRef(0);
//     const [navbarToggle, setNavbarToggle] = useState(false);

//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;

//         if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

//         if (currentScrollY < 80) {
//             setShowNavbar(true);
//         } else if (currentScrollY > lastScrollY.current) {
//             setShowNavbar(false);
//         } else {
//             setShowNavbar(true);
//         }

//         lastScrollY.current = currentScrollY;
//     }

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//         // eslint-disable-next-line
//     }, [])


//     return (
//         <header className="flex justify-between lg:justify-center items-center w-full h-[64px] bg-white text-black px-6 fixed top-0 navbar">
//             <nav className="flex items-center justify-between px-6 h-16">
//                 <ul className="flex items-center gap-8 text-gray-800 font-medium">
//                     <li className="nav-item border-y lg:border-0">
//                         <Link
//                             to={"/"}
//                             className={`${pathname === "/" && "active-link"}`}
//                             onClick={() => setNavbarToggle(!navbarToggle)}
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li className="nav-item border-y lg:border-0">
//                         <Link
//                             to={"/pentakhul"}
//                             className={`${pathname === "/pentakhul" && "active-link"}`}
//                             onClick={() => setNavbarToggle(!navbarToggle)}
//                         >
//                             <img src={pentaImg} alt="pentakhul Image" className="h-[16px] mt[-2px]" />
//                         </Link>
//                     </li>
//                     <li className="nav-item border-y lg:border-0">
//                         <Link
//                             to={"/industries"}
//                             className={`${pathname === "/industries" && "active-link"}`}
//                             onClick={() => setNavbarToggle(!navbarToggle)}
//                         >
//                             Industries
//                         </Link>
//                     </li>
//                 </ul>

//             </nav>
//         </header>
//     );
// };

// export default Header;


import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import PentaKuhlImg from "../assets/images/png/pentaImg.png"
import "../assets/styles/header.css"

const Header = () => {
    const { pathname } = useLocation();

    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const [navbarToggle, setNavbarToggle] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

        if (currentScrollY < 80) {
            setShowNavbar(true);
        } else if (currentScrollY > lastScrollY.current) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        lastScrollY.current = currentScrollY;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line
    }, [])

    return (
        <header>
            <nav className={`flex justify-between lg:justify-center items-center w-full h-[64px] bg-white text-black px-6 fixed top-0 z-[999] navbar
          ${showNavbar ? "show" : "hide"}
        `}>
                <ul className={`flex list-none gap-[40px] text-black pb-40 md:pb-0 mt-[64.1px] md:mt-[63px] lg:mt-0 nav-links 
            ${navbarToggle ? "active" : ""}
          `}>
                    <li className="nav-item border-y lg:border-0">
                        <Link
                            to={"/"}
                            className={`${pathname === "/" && "active-link"}`}
                            onClick={() => setNavbarToggle(!navbarToggle)}
                        >
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item border-y lg:border-0">
                        <Link
                            to={"/pentakhul"}
                            className={`flex items-center lg:h-full`}
                            onClick={() => setNavbarToggle(!navbarToggle)}
                        >
                            <img src={PentaKuhlImg} alt="PentaKuhl" className='h-[16px] mt-[-2px]' />
                        </Link>
                    </li>
                    <li className="nav-item border-y lg:border-0">
                        <Link
                            to={"/industries"}
                            className={`${pathname === "/industries" && "active-link"}`}
                            onClick={() => setNavbarToggle(!navbarToggle)}
                        >
                            INDUSTRIES
                        </Link>
                    </li>

                    <li className="flex flex-col pl-4 pr-2 mt-20 lg:hidden gap-y-2">
                        <h4 className="text-xl font-semibold">Contact Info</h4>
                        <a
                            href="tel: +91 22-6222-6222"
                            target='_blank'
                            rel='noreferrer'
                            className='underline underline-offset-2'
                        >
                            +91 22-6222-6222
                        </a>
                        <a
                            href="https://maps.app.goo.gl/9x1ZXMRceFtNSWby9"
                            target='_blank'
                            rel='noreferrer'
                            className='underline underline-offset-2'
                        >
                            902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059
                        </a>
                    </li>
                </ul>

                <div className="lg:hidden bg-[#f06c30] text-white px-3 pt-[8px] sm:pt-2 pb-[6px] rounded-[12px]">
                    <Link href="/" className="w-full h-full mt-2 font-semibold text-white">Contact</Link>
                </div>

                <div className={`navbar-menu-icon ${navbarToggle ? "open" : ""}`} onClick={() => setNavbarToggle(!navbarToggle)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
