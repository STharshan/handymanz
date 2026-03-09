import { useState } from "react";
import MOTBookingModal from "../../MotBookingModal";
import { FaWhatsapp } from "react-icons/fa";

// ─── Hero Section ─────────────────────────────────────────────
export default function AirConHero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      <MOTBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <section
        className="min-h-screen flex items-center justify-center py-20 px-4 transition-colors duration-300"
        style={{ background: "linear-gradient(to bottom, #FFF7ED, #FED7AA)" }}
      >
        <div className="max-w-7xl mx-auto text-center">

          {/* Tag */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-semibold mb-6"
            style={{ backgroundColor: "#FED7AA", color: "#9A3412" }}
          >
            Professional MOT Services
          </span>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ color: "#7C2D12" }}
          >
            MOT Testing{" "}
            <span style={{ color: "#F97316" }}>
              & Repairs
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#9A3412" }}
          >
            Reliable and DVSA-compliant MOT testing to ensure your vehicle
            meets all legal safety and environmental standards. Our experienced
            technicians carry out thorough inspections and provide clear,
            honest advice—keeping you safe and road-legal.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            {/* Book Appointment */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#EA580C")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#F97316")
              }
            >
              <FaWhatsapp className="h-5 w-5" />
              Book an Appointment
            </button>

            {/* Quote Button */}
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: "#FFF7ED",
                color: "#7C2D12",
                border: "1px solid #FB923C",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(249,115,22,0.4)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              Get A Quote
            </a>

          </div>
        </div>
      </section>
    </>
  );
}