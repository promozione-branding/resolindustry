"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Camera,
    Database,
    FileText,
    LayoutGrid,
    Layers,
    Monitor,
    Presentation,
    Wifi,
} from "lucide-react";

const serif = Playfair_Display({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const filters = [
    "All Products",
    "Computing",
    "Accessories",
    "Networking",
    "Display & AV",
    "Software",
    "Collaboration",
];

const products = [
    {
        name: "Portable Storage",
        image: "/zaikai/1.jpg",
        description:
            "Compact storage solutions to keep important files close, organized and ready to move.",
        icon: Database,
        badge: "bg-sky-100 text-sky-600",
        categories: ["Computing", "Accessories"],
    },
    {
        name: "Camera",
        image: "/zaikai/2.jpg",
        description:
            "Clear, reliable cameras for meetings, classrooms and everyday collaboration.",
        icon: Camera,
        badge: "bg-indigo-100 text-indigo-600",
        categories: ["Accessories", "Collaboration"],
    },
    {
        name: "Routers",
        image: "/zaikai/3.jpg",
        description:
            "Dependable connectivity that helps teams, devices and ideas stay connected.",
        icon: Wifi,
        badge: "bg-emerald-100 text-emerald-600",
        categories: ["Networking"],
    },
    {
        name: "Interactive Flat Panel",
        image: "/zaikai/4.jpg",
        description:
            "Large-format interactive displays built to make presentations and learning more engaging.",
        icon: Monitor,
        badge: "bg-orange-100 text-orange-500",
        categories: ["Display & AV", "Collaboration"],
    },
    {
        name: "Desktop Computer",
        image: "/zaikai/5.jpg",
        description:
            "Powerful desktops computing for productive work across modern environments.",
        icon: Monitor,
        badge: "bg-sky-100 text-sky-600",
        categories: ["Computing"],
    },
    {
        name: "Softwares",
        image: "/zaikai/6.jpg",
        description:
            "Software solutions that support day-to-day workflows, communication and productivity.",
        icon: LayoutGrid,
        badge: "bg-pink-100 text-pink-500",
        categories: ["Software"],
    },
    {
        name: "OPS",
        image: "/zaikai/7.jpg",
        description:
            "Computing modules designed to bring powerful, integrated performance to display systems.",
        icon: Layers,
        badge: "bg-violet-100 text-violet-600",
        categories: ["Computing", "Display & AV"],
    },
    {
        name: "Digital Podium",
        image: "/zaikai/8.jpg",
        description:
            "Presentation platforms that bring control, content and the speaker together.",
        icon: Presentation,
        badge: "bg-emerald-100 text-emerald-600",
        categories: ["Display & AV", "Collaboration"],
    },
    {
        name: "Document Camera",
        image: "/zaikai/9.jpg",
        description:
            "Show documents and physical objects clearly to a room or a remote audience.",
        icon: FileText,
        badge: "bg-amber-100 text-amber-500",
        categories: ["Collaboration", "Display & AV"],
    },
];

const HERO_IMAGE = "/technology_zaikai_.png";

const ease = [0.22, 1, 0.36, 1];

export default function Zaikai() {
    const reduceMotion = useReducedMotion();
    const [active, setActive] = useState("All Products");

    const visible =
        active === "All Products"
            ? products
            : products.filter((p) => p.categories.includes(active));

    return (
        <main className="overflow-hidden bg-[#f7f9fc] text-[#111b2f]">
            {/* HERO */}
            <section className="relative isolate overflow-hidden bg-[#06142c] text-white">
                {/* background image */}
                <Image
                    src={HERO_IMAGE}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="-z-20 object-cover object-[70%_center] lg:object-center"
                />
                {/* dark overlay so the text stays readable */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#06142c]/80 via-[#06142c]/60 to-[#06142c]/80 lg:bg-gradient-to-r lg:from-[#06142c]/90 lg:via-[#06142c]/55 lg:to-transparent"
                />

                <div className="mx-auto flex min-h-[520px] max-w-[1440px] items-center px-5 pb-24 pt-28 sm:min-h-[560px] sm:px-10 sm:pb-28 sm:pt-32 md:px-14 lg:min-h-[640px] lg:px-20 lg:pb-36 lg:mt-[80px]">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease }}
                        className="relative z-10"
                    >
                        <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#83d7ed] sm:text-[11px]">
                            <span className="h-px w-9 bg-[#83d7ed]" />
                            Zaikai technology
                        </p>
                        <h1
                            className={`${serif.className} max-w-[620px] text-[clamp(2.6rem,8vw,5.25rem)] font-semibold leading-[1] tracking-[-0.02em]`}
                        >
                            Technology
                            <br />
                            made <span className="text-[#8fdcf5]">useful.</span>
                        </h1>
                        <p className="mt-5 max-w-[420px] text-base leading-7 text-white/90 sm:mt-6 sm:text-lg">
                            Smart solutions for modern spaces — work, learn, collaborate
                            and create.
                        </p>
                      
                    </motion.div>

                </div>

                {/* curved bottom edge */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 1440 90"
                    preserveAspectRatio="none"
                    className="absolute bottom-[-1px] left-0 h-[44px] w-full sm:h-[70px] lg:h-[90px]"
                >
                    <path
                        d="M0 90 L0 55 C 220 10, 520 70, 800 62 C 1080 54, 1260 20, 1440 8 L1440 90 Z"
                        fill="#f7f9fc"
                    />
                </svg>
            </section>

            {/* PRODUCTS */}
            <section
                id="zaikai-products"
                className="scroll-mt-20 px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14 md:px-12 lg:px-14 lg:pt-16"
            >
                <div className="mx-auto max-w-[1440px]">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease }}
                        className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                    >
                        <div>
                            <p className="mb-2 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0b2a6b] sm:text-[11px]">
                                Explore Zaikai
                                <span className="h-px w-7 bg-[#0b2a6b]" />
                            </p>
                            <h2
                                className={`${serif.className} text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[#0e1a33] sm:text-4xl md:text-[2.75rem]`}
                            >
                                The tools for what comes next.
                            </h2>
                        </div>
                        <p className="max-w-[340px] text-sm leading-6 text-[#2a3650] md:text-right">
                            From everyday essentials to collaborative display technology,
                            find the right fit for your space.
                        </p>
                    </motion.div>

                    {/* filter pills — scroll sideways on small screens */}
                    <div className="-mx-5 mb-7 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
                        {filters.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setActive(f)}
                                className={`shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium transition sm:px-6 ${
                                    active === f
                                        ? "border-[#06142c] bg-[#06142c] text-white shadow-md"
                                        : "border-[#e1e6ee] bg-white text-[#334057] hover:border-[#9bcbd8]"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{visible.map((product, index) => (
    <motion.article
        key={product.name}
        layout={!reduceMotion}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
            duration: 0.55,
            delay: reduceMotion ? 0 : (index % 4) * 0.07,
            ease,
        }}
        className="group overflow-hidden rounded-[22px] bg-[#0f2468] shadow-[0_8px_30px_rgba(16,39,71,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,39,71,0.22)]"
    >
        <a href="#" className="flex h-full flex-col" aria-label={`Explore ${product.name}`}>
            {/* image */}
            <div className="relative h-[230px] w-full overflow-hidden bg-[#f3f5f8] sm:h-[250px] lg:h-[270px]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
            </div>

            {/* navy footer */}
            <div className="relative flex flex-1 flex-col justify-center px-5 pb-5 pt-4 text-white">
                <h3 className={`${serif.className} pr-2 text-[1.35rem] font-semibold leading-tight`}>
                    {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                    <span className={`${serif.className} text-[11px] font-bold uppercase tracking-[0.22em] text-white/95`}>
                        Explore Product
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f2468] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#8fdcf5]">
                        <ArrowRight size={16} strokeWidth={2} />
                    </span>
                </div>

                {/* keeps the description for screen readers / SEO without showing it */}
                <p className="sr-only">{product.description}</p>
            </div>
        </a>
    </motion.article>
))}

                        {/* banner: stacked on phones/small tablets, side-by-side from md */}
                        {active === "All Products" && (
                            <motion.div
                                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, ease }}
                                className="relative flex flex-col overflow-hidden rounded-[22px] bg-gradient-to-r from-[#e6f0fc] via-[#eef4fc] to-[#dfe9f5] md:col-span-3 md:min-h-[340px] md:flex-row lg:col-span-3"
                            >
                                <div className="relative z-10 flex flex-col justify-center px-6 py-8 sm:px-8 md:w-[45%] md:px-10 md:py-12">
                                    <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0b2a6b] sm:text-[11px]">
                                        <span className="h-px w-7 bg-[#0b2a6b]" />
                                        Zaikai collection
                                    </p>
                                    <h3
                                        className={`${serif.className} text-4xl font-semibold leading-[1.08] text-[#0e1a33] md:text-5xl`}
                                    >
                                        Solution for
                                        <br />
                                        <span className="text-[#1243b8]">Every Space.</span>
                                    </h3>
                                    <p className="mt-4 max-w-[320px] text-sm leading-6 text-[#2a3650]">
                                        Reliable technology products for classrooms, meeting rooms,
                                        offices and beyond.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActive("All Products");
                                            document
                                                .getElementById("zaikai-products")
                                                ?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="mt-6 inline-flex w-fit items-center gap-5 rounded-full bg-[#06142c] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:bg-[#0c2845]"
                                    >
                                        View All Products
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#06142c]">
                                            <ArrowRight size={16} />
                                        </span>
                                    </button>
                                </div>

                                <div className="relative h-[230px] w-full md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[58%]">
                                    <Image
                                        src="/lower_banner.png"
                                        alt="Zaikai display in a meeting room"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 45vw"
                                        className="object-cover object-left"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#e6f0fc] via-transparent to-transparent md:bg-gradient-to-r md:from-[#e9f1fc] md:via-[#e9f1fc]/50 md:to-transparent" />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}