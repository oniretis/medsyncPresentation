"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const techGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            // 1. Section fade-in
            tl.fromTo(
                sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.out" }
            )
                // 2. Title entrance (starts 0.2s after section start)
                .fromTo(
                    titleRef.current,
                    { opacity: 0, y: -30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    0.2
                )
                // 3. Content entrance (starts 0.4s after section start)
                .fromTo(
                    contentRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    0.4
                );

            // 4. Staggered Tech Grid items (starts 0.6s after section start)
            if (techGridRef.current) {
                const techItems = gsap.utils.toArray(techGridRef.current.children);
                tl.fromTo(
                    techItems,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    0.6
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl my-8"
        >
            <h2
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800"
            >
                Building MedSync: Technology & Process
            </h2>

            <div ref={contentRef} className="max-w-4xl mx-auto space-y-8 mb-12">
                <article className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-700">
                        The Technology Stack
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        MedSync is built using cutting-edge mobile development technologies that ensure performance, maintainability, and cross-platform compatibility. The core of the application leverages React Native, allowing us to write once and deploy to both iOS and Android platforms with native performance.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Expo serves as our development framework, providing a comprehensive toolset that streamlines the development process with features like over-the-air updates, easy testing, and simplified build configurations. This combination significantly reduces development time while maintaining high-quality standards.
                    </p>
                </article>

                <article className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-700">
                        Styling & UI Development
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        For styling, we utilize NativeWind (powered by Tailwind CSS), which brings the utility-first CSS approach to React Native. This allows for rapid UI development, consistent design systems, and easy maintenance. The ability to use familiar Tailwind classes directly in React Native components creates a seamless development experience.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        The styling approach ensures responsive designs that work across different screen sizes and orientations, while maintaining a cohesive visual identity throughout the application.
                    </p>
                </article>

                <article className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-700">
                        Development Process
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        My development process follows an iterative approach that prioritizes user experience and code quality. I begin with thorough planning and wireframing, ensuring that the user journey is mapped out before writing any code. This foundation helps prevent scope creep and ensures that features align with user needs.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        I work in sprints, focusing on delivering functional components that can be tested and refined incrementally. Regular testing on both iOS and Android devices ensures cross-platform consistency. Code reviews and continuous integration help maintain code quality and catch issues early in the development cycle.
                    </p>
                </article>

                <article className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-slate-700">
                        Quality & Performance
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Performance optimization is integral to the development process. I implement lazy loading, optimize images, and use efficient state management to ensure smooth app performance. Regular profiling helps identify and address bottlenecks, ensuring that MedSync remains responsive even with complex medical data and real-time synchronization features.
                    </p>
                </article>
            </div>

            <div
                ref={techGridRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
                <div className="bg-blue-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    React Native
                </div>
                <div className="bg-purple-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    Expo
                </div>
                <div className="bg-cyan-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    NativeWind
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    Tailwind CSS
                </div>
                <div className="bg-orange-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    TypeScript
                </div>
                <div className="bg-pink-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    React Hooks
                </div>
                <div className="bg-indigo-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    Firebase
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg text-center font-semibold shadow-md">
                    Redux
                </div>
            </div>
        </section>
    );
}