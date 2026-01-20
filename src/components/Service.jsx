import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [animatingWords, setAnimatingWords] = useState(['Carpentry', 'Plumbing', 'Repairs']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const services = [
    {
      title: "MOT",
      description: "Our MOT service ensures your vehicle meets legal safety and environmental standards. We offer thorough testing and provide a detailed report of any required repairs.",
      image: "h2.webp",
      link: "/mot"
    },
    {
      title: "Wheel alignment and tracking",
      description: "Our wheel alignment and tracking service optimizes your vehicle's handling and tire wear. We adjust your wheels to factory specifications, ensuring smoother driving and improved fuel efficiency.",
      image: "w2.webp",
      link: "/wheel-alignment"
    },
    {
      title: "Services",
      description: "Our comprehensive repair services cover a wide range of household needs, including plumbing, electrical work, drywall repairs, and door/window maintenance.",
      image: "w1.webp",
      link: "/service"
    },
    {
      title: "Clutch",
      description: "Our clutch service ensures smooth gear shifting and optimal performance. We repair or replace faulty clutches to keep your vehicle’s transmission working seamlessly.",
      image: "c1.webp",
      link: "/clutch"
    },
    {
      title: "Gear box",
      description: "Our gearbox service covers repair and replacement of faulty gearboxes. We diagnose and fix issues such as slipping gears or difficulty shifting to maintain your car’s transmission performance.",
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
    <section id='services' className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Our Service</p>
            <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Comprehensive repair <span className='text-orange-600'>& maintenance services</span></h2>
            <div className="relative h-12 sm:h-14 md:h-16 lg:h-20 overflow-hidden">
              {animatingWords.map((word, index) => (
                <h2
                  key={word}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateY(${(index - currentWordIndex) * 100}%)`,
                    opacity: index === currentWordIndex ? 1 : 0
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative block overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0 z-20">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {service.description}
        </p>

        {/* Learn More Button */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <Link
            to={service.link}
            className="inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 z-30 relative"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom overlay height effect */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent transition-all duration-500 z-10"
        style={{ height: isHovered ? '60%' : '40%' }}
      ></div>

      {/* Animated border lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-0.5 bg-orange-600 transition-all duration-700 ease-out" style={{ width: isHovered ? '100%' : '0%' }}></div>
        <div className="absolute top-0 right-0 w-0.5 bg-orange-600 transition-all duration-700 ease-out" style={{ height: isHovered ? '100%' : '0%' }}></div>
        <div className="absolute bottom-0 right-0 h-0.5 bg-orange-600 transition-all duration-700 ease-out" style={{ width: isHovered ? '100%' : '0%' }}></div>
        <div className="absolute bottom-0 left-0 w-0.5 bg-orange-600 transition-all duration-700 ease-out" style={{ height: isHovered ? '100%' : '0%' }}></div>
      </div>
    </div>
  );
};

export default ServicesSection;