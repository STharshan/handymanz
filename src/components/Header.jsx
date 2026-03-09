import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Clock, Menu, X, ChevronDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);           // desktop only
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile only
  const servicesRef = useRef(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setScrolled(true);
        setShowTopBar(currentScrollY < lastScrollY);
      } else {
        setShowTopBar(true);
        setScrolled(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/#" },
    { name: "About", link: "/#about" },
    {
      name: "Services",
      dropdown: [
        { name: "MOT", link: "/mot" },
        { name: "Wheel Alignment", link: "/wheel-alignment" },
        { name: "Service", link: "/service" },
        { name: "Gearbox", link: "/gearbox" },
        { name: "Clutch", link: "/clutch" },
        { name: "Diagnostic", link: "/diagnostic" },
      ],
    },
    { name: "Projects", link: "/#projects" },
    { name: "Testimonials", link: "/#testimonials" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showTopBar ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Single-row layout on all sizes, wraps gracefully */}
        <div className="flex flex-wrap w-full">
          {/* Phone + Email */}
          <div className="flex-1 min-w-0 bg-orange-500 text-white">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 px-4 sm:px-6 py-2">
              <a
                href="tel:+447752364546"
                className="flex items-center gap-1.5 shrink-0"
              >
                <Phone size={14} className="shrink-0" />
                <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                  +44 775 236 4546
                </span>
              </a>
              <div className="h-3 w-px bg-white opacity-70 hidden sm:block" />
              <a
                href="mailto:tom@acgautocentre.co.uk"
                className="flex items-center gap-1.5 shrink-0 hover:text-gray-200 transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                  tom@acgautocentre.co.uk
                </span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex-1 min-w-0 bg-black text-white">
            <div className="flex items-center justify-center md:justify-end gap-2 px-4 sm:px-6 py-2">
              <Clock size={14} className="shrink-0 text-orange-400" />
              {/* Full hours on md+, abbreviated on smaller */}
              <span className="font-semibold text-xs sm:text-sm hidden md:inline whitespace-nowrap">
                Mon – Fri 08:30–17:30 &nbsp;/&nbsp; Sat 09:00–15:00 &nbsp;/&nbsp; Sun Closed
              </span>
              <span className="font-semibold text-xs sm:text-sm md:hidden whitespace-nowrap">
                Mon–Fri 08:30–17:30
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="logo.png"
                alt="ACG AutoCentre"
                className="h-12 sm:h-14 lg:h-16 bg-black p-2 rounded-full"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.name === "Services" ? servicesRef : null}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm xl:text-base"
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {servicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg py-2 z-50">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.link}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <HashLink
                      smooth
                      to={item.link}
                      className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm xl:text-base"
                    >
                      {item.name}
                    </HashLink>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block shrink-0">
              <HashLink
                smooth
                to="/#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 xl:px-6 py-2.5 xl:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm xl:text-base whitespace-nowrap"
              >
                Contact Now
              </HashLink>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-128 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 sm:px-6 py-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="rounded-lg overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex justify-between items-center w-full text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-3 py-3 font-medium rounded-lg transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? "max-h-80" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 pb-2 space-y-1 border-l-2 border-orange-200 ml-3 mt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors text-sm sm:text-base"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-3 py-3 font-medium rounded-lg transition-colors text-sm sm:text-base"
                >
                  {item.name}
                </HashLink>
              )
            )}

            {/* Mobile CTA */}
            <div className="pt-3 pb-1">
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm sm:text-base shadow-md"
              >
                Contact Now
              </HashLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;