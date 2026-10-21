"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";

const journeyItems = [
    {
        image: "/team/1.png",
        title: "Shaping Industries Through Polymer Excellence",
        description:
            "Every industry has unique challenges, and the right materials make all the difference. At Resol Industries Limited, we bring together experience, material expertise, and a forward-thinking approach to deliver polymer solutions that keep businesses moving. Since 2005, our focus has remained on creating value through reliable products, meaningful partnerships, and solutions built around real-world industrial needs.",
        rotate: -5,
        layout: "side",
    },
    {
    image: "/team/2.png",
    title: "More Than Materials, A Promise of Trust",
    description:
        "Behind every successful product is a material you can count on. From polymers and chemicals to packaging, plastics, adhesives, and textiles, we bring together dependable sourcing, industry understanding, and a commitment to doing things right—helping our partners turn everyday challenges into lasting possibilities. Our team works closely with every client to understand their requirements, ensuring consistent quality, timely delivery, and support that goes well beyond the first order.",
    rotate: 4,
    layout: "bottom",
},
{
    image: "/team/3.png",
    title: "Progress That Moves With Industry",
    description:
        "Industries never stand still, and neither do we. At Resol Industries Limited, we stay ahead by adapting to changing market needs, strengthening our capabilities, and exploring new possibilities to deliver polymer solutions that keep businesses ready for what’s next. With every challenge we take on, we learn, improve, and grow alongside our customers, building relationships that are made to last for years to come.",
    rotate: -4,
    layout: "side",
},
];

const EASE = [0.33, 0, 0, 1];

const blobPath =
    "M24.7 17.6C31.4 8.5 44.6 6.4 53.8 13L103.8 49.1C115.2 57.3 113.6 74.8 100.9 80.8L44.2 107.6C30.9 113.9 16.2 104.6 15.7 89.9L14 42.1C13.7 33.1 17.6 23.7 24.7 17.6Z";

export default function TeamSection() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const compactRef = useRef(null);
    const distanceRef = useRef(0);
    const [scrollDistance, setScrollDistance] = useState(0);

    // x = horizontal translation of the track, progress = 0..1
    const x = useMotionValue(0);
    const progress = useMotionValue(0);


    useLayoutEffect(() => {
        const update = () => {
            const section = sectionRef.current;
            if (!section) return;

            const dist = distanceRef.current;
            const { top } = section.getBoundingClientRect();
            const scrolled = Math.min(Math.max(-top, 0), dist);

            x.set(-scrolled);
            progress.set(dist > 0 ? scrolled / dist : 0);
        };

        const calculate = () => {
            const track = trackRef.current;
            if (!track) return;

            // Hidden (mobile layout) => scrollWidth is 0 => distance 0
            const dist = Math.max(track.scrollWidth - window.innerWidth, 0);

            distanceRef.current = dist;
            setScrollDistance(dist);
            update();
        };

        calculate();

        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(calculate);
        });
        if (trackRef.current) resizeObserver.observe(trackRef.current);

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", calculate);
        window.addEventListener("orientationchange", calculate);
        window.addEventListener("load", calculate);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", calculate);
            window.removeEventListener("orientationchange", calculate);
            window.removeEventListener("load", calculate);
        };
    }, [x, progress]);

    /* "Our Journey" fades based on ACTUAL horizontal movement */
    const journeyOpacity = useTransform(x, [-100, -40, 0], [0, 0.35, 1]);
    const journeyX = useTransform(x, [-100, 0], [-40, 0]);
    const journeyScale = useTransform(x, [-100, 0], [0.96, 1]);

    /* =========================================================
       GSAP floating blobs
    ========================================================= */

    useLayoutEffect(() => {
        const float = (selector) =>
            gsap.to(selector, {
                y: -25,
                x: 12,
                rotation: 8,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

        const ctxDesktop = gsap.context(() => float(".process-shape-one"), sectionRef);
        const ctxCompact = gsap.context(() => float(".process-shape-compact"), compactRef);

        return () => {
            ctxDesktop.revert();
            ctxCompact.revert();
        };
    }, []);

    return (
        <>
            {/* =====================================================
                TABLET + DESKTOP  (md and up)
                Pinned section, vertical scroll drives horizontal movement
            ===================================================== */}

            <section
                ref={sectionRef}
                className="relative hidden w-full bg-white md:block"
                style={{ height: `calc(100svh + ${scrollDistance}px)` }}
            >
                <div className="sticky left-0 top-0 h-[100svh] w-full overflow-hidden">
                    {/* Decorative curves */}
                    <svg
                        className="pointer-events-none absolute -bottom-[70px] -left-[90px] z-[1] h-[260px] w-[620px] lg:-bottom-[100px] lg:-left-[120px] lg:h-[350px] lg:w-[850px]"
                        viewBox="0 0 850 350"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M-40 30 C140 175 350 350 560 255 C690 200 760 110 890 25"
                            stroke="#D8C969"
                            strokeWidth="1"
                        />
                    </svg>

                    <svg
                        className="pointer-events-none absolute right-[-80px] top-[48%] z-[1] h-[240px] w-[480px] lg:right-[-100px] lg:h-[320px] lg:w-[650px]"
                        viewBox="0 0 650 320"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M0 30 C130 70 210 220 350 260 C490 300 550 190 680 80"
                            stroke="#D8C969"
                            strokeWidth="1"
                        />
                    </svg>

                    {/* Blobs */}
                    <div className="process-shape-one pointer-events-none absolute -left-2 top-16 flex opacity-[0.9] lg:top-10">
                        <svg className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d={blobPath} fill="#0d2461" />
                        </svg>
                    </div>

                    <div className="process-shape-one pointer-events-none absolute -right-2 top-14 flex opacity-[0.9] lg:top-5">
                        <svg className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d={blobPath} fill="#0d2461" />
                        </svg>
                    </div>

                    <div className="pointer-events-none absolute bottom-[4%] right-[7%] z-[1] h-[90px] w-[90px] rounded-full border border-[#D8C969]/60 lg:h-[115px] lg:w-[115px]" />

                    {/* TOP HEADING */}
                    <div className="absolute left-1/2 top-5 z-[50] -translate-x-1/2 text-center lg:top-4">
                        <h2 className="m-0 text-nowrap text-[38px] font-normal leading-none tracking-[1px] text-[#0d2461] lg:text-[58px]">
                            People Behind Our Success
                        </h2>
                    </div>

                    {/* OUR JOURNEY */}
                    <motion.div
                        style={{ opacity: journeyOpacity, x: journeyX, scale: journeyScale }}
                        className="pointer-events-none absolute left-[6%] top-1/2 z-[30] w-[300px] -translate-y-1/2 will-change-transform lg:left-[24%] lg:w-[360px]"
                    >
                        <h2 className="m-0 text-[56px] font-normal leading-[0.92] tracking-[1px] text-[#0d2461] lg:text-[76px]">
                            Our
                            <br />
                            Journey
                        </h2>

                        <p className="mt-6 max-w-[290px] text-[14px] font-normal leading-[1.7] text-[#0d2461] lg:mt-9 lg:max-w-[350px] lg:text-[16px]">
                            From thoughtful beginnings to everyday essentials,
                            we design products that grow with businesses and
                            support every important moment along the way.
                        </p>
                    </motion.div>

                    {/* HORIZONTAL TRACK */}
                    <motion.div
                        ref={trackRef}
                        style={{ x }}
                        className="absolute left-0 top-0 flex h-full w-max items-center will-change-transform"
                    >
                        {/* INTRO SPACE */}
                        <div className="h-full w-[420px] shrink-0 lg:w-[720px]" />

                        {journeyItems.map((item) => {
                            /* SECOND ITEM — text goes BELOW image */
                            if (item.layout === "bottom") {
                                return (
                                    <div
                                        key={item.title}
                                        className="relative flex h-full w-[560px] shrink-0 items-center px-[30px] lg:w-[760px] lg:px-[40px] lg:mt-38"
                                    >
                                        <div className="flex w-full flex-col items-start">
                                            <motion.div
                                                initial={{ opacity: 0, y: 50, rotate: item.rotate }}
                                                whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                                                viewport={{ once: false, amount: 0.25 }}
                                                transition={{ duration: 0.8, ease: EASE }}
                                                className="relative ml-[10px] h-[270px] w-[400px] lg:ml-[20px] lg:h-[350px] lg:w-[500px]"
                                            >
                                                <div className="absolute inset-0 translate-x-[10px] translate-y-[12px] rounded-[24px] bg-[#E9D979] mt-[280px]" />
                                                <div className="group relative h-full w-full overflow-hidden rounded-[24px]">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        sizes="(min-width: 1024px) 500px, 400px"
                                                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 35 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                                                className="ml-[10px] mt-8 w-[460px] lg:ml-[20px] lg:mt-10 lg:w-[570px]"
                                            >
                                                <h3 className="m-0 text-[30px] font-normal leading-[1.05] tracking-[1px] text-[#0d2461] lg:text-[40px]">
                                                    {item.title}
                                                </h3>
                                                <p className="m-0 mt-4 max-w-[560px] text-[14px] font-normal leading-[1.65] text-[#0d2461] lg:mt-5 lg:text-[15px]">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            }

                            /* FIRST + THIRD ITEMS — image + text side by side */
                            return (
                                <div
                                    key={item.title}
                                    className="relative flex h-full w-[720px] shrink-0 items-center px-[30px] lg:w-[1180px] lg:px-[50px]"
                                >
                                    <div className="flex w-full items-center gap-[40px] lg:gap-[70px]">
                                        <motion.div
                                            initial={{ opacity: 0, y: 50, rotate: item.rotate }}
                                            whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                                            viewport={{ once: false, amount: 0.25 }}
                                            transition={{ duration: 0.8, ease: EASE }}
                                            className="relative h-[300px] w-[300px] shrink-0 lg:h-[400px] lg:w-[400px]"
                                        >
                                            <div className="absolute inset-0 translate-x-[10px] translate-y-[12px] rounded-[24px] bg-[#E9D979]" />
                                            <div className="group relative h-full w-full overflow-hidden rounded-[24px]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 400px, 300px"
                                                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
                                            className="w-[300px] shrink-0 lg:w-[390px]"
                                        >
                                            <h3 className="m-0 text-[30px] font-normal leading-[1.05] tracking-[1px] text-[#0d2461] lg:text-[38px]">
                                                {item.title}
                                            </h3>
                                            <p className="m-0 mt-4 text-[14px] font-normal leading-[1.7] text-[#0d2461] lg:mt-6 lg:text-[16px]">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* END SPACE */}
                        <div className="h-full w-[120px] shrink-0 lg:w-[180px]" />
                    </motion.div>

                    {/* BOTTOM PROGRESS */}
                    <motion.div
                        style={{ scaleX: progress, transformOrigin: "left" }}
                        className="pointer-events-none absolute bottom-0 left-0 z-[100] h-[3px] w-full bg-[#FFA500]"
                    />
                </div>
            </section>

            {/* =====================================================
                MOBILE  (below md)
                Normal vertical layout: image, then text
            ===================================================== */}

            <section
                ref={compactRef}
                className="relative w-full overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-20 md:hidden"
            >
                <svg
                    className="pointer-events-none absolute -bottom-10 -left-24 z-0 h-[200px] w-[520px]"
                    viewBox="0 0 850 350"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M-40 30 C140 175 350 350 560 255 C690 200 760 110 890 25"
                        stroke="#D8C969"
                        strokeWidth="1"
                    />
                </svg>

                <svg
                    className="pointer-events-none absolute -right-24 top-[42%] z-0 h-[180px] w-[400px]"
                    viewBox="0 0 650 320"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0 30 C130 70 210 220 350 260 C490 300 550 190 680 80"
                        stroke="#D8C969"
                        strokeWidth="1"
                    />
                </svg>

                <div className="process-shape-compact pointer-events-none absolute -right-4 top-2 z-0 opacity-90">
                    <svg className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d={blobPath} fill="#0d2461" />
                    </svg>
                </div>

                <div className="pointer-events-none absolute bottom-6 right-5 z-0 h-[70px] w-[70px] rounded-full border border-[#D8C969]/60" />

                <div className="relative z-10 mx-auto max-w-xl">
                    <h2 className="m-0 text-center text-[28px] font-normal leading-[1.1] tracking-[1px] text-[#0d2461] sm:text-[36px]">
                        People Behind Our Success
                    </h2>

                    <div className="mt-10 sm:mt-12">
                        <h2 className="m-0 text-[48px] font-normal leading-[0.95] tracking-[1px] text-[#0d2461] sm:text-[58px]">
                            Our
                            <br />
                            Journey
                        </h2>

                        <p className="mt-5 max-w-[460px] text-[15px] font-normal leading-[1.7] text-[#0d2461] sm:mt-6">
                            From thoughtful beginnings to everyday essentials,
                            we design products that grow with businesses and
                            support every important moment along the way.
                        </p>
                    </div>

                    <div className="mt-14 flex flex-col gap-16 sm:gap-20">
                        {journeyItems.map((item) => (
                            <article key={item.title} className="flex flex-col gap-9">
                                <motion.div
                                    initial={{ opacity: 0, y: 40, rotate: 0 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: item.rotate / 2 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.8, ease: EASE }}
                                    className="relative mx-auto aspect-[4/3] w-[calc(100%-12px)] max-w-[480px]"
                                >
                                    <div className="absolute inset-0 translate-x-[8px] translate-y-[10px] rounded-[20px] bg-[#E9D979]" />
                                    <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="90vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
                                >
                                    <h3 className="m-0 text-[28px] font-normal leading-[1.1] tracking-[1px] text-[#0d2461] sm:text-[32px]">
                                        {item.title}
                                    </h3>
                                    <p className="m-0 mt-4 text-[15px] font-normal leading-[1.7] text-[#0d2461] sm:mt-5">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}