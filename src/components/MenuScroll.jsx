import React, { useRef, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const topImages = [
  "/House Special.png",
  "/hashbrown.png",
  "/Fruit n nut.png",
  "/choc.png",
  "/Sausage.png",
  "/Samosas.png",
];

const bottomImages = [
  "/Chicken.png",
  "/croissant.png",
  "/masala.png",
  "/Pepperoni and Cheese.png",
  "/Pepperoni.png",
  "/Salmon.png",
  "/tuna.png",
];

const MenuScroll = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full overflow-hidden bg-white py-6 sm:py-8 md:py-10 relative"
    >
      {/* Center button */}
      <div className="absolute inset-0 flex mt-6 sm:mt-8 md:mt-10 items-center justify-center z-20 pointer-events-none">
        <HashLink to="/#menu" smooth className="pointer-events-auto">
          <button className="bg-[#C8A950] text-base sm:text-lg md:text-xl text-black font-semibold px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-md hover:bg-[#ebc14e] transition">
            Explore Menu
          </button>
        </HashLink>
      </div>

      {/* Top row */}
      <div className="relative w-full overflow-hidden mt-6 sm:mt-8 md:mt-10">
        <div
          className={`flex gap-4 md:gap-6 ${isVisible ? "animate-scroll-left" : ""
            }`}
        >
          {topImages.concat(topImages).concat(topImages).map((src, index) => (
            <img
              key={`top-${index}`}
              src={src}
              alt={`Food item ${index + 1}`}
              className="w-64 h-44 sm:w-80 sm:h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] object-cover rounded-lg sm:rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative w-full overflow-hidden mt-3 sm:mt-4">
        <div
          className={`flex gap-4 md:gap-6 ${isVisible ? "animate-scroll-right" : ""
            }`}
        >
          {bottomImages.concat(bottomImages).concat(bottomImages).map((src, index) => (
            <img
              key={`bottom-${index}`}
              src={src}
              alt={`Food item ${index + 1}`}
              className="w-64 h-44 sm:w-80 sm:h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] object-cover rounded-lg sm:rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuScroll;
