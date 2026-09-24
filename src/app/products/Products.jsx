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
    CircleCheck,
} from "lucide-react";

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

export default function ProductPage() {
    return (
        <main
            className="min-h-screen overflow-hidden text-[#071a3d]"
            style={{ backgroundColor: "#ffffff" }}
        >

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-white text-[#071a3d]">

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.12, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full border border-[#f5bd24]"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.04, 0.08, 0.04],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-[#f5bd24] blur-[100px]"
                />

                {/* Subtle grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#071a3d 1px, transparent 1px), linear-gradient(90deg, #071a3d 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-20 md:px-10 lg:px-16 lg:pb-20 lg:pt-42">
                    <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >

                            <div className="mb-15 flex items-end gap-4">
                                <span className="text-sm font-light leading-none tracking-[-0.06em] text-[#071a3d]/80 md:text-sm">
                                    Home /
                                </span>
                                <span className="text-sm font-light leading-none tracking-[-0.06em] text-[#071a3d]/80 md:text-sm">
                                    PVC Resin /
                                </span>
                                <span className="text-sm font- leading-none tracking-[-0.06em] text-[#071a3d] md:text-sm">
                                    Polyethylene (PE)
                                </span>
                            </div>

                            <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                                PVC Resin
                            </p>

                            <h1 className="max-w-[620px] text-7xl font-light leading-[0.9] tracking-[-0.065em] text-[#071a3d]">
                                Polyethylene (PE)
                                {/* Gold underline */}
                                <span className="absolute -bottom-2 left-0 h-[5px] w-1/2 rounded-full bg-[#f5bd24]" />
                            </h1>

                            <p className="mt-9 max-w-lg text-sm leading-7 text-[#071a3d]/60 md:text-base">
                                High-performance membrane solutions designed
                                for efficient hydrogen recovery, purification
                                and industrial gas separation.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">

                                <button className="group flex items-center gap-3 rounded-full bg-[#071a3d] px-6 py-3 text-xs font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#f5bd24] hover:text-[#071a3d]">

                                    Inquiry Now

                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </button>

                                <button className="rounded-full border border-[#071a3d]/20 px-6 py-3 text-xs font-semibold text-[#071a3d] transition-all hover:border-[#f5bd24] hover:bg-[#f5bd24]">
                                    DOWNLOAD BROCHURE
                                </button>

                            </div>

                        </motion.div>


                        {/* RIGHT IMAGE */}
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative"
                        >

                            {/* Image wrapper */}
                            <div className="relative h-[500px] overflow-hidden rounded-[45%_0_45%_0] bg-[#071a3d] shadow-[0_30px_80px_rgba(7,26,61,0.18)]">

                                <img
                                    src="/product/6.png"
                                    alt="Hydrogen Separation Membrane"
                                    className="h-[450px] w-full object-contain mt-5"
                                />

                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/65 via-transparent to-transparent" />

                            </div>


                            {/* Gold decorative border */}
                            <div className="pointer-events-none absolute -bottom-5 -right-5 h-32 w-32 rounded-br-[45px] border-b-[5px] border-r-[5px] border-[#f5bd24]" />


                            {/* Floating label */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-8 left-7 rounded-2xl border border-white/20 bg-[#071a3d]/90 p-4 shadow-xl backdrop-blur-md"
                            >

                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#f5bd24]">
                                    Technology
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                    Hydrogen Recovery
                                </p>

                            </motion.div>

                        </motion.div>

                    </div>
                </div>
            </section>

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

                            <h2 className="mt-4 max-w-md text-[clamp(2.5rem,4.5vw,5rem)] font-light leading-[0.94] tracking-[-0.06em] text-white">
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

                            <div className="mt-6 flex flex-wrap gap-8 text-xs font-semibold text-white">

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

                <div className="mx-auto max-w-[1250px]">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="text-[15px] font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                            Why Our Technology
                        </p>

                        <h2 className="mt-3 max-w-2xl text-[clamp(2.4rem,5vw,5.2rem)] font-light leading-[0.95] tracking-[-0.06em]">
                            Designed around
                            <br />
                            <span className="font-semibold">
                                performance.
                            </span>
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

                                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
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

                            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.93] tracking-[-0.06em]">
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

            {/* =====================================================
                SPECIFICATIONS
            ===================================================== */}
            <section className="bg-white px-6 py-10 md:px-10 lg:px-16 lg:py-15">

                <div className="mx-auto max-w-[1250px]">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >

                            <p className="mt-5 text-[15px] font-bold uppercase tracking-[0.3em] text-[#071a3d]">
                                Technical Information
                            </p>

                            <h2 className="mt-3 text-[clamp(2.5rem,4.5vw,4.8rem)] font-light leading-[0.95] tracking-[-0.06em]">
                                Product
                                <br />
                                <span className="font-semibold">
                                    specifications.
                                </span>
                            </h2>

                        </motion.div>


                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="rounded-[30px] bg-[#f7f8fa] p-5 md:p-8"
                        >

                            {specifications.map(
                                ([label, value], index) => (
                                    <motion.div
                                        key={label}
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.05,
                                        }}
                                        className="grid grid-cols-2 gap-5 border-b border-[#071a3d]/10 py-5 last:border-none"
                                    >

                                        <span className="text-xs font-medium text-[#071a3d]/80">
                                            {label}
                                        </span>

                                        <span className="text-right text-xs font-semibold">
                                            {value}
                                        </span>

                                    </motion.div>
                                )
                            )}

                        </motion.div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                APPLICATIONS
            ===================================================== */}
            <section className="bg-[#0b2447] px-6 py-10 text-white md:px-10 lg:px-16 lg:py-15">

                <div className="mx-auto max-w-[1250px]">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5bd24]">
                            Applications
                        </p>

                        <h2 className="mt-4 max-w-3xl text-[clamp(2.7rem,5vw,5.5rem)] font-light leading-[0.93] tracking-[-0.06em]">
                            Where our
                            <br />
                            technology
                            <span className="font-semibold">
                                {" "}
                                works.
                            </span>
                        </h2>

                    </motion.div>


                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {[
                            {
                                icon: Factory,
                                title: "Refineries",
                            },
                            {
                                icon: Droplets,
                                title: "Chemical Plants",
                            },
                            {
                                icon: Layers3,
                                title: "Industrial Gas",
                            },
                            {
                                icon: Sparkles,
                                title: "Clean Energy",
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="group relative min-h-[150px] overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:bg-white"
                                >

                                    <Icon
                                        size={30}
                                        strokeWidth={1.3}
                                        className="text-[#f5bd24] transition group-hover:text-[#071a3d]"
                                    />

                                    <div className="absolute bottom-7 left-7">
                                        <h3 className="text-lg font-semibold transition group-hover:text-[#071a3d]">
                                            {item.title}
                                        </h3>
                                    </div>

                                </motion.div>
                            );
                        })}

                    </motion.div>
                </div>
            </section>
        </main>
    );
}