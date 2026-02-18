import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyServiceClutch = () => {
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
              Why Choose Professional Clutch Repair?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl"
              style={{ color: "#9A3412" }} // orange-800
            >
              A properly functioning clutch is essential for safe and smooth
              driving. Our professional clutch services help prevent breakdowns,
              improve performance, and extend the life of your transmission.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Smooth and precise gear changes",
                "Reduced transmission strain",
                "Improved driving comfort",
                "Reliable, long-lasting repairs",
                "Competitive pricing",
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

          {/* Right Column */}
          <div>
            {/* Signs Box */}
            <div
              className="rounded-xl p-8 shadow-sm transition-colors duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #FED7AA",
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#7C2D12" }}
              >
                Signs You May Need Clutch Repair
              </h3>
              <ul className="space-y-4" style={{ color: "#9A3412" }}>
                {[
                  "Difficulty changing gears",
                  "Clutch slipping under acceleration",
                  "Burning smell while driving",
                  "Clutch pedal feels heavy or spongy",
                  "Unusual noises when pressing the clutch",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 mt-2 rounded-full shrink-0"
                      style={{ backgroundColor: "#F97316" }}
                    />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};

export default WhyServiceClutch;
