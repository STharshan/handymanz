import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 👈 Start with second project
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: "1",
      title: "Flooring Makeover Project",
      category: "Maintenance Projects",
      snippet:
        "The Flooring Makeover Project involved installing new flooring throughout the residential property owned by Mr. and Mrs. Garcia, enhancing durability and aesthetics.",
      image:
        "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/662c016c84173d9135f61110_9315.webp",
      link: "/projects/flooring-makeover-project",
    },
    {
      id: "2",
      title: "Fixture Fixer Operation",
      category: "Maintenance Projects",
      snippet:
        "The Fixture Fixer Operation aimed to repair and replace various fixtures in the commercial property of ABC Restaurant, ensuring a welcoming and functional environment for patrons.",
      image:
        "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/662568969dc57b5340de5ffd_13144.avif",
      link: "/projects/fixture-fixer-operation",
    },
    {
      id: "3",
      title: "Renovation Revamp Venture",
      category: "Plumbing Projects",
      snippet:
        "The Renovation Revamp Venture focused on transforming the outdated kitchen and bathrooms of the Johnson family's home, enhancing functionality and modernizing the living spaces.",
      image:
        "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/662567aee66b7f6a3358de7f_22162068.avif",
      link: "/projects/renovation-revamp-venture",
    },
    {
      id: "4",
      title: "Carpentry Solutions Project",
      category: "Electrical Projects",
      snippet:
        "The Carpentry Solutions Project aimed to provide customized carpentry solutions for the office renovation project of Ms. Rodriguez, adding functionality and aesthetic appeal to the workspace.",
      image:
        "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/6625676a94bb460b0cfa6b15_21271632.avif",
      link: "/projects/carpentry-solutions-project",
    },
    {
      id: "5",
      title: "Electrical Upgrade Initiative",
      category: "Electrical Projects",
      snippet:
        "The Electrical Upgrade Initiative focused on enhancing the electrical systems in the commercial space of XYZ Corporation, improving safety and efficiency.",
      image:
        "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/6625671e1b3394c91fee3bb9_2957.avif",
      link: "/projects/electrical-upgrade-initiative",
    },
    {
      id: "6",
      title: "Plumbing Rescue Mission",
      category: "Plumbing Projects",
      snippet:
        "The 'Plumbing Rescue Mission' project aimed to address extensive plumbing issues in the residential property of Mr. and Mrs. Thompson. The project's goal was to restore functionality to the plumbing system while ensuring long-term reliability and customer satisfaction.",
      image:
        "https://cdn.prod.website-files.com/66229f17735aec2fc3454650/6625654d4f070cbfab060858_256.avif",
      link: "/projects/plumbing-rescue-mission",
    },
  ];

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const cardElements = container.querySelectorAll('.project-card');
    const targetCard = cardElements[index];

    if (targetCard) {
      const cardWidth = targetCard.offsetWidth;
      const scrollPosition = targetCard.offsetLeft - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const centerPosition = scrollLeft + containerWidth / 2;

      const cardElements = container.querySelectorAll('.project-card');
      let closestIndex = 0;
      let minDistance = Infinity;

      cardElements.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(centerPosition - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);

    // 👇 Automatically show second project on load
    setTimeout(() => scrollToCard(1), 200);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-0.5 bg-orange-600"></div>
              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Our Projects</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Our<br />Completed Projects
            </h1>
          </div>

          <div className="grid items-center gap-3 sm:gap-4 mt-10">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 3}
              className="
                bg-orange-600 hover:bg-orange-700
                disabled:bg-gray-700 disabled:cursor-not-allowed
                text-white
                w-40
                px-4 py-3
                rounded-md
                text-sm
                font-semibold
                transition-all
                duration-200
                shadow-sm hover:shadow-md
              "
            >
              View Projects
            </button>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="bg-white hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed p-2 sm:p-3 rounded transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === projects.length - 1}
                className="bg-white hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed p-2 sm:p-3 rounded transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative py-6" style={{ perspective: '1500px' }}>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 py-10 md:gap-8 overflow-x-auto overflow-visible scrollbar-hide scroll-smooth pb-6 sm:pb-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            <div className="flex-shrink-0" style={{ width: 'calc(50vw - 140px)' }}></div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: index === activeIndex
                    ? 'scale(1.05) translateZ(80px) translateY(-20px)'
                    : 'scale(0.88) translateZ(0px) translateY(0px)',
                  opacity: index === activeIndex ? 1 : 0.5,
                  zIndex: index === activeIndex ? 50 : 10,
                  scrollSnapAlign: 'center',
                }}
                onClick={() => scrollToCard(index)}
              >
                <div
                  className={`relative rounded-lg overflow-hidden h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px] group transition-all duration-500 ${index === activeIndex
                    ? 'ring-2 sm:ring-4 ring-orange-600 shadow-2xl shadow-orange-600/30'
                    : 'ring-0 shadow-lg'
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 from-black via-black/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <span className="inline-block bg-orange-600 text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded mb-2 sm:mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                    <p
                      className={`text-white text-xs sm:text-sm leading-relaxed transition-all duration-500 line-clamp-3 ${index === activeIndex ? 'opacity-100' : 'opacity-70'
                        }`}
                    >
                      {project.snippet}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0" style={{ width: 'calc(50vw - 140px)' }}></div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'bg-orange-600 w-6 sm:w-8'
                  : 'bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Home Button */}
        <button className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-orange-600 hover:bg-orange-700 text-white p-3 sm:p-4 rounded-lg shadow-lg transition-colors z-[100]">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;
