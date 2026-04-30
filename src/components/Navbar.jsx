import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/#" },
    { name: "About", to: "/#about" },
    { name: "Menu", to: "/#menu" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-[#C9A84C] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-0">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Chai House Logo"
            className="w-55 h-8 object-contain"
            loading="lazy"
          />
          <div className="text-sm italic">Chai House</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              className="relative hover:text-[#E8D28A] transition-colors"
            >
              {link.name}
            </HashLink>
          ))}
        </div>

        {/* Desktop Order Button */}
        <div className="hidden lg:block">
          <HashLink
            smooth
            to="/#contact"
            className="flex items-center gap-2 bg-white text-[#1A1A1A] px-5 py-2 rounded-md font-semibold shadow hover:bg-[#E8D28A] hover:text-black transition"
          >
            <FiShoppingCart />
            Order Now
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-gradient-to-b from-black to-[#A7862C] px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              smooth
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium hover:text-[#E8D28A]"
            >
              {link.name}
            </HashLink>
          ))}

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 bg-white text-[#1A1A1A] px-4 py-2 rounded-md font-semibold shadow hover:bg-[#F6EFCB] transition"
          >
            <FiShoppingCart />
            Order Now
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
