import React from "react";
import AirConHero from "../../components/ServicePage/WheelPage/AirConHero";
import AirConServices from "../../components/ServicePage/WheelPage/AirConServices";
import WhyServiceAirConditioning from "../../components/ServicePage/WheelPage/WhyServiceAirConditioning";
import EmergencyCTA from "../../components/ServicePage/WheelPage/EmergencyCTA";

export default function Wheel() {
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
