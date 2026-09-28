"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const icons = [
    {
        image: "/2/resol_transparent_section_1.png",
        title: "Icon One",
    },
    {
        image: "/2/resol_transparent_section_2.png",
        title: "Icon Two",
    },
    {
        image: "/2/resol_transparent_section_3.png",
        title: "Icon Three",
    },
    {
        image: "/2/resol_transparent_section_4.png",
        title: "Icon Four",
    },
    {
        image: "/2/resol_transparent_section_5.png",
        title: "Icon Five",
    },
    {
        image: "/2/resol_transparent_section_6.png",
        title: "Icon Six",
    },
    {
        image: "/2/resol_transparent_section_7.png",
        title: "Icon Seven",
    },
    {
        image: "/2/resol_transparent_section_8.png",
        title: "Icon Eight",
    },
];

export default function Icon() {
    return (
        <section className="relative w-full overflow-hidden py-20 md:py-24 lg:py-2 bg-white">
            {/* =========================================
                BACKGROUND IMAGE
            ========================================= */}

            {/* <div className="absolute inset-0 z-0">
                <Image
                    src="/polymer-1-2048x1154.jpg.jpeg"
                    alt="Resol Industries Polymer Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div> */}

            {/* =========================================
                DARK OVERLAY
            ========================================= */}

            <div className="absolute inset-0 z-[1] bg-white/55" />

            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="relative z-[2] mx-auto w-full  md:px-2">
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
                            <div className="flex min-h-[220px] flex-col items-center justify-center">
                                {/* =================================
                                    ICON
                                ================================= */}

                                <div
                                    className="
                                        relative
                                        flex
                                        h-28
                                        w-28
                                        items-start
                                        justify-center
                                       bg-white border border-[#0d2461]
                                       rounded-full
                                        md:h-32
                                        md:w-32
                                        lg:h-44
                                        lg:w-44
                                    "
                                >
                                    <Image
                                        src={icon.image}
                                        alt={icon.title}
                                        width={120}
                                        height={120}
                                        sizes="120px"
                                        className="
                                            h-20
                                            w-20
                                            object-center
                                            md:h-24
                                            md:w-24
                                            lg:h-40
                                            lg:w-40
                                        "
                                    />
                                </div>

                                {/* =================================
                                    TITLE
                                ================================= */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
