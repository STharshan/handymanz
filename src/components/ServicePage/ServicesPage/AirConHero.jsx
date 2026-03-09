import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

// ─── Hero Section ─────────────────────────────────────────────
export default function AirConHero() {

  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center py-20 px-4 transition-colors duration-300"
        style={{ background: "linear-gradient(to bottom, #FFF7ED, #FED7AA)" }}
      >
        <div className="max-w-7xl mx-auto text-center pt-20">

          {/* Tag */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-semibold mb-6"
            style={{ backgroundColor: "#FED7AA", color: "#9A3412" }}
          >
            Professional Vehicle Services
          </span>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ color: "#7C2D12" }}
          >
            Reliable Automotive Care You Can Trust
      
          </h1>

          {/* Paragraph */}
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#9A3412" }}
          >
           At ACG – Auto Centre, we provide a full range of professional vehicle services to keep your car safe, reliable, and performing at its best. From routine maintenance to complex mechanical repairs, our experienced technicians deliver high-quality workmanship at competitive prices.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            {/* Book Appointment */}
              <a
              href="https://wa.me/447752364546"
              target="_blank"
              rel="noopener noreferrer"          
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
            >
              <FaWhatsapp className="h-5 w-5" />
              Book an Appointment
            </a>

            {/* Quote Button */}
            <Link
              to="/#contact"
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
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}