import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-orange-500 bg-clip-text text-transparent">
                ACG <span className="text-gray-400">Autocentre</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
              We are your local vehicle maintenance experts in Nottingham, carrying out a wide range of repair services at the best prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ACGAutoCentre/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 bg-linear-to-r from-orange-500 to-[#0072ff] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "MOT",
                "Wheel alignment and tracking",
                "Services",
                "Clutch",
                "Gear box",
                "Diagnostics",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 bg-linear-to-r from-orange-500 to-[#0072ff] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/5bJYgZZG9fhxHqwB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  20 Little Tennis Street, Nottingham, NG2 4EL, United Kingdom
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-orange-500" size={18} />
                <a
                  href="tel:0775 236 4546"
                  className="hover:text-white transition-colors duration-300"
                >
                  0775 236 4546
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" size={18} />
                <a
                  href="mailto:tom@acgautocentre.co.uk"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  tom@acgautocentre.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ACG Autocentre. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-orange-500 transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-orange-500 transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
