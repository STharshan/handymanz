import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [animatingWords, setAnimatingWords] = useState(['Carpentry', 'Plumbing', 'Repairs']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const services = [
    {
      title: "Cleaning Service",
      description: "Our professional cleaning service offers thorough and efficient cleaning for homes and businesses. From dusting and vacuuming to mopping and sanitizing.",
      image: "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/66256c8ecfd7c7000c93cd09_35154%20(1).avif",
      link: "/product/cleaning-service"
    },
    {
      title: "Renovation Consultation",
      description: "Our renovation consultation service provides expert advice and guidance on home improvement projects, helping you plan and execute renovations.",
      image: "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/66256bb3d06cde3819a751f9_1389.avif",
      link: "/product/renovation-consultation"
    },
    {
      title: "General Repairs",
      description: "Our general repairs service addresses a variety of household issues such as drywall repair, door and window maintenance, and minor plumbing repairs.",
      image: "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/66256b0314219906161f2492_2075.avif",
      link: "/product/general-repairs"
    },
    {
      title: "Carpentry Customization",
      description: "Our carpentry customization service offers bespoke solutions such as built-in shelving, cabinetry, and furniture, maximizing space and adding aesthetic appeal.",
      image: "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/66256a8e0cb85f935360a323_2037.jpg",
      link: "/product/carpentry-customization"
    },
    {
      title: "Electrical Installation",
      description: "From leaky faucets to clogged drains, we're your go-to for all plumbing issues. Our expert plumbers will diagnose and fix problems swiftly.",
      image: "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/66256a3be66b7f6a335ad723_17130.avif",
      link: "/product/electrical-installation"
    },
    {
      title: "Plumbing Rescue",
      description: "From leaky faucets to clogged drains, we're your go-to for all plumbing issues. Our expert plumbers will diagnose and fix problems swiftly.",
      image: "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/6625593c94bb460b0cee75fc_5361.avif",
      link: "/product/plumbing-rescue"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [animatingWords.length]);

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Our Service</p>
            <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">We Provide <span className='text-orange-600'>Carpentry</span></h2>
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
    <a
      href={service.link}
      className="group relative block overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden">
        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {service.description}
          </p>
        </div>

        {/* Bottom Overlay for extra effect */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent transition-all duration-500"
          style={{
            height: isHovered ? '60%' : '40%'
          }}
        ></div>
      </div>

      {/* Animated Border Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Border */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{
            width: isHovered ? '100%' : '0%',
            transitionDelay: '0ms'
          }}
        ></div>

        {/* Right Border */}
        <div
          className="absolute top-0 right-0 w-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{
            height: isHovered ? '100%' : '0%',
            transitionDelay: '200ms'
          }}
        ></div>

        {/* Bottom Border */}
        <div
          className="absolute bottom-0 right-0 h-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{
            width: isHovered ? '100%' : '0%',
            transitionDelay: '400ms'
          }}
        ></div>

        {/* Left Border */}
        <div
          className="absolute bottom-0 left-0 w-0.5 bg-orange-600 transition-all duration-700 ease-out"
          style={{
            height: isHovered ? '100%' : '0%',
            transitionDelay: '600ms'
          }}
        ></div>
      </div>
    </a>
  );
};

export default ServicesSection;