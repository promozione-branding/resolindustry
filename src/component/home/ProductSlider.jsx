"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import { products } from "../../../data";

function ProductCard({ product }) {
    return (
        <div className="group relative w-full overflow-hidden rounded-[22px] bg-white">
            {/* PRODUCT IMAGE */}
            <Link href={product.href} className="block">
                <div className="relative h-[280px] w-full overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>
            </Link>

            {/* CONTENT */}
            <div
                className="relative px-4 py-3 transition-colors duration-500"
                style={{
                    backgroundColor: product.backgroundColor || "#0d2461",
                }}
            >
                <h3 className="text-2xl font-medium leading-tight tracking-[0.035em] text-white">
                    {product.name}
                </h3>

                {/* BOTTOM ACTION */}
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white">
                        Explore Product
                    </span>

                    <Link
                        href={product.href}
                        aria-label={`Explore ${product.name}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110"
                    >
                        <ArrowRight
                            size={18}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ProductSlider() {
    return (
        <section className="mt-4 w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-15 lg:pb-16 lg:pt-0">

            {/* SECTION HEADER */}
            <div className="mb-10 flex flex-col items-center justify-center text-center sm:mb-12">
                <span className="z-10 inline-flex rounded-md bg-[#0d2461] px-4 py-2 text-sm uppercase tracking-[0.22em] text-white">
                    OUR PRODUCTS
                </span>

                <h2 className="mt-5 max-w-4xl text-[36px] font-medium leading-[0.95] tracking-[0.025em] text-[#0d2461] sm:text-[46px] md:text-[56px] lg:text-[68px]">
                    Quality polymers.
                    <span className="block">
                        Reliable supply.
                    </span>
                </h2>
            </div>

            {/* AUTOPLAY PRODUCT SLIDER */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={products.length > 4}
                speed={900}
                autoplay={{
                    delay: 2000,
                    
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
                className="!overflow-hidden"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="h-auto">
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}