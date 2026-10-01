
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaArrowRight,
    FaPaperPlane, FaBuilding,
} from "react-icons/fa6";
import Form from "@/component/home/Form";

function OfficeCard({ office, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_15px_50px_rgba(7,26,61,0.07)] transition-all duration-500 hover:border-[#f5bd24]/50 hover:shadow-[0_20px_60px_rgba(7,26,61,0.14)] sm:p-6"
        >
            {/* ================= DECORATIVE SVG ================= */}

            <svg
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 text-[#f5bd24]/10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12"
                viewBox="0 0 200 200"
                fill="none"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <circle
                    cx="100"
                    cy="100"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <circle
                    cx="100"
                    cy="100"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <path
                    d="M20 100H180M100 20V180"
                    stroke="currentColor"
                    strokeWidth="1"
                />
            </svg>

            {/* ================= TOP ================= */}

            <div className="relative z-10 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    {/* Location Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#071a3d] text-[#f5bd24] shadow-md transition-all duration-300 group-hover:bg-[#f5bd24] group-hover:text-[#071a3d]">
                        <FaLocationDot size={20} />
                    </div>

                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#f5bd24]">
                            Resol Industry
                        </p>

                        <h3 className="mt-0.5 text-xl font-black leading-tight text-[#071a3d]">
                            {office.city || office.title}
                        </h3>
                    </div>

                </div>

                <span className="hidden rounded-full bg-[#071a3d]/5 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#071a3d] sm:block">
                    {String(index + 1).padStart(2, "0")}
                </span>

            </div>

            {/* ================= ADDRESS ================= */}

            <div className="relative z-10 mt-5 rounded-xl bg-slate-50 p-4">

                <div className="flex gap-3">

                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#f5bd24] shadow-sm">
                        <FaBuilding size={13} />
                    </div>

                    <div>
                        <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#071a3d]/50">
                            Office Address
                        </p>

                        <p className="text-sm leading-5 text-slate-600">
                            {office.text}
                        </p>
                    </div>

                </div>

            </div>

            {/* ================= CONTACT FOOTER ================= */}

            {(office.phone || office.email) && (
                <div className="relative z-10 mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">

                    {office.phone && (
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">

                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071a3d]/5 text-[#071a3d]">
                                <FaPhone size={12} />
                            </span>

                            <span>{office.phone}</span>

                        </div>
                    )}

                    {office.email && (
                        <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-slate-600">

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#071a3d]/5 text-[#071a3d]">
                                <FaEnvelope size={11} />
                            </span>

                            <span className="max-w-[180px] truncate">
                                {office.email}
                            </span>

                        </div>
                    )}

                </div>
            )}

            {/* ================= BOTTOM ACCENT ================= */}

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f5bd24] transition-all duration-500 group-hover:w-full" />

        </motion.div>
    );
}

/* ============================================================
   OFFICE DATA
============================================================ */

const offices = [
    {
        id: "01",
        title: "New Delhi",
        type: "Registered Office",
        text: "Office No. DSM-321, DLF Tower, Shivaji Marg, New Delhi 110015",
        phone: "+91-11-41417725",
    },
    {
        id: "02",
        title: "Maharashtra",
        type: "Regional Office",
        text: "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra, 421302",
        phone: "+91-9810929486",
    },
    {
        id: "03",
        title: "Gujarat",
        type: "Regional Office",
        text: "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpra, Kachchh, Gujarat, 370405",
        phone: "+91-9999995255",
    },
    {
        id: "04",
        title: "Chennai",
        type: "Regional Office",
        text: "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
        phone: "+91-9999997765",
    },
];

/* ============================================================
   PRODUCTS
============================================================ */

const products = [
    "PVC Resin",
    "PET Resin",
    "Polymers",
    "Plasticizers",
    "Calcium Carbonate",
    "Fillers & Colourants",
    "Natural & Synthetic Rubber",
    "Other",
];

/* ============================================================
   PAGE
============================================================ */

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <main className="bg-[#f8fafc] text-[#071a3d] overflow-hidden">
            <section className="relative flex min-h-[70vh] items-center overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images.jpg')",
                    }}
                />



                {/* Dark + white overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Left side readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/15 to-black/10" />
                {/* Industrial Molecular SVG */}
                <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 lg:block">

                    {/* Outer rotating ring */}
                    <motion.svg
                        viewBox="0 0 500 500"
                        className="absolute inset-0 h-full w-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <circle
                            cx="250"
                            cy="250"
                            r="205"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="1"
                            strokeDasharray="8 14"
                            opacity="0.35"
                        />

                        <circle
                            cx="250"
                            cy="250"
                            r="170"
                            fill="none"
                            stroke="#f5bd24"
                            strokeWidth="1"
                            strokeDasharray="3 12"
                            opacity="0.5"
                        />
                    </motion.svg>

                    {/* Molecular structure */}
                    <motion.svg
                        viewBox="0 0 500 500"
                        className="absolute inset-0 h-full w-full"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                    >

                        {/* Connections */}
                        <g
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            opacity="0.55"
                        >
                            <line x1="250" y1="250" x2="250" y2="105" />
                            <line x1="250" y1="250" x2="380" y2="175" />
                            <line x1="250" y1="250" x2="380" y2="325" />
                            <line x1="250" y1="250" x2="250" y2="395" />
                            <line x1="250" y1="250" x2="120" y2="325" />
                            <line x1="250" y1="250" x2="120" y2="175" />
                        </g>

                        {/* Secondary connections */}
                        <g
                            stroke="#f5bd24"
                            strokeWidth="1"
                            strokeDasharray="4 7"
                            opacity="0.6"
                        >
                            <line x1="250" y1="105" x2="380" y2="175" />
                            <line x1="380" y1="175" x2="380" y2="325" />
                            <line x1="380" y1="325" x2="250" y2="395" />
                            <line x1="250" y1="395" x2="120" y2="325" />
                            <line x1="120" y1="325" x2="120" y2="175" />
                            <line x1="120" y1="175" x2="250" y2="105" />
                        </g>

                        {/* Outer atoms */}
                        <g>
                            <circle cx="250" cy="105" r="10" fill="#071a3d" stroke="#f5bd24" strokeWidth="3" />
                            <circle cx="380" cy="175" r="10" fill="#071a3d" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="380" cy="325" r="10" fill="#071a3d" stroke="#f5bd24" strokeWidth="3" />
                            <circle cx="250" cy="395" r="10" fill="#071a3d" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="120" cy="325" r="10" fill="#071a3d" stroke="#f5bd24" strokeWidth="3" />
                            <circle cx="120" cy="175" r="10" fill="#071a3d" stroke="#ffffff" strokeWidth="2" />
                        </g>

                        {/* Center molecule */}
                        <circle
                            cx="250"
                            cy="250"
                            r="48"
                            fill="#071a3d"
                            stroke="#f5bd24"
                            strokeWidth="2"
                        />

                        <circle
                            cx="250"
                            cy="250"
                            r="38"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="1"
                            opacity="0.3"
                        />

                        {/* Chemical symbol */}
                        <text
                            x="250"
                            y="260"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="24"
                            fontWeight="800"
                            letterSpacing="3"
                        >
                            RIL
                        </text>

                        {/* <text
                            x="250"
                            y="267"
                            textAnchor="middle"
                            fill="#f5bd24"
                            fontSize="9"
                            fontWeight="700"
                            letterSpacing="2"
                        >
                            MATERIALS
                        </text> */}

                        {/* Small particles */}
                        <circle cx="175" cy="125" r="3" fill="#f5bd24" />
                        <circle cx="325" cy="130" r="3" fill="#ffffff" />
                        <circle cx="425" cy="250" r="3" fill="#f5bd24" />
                        <circle cx="325" cy="370" r="3" fill="#ffffff" />
                        <circle cx="175" cy="370" r="3" fill="#f5bd24" />
                        <circle cx="75" cy="250" r="3" fill="#ffffff" />
                    </motion.svg>

                    {/* Floating particles */}
                    <motion.div
                        className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[#f5bd24]"
                        animate={{
                            y: [0, -18, 0],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    />

                    <motion.div
                        className="absolute right-[18%] top-[65%] h-1.5 w-1.5 rounded-full bg-white"
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    />

                </div>
                {/* Decorative gold glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#fff] blur-[100px]"
                />

                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#071a3d 1px, transparent 1px), linear-gradient(90deg, #071a3d 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Decorative circles */}
                {/* <div className="absolute right-[8%] top-[20%] h-52 w-52 rounded-full border border-[#fff]/60" /> */}

                {/* <div className="absolute right-[12%] top-[27%] h-36 w-36 rounded-full border border-[#fff]/90" /> */}

                {/* Content */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-15 pt-50 md:px-12">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >

                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-[#f5bd24]" />

                            <span className="text-sm font-black uppercase tracking-[0.3em] text-white">
                                Get In Touch
                            </span>
                        </div>

                        <h1 className="text-5xl font-black uppercase leading-[1.02] track text-white sm:text-6xl md:text-7xl">
                            Let&apos;s Talk
                            <br />

                            <span className="">
                                Business.
                            </span>
                        </h1>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <a
                                href="tel:+911141417725"
                                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-[#071a3d] transition-all hover:-translate-y-1 hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                <FaPhone size={13} />
                                Call Us
                            </a>

                            <a
                                href="https://wa.me/919810929486"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full border-2 border-white px-6 py-3 text-sm font-black text-white transition-all hover:bg-[#f5bd24] hover:border-[#f5bd24]"
                            >
                                <FaWhatsapp size={16} />
                                WhatsApp
                            </a>

                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="relative z-20 -mt-8 px-6">
                <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-[#071a3d] shadow-[0_20px_60px_rgba(7,26,61,0.25)] sm:grid-cols-3">

                    <QuickContact
                        icon={<FaPhone />}
                        title="Call Us"
                        text="+91-11-41417725"
                        href="tel:+911141417725"
                    />

                    <QuickContact
                        icon={<FaEnvelope />}
                        title="Email Us"
                        text="info@resolvinyls.com"
                        href="mailto:info@resolvinyls.com"
                    />

                    <QuickContact
                        icon={<FaWhatsapp />}
                        title="WhatsApp"
                        text="+91-9810929486"
                        href="https://wa.me/919810929486"
                    />

                </div>
            </section>

            <section className="relative overflow-hidden bg-[#f8fafc] px-6 py-15 md:px-12">

                {/* ================= BACKGROUND SVG ================= */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">

                    {/* Large SVG pattern */}
                    <svg
                        className="absolute -right-40 top-10 h-[650px] w-[650px] text-[#0d2461]/[0.035]"
                        viewBox="0 0 600 600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="300"
                            cy="300"
                            r="250"
                            stroke="currentColor"
                            strokeWidth="1"
                        />

                        <circle
                            cx="300"
                            cy="300"
                            r="190"
                            stroke="currentColor"
                            strokeWidth="1"
                        />

                        <circle
                            cx="300"
                            cy="300"
                            r="130"
                            stroke="currentColor"
                            strokeWidth="1"
                        />

                        <path
                            d="M300 0V600M0 300H600"
                            stroke="currentColor"
                            strokeWidth="1"
                        />

                        <path
                            d="M88 88L512 512M512 88L88 512"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                    </svg>

                    {/* Yellow decorative SVG */}
                    <svg
                        className="absolute -left-24 bottom-0 h-72 w-72 text-[#f5bd24]/10"
                        viewBox="0 0 300 300"
                        fill="none"
                    >
                        <circle
                            cx="150"
                            cy="150"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="2"
                        />

                        <circle
                            cx="150"
                            cy="150"
                            r="80"
                            stroke="currentColor"
                            strokeWidth="1"
                        />

                        <circle
                            cx="150"
                            cy="150"
                            r="35"
                            fill="currentColor"
                        />
                    </svg>

                    {/* Small dots */}
                    <div className="absolute right-[18%] top-24 h-2 w-2 rounded-full bg-[#f5bd24]/40" />
                    <div className="absolute right-[12%] top-40 h-1.5 w-1.5 rounded-full bg-[#0d2461]/20" />
                    <div className="absolute left-[12%] top-1/3 h-2 w-2 rounded-full bg-[#f5bd24]/30" />

                </div>

                {/* ================= CONTENT ================= */}

                <div className="relative z-10 mx-auto max-w-7xl">

                    <SectionHeading
                        eyebrow="Our Presence"
                        title="Our Office Locations"
                        text="With offices across key regions of India, we stay connected with customers and supply requirements across the country."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2">

                        {offices.map((office, index) => (
                            <OfficeCard
                                key={office.id}
                                office={office}
                                index={index}
                            />
                        ))}

                    </div>

                </div>

            </section>

            <Form />

            <section className="bg-[#071a3d] px-6 py-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5bd24]">
                        Resol Industries
                    </p>

                    <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl md:text-5xl">
                        Reliable sourcing for your
                        <span className="text-[#f5bd24]">
                            {" "}industrial requirements.
                        </span>
                    </h2>

                    <Link
                        href="/products"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5bd24] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#071a3d] transition hover:-translate-y-1"
                    >
                        Explore Products
                        <FaArrowRight />
                    </Link>

                </motion.div>

            </section>
        </main>
    );
}

function QuickContact({ icon, title, text, href }) {
    return (
        <a
            href={href}
            className="
                group
                flex
                items-center
                gap-4
                border-b
                border-white/10
                p-6
                transition-all
                duration-300
                hover:bg-[#0b2447]
                sm:border-b-0
                sm:border-r
                last:border-r-0
            "
        >
            <div
                className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f5bd24]
                    text-[#071a3d]
                    transition-all
                    duration-300
                    group-hover:scale-110
                "
            >
                {icon}
            </div>

            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5bd24]">
                    {title}
                </p>

                <p className="mt-1 text-sm font-bold text-white transition-colors group-hover:text-[#f5bd24]">
                    {text}
                </p>
            </div>
        </a>
    );
}

function SectionHeading({ eyebrow, title, text }) {
    return (
        <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5bd24]">
                {eyebrow}
            </p>

            <h2 className="mt-3 text-4xl font-black trac text-[#071a3d] sm:text-5xl">
                {title}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
                {text}
            </p>
        </div>
    );
}

function MapPoint({ top, left, title }) {
    return (
        <div
            className="absolute"
            style={{
                top,
                left,
            }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.5, 0.15, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute -inset-3 rounded-full bg-[#f5bd24]"
            />

            <div className="relative h-3 w-3 rounded-full bg-[#f5bd24] shadow-[0_0_20px_#f5bd24]" />

            <span className="absolute left-5 top-[-5px] whitespace-nowrap text-[10px] font-bold text-white">
                {title}
            </span>
        </div>
    );
}

function Input({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                {label}
            </label>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a3d] outline-none transition placeholder:text-slate-400 focus:border-[#f5bd24] focus:bg-white"
            />
        </div>
    );
}