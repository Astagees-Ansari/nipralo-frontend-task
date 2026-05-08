import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pentaImg from "../assets/images/png/pentaImg.png"
import "../assets/styles/header.css";

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
        <header className="flex justify-between lg:justify-center items-center w-full h-[64px] bg-white text-black px-6 fixed top-0 navbar">
            <nav className="flex items-center justify-between px-6 h-16">
                <ul className="flex items-center gap-8 text-gray-800 font-medium">
                    <li className="nav-item border-y lg:border-0">
                        <Link
                            to={"/"}
                            className={`${pathname === "/" && "active-link"}`}
                            onClick={() => setNavbarToggle(!navbarToggle)}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item border-y lg:border-0">
                        <Link
                            to={"/pentakhul"}
                            className={`${pathname === "/pentakhul" && "active-link"}`}
                            onClick={() => setNavbarToggle(!navbarToggle)}
                        >
                            <img src={pentaImg} alt="pentakhul Image" className="h-[16px] mt[-2px]" />
                        </Link>
                    </li>
                    <li className="nav-item border-y lg:border-0">
                        <Link
                            to={"/industries"}
                            className={`${pathname === "/industries" && "active-link"}`}
                            onClick={() => setNavbarToggle(!navbarToggle)}
                        >
                            Industries
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;