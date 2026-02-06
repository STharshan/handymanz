import { ArrowRight, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function HandymanHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Replace with your actual WhatsApp number (format: country code + number, no spaces or special characters)
  const whatsappNumber = "447752364546"; // Example: UK number

  return (
    <header id='/' className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/hero.webp')"
        }}
      ></div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10 container px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left column - Text content */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Main heading */}
            <h1 className="text-5xl font-bold text-white leading-tight">
              <span className="text-orange-500">ACG – Auto Centre</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              We are your local vehicle maintenance experts in Nottingham, carrying out a wide range of repair services at the best prices. Clutch & Gearbox, MOT repairs are our specialty
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              {/* Book MOT Button */}
              <HashLink
                smooth
                to="/mot"
                className="relative inline-block group"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                <div className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {/* Text and Arrow */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`inline-block transition-all duration-300 ${buttonHover ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
                      Book MOT Now
                    </span>
                    <span className={`absolute left-0 top-0 transition-all duration-300 ${buttonHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                      MOT Service
                    </span>
                    <ArrowRight className={`transition-all duration-300 ${buttonHover ? 'translate-x-1 scale-110' : 'translate-x-0 scale-100'}`} size={20} />
                  </span>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-lg bg-orange-500 blur-xl transition-opacity duration-300 ${buttonHover ? 'opacity-50' : 'opacity-0'} -z-10`}></div>
              </HashLink>

              {/* WhatsApp Button */}
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
                    <svg 
                      className={`transition-all duration-300 ${whatsappHover ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`} 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className={`inline-block transition-all duration-300 ${whatsappHover ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
                      WhatsApp
                    </span>
                    <span className={`absolute left-8 top-0 transition-all duration-300 ${whatsappHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                      Chat Now
                    </span>
                  </span>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-lg bg-green-500 blur-xl transition-opacity duration-300 ${whatsappHover ? 'opacity-50' : 'opacity-0'} -z-10`}></div>
              </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

              {/* Main image */}
              <img
                src="/ACG 1.jpg"
                alt="Professional handyman workers"
                className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 "
              />

              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg className="w-full h-24 sm:h-32 fill-current text-gray-900/20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </header>
  );
}