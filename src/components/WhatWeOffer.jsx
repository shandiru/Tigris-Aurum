import React, { useEffect, useState } from "react";

export default function WhatWeOffer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const services = [
        {
            video: "/s1.mp4",
            title: "Authentic Sylheti Street-Food Roots",
            description:
                "Born from the vibrant tea stalls and street-food culture of Sylhet, bringing real flavours, real warmth, and real community to every cup and bite.",
        },
        {
            video: "/s2.mp4",
            title: "Chai Crafted From the Heartland of Tea",
            description:
                "Sylhet grows most of Bangladesh's tea — and that rich, aromatic heritage is poured directly into every cup you sip at SAMOCHAI.",
        },
        {
            video: "/s3.mp4",
            title: "Tradition Served With Modern Comfort",
            description:
                "We blend the soul of Sylheti street flavours with a modern twist, giving you nostalgia, culture, and comfort in every visit.",
        },
    ];

    // Auto-slide logic
    useEffect(() => {
        if (!hovered) {
            const timer = setInterval(() => {
                setActiveIndex((p) => (p + 1) % services.length);
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [hovered]);

    const getCardStyle = (index) => {
        const total = services.length;
        const offset = (index - activeIndex + total) % total;

        switch (offset) {
            case 0:
                return "scale-100 opacity-100 z-30"; // Center
            case 1:
                return "translate-x-[50%] sm:translate-x-[60%] md:translate-x-[70%] scale-90 sm:scale-95 opacity-50 sm:opacity-70 z-20"; // Right
            case total - 1:
                return "translate-x-[-50%] sm:translate-x-[-60%] md:translate-x-[-70%] scale-90 sm:scale-95 opacity-50 sm:opacity-70 z-20"; // Left
            default:
                return "opacity-0 scale-90 z-0";
        }
    };

    return (
        <section id="about" className="relative scroll-m-10 py-12 px-4 sm:px-6 md:px-12 overflow-visible bg-white">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Heading */}
                <span className="inline-block text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4 bg-[#E8D28A]/50 text-[#C8A950]">
                    Our Story
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#111111] px-2">
                    Why We're the Best in Street Food & Chai
                </h2>

                <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14 text-[#333333] px-2">
                    Born in the heart of Sylhet lively streets, SAMOCHAI isn't just a restaurant - it's a true reflection of the city's street food and chai culture.
                </p>

                {/* Card Slider */}
                <div
                    className="relative flex items-center justify-center h-[450px] sm:h-[480px] md:h-[520px] overflow-visible"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className={`absolute top-0 left-0 right-0 mx-auto w-[85%] xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[420px] transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] transform ${getCardStyle(
                                i
                            )}`}
                        >
                            <div className="rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 h-[380px] sm:h-[400px] md:h-[420px] flex flex-col border border-[#E8D9A8]/70 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(221,182,78,0.3)]">
                                {/* Video Header */}
                                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                                    <video
                                        src={s.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-4 sm:p-5 md:p-6 text-left flex flex-col justify-between flex-grow bg-[#C8A950]">
                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#111111]">
                                            {s.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm leading-relaxed text-gray-900">
                                            {s.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Buttons */}
                    <button
                        onClick={() =>
                            setActiveIndex(
                                (prev) => (prev - 1 + services.length) % services.length
                            )
                        }
                        aria-label="Previous slide"
                        className="absolute left-2 sm:left-4 md:left-6 mt-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md text-base sm:text-lg font-bold transition-all duration-300 hover:scale-110 active:scale-95 bg-white text-black bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
                        aria-label="Next slide"
                        className="absolute right-2 sm:right-4 md:right-6 mt-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md text-base sm:text-lg font-bold transition-all duration-300 hover:scale-110 active:scale-95 bg-white text-black bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center"
                    >
                        ›
                    </button>
                </div>

                {/* Dot Indicators for Mobile */}
                <div className="flex justify-center gap-2">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                                i === activeIndex
                                    ? "bg-[#E8D28A] w-6 sm:w-8"
                                    : "bg-[#E8D28A]/30"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}