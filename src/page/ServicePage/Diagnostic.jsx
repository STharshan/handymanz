import React from "react";
import AirConHero from "../../components/ServicePage/DiagnosticPage/AirConHero";
import AirConServices from "../../components/ServicePage/DiagnosticPage/AirConServices";
import WhyServiceAirConditioning from "../../components/ServicePage/DiagnosticPage/WhyServiceAirConditioning";
import EmergencyCTA from "../../components/ServicePage/DiagnosticPage/EmergencyCTA";

export default function Diagnostic() {
  return (
    <div>
      {/* Hero */}
      <section >
        <AirConHero />
      </section>
      <section >
        <AirConServices />
      </section>
      <section >
        <WhyServiceAirConditioning />
      </section>
      <section >
        <EmergencyCTA />
      </section>
    </div>
  );
}
