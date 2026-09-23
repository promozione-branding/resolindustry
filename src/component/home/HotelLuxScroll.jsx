"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   INDUSTRY CONTENT
========================================================= */

const content = {
    left1: {
        img: "/industry/6.jpg",
        title: "Paints, Coatings & Inks",
    },

    left2: {
        img: "/industry/4.jpg",
        title: "Rubber & Tyres",
    },

    left3: {
        img: "/industry/9.jpg",
        title: "Packaging",
    },

    left4: {
        img: "/industry/10.jpg",
        title: "Construction & Building Materials",
    },

    right1: {
        img: "/industry/7.jpg",
        title: "Electrical & Cables",
    },

    right2: {
        img: "/industry/5.jpg",
        title: "Footwear & EVA Products",
    },

    right3: {
        img: "/industry/2.png",
        title: "Adhesives & Sealants",
    },

    right4: {
        img: "/industry/8.jpg",
        title: "Chemical Manufacturing",
    },

    center: {
        img: "/industry/1.jpg",
        title: "Plastics & Polymers",
    },
};

/* =========================================================
   IMAGE ITEM
========================================================= */

function ImageItem({ item }) {
    return (
        <div className="group relative aspect-square w-full overflow-hidden">
            {/* IMAGE */}

            <img
                src={item.img}
                alt={item.title}
                draggable={false}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    select-none
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                "
            />

            {/* DARK GRADIENT */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[55%]
                    bg-gradient-to-t
                    from-black/75
                    via-black/25
                    to-transparent
                "
            />

            {/* TITLE */}

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-[2]
                    p-[1vw]
                    sm:p-[14px]
                    md:p-[16px]
                "
            >
                <h3
                    className="
                        m-0
                        max-w-[95%]
                        font-['Jost',sans-serif]
                        text-[11px]
                        font-medium
                        leading-[1.2]
                        tracking-[0.02em]
                        text-white
                        sm:text-[13px]
                        md:text-[14px]
                    "
                >
                    {item.title}
                </h3>
            </div>
        </div>
    );
}

/* =========================================================
   IMAGE GROUP
========================================================= */

function ImageGroup({ items, className = "" }) {
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
            {items.map((item, index) => (
                <ImageItem
                    key={`${item.title}-${index}`}
                    item={item}
                />
            ))}
        </div>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

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

                    /* =================================================
                       DESKTOP
                    ================================================= */

                    if (desktop) {
                        values = {
                            outerStart: -380,
                            outerEnd: 50,

                            innerStart: -190,
                            innerEnd: 50,

                            centerEnd: 110,

                            titleY: -100,
                            relaxY: 100,

                            scrollDistance: "+=2000",
                        };
                    }

                    /* =================================================
                       TABLET
                    ================================================= */

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

                    /* =================================================
                       MOBILE
                    ================================================= */

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

                    /* =================================================
                       INITIAL POSITIONS
                    ================================================= */

                    gsap.set(leftOuterRef.current, {
                        y: values.outerStart,
                    });

                    gsap.set(leftInnerRef.current, {
                        y: values.innerStart,
                    });

                    gsap.set(rightInnerRef.current, {
                        y: values.innerStart,
                    });

                    gsap.set(rightOuterRef.current, {
                        y: values.outerStart,
                    });

                    gsap.set(centerImageRef.current, {
                        y: 0,
                        scale: 1,
                    });

                    /* =================================================
                       MAIN TITLE
                    ================================================= */

                    gsap.set(titleRef.current, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    });

                    /* =================================================
                       RELAX
                    ================================================= */

                    gsap.set(relaxRef.current, {
                        y: 0,
                        opacity: 1,
                    });

                    /* =================================================
                       ARROW
                    ================================================= */

                    gsap.set(arrowRef.current, {
                        y: 0,
                        opacity: 1,
                    });

                    /* =================================================
                       SCROLL TIMELINE
                    ================================================= */

                    const tl = gsap.timeline({
                        defaults: {
                            ease: "none",
                        },

                        scrollTrigger: {
                            trigger: section,

                            start: "top top",

                            end: values.scrollDistance,

                            scrub: 1,

                            pin: true,

                            pinSpacing: true,

                            anticipatePin: 1,

                            invalidateOnRefresh: true,

                            fastScrollEnd: true,
                        },
                    });

                    /* =================================================
                       LEFT OUTER
                    ================================================= */

                    tl.to(
                        leftOuterRef.current,
                        {
                            y: values.outerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /* =================================================
                       LEFT INNER
                    ================================================= */

                    tl.to(
                        leftInnerRef.current,
                        {
                            y: values.innerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /* =================================================
                       RIGHT INNER
                    ================================================= */

                    tl.to(
                        rightInnerRef.current,
                        {
                            y: values.innerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /* =================================================
                       RIGHT OUTER
                    ================================================= */

                    tl.to(
                        rightOuterRef.current,
                        {
                            y: values.outerEnd,
                            duration: 1,
                            ease: "none",
                        },
                        0
                    );

                    /* =================================================
                       CENTER IMAGE
                    ================================================= */

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

                    /* =================================================
                       MAIN TITLE
                    ================================================= */

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

                    /* =================================================
                       RELAX
                    ================================================= */

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

                    /* =================================================
                       ARROW
                    ================================================= */

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

                    /* =================================================
                       REFRESH
                    ================================================= */

                    requestAnimationFrame(() => {
                        ScrollTrigger.refresh();
                    });

                    /* =================================================
                       CLEANUP
                    ================================================= */

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
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                "
                style={{
                    background:
                        "radial-gradient(circle at center, #ffffff 0%, #f7f7f7 45%, #f3f3f3 100%)",
                }}
            />

            {/* =====================================================
                LEFT OUTER
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
                    items={[
                        content.left1,
                        content.left2,
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
                    items={[
                        content.left3,
                        content.left4,
                    ]}
                />
            </div>

            {/* =====================================================
                CENTER IMAGE
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
                        overflow-hidden
                        will-change-transform
                    "
                >
                    <img
                        src={content.center.img}
                        alt={content.center.title}
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

                    {/* CENTER GRADIENT */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            bottom-0
                            h-[50%]
                            bg-gradient-to-t
                            from-black/80
                            via-black/30
                            to-transparent
                        "
                    />

                    {/* CENTER TITLE */}

                    <div
                        className="
                            absolute
                            inset-x-0
                            bottom-0
                            z-[2]
                            p-[1.2vw]
                            md:p-5
                        "
                    >
                        <h3
                            className="
                                m-0
                                font-['Jost',sans-serif]
                                text-[15px]
                                font-medium
                                leading-[1.15]
                                tracking-[0.01em]
                                text-white
                                sm:text-[18px]
                                md:text-[21px]
                            "
                        >
                            {content.center.title}
                        </h3>
                    </div>
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
                    items={[
                        content.right1,
                        content.right2,
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
                    items={[
                        content.right3,
                        content.right4,
                    ]}
                />
            </div>

            {/* =====================================================
                MAIN TITLE
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
                        text-black bg-white p-2 rounded-md
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
                        text-white
                    "
                >
                    Resol Industry
                </h2>
            </div>
        </section>
    );
}