import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-5 bg-white">
      {/* Large Decorative 404 */}
      <h1 className="text-8xl md:text-9xl mt-10 font-black text-[#C8A950] mb-2">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
        Oops! Page Not Found
      </h2>
      
      <p className="text-base md:text-lg text-[#333333] max-w-md mb-8">
        The link you followed might be broken, or the page may have been removed. 
        Let's get you back to the chai!
      </p>

      {/* Button */}
      <Link 
        to="/" 
        className="px-8 py-3 bg-[#C8A950] text-[#111111] font-bold rounded-full transition-all duration-300 hover:bg-[#E8D28A] hover:scale-105 shadow-lg active:scale-95"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;