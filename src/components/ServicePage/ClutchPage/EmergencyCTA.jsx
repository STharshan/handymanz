// File: EmergencyCTA.jsx
import React from "react";
import { FaPhone } from "react-icons/fa";

const palette = {
  primary: "#F97316",          // orange-500
  fgOnPrimary: "#FFFFFF",      // White text
  secondaryBg: "#FDBA74",      // orange-300 (button)
  secondaryText: "#7C2D12",    // orange-900 (text on button)
  outline: "#FFFFFF",          // White outline
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Book Your Clutch Repair with Confidence
        </h2>

        <p className="text-xl mb-8 opacity-90">
          DVSA-approved Clutch Repair carried out by experienced, qualified technicians
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a href="tel:+447752364546" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call +44775 236 4546
            </button>
          </a>

          {/* Book Clutch Repair Button */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-colors"
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
            Book Clutch Repair
          </a>
        </div>
      </div>
    </section>
  );
}
