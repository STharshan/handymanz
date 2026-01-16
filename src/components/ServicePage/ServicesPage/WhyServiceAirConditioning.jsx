"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyServiceAirConditioning = () => {
  return (
    <section
      className="py-16 transition-colors duration-300"
      style={{ backgroundColor: "#FFF7ED" }} // orange-50
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2
              className="text-4xl font-bold mb-6 leading-snug"
              style={{ color: "#7C2D12" }} // orange-900
            >
              Why Choose ACG – Auto Centre?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl"
              style={{ color: "#9A3412" }} // orange-800
            >
             We combine industry experience, advanced equipment, and honest service to deliver dependable vehicle care you can trust.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Over 20 years of experience",
                "Fully qualified technicians",
                "Modern diagnostic and alignment equipment",
                "Competitive pricing",
                "Friendly, professional service",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle
                    className="w-5 h-5"
                    style={{ color: "#F97316" }} // orange-500
                  />
                  <span style={{ color: "#7C2D12" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyServiceAirConditioning;
