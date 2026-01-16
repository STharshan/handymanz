"use client";
import {
  FaTools,
  FaRegCheckCircle,
  FaSearch,
  FaCogs,
  FaExchangeAlt,
} from "react-icons/fa";

export default function AirConServices() {
  const services = [
    {
      title: "Gearbox Inspection & Diagnosis",
      desc: "Accurate gearbox fault detection to prevent costly transmission damage",
      icon: <FaSearch className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Manual and automatic gearbox diagnostics",
        "Noise, vibration, and shifting issue analysis",
        "Oil leak and wear inspection",
        "Clear fault reporting",
      ],
    },
    {
      title: "Manual Gearbox Repairs",
      desc: "Specialist repair services for manual transmission systems",
      icon: <FaTools className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Gear and synchromesh repairs",
        "Bearing and seal replacement",
        "Smooth gear engagement restoration",
        "Reliable, long-term repair solutions",
      ],
    },
    {
      title: "Automatic Gearbox Services",
      desc: "Professional care for automatic and semi-automatic gearboxes",
      icon: <FaCogs className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Automatic gearbox fault diagnosis",
        "Transmission fluid checks and replacement",
        "Repair and replacement solutions",
        "Improved performance and reliability",
      ],
    },
    {
      title: "Gearbox Replacement Services",
      desc: "Complete gearbox replacement when repair is not viable",
      icon: <FaExchangeAlt className="h-5 w-5 text-[#F97316]" />,
      points: [
        "New or reconditioned gearboxes",
        "Manufacturer-approved fitting",
        "Quality-tested components",
        "Warranty-backed workmanship",
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
            Professional Gearbox Repair Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#9A3412" }} // orange-800
          >
            Comprehensive gearbox solutions for all vehicle types
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
