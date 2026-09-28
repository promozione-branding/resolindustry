
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

export default function ShipSection() {
    const sectionRef = useRef(null);
    const shipContainerRef = useRef(null);
    const shipWrapperRef = useRef(null);
    const shipTrackRef = useRef(null);

    const cardsRef = useRef([]);

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

    // =====================================================
    // LOTTIE SHIP
    // =====================================================

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

    // =====================================================
    // GSAP
    // =====================================================

    useEffect(() => {
        const section = sectionRef.current;
        const ship = shipWrapperRef.current;
        const track = shipTrackRef.current;

        if (!section || !ship || !track) return;

        const ctx = gsap.context(() => {
            // -------------------------------------------------
            // IMPORTANT:
            // Make cards visible FIRST.
            // -------------------------------------------------

            gsap.set(cardsRef.current, {
                opacity: 1,
                y: 0,
            });

            // -------------------------------------------------
            // CARD ENTRANCE
            // -------------------------------------------------

            gsap.fromTo(
                cardsRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // -------------------------------------------------
            // SHIP INITIAL POSITION
            // -------------------------------------------------

            gsap.set(ship, {
                x: 0,
                y: 0,
                rotate: 0,
            });

            // -------------------------------------------------
            // SHIP MOVEMENT
            // -------------------------------------------------

            const getShipMovement = () => {
                const trackWidth = track.clientWidth;
                const shipWidth = ship.offsetWidth;

                return Math.max(
                    0,
                    trackWidth - shipWidth
                );
            };

            gsap.to(ship, {
                x: getShipMovement,
                ease: "none",

                scrollTrigger: {
                    trigger: section,
                    start: "top 55%",
                    end: "bottom 20%",
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                },
            });

            // -------------------------------------------------
            // SHIP FLOAT
            // -------------------------------------------------

            gsap.to(ship, {
                y: -12,
                rotate: 1.5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // -------------------------------------------------
            // WATER WAVES
            // -------------------------------------------------

            gsap.to(".water-wave", {
                x: 80,
                duration: 3,
                repeat: -1,
                ease: "none",
            });

            gsap.to(".water-wave-slow", {
                x: -60,
                duration: 5,
                repeat: -1,
                ease: "none",
            });

            // -------------------------------------------------
            // REFRESH AFTER EVERYTHING IS READY
            // -------------------------------------------------

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                w-full
                overflow-hidden
                bg-white
                py-10
                sm:py-12
                lg:py-15
            "
        >
            {/* BACKGROUND DECORATION */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-180px]
                    top-[10%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#f5bd24]/10
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-200px]
                    top-[45%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#0d2461]/5
                    blur-[120px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-[1450px]
                    px-5
                    sm:px-8
                    lg:px-12
                "
            >
                {/* HEADER */}

                <div
                    className="
                        mb-14
                        flex
                        flex-col
                        gap-5
                        lg:mb-20
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    "
                >
                    <div className="max-w-3xl">
                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#f5bd24]
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#0d2461]/60
                                "
                            >
                                Global Network
                            </span>
                        </div>

                        <h2
                            className="
                                text-4xl
                                font-semibold
                                leading-[0.95]
                                tracking-[-0.04em]
                                text-[#071a3d]
                                sm:text-5xl
                                lg:text-7xl
                            "
                        >
                            Moving products.
                            <br />

                            <span className="text-[#0d2461]/35">
                                Connecting the world.
                            </span>
                        </h2>
                    </div>

                    <p
                        className="
                            max-w-md
                            text-sm
                            leading-7
                            text-[#071a3d]/60
                            lg:pb-2
                        "
                    >
                        From sourcing to delivery, we
                        connect industries with reliable
                        global trading and logistics
                        solutions.
                    </p>
                </div>

                {/* =================================================
                    CARDS
                ================================================= */}

                <div
                    className="
                        relative
                        z-10
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-3
                    "
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.number}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[28px]
                                border
                                border-[#071a3d]/10
                                bg-[#f7f8fa]
                                opacity-100
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-2xl
                                hover:shadow-[#0d2461]/10
                            "
                        >
                            {/* IMAGE */}

                            <div
                                className="
                                    relative
                                    aspect-[1.35/1]
                                    overflow-hidden
                                "
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="
                                        block
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#071a3d]/50
                                        via-transparent
                                        to-transparent
                                    "
                                />

                                {/* NUMBER */}

                                <div
                                    className="
                                        absolute
                                        left-5
                                        top-5
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-sm
                                        font-bold
                                        text-[#0d2461]
                                        shadow-lg
                                    "
                                >
                                    {slide.number}
                                </div>

                                {/* ARROW */}

                                <div
                                    className="
                                        absolute
                                        bottom-5
                                        right-5
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#f5bd24]
                                        text-[#071a3d]
                                        transition-transform
                                        duration-500
                                        group-hover:rotate-45
                                    "
                                >
                                    ↗
                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className="p-6 sm:p-7">
                                <h3
                                    className="
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        text-[#071a3d]
                                        sm:text-2xl
                                    "
                                >
                                    {slide.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-[#071a3d]/55
                                    "
                                >
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* =================================================
                    SHIP JOURNEY
                ================================================= */}

                <div
                    className="
                        relative
                        mt-10
                        overflow-hidden
                        rounded-[35px]
                        bg-white
                        px-5
                        py-6
                        sm:px-10
                        lg:px-16
                    "
                >
                    <div
                        ref={shipTrackRef}
                        className="
                            relative
                            h-[250px]
                            w-full
                            overflow-hidden
                        "
                    >
                        {/* WATER */}

                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                h-[95px]
                                w-full
                                overflow-hidden
                            "
                        >
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-[-10%]
                                    h-[75px]
                                    w-[120%]
                                    rounded-[50%_50%_0_0]
                                    bg-gradient-to-b
                                    from-blue-600/10
                                    to-blue-600/5
                                "
                            />

                            <div
                                className="
                                    water-wave
                                    absolute
                                    -top-[12px]
                                    left-[-10%]
                                    h-[30px]
                                    w-[120%]
                                    rounded-[50%]
                                    border-t-[3px]
                                    border-[#0d2461]/20
                                "
                            />

                            <div
                                className="
                                    water-wave-slow
                                    absolute
                                    top-0
                                    left-[-20%]
                                    h-[35px]
                                    w-[140%]
                                    rounded-[50%]
                                    border-t-2
                                    border-[#f5bd24]/25
                                "
                            />

                            <div
                                className="
                                    water-wave
                                    absolute
                                    top-[15px]
                                    left-[-5%]
                                    h-[25px]
                                    w-[110%]
                                    rounded-[50%]
                                    border-t
                                    border-[#0d2461]/15
                                "
                            />

                            <div className="absolute left-[15%] top-[30px] h-[2px] w-[70px] rounded-full bg-[#0d2461]/15" />

                            <div className="absolute left-[48%] top-[42px] h-[2px] w-[90px] rounded-full bg-[#0d2461]/10" />

                            <div className="absolute right-[12%] top-[25px] h-[2px] w-[60px] rounded-full bg-[#0d2461]/15" />
                        </div>

                        {/* SHIP */}

                        <div
                            ref={shipWrapperRef}
                            className="
                                absolute
                                left-0
                                top-0
                                z-20
                                w-[180px]
                                sm:w-[240px]
                                lg:w-[300px]
                                will-change-transform
                            "
                        >
                            <div
                                ref={shipContainerRef}
                                className="
                                    h-[150px]
                                    w-full
                                    sm:h-[190px]
                                    lg:h-[230px]
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}