import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-[#C9A84C] text-white px-6 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left mt-5">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-1.5 mb-5">
            <img
              className="w-35 h-7"
              src="/logo.png"
              loading="lazy"
              alt="logo"
            />
             <div className="italic text-sm">Chai House</div>
          </div>
          <p className="text-md font-semibold mb-4 text-white">
            Samosa and Chai for every occasion
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/samochaihouse/"
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
            <li><HashLink to="/#" className="hover:text-[#E8D28A]">Home</HashLink></li>
            <li><HashLink to="#about" className="hover:text-[#E8D28A]">About</HashLink></li>
            <li><HashLink to="#menu" className="hover:text-[#E8D28A]">Menu</HashLink></li>
            <li><HashLink to="#contact" className="hover:text-[#E8D28A]">Contact</HashLink></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="#menu" className="hover:text-[#E8D28A]">Hot & Cold Sandwiches</a></li>
            <li><a href="#menu" className="hover:text-[#E8D28A]">Street Food</a></li>
            <li><a href="#menu" className="hover:text-[#E8D28A]">Mishti Milkshakes</a></li>
            <li><a href="#menu" className="hover:text-[#E8D28A]">Cold Drinks</a></li>
            <li><a href="#menu" className="hover:text-[#E8D28A]">Ice Coffee</a></li>
            <li><a href="#menu" className="hover:text-[#E8D28A]">100% Fresh Juice</a></li>
            <li><a href="#menu" className="hover:text-[#E8D28A]">Tea & Coffee</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-3 text-md font-semibold">
            <li className="flex items-start gap-4">
              <FiMapPin className="mt-3 text-white text-2xl" />
              <a
                href="https://maps.app.goo.gl/UjXrLfUgafhjnzmQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E8D28A]"
              >
                9a Great Central Road, Loughborough, England, LE11 1RW
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-white" />
              <a href="tel:+447850053653" className="text-white hover:text-[#E8D28A]">
                07850 053653
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-white text-xl" />
              <a
                href="mailto:samochaihouse@gmail.com"
                className="text-white hover:text-[#E8D28A] text-lg md:text-base lg:text-lg"
              >
                samochaihouse@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-3 mt-8 border-[#E8D28A]" />

      <div className="text-center text-white font-bold">
        <p>&copy; {new Date().getFullYear()} SAMOCHAI. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold mt-3">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms-and-conditions"
            className="text-white hover:text-[#E8D28A] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-white">|</span>
          <Link
            to="/privacy-policy"
            className="text-white hover:text-[#E8D28A] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely */}
        <p className="text-center font-semibold text-white p-2">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-[#E8D28A]"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
