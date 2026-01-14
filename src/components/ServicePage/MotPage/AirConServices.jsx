"use client";
import {
  FaCar,
  FaTools,
  FaCheckCircle,
  FaShieldAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

export default function AirConServices() {
  const services = [
    {
      title: "Class 4 MOT Testing",
      desc: "Certified MOT testing for most cars and small vans, DVSA-approved",
      icon: <FaCar className="h-5 w-5 text-[#F97316]" />, // orange-500
      points: [
        "DVSA-approved MOT testing",
        "Cars and light commercial vehicles",
        "Emissions and safety checks",
        "Clear pass or fail certification",
      ],
    },
    {
      title: "Pre-MOT Inspection",
      desc: "Identify potential issues before your official MOT test",
      icon: <FaCheckCircle className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Visual and mechanical checks",
        "Lights, brakes, tyres, and suspension",
        "Emissions pre-check",
        "Reduces risk of MOT failure",
      ],
    },
    {
      title: "MOT Repairs & Retesting",
      desc: "Fast and affordable repairs to help your vehicle pass its MOT",
      icon: <FaTools className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Brakes, suspension, and exhaust repairs",
        "Lighting and electrical fixes",
        "Steering and tyre issues resolved",
        "Free or low-cost retest (where applicable)",
      ],
    },
    {
      title: "MOT for High-Mileage & Older Vehicles",
      desc: "Specialist care for vehicles requiring extra attention",
      icon: <FaShieldAlt className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Age-related wear checks",
        "Honest repair recommendations",
        "Cost-effective repair solutions",
        "Safety-focused inspections",
      ],
    },
  ];

  return (
    <section
      className="py-16 transition-colors duration-300"
      style={{ backgroundColor: "#FFF7ED" }} // orange-50
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#7C2D12" }} // orange-900
          >
            Professional MOT Testing Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#9A3412" }} // orange-800
          >
            Comprehensive MOT inspections carried out by qualified technicians
            using approved testing procedures
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl py-6 px-6 transition-all duration-300 shadow-sm
                         hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)]
                         hover:ring-2 hover:ring-[#F97316] hover:ring-offset-2"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #FED7AA", // orange-200
              }}
            >
              {/* Header */}
              <div className="grid auto-rows-min items-start gap-1.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#FFEDD5", // orange-100
                      }}
                    >
                      {s.icon}
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: "#7C2D12" }} // orange-900
                    >
                      {s.title}
                    </div>
                  </div>
                </div>

                <div
                  className="text-base"
                  style={{ color: "#9A3412" }} // orange-800
                >
                  {s.desc}
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-2">
                {s.points.map((p, j) => (
                  <li
                    key={j}
                    className="flex items-center text-sm"
                    style={{ color: "#9A3412" }} // orange-800
                  >
                    <FaRegCheckCircle
                      className="h-4 w-4 mr-2 shrink-0"
                      style={{ color: "#F97316" }} // orange-500
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
