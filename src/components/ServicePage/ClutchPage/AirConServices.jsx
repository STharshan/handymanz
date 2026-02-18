import {
  FaTools,
  FaRegCheckCircle,
  FaSearch,
  FaCogs,
  FaTruck,
} from "react-icons/fa";

export default function AirConServices() {
  const services = [
    {
      title: "Clutch Inspection & Diagnosis",
      desc: "Identify clutch faults early to prevent further damage",
      icon: <FaSearch className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Full clutch system inspection",
        "Pedal, hydraulic, and linkage checks",
        "Slip, noise, and vibration diagnosis",
        "Accurate fault identification",
      ],
    },
    {
      title: "Clutch Repair & Replacement",
      desc: "Professional repair or replacement for smooth and reliable gear shifting",
      icon: <FaTools className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Worn clutch plate replacement",
        "Pressure plate and release bearing repair",
        "High-quality replacement components",
        "Manufacturer-recommended procedures",
      ],
    },
    {
      title: "Dual Mass Flywheel (DMF) Services",
      desc: "Specialist inspection and replacement of dual mass flywheels",
      icon: <FaCogs className="h-5 w-5 text-[#F97316]" />,
      points: [
        "DMF condition assessment",
        "Vibration and noise diagnosis",
        "Replacement where required",
        "Improved drivetrain performance",
      ],
    },
    {
      title: "Clutch Services for All Vehicles",
      desc: "Comprehensive clutch services for cars and light commercial vehicles",
      icon: <FaTruck className="h-5 w-5 text-[#F97316]" />,
      points: [
        "Manual transmission specialists",
        "High-mileage vehicle support",
        "Commercial vehicle clutch repairs",
        "Honest repair recommendations",
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
            Professional Clutch Repair Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#9A3412" }} // orange-800
          >
            Reliable clutch diagnostics and repairs for all vehicle types
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
