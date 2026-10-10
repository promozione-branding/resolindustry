"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Factory,
    Gauge,
    Layers3,
    ShieldCheck,
    Sparkles,
    Settings2,
    Ruler,
    Zap,
    Droplets,
    Wind,
    FlaskConical,
    CircleCheck, Package,
    CheckCircle2,
    Workflow,
    Thermometer,
    Flame,
    Boxes,
    Car,
    Shirt,
    Home,
    Scale,
    Dumbbell,
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

const ChemicalBanner = ({ properties, specifications, bannerImage, product }) => {
    return (
        <section
            className="relative min-h-[800px] overflow-hidden bg-cover bg-top"
            style={{
                backgroundImage: `url("${bannerImage}")`,
            }}
        >
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}

            {/* Top Left Pointer */}
            <div className="absolute top-[30%] left-8 xl:left-15 z-10 w-[250px] xl:w-[310px]">
                <div
                    className="
        relative
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-4
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                >
                    {/* Pointer */}
                    <div
                        className="
                            absolute
                            -right-16
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                    >
                        <div className="h-[2px] w-14 bg-[#0d2461]/50" />

                        <div
                            className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                        />
                    </div>

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                        >
                            <Package
                                size={20}
                                strokeWidth={1.5}
                                className="text-[#0d2461]"
                            />
                        </div>

                        <div>
                            <span
                                className="
                                -mt-1
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#0d2461]
                                "
                            >
                                Material 01
                            </span>

                            <h3
                                className="
                                -mt-1
                                    text-lg
                                    font-bold
                                    uppercase
                                    tracking-tight
                                    text-[#0d2461]
                                "
                            >
                                {product.name}
                            </h3>
                        </div>

                    </div>

                    <p
                        className="
                            mt-3
                            text-[13px]
                            text-[#0d2461]/90
                        "
                    >
                        {product.shortDescription}
                    </p>

                    <div
                        className="
                            mt-3
                            flex
                            items-center
                            gap-2
                            border-t
                            border-[#0d2461]/15
                            pt-4
                        "
                    >
                        <CheckCircle2
                            size={16}
                            className="text-[#0d2461]"
                        />

                        <span
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-[#0d2461]/80
                            "
                        >
                            Lightweight Thermoplastic
                        </span>
                    </div>
                </div>
            </div>

            {/* Top Right Pointer */}
            <div className="absolute top-[30%] right-8 xl:right-15 z-10 w-[250px] xl:w-[310px]">
                <div
                    className="
        relative
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-4
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                >
                    <div
                        className="
                            absolute
                            -left-23
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                    >
                        <div
                            className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                        />
                        <div className="h-[2px] w-20 bg-[#0d2461]/50" />
                    </div>

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                        >
                            <Zap
                                size={20}
                                strokeWidth={1.5}
                                className="text-[#0d2461]"
                            />
                        </div>

                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#0d2461]
                            "
                        >
                            Specifications
                        </span>

                    </div>

                    <div className="mt-5 space-y-3">
                        {specifications.map((i) => (
                            <>
                                <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">

                                        <Factory
                                            size={16}
                                            className="text-[#0d2461]"
                                        />

                                        <span className="text-xs text-[#0d2461]/85">
                                            {i.Specification}
                                        </span>

                                    </div>

                                    <span className="text-xs font-semibold text-[#0d2461]">
                                        {i.Details}
                                    </span>

                                </div>

                                <div className="h-px bg-[#0d2461]/15" />
                            </>
                        ))}

                    </div>
                </div>
            </div>

            {/* Bottom Left Pointer */}
            <div className="absolute bottom-10 left-8 xl:left-15 left-10 z-10 w-[250px] xl:w-[310px]">
                <div
                    className="
        relative
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-4
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                >
                    {/* Pointer */}
                    <div
                        className="
                            absolute
                            -right-23
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                    >
                        <div className="h-[2px] w-20 bg-[#0d2461]/50" />

                        <div
                            className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                        />
                    </div>

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                        >
                            <Settings2
                                size={20}
                                strokeWidth={1.5}
                                className="text-[#0d2461]"
                            />
                        </div>

                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#0d2461]
                            "
                        >
                            Key Properties
                        </span>

                    </div>

                    <div className="mt-5 space-y-3">
                        {properties.map((i) => (
                            <>
                                <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">

                                        <ShieldCheck
                                            size={16}
                                            className="text-[#0d2461]"
                                        />

                                        <span className="text-xs text-[#0d2461]/85">
                                            {i.name}
                                        </span>

                                    </div>

                                    <span className="text-xs font-semibold text-[#0d2461]">
                                        {i.value}
                                    </span>

                                </div>

                                <div className="h-px bg-[#0d2461]/15" />
                            </>
                        ))}

                    </div>
                </div>

            </div>

            {/* Bottom Right Pointer */}
            <div className="absolute bottom-10 right-8 xl:right-15 z-10 w-[250px] xl:w-[310px]">
                <div
                    className="
        relative
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-4
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                >
                    {/* Pointer */}
                    <div
                        className="
                            absolute
                            -left-16
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                    >
                        <div
                            className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                        />

                        <div className="h-[2px] w-14 bg-[#0d2461]/50" />
                    </div>

                    <div className="flex items-center justify-end gap-3">

                        <div className="text-right">

                            <span
                                className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#0d2461]
                                "
                            >
                                Product Grade
                            </span>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#0d2461]
                                "
                            >
                                25 KG
                            </h3>

                        </div>

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                        >
                            <Scale
                                size={20}
                                strokeWidth={1.5}
                                className="text-[#0d2461]"
                            />
                        </div>

                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">

                        <div
                            className="
                                rounded-xl
                                border
                                border-[#0d2461]/15
                                bg-transparent
                                p-3
                            "
                        >
                            <div className="flex items-center gap-2">

                                <Dumbbell
                                    size={16}
                                    className="text-[#0d2461]"
                                />

                                <span
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-[#0d2461]/70
                                    "
                                >
                                    Strength
                                </span>

                            </div>

                            <span
                                className="
                                    mt-2
                                    block
                                    text-base
                                    font-bold
                                    text-[#0d2461]
                                "
                            >
                                High
                            </span>

                        </div>

                        <div
                            className="
                                rounded-xl
                                border
                                border-[#0d2461]/15
                                bg-transparent
                                p-3
                            "
                        >
                            <div className="flex items-center gap-2">

                                <Gauge
                                    size={16}
                                    className="text-[#0d2461]"
                                />

                                <span
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-[#0d2461]/70
                                    "
                                >
                                    Endurance
                                </span>

                            </div>

                            <span
                                className="
                                    mt-2
                                    block
                                    text-sm
                                    font-bold
                                    text-[#0d2461]
                                "
                            >
                                Thermal
                            </span>

                        </div>

                    </div>
                </div>
            </div>
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
        <main className="min-h-screen overflow-hidden text-[#071a3d]" style={{ backgroundColor: "#ffffff" }}>
            <ChemicalBanner product={product} properties={properties} specifications={specifications} bannerImage={bannerImage} />

            {whyChoose.pointers?.length > 0 && (
                <section className="relative bg-[#f7f8fa] px-6 py-10 md:px-10 lg:px-16 lg:py-15">
                    <div className="">
                        <motion.div {...sectionMotion} className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                                Why Resol Industry
                            </p>

                            <h2 className="mt-2 text-[clamp(2.4rem,5vw,3rem)] font-light leading-[0.95] tracking-[0.06em]">
                                {whyChoose.title ||
                                    `Why Choose Our ${product.name}?`}
                            </h2>
                        </motion.div>

                        <motion.div {...sectionMotion}
                            className="grid gap-px overflow-hidden rounded-[35px] bg-[#071a3d]/10 md:grid-cols-2"
                        >

                            {whyChoose.pointers.map((feature, index) => {
                                const Icon = feature.icon || FaIndustry;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        variants={fadeUp}
                                        className="group bg-white p-6 transition duration-500 hover:bg-[#071a3d] hover:text-white md:p-8"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f5bd24]/40 bg-[#f5bd24]/10 transition-all group-hover:bg-[#f5bd24]">
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

                                        <h3 className="mt-5 text-xl font-semibold track">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 max-w-sm text-base leading-7 text-[#071a3d]/55 transition group-hover:text-white/60">
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
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <motion.div
                            {...sectionMotion}
                            className="relative overflow-hidden rounded-[0_45px_0_45px]"
                        >

                            <video
                                src="/video/13753874_1280_720_25fps.mp4"
                                alt="Hydrogen process"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="h-full w-full object-cover md:h-[600px]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/85 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8">

                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f5bd24]">
                                    Advanced Process
                                </p>

                                <p className="mt-2 text-2xl font-light">
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

                            <h2 className="mt-2 text-3xl md:text-6xl font-light leading-[0.93] tracking-[0.06em]">
                                {overview.title || `Discover ${product.name}`}
                            </h2>

                            {overview.detail && (
                                <p className="mt-5 text-sm leading-7 text-white/60 md:text-base">{overview.detail}</p>
                            )}

                            {overview.overview && (
                                <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">{overview.overview}</p>
                            )}

                            {overview.pointer?.length > 0 && (
                                <div className="mt-9 flex flex-wrap gap-2">
                                    {overview.pointer.map(
                                        (point, index) => (
                                            <span
                                                key={`${point}-${index}`}
                                                className="rounded-full border border-[#071a3d]/10 bg-white px-4 py-2 text-xs font-medium text-[#071a3d]/80"
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
                <section className="bg-white px-6 py-10 text-[#071a3d] md:px-10 lg:px-16 lg:py-15">
                    <div className="mx-auto max-w-[1250px]">

                        <motion.div  {...sectionMotion}
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                                Applications
                            </p>

                            <h2 className="mt-2 text-[clamp(2.7rem,5vw,3rem)] font-light leading-[0.93] tracking-[0.06em]">
                                {applications.title || `${product.name} Applications`}
                            </h2>
                        </motion.div>

                        <div className="relative mt-10">

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
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
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                }}
                                className="applications-swiper"
                            >
                                {applications.pointers.map((item, idx) => {
                                    const Icon = item.icon || FlaskConical;

                                    return (
                                        <SwiperSlide key={item.title}>
                                            <motion.div  {...sectionMotion}
                                                className="group relative min-h-[280px] overflow-hidden rounded-[25px] border border-[#071a3d]/10 bg-[#f7f8fa] p-7 transition-all duration-500 hover:bg-[#071a3d]"
                                            >
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5bd24]/15 transition-all duration-500 group-hover:bg-[#f5bd24]">
                                                    <Icon
                                                        size={28}
                                                        strokeWidth={1.4}
                                                        className="text-[#f5bd24] transition-colors duration-500 group-hover:text-[#071a3d]"
                                                    />
                                                </div>

                                                <div className="mt-4">
                                                    <h3 className="text-xl font-semibold text-[#071a3d] transition-colors duration-500 group-hover:text-white">
                                                        {item.name}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-[#071a3d]/60 transition-colors duration-500 group-hover:text-white/65">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <span className="absolute right-6 top-6 text-[11px] font-bold tracking-[0.2em] text-[#071a3d]/20 transition-colors group-hover:text-white/20">
                                                    {idx + 1}
                                                </span>
                                            </motion.div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                            <div className="mt-5 flex justify-end gap-3">
                                <button
                                    type="button"
                                    className="application-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#071a3d]/15 text-[#071a3d] transition-all duration-300 hover:bg-[#071a3d] hover:text-white"
                                >
                                    <ChevronLeft size={20} strokeWidth={1.5} />
                                </button>

                                <button
                                    type="button"
                                    className="application-next flex h-12 w-12 items-center justify-center rounded-full bg-[#071a3d] text-white transition-all duration-300 hover:bg-[#f5bd24] hover:text-[#071a3d]"
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