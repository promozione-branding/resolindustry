"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCoverflow,
    Autoplay,
    Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// ============================================================
// CATEGORIES
// ============================================================

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


// ============================================================
// PRODUCTS
// ============================================================

const products = [
    {
        id: 1,
        name: "PVC Resin",
        category: "PVC Resin",
        image: "/product/1.png",
        description: "High quality PVC resin for industrial applications.",
    },

    {
        id: 2,
        name: "EVA",
        category: "EVA",
        image: "/product/1.png",
        description: "Reliable EVA polymer solutions for multiple industries.",
    },

    {
        id: 3,
        name: "LLDPE",
        category: "LLDPE",
        image: "/product/1.png",
        description: "Premium LLDPE material for flexible applications.",
    },

    {
        id: 4,
        name: "LDPE",
        category: "LDPE",
        image: "/product/1.png",
        description: "Quality LDPE materials for packaging applications.",
    },

    {
        id: 5,
        name: "Plasticizers",
        category: "Plasticizers",
        image: "/product/1.png",
        description: "High-performance plasticizers for flexible materials.",
    },

    {
        id: 6,
        name: "PVC Additives",
        category: "PVC Additives",
        image: "/product/1.png",
        description: "Specialized additives for improved PVC performance.",
    },

    {
        id: 7,
        name: "Industrial Chemicals",
        category: "Chemicals",
        image: "/product/1.png",
        description: "Industrial-grade chemical solutions.",
    },

    {
        id: 8,
        name: "Polymer Solutions",
        category: "PVC Resin",
        image: "/product/1.png",
        description: "Reliable polymer materials for manufacturers.",
    },
];


export default function ProductShowcase() {

    const [activeCategory, setActiveCategory] = useState("All");


    // =========================================================
    // FILTER PRODUCTS
    // =========================================================

    const filteredProducts = useMemo(() => {

        if (activeCategory === "All") {
            return products;
        }

        return products.filter(
            (product) => product.category === activeCategory
        );

    }, [activeCategory]);


    return (

        <section
            className="
                relative
                overflow-hidden
                bg-[#E7E8EA]
                py-10
                sm:py-12
                lg:py-15
            "
        >

            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">


                {/* =================================================
                    HEADING
                ================================================= */}

                <div className="mx-auto max-w-[850px] text-center">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-white
                            px-5
                            py-2
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.25em]
                            text-black/50
                            shadow-sm
                        "
                    >
                        OUR PRODUCTS
                    </span>

                    <h2 className="text-[40px] mt-4 font-medium leading-[0.95] tracking-[-0.045em] text-[#0d2461] sm:text-5xl md:text-6xl lg:text-[68px]">
                        Quality products.
                        <span className="mt-1 block text-[#0d2461]">
                            Reliable supply.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-[650px]
                            text-sm
                            leading-6
                            text-black/65
                            sm:text-base
                        "
                    >
                        Explore our range of polymers, plasticizers,
                        PVC additives and industrial chemicals designed
                        for diverse manufacturing requirements.
                    </p>

                </div>



                {/* =================================================
                    PRODUCT STACK / SWIPER
                ================================================= */}

                <div className="relative mx-auto mt-16 max-w-[1100px]">


                    <Swiper
                        modules={[
                            EffectCoverflow,
                            Autoplay,
                            Pagination,
                        ]}

                        effect="coverflow"

                        centeredSlides={true}

                        slidesPerView={1}

                        spaceBetween={0}

                        loop={filteredProducts.length > 3}

                        speed={900}

                        grabCursor={true}

                        autoplay={{
                            delay: 2800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        coverflowEffect={{
                            rotate: 5,
                            stretch: -45,
                            depth: 180,
                            modifier: 1.1,
                            slideShadows: false,
                        }}

                        breakpoints={{

                            640: {
                                slidesPerView: 2,
                            },

                            1024: {
                                slidesPerView: 3,
                            },

                        }}

                        pagination={{
                            clickable: true,
                        }}

                        className="product-stack-swiper !overflow-visible !pb-16"
                    >


                        {filteredProducts.map((product) => (

                            <SwiperSlide
                                key={product.id}
                                className="!h-auto"
                            >

                                <div
                                    className="
                                        group
                                        relative
                                        h-[460px]
                                        overflow-hidden
                                        rounded-[14px]
                                        bg-white
                                        shadow-[0_25px_70px_rgba(0,0,0,0.16)]
                                        sm:h-[500px]
                                    "
                                >


                                    {/* =================================
                                        PRODUCT IMAGE
                                    ================================= */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-[#F2F2F0]
                                        "
                                    >

                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill

                                            sizes="
                                                (max-width:640px) 90vw,
                                                (max-width:1024px) 45vw,
                                                340px
                                            "
                                            className="
                                                object-contain
                                                p-8
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-105
                                            "
                                        />

                                    </div>


                                    {/* =================================
                                        DARK GRADIENT
                                    ================================= */}

                                    <div
                                        className="
                                            absolute
                                            inset-x-0
                                            bottom-0
                                            h-[55%]
                                            bg-gradient-to-t
                                            from-black/80
                                            via-black/25
                                            to-transparent
                                        "
                                    />


                                    {/* =================================
                                        PRODUCT CATEGORY
                                    ================================= */}

                                    <div
                                        className="
                                            absolute
                                            left-5
                                            top-5
                                            rounded-full
                                            bg-white/90
                                            px-4
                                            py-2
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            text-[#0B2E63]
                                            backdrop-blur-md
                                        "
                                    >
                                        {product.category}
                                    </div>


                                    {/* =================================
                                        PRODUCT CONTENT
                                    ================================= */}

                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            right-0
                                            p-6
                                            sm:p-7
                                        "
                                    >

                                        <h3
                                            className="
                                                text-2xl
                                                font-medium
                                                tracking-tight
                                                text-white
                                                sm:text-3xl
                                            "
                                        >
                                            {product.name}
                                        </h3>


                                        <p
                                            className="
                                                mt-2
                                                max-w-[350px]
                                                text-sm
                                                leading-5
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
                                                    text-[10px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-white/60
                                                "
                                            >
                                                Explore Product
                                            </span>


                                            <span
                                                className="
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-white
                                                    text-black
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-1
                                                "
                                            >
                                                →
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>



                {/* =================================================
                    CATEGORY FILTER
                ================================================= */}

                <div className="mt-5">


                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            overflow-x-auto
                            pb-4
                            scrollbar-hide
                            lg:flex-wrap
                            lg:overflow-visible
                        "
                    >

                        {categories.map((category) => {

                            const active =
                                activeCategory === category;

                            const count =
                                category === "All"
                                    ? products.length
                                    : products.filter(
                                        (item) =>
                                            item.category === category
                                    ).length;


                            return (

                                <button
                                    key={category}
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`
                                        group
                                        flex
                                        shrink-0
                                        items-center
                                        gap-2
                                        rounded-[6px]
                                        px-4
                                        py-3
                                        text-xs
                                        transition-all
                                        duration-300

                                        ${active
                                            ? "bg-white text-[#171717] shadow-sm"
                                            : "bg-white/50 text-black/45 hover:bg-white hover:text-black"
                                        }
                                    `}
                                >

                                    <span>
                                        {category}
                                    </span>

                                    <span
                                        className={`
                                            text-[10px]
                                            ${active
                                                ? "text-black/30"
                                                : "text-black/20"
                                            }
                                        `}
                                    >
                                        ({count})
                                    </span>

                                </button>

                            );

                        })}

                    </div>

                </div>

            </div>



            {/* =====================================================
                SWIPER STYLING
            ===================================================== */}

            <style jsx global>{`

                .product-stack-swiper
                    .swiper-slide {
                    opacity: 0.75;
                    transition:
                        opacity 0.6s ease,
                        transform 0.6s ease;
                }


                .product-stack-swiper
                    .swiper-slide-active {
                    opacity: 1;
                    z-index: 10;
                }


                .product-stack-swiper
                    .swiper-pagination {
                    bottom: 0;
                }


                .product-stack-swiper
                    .swiper-pagination-bullet {
                    width: 7px;
                    height: 7px;
                    margin: 0 4px !important;
                    background: #0B2E63;
                    opacity: 0.2;
                    transition: all 0.3s ease;
                }


                .product-stack-swiper
                    .swiper-pagination-bullet-active {
                    width: 28px;
                    border-radius: 20px;
                    opacity: 1;
                }


                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }


                .scrollbar-hide {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }

            `}</style>

        </section>

    );
}