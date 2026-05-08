import React from "react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerSwiper = ({
    children,
    slidesPerView = 3,
    spaceBetween = 20,
    autoplay = false,
    loop = false,
    navigation = false,
    pagination = false,
    scrollbar = false,
    breakpoints = {},
    delay = 2500,
    speed = 0,
}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop={loop}
            navigation={navigation}
            pagination={pagination ? { clickable: true } : false}
            scrollbar={scrollbar ? { draggable: true } : false}
            speed={speed}
            autoplay={
                autoplay
                    ? {
                        delay: delay,
                        disableOnInteraction: false,
                    }
                    : false
            }
            breakpoints={breakpoints}
        >
            {children}
        </Swiper>
    );
};

export default CustomerSwiper;