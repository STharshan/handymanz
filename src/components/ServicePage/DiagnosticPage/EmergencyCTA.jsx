import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#F97316",
  fgOnPrimary: "#FFFFFF",
  secondaryBg: "#FDBA74",
  secondaryText: "#7C2D12",
  outline: "#FFFFFF",
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Book Your Diagnostic with Confidence
        </h2>

        <p className="text-xl mb-8 opacity-90">
          DVSA-approved Diagnostic testing carried out by experienced, qualified technicians
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Call Button */}
          <a
            href="tel:+447752364546"
            className="inline-flex items-center justify-center gap-2 h-11 w-64 rounded-md font-semibold"
            style={{
              backgroundColor: palette.secondaryBg,
              color: palette.secondaryText,
            }}
          >
            <FaPhone className="h-5 w-5" />
            Call +44 775 236 4546
          </a>

          {/* Book Diagnostic Button */}
          <a
            href="https://wa.me/94774279433"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 w-64 rounded-md font-semibold transition-colors"
            style={{
              backgroundColor: "transparent",
              color: palette.fgOnPrimary,
              border: `1px solid ${palette.outline}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = palette.fgOnPrimary;
              e.currentTarget.style.color = palette.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = palette.fgOnPrimary;
            }}
          >
            Book Diagnostic Test
          </a>

        </div>
      </div>
    </section>
  );
}