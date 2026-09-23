"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import lottie from "lottie-web";

export default function ShipSection() {
    const shipContainerRef = useRef(null);
    const shipWrapperRef = useRef(null);

    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            image: "/images (3).jpg",
            number: "01",
            title: "Global Trading",
            description:
                "Connecting manufacturers, suppliers and buyers across global markets.",
        },
        {
            image: "/images (2).jpg",
            number: "02",
            title: "Reliable Supply",
            description:
                "Consistent sourcing and dependable supply solutions for industries.",
        },
        {
            image: "/images.jpg",
            number: "03",
            title: "Worldwide Logistics",
            description:
                "Efficient international logistics designed for seamless delivery.",
        },
    ];

    /* =========================
       LOTTIE SHIP
    ========================= */

    useEffect(() => {
        if (!shipContainerRef.current) return;

        let animation;

        const loadShip = async () => {
            try {
                const response = await fetch("/animation/Ship.json");

                if (!response.ok) {
                    throw new Error("Ship.json not found");
                }

                const animationData = await response.json();

                animation = lottie.loadAnimation({
                    container: shipContainerRef.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData,
                });
            } catch (error) {
                console.error("Lottie error:", error);
            }
        };

        loadShip();

        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    }, []);

    /* =========================
       SHIP FLOAT
    ========================= */

    useEffect(() => {
        if (!shipWrapperRef.current) return;

        const floatAnimation = gsap.to(shipWrapperRef.current, {
            y: -15,
            rotate: 2,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        return () => {
            floatAnimation.kill();
        };
    }, []);

    /* =========================
       SLIDER AUTOPLAY
    ========================= */

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => {
                return (prev + 1) % slides.length;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">

            {/* Background decoration */}
            <div className="absolute -left-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#f5bd24]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.5fr]">

                    {/* =====================================
                        LEFT SHIP
                    ===================================== */}

                    <div className="relative flex min-h-[400px] items-center justify-center">

                        {/* Outer circle */}
                        <div className="absolute h-[300px] w-[300px] rounded-full border border-[#f5bd24]/30 sm:h-[370px] sm:w-[370px]" />

                        {/* Inner circle */}
                        <div className="absolute h-[230px] w-[230px] rounded-full bg-[#f5bd24]/10 blur-2xl sm:h-[280px] sm:w-[280px]" />

                        {/* Ship */}
                        <div
                            ref={shipWrapperRef}
                            className="relative z-10 w-[230px] sm:w-[280px] lg:w-[400px]"
                        >
                            <div
                                ref={shipContainerRef}
                                className="h-[280px] w-full sm:h-[400px]"
                            />
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute left-[15%] top-[20%] h-3 w-3 rounded-full bg-[#f5bd24]" />

                        <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-[#0d2461]" />

                        <div className="absolute bottom-[20%] left-[20%] h-2 w-2 rounded-full bg-[#f5bd24]" />

                    </div>


                    {/* =====================================
                        RIGHT SLIDER
                    ===================================== */}

                    <div className="relative">

                        {/* Slider */}
                        <div className="relative h-[430px] w-full overflow-hidden rounded-[30px] bg-[#0d2461] sm:h-[500px]">

                            {slides.map((slide, index) => (
                                <div
                                    key={slide.number}
                                    className={`absolute inset-0 transition-all duration-700 ${index === activeSlide
                                            ? "visible opacity-100"
                                            : "invisible opacity-0"
                                        }`}
                                >

                                    {/* Image */}
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d] via-[#071a3d]/50 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-12">

                                        <div className="mb-5 flex items-center gap-4">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5bd24] font-bold text-[#0d2461]">
                                                {slide.number}
                                            </div>

                                            <div className="h-px w-16 bg-white/50" />

                                        </div>

                                        <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                            {slide.title}
                                        </h2>

                                        <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                                            {slide.description}
                                        </p>

                                    </div>

                                </div>
                            ))}

                            {/* =====================================
                                DOTS
                            ===================================== */}

                            <div className="absolute bottom-6 right-7 z-30 flex items-center gap-2">

                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setActiveSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide
                                                ? "w-8 bg-[#f5bd24]"
                                                : "w-2 bg-white/60"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}

                            </div>

                        </div>

                        {/* Top badge */}
                        <div className="absolute -top-5 right-6 z-40 rounded-full bg-[#0d2461] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl">
                            Global Reach
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}