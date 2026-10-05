
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { ArrowRight } from "lucide-react";

const products = [
    {
        id: 1,
        name: "PVC Resin",
        category: "Polymers",
        image: "/product/PVC.png",
        backgroundColor: "#0d2461",
        description:
            "High quality PVC resin for reliable industrial applications.",
    },
    {
        id: 2,
        name: "EVA Resin",
        category: "Polymers",
        image: "/product/EVA.png",
        backgroundColor: "#0d2461",
        description:
            "Reliable EVA polymer solutions for multiple industries.",
    },
    {
        id: 3,
        name: "Polyethylene",
        category: "Polymers",
        image: "/product/PE.png",
        backgroundColor: "#0d2461",
        description:
            "Premium polyethylene material for flexible applications.",
    },
    {
        id: 4,
        name: "Polypropylene",
        category: "Polymers",
        image: "/product/PP.png",
        backgroundColor: "#0d2461",
        description:
            "Quality polypropylene materials for multiple applications.",
    },
    {
        id: 5,
        name: "Polystyrene",
        category: "Polymers",
        image: "/product/PS.png",
        backgroundColor: "#0d2461",
        description:
            "High-performance polystyrene for industrial applications.",
    },
    {
        id: 6,
        name: "Polyolefin Elastomer",
        category: "Polymers",
        image: "/product/POE.png",
        backgroundColor: "#0d2461",
        description:
            "Reliable Polyolefin Elastomer solutions for packaging and manufacturing.",
    },
];

function ProductCard({ product }) {
    return (
        <div
            className="
                group
                relative
                w-full
                overflow-hidden
                rounded-[22px]
                bg-white
            "
        >
            {/* PRODUCT IMAGE */}
            <div className="relative h-[350px] w-full overflow-hidden">
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
                        object-center
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                    "
                />
            </div>

            {/* CONTENT */}
            <div
                className="
                    relative
                    px-3
                    py-3
                    transition-colors
                    duration-500
                "
                style={{
                    backgroundColor:
                        product.backgroundColor || "#C7D9EA",
                }}
            >
                {/* TITLE */}
                <h3
                    className="
                        text-2xl
                        font-medium
                        leading-[1]
                        tracking-[0.035em]
                        text-white
                    "
                >
                    {product.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                    className="
                        mt-4
                        max-w-[290px]
                        text-sm
                        leading-[1.45]
                        text-white
                    "
                >
                    {product.description}
                </p>

                {/* BOTTOM ACTION */}
                <div
                    className="
                        mt-2
                        flex
                        items-center
                        justify-between
                    "
                >
                    <span
                        className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.28em]
                            text-white
                        "
                    >
                        Explore Product
                    </span>

                    <button
                        className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                            transition-all
                            duration-300
                            group-hover:scale-110
                        "
                        aria-label={`Explore ${product.name}`}
                    >
                        <ArrowRight
                            size={18}
                            strokeWidth={1.5}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </button>
                </div>
            </div>
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
                lg:px-15
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
                        text-sm
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
                        tracking-[0.025em]
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
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className=""
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
