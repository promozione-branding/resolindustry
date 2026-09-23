"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import lottie from "lottie-web";

import {
    Network,
    ShieldCheck,
    Truck,
    Headphones,
    ArrowUpRight,
} from "lucide-react";

/* =========================================================
   REASONS
========================================================= */

const reasons = [
    {
        number: "01",
        title: "Strong Supplier Network",
        description:
            "A diversified network of trusted manufacturers and suppliers across polymers, chemicals and industrial materials.",
        icon: Network,
    },
    {
        number: "02",
        title: "Quality Focus",
        description:
            "We focus on specifications, consistency and application suitability to help you source the right material.",
        icon: ShieldCheck,
    },
    {
        number: "03",
        title: "Reliable Supply",
        description:
            "From sourcing and packaging to logistics and delivery, we coordinate the complete supply process.",
        icon: Truck,
    },
    {
        number: "04",
        title: "Responsive Support",
        description:
            "Clear communication and ongoing support built around your business requirements.",
        icon: Headphones,
    },
];

/* =========================================================
   WHY CARD
========================================================= */

function WhyCard({ item }) {
    const Icon = item.icon;

    return (
        <div
            className="
                group
                relative
                min-h-[250px]
                overflow-hidden
                rounded-sm
                border
                border-[#0d2461]/15
                bg-white
                p-7
                shadow-[0_8px_30px_rgba(13,36,97,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#f5bd24]
                hover:shadow-[0_20px_50px_rgba(13,36,97,0.12)]
            "
        >
            {/* Background number */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-2
                    -top-6
                    select-none
                    text-[100px]
                    font-black
                    leading-none
                    text-[#0d2461]/[0.035]
                "
            >
                {item.number}
            </div>

            {/* Top Row */}

            <div className="relative z-10 flex items-center justify-between">
                <span
                    className="
                        text-[11px]
                        font-bold
                        tracking-[0.3em]
                        text-[#0d2461]/45
                    "
                >
                    {item.number}
                </span>

                <div
                    className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        border
                        border-[#0d2461]/15
                        text-[#0d2461]
                        transition-all
                        duration-300
                        group-hover:border-[#f5bd24]
                        group-hover:bg-[#f5bd24]
                    "
                >
                    <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                    />
                </div>
            </div>

            {/* Icon */}

            <div
                className="
                    relative
                    z-10
                    mt-7
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    bg-[#0d2461]
                    text-[#f5bd24]
                    transition-all
                    duration-300
                    group-hover:bg-[#f5bd24]
                    group-hover:text-[#0d2461]
                "
            >
                <Icon
                    size={22}
                    strokeWidth={1.7}
                />
            </div>

            {/* Title */}

            <h3
                className="
                    relative
                    z-10
                    mt-2
                    text-3xl
                    font-bold
                    leading-tight
                    text-[#0d2461]
                "
            >
                {item.title}
            </h3>

            {/* Description */}

            <p
                className="
                    relative
                    z-10
                    mt-2
                    max-w-[500px]
                    text-sm
                    leading-6
                    text-black/55
                "
            >
                {item.description}
            </p>

            {/* Bottom yellow line */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    bg-[#f5bd24]
                    transition-all
                    duration-500
                    group-hover:h-[5px]
                "
            />
        </div>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WhyChooseUs() {
    const shipContainerRef = useRef(null);
    const shipWrapperRef = useRef(null);

    /* =====================================================
       LOTTIE INITIALIZATION
    ===================================================== */

    useEffect(() => {
        if (!shipContainerRef.current) return;

        let animation;

        const loadShip = async () => {
            try {
                const response = await fetch("/animation/Ship.json");

                if (!response.ok) {
                    throw new Error("Failed to load Ship.json");
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
                console.error("Ship animation error:", error);
            }
        };

        loadShip();

        return () => {
            if (animation) {
                animation.destroy();
                animation = null;
            }
        };
    }, []);

    /* =====================================================
       GSAP FLOATING EFFECT
    ===================================================== */

    useEffect(() => {
        if (!shipWrapperRef.current) return;

        const animation = gsap.to(
            shipWrapperRef.current,
            {
                y: -10,
                rotate: 2,

                duration: 2.5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut",
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section
            className="
                relative
                overflow-hidden
                bg-white
                py-10
                sm:py-14
                lg:py-18
            "
        >
            {/* =====================================================
                DECORATIVE SVG — LEFT
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[2%]
                    top-[8%]
                    opacity-[0.07]
                "
            >
                <svg
                    width="150"
                    height="150"
                    viewBox="0 0 160 160"
                    fill="none"
                >
                    <path
                        d="M80 8L152 145H8L80 8Z"
                        stroke="#0d2461"
                        strokeWidth="2"
                    />

                    <path
                        d="M80 40L118 115H42L80 40Z"
                        stroke="#f5bd24"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            {/* =====================================================
                DECORATIVE SVG — RIGHT
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[3%]
                    top-[30%]
                    opacity-[0.06]
                "
            >
                <svg
                    width="170"
                    height="170"
                    viewBox="0 0 190 190"
                    fill="none"
                >
                    <path
                        d="
                            M30 20
                            C43 5 65 5 81 16
                            L160 69
                            C178 81 175 108 155 119
                            L71 161
                            C50 171 26 157 25 134
                            L22 55
                            C22 41 25 29 30 20Z
                        "
                        fill="#0d2461"
                    />

                    <path
                        d="
                            M52 38
                            C61 27 77 24 89 32
                            L140 67
                            C152 75 150 92 137 99
                            L78 130
                            C65 137 50 128 49 113
                            L47 57
                            C47 49 49 43 52 38Z
                        "
                        fill="#f5bd24"
                    />
                </svg>
            </div>

            {/* =====================================================
                CONTAINER
            ===================================================== */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-[1280px]
                    px-5
                    sm:px-8
                    lg:px-10
                "
            >
                {/* =====================================================
                    HEADING
                ===================================================== */}

                <div className="mx-auto mb-14 max-w-4xl text-center">
                    <div
                        className="
                            mb-2
                            flex
                            items-center
                            justify-center
                            gap-3
                        "
                    >
                        <span className="h-px w-10 bg-[#f5bd24]" />

                        <span
                            className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-[#0d2461]
                            "
                        >
                            Why Choose Us
                        </span>

                        <span className="h-px w-10 bg-[#f5bd24]" />
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            text-[#0d2461]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Built around{" "}
                        <span className="text-[#0d2461]">
                            your business.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-5xl
                            text-sm
                            leading-6
                            text-black/50
                            sm:text-base
                        "
                    >
                        Reliable sourcing, consistent quality and
                        dependable supply solutions designed around
                        your requirements.
                    </p>
                </div>

                {/* =====================================================
                    4 CARDS
                ===================================================== */}

                <div
                    className="
                        relative
                        z-10
                        grid
                        grid-cols-1
                        gap-6
                        sm:grid-cols-2
                        lg:gap-7
                    "
                >
                    <WhyCard item={reasons[0]} />
                    <WhyCard item={reasons[1]} />
                    <WhyCard item={reasons[2]} />
                    <WhyCard item={reasons[3]} />
                </div>

                {/* =====================================================
                    BOTTOM SHIP
                ===================================================== */}

                {/* =====================================================
    BOTTOM SHIP
===================================================== */}

                <div
                    className="
        relative
        mt-5
        h-[100px]
        border-t
        border-[#0d2461]/10
    "
                >
                    {/* SHIP */}

                    <div
                        ref={shipWrapperRef}
                        className="
            absolute
            bottom-[-40px]
            -left-30
            z-10
            w-[100px]
            sm:w-[125px]
            lg:w-[300px]
        "
                    >
                        <div
                            ref={shipContainerRef}
                            className="
                h-[300px]
                w-full
                overflow-visible
            "
                        />
                    </div>

                    {/* Bottom Text */}

                    <div
                        className="
            absolute
            bottom-2
            left-[120px]
            sm:left-[155px]
            lg:left-[180px]
        "
                    >
                        <span
                            className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#f5bd24]
            "
                        >
                            Global Supply
                        </span>

                        <p
                            className="
                mt-1
                text-sm
                text-[#0d2461]/55
            "
                        >
                            Connecting trusted sourcing with dependable delivery.
                        </p>
                    </div>

                    {/* Decorative Line */}

                    <div
                        className="
            absolute
            bottom-0
            right-0
            h-[2px]
            w-[30%]
            bg-[#f5bd24]
        "
                    />
                </div>
            </div>
        </section>
    );
}