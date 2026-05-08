import React from 'react'
import PentaUsLogo from "../assets/images/png/pentauslogo.png"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <img src={PentaUsLogo} alt="PentaUsLogo" className='fixed left-0 top-1/2 -translate-y-1/2 z-10 w-[25px] lg:w-[38px]' />
                <div className="mt-[64px]">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout