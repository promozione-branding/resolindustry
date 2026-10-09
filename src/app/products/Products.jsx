"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, PackageCheck } from "lucide-react";
import { products } from "../../../data";

const easeOut = [0.22, 1, 0.36, 1];

const intro = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: easeOut },
    },
};

function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getProductImage(category, product) {
    return product.image.startsWith("/products/") ? category.image : product.image;
}

function ProductCard({ category, product, index }) {
    const image = getProductImage(category, product);

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, delay: Math.min(index % 4, 3) * 0.08, ease: easeOut }}
            className="group"
        >
            <Link
                href={product.href}
                className="block h-full overflow-hidden rounded-[22px] border border-[#e8e9ed] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0d2461]/20 hover:shadow-[0_24px_60px_rgba(13,36,97,0.1)]"
            >
                <div className="relative h-[230px] overflow-hidden bg-[#f2f4f7] sm:h-[300px]">
                    <Image
                        src={image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0d2461] backdrop-blur">
                        {category.name}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0d2461] transition duration-300 group-hover:bg-[#0d2461] group-hover:text-white">
                        <ArrowUpRight size={18} strokeWidth={1.7} />
                    </span>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-3">
                    <h3 className="text-lg font-medium leading-snug text-[#101a31] sm:text-xl">
                        {product.name}
                    </h3>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#747b89]">
                        Explore
                    </span>
                </div>
            </Link>
        </motion.article>
    );
}

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All");

    const visibleCategories = useMemo(
        () =>
            activeCategory === "All"
                ? products
                : products.filter((category) => category.name === activeCategory),
        [activeCategory],
    );

    const totalProducts = products.reduce((count, category) => count + category.products.length, 0,);

    return (
        <main className="overflow-hidden bg-white">
            <section className="relative isolate min-h-[620px] overflow-hidden bg-[#071a3d] text-white sm:min-h-[550px]">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/polymer-raw-materials-image-800x600-1.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center opacity-35"
                    />
                </div>

                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a3d] via-[#071a3d]/5 to-[#071a3d]/5" />
                <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-[440px] w-[440px] rounded-full border border-white/30 sm:right-0 sm:top-10 sm:h-[600px] sm:w-[600px]" />
                <div className="pointer-events-none absolute -right-16 top-36 -z-10 h-[310px] w-[310px] rounded-full border border-[#e5b454]/50 sm:right-16 sm:top-28 sm:h-[430px] sm:w-[430px]" />

                <div className="mx-auto flex min-h-[620px] max-w-[1440px] flex-col justify-center px-5 pb-10 pt-40 sm:min-h-[550px] sm:px-10 md:px-14 lg:px-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                        className="max-w-[760px]"
                    >
                        <motion.div variants={intro} className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#e5b454]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0cb7f]">
                                Materials that move industry
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={intro}
                            className="text-[clamp(3.25rem,8vw,6rem)] font-medium leading-[0.94] tracking-[-0.055em]"
                        >
                            Reliable materials.
                            <br />
                            <span className="text-[#e5b454]">Real progress.</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            <section id="catalog" className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16">
                <div className="mx-auto max-w-[1440px]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="mb-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                    >
                        <div>
                            <motion.p variants={intro} className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8782f]">
                                Product catalogue
                            </motion.p>
                        </div>
                    </motion.div>

                    <div className="mb-5 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {["All", ...products.map((category) => category.name)].map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={isActive}
                                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition duration-200 sm:px-5 sm:text-sm ${isActive
                                        ? "border-[#0d2461] bg-[#0d2461] text-white"
                                        : "border-[#e3e5e9] bg-white text-[#596170] hover:border-[#0d2461]/40 hover:text-[#0d2461]"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    <div className="space-y-14 sm:space-y-16">
                        {visibleCategories.map((category) => (
                            <section
                                key={category.name}
                                id={slugify(category.name)}
                                className="scroll-mt-28"
                            >
                                <div className="mb-5 flex items-center justify-between border-b border-[#e8e9ed] pb-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a8782f]">
                                            Product group
                                        </p>
                                        <h3 className="mt-1 text-2xl font-medium tracking-[-0.025em] text-[#101a31] sm:text-3xl">
                                            {category.name}
                                        </h3>
                                    </div>
                                    <span className="hidden items-center gap-2 text-xs text-[#7b8290] sm:inline-flex">
                                        <Check size={14} className="text-[#a8782f]" />
                                        {category.products.length} {category.products.length === 1 ? "material" : "materials"}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                                    {category.products.map((product, index) => (
                                        <ProductCard
                                            key={product.name}
                                            category={category}
                                            product={product}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
