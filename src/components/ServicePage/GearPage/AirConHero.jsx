import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function AirConHero() {
  return (
    <section
      className="py-16 transition-colors duration-300 bg-linear-to-b"
      style={{
        background: "linear-gradient(to bottom, #FFF7ED, #FED7AA)", // orange-50 → orange-200
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex mt-30 items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{
              backgroundColor: "#FED7AA", // orange-200
              color: "#9A3412", // orange-800
            }}
          >
            Professional Gearbox Services
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "#7C2D12" }} // orange-900
          >
            Gearbox Repair {" "}
            <span style={{ color: "#F97316" }}>
              & Replacement
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#9A3412" }} // orange-800
          >
           Expert gearbox diagnostics, repairs, and replacements to ensure smooth, reliable power transmission. Our experienced technicians accurately identify gearbox faults and provide effective solutions to restore performance and drivability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#F97316", // orange-500
                  color: "#FFFFFF",
                }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +44 1623 623 759
              </button>
            </a>

            {/* Get Quote Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#FFF7ED", // orange-50
                color: "#7C2D12",
                border: "1px solid #FB923C", // orange-400
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(249,115,22,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
