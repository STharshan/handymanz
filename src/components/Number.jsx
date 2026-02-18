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
            { threshold: 0.3 }
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
            className="relative overflow-hidden bg-white"
        >
            {/* Orange background — full on mobile, right portion on desktop */}
            <div
                className="absolute top-0 right-0 h-full w-full lg:w-[60%] -z-10"
                style={{ backgroundColor: ORANGE }}
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* ── LEFT CONTENT ── */}
                    <div className="text-gray-900">

                        {/* Eyebrow label */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-0.5" style={{ backgroundColor: ORANGE }} />
                            <span className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                Get to know us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                            Meet Tom, <br className="hidden sm:block" />
                            the founder
                        </h2>

                        {/* Body copy */}
                        <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                            I completed my mechanical apprenticeship over 20 years ago at Godfrey Davies Peugeot, Nottingham. I then went on to work for Honda, receiving some of the best technical training the industry has to offer.
                        </p>

                        {/* Stats grid */}
                        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12">
                            <CounterBlock
                                value={counts.experience}
                                symbol="+"
                                label="Years of Experience"
                                description="Trusted, professional service built on decades of hands-on expertise."
                                color={ORANGE}
                            />
                            <CounterBlock
                                value={counts.projects}
                                symbol="+"
                                label="Completed Projects"
                                description="Successfully delivered across a wide range of clients and requirements."
                                color={ORANGE}
                            />
                            <CounterBlock
                                value={counts.clients}
                                symbol="+"
                                label="Total Clients"
                                description="A growing base of satisfied clients who trust us with their vehicles."
                                color={ORANGE}
                            />
                            <CounterBlock
                                value={counts.team}
                                label="Team Members"
                                description="A tight-knit team committed to quality, precision, and care."
                                color={ORANGE}
                            />
                        </div>
                    </div>

                    {/* ── RIGHT — Two Image Layout ── */}
                    {/*
                        pb-* on the wrapper gives the secondary image
                        (which translateY's downward) space to breathe
                        without clipping or overlapping the section edge.
                    */}
                    <div className="relative w-full flex justify-center lg:justify-end pt-6 pb-20 sm:pb-24 lg:py-10">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

                            {/* Soft tinted accent behind primary image */}
                            <div
                                className="absolute -top-5 -left-5 w-3/4 h-3/4 rounded-3xl -z-10"
                                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                            />

                            {/* Primary image — top-left, taller */}
                            <div className="relative z-10 w-[70%] rounded-2xl overflow-hidden shadow-2xl border-[5px] border-white">
                                <img
                                    src="a2.jpg"
                                    alt="Tom at work"
                                    className="w-full object-cover"
                                    style={{ height: "clamp(240px, 42vw, 440px)" }}
                                />
                                <div className="h-2 w-full" style={{ backgroundColor: ORANGE }} />
                            </div>

                            {/* Secondary image — overlapping bottom-right */}
                            <div
                                className="absolute bottom-0 right-0 z-20 w-[58%] rounded-2xl overflow-hidden shadow-2xl border-[5px] border-white"
                                style={{ transform: "translateY(28%)" }}
                            >
                                <img
                                    src="a1.jpg"
                                    alt="Workshop detail"
                                    className="w-full object-cover"
                                    style={{ height: "clamp(200px, 32vw, 290px)" }}
                                />

                                {/* Orange badge */}
                                <div
                                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                                    style={{ backgroundColor: ORANGE }}
                                >
                                    20+ Years
                                </div>
                            </div>

                            {/* Dot grid decoration */}
                            <div className="absolute -bottom-3 -left-5 grid grid-cols-5 gap-2 opacity-25 -z-10">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-white" />
                                ))}
                            </div>

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
            <h3 className="text-4xl sm:text-5xl font-extrabold flex items-baseline leading-none">
                {value}
                {symbol && (
                    <span
                        className="text-4xl sm:text-5xl font-extrabold ml-0.5"
                        style={{ color }}
                    >
                        {symbol}
                    </span>
                )}
            </h3>
            <p className="mt-2 font-bold text-gray-800 uppercase text-xs tracking-widest">
                {label}
            </p>
            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
}