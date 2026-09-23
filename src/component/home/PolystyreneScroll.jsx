"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FrameScrollAnimation from "./FrameScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function PolystyreneScroll() {
    const sectionRef = useRef(null);

    const emptyRef = useRef(null);
    const halfRef = useRef(null);
    const fullRef = useRef(null);
    const sealingRef = useRef(null);
    const finalRef = useRef(null);

    const particlesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    pin: ".polystyrene-sticky",
                },
            });

            // --------------------------------
            // INITIAL STATE
            // --------------------------------

            gsap.set(emptyRef.current, {
                opacity: 1,
                scale: 0.85,
                y: 40,
            });

            gsap.set(halfRef.current, {
                opacity: 0,
                scale: 0.9,
            });

            gsap.set(fullRef.current, {
                opacity: 0,
                scale: 0.9,
            });

            gsap.set(sealingRef.current, {
                opacity: 0,
                scale: 0.95,
            });

            gsap.set(finalRef.current, {
                opacity: 0,
                scale: 0.85,
            });

            // --------------------------------
            // PARTICLES INITIAL STATE
            // --------------------------------

            gsap.set(particlesRef.current, {
                opacity: 0,
                y: -150,
            });

            // --------------------------------
            // 0 - 20%
            // EMPTY BAG
            // --------------------------------

            tl.to(emptyRef.current, {
                scale: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            });

            // --------------------------------
            // 20 - 40%
            // PARTICLES FALL
            // --------------------------------

            tl.to(particlesRef.current, {
                opacity: 1,
                y: 220,
                stagger: {
                    each: 0.03,
                },
                duration: 1.5,
                ease: "none",
            });

            // --------------------------------
            // EMPTY → HALF FILLED
            // --------------------------------

            tl.to(emptyRef.current, {
                opacity: 0,
                scale: 0.98,
                duration: 0.5,
            }, "<");

            tl.to(halfRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
            }, "<0.2");

            // --------------------------------
            // PARTICLES DISAPPEAR
            // --------------------------------

            tl.to(particlesRef.current, {
                opacity: 0,
                duration: 0.4,
            });

            // --------------------------------
            // HALF → FULL
            // --------------------------------

            tl.to(halfRef.current, {
                opacity: 0,
                scale: 1.02,
                duration: 0.5,
            });

            tl.to(fullRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
            }, "<0.2");

            // --------------------------------
            // FULL BAG → SEALING
            // --------------------------------

            tl.to(fullRef.current, {
                opacity: 0,
                scale: 1.02,
                duration: 0.5,
            });

            tl.to(sealingRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
            }, "<0.2");

            // --------------------------------
            // SEALING → FINAL
            // --------------------------------

            tl.to(sealingRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
            });

            tl.to(finalRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
            }, "<0.2");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-[450vh] bg-[#f5f5f2]"
        >
            <div className="polystyrene-sticky relative h-screen w-full overflow-hidden">

                {/* ================================
                    BACKGROUND
                ================================= */}

                <div className="absolute inset-0">

                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />

                    <div className="
                        absolute
                        left-[-200px]
                        top-1/2
                        h-[500px]
                        w-[500px]
                        -translate-y-1/2
                        rounded-full
                        bg-[#c99618]/10
                        blur-[100px]"
                    />

                    <div className="
                        absolute
                        right-[-200px]
                        bottom-[-100px]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#071a3d]/10
                        blur-[100px]"
                    />

                </div>

                {/* ================================
                    TOP TEXT
                ================================= */}

                <div className="
                    absolute
                    left-6
                    top-8
                    z-30
                    sm:left-10
                    lg:left-16
                ">
                    <p className="
                        mb-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#c99618]
                    ">
                        Manufacturing Process
                    </p>

                    <h2 className="
                        max-w-[500px]
                        text-3xl
                        font-bold
                        uppercase
                        leading-tight
                        text-[#071a3d]
                        sm:text-5xl
                        lg:text-6xl
                    ">
                        From Raw Material
                        <br />
                        To Packed Product
                    </h2>
                </div>

                {/* ================================
                    STEP INDICATOR
                ================================= */}

                <div className="
                    absolute
                    bottom-8
                    left-6
                    z-30
                    flex
                    gap-3
                    sm:left-10
                    lg:left-16
                ">

                    <span className="
                        rounded-full
                        border
                        border-[#071a3d]/20
                        bg-white/70
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                        backdrop-blur
                    ">
                        Fill
                    </span>

                    <span className="
                        rounded-full
                        border
                        border-[#071a3d]/20
                        bg-white/70
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                        backdrop-blur
                    ">
                        Expand
                    </span>

                    <span className="
                        rounded-full
                        border
                        border-[#071a3d]/20
                        bg-white/70
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                        backdrop-blur
                    ">
                        Pack
                    </span>

                </div>

                {/* ================================
                    BAG AREA
                ================================= */}

                <FrameScrollAnimation />

                {/* ================================
                    RIGHT SIDE INFORMATION
                ================================= */}

                <div className="
                    absolute
                    right-6
                    top-1/2
                    z-30
                    hidden
                    -translate-y-1/2
                    lg:block
                ">

                    <div className="
                        w-[220px]
                        border-l
                        border-[#071a3d]/20
                        pl-6
                    ">

                        <span className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#c99618]
                        ">
                            25 KG
                        </span>

                        <h3 className="
                            mt-2
                            text-xl
                            font-bold
                            uppercase
                            text-[#071a3d]
                        ">
                            Polystyrene
                        </h3>

                        <p className="
                            mt-3
                            text-sm
                            leading-6
                            text-[#071a3d]/60
                        ">
                            Carefully filled, expanded
                            and packed for industrial
                            applications.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}