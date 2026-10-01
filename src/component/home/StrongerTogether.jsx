"use client";

import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// =====================================================
// INDUSTRIES
// =====================================================

const industries = [
    {
        name: "Packaging",
        image: "/1/Clear_01_Packaging.png",
    },
    {
        name: "Automotive",
        image: "/1/Clear_02_Automotive.png",
    },
    {
        name: "Construction",
        image: "/1/Clear_03_Construction.png",
    },
    {
        name: "Electrical & Wiring",
        image: "/1/Clear_04_Electrical_Wiring.png",
    },
    {
        name: "Medical",
        image: "/1/Clear_05_Medical.png",
    },
    {
        name: "Pharmaceutical",
        image: "/1/Clear_06_Pharmaceutical.png",
    },
    {
        name: "Agriculture",
        image: "/1/Clear_07_Agriculture.png",
    },
    {
        name: "Food Packaging",
        image: "/1/Clear_08_Food_Packaging.png",
    },
    {
        name: "Household Products",
        image: "/1/Clear_09_Household_Products.png",
    },
    {
        name: "Furniture",
        image: "/1/Clear_10_Furniture.png",
    },
    {
        name: "Footwear",
        image: "/1/Clear_11_Footwear.png",
    },
    {
        name: "Textiles",
        image: "/1/Clear_12_Textiles.png",
    },
    {
        name: "Appliances",
        image: "/1/Clear_13_Appliances.png",
    },
    {
        name: "Toys",
        image: "/1/Clear_14_Toys.png",
    },
    {
        name: "Industrial Components",
        image: "/1/Clear_15_Industrial_Components.png",
    },
    {
        name: "Water Treatment",
        image: "/1/Clear_16_Water_Treatment.png",
    },
    {
        name: "Cosmetics",
        image: "/1/Clear_17_Cosmetics.png",
    },
    {
        name: "Sports & Fitness",
        image: "/1/Clear_18_Sports_Fitness.png",
    },
    {
        name: "Extrusion Profiles",
        image: "/1/Clear_19_Extrusion_Profiles.png",
    },
    {
        name: "Recycling",
        image: "/1/Clear_20_Recycling.png",
    },
];


// =====================================================
// COMPONENT
// =====================================================

export default function StrongerTogether() {

    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const centerRef = useRef(null);
    const ringsRef = useRef(null);
    const tileRefs = useRef([]);
    const hoveredIndexRef = useRef(-1);
    const activeIndexRef = useRef(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const outerCount = Math.ceil(
        industries.length * 0.55
    );

    // =================================================
    // INTERSECTION OBSERVER
    // =================================================

    useEffect(() => {

        const section = sectionRef.current;

        if (!section) return;

        const observer =
            new IntersectionObserver(
                ([entry]) => {

                    if (entry.isIntersecting) {

                        setIsVisible(true);

                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.2,
                }
            );

        observer.observe(section);

        return () => observer.disconnect();

    }, []);


    // =================================================
    // ORBIT
    // =================================================

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const stage = stageRef.current;
        const rings = ringsRef.current;

        if (!section || !stage) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let animationFrame;
        let lastTime = performance.now();

        let outerTime = 0;
        let innerTime = 0;
        let velocity = 1;

        const geometry = {
            cx: 0,
            cy: 0,
            outer: {
                rx: 0,
                ry: 0,
                size: 124,
            },
            inner: {
                rx: 0,
                ry: 0,
                size: 104,
            },
        };

        const updateGeometry = () => {
            const width = section.clientWidth;
            const height = section.clientHeight;

            const isMobile = width < 640;

            const outerSize = isMobile ? 62 : 124;
            const innerSize = isMobile ? 52 : 104;

            const centerHeight = centerRef.current?.offsetHeight ?? 380;

            const innerRy = Math.max(
                height * 0.3,
                centerHeight / 2 + innerSize * (isMobile ? 0.2 : 0.55)
            );

            const outerRy = Math.min(
                height / 2 - outerSize * 0.8,
                innerRy + height * 0.12
            );

            geometry.cx = width / 2;
            geometry.cy = height / 2;

            geometry.outer = {
                rx: width * (isMobile ? 0.46 : 0.45),
                ry: outerRy,
                size: outerSize,
            };

            geometry.inner = {
                rx: width * (isMobile ? 0.36 : 0.33),
                ry: innerRy,
                size: innerSize,
            };

            if (rings) {
                rings.setAttribute(
                    "viewBox",
                    `0 0 ${width} ${height}`
                );

                const ellipses = rings.querySelectorAll("ellipse");

                const values = [
                    geometry.outer,
                    geometry.inner,
                    geometry.outer,
                    geometry.inner,
                ];

                ellipses.forEach((ellipse, index) => {
                    const orbit = values[index];

                    ellipse.setAttribute("cx", geometry.cx);
                    ellipse.setAttribute("cy", geometry.cy);
                    ellipse.setAttribute("rx", orbit.rx);
                    ellipse.setAttribute("ry", orbit.ry);
                });
            }

            tileRefs.current.forEach((tile, index) => {
                if (!tile) return;

                tile.style.setProperty(
                    "--size",
                    `${index < outerCount ? outerSize : innerSize}px`
                );
            });
        };

        updateGeometry();

        const resizeObserver = new ResizeObserver(updateGeometry);
        resizeObserver.observe(section);

        const animate = (now) => {
            const delta = Math.min(
                0.05,
                (now - lastTime) / 1000
            );

            lastTime = now;

            /*
             * EXACT REFERENCE BEHAVIOUR:
             * hovered tile = orbit stops
             */
            const targetVelocity =
                hoveredIndexRef.current >= 0 ||
                    prefersReducedMotion
                    ? 0
                    : 1;

            velocity +=
                (targetVelocity - velocity) *
                Math.min(1, delta * 4);

            outerTime += 0.085 * velocity * delta;
            innerTime -= 0.12 * velocity * delta;

            let frontIndex = -1;
            let frontDepth = -2;

            tileRefs.current.forEach((tile, index) => {
                if (!tile) return;

                const isOuter = index < outerCount;

                const count = isOuter
                    ? outerCount
                    : industries.length - outerCount;

                const positionIndex = isOuter
                    ? index
                    : index - outerCount;

                const orbit = isOuter
                    ? geometry.outer
                    : geometry.inner;

                const angle =
                    (positionIndex / count) * Math.PI * 2 +
                    (isOuter
                        ? outerTime
                        : innerTime + 0.3);

                const depth = Math.sin(angle);

                const x =
                    geometry.cx +
                    Math.cos(angle) *
                    orbit.rx;

                const y =
                    geometry.cy +
                    depth *
                    orbit.ry;

                /*
                 * Same depth scaling as reference
                 */
                const scale =
                    (0.58 +
                        0.42 *
                        ((depth + 1) / 2)) *
                    0.4 +
                    0.6;

                const blur =
                    depth < -0.2
                        ? Math.round(
                            (-depth - 0.2) *
                            10
                        ) / 2
                        : 0;

                tile.style.transform = `
                translate3d(
                    ${x.toFixed(1)}px,
                    ${y.toFixed(1)}px,
                    0
                )
                scale(${scale.toFixed(3)})
            `;

                tile.style.opacity =
                    0.45 +
                    0.55 *
                    ((depth + 1) / 2);

                tile.style.filter = blur
                    ? `blur(${blur}px)`
                    : "none";

                /*
                 * Front tiles stay above back tiles
                 */
                tile.style.zIndex =
                    index === hoveredIndexRef.current
                        ? 900
                        : Math.round(depth * 100) +
                        (depth > 0.15
                            ? 600
                            : 300);

                /*
                 * Find front tile for center readout
                 */
                if (
                    hoveredIndexRef.current < 0 &&
                    depth > frontDepth
                ) {
                    frontDepth = depth;
                    frontIndex = index;
                }
            });

            if (
                hoveredIndexRef.current < 0 &&
                frontIndex !== activeIndexRef.current &&
                frontIndex >= 0
            ) {
                activeIndexRef.current = frontIndex;
                setActiveIndex(frontIndex);
            }

            animationFrame =
                requestAnimationFrame(animate);
        };

        animationFrame =
            requestAnimationFrame(animate);

        /*
         * EXACT mouse tilt from reference
         */
        const handlePointerMove = (event) => {
            const rect =
                section.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            stage.style.transform = `
            rotateX(${(-y * 7).toFixed(2)}deg)
            rotateY(${(x * 9).toFixed(2)}deg)
        `;
        };

        const handlePointerLeave = () => {
            stage.style.transform = "";
        };

        section.addEventListener(
            "pointermove",
            handlePointerMove
        );

        section.addEventListener(
            "pointerleave",
            handlePointerLeave
        );

        return () => {
            hoveredIndexRef.current = -1;
            cancelAnimationFrame(
                animationFrame
            );

            resizeObserver.disconnect();

            section.removeEventListener(
                "pointermove",
                handlePointerMove
            );

            section.removeEventListener(
                "pointerleave",
                handlePointerLeave
            );
        };
    }, [industries.length, outerCount]);


    // =================================================
    // HOVER
    // =================================================

    const handleHover = (index) => {
        hoveredIndexRef.current = index;
        activeIndexRef.current = index;
        setActiveIndex(index);
    };

    const handleLeave = () => {
        hoveredIndexRef.current = -1;
    };


    // =================================================
    // JSX
    // =================================================

    return (

        <section
            ref={sectionRef}
            className={`
                relative
                isolate
                h-[700px]
                min-h-[640px]
                overflow-hidden
                bg-[#f8f6f1]
                select-none
                sm:h-[92vh]
                sm:max-h-[900px]
            `}
            aria-labelledby="industry-orbit-title"
        >

            {/* =========================================
                BACKGROUND
            ========================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    bg-[radial-gradient(40%_45%_at_50%_50%,rgba(212,164,69,0.12),transparent_70%),radial-gradient(80%_60%_at_50%_110%,rgba(20,37,94,0.10),transparent_70%)]
                "
            />


            {/* =========================================
                3D STAGE
            ========================================== */}

            <div
                ref={stageRef}
                className="
                    absolute
                    inset-0
                    will-change-transform
                    transition-transform duration-700 ease-out
                "
                style={{
                    perspective: "1400px",
                }}
            >

                {/* =====================================
                    ORBIT RINGS
                ====================================== */}

                <svg
                    ref={ringsRef}
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        h-full
                        w-full
                        overflow-visible
                    "
                    aria-hidden="true"
                >

                    <ellipse
                        fill="none"
                        stroke="#d4a445"
                        strokeWidth="1"
                        strokeOpacity="0.35"
                        strokeDasharray="3 7"
                    />

                    <ellipse
                        fill="none"
                        stroke="#d4a445"
                        strokeWidth="1"
                        strokeOpacity="0.35"
                        strokeDasharray="3 7"
                    />

                    <ellipse
                        fill="none"
                        stroke="#d4a445"
                        strokeWidth="1"
                        strokeOpacity="0.14"
                    />

                    <ellipse
                        fill="none"
                        stroke="#d4a445"
                        strokeWidth="1"
                        strokeOpacity="0.14"
                    />

                </svg>


                {/* =====================================
                    INDUSTRY TILES
                ====================================== */}

                {industries.map(
                    (industry, index) => (

                        <a
                            key={
                                industry.name
                            }

                            ref={(el) => {

                                tileRefs.current[
                                    index
                                ] = el;
                            }}

                            href="#"
                            aria-label={
                                industry.name
                            }

                            onMouseEnter={() =>
                                handleHover(
                                    index
                                )
                            }

                            onMouseLeave={handleLeave}

                            onFocus={() =>
                                handleHover(
                                    index
                                )
                            }

                            onBlur={handleLeave}

                            className="
                                group
                                absolute
                                left-0
                                top-0
                                block
                                h-[var(--size,124px)]
                                w-[var(--size,124px)]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-[20px]
                                bg-white
                                p-0
                                shadow-[0_20px_40px_-18px_rgba(5,13,43,0.55)]
                                will-change-transform
                            "

                            style={{
                                opacity: 0,
                            }}
                        >

                            <span
                                className="
                                    absolute
                                    inset-0
                                    overflow-hidden
                                    rounded-[20px]
                                    outline-[3px]
                                    outline-white
                                    transition-all
                                    duration-500
                                    hover:scale-[1.35]
                                    hover:outline-[#f2d98a]
                                    hover:shadow-[0_30px_60px_-20px_rgba(5,13,43,0.7),0_0_0_8px_rgba(242,217,138,0.25)]
                                "
                            >

                                <img
                                    src={
                                        industry.image
                                    }

                                    alt=""

                                    draggable={
                                        false
                                    }

                                    loading="lazy"

                                    className="
                                        block
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        hover:scale-[1.12]
                                    "
                                />


                                {/* NUMBER */}

                                <span
                                    className="
                                        absolute
                                        left-[7px]
                                        top-[7px]
                                        rounded-full
                                        bg-[#050d2b]/75
                                        px-2
                                        py-0.5
                                        text-[10px]
                                        font-extrabold
                                        tracking-[0.08em]
                                        text-[#f2d98a]
                                        max-sm:hidden
                                    "
                                >
                                    {String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                            </span>


                            {/* LABEL */}

                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    left-1/2
                                    top-[calc(100%+12px)]
                                    -translate-x-1/2
                                    translate-y-1
                                    whitespace-nowrap
                                    rounded-full
                                    bg-[#050d2b]
                                    px-3.5
                                    py-1.5
                                    text-[11px]
                                    font-extrabold
                                    uppercase
                                    tracking-[0.1em]
                                    text-white
                                    opacity-0
                                    transition-all
                                    duration-300
                                    group-hover:opacity-100
                                "
                            >
                                {industry.name}
                            </span>

                        </a>
                    )
                )}


                {/* =====================================
                    CENTER CONTENT
                ====================================== */}

                <div
                    ref={centerRef}
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        z-[500]
                        w-[88vw]
                        max-w-[820px]
                        -translate-x-1/2
                        -translate-y-1/2
                        text-center
                    "
                >

                    {/* EYEBROW */}

                    <span
                        className={`
                            pointer-events-auto
                            inline-flex
                            items-center
                            gap-3
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.30em]
                            text-[#b8862b]
                            transition-all
                            duration-1000
                            sm:text-xs
                            sm:tracking-[0.42em]
                            ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }
                        `}
                    >

                        <span
                            className="
                                h-px
                                w-5
                                bg-[#d4a445]
                                sm:w-9
                            "
                        />

                        Industries We Serve

                        <span
                            className="
                                h-px
                                w-5
                                bg-[#d4a445]
                                sm:w-9
                            "
                        />

                    </span>


                    {/* TITLE */}

                    <h2
                        id="industry-orbit-title"

                        className={`
                            mt-3
                            font-serif
                            text-[44px]
                            font-semibold
                            leading-[0.98]
                            tracking-[0.045em]
                            text-[#14255e]
                            drop-shadow-[0_0_40px_#f8f6f1]
                            transition-all
                            duration-1000
                            sm:mt-4
                            sm:text-[clamp(52px,7vw,104px)]
                            ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }
                        `}
                    >

                        Industries We

                        <br />

                        <p
                            className="
                            "
                        >
                            Empower
                        </p>

                    </h2>


                    {/* READOUT */}

                    <div
                        className={`
                            pointer-events-auto
                            mx-auto
                            mt-2
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            bg-white/85
                            py-2
                            pl-2
                            pr-4
                            shadow-[0_10px_30px_-18px_rgba(5,13,43,0.5)]
                            backdrop-blur-md
                            transition-all
                            duration-1000
                            sm:mt-[22px]
                            ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }
                        `}
                    >

                        <b
                            className="
                                grid
                                h-[34px]
                                min-w-[34px]
                                place-items-center
                                rounded-full
                                bg-gradient-to-br
                                from-[#f2d98a]
                                to-[#d4a445]
                                px-2
                                text-base
                                text-[#050d2b]
                            "
                        >
                            {String(
                                activeIndex + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </b>


                        <span
                            key={activeIndex}
                            className="
                                text-left
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.1em]
                                text-[#14255e]
                                sm:text-base
                            "
                        >
                            {
                                industries[
                                    activeIndex
                                ]?.name
                            }
                        </span>

                    </div>


                    {/* CTA */}

                    {/* <div
                        className={`
                            mt-5
                            flex
                            justify-center
                            transition-all
                            duration-1000
                            sm:mt-[26px]
                            ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }
                        `}
                    >

                        <Link
                            href="/about-us"

                            className="
                                group
                                pointer-events-auto
                                relative
                                inline-flex
                                items-center
                                gap-4
                                overflow-hidden
                                rounded-full
                                bg-gradient-to-br
                                from-[#0b1c52]
                                to-[#050d2b]
                                py-2
                                pl-6
                                pr-2.5
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_18px_40px_-16px_rgba(5,13,43,0.7)]
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:text-[#050d2b]
                                hover:shadow-[0_22px_44px_-16px_rgba(184,134,43,0.7)]
                                sm:pl-[30px]
                                sm:text-base
                            "
                        >


                            <span
                                className="
                                    absolute
                                    inset-0
                                    -translate-x-full
                                    bg-gradient-to-br
                                    from-[#b8862b]
                                    to-[#f2d98a]
                                    transition-transform
                                    duration-500
                                    group-hover:translate-x-0
                                "
                            />


                            <span
                                className="
                                    relative
                                    z-10
                                "
                            >
                                Start Exploring
                            </span>


                            <span
                                className="
                                    relative
                                    z-10
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-[#050d2b]
                                    transition-transform
                                    duration-500
                                    group-hover:rotate-45
                                    sm:h-[46px]
                                    sm:w-[46px]
                                "
                            >

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2.4}
                                />

                            </span>

                        </Link>

                    </div> */}

                </div>

            </div>


            {/* =========================================
                BOTTOM HINT
            ========================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-6
                    left-7
                    z-[600]
                    hidden
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#14255e]/45
                    sm:block
                "
            >
                Hover a tile to pause the orbit
            </div>

        </section>
    );
}