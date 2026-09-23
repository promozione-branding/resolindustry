"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMG = {
    left1: "/industry/1.jpg",
    left2: "/industry/2.png",
    left3: "/industry/3.jpg",
    left4: "/industry/4.jpg",

    right1: "/industry/5.jpg",
    right2: "/industry/6.jpg",
    right3: "/industry/7.jpg",
    right4: "/industry/8.jpg",

    center: "/industry/8.jpg",
};

function ImageItem({ src }) {
    return (
        <div className="relative aspect-square w-full overflow-hidden">
            <img
                src={src}
                alt=""
                draggable={false}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    select-none
                    object-cover
                "
            />
        </div>
    );
}

function ImageGroup({ images, className = "" }) {
    return (
        <div
            className={`
                flex
                flex-col
                gap-[1.35vw]
                will-change-transform
                ${className}
            `}
        >
            {images.map((image, index) => (
                <ImageItem
                    key={`${image}-${index}`}
                    src={image}
                />
            ))}
        </div>
    );
}

export default function HotelLuxSection() {
    const sectionRef = useRef(null);

    const leftOuterRef = useRef(null);
    const leftInnerRef = useRef(null);

    const rightInnerRef = useRef(null);
    const rightOuterRef = useRef(null);

    const centerImageRef = useRef(null);

    const titleRef = useRef(null);
    const relaxRef = useRef(null);
    const arrowRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    desktop: "(min-width: 1024px)",
                    tablet:
                        "(min-width: 768px) and (max-width: 1023px)",
                    mobile: "(max-width: 767px)",
                },
                (context) => {
                    const {
                        desktop,
                        tablet,
                        mobile,
                    } = context.conditions;

                    let values;

                    /*
                    =====================================================
                    DESKTOP
                    =====================================================
                    */

                    if (desktop) {
                        values = {
                            outerStart: -380,
                            outerEnd: 50,

                            innerStart: -190,
                            innerEnd: 50,

                            centerEnd: 110,

                            titleY: -100,
                            relaxY: 100,

                            scrollDistance: "+=2200",
                        };
                    }

                    /*
                    =====================================================
                    TABLET
                    =====================================================
                    */

                    else if (tablet) {
                        values = {
                            outerStart: -280,
                            outerEnd: 320,

                            innerStart: -140,
                            innerEnd: 210,

                            centerEnd: 90,

                            titleY: -80,
                            relaxY: 80,

                            scrollDistance: "+=1800",
                        };
                    }

                    /*
                    =====================================================
                    MOBILE
                    =====================================================
                    */

                    else {
                        values = {
                            outerStart: -180,
                            outerEnd: 220,

                            innerStart: -90,
                            innerEnd: 150,

                            centerEnd: 60,

                            titleY: -60,
                            relaxY: 60,

                            scrollDistance: "+=1400",
                        };
                    }

                    /*
                    =====================================================
                    INITIAL POSITIONS

                    IMPORTANT:
                    All image groups are centered vertically.
                    =====================================================
                    */

                    gsap.set(
                        leftOuterRef.current,
                        {
                            y: values.outerStart,
                        }
                    );

                    gsap.set(
                        leftInnerRef.current,
                        {
                            y: values.innerStart,
                        }
                    );

                    gsap.set(
                        rightInnerRef.current,
                        {
                            y: values.innerStart,
                        }
                    );

                    gsap.set(
                        rightOuterRef.current,
                        {
                            y: values.outerStart,
                        }
                    );

                    /*
                    Center image itself starts centered.
                    The wrapper remains fixed in the center.
                    */

                    gsap.set(
                        centerImageRef.current,
                        {
                            y: 0,
                            scale: 1,
                        }
                    );

                    /*
                    Text
                    */

                    gsap.set(
                        titleRef.current,
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                        }
                    );

                    gsap.set(
                        relaxRef.current,
                        {
                            y: 0,
                            opacity: 1,
                        }
                    );

                    /*
                    Arrow
                    */

                    gsap.set(
                        arrowRef.current,
                        {
                            y: 0,
                            opacity: 1,
                        }
                    );

                    /*
                    =====================================================
                    MAIN TIMELINE
                    =====================================================
                    */

                    const tl = gsap.timeline({
                        defaults: {
                            ease: "none",
                        },

                        scrollTrigger: {
                            trigger: section,

                            start: "top top",

                            end: values.scrollDistance,

                            /*
                            Smooth scrub
                            */

                            scrub: 1,

                            /*
                            Keep viewport locked while animation plays
                            */

                            pin: true,

                            pinSpacing: true,

                            anticipatePin: 1,

                            invalidateOnRefresh: true,

                            fastScrollEnd: true,
                        },
                    });

                    /*
                    =====================================================
                    LEFT OUTER
                    =====================================================
                    */

                    tl.to(
                        leftOuterRef.current,
                        {
                            y: values.outerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /*
                    =====================================================
                    LEFT INNER
                    =====================================================
                    */

                    tl.to(
                        leftInnerRef.current,
                        {
                            y: values.innerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /*
                    =====================================================
                    RIGHT INNER
                    =====================================================
                    */

                    tl.to(
                        rightInnerRef.current,
                        {
                            y: values.innerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /*
                    =====================================================
                    RIGHT OUTER
                    =====================================================
                    */

                    tl.to(
                        rightOuterRef.current,
                        {
                            y: values.outerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /*
                    =====================================================
                    CENTER IMAGE

                    The wrapper is centered.
                    Only the image moves slightly.
                    =====================================================
                    */

                    tl.to(
                        centerImageRef.current,
                        {
                            y: values.centerEnd,
                            scale: 1.035,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /*
                    =====================================================
                    HOTEL LUX TITLE
                    =====================================================
                    */

                    tl.to(
                        titleRef.current,
                        {
                            y: values.titleY,
                            opacity: 0,
                            scale: 0.97,
                            duration: 0.45,
                            ease: "power2.out",
                        },
                        0.15
                    );

                    /*
                    =====================================================
                    RELAX
                    =====================================================
                    */

                    tl.to(
                        relaxRef.current,
                        {
                            y: values.relaxY,
                            opacity: 0,
                            duration: 0.4,
                            ease: "power2.out",
                        },
                        0.2
                    );

                    /*
                    =====================================================
                    ARROW
                    =====================================================
                    */

                    tl.to(
                        arrowRef.current,
                        {
                            y: 30,
                            opacity: 0,
                            duration: 0.25,
                            ease: "power2.out",
                        },
                        0
                    );

                    /*
                    =====================================================
                    REFRESH

                    Makes sure the calculation is correct after
                    browser/layout/images are ready.
                    =====================================================
                    */

                    requestAnimationFrame(() => {
                        ScrollTrigger.refresh();
                    });

                    /*
                    =====================================================
                    CLEANUP
                    =====================================================
                    */

                    return () => {
                        tl.kill();
                    };
                }
            );
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                h-screen
                w-full
                overflow-hidden
                bg-[#f3f3f3]
            "
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(circle at center, #ffffff 0%, #f7f7f7 45%, #f3f3f3 100%)",
                }}
            />

            {/* =====================================================
                LEFT OUTER

                IMPORTANT:
                top-1/2 + -translate-y-1/2
                keeps this column centered vertically.
            ====================================================== */}

            <div
                ref={leftOuterRef}
                className="
                    absolute
                    left-[1.2vw]
                    top-1/2
                    z-[2]
                    w-[16.5vw]
                    max-w-[285px]
                    -translate-y-1/2
                    will-change-transform
                "
            >
                <ImageGroup
                    images={[
                        IMG.left1,
                        IMG.left2,
                    ]}
                />
            </div>

            {/* =====================================================
                LEFT INNER
            ====================================================== */}

            <div
                ref={leftInnerRef}
                className="
                    absolute
                    left-[18.8vw]
                    top-1/2
                    z-[4]
                    w-[16vw]
                    max-w-[275px]
                    -translate-y-1/2
                    will-change-transform
                "
            >
                <ImageGroup
                    images={[
                        IMG.left3,
                        IMG.left4,
                    ]}
                />
            </div>

            {/* =====================================================
                CENTER WRAPPER

                THIS NEVER MOVES.

                It is always exactly in the center of the
                viewport.
            ====================================================== */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    z-[10]
                    w-[29vw]
                    max-w-[490px]
                    -translate-x-1/2
                    -translate-y-1/2
                "
            >
                <div
                    ref={centerImageRef}
                    className="
                        relative
                        aspect-[683/1024]
                        w-full
                        will-change-transform
                    "
                >
                    <img
                        src={IMG.center}
                        alt="Hotel Lux"
                        draggable={false}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            select-none
                            object-cover
                        "
                    />
                </div>
            </div>

            {/* =====================================================
                RIGHT INNER
            ====================================================== */}

            <div
                ref={rightInnerRef}
                className="
                    absolute
                    right-[18.8vw]
                    top-1/2
                    z-[4]
                    w-[16vw]
                    max-w-[275px]
                    -translate-y-1/2
                    will-change-transform
                "
            >
                <ImageGroup
                    images={[
                        IMG.right1,
                        IMG.right2,
                    ]}
                />
            </div>

            {/* =====================================================
                RIGHT OUTER
            ====================================================== */}

            <div
                ref={rightOuterRef}
                className="
                    absolute
                    right-[1.2vw]
                    top-1/2
                    z-[2]
                    w-[16.5vw]
                    max-w-[285px]
                    -translate-y-1/2
                    will-change-transform
                "
            >
                <ImageGroup
                    images={[
                        IMG.right3,
                        IMG.right4,
                    ]}
                />
            </div>

            {/* =====================================================
                TITLE

                EXACT CENTER
            ====================================================== */}

            <div
                ref={titleRef}
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-[20]
                    flex
                    w-full
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                    text-center
                    will-change-transform
                "
            >
                <p
                    className="
                        mb-2
                        font-['Jost',sans-serif]
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.3em]
                        text-[#5c5c5c]
                        sm:text-[11px]
                    "
                >
                    Explore our industries
                </p>

                <h2
                    className="
                        m-0
                        font-['Playfair_Display',serif]
                        text-[clamp(55px,7vw,105px)]
                        font-medium
                        leading-[0.95]
                        tracking-[-0.04em]
                        text-[#1c1c1c]
                    "
                >
                    Resol Industry
                </h2>
            </div>

            {/* =====================================================
                RELAX

                Centered independently.
            ====================================================== */}

            <div
                ref={relaxRef}
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[56%]
                    z-[20]
                    -translate-x-1/2
                    text-center
                    will-change-transform
                "
            >
                <h3
                    className="
                        m-0
                        whitespace-nowrap
                        font-['Playfair_Display',serif]
                        text-[clamp(45px,5vw,78px)]
                        font-normal
                        leading-none
                        tracking-[-0.03em]
                        text-[#1c1c1c]
                    "
                >
                    Relax
                </h3>
            </div>

            {/* =====================================================
                DOWN ARROW
            ====================================================== */}

            <div
                ref={arrowRef}
                className="
                    pointer-events-none
                    absolute
                    bottom-[6vh]
                    left-1/2
                    z-[30]
                    flex
                    h-[38px]
                    w-[38px]
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c19c77]/50
                    bg-white/50
                    will-change-transform
                "
            >
                <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                >
                    <path
                        d="M6.5 1V15"
                        stroke="#C19C77"
                        strokeWidth="1"
                    />

                    <path
                        d="M1 10L6.5 15.5L12 10"
                        stroke="#C19C77"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </section>
    );
}