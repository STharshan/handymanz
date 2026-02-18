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
              Why Choose a Professional MOT Test?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl"
              style={{ color: "#9A3412" }} // orange-800
            >
              An MOT is not just a legal requirement—it’s essential for your safety
              and your vehicle’s reliability. Our professional MOT service ensures
              your car is thoroughly checked and repaired correctly, giving you
              peace of mind on the road.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Fully DVSA-compliant testing",
                "Experienced, qualified technicians",
                "Honest advice with no hidden costs",
                "Competitive pricing",
                "Reliable, professional service",
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
                backgroundColor: "#FFFFFF", // card bg
                border: "1px solid #FED7AA", // orange-200
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#7C2D12" }} // orange-900
              >
                Signs Your Vehicle May Fail an MOT
              </h3>
              <ul className="space-y-4" style={{ color: "#9A3412" }}> {/* orange-800 */}
                {[
                  "Warning lights on the dashboard",
                  "Worn tyres or uneven tread",
                  "Poor braking performance",
                  "Excessive exhaust smoke or noise",
                  "Faulty lights or indicators",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 mt-2 rounded-full shrink-0"
                      style={{ backgroundColor: "#F97316" }} // orange-500
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

export default WhyServiceAirConditioning;
