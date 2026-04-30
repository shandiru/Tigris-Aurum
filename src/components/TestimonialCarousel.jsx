import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    name: "Customer One",
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    name: "Customer Two",
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    name: "Customer Three",
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    name: "Customer Four",
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.`,
    name: "Customer Five",
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">

      {/* âœ… Dotted Background */}
      <div
        className="absolute inset-0 bg-[radial-linear(#C9A84C_2px,transparent_2px)] [background-size:20px_20px] z-0"
        style={{
          WebkitMaskImage:
            "linear-linear(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-linear(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />

      {/* Keyframe Animation Styles */}
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
            color: #C9A84C !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(201,168,76,0.8));
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-black font-semibold tracking-widest uppercase text-lg">
            Our Testimonials
          </p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 mt-20 -translate-y-1/2 bg-[#C9A84C] p-3 rounded-full shadow-md hover:bg-[#E8D28A] hover:text-black text-white transition z-20 group"
        >
          <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 mt-20 -translate-y-1/2 bg-[#C9A84C] p-3 rounded-full shadow-md hover:bg-[#E8D28A] hover:text-black text-white transition z-20 group"
        >
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-8 hide-scrollbar"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white  rounded-2xl shadow-lg overflow-hidden hover:shadow-[#C9A84C] relative snap-start"
            >
              {/* Red Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-t-[#E8D28A] border-r-[80px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-white p-1 bg-[#E8D28A]"></div>
                  </div>

                  <div className="flex-1 bg-gray-100  py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 ">{t.name}</h3>
                    <p className="text-gray-600  text-sm">Client</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">â˜…</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700  text-sm sm:text-base leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
