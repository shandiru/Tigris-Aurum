import React, { useState, useEffect } from "react";
import { FaCheck, FaInstagram } from "react-icons/fa";

const Mission = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const tabs = [
        { id: "mission", label: "OUR MISSION" },
        { id: "vision", label: "OUR VISION" },
    ];

    return (
        <section className="relative w-full py-16 px-4 md:px-12 bg-white overflow-hidden">
            <style>
                {`
                  @keyframes pulseSpin {
                    0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
                    40%  { transform: rotate(180deg) scale(1.6); opacity: 1; }
                    70%  { transform: rotate(270deg) scale(1.2); opacity: 0.7; }
                    100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
                  }
                  .bg-icon {
                    position: absolute;
                    color: #E8D28A !important;
                    animation: pulseSpin 25s ease-in-out infinite;
                    filter: drop-shadow(0 0 18px rgba(232, 210, 138, 0.8));
                    z-index: 0;
                    pointer-events: none;
                  }
                  @media (max-width: 768px) {
                    .bg-icon {
                      width: 2rem !important;
                      height: 2rem !important;
                      animation-duration: 18s;
                      opacity: 0.15;
                    }
                  }
                `}
            </style>

            {/*Dotted background pattern */}
            <div
                className="absolute inset-0 bg-[radial-gradient(#E8D28A_2px,transparent_2px)] [background-size:20px_20px]"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskImage:
                        "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
                    maskRepeat: "no-repeat",
                    maskSize: "cover",
                }}
            />


            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center z-10">
                {/* Left Section - Tabs */}
                <div className="flex-1 max-w-2xl" data-aos="fade-right">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">
                        SAVOR THE <span className="text-[#C9A84C]">FLAVOR</span>,<br /> ONE SIP AT A TIME.
                    </h2>

                    <div className="space-y-4">
                        {tabs.map((tab) => (
                            <div key={tab.id} className="transition-all">
                                <button
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md font-bold text-lg transition-all duration-300
                    ${activeTab === tab.id
                                            ? "bg-[#C9A84C] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                                            : "bg-transparent text-gray-800 border-b hover:bg-gray-100 hover:shadow-md hover:scale-[1.01]"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span>{tab.label}</span>
                                    <span className="text-2xl font-bold">{activeTab === tab.id ? "–" : "+"}</span>
                                </button>

                                {/* Show Content when Active */}
                                {activeTab === tab.id && (
                                    <div 
                                        className="mt-2 p-4 bg-gray-900 text-white rounded-b-md shadow-md hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] transition-all duration-300"
                                        data-aos="fade-down"
                                        data-aos-duration="500"
                                    >
                                        <p>
                                            {tab.id === "mission"
                                                ? "We are dedicated to serving the best chai in town, brewed with care and tradition, paired with vibrant street food that delights the senses. Our mission is to create a welcoming space where people can gather, share stories, and experience the rich aromas, flavors, and culture that chai has always represented."
                                                : "To become the most loved destination for chai and street food, where every sip and every bite brings people closer to the warmth, aroma, and joy of authentic flavors."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Green Box with Image */}
                <div className="relative z-10" data-aos="fade-left">
                    <div className="bg-[#C9A84C] rounded-2xl p-8 sm:p-18 text-white relative overflow-hidden min-h-[340px] pr-28 md:pr-32 shadow-lg hover:shadow-[0_12px_32px_rgba(201,168,76,0.4)] transition-all duration-500 hover:scale-[1.02] group">
                        {/* Animated linear overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-snug relative z-10">
                            BREWED WITH LOVE, <br />
                            SERVED WITH A SMILE
                        </h3>

                        <div className="space-y-3 mb-6 relative z-10">
                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-full text-sm w-fit shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                                <FaCheck className="text-[#C9A84C]" />
                                Organic & fresh Coffee
                            </div>
                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-full text-sm w-fit shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                                <FaCheck className="text-[#C9A84C]" />
                                Premium Coffee
                            </div>
                        </div>

                        <p className="font-medium text-sm mb-2 relative z-10">SOCIAL MEDIA</p>
                        <div className="flex gap-3 mb-4 relative z-10">
                            <a
                                href="https://www.instagram.com/samochaihouse/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black p-2 rounded-full hover:text-pink-600 hover:shadow-md hover:scale-110 transition-all duration-300"
                            >
                                <FaInstagram size={14} />
                            </a>
                        </div>
                    </div>

                    {/* COFFEE CUP IMAGE OUTSIDE CARD */}
                    <img
                        src="/new2.png"
                        loading="lazy"
                        alt="Coffee Cup"
                        className="absolute left-[180px] md:left-[260px] bottom-[-0px] md:bottom-[-10px] w-[130px] md:w-[200px] z-20 hover:rotate-12 hover:scale-110 active:rotate-12 active:scale-110 transition-all duration-500 drop-shadow-xl"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mission;