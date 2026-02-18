import {
  FaCarAlt,
  FaCarSide,
  FaCogs,
  FaRegCheckCircle,
  FaRulerCombined,
  FaSlidersH,
} from "react-icons/fa";

export default function AirConServices() {
  const services = [
    {
      title: "4-Wheel Laser Alignment",
      desc: "Precision laser alignment for accurate wheel positioning",
      icon: <FaRulerCombined className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Laser-guided measurement technology",
        "All four wheels aligned to factory specs",
        "Improved handling and straight-line stability",
        "Detailed alignment report provided",
      ],
    },
    {
      title: "3D Wheel Alignment",
      desc: "Advanced 3D imaging for complete wheel geometry analysis",
      icon: <FaCogs className="h-5 w-5 text-[#F97316]" />,
      points: [
        "High-definition 3D camera system",
        "Real-time measurement and adjustment",
        "Before-and-after alignment comparison",
        "Increased accuracy for modern vehicles",
      ],
    },
    {
      title: "Wheel Tracking (Front & Rear)",
      desc: "Correct wheel tracking to prevent uneven tyre wear",
      icon: <FaCarSide className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Toe angle adjustment",
        "Steering wheel centering",
        "Reduced tyre scrub",
        "Smoother, more controlled driving",
      ],
    },
    {
      title: "Castor & Camber Adjustment",
      desc: "Precise adjustment of wheel angles for better control and tyre life",
      icon: <FaSlidersH className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Castor angle correction",
        "Camber adjustment",
        "Improved cornering stability",
        "Even tyre wear",
      ],
    },
    {
      title: "Full Geometry Alignment",
      desc: "Complete 4-wheel geometry alignment for all vehicle types",
      icon: <FaCarAlt className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Full suspension and geometry check",
        "Adjustment of all alignment angles",
        "Cars, vans, and light commercial vehicles",
        "Motorhome alignment available",
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
            Professional Wheel Alignment Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#9A3412" }} // orange-800
          >
            Advanced alignment technology for accurate wheel positioning and optimal vehicle performance
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
