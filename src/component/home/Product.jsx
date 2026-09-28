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
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: "PVC Resin",
        category: "Polymers",
        image: "/product/15.png",
        description:
            "High quality PVC resin for reliable industrial applications.",
    },
    {
        id: 2,
        name: "EVA Resin",
        category: "Polymers",
        image: "/product/11.png",
        description:
            "Reliable EVA polymer solutions for multiple industries.",
    },
    {
        id: 3,
        name: "Polyethylene",
        category: "Polymers",
        image: "/product/14.png",
        description:
            "Premium LLDPE material for flexible applications.",
    },
    {
        id: 4,
        name: "Polypropylene",
        category: "Polymers",
        image: "/product/13.png",
        description:
            "Quality LDPE materials for packaging applications.",
    },
    {
        id: 5,
        name: "Polystyrene",
        category: "Polymers",
        image: "/product/12.png",
        description:
            "High-performance plasticizers for flexible materials.",
    },
];

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
                    className="object-center"
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
                    px-5
                    py-4
                "
            >



                <div
                    className="
                        flex
                        items-center
                        justify-between
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
                        <ArrowRight size={15} />
                    </span>
                </div>

            </div>

        </article>
    );
}

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

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = useMemo(() => {

        if (activeCategory === "All") {
            return products;
        }

        return products.filter(
            (product) =>
                product.category === activeCategory
        );

    }, [activeCategory]);

    const getProduct = (index) => {

        if (!filteredProducts.length) {
            return null;
        }

        return filteredProducts[
            index % filteredProducts.length
        ];
    };

    const displayedProducts = [
        getProduct(0),
        getProduct(1),
        getProduct(2),
        getProduct(3),
        getProduct(4),
    ];

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

            </div>
        </section>
    );
}