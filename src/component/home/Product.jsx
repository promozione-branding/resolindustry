"use client";

import React, {
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
    "All",
    "PVC Resin",
    "EVA",
    "LLDPE",
    "LDPE",
    "Plasticizers",
    "PVC Additives",
    "Chemicals",
];


/* =========================================================
   PRODUCTS
========================================================= */

const products = [
    {
        id: 1,
        name: "PVC Resin",
        category: "Polymers",
        image: "/product/6.png",
        description:
            "High quality PVC resin for reliable industrial applications.",
    },
    {
        id: 2,
        name: "EVA Resin",
        category: "Polymers",
        image: "/product/9.png",
        description:
            "Reliable EVA polymer solutions for multiple industries.",
    },
    {
        id: 3,
        name: "Polyethylene (PE)",
        category: "Polymers",
        image: "/product/10.png",
        description:
            "Premium LLDPE material for flexible applications.",
    },
    {
        id: 4,
        name: "Polypropylene (PP)",
        category: "Polymers",
        image: "/product/7.png",
        description:
            "Quality LDPE materials for packaging applications.",
    },
    {
        id: 5,
        name: "Polystyrene (PS)",
        category: "Polymers",
        image: "/product/8.png",
        description:
            "High-performance plasticizers for flexible materials.",
    },
];


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
    product,
    cardRef,
    index,
}) {
    if (!product) return null;

    return (
        <article
            ref={cardRef}
            className="
                absolute
                left-1/2
                top-0
                h-[450px]
                w-[270px]
                overflow-hidden
                rounded-[10px]
            "
            style={{
                zIndex: index === 2 ? 20 : 5,
            }}
        >

            {/* PRODUCT IMAGE */}

            <div className="absolute inset-0 bg-[#F3F3F1]">

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="270px"
                    priority
                    className="object-contain p-7"
                />

            </div>


            {/* DARK GRADIENT */}

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[65%]
                    bg-gradient-to-t
                    from-black/90
                    via-black/35
                    to-transparent
                "
            />


            {/* CATEGORY */}

            <div
                className="
                    absolute
                    left-5
                    top-5
                    rounded-[5px]
                    bg-white/90
                    px-3
                    py-2
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#0d2461]
                    backdrop-blur-sm
                "
            >
                {product.category}
            </div>


            {/* CONTENT */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                "
            >

                <h3
                    className="
                        text-[27px]
                        font-normal
                        leading-none
                        tracking-[-0.04em]
                        text-white
                    "
                >
                    {product.name}
                </h3>


                <p
                    className="
                        mt-3
                        max-w-[220px]
                        text-[11px]
                        leading-[1.5]
                        text-white/65
                    "
                >
                    {product.description}
                </p>


                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <span
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-white/60
                        "
                    >
                        Explore product
                    </span>


                    <span
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                        "
                    >
                        →
                    </span>

                </div>

            </div>

        </article>
    );
}


/* =========================================================
   MAIN
========================================================= */

export default function ProductShowcase() {

    const sectionRef = useRef(null);

    const cardsStageRef = useRef(null);

    /*
     * Five card refs
     */
    const cardRefs = useRef([]);

    const headingRef = useRef(null);
    const lineRef = useRef(null);
    const categoryRef = useRef(null);

    const [activeCategory, setActiveCategory] =
        useState("All");


    /* =====================================================
       FILTER PRODUCTS
    ===================================================== */

    const filteredProducts = useMemo(() => {

        if (activeCategory === "All") {
            return products;
        }

        return products.filter(
            (product) =>
                product.category === activeCategory
        );

    }, [activeCategory]);


    /* =====================================================
       GET PRODUCT
    ===================================================== */

    const getProduct = (index) => {

        if (!filteredProducts.length) {
            return null;
        }

        return filteredProducts[
            index % filteredProducts.length
        ];
    };


    /*
     * FIVE PRODUCTS
     */

    const displayedProducts = [
        getProduct(0),
        getProduct(1),
        getProduct(2),
        getProduct(3),
        getProduct(4),
    ];


    /* =====================================================
       GSAP SCROLL ANIMATION
    ===================================================== */

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            /* =========================================
               INITIAL STATE
            ========================================= */

            gsap.set(cardsStageRef.current, {
                y: 70,
            });

            gsap.set(headingRef.current, {
                y: 0,
                opacity: 1,
            });

            gsap.set(lineRef.current, {
                scaleX: 0,
                transformOrigin: "center center",
            });

            gsap.set(categoryRef.current, {
                y: 80,
                opacity: 0,
            });


            /* =========================================
               INITIAL CARD POSITIONS

               All cards start close together.

               1 = far left
               2 = left
               3 = center
               4 = right
               5 = far right
            ========================================= */

            cardRefs.current.forEach((card, index) => {

                if (!card) return;

                const initialPositions = [
                    -42,
                    -21,
                    0,
                    21,
                    42,
                ];

                const rotations = [
                    -5,
                    -2.5,
                    0,
                    2.5,
                    5,
                ];

                gsap.set(card, {
                    xPercent: -50,
                    x: initialPositions[index],
                    y: index === 2 ? 25 : 42,
                    rotation: rotations[index],
                    scale: index === 2 ? 0.98 : 0.94,
                });

            });


            /* =========================================
               SCROLL TRIGGER
            ========================================= */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,

                    start: "top 90%",

                    end: "bottom 10%",

                    scrub: 1,

                    invalidateOnRefresh: true,

                    anticipatePin: 0,
                },
            });


            /* =========================================
               HEADING
            ========================================= */

            tl.to(
                headingRef.current,
                {
                    y: -35,
                    opacity: 0.9,
                    ease: "none",
                    duration: 0.8,
                },
                0
            );


            /* =========================================
               LINE
            ========================================= */

            tl.to(
                lineRef.current,
                {
                    scaleX: 1,
                    ease: "none",
                    duration: 0.6,
                },
                0
            );


            /* =========================================
               CARD STAGE
            ========================================= */

            tl.to(
                cardsStageRef.current,
                {
                    y: 0,
                    ease: "none",
                    duration: 1,
                },
                0
            );


            /* =========================================
               FIVE CARDS EXPAND
            ========================================= */

            const finalPositions = [
                -570,
                -285,
                0,
                285,
                570,
            ];

            const finalRotations = [
                -1.5,
                -0.75,
                0,
                0.75,
                1.5,
            ];


            cardRefs.current.forEach((card, index) => {

                if (!card) return;

                tl.to(
                    card,
                    {
                        x: finalPositions[index],
                        y: index === 2 ? -2 : 0,
                        rotation: finalRotations[index],
                        scale: 1,
                        ease: "power2.out",
                        duration: 1,
                    },
                    0
                );

            });


            /* =========================================
               CATEGORY BAR
            ========================================= */

            tl.to(
                categoryRef.current,
                {
                    y: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 0.2,
                },
                0.45
            );


        }, sectionRef);


        return () => ctx.revert();

    }, []);


    /* =====================================================
       RETURN
    ===================================================== */

    return (

        <section
            ref={sectionRef}
            className="
                relative
                min-h-screen
                w-full
                overflow-hidden
                bg-gray-50
            "
        >

            <div
                className="
                    relative
                    mx-auto
                    flex
                    min-h-[110vh]
                    w-full
                    max-w-[1500px]
                    flex-col
                    items-center
                    px-5
                    sm:px-8
                    lg:px-12
                "
            >

                {/* =================================================
                   HEADING
                ================================================= */}

                <div
                    ref={headingRef}
                    className="
                        relative
                        z-30
                        mx-auto
                        pt-[55px]
                        text-center
                    "
                >

                    <span
                        className="
                            inline-flex
                            rounded-md
                            bg-white
                            px-4
                            py-2
                            text-[9px]
                            uppercase
                            tracking-[0.22em]
                            text-[#0d2461]
                        "
                    >
                        OUR PRODUCTS
                    </span>


                    <h2
                        className="
                            mt-3
                            text-[42px]
                            font-medium
                            leading-[1]
                            tracking-[-0.055em]
                            text-[#0d2461]
                            sm:text-[52px]
                            md:text-[62px]
                            lg:text-[68px]
                        "
                    >

                        Quality polymers.

                        <span className="block">
                            Reliable supply.
                        </span>

                    </h2>


                    <div
                        ref={lineRef}
                        className="
                            mx-auto
                            mt-5
                            h-[2px]
                            w-[70px]
                            bg-[#0d2461]
                        "
                    />

                </div>


                {/* =================================================
                   CARD STAGE
                ================================================= */}

                <div
                    ref={cardsStageRef}
                    className="
                        relative
                        z-10
                        mt-10
                        h-[500px]
                        w-full
                        max-w-[1450px]
                    "
                >

                    {displayedProducts.map((product, index) => (

                        <ProductCard
                            key={`${product?.id}-${index}`}
                            product={product}
                            index={index}
                            cardRef={(el) => {
                                cardRefs.current[index] = el;
                            }}
                        />

                    ))}

                </div>


                {/* =================================================
                   CATEGORY / NAVIGATION PILL
                ================================================= */}

                {/*
                <div
                    ref={categoryRef}
                    className="
                        absolute
                        bottom-[15px]
                        left-1/2
                        z-50
                        w-[calc(100%-30px)]
                        max-w-[900px]
                        -translate-x-1/2
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-1
                            overflow-x-auto
                            rounded-full
                            bg-white/95
                            p-[6px]
                            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                            backdrop-blur-xl
                        "
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >

                        {categories.map((category) => {

                            const active =
                                activeCategory === category;

                            const count =
                                category === "All"
                                    ? products.length
                                    : products.filter(
                                        (product) =>
                                            product.category ===
                                            category
                                    ).length;

                            return (

                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(
                                            category
                                        )
                                    }
                                    className={`
                                        flex
                                        h-[42px]
                                        shrink-0
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        px-4
                                        text-[10px]
                                        transition-all
                                        duration-300

                                        ${
                                            active
                                                ? "bg-[#F0F0F0] text-black"
                                                : "text-black/60 hover:bg-[#F4F4F4] hover:text-black"
                                        }
                                    `}
                                >

                                    <span>
                                        {category}
                                    </span>

                                    <span
                                        className="
                                            text-[8px]
                                            text-black/30
                                        "
                                    >
                                        {count}
                                    </span>

                                </button>

                            );

                        })}

                    </div>

                </div>
                */}

            </div>

        </section>
    );
}