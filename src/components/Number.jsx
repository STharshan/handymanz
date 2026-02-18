import { useEffect, useState, useRef } from "react";

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
                    animateCount("experience", 20);
                    animateCount("projects", 1000);
                    animateCount("clients", 1000);
                    animateCount("team", 4);
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
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-20"
        >
            {/* Orange background right side */}
            <div
                className="absolute top-0 right-0 h-full w-full lg:w-[68%] -z-10"
                style={{ backgroundColor: ORANGE }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
                {/* LEFT CONTENT */}
                <div className="text-gray-900">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-0.5" style={{ backgroundColor: ORANGE }} />
                        <span className="text-sm font-semibold text-gray-800">
                            Get to know us
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Meet Tom, the founder
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-lg">
                        I completed my mechanical apprenticeship over 20 years ago at Godfrey Davies Peugeot, Nottingham. I then went on to work for Honda, receiving some of the best technical training the industry has to offer.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-8 sm:gap-10">
                        <CounterBlock
                            value={counts.experience}
                            symbol="+"
                            label="Years of Experience"
                            description="Delivering trusted and professional services with decades of industry expertise."
                            color={ORANGE}
                        />
                        <CounterBlock
                            value={counts.projects}
                            symbol="+"
                            label="Completed Projects"
                            description="Successfully completed projects across diverse clients and requirements."
                            color={ORANGE}
                        />
                        <CounterBlock
                            value={counts.clients}
                            symbol="+"
                            label="Total Clients"
                            description="Serving a growing base of satisfied clients with reliable solutions."
                            color={ORANGE}
                        />
                        <CounterBlock
                            value={counts.team}
                            label="Team Members"
                            description="A dedicated team committed to quality, precision, and customer satisfaction."
                            color={ORANGE}
                        />
                    </div>
                </div>

                {/* RIGHT — Two Image Modern Layout */}
                <div className="relative w-full flex justify-center lg:justify-end mt-16 sm:mt-20 lg:mt-0">
                    <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl" style={{ minHeight: "420px" }}>

                        {/* Decorative background accent */}
                        <div
                            className="absolute -top-5 -left-5 w-2/3 h-2/3 rounded-2xl opacity-20 -z-10"
                            style={{ backgroundColor: "#fff" }}
                        />

                        {/* Primary image — larger, top-left */}
                        <div className="relative z-10 w-[72%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="a1.jpg"
                                alt="Tom at work"
                                className="w-full h-72 sm:h-96 md:h-104 lg:h-112 object-cover"
                            />
                            {/* Subtle orange bottom bar */}
                            <div
                                className="h-2 w-full"
                                style={{ backgroundColor: ORANGE }}
                            />
                        </div>

                        {/* Secondary image — overlapping bottom-right */}
                        <div
                            className="absolute bottom-0 right-0 z-20 w-[56%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                            style={{ transform: "translateY(10%)" }}
                        >
                            <img
                                src="a2.jpg"
                                alt="Workshop detail"
                                className="w-full h-48 sm:h-60 md:h-64 lg:h-72 object-cover"
                            />
                            {/* Badge overlay */}
                            <div
                                className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                                style={{ backgroundColor: ORANGE }}
                            >
                                20+ Years
                            </div>
                        </div>

                        {/* Floating dot grid decoration */}
                        <div className="absolute -bottom-6 -left-6 grid grid-cols-4 gap-2 opacity-30 -z-10">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2.5 h-2.5 rounded-full bg-white"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CounterBlock({ value, symbol, label, description, color }) {
    return (
        <div>
            <h3 className="text-4xl sm:text-5xl font-bold flex items-baseline">
                {value}
                <span
                    className="text-4xl sm:text-5xl font-bold ml-1"
                    style={{ color }}
                >
                    {symbol}
                </span>
            </h3>
            <p className="font-semibold mt-1 text-gray-800 uppercase text-xs tracking-wider">
                {label}
            </p>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {description}
            </p>
        </div>
    );
}