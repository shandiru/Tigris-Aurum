import React, { useEffect } from "react";
import { Coffee, CupSoda } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

export default function CoffeeSection() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Add custom CSS styles */}
      <style jsx>{`
        /* AOS Animation Styles */
        [data-aos="fade-right"] {
          transform: translateX(-50px);
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }
        
        [data-aos="fade-left"] {
          transform: translateX(50px);
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }
        
        [data-aos="fade-up"] {
          transform: translateY(50px);
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }
        
        [data-aos="zoom-in"] {
          transform: scale(0.8);
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }

        .aos-animate[data-aos="fade-right"],
        .aos-animate[data-aos="fade-left"],
        .aos-animate[data-aos="fade-up"],
        .aos-animate[data-aos="zoom-in"] {
          transform: translateX(0) translateY(0) scale(1);
          opacity: 1;
        }

        /* Intense Glow Effects */
        @keyframes green-glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(255, 255, 255, 1),
              0 0 30px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 50px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes button-glow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(201, 168, 76, 0.6),
              0 0 40px rgba(201, 168, 76, 0.4),
              0 0 60px rgba(201, 168, 76, 0.2),
              0 4px 15px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(201, 168, 76, 1),
              0 0 60px rgba(201, 168, 76, 0.8),
              0 0 90px rgba(201, 168, 76, 0.6),
              0 0 120px rgba(201, 168, 76, 0.4),
              0 6px 20px rgba(0, 0, 0, 0.4);
          }
        }

        @keyframes image-glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(201, 168, 76, 0.5))
                    drop-shadow(0 0 40px rgba(201, 168, 76, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(201, 168, 76, 0.8))
                    drop-shadow(0 0 60px rgba(201, 168, 76, 0.6))
                    drop-shadow(0 0 90px rgba(201, 168, 76, 0.4));
          }
        }

        @keyframes icon-glow {
          0%, 100% {
            box-shadow: 
              0 0 15px rgba(201, 168, 76, 0.6),
              0 0 30px rgba(201, 168, 76, 0.3);
          }
          50% {
            box-shadow: 
              0 0 25px rgba(201, 168, 76, 1),
              0 0 50px rgba(201, 168, 76, 0.7),
              0 0 75px rgba(201, 168, 76, 0.4);
          }
        }

        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Text Glow */
        .glow-text {
          animation: green-glow-pulse 3s ease-in-out infinite;
        }

        /* Button Enhanced Glow */
        .glow-button {
          position: relative;
          animation: button-glow 3s ease-in-out infinite;
          border: 2px solid transparent;
          background: linear-linear(135deg, #E8D28A);
          overflow: hidden;
        }

        .glow-button::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-linear(45deg, #C9A84C, #D6B86B, #B8953F, #A7862C, #C9A84C);
          border-radius: inherit;
          z-index: -1;
          animation: border-rotate 4s linear infinite;
          opacity: 0.7;
        }

        .glow-button:hover {
          transform: scale(1.05);
          animation-play-state: paused;
          box-shadow: 
            0 0 40px rgba(201, 168, 76, 1),
            0 0 80px rgba(201, 168, 76, 0.8),
            0 0 120px rgba(201, 168, 76, 0.6),
            0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .glow-button:active {
          transform: scale(1.02);
          box-shadow: 
            0 0 25px rgba(201, 168, 76, 1),
            inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Image Glow */
        .glow-image {
          animation: image-glow 4s ease-in-out infinite;
          transition: all 0.5s ease;
        }

        .glow-image:hover {
          transform: scale(1.08) rotate(5deg);
          animation-play-state: paused;
          filter: drop-shadow(0 0 50px rgba(201, 168, 76, 1))
                  drop-shadow(0 0 100px rgba(201, 168, 76, 0.8));
        }

        /* Feature Icons Enhanced */
        .feature-icon {
          position: relative;
          background: linear-linear(135deg, #000000, #1a1a1a);
          animation: icon-glow 3s ease-in-out infinite;
          border: 2px solid transparent;
        }

        .feature-icon::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-linear(45deg, #C9A84C, #D6B86B, #B8953F, #C9A84C);
          border-radius: inherit;
          z-index: -1;
          animation: border-rotate 3s linear infinite;
          opacity: 0.8;
        }

        .feature-icon:hover {
          transform: scale(1.1) rotate(10deg);
          animation-play-state: paused;
          box-shadow: 
            0 0 30px rgba(201, 168, 76, 1),
            0 0 60px rgba(201, 168, 76, 0.6);
        }

        .feature-icon:active {
          transform: scale(1.05) rotate(5deg);
        }

        /* Feature Cards */
        .feature-card {
          transition: all 0.3s ease;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 16px;
          position: relative;
        }

        .feature-card:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(201, 168, 76, 0.1);
          border-color: rgba(201, 168, 76, 0.3);
          box-shadow: 
            0 0 25px rgba(201, 168, 76, 0.4),
            0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-card:active {
          transform: translateY(-2px) scale(1.01);
        }

        /* Background Glow Effects */
        .section-bg {
          position: relative;
          overflow: hidden;
        }

        .section-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-linear(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
          animation: border-rotate 20s linear infinite;
          pointer-events: none;
        }

        /* Mobile Responsive - Make all animations work on touch */
        @media (max-width: 768px) {
          /* Enable animations on mobile by default */
          .glow-button,
          .glow-image,
          .feature-icon,
          .feature-card {
            animation-play-state: running !important;
          }

          /* Touch/Active states for mobile */
          .glow-button:active {
            transform: scale(1.05);
            box-shadow: 
              0 0 40px rgba(201, 168, 76, 1),
              0 0 80px rgba(201, 168, 76, 0.8),
              0 8px 25px rgba(0, 0, 0, 0.4);
          }
          
          .glow-image:active {
            transform: scale(1.05) rotate(3deg);
            filter: drop-shadow(0 0 40px rgba(201, 168, 76, 1))
                    drop-shadow(0 0 80px rgba(201, 168, 76, 0.6));
          }
          
          .feature-icon:active {
            transform: scale(1.1) rotate(8deg);
            box-shadow: 
              0 0 30px rgba(201, 168, 76, 1),
              0 0 60px rgba(201, 168, 76, 0.6);
          }

          .feature-card:active {
            transform: translateY(-3px) scale(1.02);
            background: rgba(201, 168, 76, 0.1);
            border-color: rgba(201, 168, 76, 0.3);
            box-shadow: 0 0 20px rgba(201, 168, 76, 0.4);
          }
        }

        /* Touch device - ensure animations run */
        @media (hover: none) and (pointer: coarse) {
          .glow-button,
          .glow-image,
          .feature-icon {
            animation-play-state: running !important;
          }

          .glow-button:active {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(201, 168, 76, 1);
          }
          
          .feature-icon:active {
            transform: scale(1.1) rotate(8deg);
            box-shadow: 0 0 30px rgba(201, 168, 76, 1);
          }

          .glow-image:active {
            transform: scale(1.05) rotate(3deg);
            filter: drop-shadow(0 0 40px rgba(201, 168, 76, 1));
          }
        }
      `}</style>

      <section className="bg-[#F4EDDD] py-10 px-6 md:px-12 lg:px-24 section-bg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
              FUELING YOUR DAY<br />
              THE <span className="text-[#C8A950]">PREMIUM</span> WAY.
            </h1>
            <p className="text-base mb-8 max-w-lg mx-auto lg:mx-0" data-aos="fade-up">
              Sip into serenity with the vibrant energy of matcha. Packed with antioxidants to power your mind and body.
            </p>
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center my-8 lg:my-0" data-aos="fade-up">
            {/* Mobile Image */}
            <img
              src="/new1.png"
              alt="Coffee Cup"
              loading="lazy"
              className="block lg:hidden w-[200px] md:w-[260px] object-contain glow-image"
            />
            {/* Desktop Image */}
            <img
              src="/new1.png"
              alt="Coffee Cup"
              loading="lazy"
              className="hidden lg:block w-[300px] xl:w-[250px] object-contain glow-image"
            />
          </div>

          {/* Right Features */}
          <div className="flex-1 space-y-8" data-aos="fade-left">
            <div className="feature-card flex items-start gap-4 shadow-lg border-2 border-transparent hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] transition-all">
              <div className="feature-icon text-white p-3 rounded-full shrink-0">
                <Coffee size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">PREMIUM MATCHA</h3>
                <p className="text-sm mt-1 max-w-xs">
                  Handpicked leaves stone-ground to perfection — for a smooth, rich, and earthy experience.
                </p>
              </div>
            </div>

            <div className="feature-card flex items-start gap-4 shadow-lg hover:shadow-">
              <div className="feature-icon text-white p-3 rounded-full shrink-0">
                <CupSoda size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">ORIGINAL BLEND</h3>
                <p className="text-sm mt-1 max-w-xs">
                  Crafted with care to deliver calm focus and lasting energy - the natural way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
