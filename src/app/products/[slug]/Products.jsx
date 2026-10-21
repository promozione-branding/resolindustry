"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Factory,
    ShieldCheck,
    Settings2,
    Zap,
    FlaskConical,
    Package,
    CheckCircle2,
    Scale,
    ChevronRight,
    ChevronLeft,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaIndustry } from "react-icons/fa";
import Form from "@/component/home/Form";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const sectionMotion = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.12 },
    variants: fadeUp,
};

/*
 * Layout strategy for the banner:
 *  - < lg  : cards are stacked in normal flow (full width, max 480px) below an image area
 *  - >= lg : cards are absolutely positioned over the banner image (original design)
 * The connector "pointer" lines only make sense on desktop, so they are hidden below lg.
 */
const slotBase = "relative z-10 mx-auto w-full max-w-[480px] lg:absolute lg:mx-0 lg:max-w-none lg:w-[250px] xl:w-[310px]";

const glassCard =
    "relative overflow-visible rounded-[22px] border border-white/30 bg-white/80 p-4 shadow-[0_8px_40px_rgba(13,36,97,0.14)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-[#0d2461]/5 lg:bg-white/15 lg:border-white/20";

const CustomBannerCard = ({ card, side = "right", icon: Icon = Settings2 }) => (
    <div className={glassCard}>
        {/* Pointer (desktop only) */}
        <div
            className={`absolute top-1/2 hidden -translate-y-1/2 items-center lg:flex ${
                side === "right" ? "-left-16" : "-right-16"
            }`}
        >
            {side === "left" && <div className="h-[2px] w-14 bg-[#0d2461]/50" />}
            <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
            {side === "right" && <div className="h-[2px] w-14 bg-[#0d2461]/50" />}
        </div>

        <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/25">
                <Icon size={20} strokeWidth={1.5} className="text-[#0d2461]" />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0d2461]">
                {card.title}
            </span>
        </div>

        <div className="mt-4 space-y-2">
            {card.rows.map((row) => {
                const isOrigin = row.label?.toLowerCase().includes("origin");

                return (
                    <React.Fragment key={row.label}>
                        <div
                            className={`flex items-start justify-between gap-3 ${
                                isOrigin
                                    ? "-mx-2 rounded-lg border-l-4 border-[#c99618] bg-[#c99618]/20 px-2 py-1.5"
                                    : ""
                            }`}
                        >
                            <span
                                className={`shrink-0 text-xs ${
                                    isOrigin
                                        ? "font-bold uppercase tracking-wider text-[#0d2461]"
                                        : "text-[#0d2461]/85"
                                }`}
                            >
                                {row.label}
                            </span>
                            <span
                                className={`text-right text-xs font-semibold ${
                                    isOrigin ? "font-bold text-[#0d2461]" : "text-[#0d2461]"
                                }`}
                            >
                                {row.value}
                            </span>
                        </div>
                        <div className="h-px bg-[#0d2461]/15" />
                    </React.Fragment>
                );
            })}
        </div>
    </div>
);

const ChemicalBanner = ({ properties, specifications, bannerImage, product }) => {
    const custom = product.bannerCards; // only Calcium Carbonate has this

    return (
        <section
            className="relative mt-12 flex flex-col gap-4 overflow-hidden bg-cover bg-top px-4 pb-8 pt-[240px] sm:pt-[340px] md:px-8 lg:block lg:min-h-[800px] lg:p-0"
            style={{ backgroundImage: `url("${bannerImage}")` }}
        >
            {/* Top Left: name + description */}
            <div className={`${slotBase} lg:top-[30%] lg:left-8 xl:left-15`}>
                <div className={glassCard}>
                    <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                        <div className="h-[2px] w-14 bg-[#0d2461]/50" />
                        <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/25">
                            <Package size={20} strokeWidth={1.5} className="text-[#0d2461]" />
                        </div>
                        <h3 className="text-lg font-bold uppercase tracking-tight text-[#0d2461] lg:-mt-1">
                            {product.name}
                        </h3>
                    </div>

                    <p className="mt-3 text-[13px] text-[#0d2461]/90">{product.shortDescription}</p>

                    <div className="mt-3 flex items-center gap-2 border-t border-[#0d2461]/15 pt-4">
                        <CheckCircle2 size={16} className="shrink-0 text-[#0d2461]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0d2461]/80">
                            {product.bannerTag || "Lightweight Thermoplastic"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Top Right: Specifications (or custom card 1) */}
            {custom ? (
                <div className={`${slotBase} lg:top-[18%] lg:right-8 xl:right-15`}>
                    <CustomBannerCard card={custom[0]} side="right" icon={Zap} />
                </div>
            ) : (
                specifications.length > 0 && (
                    <div className={`${slotBase} lg:top-[30%] lg:right-8 xl:right-15`}>
                        <div className={glassCard}>
                            <div className="absolute -left-23 top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                                <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
                                <div className="h-[2px] w-20 bg-[#0d2461]/50" />
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/25">
                                    <Zap size={20} strokeWidth={1.5} className="text-[#0d2461]" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                    Specifications
                                </span>
                            </div>

                            <div className="mt-5 space-y-3">
                                {specifications.map((i) => (
                                    <React.Fragment key={i.Specification}>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <Factory size={16} className="shrink-0 text-[#0d2461]" />
                                                <span className="text-xs text-[#0d2461]/85">{i.Specification}</span>
                                            </div>
                                            <span className="text-right text-xs font-semibold text-[#0d2461]">{i.Details}</span>
                                        </div>
                                        <div className="h-px bg-[#0d2461]/15" />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            )}

            {/* Bottom Left: Key Properties (or custom card 2) */}
            {custom ? (
                <div className={`${slotBase} lg:bottom-10 lg:left-8 xl:left-15`}>
                    <CustomBannerCard card={custom[1]} side="left" icon={Settings2} />
                </div>
            ) : (
                properties.length > 0 && (
                    <div className={`${slotBase} lg:bottom-10 lg:left-8 xl:left-15`}>
                        <div className={glassCard}>
                            <div className="absolute -right-23 top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                                <div className="h-[2px] w-20 bg-[#0d2461]/50" />
                                <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/25">
                                    <Settings2 size={20} strokeWidth={1.5} className="text-[#0d2461]" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                    Key Properties
                                </span>
                            </div>

                            <div className="mt-5 space-y-3">
                                {properties.map((i) => (
                                    <React.Fragment key={i.name}>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <ShieldCheck size={16} className="shrink-0 text-[#0d2461]" />
                                                <span className="text-xs text-[#0d2461]/85">{i.name}</span>
                                            </div>
                                            <span className="text-right text-xs font-semibold text-[#0d2461]">{i.value}</span>
                                        </div>
                                        <div className="h-px bg-[#0d2461]/15" />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            )}

            {/* Bottom Right: Packaging (or custom card 3) */}
            {custom ? (
                <div className={`${slotBase} lg:bottom-10 lg:right-8 xl:right-15`}>
                    <CustomBannerCard card={custom[2]} side="right" icon={Scale} />
                </div>
            ) : (
                <div className={`${slotBase} lg:bottom-10 lg:right-8 xl:right-15`}>
                    <div className={glassCard}>
                        <div className="absolute -left-16 top-1/2 hidden -translate-y-1/2 items-center lg:flex">
                            <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
                            <div className="h-[2px] w-14 bg-[#0d2461]/50" />
                        </div>

                        <div className="flex items-center justify-between gap-3 lg:justify-end">
                            <div className="text-left lg:text-right">
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                    Packaging Size
                                </span>
                                <h3 className="text-2xl font-bold text-[#0d2461]">
                                    {product.packagingSize || "25 KG"}
                                </h3>
                            </div>
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/25">
                                <Scale size={20} strokeWidth={1.5} className="text-[#0d2461]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default function ProductPage({ product }) {
    const properties = product.keyProperties || [];
    const specifications = product.productSpecifications || [];
    const overview = product.productOverview || {};
    const whyChoose = product.whyChoose || {};
    const applications = product.applications || {};
    const bannerImage = product.bannerImg || product.image;

    return (
        <main className="min-h-screen overflow-x-hidden text-[#071a3d]" style={{ backgroundColor: "#ffffff" }}>
            <ChemicalBanner product={product} properties={properties} specifications={specifications} bannerImage={bannerImage} />

            {whyChoose.pointers?.length > 0 && (
                <section className="relative bg-[#f7f8fa] px-4 py-10 sm:px-6 md:px-10 lg:px-16 lg:py-15">
                    <div>
                        <motion.div {...sectionMotion} className="mb-8 md:mb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                                Why Resol Industries Limited
                            </p>

                            <h2 className="mt-2 text-[clamp(1.75rem,6vw,3rem)] font-light leading-[1.05] tracking-[0.04em] md:tracking-[0.06em]">
                                {whyChoose.title ||
                                    `Why Choose Our ${product.name}?`}
                            </h2>
                        </motion.div>

                        <motion.div {...sectionMotion}
                            className="grid gap-px overflow-hidden rounded-[24px] bg-[#071a3d]/10 md:rounded-[35px] md:grid-cols-2"
                        >

                            {whyChoose.pointers.map((feature, index) => {
                                const Icon = feature.icon || FaIndustry;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        variants={fadeUp}
                                        className="group bg-white p-5 transition duration-500 hover:bg-[#071a3d] hover:text-white sm:p-6 md:p-8"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5bd24]/40 bg-[#f5bd24]/10 transition-all group-hover:bg-[#f5bd24] md:h-14 md:w-14">
                                                <Icon
                                                    size={23}
                                                    strokeWidth={1.5}
                                                    className="text-[#071a3d] transition group-hover:text-[#071a3d]"
                                                />
                                            </div>

                                            <span className="text-sm text-[#071a3d]/20 group-hover:text-white/25">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 text-lg font-semibold md:mt-5 md:text-xl">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 max-w-sm text-sm leading-6 text-[#071a3d]/55 transition group-hover:text-white/60 md:text-base md:leading-7">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
            )}

            <section className="bg-[#071a3d] px-4 py-10 text-white md:px-10 lg:px-12 lg:py-15">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-8 md:gap-14 lg:grid-cols-2">
                        <motion.div
                            {...sectionMotion}
                            className="relative overflow-hidden rounded-[0_30px_0_30px] md:rounded-[0_45px_0_45px]"
                        >

                            <video
                                src="/video/resol_3.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="h-[300px] w-full object-cover sm:h-[400px] md:h-[600px]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/85 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">

                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f5bd24]">
                                    Advanced Process
                                </p>

                                <p className="mt-2 text-xl font-light md:text-2xl">
                                    Efficient.
                                    <br />
                                    <span className="font-semibold">
                                        Reliable. Scalable.
                                    </span>
                                </p>

                            </div>
                        </motion.div>

                        <motion.div {...sectionMotion}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5bd24]">
                                Product Overview
                            </p>

                            <h2 className="mt-2 text-3xl font-light leading-[1.05] tracking-[0.04em] md:text-5xl md:leading-[0.98] lg:text-6xl lg:leading-[0.93] lg:tracking-[0.06em]">
                                {overview.title || `Discover ${product.name}`}
                            </h2>

                            {overview.detail && (
                                <p className="mt-5 text-sm leading-7 text-white/60 md:text-base">{overview.detail}</p>
                            )}

                            {overview.overview && (
                                <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">{overview.overview}</p>
                            )}

                            {overview.pointer?.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-2 md:mt-9">
                                    {overview.pointer.map(
                                        (point, index) => (
                                            <span
                                                key={`${point}-${index}`}
                                                className="rounded-full border border-[#071a3d]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#071a3d]/80 md:px-4 md:py-2"
                                            >
                                                {point}
                                            </span>
                                        )
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {applications.pointers?.length > 0 && (
                <section className="bg-white px-4 py-10 text-[#071a3d] sm:px-6 md:px-10 lg:px-16 lg:py-15">
                    <div className="mx-auto max-w-[1250px]">

                        <motion.div {...sectionMotion}>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                                Applications
                            </p>

                            <h2 className="mt-2 text-[clamp(1.75rem,6vw,3rem)] font-light leading-[1.05] tracking-[0.04em] md:tracking-[0.06em]">
                                {applications.title || `${product.name} Applications`}
                            </h2>
                        </motion.div>

                        <div className="relative mt-8 md:mt-10">

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={16}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: ".application-prev",
                                    nextEl: ".application-next",
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                className="applications-swiper"
                            >
                                {applications.pointers.map((item, idx) => {
                                    const Icon = item.icon || FlaskConical;

                                    return (
                                        <SwiperSlide key={item.title} className="!h-auto">
                                            <motion.div {...sectionMotion}
                                                className="group relative h-full min-h-[220px] overflow-hidden rounded-[22px] border border-[#071a3d]/10 bg-[#f7f8fa] p-5 transition-all duration-500 hover:bg-[#071a3d] sm:min-h-[260px] md:min-h-[280px] md:rounded-[25px] md:p-7"
                                            >
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5bd24]/15 transition-all duration-500 group-hover:bg-[#f5bd24] md:h-14 md:w-14">
                                                    <Icon
                                                        size={26}
                                                        strokeWidth={1.4}
                                                        className="text-[#f5bd24] transition-colors duration-500 group-hover:text-[#071a3d]"
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <h3 className="text-lg font-semibold text-[#071a3d] transition-colors duration-500 group-hover:text-white md:text-xl">
                                                        {item.name}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-[#071a3d]/60 transition-colors duration-500 group-hover:text-white/65">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <span className="absolute right-5 top-5 text-[11px] font-bold tracking-[0.2em] text-[#071a3d]/20 transition-colors group-hover:text-white/20 md:right-6 md:top-6">
                                                    {idx + 1}
                                                </span>
                                            </motion.div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                            <div className="mt-5 flex justify-center gap-3 sm:justify-end">
                                <button
                                    type="button"
                                    aria-label="Previous"
                                    className="application-prev flex h-11 w-11 items-center justify-center rounded-full border border-[#071a3d]/15 text-[#071a3d] transition-all duration-300 hover:bg-[#071a3d] hover:text-white md:h-12 md:w-12"
                                >
                                    <ChevronLeft size={20} strokeWidth={1.5} />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Next"
                                    className="application-next flex h-11 w-11 items-center justify-center rounded-full bg-[#071a3d] text-white transition-all duration-300 hover:bg-[#f5bd24] hover:text-[#071a3d] md:h-12 md:w-12"
                                >
                                    <ChevronRight size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <Form />
        </main>
    );
}