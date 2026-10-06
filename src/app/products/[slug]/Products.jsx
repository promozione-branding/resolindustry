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

const NAVY = "#071a3d";
const GOLD = "#f5bd24";
const DARK_NAVY = "#0b2447";
const LIGHT_BG = "#f7f8fa";

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -70 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 70 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.92,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const features = [
    {
        icon: ShieldCheck,
        title: "High Durability",
        text: "Engineered for long-lasting performance in demanding industrial environments.",
    },
    {
        icon: Gauge,
        title: "High Performance",
        text: "Consistent performance with optimized separation and operating efficiency.",
    },
    {
        icon: Settings2,
        title: "Easy Integration",
        text: "Designed for seamless integration into existing industrial systems.",
    },
    {
        icon: Ruler,
        title: "Precision Design",
        text: "Precision-engineered construction for reliable and repeatable results.",
    },
];

const specifications = [
    ["Product Type", "Hydrogen Separation Membrane"],
    ["Application", "Hydrogen Recovery & Purification"],
    ["Operating Mode", "Continuous"],
    ["Construction", "Advanced Membrane Technology"],
    ["Industry", "Energy / Chemical / Gas"],
    ["Installation", "Industrial Process Systems"],
];

const ChemicalBanner = () => {
    return (
        <section
            className="relative min-h-[700px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/product-banner/RESOL PVC Resin Industrial Hero Shot.png')",
            }}
        >
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}

            {/* Top Left Pointer */}
            <div className="absolute top-[30%] left-15 z-10 xl:w-[310px]">
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
                                PVC Resin
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
                        Polypropylene is a lightweight thermoplastic
                        known for excellent chemical resistance,
                        processability and a high melting point.
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
            <div className="absolute top-[30%] right-15 z-10 xl:w-[310px]">
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
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#0d2461]
                                "
                            >
                                Applications
                            </span>

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
                            <Boxes
                                size={20}
                                strokeWidth={1.5}
                                className="text-[#0d2461]"
                            />
                        </div>

                    </div>

                    <div className="mt-2 flex flex-wrap justify-end gap-2">

                        {[
                            {
                                name: "Automotive",
                                icon: Car,
                            },
                            {
                                name: "Packaging",
                                icon: Package,
                            },
                            {
                                name: "Textiles",
                                icon: Shirt,
                            },
                            {
                                name: "Household",
                                icon: Home,
                            },
                        ].map(({ name, icon: Icon }) => (
                            <span
                                key={name}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-[#0d2461]/20
                                    bg-transparent
                                    px-2
                                    py-2
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-[#0d2461]
                                "
                            >
                                <Icon
                                    size={16}
                                    strokeWidth={1.5}
                                    className="text-[#0d2461]"
                                />

                                {name}
                            </span>
                        ))}

                    </div>
                </div>
            </div>

            {/* Bottom Left Pointer */}
            <div className="absolute bottom-10 left-15 left-10 z-10 xl:w-[310px]">
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

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex items-center gap-2">

                                <ShieldCheck
                                    size={16}
                                    className="text-[#0d2461]"
                                />

                                <span className="text-xs text-[#0d2461]/85">
                                    Chemical Resistance
                                </span>

                            </div>

                            <span className="text-xs font-semibold text-[#0d2461]">
                                Excellent
                            </span>

                        </div>

                        <div className="h-px bg-[#0d2461]/15" />

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex items-center gap-2">

                                <Workflow
                                    size={16}
                                    className="text-[#0d2461]"
                                />

                                <span className="text-xs text-[#0d2461]/85">
                                    Processability
                                </span>

                            </div>

                            <span className="text-xs font-semibold text-[#0d2461]">
                                High
                            </span>

                        </div>

                        <div className="h-px bg-[#0d2461]/15" />

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex items-center gap-2">

                                <Thermometer
                                    size={16}
                                    className="text-[#0d2461]"
                                />

                                <span className="text-xs text-[#0d2461]/85">
                                    Thermal Endurance
                                </span>

                            </div>

                            <span className="text-xs font-semibold text-[#0d2461]">
                                High
                            </span>

                        </div>

                        <div className="h-px bg-[#0d2461]/15" />

                        <div className="flex items-center justify-between gap-3">

                            <div className="flex items-center gap-2">

                                <Flame
                                    size={16}
                                    className="text-[#0d2461]"
                                />

                                <span className="text-xs text-[#0d2461]/85">
                                    Melting Point
                                </span>

                            </div>

                            <span className="text-xs font-semibold text-[#0d2461]">
                                High
                            </span>

                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Right Pointer */}
            <div className="absolute bottom-10 right-15 z-10 xl:w-[310px]">
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

const applications = [
    {
        icon: Factory,
        title: "Refineries",
        description:
            "Advanced solutions designed for demanding refinery operations.",
    },
    {
        icon: Droplets,
        title: "Chemical Plants",
        description:
            "Reliable technology for efficient and safe chemical processing.",
    },
    {
        icon: Layers3,
        title: "Industrial Gas",
        description:
            "High-performance solutions for industrial gas applications.",
    },
    {
        icon: Sparkles,
        title: "Clean Energy",
        description:
            "Innovative technologies supporting cleaner energy systems.",
    },
    {
        icon: Factory,
        title: "Manufacturing",
        description:
            "Dependable solutions for modern industrial manufacturing.",
    },
    {
        icon: Droplets,
        title: "Water Treatment",
        description:
            "Efficient systems for demanding water treatment applications.",
    },
];

export default function ProductPage() {
    return (
        <main
            className="min-h-screen overflow-hidden text-[#071a3d]"
            style={{ backgroundColor: "#ffffff" }}
        >

            {/* =====================================================
                HERO
            ===================================================== */}
            <ChemicalBanner />

            <section className="relative overflow-hidden bg-[#071a3d] px-6 py-10 text-white md:px-10 lg:px-16 lg:py-15">

                {/* Decorative gold glow */}
                <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f5bd24]/5 blur-[90px]" />

                <div className="mx-auto max-w-[1250px]">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                        {/* LEFT */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <p className="mt-5 text-[15px] font-bold uppercase tracking-[0.3em] text-[#f5bd24]">
                                Product Overview
                            </p>

                            <h2 className="mt-4 max-w-md text-[clamp(2.5rem,4.5vw,5rem)] font-light leading-[0.94] tracking-[0.06em] text-white">
                                Built for
                                <br />

                                <span className="font-semibold">
                                    cleaner hydrogen.
                                </span>
                            </h2>

                        </motion.div>


                        {/* RIGHT */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="self-end"
                        >

                            <p className="max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                                Our advanced hydrogen separation membranes
                                provide an efficient and scalable solution for
                                recovering hydrogen from industrial gas
                                streams. The technology combines selective
                                separation with compact system design to help
                                improve process efficiency and reduce energy
                                consumption.
                            </p>

                            <div className="mt-8 h-px w-full bg-white/10" />

                            <div className="mt-6 flex flex-wrap gap-8 text-base font-semibold tracking-widest text-white">

                                <div className="flex items-center gap-2">
                                    <CircleCheck
                                        size={17}
                                        className="text-[#f5bd24]"
                                    />
                                    High Selectivity
                                </div>

                                <div className="flex items-center gap-2">
                                    <CircleCheck
                                        size={17}
                                        className="text-[#f5bd24]"
                                    />
                                    Compact Design
                                </div>

                                <div className="flex items-center gap-2">
                                    <CircleCheck
                                        size={17}
                                        className="text-[#f5bd24]"
                                    />
                                    Scalable
                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>
            </section>

            <section className="relative bg-[#f7f8fa] px-6 py-10 md:px-10 lg:px-16 lg:py-15">

                <div className="">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                            Why Our Technology
                        </p>

                        <h2 className="mt-2 text-[clamp(2.4rem,5vw,3rem)] font-light leading-[0.95] tracking-[0.06em]">
                            Designed around performance.
                        </h2>
                    </motion.div>


                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid gap-px overflow-hidden rounded-[35px] bg-[#071a3d]/10 md:grid-cols-2"
                    >

                        {features.map((feature, index) => {

                            const Icon = feature.icon;

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
                                        {feature.text}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </motion.div>
                </div>
            </section>

            <section className="bg-[#071a3d] px-6 py-10 text-white md:px-10 lg:px-16 lg:py-15">

                <div className="mx-auto max-w-[1250px]">

                    <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
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
                                className="h-[480px] w-full object-cover md:h-[600px]"
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


                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >

                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5bd24]">
                                How It Works
                            </p>

                            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.93] tracking-[0.06em]">
                                Separation
                                <br />
                                <span className="font-semibold">
                                    reimagined.
                                </span>
                            </h2>

                            <p className="mt-7 text-sm leading-7 text-white/60 md:text-base">
                                Our membrane technology selectively allows
                                hydrogen molecules to pass through the membrane
                                while retaining other components in the gas
                                stream.
                            </p>


                            <div className="mt-10 space-y-5">

                                {[
                                    {
                                        icon: Wind,
                                        title: "Gas Feed",
                                        text: "Industrial gas enters the membrane system.",
                                    },
                                    {
                                        icon: FlaskConical,
                                        title: "Selective Separation",
                                        text: "Hydrogen selectively passes through the membrane.",
                                    },
                                    {
                                        icon: Zap,
                                        title: "Hydrogen Recovery",
                                        text: "Purified hydrogen is collected for further use.",
                                    },
                                ].map((item, index) => {

                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{
                                                opacity: 0,
                                                x: 30,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.12,
                                            }}
                                            className="flex gap-4 border-b border-white/10 pb-5"
                                        >

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5bd24]/10">
                                                <Icon
                                                    size={18}
                                                    className="text-[#f5bd24]"
                                                />
                                            </div>

                                            <div>

                                                <h3 className="text-sm font-semibold">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-xs leading-6 text-white/50">
                                                    {item.text}
                                                </p>

                                            </div>

                                        </motion.div>
                                    );
                                })}

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-10 text-[#071a3d] md:px-10 lg:px-16 lg:py-15">
                <div className="mx-auto max-w-[1250px]">

                    {/* Heading */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                            Applications
                        </p>

                        <h2 className="mt-2 text-[clamp(2.7rem,5vw,3rem)] font-light leading-[0.93] tracking-[0.06em]">
                            Where our technology works.
                        </h2>
                    </motion.div>

                    {/* Swiper */}
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
                            {applications.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <SwiperSlide key={item.title}>
                                        <motion.div
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            className="group relative min-h-[230px] overflow-hidden rounded-[25px] border border-[#071a3d]/10 bg-[#f7f8fa] p-7 transition-all duration-500 hover:bg-[#071a3d]"
                                        >
                                            {/* Icon */}
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5bd24]/15 transition-all duration-500 group-hover:bg-[#f5bd24]">
                                                <Icon
                                                    size={28}
                                                    strokeWidth={1.4}
                                                    className="text-[#f5bd24] transition-colors duration-500 group-hover:text-[#071a3d]"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-7 left-7 right-7">
                                                <h3 className="text-xl font-semibold text-[#071a3d] transition-colors duration-500 group-hover:text-white">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-[#071a3d]/60 transition-colors duration-500 group-hover:text-white/65">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Hover number */}
                                            <span className="absolute right-6 top-6 text-[11px] font-bold tracking-[0.2em] text-[#071a3d]/20 transition-colors group-hover:text-white/20">
                                                01
                                            </span>
                                        </motion.div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>

                        {/* Navigation */}
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
        </main>
    );
}