import React from "react";
import AirConHero from "../../components/ServicePage/ClutchPage/AirConHero";
import AirConServices from "../../components/ServicePage/ClutchPage/AirConServices";
import WhyServiceAirConditioning from "../../components/ServicePage/ClutchPage/WhyServiceAirConditioning";
import EmergencyCTA from "../../components/ServicePage/ClutchPage/EmergencyCTA";

export default function Clutch() {
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
