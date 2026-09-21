"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const clients = [
    {
        name: "Astral",
        logo: "/client/3.webp",
    },
    {
        name: "Cosmo Films",
        logo: "/client/1.webp"
    },
    {
        name: "Prince Pipes & Fittings",
        logo: "/client/5.webp"
    },
    {
        name: "Nilkamal",
        logo: "/client/6.webp"
    },
    {
        name: "UFlex",
        logo: "/client/4.webp"
    },
    {
        name: "Finolex Industries",
        logo: "/client/2.webp"
    },
];

export default function Client() {
    return (
        <section className="overflow-hidden bg-[#f4f3ef] py-10 md:py-12">
            <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-15">
                <div className="mx-auto mb-5 max-w-[760px] text-center md:mb-8">

                    <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
                        Our Clients
                    </span>

                    <h2 className="text-[40px] font-medium leading-[0.95] tracking-[-0.045em] text-[#0d2461] sm:text-5xl md:text-6xl lg:text-[68px]">
                        Trusted by
                        <span className="mt-1 block text-[#0d2461]">
                            Leading Brands.
                        </span>
                    </h2>
                </div>

                {/* ================= DESKTOP GRID ================= */}
                <div className="hidden gap-4 md:grid md:grid-cols-3 xl:grid-cols-6">
                    {clients.map((partner) => (
                        <PartnerCard
                            key={partner.name}
                            partner={partner}
                        />
                    ))}
                </div>

                {/* ================= MOBILE SWIPER ================= */}
                <div className="md:hidden">
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        spaceBetween={8}
                        slidesPerView={2}
                        freeMode={{
                            enabled: true,
                            sticky: false,
                        }}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={700}
                        loop={true}
                        grabCursor
                        className="!overflow-visible"
                    >
                        {clients.map((partner) => (
                            <SwiperSlide
                                key={partner.name}
                                className="!h-auto"
                            >
                                <PartnerCard partner={partner} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

function PartnerCard({ partner }) {
    return (
        <div
            className="
                group relative
                flex h-[240px]
                lg:h-[200px]
                flex-col
                overflow-hidden
                border border-[#deddd7]
                bg-white
                p-2
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#20201e]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]

                md:h-[270px]
                md:p-4
            "
        >
            {/* Logo */}
            <div className="flex flex-1 items-center justify-center py-6">
                <Image
                    width={100}
                    height={100}
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="
                        block
                       h-full w-full
                        w-auto
                        object-contain
                        transition-all
                        duration-500
                        group-hover:scale-105
                    "
                />
            </div>

            {/* Bottom */}
            <div className="border-t border-neutral-100 pt-2">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-medium tracking-tight text-[#181818] md:text-base">
                        {partner.name}
                    </h3>
                </div>
            </div>

            {/* Bottom Hover Line */}
            <span
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#181818]
                    transition-all
                    duration-500
                    group-hover:w-full
                "
            />
        </div>
    );
}