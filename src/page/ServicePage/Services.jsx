import React from "react";
import AirConHero from "../../components/ServicePage/ServicesPage/AirConHero";
import AirConServices from "../../components/ServicePage/ServicesPage/AirConServices";
import WhyServiceAirConditioning from "../../components/ServicePage/ServicesPage/WhyServiceAirConditioning";
import EmergencyCTA from "../../components/ServicePage/ServicesPage/EmergencyCTA";

export default function Services() {
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
