"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const image1Ref = useRef<HTMLDivElement>(null);
    const image2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        if (image1Ref.current) {
            gsap.fromTo(image1Ref.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image1Ref.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        if (image2Ref.current) {
            gsap.fromTo(image2Ref.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image2Ref.current,
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
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div ref={image1Ref} className="relative w-full h-auto">
                <Image
                    src="/images/medicalImage.png"
                    alt="Medical Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div ref={image2Ref} className="relative w-full h-auto">
                <Image
                    src="/images/section1.png"
                    alt="Section 1"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
}
