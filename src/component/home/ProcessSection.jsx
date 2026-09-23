"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ClipboardCheck,
    Factory,
    PackageCheck,
    Truck,
    Handshake,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        number: "01",
        title: "Understand",
        subtitle: "Start with the requirement",
        description:
            "We first understand your product requirement, application, quantity, grade, technical expectations, and delivery needs.",
        points: ["Product & grade", "Application", "Quantity planning"],
        icon: ClipboardCheck,
    },
    {
        number: "02",
        title: "Source",
        subtitle: "Connect with the right supply",
        description:
            "Our diversified supplier network helps us source polymers, chemicals, additives, and other materials according to your requirement.",
        points: ["Supplier network", "Availability", "Commercial coordination"],
        icon: Factory,
    },
    {
        number: "03",
        title: "Quality Check",
        subtitle: "Focus on consistency",
        description:
            "We focus on specifications and quality requirements so the material is aligned with the intended application and manufacturing needs.",
        points: ["Specification review", "Quality focus", "Application suitability"],
        icon: PackageCheck,
    },
    {
        number: "04",
        title: "Supply",
        subtitle: "From source to your business",
        description:
            "We coordinate packaging, dispatch, logistics, and delivery to support reliable bulk supply across India.",
        points: ["Bulk supply", "Logistics", "Pan-India reach"],
        icon: Truck,
    },
    {
        number: "05",
        title: "Build Relationships",
        subtitle: "Beyond a single order",
        description:
            "Our focus extends beyond one transaction. We work toward long-term relationships, recurring requirements, and future business needs.",
        points: ["Long-term partnerships", "Responsive support", "Ongoing supply"],
        icon: Handshake,
    },
];

export default function ProcessSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".process-header", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".process-header",
                    start: "top 85%",
                    once: true,
                },
            });

            // Cards animation
            gsap.from(cardsRef.current, {
                y: 70,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".process-list",
                    start: "top 80%",
                    once: true,
                },
            });

            // Vertical line
            gsap.from(".process-line-fill", {
                scaleY: 0,
                transformOrigin: "top",
                ease: "none",
                scrollTrigger: {
                    trigger: ".process-list",
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: 1,
                },
            });

            // Floating SVGs
            gsap.to(".process-shape-one", {
                y: -25,
                x: 12,
                rotation: 8,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".process-shape-two", {
                y: 30,
                rotation: -10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".process-shape-three", {
                y: -20,
                rotation: 12,
                duration: 4.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
            {/* FLOATING SHAPE 1 */}
            <div className="process-shape-one pointer-events-none absolute -left- top-24 opacity-[0.7]">
                <svg
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z"
                        fill="#0d2461"
                    />
                </svg>
            </div>

            {/* FLOATING SHAPE 2 */}
            <div className="process-shape-two pointer-events-none absolute right-[-25px] top-[10%] opacity-[0.8]">
                <svg
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z"
                        fill="#0d2461"
                    />
                </svg>
            </div>

            {/* FLOATING SHAPE 3 */}
            <div className="process-shape-three pointer-events-none absolute top-[50%] right-[3%] opacity-[0.8]">
                <svg
                    width="110"
                    height="110"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z"
                        fill="#0d2461"
                    />
                </svg>
            </div>

            <div className="process-shape-three pointer-events-none absolute bottom-50 left-[5%] opacity-[0.8]">
                <svg
                    width="110"
                    height="110"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z"
                        fill="#0d2461"
                    />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

                {/* HEADER */}
                <div className="process-header mb-14 max-w-3xl">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#0d2461]" />

                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0d2461]">
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-7xl">
                        From requirement
                        <br />
                        <span className="text-[#0d2461]">
                            to reliable supply.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
                        A structured approach designed to understand your needs,
                        connect the right supply, and build reliable long-term
                        business relationships.
                    </p>
                </div>

                {/* PROCESS */}
                <div className="process-list relative">

                    {/* Background Line */}
                    <div className="absolute left-[27px] top-0 hidden h-full w-px bg-black/10 md:block" />

                    {/* Animated Line */}
                    <div className="process-line-fill absolute left-[27px] top-0 hidden h-full w-px bg-[#0d2461] md:block" />

                    <div className="space-y-6 md:space-y-7">

                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    ref={(el) => {
                                        cardsRef.current[index] = el;
                                    }}
                                    className="group relative grid md:grid-cols-[56px_1fr]"
                                >
                                    {/* NUMBER */}
                                    <div className="relative z-10 hidden md:flex">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white">
                                            <span className="text-xs font-bold tracking-widest text-[#0d2461]">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CARD */}
                                    <div className="ml-0 border border-black/10 bg-white transition-all duration-500 hover:border-[#0d2461]/30 hover:shadow-[0_18px_50px_rgba(13,36,97,0.08)] md:ml-8">

                                        <div className="grid lg:grid-cols-[0.9fr_1.5fr]">

                                            {/* LEFT */}
                                            <div className="p-6 sm:p-8 lg:p-9">

                                                {/* MOBILE NUMBER */}
                                                <div className="mb-5 flex items-center gap-3 md:hidden">
                                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2461] text-xs font-bold text-white">
                                                        {step.number}
                                                    </span>
                                                </div>

                                                {/* ICON */}
                                                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-black text-white">
                                                    <Icon
                                                        size={23}
                                                        strokeWidth={1.5}
                                                    />
                                                </div>

                                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2461]">
                                                    {step.subtitle}
                                                </p>

                                                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                                                    {step.title}
                                                </h3>
                                            </div>

                                            {/* RIGHT */}
                                            <div className="border-t border-black/10 bg-[#fafafa] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">

                                                <p className="max-w-2xl text-base leading-7 text-black/65">
                                                    {step.description}
                                                </p>

                                                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                                                    {step.points.map((point) => (
                                                        <div
                                                            key={point}
                                                            className="flex items-center gap-2 text-sm font-medium text-black"
                                                        >
                                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0d2461]">
                                                                <svg
                                                                    width="11"
                                                                    height="11"
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M2.5 6L5 8.5L9.5 3.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>

                                                            {point}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}