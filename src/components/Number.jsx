"use client";
import React, { useEffect, useState, useRef } from "react";

export default function OurNumbers() {
  const ORANGE = "#F24E1E";
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    team: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount("experience", 16);
          animateCount("projects", 58);
          animateCount("clients", 60);
          animateCount("team", 27);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key, endValue) => {
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = endValue / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
    }, stepTime);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* 🔶 Orange background on right side */}
      <div
        className="absolute top-0 right-0 h-full w-[68%] -z-10"
        style={{ backgroundColor: ORANGE }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px]" style={{ backgroundColor: ORANGE }} />
            <span className="text-sm font-semibold text-gray-800">
              Our Numbers
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Count on Handymanz: Our <br />
            Accomplishments in Numbers
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
            Numbers are the testament to our commitment and proficiency at
            Handymanz. With decades of collective experience, our team has
            successfully accomplished thousands of projects, earning the trust
            and satisfaction of countless homeowners.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 sm:gap-10">
            <CounterBlock
              value={counts.experience}
              symbol="Y"
              label="Years of Experience"
              color={ORANGE}
            />
            <CounterBlock
              value={counts.projects}
              symbol="K"
              label="Completed Projects"
              color={ORANGE}
            />
            <CounterBlock
              value={counts.clients}
              symbol="L"
              label="Total Clients"
              color={ORANGE}
            />
            <CounterBlock
              value={counts.team}
              symbol="+"
              label="Team Members"
              color={ORANGE}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
            {/* Decorative orange border layer */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500 rounded-xl -z-10"></div>

            <img
              src="https://cdn.prod.website-files.com/66229f17735aec2fc3454631/6624eab0aadb32f3541f9b25_3558.webp"
              alt="Craftsman at work"
              className="w-full h-auto rounded-xl shadow-lg object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterBlock({ value, symbol, label, color }) {
  return (
    <div>
      <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 flex items-baseline">
        {value}
        <span className="text-4xl sm:text-5xl font-bold ml-1" style={{ color }}>
          {symbol}
        </span>
      </h3>
      <p className="font-semibold mt-1 text-gray-800">{label}</p>
      <p className="text-sm text-gray-500 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>
  );
}
