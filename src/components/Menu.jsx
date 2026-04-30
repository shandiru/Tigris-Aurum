import React, { useEffect, useState } from "react";
import { categories, allItems } from "../components/MenuData";

const Menu = () => {
  const [selected, setSelected] = useState("Hot & Cold Sandwiches");

  const filtered =
    selected === ""
      ? allItems
      : allItems.filter((item) => item.category === selected);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-aos]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section
      id="menu"
      className="relative w-full scroll-m-10 bg-[#FCFAF5] py-16 px-6"
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-bold glow-effect">
          Menu
        </h2>
        <p data-aos="fade-up" className="mt-2">
          Explore the signature selection from Tigris Aurum
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`category-button px-4 py-2 rounded-md text-sm font-medium ${selected === cat
                ? "bg-[#E8D28A] text-black pulse-effect active"
                : "bg-white text-[#1A1A1A] border border-[#E5D5A3]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="menu-card bg-white rounded-2xl border border-[#E8DAB0] shadow-lg overflow-hidden"
          >
            <div className="relative overflow-hidden ">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-60 mx-auto mt-5 rounded-md h-70 object-center transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 shimmer-effect opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 pt-10">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>
                <span className="text-[#A7862C] font-semibold">
                  {item.price}
                </span>
              </div>
              {item.desc && (
                <p className="text-sm">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
