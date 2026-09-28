
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
    {
        id: 1,
        name: "PVC Resin",
        category: "Polymers",
        image: "/product/PVC_Resin.png",
        description:
            "High quality PVC resin for reliable industrial applications.",
    },
    {
        id: 2,
        name: "EVA Resin",
        category: "Polymers",
        image: "/product/EVA_Resin.png",
        description:
            "Reliable EVA polymer solutions for multiple industries.",
    },
    {
        id: 3,
        name: "Polyethylene",
        category: "Polymers",
        image: "/product/Polyethylene_PE.png",
        description:
            "Premium polyethylene material for flexible applications.",
    },
    {
        id: 4,
        name: "Polypropylene",
        category: "Polymers",
        image: "/product/Polypropylene_PP.png",
        description:
            "Quality polypropylene materials for multiple applications.",
    },
    {
        id: 5,
        name: "Polystyrene",
        category: "Polymers",
        image: "/product/Polystyrene_PS.png",
        description:
            "High-performance polystyrene for industrial applications.",
    },
    {
        id: 6,
        name: "PET Resin",
        category: "Resins",
        image: "/product/PET_Resin.png",
        description:
            "Reliable PET resin solutions for packaging and manufacturing.",
    },
    {
        id: 7,
        name: "Plasticizers",
        category: "Chemicals",
        image: "/product/Plasticizers.png",
        description:
            "High-quality plasticizers for flexible polymer applications.",
    },
    {
        id: 8,
        name: "Calcium Carbonate",
        category: "Fillers",
        image: "/product/Calcium_Carbonate.png",
        description:
            "Industrial-grade calcium carbonate for polymer applications.",
    },
];

function ProductCard({ product }) {
    return (
        <div
            className="
                group
                relative
                h-[620px]
                w-full
                overflow-hidden
                rounded-[10px]
                bg-[#F3F3F1]
            "
        >
            {/* PRODUCT IMAGE */}

            <div className="absolute inset-0">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="
                        (max-width: 640px) 90vw,
                        (max-width: 768px) 45vw,
                        (max-width: 1024px) 30vw,
                        (max-width: 1280px) 22vw,
                        18vw
                    "
                    className="
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                    "
                />
            </div>

            {/* GRADIENT */}

            {/* <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[45%]
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            /> */}

            {/* CATEGORY */}

            {/* <div
                className="
                    absolute
                    left-4
                    top-4
                    rounded-md
                    bg-white/90
                    px-3
                    py-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#0d2461]
                    backdrop-blur-sm
                "
            >
                {product.category}
            </div> */}

            {/* PRODUCT NAME */}

            {/* <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    translate-y-3
                    px-5
                    py-5
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                "
            >
                <h3
                    className="
                        text-[26px]
                        font-medium
                        leading-none
                        tracking-[-0.04em]
                        text-white
                    "
                >
                    {product.name}
                </h3>

                <p
                    className="
                        mt-2
                        max-w-[240px]
                        text-xs
                        leading-5
                        text-white/75
                    "
                >
                    {product.description}
                </p>
            </div> */}
        </div>
    );
}

export default function ProductSlider() {
    return (
        <section
            className="
                w-full
                overflow-hidden
                px-4
                py-12
                sm:px-6
                sm:py-14
                md:px-8
                lg:px-10
                lg:pb-16
                lg:pt-0
            "
        >
            {/* =================================================
                SECTION HEADER
            ================================================= */}

            <div
                className="
                    mb-10
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    sm:mb-12
                "
            >
                <span
                    className="
                        inline-flex
                        rounded-md
                        bg-[#0d2461]
                        px-4
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.22em]
                        text-white z-50
                    "
                >
                    OUR PRODUCTS
                </span>

                <h2
                    className="
                        mt-5
                        max-w-4xl
                        text-[36px]
                        font-medium
                        leading-[0.95]
                        tracking-[-0.055em]
                        text-[#0d2461]
                        sm:text-[46px]
                        md:text-[56px]
                        lg:text-[68px]
                    "
                >
                    Quality polymers.
                    <span className="block">
                        Reliable supply.
                    </span>
                </h2>
            </div>

            {/* =================================================
                SWIPER
            ================================================= */}

            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                speed={900}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },

                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                className="!overflow-visible"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
