import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Ticker = ({ items, reverse, scrollYProgress }) => {
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, reverse ? -600 : 600]
    );

    return (
        <div className="overflow-hidden border-y">
            <motion.div style={{ x }} className="flex">

                {[...Array(2)].map((_, i) =>
                    items.map((item, idx) => (
                        <div
                            key={`${i}-${idx}`}
                            className="min-w-[250px] md:min-w-[300px] h-[120px] flex items-center justify-center border-r text-center px-10 py-5"
                        >
                            <h4 className="text-[18px] md:text-[24px] font-medium">
                                {item}
                            </h4>
                        </div>
                    ))
                )}

            </motion.div>
        </div>
    );
};

const TextScroll = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"],
    });

    const row1 = [
        "Tailored Freight Solutions",
        "Robust Load Security",
        "Expert Logistics Support",
    ];

    const row2 = [
        "Flexible Shipping Schedules",
        "Volume Discounts",
        "End-to-End Supply Chain Management",
    ];

    return (
        <div ref={ref} className="py-10 md:py-20">

            <Ticker
                items={row1}
                reverse={true}
                scrollYProgress={scrollYProgress}
            />

            <Ticker
                items={row2}
                reverse={false}
                scrollYProgress={scrollYProgress}
            />

        </div>
    );
};

export default TextScroll;