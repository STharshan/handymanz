import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [animatingWords] = useState(['MOT', 'Alignment', 'Diagnostics']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const services = [
    {
      title: "MOT",
      description: "Our MOT service ensures your vehicle meets legal safety and environmental standards. We offer thorough testing and provide a detailed report of any required repairs.",
      image: "h2.webp",
      link: "/mot"
    },
    {
      title: "Wheel Alignment & Tracking",
      description: "Our wheel alignment and tracking service optimizes your vehicle's handling and tire wear. We adjust your wheels to factory specifications, ensuring smoother driving and improved fuel efficiency.",
      image: "w2.webp",
      link: "/wheel-alignment"
    },
    {
      title: "Services",
      description: "Our comprehensive repair and maintenance services cover all your vehicle needs, from routine servicing and MOT testing to wheel alignment, clutch and gearbox repairs, and full diagnostics.",
      image: "w1.webp",
      link: "/service"
    },
    {
      title: "Clutch",
      description: "Our clutch service ensures smooth gear shifting and optimal performance. We repair or replace faulty clutches to keep your vehicle's transmission working seamlessly.",
      image: "c1.webp",
      link: "/clutch"
    },
    {
      title: "Gear Box",
      description: "Our gearbox service covers repair and replacement of faulty gearboxes. We diagnose and fix issues such as slipping gears or difficulty shifting to maintain your car's transmission performance.",
      image: "g1.webp",
      link: "/gearbox"
    },
    {
      title: "Diagnostics",
      description: "Our diagnostic service uses advanced tools to identify issues with your vehicle's engine, electrical systems, and more. We provide accurate troubleshooting to ensure timely repairs.",
      image: "d1.webp",
      link: "/diagnostic"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [animatingWords.length]);

  return (
    <section id="services" className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Our Service</p>
            <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Comprehensive repair{" "}
              <span className="text-orange-600">& maintenance services</span>
            </h2>
            {/* Animated word — only show on larger screens to avoid layout issues */}
            <div className="relative h-12 sm:h-14 md:h-16 lg:h-20 overflow-hidden hidden sm:block min-w-[380px]">
              {animatingWords.map((word, index) => (
                <h2
                  key={word}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 absolute w-full transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateY(${(index - currentWordIndex) * 100}%)`,
                    opacity: index === currentWordIndex ? 1 : 0,
                  }}
                >
                  {word}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [isActive, setIsActive] = useState(false);

  // Detect touch device
  const isTouchDevice = () =>
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleTap = () => {
    if (isTouchDevice()) {
      setIsActive((prev) => !prev);
    }
  };

  return (
    <div
      className="group relative block overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => !isTouchDevice() && setIsActive(true)}
      onMouseLeave={() => !isTouchDevice() && setIsActive(false)}
      onClick={handleTap}
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className={`w-full h-[300px] sm:h-[380px] md:h-[430px] object-cover transition-transform duration-700 ${
          isActive ? 'scale-110' : 'scale-100'
        }`}
      />

      {/* Base gradient overlay — always visible */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent z-10" />

      {/* Darkening overlay on active */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 z-10 ${
          isActive ? 'opacity-30' : 'opacity-0'
        }`}
      />

      {/* Content */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 z-20 transition-transform duration-500 ${
          isActive ? 'translate-y-0' : 'translate-y-2'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>

        <p
          className={`text-gray-300 text-sm sm:text-base leading-relaxed transition-all duration-500 ${
            isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          {service.description}
        </p>

        {/* Learn More Button — always navigates, tap once to reveal on mobile */}
        <div
          className={`mt-4 transition-all duration-500 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <Link
            to={service.link}
            onClick={(e) => {
              // On touch: first tap reveals content, second tap navigates
              if (isTouchDevice() && !isActive) {
                e.preventDefault();
              }
            }}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom overlay height effect */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent transition-all duration-500 z-10 ${
          isActive ? 'h-[60%]' : 'h-[40%]'
        }`}
      />

      {/* Animated border lines */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div
          className="absolute top-0 left-0 h-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{ width: isActive ? '100%' : '0%' }}
        />
        <div
          className="absolute top-0 right-0 w-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{ height: isActive ? '100%' : '0%' }}
        />
        <div
          className="absolute bottom-0 right-0 h-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{ width: isActive ? '100%' : '0%' }}
        />
        <div
          className="absolute bottom-0 left-0 w-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{ height: isActive ? '100%' : '0%' }}
        />
      </div>

      {/* Mobile tap hint — only shown on touch devices when not yet active */}
      {!isActive && (
        <div className="absolute top-3 right-3 z-30 sm:hidden bg-black/60 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
          Tap to view
        </div>
      )}
    </div>
  );
};

export default ServicesSection;