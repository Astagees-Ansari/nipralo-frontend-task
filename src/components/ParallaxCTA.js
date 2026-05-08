import React from "react";

const ParallaxCTA = ({
    title,
    subtitle,
    buttonText,
    image,
}) => {
    return (
        <section
            className="relative w-full h-[400px] flex items-center justify-center text-center text-white bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[800px] px-4">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl ">
                    {title}
                </h2>

                <p className="mb-6 text-lg md:text-xl">
                    {subtitle}
                </p>

                <button className='primary-btn'>
                    <span data-title="Let's go!">{buttonText}</span>
                </button>
            </div>
        </section>
    );
};

export default ParallaxCTA;