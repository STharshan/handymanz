import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-white h-230 py-20">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 w-full h-250 md:w-2/5 bg-orange-600 -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-16 md:flex md:items-center md:justify-between gap-12">
        {/* Image Wrapper */}
        <div className="relative md:w-1/2 mb-10 md:mb-0">
          {/* Orange Border Effect */}
          <div className="absolute -top-15 -left-35 w-150 h-190 bg-orange-600 z-0" />

          <div className="relative z-10 border-4 border-white shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/66229f17735aec2fc3454631/6624eab0aadb32f3541f9b25_3558.webp"
              alt="Craftsman at work"
              className="w-full h-150 object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          {/* "About Us" Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-orange-600" />
            <p className="text-sm font-semibold text-gray-800">About Us</p>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Crafting Homes, Building Trust: Discover Handymanz
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-8">
            Welcome to Handymanz, where craftsmanship meets convenience. With a passion for excellence and a commitment to customer satisfaction, Handymanz is your premier destination for all your home improvement needs.
          </p>

          {/* Button */}
          <a
            href="/about"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
