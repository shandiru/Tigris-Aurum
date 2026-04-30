import React from "react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fcfaf5_0%,#f4eddd_55%,#fffdf8_100%)] py-20 px-2">
      <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(circle at top left, rgba(201,168,76,0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(201,168,76,0.12), transparent 28%)" }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-1 items-center">
        {/* LEFT CONTENT */}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="mt-5 text-3xl italic sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rare Teas & <span className="text-[#C9A84C]!">Indulgences</span>, <br className="hidden sm:block" />
            Crafted Beyond Ordinary.
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg">
            Tigris Aurum brings you an exceptional collection of premium teas, velvety hot chocolates, and indulgent milkshakes; each one sourced with intention, blended with mastery, and served for those who demand more than the ordinary cup.
          </p>

          <a href="#menu">
            <button className="
              relative px-8 py-4 rounded-lg font-bold text-lg
              bg-gradient-to-r from-[#E8D28A] to-[#C9A84C]
              text-black
              overflow-hidden group
              transition-all duration-500
              hover:scale-105 hover:shadow-[0_16px_32px_rgba(201,168,76,0.28)]
            ">
              <span className="relative z-10">See Menu</span>

              {/* Shine */}
              <div className="absolute inset-0 bg-white/30 
                -translate-x-full group-hover:translate-x-0
                transition-transform duration-500">
              </div>
            </button>
          </a>
        </div>

        <ContactForm />

      </div>
    </section>
  );
};

export default HeroSection;
