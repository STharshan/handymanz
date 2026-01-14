import React from "react";
import AirConHero from "../../components/ServicePage/MotPage/AirConHero";
import AirConServices from "../../components/ServicePage/MotPage/AirConServices";
import WhyServiceAirConditioning from "../../components/ServicePage/MotPage/WhyServiceAirConditioning";
import EmergencyCTA from "../../components/ServicePage/MotPage/EmergencyCTA";

export default function Mot() {
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
