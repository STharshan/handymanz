import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function HandymanHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/hero.avif')"
        }}
      ></div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left column - Text content */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Sub title */}
            <div className="inline-block mt-20">
              <span className="text-orange-500 text-sm sm:text-base font-semibold tracking-wide uppercase">
                Freelancer Portfolio
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold text-white leading-tight">
              Your Home's Best Friend:{' '}
              <span className="text-orange-500">Handymanz</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/contact"
                className="relative inline-block group"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                <div className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {/* Background sliding effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                  {/* Text content with flip animation */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="inline-block text-base sm:text-lg">
                      <span className={`inline-block transition-all duration-300 ${buttonHover ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
                        View Our Services
                      </span>
                      <span className={`absolute left-0 top-0 transition-all duration-300 ${buttonHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                        Go To Services
                      </span>
                    </span>
                    <ArrowRight
                      className={`transition-all duration-300 ${buttonHover ? 'translate-x-1 scale-110' : 'translate-x-0 scale-100'}`}
                      size={20}
                    />
                  </span>

                  {/* Ripple effect on hover */}
                  <span className={`absolute inset-0 rounded-lg border-2 border-white transition-all duration-500 ${buttonHover ? 'scale-110 opacity-0' : 'scale-100 opacity-0'}`}></span>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-lg bg-orange-500 blur-xl transition-opacity duration-300 ${buttonHover ? 'opacity-50' : 'opacity-0'} -z-10`}></div>
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
                src="/hero.avif"
                alt="Professional handyman workers"
                className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 "
              />

              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl"></div>
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