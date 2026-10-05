"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Camera,
    Cpu,
    Monitor,
    Wifi,
} from "lucide-react";

const products = [
    {
        number: "01",
        name: "Portable Storage",
        image: "/zaikai/1.jpg",
        description:
            "Compact storage solutions to keep important files close, organised and ready to move.",
        accent: "from-sky-100 to-blue-50",
    },
    {
        number: "02",
        name: "Camera",
        image: "/zaikai/2.jpg",
        description:
            "Clear, reliable cameras for meetings, classrooms and everyday collaboration.",
        accent: "from-violet-100 to-indigo-50",
    },
    {
        number: "03",
        name: "Routers",
        image: "/zaikai/3.jpg",
        description:
            "Dependable connectivity that helps teams, devices and ideas stay connected.",
        accent: "from-cyan-100 to-sky-50",
    },
    {
        number: "04",
        name: "Interactive Flat Panel",
        image: "/zaikai/4.jpg",
        description:
            "Large-format interactive displays built to make presentations and learning more engaging.",
        accent: "from-amber-100 to-orange-50",
    },
    {
        number: "05",
        name: "Desktop Computer",
        image: "/zaikai/5.jpg",
        description:
            "Practical desktop computing for productive work across modern environments.",
        accent: "from-emerald-100 to-teal-50",
    },
    {
        number: "06",
        name: "Softwares",
        image: "/zaikai/6.jpg",
        description:
            "Software solutions that support day-to-day workflows, communication and productivity.",
        accent: "from-fuchsia-100 to-pink-50",
    },
    {
        number: "07",
        name: "OPS",
        image: "/zaikai/7.jpg",
        description:
            "Computing modules designed to bring powerful, integrated performance to display systems.",
        accent: "from-slate-200 to-slate-50",
    },
    {
        number: "08",
        name: "Digital Podium",
        image: "/zaikai/8.jpg",
        description:
            "Presentation podiums that bring controls, content and the speaker together.",
        accent: "from-rose-100 to-red-50",
    },
    {
        number: "09",
        name: "Document Camera",
        image: "/zaikai/9.jpg",
        description:
            "Show documents and physical objects clearly to a room or a remote audience.",
        accent: "from-lime-100 to-green-50",
    },
];

const ease = [0.22, 1, 0.36, 1];

export default function Zaikai() {
    const reduceMotion = useReducedMotion();

    return (
        <main className="overflow-hidden bg-[#f7f8fa] text-[#111b2f]">
            <section className="relative isolate min-h-[640px] overflow-hidden bg-[#081832] text-white sm:min-h-[550px]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />
                <div className="pointer-events-none absolute -right-48 top-20 -z-10 h-[560px] w-[560px] rounded-full bg-[#3478f6]/20 blur-[100px] sm:right-0" />
                <div className="pointer-events-none absolute -left-40 bottom-[-280px] -z-10 h-[500px] w-[500px] rounded-full bg-[#35c5d8]/10 blur-[100px]" />

                <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-12 px-5 pb-10 pt-36 sm:min-h-[550px] sm:px-10 md:px-14 lg:grid-cols-[1.1fr_.9fr] lg:px-20">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                        className="relative z-10"
                    >
                        <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#83d7ed]">
                            <span className="h-px w-9 bg-[#83d7ed]" />
                            Zaikai technology
                        </p>
                        <h1 className="max-w-[760px] text-[clamp(3.25rem,8vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                            Technology
                            <br />
                            <span className="text-[#fff]">made useful.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.15, ease }}
                        className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center"
                        aria-hidden="true"
                    >
                        <motion.div
                            animate={reduceMotion ? undefined : { rotate: 360 }}
                            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[8%] rounded-full border border-dashed border-white/20"
                        />
                        <motion.div
                            animate={reduceMotion ? undefined : { rotate: -360 }}
                            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[20%] rounded-full border border-[#83d7ed]/25"
                        />
                        <div className="absolute inset-[31%] rounded-full bg-[#83d7ed]/10 blur-2xl" />
                        <div className="relative flex h-[47%] w-[47%] items-center justify-center rounded-[34px] border border-white/15 bg-white/[0.07] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                            <div className="absolute inset-3 rounded-[26px] border border-white/10" />
                            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#83d7ed] text-[#081832] shadow-[0_0_70px_rgba(131,215,237,0.25)] sm:h-28 sm:w-28">
                                <Monitor size={54} strokeWidth={1.25} />
                            </div>
                        </div>
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-[7%] top-[25%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#83d7ed] shadow-xl backdrop-blur-lg sm:h-[72px] sm:w-[72px]"
                        >
                            <Wifi size={30} strokeWidth={1.5} />
                        </motion.div>
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[12%] left-[40%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#83d7ed] shadow-xl backdrop-blur-lg sm:h-[72px] sm:w-[72px]"
                        >
                            <Camera size={29} strokeWidth={1.5} />
                        </motion.div>
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
                            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute right-[8%] top-[28%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#83d7ed] shadow-xl backdrop-blur-lg sm:h-[72px] sm:w-[72px]"
                        >
                            <Cpu size={29} strokeWidth={1.5} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section
                id="zaikai-products"
                className="scroll-mt-20 px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-16 lg:py-14"
            >
                <div className="mx-auto max-w-[1440px]">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease }}
                        className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                    >
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.23em] text-[#071a3d]">
                                Explore Zaikai
                            </p>
                            <h2 className="max-w-[700px] text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
                                The tools for what comes next.
                            </h2>
                        </div>
                        <p className="max-w-[430px] text-sm leading-6 text-[#071a3d] md:text-right md:text-base">
                            From everyday essentials to collaborative display
                            technology, find the right fit for your space.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product, index) => {
                            return (
                                <motion.article
                                    key={product.number}
                                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: reduceMotion ? 0 : (index % 3) * 0.08,
                                        ease,
                                    }}
                                    className="group relative overflow-hidden rounded-[24px] border border-[#e6e9ee] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#9bcbd8] hover:shadow-[0_24px_60px_rgba(16,39,71,0.09)]"
                                >
                                    <div
                                        className={`relative border-b border-gray-300 flex h-[210px] items-center justify-center overflow-hidden rounded-[18px] bg-white sm:h-[250px]`}
                                    >
                                        <motion.div
                                            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                                            transition={{
                                                duration: 4 + (index % 3) * 0.35,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-contain"
                                            />
                                        </motion.div>
                                        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0c2845] text-[10px] font-semibold tracking-wide text-white shadow-md">
                                            {product.number}
                                        </span>
                                    </div>
                                    <div className="flex flex-col px-2 pb-2 pt-3 sm:px-3">
                                        <h3 className="text-xl font-medium tracking-[-0.025em] text-[#101b30] sm:text-2xl">
                                            {product.name}
                                        </h3>
                                        <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#687385]">
                                            {product.description}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between pt-6">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#85909e]">
                                                Zaikai collection
                                            </span>
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e7ec] text-[#1c6580] transition duration-300 group-hover:border-[#0c2845] group-hover:bg-[#0c2845] group-hover:text-white">
                                                <ArrowUpRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
