"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";


// =====================================================
// IMAGES
// =====================================================

const images = [
    "/1/Clear_01_Packaging.png",
    "/1/Clear_02_Automotive.png",
    "/1/Clear_03_Construction.png",
    "/1/Clear_04_Electrical_Wiring.png",
    "/1/Clear_05_Medical.png",
    "/1/Clear_06_Pharmaceutical.png",
    "/1/Clear_07_Agriculture.png",
    "/1/Clear_08_Food_Packaging.png",
    "/1/Clear_09_Household_Products.png",
    "/1/Clear_10_Furniture.png",
    "/1/Clear_11_Footwear.png",
    "/1/Clear_12_Textiles.png",
    "/1/Clear_13_Appliances.png",
    "/1/Clear_14_Toys.png",
    "/1/Clear_15_Industrial_Components.png",
    "/1/Clear_16_Water_Treatment.png",
    "/1/Clear_17_Cosmetics.png",
    "/1/Clear_18_Sports_Fitness.png",
    "/1/Clear_19_Extrusion_Profiles.png",
    "/1/Clear_20_Recycling.png",
];


// =====================================================
// IMAGE POSITIONS
// =====================================================

const positions = [

    // =========================================
    // TOP
    // =========================================

    {
        x: 2,
        y: 2,
        scale: 0.82,
        depth: 0.80,
    },

    {
        x: 19,
        y: 1,
        scale: 0.90,
        depth: 1.00,
    },

    {
        x: 37,
        y: 4,
        scale: 0.82,
        depth: 0.75,
    },

    {
        x: 55,
        y: 0,
        scale: 0.92,
        depth: 1.05,
    },

    {
        x: 73,
        y: 3,
        scale: 0.86,
        depth: 0.90,
    },

    {
        x: 91,
        y: 5,
        scale: 0.92,
        depth: 1.10,
    },


    // =========================================
    // UPPER SIDES
    // =========================================

    {
        x: 1,
        y: 25,
        scale: 0.78,
        depth: 0.70,
    },

    {
        x: 92,
        y: 24,
        scale: 0.86,
        depth: 0.90,
    },


    // =========================================
    // MIDDLE SIDES
    // =========================================

    {
        x: 2,
        y: 46,
        scale: 0.88,
        depth: 0.80,
    },

    {
        x: 91,
        y: 45,
        scale: 0.80,
        depth: 0.75,
    },


    // =========================================
    // LOWER SIDES
    // =========================================

    {
        x: 1,
        y: 65,
        scale: 0.82,
        depth: 0.70,
    },

    {
        x: 92,
        y: 64,
        scale: 0.88,
        depth: 0.85,
    },


    // =========================================
    // BOTTOM
    // =========================================

    {
        x: 6,
        y: 81,
        scale: 0.82,
        depth: 0.75,
    },

    {
        x: 22,
        y: 89,
        scale: 0.92,
        depth: 0.95,
    },

    {
        x: 39,
        y: 83,
        scale: 0.84,
        depth: 0.85,
    },

    {
        x: 56,
        y: 90,
        scale: 0.90,
        depth: 1.00,
    },

    {
        x: 73,
        y: 83,
        scale: 0.84,
        depth: 0.80,
    },

    {
        x: 91,
        y: 89,
        scale: 0.80,
        depth: 0.75,
    },


    // =========================================
    // EXTRA POSITIONS
    // =========================================

    {
        x: 12,
        y: 18,
        scale: 0.72,
        depth: 0.65,
    },

    {
        x: 82,
        y: 18,
        scale: 0.74,
        depth: 0.70,
    },
];


// =====================================================
// COMPONENT
// =====================================================

export default function StrongerTogether() {

    const sectionRef = useRef(null);

    const imageRefs = useRef([]);

    const randomPositions = positions.map((position) => ({
        ...position,

        x: position.x + (Math.random() * 6 - 3),
        y: position.y + (Math.random() * 6 - 3),

        scale:
            position.scale *
            (0.94 + Math.random() * 0.12),

        rotation:
            Math.random() * 8 - 4,
    }));
    // =================================================
    // GSAP
    // =================================================

    useLayoutEffect(() => {

        const section = sectionRef.current;

        if (!section) return;


        const ctx = gsap.context(() => {

            const items =
                imageRefs.current.filter(Boolean);


            // =========================================
            // INITIAL IMAGE STATE
            // =========================================

            items.forEach((item, index) => {

                const position =
                    positions[index];

                gsap.set(item, {

                    opacity: 0,

                    scale:
                        position?.scale || 1,

                    x: 0,

                    y: 0,

                    rotation: 0,
                });
            });


            // =========================================
            // ENTRANCE ANIMATION
            // =========================================

            gsap.to(items, {

                opacity: 1,

                duration: 1.1,

                stagger: {

                    amount: 1.1,

                    from: "random",
                },

                ease: "power3.out",
            });


            // =========================================
            // MOUSE
            // =========================================

            const mouse = {

                x: 0,

                y: 0,
            };


            const target = {

                x: 0,

                y: 0,
            };


            // =========================================
            // MOUSE MOVE
            // =========================================

            const handleMouseMove = (event) => {

                const rect =
                    section.getBoundingClientRect();


                target.x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;


                target.y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;
            };


            // =========================================
            // MOUSE LEAVE
            // =========================================

            const handleMouseLeave = () => {

                target.x = 0;

                target.y = 0;
            };


            section.addEventListener(
                "mousemove",
                handleMouseMove
            );


            section.addEventListener(
                "mouseleave",
                handleMouseLeave
            );


            // =========================================
            // ANIMATION LOOP
            // =========================================

            let animationFrame;


            const update = () => {

                // -------------------------------------
                // FAST SMOOTHING
                // -------------------------------------

                mouse.x +=
                    (target.x - mouse.x) *
                    0.13;


                mouse.y +=
                    (target.y - mouse.y) *
                    0.13;


                // -------------------------------------
                // SECTION SIZE
                // -------------------------------------

                const sectionWidth =
                    section.clientWidth;


                const sectionHeight =
                    section.clientHeight;


                // -------------------------------------
                // EACH IMAGE
                // -------------------------------------

                items.forEach((item, index) => {

                    const position =
                        positions[index];


                    if (!position) return;


                    // =================================
                    // ORIGINAL POSITION
                    // =================================

                    const originalLeft =
                        item.offsetLeft;


                    const originalTop =
                        item.offsetTop;


                    const itemWidth =
                        item.offsetWidth;


                    const itemHeight =
                        item.offsetHeight;


                    // =================================
                    // MAXIMUM MOVEMENT
                    // =================================

                    const maxLeftMovement =
                        sectionWidth -
                        originalLeft -
                        itemWidth -
                        4;


                    const maxRightMovement =
                        -originalLeft +
                        4;


                    const maxDownMovement =
                        sectionHeight -
                        originalTop -
                        itemHeight -
                        4;


                    const maxUpMovement =
                        -originalTop +
                        4;


                    // =================================
                    // DESIRED MOVEMENT
                    // =================================

                    const desiredX =
                        mouse.x *
                        75 *
                        position.depth;


                    const desiredY =
                        mouse.y *
                        75 *
                        position.depth;


                    // =================================
                    // CLAMP X
                    // =================================

                    const moveX =
                        Math.max(

                            maxRightMovement,

                            Math.min(
                                maxLeftMovement,
                                desiredX
                            )
                        );


                    // =================================
                    // CLAMP Y
                    // =================================

                    const moveY =
                        Math.max(

                            maxUpMovement,

                            Math.min(
                                maxDownMovement,
                                desiredY
                            )
                        );


                    // =================================
                    // ROTATION
                    // =================================

                    const rotation =
                        mouse.x *
                        4 *
                        position.depth;


                    // =================================
                    // APPLY
                    // =================================

                    gsap.set(item, {

                        x: moveX,

                        y: moveY,

                        rotation,
                    });

                });


                animationFrame =
                    requestAnimationFrame(update);
            };


            animationFrame =
                requestAnimationFrame(update);


            // =========================================
            // CLEANUP
            // =========================================

            return () => {

                section.removeEventListener(
                    "mousemove",
                    handleMouseMove
                );


                section.removeEventListener(
                    "mouseleave",
                    handleMouseLeave
                );


                cancelAnimationFrame(
                    animationFrame
                );
            };

        }, section);


        return () => ctx.revert();

    }, []);


    // =================================================
    // JSX
    // =================================================

    return (

        <section
            ref={sectionRef}
            className="
                relative
                min-h-[85vh]
                overflow-hidden
                bg-white
            "
        >

            {/* =========================================
                FLOATING IMAGES
            ========================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                "
            >

                {images.map((image, index) => {

                    const position = randomPositions[index];


                    return (

                        <div
                            key={image}

                            ref={(el) => {

                                imageRefs.current[index] =
                                    el;
                            }}

                            className="
                                absolute
                                left-0
                                top-0
                                will-change-transform
                            "

                            style={{

                                left:
                                    `${position.x}%`,

                                top:
                                    `${position.y}%`,

                                width:
                                    "clamp(60px, 8vw, 152px)",
                            }}
                        >

                            <div
                                className="
                                    relative
                                    aspect-square
                                    w-full
                                    overflow-hidden
                                    rounded-[8px]
                                "
                            >

                                <img
                                    src={image}

                                    alt=""

                                    draggable={false}

                                    className="
                                        h-full
                                        w-full
                                        select-none
                                        object-cover
                                    "
                                />

                            </div>

                        </div>
                    );
                })}

            </div>


            {/* =========================================
                CENTER CONTENT
            ========================================== */}

            <div
                className="
                    relative
                    z-30
                    flex
                    min-h-[85vh]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >

                <h2
                    className="
                        max-w-[1200px]
                        text-[clamp(48px,10vw,100px)]
                        font-medium
                        leading-[0.95]
                        tracking-[-0.065em]
                        text-[#0d2461]
                    "
                >
                    Explore Our Industry
                </h2>


                {/* =====================================
                    BUTTON
                ====================================== */}

                <Link
                    href="/about-us"

                    className="
                        group
                        mt-12
                        inline-flex
                        items-center
                        gap-4
                        rounded-full
                        bg-[#0d2461]
                        px-6
                        py-3
                        text-[15px]
                        font-medium
                        text-white
                        transition-all
                        duration-500
                        hover:bg-white
                        hover:text-black
                    "
                >

                    <span>
                        Start Exploring
                    </span>


                    <span
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full
                            bg-white
                            text-black
                            transition-all
                            duration-500
                            group-hover:bg-black
                            group-hover:text-white
                        "
                    >

                        <ArrowUpRight
                            size={18}
                            strokeWidth={2}

                            className="
                                transition-transform
                                duration-500
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                        />

                    </span>

                </Link>

            </div>


            {/* =========================================
                DARK VIGNETTE
            ========================================== */}

            {/* <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    bg-[radial-gradient(circle_at_center,transparent_25%,rgba(16,18,19,0.12)_75%,rgba(16,18,19,0.3))]
                "
            /> */}

        </section>
    );
}