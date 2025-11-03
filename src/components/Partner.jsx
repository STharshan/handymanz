import React, { useState, useEffect } from 'react';

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('partners');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Partner logos array (duplicated for seamless loop)
  const logos = [
    { url: '/l1.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d9e5_logo-9.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d9aa_logo-2.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d9f8_logo-3.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d9be_logo-8.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d983_logo-5.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f5f111852acb0e9d94b_logo-4.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d9a3_logo-7.svg', width: 200 },
    { url: 'https://cdn.prod.website-files.com/66229f17735aec2fc3454631/66251f60111852acb0e9d965_logo-1.svg', width: 200 },
  ];

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section
      id="partners"
      className={`bg-orange-600 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">
        {/* Infinite Scrolling Logo Container */}
        <div className="relative">
          {/* Scrolling wrapper */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause">
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center px-8 sm:px-12 lg:px-16"
                >
                  <img
                    src={logo.url}
                    alt={`Partner logo ${index + 1}`}
                    style={{ width: `${logo.width}px` }}
                    className="h-auto max-w-full opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alternative: Grid layout for mobile (uncomment if preferred) */}
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center lg:hidden">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.url}
                alt={`Partner logo ${index + 1}`}
                style={{ width: `${logo.width}px` }}
                className="h-auto max-w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}