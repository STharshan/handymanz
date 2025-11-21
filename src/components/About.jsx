import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-white overflow-hidden py-20">
      {/* 🔶 Orange Background (left side on large, full on mobile) */}
      <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 bg-orange-600 -z-10 transition-all duration-500" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* 🖼️ Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          {/* Orange Border Behind Image */}
          <div className="absolute -top-6 -left-26 w-[90%] md:w-[95%] h-[110%] bg-orange-600 rounded-xl -z-10"></div>

          <div className="relative w-full max-w-md md:max-w-lg border-4 border-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="/a1.webp"
              alt="Craftsman at work"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 🧱 Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Title */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-12 h-1 bg-orange-600" />
            <p className="text-sm font-semibold text-gray-800">Our story</p>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900 leading-tight mb-6">
            We established in 2020 and have over 20 years of experience in the trade with a team of fully qualified technicians. Our backgrounds range from Honda, Vauxhall, Peugeot and Saab to many of the biggest aftermarket companies around.
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
           We are embedded into Nottinghamshire’s aftermarket and main dealer garage system and have great access to some of the best technical support there is to offer at very competitive rates.
          </p>

          {/* CTA Button */}
          <a
            href="/about"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-md"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
