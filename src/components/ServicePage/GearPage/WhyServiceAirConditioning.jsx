import { FaCheckCircle } from "react-icons/fa";

const WhyServiceGearbox = () => {
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
              Why Choose Professional Gearbox Repair?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl"
              style={{ color: "#9A3412" }} // orange-800
            >
              Your gearbox is one of the most complex components of your vehicle.
              Professional diagnosis and repair ensure long-term reliability,
              smooth performance, and protection against further damage.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Smooth and responsive gear changes",
                "Improved vehicle performance",
                "Reduced risk of breakdowns",
                "Cost-effective repair solutions",
                "Experienced technicians",
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
                Signs You May Need Gearbox Repair
              </h3>
              <ul className="space-y-4" style={{ color: "#9A3412" }}>
                {[
                  "Difficulty selecting or changing gears",
                  "Grinding or whining noises",
                  "Gear slipping while driving",
                  "Delayed response in automatic vehicles",
                  "Warning lights on the dashboard",
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
        </div>
      </div>
    </section>
  );
};

export default WhyServiceGearbox;
