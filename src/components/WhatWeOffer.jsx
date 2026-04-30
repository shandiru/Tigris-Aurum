import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhatWeOffer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const services = [
        {
            image: "/story.jpg", // Changed from video to image
            title: "Uncompromising Quality at the Source",
            description:
                "We don't settle for ordinary leaves or generic blends. Every tea and ingredient is carefully selected from the world's finest origins; because what goes in determines everything that comes out.",
        },
        {
            image: "/story.jpg", // Changed from video to image
            title: "Crafted With Mastery, Not Mass Production",
            description:
                "Each blend is refined through expertise and precision; never rushed, never replicated. Tigris Aurum is built on the belief that true quality cannot be scaled down.",
        },
        {
            image: "/story.jpg", // Changed from video to image
            title: "Luxury That Goes Beyond the Cup",
            description:
                "From the first pour to the final sip, we craft an experience; rich hot chocolates, rare teas, and indulgent milkshakes that don't just taste exceptional, they feel it.",
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
    }, [hovered, services.length]);

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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#111111] px-2">
                    Why Tigris Aurum Is in a <span className="text-[#C9A84C]!">Class </span>of Its Own
                </h2>

                <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14 text-[#333333] px-2">
                    Tigris Aurum isn't just a drink brand; it's a standard. Every blend, every batch, every sip is a testament to what premium truly means.
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
                                {/* Image Header (Replaced Video) */}
                                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                                    <img
                                        src={s.image}
                                        alt={s.title}
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
                    <button
                        onClick={() =>
                            setActiveIndex(
                                (prev) => (prev - 1 + services.length) % services.length
                            )
                        }
                        aria-label="Previous slide"
                        className="absolute left-2 sm:left-4 md:left-6 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95 bg-white text-black bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
                        aria-label="Next slide"
                        className="absolute right-2 sm:right-4 md:right-6 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95 bg-white text-black bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${i === activeIndex
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