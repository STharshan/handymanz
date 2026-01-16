import React from "react";
import AirConHero from "../../components/ServicePage/GearPage/AirConHero";
import AirConServices from "../../components/ServicePage/GearPage/AirConServices";
import WhyServiceAirConditioning from "../../components/ServicePage/GearPage/WhyServiceAirConditioning";
import EmergencyCTA from "../../components/ServicePage/GearPage/EmergencyCTA";

export default function Gear() {
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
