import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { categories, allItems } from "./MenuData"; 

const MenuDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const currentCategory = categories[activeIndex];
  const currentItems = allItems.filter((item) => item.category === currentCategory);

  return (
    <div
      id="menu"
      className="w-full min-h-screen flex flex-col scroll-m-10 items-center justify-center bg-[#F4EDDD] bg-cover bg-center bg-no-repeat p-4 md:p-10"
      style={{
        backgroundImage: `linear-gradient(rgba(252,250,245,0.9), rgba(244,237,221,0.88)), url('/im2.png')`,
      }}
    >
      <h1 className="text-3xl md:text-5xl font-light mb-8 md:mb-12 uppercase tracking-widest text-center">
        The <span className="text-[#C9A84C]!">Tigris  Aurum</span> Collection
      </h1>

      {/* CATEGORY TABS - Mobile only */}
      <div className="flex lg:hidden w-full max-w-lg mb-6 gap-2 px-4 flex-wrap justify-center">
        {categories.map((cat, idx) => (
          <motion.button
            key={cat}
            onClick={() => setActiveIndex(idx)}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-2 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex-shrink-0 ${
              activeIndex === idx
                ? "bg-[#C8A950] text-black font-bold"
                : "bg-white/75 text-[#1A1A1A] hover:bg-white"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* LEFT CONTROLS - Desktop only */}
        <div className="hidden lg:flex flex-col gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="p-4 rounded-full bg-white/80 hover:bg-[#C8A950] text-[#1A1A1A] transition-all border border-[#E5D5A3]"
          >
            <ChevronUp size={32} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="p-4 rounded-full bg-white text-black hover:bg-[#C8A950] transition-all shadow-lg"
          >
            <ChevronDown size={32} />
          </motion.button>
        </div>

        {/* MENU CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col p-6 md:p-10 flex-grow"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-zinc-800 border-b pb-3">
                {currentCategory}
              </h2>

              {/* Scrollbar styled via Tailwind arbitrary values */}
              <div className="space-y-6 overflow-y-auto max-h-[500px] pr-2 
                [&::-webkit-scrollbar]:w-[5px] 
                [&::-webkit-scrollbar-track]:bg-zinc-100 
                [&::-webkit-scrollbar-thumb]:bg-zinc-300 
                [&::-webkit-scrollbar-thumb]:rounded-full">
                {currentItems.map((item, idx) => (
                  <div key={idx} className="group border-b border-zinc-100 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-zinc-900 text-lg group-hover:text-[#C8A950] transition-colors">
                          {item.title}
                        </h3>
                        {/* {item.desc && (
                          <p className="text-sm text-zinc-500 italic mt-1">{item.desc}</p>
                        )} */}
                      </div>
                      <span className="font-bold text-zinc-900 ml-4">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT SIDEBAR - Desktop only */}
        <div className="hidden lg:flex flex-col gap-4 items-start w-52">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.05 }}
              className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                activeIndex === idx
                  ? "text-[#1A1A1A] font-bold translate-x-2"
                  : "text-[#1A1A1A]/45 hover:text-[#C8A950]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDisplay;