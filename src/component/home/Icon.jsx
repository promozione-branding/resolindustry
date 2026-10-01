"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const icons = [
    {
        image: "/2/resol_transparent_section_1.png",
        title: "Long-Term Partnership",
    },
    {
        image: "/2/resol_transparent_section_2.png",
        title: "Global Sourcing",
    },
    {
        image: "/2/resol_transparent_section_3.png",
        title: "Assured Quality",
    },
    {
        image: "/2/resol_transparent_section_4.png",
        title: "Wide Product Range",
    },
    {
        image: "/2/resol_transparent_section_5.png",
        title: "Competitive Pricing",
    },
    {
        image: "/2/resol_transparent_section_6.png",
        title: "Reliable Supply",
    },
    {
        image: "/2/resol_transparent_section_7.png",
        title: "Industry Expertise",
    },
    {
        image: "/2/resol_transparent_section_8.png",
        title: "Trusted Partnership",
    },
];

export default function Icon() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-6 md:py-8 lg:py-10">
            {/* Background glow */}
            {/* <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4a445]/10 blur-[120px]" />

                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#0b1c52]/70 to-transparent" />
            </div> */}

            {/* Heading */}
            <div className="relative z-10 px-5 text-center">
                <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#f2d98a] md:text-xs">
                    <span className="h-px w-7 bg-[#d4a445] md:w-9" />

                    <span>Our Promise</span>

                    <span className="h-px w-7 bg-[#d4a445] md:w-9" />
                </div>

                <h2 className="mt-1 text-3xl font-semibold leading-tight text-[#0b1c52] md:text-4xl lg:text-5xl">
                    Why businesses{" "}
                    <p className="bg-gradient-to-r -mt-3 from-[#0b1c52] via-[#0b1c52] to-[#0b1c52] bg-clip-text font-medium text-transparent">
                        partner with us
                    </p>
                </h2>
            </div>

            {/* Swiper */}
            <div className="relative z-10 mx-auto w-full px-2 md:px-4">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 25,
                        },
                    }}
                    className="w-full"
                >
                    {icons.map((icon, index) => (
                        <SwiperSlide key={`${icon.image}-${index}`}>
                            <div className="flex min-h-[250px] flex-col items-center justify-center py-5">
                                {/* Circle */}
                                <div
                                    className="
                                        group
                                        relative
                                        flex
                                        h-32
                                        w-32
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#f2d98a]/60
                                        bg-white
                                        transition-all
                                        duration-700
                                        hover:scale-105
                                        hover:border-[#f2d98a]/60
                                        md:h-36
                                        md:w-36
                                        lg:h-44
                                        lg:w-44
                                    "
                                >
                                    {/* Gold outer ring */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -inset-2
                                            rounded-full
                                            border
                                            border-[#d4a445]/40
                                            transition-all
                                            duration-700
                                            group-hover:border-[#f2d98a]/70
                                            group-hover:rotate-180
                                        "
                                    />

                                    {/* Inner glow */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-2
                                            rounded-full
                                            bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]
                                        "
                                    />

                                    {/* Icon */}
                                    <div
                                        className="
                                            relative
                                            z-10
                                            flex
                                            h-full
                                            w-full
                                            items-center
                                            justify-center
                                            rounded-full
                                            transition-transform
                                            duration-700
                                            group-hover:-translate-y-1
                                        "
                                    >
                                        <Image
                                            src={icon.image}
                                            alt={icon.title}
                                            width={150}
                                            height={150}
                                            sizes="150px"
                                            className="
                                                h-20
                                                w-20
                                                object-contain
                                                md:h-24
                                                md:w-24
                                                lg:h-32
                                                lg:w-32
                                            "
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                {/* <div className="mt-5 text-center">
                                    <h3 className="text-sm font-bold leading-tight text-white md:text-base">
                                        {icon.title}
                                    </h3>

                                    <div className="mx-auto mt-2 h-[2px] w-8 bg-gradient-to-r from-[#f2d98a] to-[#b8862b] transition-all duration-500 group-hover:w-16" />
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}