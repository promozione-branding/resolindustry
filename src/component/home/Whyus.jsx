"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const team = [
    {
        id: "02",
        shape: "",
        name: "Mr. Krishan Kumar Bansal",
        role: "Founder Director",
        image: "/team/mr-krishan-kumar-bansal.webp",
    },
    {
        id: "03",
        shape: "",
        name: "Mr. Parth Dodeja",
        role: "Director",
        image: "/team/mr-parth-dodeja-big-377x474.webp",
    },
    {
        id: "04",
        shape: "",
        name: "Mr. Vijay Kr. Rawal",
        role: "Director",
        image: "/team/vijay-rawal-377x474.webp",
    },
];

export default function TeamSection() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    const [scrollDistance, setScrollDistance] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(800);

    useEffect(() => {
        const calculateSize = () => {
            if (!trackRef.current) return;

            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;

            setScrollDistance(
                Math.max(trackWidth - viewportWidth, 0)
            );

            setViewportHeight(window.innerHeight);
        };

        calculateSize();

        const resizeObserver = new ResizeObserver(calculateSize);

        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        window.addEventListener("resize", calculateSize);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", calculateSize);
        };
    }, []);

    /*
     * Vertical scroll distance required to complete
     * the horizontal movement.
     */

    const sectionHeight =
        viewportHeight + scrollDistance;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollDistance]
    );

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-white"
            style={{
                height: `${sectionHeight}px`,
            }}
        >
            {/* =====================================================
                STICKY SCREEN
            ===================================================== */}

            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* =================================================
                    PROGRESS
                ================================================= */}

                <div className="absolute left-0 top-0 z-100 h-[3px] w-full bg-[#0d2461]/10">
                    <motion.div
                        style={{
                            scaleX: scrollYProgress,
                            transformOrigin: "left",
                        }}
                        className="h-full bg-[#f5bd24]"
                    />
                </div>

                {/* =================================================
                    TOP LABEL
                ================================================= */}

                <div className="absolute left-6 top-7 z-60 flex items-center gap-3 md:left-10">
                    <span className="h-[1px] w-8 bg-[#0d2461]" />

                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#0d2461]/60">
                        Resol Industries / Life & Leadership
                    </span>
                </div>

                {/* =================================================
    FILLED FLOATING SVG — TOP RIGHT
================================================= */}
                <motion.div
                    animate={{
                        y: [0, -22, 0],
                        rotate: [0, 8, 0],
                        scale: [1, 1.04, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute right-[2%] top-[0%] z-10"
                >
                    <svg
                        width="125"
                        height="125"
                        viewBox="0 0 125 125"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z"
                            fill="#f5bd24"
                        />
                    </svg>
                </motion.div>


                {/* =================================================
    FILLED FLOATING SVG — BOTTOM LEFT
================================================= */}
                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        x: [0, 8, 0],
                        rotate: [0, -10, 0],
                        scale: [1, 0.96, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute bottom-[-5%] left-[1%] z-10"
                >
                    <svg
                        width="150"
                        height="150"
                        viewBox="0 0 150 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Main navy shape */}
                        <path
                            d="M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z"
                            fill="#0d2461"
                        />
                    </svg>
                </motion.div>

                {/* =================================================
                    HORIZONTAL TRACK
                ================================================= */}

                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="flex h-screen w-max items-center will-change-transform"
                >

                    {/* =================================================
                        CARD 01 — LIFE AT RESOL
                    ================================================= */}

                    <div className="relative flex h-[76vh] w-[88vw] shrink-0 items-center px-5 md:w-[690px] md:px-8 lg:w-[500px]">

                        {/* Background number */}

                        <div className="pointer-events-none absolute bottom-[-35px] left-0 text-[220px] font-black leading-none tracking-[-20px] text-[#0d2461]/5 md:text-[290px]">
                            01
                        </div>

                        <div
                            className="relative z-20 grid h-full max-h-[650px] w-full overflow-hidden border border-[#0d2461]/10 bg-white"
                            style={{ boxShadow: "0 25px 80px rgba(13, 36, 97, 0.08)" }}
                        >

                            {/* TEXT */}

                            <div className="relative flex flex-col justify-center p-7 md:p-10">

                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-[2px] w-8 bg-[#f5bd24]" />

                                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#0d2461]">
                                        Life at Resol
                                    </span>
                                </div>

                                <h2 className="text-[38px] font-black leading-[0.94] tracking-[-2px] text-black md:text-[48px]">
                                    Life at
                                    <br />

                                    <span className="text-[#0d2461]">
                                        Resol
                                    </span>

                                    <br />

                                    Industries.
                                </h2>

                                <p className="mt-6 text-[12px] leading-[1.8] text-black/60 md:text-[13px]">
                                    Resol Industries Ltd. (RIL) is a prominent
                                    polymer products distributor founded in
                                    2005. Head office based in New Delhi, the
                                    company specializes in import and wholesale
                                    distribution of a wide range of high-quality
                                    polymers and chemicals.
                                </p>

                                <div className="mt-7 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5bd24] text-sm font-black text-[#0d2461]">
                                        →
                                    </span>

                                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#0d2461]">
                                        Our Journey
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#f5bd24]" />
                        </div>
                    </div>

                    {/* =================================================
                        CARDS 02 / 03 / 04
                    ================================================= */}

                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="relative flex h-[76vh] w-[78vw] shrink-0 items-center px-4 md:w-[500px] md:px-7 lg:w-[540px]"
                        >

                            {/* LARGE BACKGROUND NUMBER */}
                            <div
                                className="pointer-events-none absolute bottom-[-20px] left-0 z-0
            text-[230px] font-black leading-none tracking-[-20px]
            text-[#0d2461]/5 md:text-[280px]"
                            >
                                {member.id}
                            </div>

                            {/* DECORATIVE BACK SHAPE */}
                            {/* <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: index === 0 ? [0, 4, 0] :
                                        index === 1 ? [0, -4, 0] :
                                            [0, 5, 0],
                                }}
                                transition={{
                                    duration: 7 + index,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className={`
                absolute z-10
                bg-[#f5bd24]
                ${index === 0
                                        ? "right-[-15px] top-[8%] h-[180px] w-[180px] rounded-[55px]"
                                        : index === 1
                                            ? "left-[-25px] top-[15%] h-[150px] w-[150px] rounded-full"
                                            : "right-[-20px] bottom-[12%] h-[170px] w-[170px] rounded-[50%_50%_15%_50%]"
                                    }
            `}
                            /> */}

                            {/* MAIN CARD */}
                            <motion.div
                                whileHover={{
                                    y: -12,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                }}
                                className={`
                group relative z-20 h-[92%] w-full
                overflow-hidden
                bg-[#0d2461]
                shadow-[0_30px_80px_rgba(13,36,97,0.18)]
                ${index === 0
                                        ? "rounded-[55px_12px_55px_12px]"
                                        : index === 1
                                            ? "rounded-[180px_180px_25px_25px]"
                                            : "rounded-[12px_55px_12px_55px]"
                                    }
            `}
                            >

                                {/* IMAGE */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="540px"
                                    className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.06]
                "
                                />

                                {/* DARK GRADIENT */}
                                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[#071637]
                via-[#0d2461]/20
                to-transparent
            " />

                                {/* IMAGE GRAIN / OVERLAY */}
                                <div className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-br
                from-white/10
                via-transparent
                to-black/20
            " />


                                {/* CENTER DECORATIVE RING */}
                                <div className="
                pointer-events-none
                absolute left-1/2 top-[45%]
                h-24 w-24
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/20
                opacity-0
                transition-all
                duration-700
                group-hover:scale-150
                group-hover:opacity-100
            " />

                                {/* PERSON INFORMATION */}
                                <div className="
                absolute bottom-0 left-0 w-full
                p-7 md:p-8
            ">

                                    {/* YELLOW LINE */}
                                    <div className="
                    mb-5 h-[3px] w-12
                    bg-[#f5bd24]
                    transition-all
                    duration-500
                    group-hover:w-20
                " />

                                    <h3 className="
                    max-w-[390px]
                    text-[27px]
                    font-black
                    leading-[1]
                    tracking-[-1.2px]
                    text-white
                    md:text-[31px]
                ">
                                        {member.name}
                                    </h3>

                                    <div className="
                    mt-4 flex items-center gap-2
                ">
                                        <span className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-[#f5bd24]"
                                        />

                                        <span className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-white/60
                    ">
                                            {member.role}
                                        </span>
                                    </div>
                                </div>

                                {/* BOTTOM ACCENT */}
                                <div className="
                absolute bottom-0 left-0
                h-[5px] w-full
                bg-[#f5bd24]
            " />

                            </motion.div>
                        </div>
                    ))}


                    {/* =================================================
                        CARD 05 — WHY WORK AT RESOL
                    ================================================= */}

                    <div className="relative flex h-[76vh] w-[88vw] shrink-0 items-center px-5 md:w-[700px] md:px-8 lg:w-[780px]">

                        <div className="pointer-events-none absolute bottom-[-25px] right-0 text-[240px] font-black leading-none tracking-[-25px] text-[#0d2461]/5 md:text-[300px]">
                            05
                        </div>

                        <div
                            className="relative z-20 flex h-full max-h-[650px] w-full flex-col justify-center overflow-hidden border border-[#0d2461]/10 bg-white p-8 md:p-14"
                            style={{ boxShadow: "0 25px 80px rgba(13, 36, 97, 0.08)" }}
                        >

                            {/* TOP YELLOW SHAPE */}

                            <div
                                className="absolute right-0 top-0 h-36 w-36 bg-[#f5bd24]"
                                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                            />

                            {/* BOTTOM NAVY SHAPE */}

                            <div
                                className="absolute bottom-0 left-0 h-24 w-24 bg-[#0d2461]"
                                style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                            />

                            <div className="relative">

                                <div className="flex items-center gap-3">
                                    <span className="h-[2px] w-9 bg-[#f5bd24]" />

                                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#0d2461]">
                                        Why work at Resol?
                                    </span>
                                </div>

                                <h2 className="mt-7 text-[42px] font-black leading-[0.94] tracking-[-2.5px] text-black md:text-[58px]">
                                    Build.
                                    <br />

                                    <span className="text-[#0d2461]">
                                        Grow.
                                    </span>

                                    <br />

                                    Make an
                                    <br />

                                    <span className="text-[#f5bd24]">
                                        Impact.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-[590px] text-[12px] leading-[1.9] text-black/60 md:text-[14px]">
                                    Resol Industries Ltd. (RIL) is a prominent
                                    polymer products distributor founded in
                                    2005. Head office based in New Delhi, the
                                    company specializes in import and wholesale
                                    distribution of a wide range of high-quality
                                    polymers and chemicals, including PVC resin,
                                    EVA, LLDPE, LDPE and various plasticizers.
                                </p>

                                <p className="mt-4 max-w-[590px] text-[12px] leading-[1.9] text-black/60 md:text-[14px]">
                                    RIL has established itself as a trusted
                                    partner in industries such as PVC pipes
                                    and fittings, footwear, PVC flooring,
                                    Packaging, Plastic, Adhesives, Textile,
                                    Paint & Coatings and Vinyl.
                                </p>

                                <div className="mt-7 justify-center flex flex-wrap gap-2">
                                    {[
                                        "Polymers",
                                        "Chemicals",
                                        "Packaging",
                                        "Plastic",
                                        "Adhesives",
                                        "Textile",
                                        "Paint & Coatings",
                                        "Vinyl",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="border border-[#0d2461]/15 px-3 py-2 text-[8px] font-bold uppercase tracking-[1.3px] text-[#0d2461]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#f5bd24]" />
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}