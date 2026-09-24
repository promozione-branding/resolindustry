"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Sparkles, Star, Zap, Rocket, Gamepad2, Heart, ArrowRight } from "lucide-react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Link from "next/link";
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const reasons = [
    {
        title: "Established Industry Experience",
        desc: "Founded in 2005, we bring extensive experience in importing and distributing industrial materials for customers across India.",
        color: "bg-pink-500",
        top: "22%"
    },
    {
        title: "Customer-Focused Approach",
        desc: "We focus on understanding customer requirements and building long-term relationships through responsive service, reliability, and transparent business practices.",
        color: "bg-cyan-500",
        top: "42%"
    },
    {
        title: "Diverse Product Portfolio",
        desc: "From PVC Resin and Calcium Carbonate to EVA Resin, PET Resin, Plasticizers, Rubber, Fillers, Activators, and Colourants, our product portfolio caters to varied industrial requirements.",
        color: "bg-amber-500",
        top: "62%"
    },
    {
        title: "Pan-India Market Reach",
        desc: "Our operations and distribution network enable us to serve customers across different regions and industries throughout India.",
        color: "bg-emerald-500",
        top: "82%"
    },
];

const pillars = [
    { title: "Quality-Focused Sourcing", dept: "Global Sourcing", label1: "Trusted", label2: "Sources", color: "from-cyan-400 to-blue-500" },
    { title: "Consistent Product Standards", dept: "Quality Control", label1: "Consistent", label2: "Quality", color: "from-pink-400 to-rose-500" },
    { title: "Customer-Centric Approach", dept: "Client Focus", label1: "Customer", label2: "Focus", color: "from-amber-400 to-orange-500" },
    { title: "Long-Term Relationships", dept: "Business Trust", label1: "Lasting", label2: "Trust", color: "from-emerald-400 to-teal-500" },
];

export default function AboutUsContent() {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const heroTextRef = useRef(null);
    const pathRef = useRef(null);
    const toyRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0, 0);

        const ctx = gsap.context(() => {

            gsap.to(heroBgRef.current, {
                y: "30%",
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to(heroTextRef.current, {
                y: "-25%",
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "60% top",
                    scrub: true,
                }
            });

            const pathLength = pathRef.current?.getTotalLength?.() || 2000;
            gsap.set(pathRef.current, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            });
            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".board-game-section",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            });

            if (pathRef.current && toyRef.current) {
                gsap.to(toyRef.current, {
                    motionPath: {
                        path: pathRef.current,
                        align: pathRef.current,
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".board-game-section",
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    },
                });
            }

            gsap.utils.toArray(".perk-station").forEach((station) => {
                gsap.from(station, {
                    scale: 0,
                    rotation: -20,
                    opacity: 0,
                    ease: "back.out(2.5)",
                    scrollTrigger: {
                        trigger: station,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            gsap.utils.toArray(".reveal-up").forEach((el) => {
                gsap.from(el, {
                    y: 60,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.9,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });

        }, mainRef);

        return () => {
            ctx.revert();
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, []);

    return (
        <div
            ref={mainRef}
            className=""
        >

            <section
                ref={heroRef}
                className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            >

                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#082f49]/60 via-transparent to-[#082f49]" /> */}

                <div
                    ref={heroTextRef}
                    className="relative z-10 text-center px-6 will-change-transform max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 bg-[#0d2461] border border-white/20 text-white px-5 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-8 lg:mt-8">
                        <Sparkles className="w-4 h-4 text-white" /> ESTABLISHED SINCE 2005
                    </div>
                    <h2 className="text-[2vw] md:text-5xl font-black leading-[0.85] uppercase tracking-tighter text-[#0d2461] drop-shadow-2xl mb-6">
                        About Resol Industries Ltd.

                    </h2>
                    <h2 className="text-[4vw] md:text-7xl font-black leading-[0.9] uppercase tracking-tighter text-white drop-shadow-2xl mb-6">

                        <span className="text-[#0d2461]">Your Trusted PVC Resin Importer.</span>
                    </h2>
                </div>
            </section>

            <section className="board-game-section relative w-full min-h-[220vh] bg-[#0ea5e9] overflow-hidden rounded-t-[4rem] border-t-8 border-cyan-300 shadow-[0_-20px_60px_rgba(14,165,233,0.5)]">

                <div className="absolute top-20 inset-x-0 text-center z-20 reveal-up px-6">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                        What Sets Us Apart
                    </h2>
                    <p className="text-cyan-150 font-semibold text-lg mt-4 text-white/90">
                        With more than two decades of experience in the industry, we&apos;ve built our business around reliable importing, diverse product offerings, and strong customer relationships.
                    </p>
                </div>

                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <svg
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 1000 2000"
                    >
                        <path
                            ref={pathRef}
                            d="M 500,0 C 700,350 200,650 500,1000 C 800,1350 300,1650 500,2000"
                            fill="none"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="14"
                            strokeLinecap="round"
                            strokeDasharray="30 18"
                        />
                    </svg>
                </div>

                <div
                    ref={toyRef}
                    className="absolute top-0 left-0 w-16 h-16 z-30 pointer-events-none -ml-8 -mt-8"
                >
                    <div className="w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center text-pink-500 rotate-90 border-2 border-pink-300">
                        <Rocket className="w-8 h-8 animate-pulse" />
                    </div>
                </div>

                {reasons.map((reason, i) => {
                    const isRight = i % 2 === 1;
                    const positionStyles = isRight
                        ? { top: reason.top, right: "8%" }
                        : { top: reason.top, left: "8%" };

                    return (
                        <div
                            key={i}
                            className="perk-station absolute z-20"
                            style={positionStyles}
                        >
                            <div className="group relative">
                                <div
                                    className={`w-80 sm:w-[26rem] p-6 sm:p-8 rounded-[2.2rem] ${reason.color} border-4 border-white shadow-2xl flex flex-col gap-3 items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                                >
                                    <span className="font-black text-white text-2xl sm:text-3xl leading-none uppercase tracking-wider text-center select-none">
                                        {reason.title}
                                    </span>
                                    <p className="text-white/90 text-sm sm:text-base font-semibold leading-relaxed text-center select-none">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            <section className="relative py-32 px-6 md:px-12 bg-[#071a3d] z-10" style={{ perspective: "1000px" }}>
                <div className="text-center mb-20 reveal-up">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight inline-block mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r text-white">
                            Our Commitment to Quality
                        </span>
                    </h2>
                    <p className="text-xl text-[#f5bd24] font-medium max-w-2xl mx-auto">
                        Hover each box to see what drives our commitment to quality and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto reveal-up">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="toy-box preserve-3d relative w-full aspect-square cursor-pointer"
                            style={{ perspective: "800px" }}
                        >
                            <div className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl border-8 border-cyan-100 flex flex-col items-center justify-center overflow-hidden">
                                <div className="jack-in-box flex flex-col items-center text-center">
                                    <Star className="w-12 h-12 text-amber-400 fill-amber-300 mb-4" />
                                    <span className="text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-2">{pillar.dept}</span>
                                    <h3 className="text-2xl font-black text-[#082f49] leading-tight mb-6">{pillar.title}</h3>
                                    <a href="/products" className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2 text-sm">
                                        Explore Now <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div
                                className={`toy-box-lid absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-3xl p-8 shadow-2xl flex flex-col justify-between border-4 border-white/20 overflow-hidden z-10`}
                            >
                                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                <span className="text-white/70 font-black tracking-widest uppercase text-xs">
                                    Pillar #{idx + 1}
                                </span>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 mb-4">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white leading-none">{pillar.label1}<br />{pillar.label2}</h3>
                                </div>
                                <p className="text-center text-white/50 font-bold uppercase text-xs tracking-widest">
                                    Hover to Open ↑
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative py-24 px-6 md:px-12 bg-white z-10 overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#f5bd24]/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#071a3d]/5 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

                    {/* Content */}
                    <div className="lg:col-span-6 flex flex-col gap-6 text-left reveal-up">

                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#f5bd24]" />
                            <span className="text-[#071a3d] font-black uppercase tracking-[0.25em] text-sm">
                                Our Business
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-[#071a3d] leading-[1.08] tracking-tight">
                            Built Around
                            <br />
                            Reliable Sourcing.
                            <br />

                            <span className="text-[#f5bd24]">
                                Driven by Long-Term
                                <br className="hidden md:block" />
                                Relationships.
                            </span>
                        </h2>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                            Our business is built around international sourcing and the
                            import of industrial materials for the Indian market. We work
                            with established global sources to maintain a diverse product
                            portfolio and dependable availability.
                        </p>

                        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                            Our products are marketed under the Resol Industries brand,
                            allowing us to build a consistent presence in the Indian market
                            while maintaining our focus on product quality and customer
                            requirements.
                        </p>

                        {/* Highlight */}
                        <div className="mt-2 flex items-center gap-4">
                            <div className="h-12 w-1 rounded-full bg-[#f5bd24]" />

                            <p className="text-[#071a3d] text-lg sm:text-xl font-black tracking-wide">
                                Reliable sourcing.
                                <span className="text-[#f5bd24]"> Consistent quality.</span>
                                <br className="hidden sm:block" />
                                Nationwide reach.
                            </p>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="lg:col-span-6 flex justify-center items-center reveal-up w-full">
                        <div className="relative w-full max-w-[620px]">

                            {/* Gold offset shape */}
                            <div className="absolute -right-3 -bottom-3 md:-right-5 md:-bottom-5 w-full h-full rounded-[2.5rem] bg-[#f5bd24]" />

                            {/* Navy frame */}
                            <div className="relative h-[300px] sm:h-[390px] lg:h-[460px] rounded-[2.5rem] overflow-hidden border-[5px] border-[#071a3d] bg-[#071a3d] shadow-[0_25px_60px_rgba(7,26,61,0.18)]">

                                <video
                                    src="/video/resol.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                {/* Dark gradient overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/80 via-[#071a3d]/10 to-transparent pointer-events-none" /> */}

                                {/* Bottom content */}
                                <div className="absolute bottom-2 left-5 right-5 flex items-end justify-between">

                                    <div>
                                        <p className="text-white text-xs uppercase tracking-[0.25em] font-bold">
                                            Resol Industries
                                        </p>
                                    </div>

                                    <div className="h-12 w-12 shrink-0 rounded-full bg-[#f5bd24] flex items-center justify-center shadow-xl">
                                        <span className="text-[#071a3d] text-xl font-black">
                                            ↗
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden rounded-t-[3rem] bg-[#071a3d] px-6 py-14 sm:py-18">

                {/* ================= BACKGROUND SVG ================= */}
                <svg
                    className="absolute -right-32 -top-32 w-[500px] h-[500px] opacity-10"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="250"
                        cy="250"
                        r="210"
                        stroke="#f5bd24"
                        strokeWidth="2"
                    />
                    <circle
                        cx="250"
                        cy="250"
                        r="160"
                        stroke="#f5bd24"
                        strokeWidth="2"
                    />
                    <circle
                        cx="250"
                        cy="250"
                        r="110"
                        stroke="#f5bd24"
                        strokeWidth="2"
                    />
                    <path
                        d="M40 250H460M250 40V460"
                        stroke="#f5bd24"
                        strokeWidth="2"
                    />
                </svg>

                {/* ================= LEFT SVG SHAPE ================= */}
                <svg
                    className="absolute -left-20 bottom-0 w-[280px] opacity-10"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 280L150 20L280 280H20Z"
                        stroke="#ffffff"
                        strokeWidth="2"
                    />
                    <path
                        d="M65 280L150 110L235 280"
                        stroke="#f5bd24"
                        strokeWidth="2"
                    />
                    <path
                        d="M105 280L150 190L195 280"
                        stroke="#ffffff"
                        strokeWidth="2"
                    />
                </svg>

                {/* ================= DOT GRID ================= */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                        backgroundSize: "35px 35px",
                    }}
                />

                {/* ================= GOLD GLOW ================= */}
                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5bd24]/10 blur-[100px]" />

                {/* ================= CONTENT ================= */}
                <div className="relative z-10 mx-auto max-w-5xl text-center reveal-up">

                    {/* Small label */}
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-10 bg-[#f5bd24]" />

                        <span className="text-sm font-black uppercase tracking-[0.3em] text-[#f5bd24]">
                            Let's Work Together
                        </span>

                        <span className="h-[2px] w-10 bg-[#f5bd24]" />
                    </div>

                    {/* Heading */}
                    <h2 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                        LET’S DISCUSS
                        <br />
                        <span className="text-[#f5bd24]">
                            YOUR REQUIREMENTS
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-300 sm:text-base">
                        Looking for PVC Resin, Calcium Carbonate, or other imported
                        industrial materials? Get in touch with Resol Industries to
                        discuss your requirements and find the right products for
                        your business.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#f5bd24] px-8 py-4 text-base font-black uppercase tracking-wide text-[#071a3d] shadow-[0_6px_0_#b88700] transition-all duration-200 hover:translate-y-[3px] hover:shadow-[0_3px_0_#b88700] sm:px-10 sm:text-lg"
                        >
                            <span>Contact Us Today</span>

                            <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                        <Link
                            href="/products"
                            className="group inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/5 px-8 py-4 text-base font-black uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d] sm:px-10 sm:text-lg"
                        >
                            <span>View Our Products</span>

                            <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                    </div>

                    {/* ================= DIVIDER ================= */}
                    <div className="mx-auto mt-14 h-px max-w-2xl bg-white/10" />

                    {/* ================= SOCIAL ================= */}
                    <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                            Connect With Us
                        </span>

                        <div className="flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                <FaLinkedinIn size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                <FaInstagram size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                <FaYoutube size={17} />
                            </a>

                        </div>
                    </div>

                </div>

                {/* ================= FLOATING GOLD ELEMENTS ================= */}
                <div className="absolute left-[12%] top-[25%] h-3 w-3 rounded-full bg-[#f5bd24] shadow-[0_0_25px_#f5bd24]" />
                <div className="absolute right-[15%] bottom-[25%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]" />

            </section>
        </div>
    );
}