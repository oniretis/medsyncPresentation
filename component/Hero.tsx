"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(heroRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        if (imageRef.current) {
            gsap.fromTo(imageRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    delay: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url('/images/02.jpg')" }}
        >
            {/* Overlay to dim background image */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Main Foreground Container */}
            <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-12">

                {/* Header Text - Prominent Foreground */}
                <div ref={titleRef} className="max-w-3xl z-0 space-y-4 absolute ">
                    <h1 className="text-[clamp(80px,15vw,200px)] font-black leading-none tracking-[-0.04em] text-white/85 drop-shadow-2xl"> MedSync </h1>
                </div>

                {/* App Image - Placed beneath the text */}
                <div ref={imageRef} className="w-full max-w-4xl z-20">
                    <img
                        src="/images/homeImage.png"
                        alt="MedSync App Interface"
                        className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                    />
                </div>

            </div>
        </section>
    );
}