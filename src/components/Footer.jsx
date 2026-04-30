import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="border-t border-[#E6D39C] bg-[#FCFAF5] px-6 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left mt-5">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-1.5 mb-5">
            <img
              className="w-35 h-20"
              src="/logo.png"
              loading="lazy"
              alt="logo"
            />
          </div>
          <p className="text-md font-semibold mb-4">
            Signature drinks and flavorful bites for every occasion
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li><HashLink to="/#" className="hover:text-[#A7862C]">Home</HashLink></li>
            <li><HashLink to="#about" className="hover:text-[#A7862C]">About</HashLink></li>
            <li><HashLink to="#menu" className="hover:text-[#A7862C]">Menu</HashLink></li>
            <li><HashLink to="#contact" className="hover:text-[#A7862C]">Contact</HashLink></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="#menu" className="hover:text-[#A7862C]">Hot & Cold Sandwiches</a></li>
            <li><a href="#menu" className="hover:text-[#A7862C]">Street Food</a></li>
            <li><a href="#menu" className="hover:text-[#A7862C]">Mishti Milkshakes</a></li>
            <li><a href="#menu" className="hover:text-[#A7862C]">Cold Drinks</a></li>
            <li><a href="#menu" className="hover:text-[#A7862C]">Ice Coffee</a></li>
            <li><a href="#menu" className="hover:text-[#A7862C]">100% Fresh Juice</a></li>
            <li><a href="#menu" className="hover:text-[#A7862C]">Tea & Coffee</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-3 text-md font-semibold">
            <li className="flex items-start gap-4">
              <FiMapPin className="mt-3 text-[#A7862C] text-2xl" />
              <a
                href="https://maps.google.com/?q=Stamford,England"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A7862C]"
              >
                Our Location
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-[#A7862C]" />
              <a href="tel:077000000" className="hover:text-[#A7862C]">
                077000000
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-[#A7862C] text-xl" />
              <a
                href="mailto:tigrisaurum@gmail.com"
                className="hover:text-[#A7862C] text-lg md:text-base lg:text-lg"
              >
                tigrisaurum@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-3 mt-8 border-[#E6D39C]" />

      <div className="text-center font-bold">
        <p>&copy; {new Date().getFullYear()} Tigris Aurum. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold mt-3">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms-and-conditions"
            className="hover:text-[#A7862C] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link
            to="/privacy-policy"
            className="hover:text-[#A7862C] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely */}
        <p className="text-center font-semibold p-2">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#A7862C]"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
