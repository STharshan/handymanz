import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import MOTBookingModal from "../components/MotBookingModal"
import { FaWhatsapp } from "react-icons/fa";

export default function HandymanHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = "447752364546";

  return (
    <>
      {/* HERO SECTION */}
      <header
        id="/"
        className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/hero.webp')",
          }}
        ></div>

        {/* Content container */}
        <div className="relative max-w-6xl mx-auto z-10 container px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">

            {/* LEFT CONTENT */}
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 transform ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
                }`}
            >
              <h1 className="text-5xl font-bold text-white leading-tight">
                <span className="text-orange-500">ACG – Auto Centre</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                We are your local vehicle maintenance experts in Nottingham,
                carrying out a wide range of repair services at the best prices.
                Clutch & Gearbox, MOT repairs are our specialty.
              </p>

              {/* BUTTONS */}
              <div className="pt-4 flex flex-wrap gap-4">

                {/* BOOK MOT BUTTON */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative inline-block group"
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                >
                  <div className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Book MOT Now</span>

                      <ArrowRight
                        className={`transition-all duration-300 ${buttonHover
                          ? "translate-x-1 scale-110"
                          : "translate-x-0 scale-100"
                          }`}
                        size={20}
                      />
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 rounded-lg bg-orange-500 blur-xl transition-opacity duration-300 ${buttonHover ? "opacity-50" : "opacity-0"
                      } -z-10`}
                  ></div>
                </button>
                
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group"
                  onMouseEnter={() => setWhatsappHover(true)}
                  onMouseLeave={() => setWhatsappHover(false)}
                >
                  <div className="relative overflow-hidden bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center gap-2">

                      {/* React-Icons replaces your manual SVG path */}
                      <FaWhatsapp
                        size={20}
                        className={`transition-all duration-300 ${whatsappHover ? "scale-110 rotate-12" : ""
                          }`}
                      />

                      <span
                        className={`transition-all duration-300 ${whatsappHover ? "opacity-0 -translate-y-full" : ""
                          }`}
                      >
                        WhatsApp
                      </span>

                        <span
                        className={`absolute left-8 top-0 transition-all duration-300 ${
                          whatsappHover
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-full"
                        }`}
                      >
                        Chat Now
                      </span>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`relative transition-all duration-1000 delay-300 transform ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
                }`}
            >
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">

                <img
                  src="/ACG 1.jpg"
                  alt="Auto Centre"
                  className="w-full h-full object-cover object-center rounded-2xl"
                />

                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <MOTBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}