"use client";

import React, {
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

const journeyItems = [
    {
        image: "/team/1.png",
        title: "Built for Real Industries",
        description:
            "Our journey started with a simple belief — businesses need reliable partners who understand their industries, their challenges, and their goals. Since 2005, Resol Industries has built its foundation on strong relationships, quality products, and dependable service.",
        rotate: -5,
        layout: "side",
    },
    {
        image: "/team/2.png",
        title: "Crafted with Care & Trust",
        description:
            "Every relationship we build is shaped by trust, consistency, and attention to detail. From polymers and chemicals to packaging, plastics, adhesives and textiles, we work closely with our partners to deliver solutions that fit real-world requirements.",
        rotate: 4,
        layout: "bottom",
    },
    {
        image: "/team/3.png",
        title: "Always Evolving",
        description:
            "We are constantly learning, improving, and expanding. As industries evolve and new opportunities emerge, Resol Industries continues to build smarter distribution networks and stronger solutions for modern businesses.",
        rotate: -4,
        layout: "side",
    },
];

export default function TeamSection() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    const [scrollDistance, setScrollDistance] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);

    /* =========================================================
       CALCULATE SIZE
    ========================================================= */

    useLayoutEffect(() => {
        const calculate = () => {
            if (!trackRef.current) return;

            const viewportWidth = window.innerWidth;
            const viewportH = window.innerHeight;

            const trackWidth =
                trackRef.current.scrollWidth;

            setScrollDistance(
                Math.max(
                    trackWidth - viewportWidth,
                    0
                )
            );

            setViewportHeight(viewportH);
        };

        calculate();

        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(calculate);
        });

        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        window.addEventListener(
            "resize",
            calculate
        );

        window.addEventListener(
            "orientationchange",
            calculate
        );

        return () => {
            resizeObserver.disconnect();

            window.removeEventListener(
                "resize",
                calculate
            );

            window.removeEventListener(
                "orientationchange",
                calculate
            );
        };
    }, []);

    /* =========================================================
       SECTION HEIGHT
    ========================================================= */

    const sectionHeight =
        viewportHeight > 0
            ? viewportHeight + scrollDistance
            : "100vh";

    /* =========================================================
       SCROLL
    ========================================================= */

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: [
            "start start",
            "end end",
        ],
    });

    /* =========================================================
       HORIZONTAL X
    ========================================================= */

    /* =========================================================
     HORIZONTAL MOVEMENT
  ========================================================= */

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollDistance]
    );

    /* =========================================================
       OUR JOURNEY VISIBILITY
    
       Hide based on ACTUAL horizontal movement.
    
       0px   = visible
       40px  = fading
       100px = completely hidden
    ========================================================= */

    const journeyOpacity = useTransform(
        x,
        [0, -40, -100],
        [1, 0.35, 0]
    );

    const journeyX = useTransform(
        x,
        [0, -100],
        [0, -40]
    );

    const journeyScale = useTransform(
        x,
        [0, -100],
        [1, 0.96]
    );



    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{
                height:
                    typeof sectionHeight === "number"
                        ? `${sectionHeight}px`
                        : sectionHeight,
                backgroundColor: "#FFF3A8",
            }}
        >
            {/* =====================================================
                STICKY VIEWPORT
            ===================================================== */}

            <div
                className="
                    sticky
                    top-0
                    left-0
                    h-[100svh]
                    w-full
                    overflow-hidden
                "
            >
                {/* =================================================
                    TOP BORDER
                ================================================= */}

                <div
                    className="
                        absolute
                        left-0
                        top-0
                        z-[100]
                        h-[4px]
                        w-full
                        bg-[#222]
                    "
                />

                {/* =================================================
                    LEFT CURVE
                ================================================= */}

                <svg
                    className="
                        pointer-events-none
                        absolute
                        -bottom-[100px]
                        -left-[120px]
                        z-[1]
                        h-[350px]
                        w-[850px]
                    "
                    viewBox="0 0 850 350"
                    fill="none"
                >
                    <path
                        d="
                            M-40 30
                            C140 175
                            350 350
                            560 255
                            C690 200
                            760 110
                            890 25
                        "
                        stroke="#D8C969"
                        strokeWidth="1"
                    />
                </svg>

                {/* =================================================
                    RIGHT CURVE
                ================================================= */}

                <svg
                    className="
                        pointer-events-none
                        absolute
                        right-[-100px]
                        top-[48%]
                        z-[1]
                        h-[320px]
                        w-[650px]
                    "
                    viewBox="0 0 650 320"
                    fill="none"
                >
                    <path
                        d="
                            M0 30
                            C130 70
                            210 220
                            350 260
                            C490 300
                            550 190
                            680 80
                        "
                        stroke="#D8C969"
                        strokeWidth="1"
                    />
                </svg>

                {/* =================================================
                    CIRCLE
                ================================================= */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-[4%]
                        right-[7%]
                        z-[1]
                        h-[115px]
                        w-[115px]
                        rounded-full
                        border
                        border-[#D8C969]/60
                    "
                />

                {/* =================================================
                    OUR JOURNEY

                    FULLY HIDES AFTER SCROLL START
                ================================================= */}

                {/* =========================================================
    OUR JOURNEY INTRO

    FIX:
    It disappears according to horizontal movement,
    NOT according to the total scroll percentage.
========================================================= */}

                <motion.div
                    style={{
                        opacity: journeyOpacity,
                        x: journeyX,
                        scale: journeyScale,
                    }}
                    className="
        pointer-events-none
        absolute
        left-[24%]
        top-1/2
        z-[30]
        w-[360px]
        -translate-y-1/2
        will-change-transform
    "
                >
                    <h2
                        className="
            m-0
            font-['Cal_Sans']
            text-[64px]
            font-normal
            leading-[0.92]
            tracking-[-3px]
            text-[#8B8D7B]
            md:text-[72px]
            lg:text-[76px]
        "
                    >
                        Our
                        <br />
                        Journey
                    </h2>

                    <p
                        className="
            mt-9
            max-w-[350px]
            font-['Rethink_Sans']
            text-[15px]
            font-normal
            leading-[1.7]
            text-[#8B8D7B]
            md:text-[16px]
        "
                    >
                        From thoughtful beginnings to everyday essentials,
                        we design products that grow with businesses and
                        support every important moment along the way.
                    </p>
                </motion.div>

                {/* =================================================
                    HORIZONTAL TRACK
                ================================================= */}

                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="
                        absolute
                        left-0
                        top-0
                        flex
                        h-full
                        w-max
                        items-center
                        will-change-transform
                    "
                >
                    {/* =================================================
                        INTRO SPACE

                        This creates the initial distance between
                        viewport left and first image.
                    ================================================= */}

                    <div
                        className="
                            h-full
                            w-[720px]
                            shrink-0
                        "
                    />

                    {/* =================================================
                        JOURNEY ITEMS
                    ================================================= */}

                    {journeyItems.map(
                        (item, index) => {

                            /* =========================================
                               SECOND ITEM

                               Text goes BELOW image
                            ========================================= */

                            if (
                                item.layout ===
                                "bottom"
                            ) {
                                return (
                                    <div
                                        key={
                                            item.title
                                        }
                                        className="
                                            relative
                                            flex
                                            h-full
                                            w-[760px]
                                            shrink-0
                                            items-center
                                            px-[40px]
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                w-full
                                                flex-col
                                                items-start
                                            "
                                        >
                                            {/* IMAGE */}

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 50,
                                                    rotate:
                                                        item.rotate,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    rotate:
                                                        item.rotate,
                                                }}
                                                viewport={{
                                                    once: false,
                                                    amount: 0.25,
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: [
                                                        0.33,
                                                        0,
                                                        0,
                                                        1,
                                                    ],
                                                }}
                                                className="
                                                    relative
                                                    ml-[20px]
                                                    h-[390px]
                                                    w-[520px]
                                                    md:h-[430px]
                                                    md:w-[570px]
                                                "
                                            >
                                                {/* Yellow shadow */}

                                                <div
                                                    className="
                                                        absolute
                                                        inset-0
                                                        translate-x-[10px]
                                                        translate-y-[12px]
                                                        rounded-[24px]
                                                        bg-[#E9D979]
                                                    "
                                                />

                                                <div
                                                    className="
                                                        group
                                                        relative
                                                        h-full
                                                        w-full
                                                        overflow-hidden
                                                        rounded-[24px]
                                                    "
                                                >
                                                    <Image
                                                        src={
                                                            item.image
                                                        }
                                                        alt={
                                                            item.title
                                                        }
                                                        fill
                                                        sizes="570px"
                                                        className="
                                                            object-cover
                                                            transition-transform
                                                            duration-[1200ms]
                                                            ease-out
                                                            group-hover:scale-[1.04]
                                                        "
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* TEXT UNDER IMAGE */}

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 35,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: false,
                                                    amount: 0.3,
                                                }}
                                                transition={{
                                                    duration: 0.7,
                                                    delay: 0.08,
                                                    ease: [
                                                        0.33,
                                                        0,
                                                        0,
                                                        1,
                                                    ],
                                                }}
                                                className="
                                                    ml-[20px]
                                                    mt-7
                                                    w-[570px]
                                                "
                                            >
                                                <h3
                                                    className="
                                                        m-0
                                                        font-['Cal_Sans']
                                                        text-[36px]
                                                        font-normal
                                                        leading-[1.05]
                                                        tracking-[-1.5px]
                                                        text-[#2F3E5C]
                                                        md:text-[40px]
                                                    "
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </h3>

                                                <p
                                                    className="
                                                        m-0
                                                        mt-5
                                                        max-w-[560px]
                                                        font-['Rethink_Sans']
                                                        text-[15px]
                                                        font-normal
                                                        leading-[1.65]
                                                        text-[#4F565E]
                                                    "
                                                >
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            }

                            /* =========================================
                               FIRST + THIRD ITEMS

                               Image + text side by side
                            ========================================= */

                            return (
                                <div
                                    key={
                                        item.title
                                    }
                                    className="
                                        relative
                                        flex
                                        h-full
                                        w-[1180px]
                                        shrink-0
                                        items-center
                                        px-[50px]
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            gap-[70px]
                                        "
                                    >
                                        {/* IMAGE */}

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 50,
                                                rotate:
                                                    item.rotate,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                rotate:
                                                    item.rotate,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.25,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [
                                                    0.33,
                                                    0,
                                                    0,
                                                    1,
                                                ],
                                            }}
                                            className="
                                                relative
                                                h-[480px]
                                                w-[500px]
                                                shrink-0
                                            "
                                        >
                                            {/* Yellow shadow */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    translate-x-[10px]
                                                    translate-y-[12px]
                                                    rounded-[24px]
                                                    bg-[#E9D979]
                                                "
                                            />

                                            {/* Image */}

                                            <div
                                                className="
                                                    group
                                                    relative
                                                    h-full
                                                    w-full
                                                    overflow-hidden
                                                    rounded-[24px]
                                                "
                                            >
                                                <Image
                                                    src={
                                                        item.image
                                                    }
                                                    alt={
                                                        item.title
                                                    }
                                                    fill
                                                    sizes="500px"
                                                    className="
                                                        object-cover
                                                        transition-transform
                                                        duration-[1200ms]
                                                        ease-out
                                                        group-hover:scale-[1.04]
                                                    "
                                                />
                                            </div>
                                        </motion.div>

                                        {/* TEXT */}

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: 50,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                duration: 0.75,
                                                delay: 0.05,
                                                ease: [
                                                    0.33,
                                                    0,
                                                    0,
                                                    1,
                                                ],
                                            }}
                                            className="
                                                w-[390px]
                                                shrink-0
                                            "
                                        >
                                            <h3
                                                className="
                                                    m-0
                                                    font-['Cal_Sans']
                                                    text-[38px]
                                                    font-normal
                                                    leading-[1.05]
                                                    tracking-[-1.8px]
                                                    text-[#2F3E5C]
                                                    md:text-[40px]
                                                "
                                            >
                                                {
                                                    item.title
                                                }
                                            </h3>

                                            <p
                                                className="
                                                    m-0
                                                    mt-6
                                                    font-['Rethink_Sans']
                                                    text-[16px]
                                                    font-normal
                                                    leading-[1.7]
                                                    text-[#4F565E]
                                                "
                                            >
                                                {
                                                    item.description
                                                }
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        }
                    )}

                    {/* =================================================
                        END SPACE
                    ================================================= */}

                    <div
                        className="
                            h-full
                            w-[180px]
                            shrink-0
                        "
                    />
                </motion.div>

                {/* =================================================
                    BOTTOM PROGRESS
                ================================================= */}

                <motion.div
                    style={{
                        scaleX: scrollYProgress,
                        transformOrigin: "left",
                    }}
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        z-[100]
                        h-[3px]
                        w-full
                        bg-[#FFA500]
                    "
                />
            </div>
        </section>
    );
}