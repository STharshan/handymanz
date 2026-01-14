import React, { useState, useEffect } from "react";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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

  const navItems = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showTopBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Orange Section */}
          <div className="flex-1 bg-orange-500 text-white flex justify-center md:justify-start">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center md:justify-start px-6 py-2.5 gap-3 md:gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="font-semibold text-sm">0115 6483 444</span>
              </div>
              <div className="h-4 w-px bg-white opacity-70 hidden md:block" />
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="font-semibold text-sm">
                  tom@acgautocentre.co.uk
                </span>
              </div>
            </div>
          </div>

          {/* Right Black Section */}
          <div className="flex-1 bg-black text-white flex justify-center md:justify-end">
            <div className="max-w-7xl w-full flex items-center justify-center md:justify-end px-6 py-2.5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock size={16} />
                <span className="hidden sm:inline">
                  Mon - Fri 08:30 - 17:30 / Sat 09:00 - 13:00 / Closed Sunday
                </span>
                <span className="sm:hidden">
                  Mon - Fri 08:30 - 17:30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:mt-0 mt-7">
              <img
                src="logo.png"
                alt="ACG Auto Centre"
                className="h-16 bg-black p-2 rounded-full"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <HashLink
                  key={item}
                  smooth
                  to={`/#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-orange-500 font-medium relative group transition-colors"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                </HashLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <HashLink
                smooth
                to="/#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Contact Now
              </HashLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden mt-8 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-orange-500 py-2 font-medium"
              >
                {item}
              </HashLink>
            ))}

            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mt-4"
            >
              Contact Now
            </HashLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
