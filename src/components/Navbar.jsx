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
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#C9A84C]/25 bg-[#151515]/92 text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-0.5 px-4 md:px-6 lg:px-0">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="tigrisaurumLogo"
            className="w-50 h-20 object-contain"
            loading="lazy"
          />
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
            className="flex items-center gap-2 rounded-md bg-[#E8D28A] px-5 py-2 font-semibold text-black shadow transition hover:bg-[#E8D28A]"
            style={{ color: "#111111" }}
          >
            <FiShoppingCart className="text-white" />
            <span className="text-white">Order Now</span>
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden rounded-md border border-[#C9A84C]/40 bg-white/10 p-2 text-[#E8D28A] shadow-sm transition hover:bg-[#C9A84C] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#E8D28A]/70"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-[#C9A84C]/15 bg-[#151515] px-6 py-5 space-y-4">
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
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#E8D28A] px-4 py-3 text-base font-bold text-black shadow transition hover:bg-[#F1E2A8]"
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
