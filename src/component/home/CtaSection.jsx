"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    MessageCircle,
    Phone,
    ArrowUpRight,
} from "lucide-react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef(null);
    const productRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* ================= PRODUCT FLOAT ================= */

            gsap.to(productRef.current, {
                y: -18,
                rotate: 2,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ================= TRIANGLES ================= */

            gsap.to(".cta-triangle-1", {
                y: -25,
                x: 15,
                rotate: 12,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".cta-triangle-2", {
                y: 25,
                x: -15,
                rotate: -10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".cta-triangle-3", {
                y: -18,
                rotate: -8,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ================= CIRCLE ================= */

            gsap.to(".cta-circle", {
                scale: 1.12,
                opacity: 0.5,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ================= SCROLL REVEAL ================= */

            gsap.from(".cta-content", {
                opacity: 0,
                x: -60,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: false,
                },
            });

            gsap.from(".cta-product", {
                opacity: 0,
                x: 70,
                scale: 0.85,
                duration: 1,
                delay: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: false,
                },
            });

            /* ================= BUTTONS ================= */

            gsap.from(".cta-button", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.35,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: false,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-15 border-b border-orange-200"
        >
            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div className="pointer-events-none absolute inset-0">

                {/* Soft yellow glow */}
                <div className="absolute right-[10%] top-[15%] h-[350px] w-[350px] rounded-full bg-[#f5bd24]/10 blur-3xl" />

                {/* Circle */}
                <div className="cta-circle absolute right-[17%] top-[18%] h-40 w-40 rounded-full border border-[#0d2461]/10" />

                <div className="absolute bottom-[-140px] left-[-100px] h-[350px] w-[350px] rounded-full border border-[#0d2461]/[0.05]" />
            </div>

            {/* =================================================
                TRIANGLE 1
            ================================================= */}

            <div className="cta-triangle-1 pointer-events-none absolute left-[3%] top-[12%] opacity-[0.12]">
                <svg
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                >
                    <path
                        d="M75 10L140 135H10L75 10Z"
                        stroke="#0d2461"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M75 38L113 112H37L75 38Z"
                        stroke="#f5bd24"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* =================================================
                TRIANGLE 2
            ================================================= */}

            <div className="cta-triangle-2 pointer-events-none absolute bottom-[5%] right-[32%] opacity-[0.10]">
                <svg
                    width="180"
                    height="180"
                    viewBox="0 0 180 180"
                    fill="none"
                >
                    <path
                        d="M90 8L170 165H10L90 8Z"
                        fill="#f5bd24"
                    />

                    <path
                        d="M90 48L135 135H45L90 48Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* =================================================
                TRIANGLE 3
            ================================================= */}

            <div className="cta-triangle-3 pointer-events-none absolute right-[4%] top-[8%] opacity-[0.10]">
                <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                >
                    <path
                        d="M45 5L85 80H5L45 5Z"
                        stroke="#f5bd24"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">

                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="cta-content">

                        {/* Label */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-12 bg-[#f5bd24]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0d2461]">
                                Let's Work Together
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-3xl text-4xl font-bold leading-[1] tracking-tight text-[#0d2461] sm:text-5xl lg:text-7xl">
                            Looking for the
                            <br />
                            <span className="text-[#0d2461]">
                                right material?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
                            Tell us what you need and our team will help you
                            find the right product, grade, quantity and supply
                            solution for your business.
                        </p>

                        {/* =================================================
                            BUTTONS
                        ================================================= */}

                        <div className="mt-8 flex flex-wrap gap-3">

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919873735716"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button group flex items-center gap-3 bg-[#f5bd24] px-5 py-3.5 text-sm font-bold text-[#0d2461] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d2461] hover:text-white"
                            >
                                <MessageCircle size={18} />

                                <span>WhatsApp</span>

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            {/* Call */}
                            <a
                                href="tel:+919873735716"
                                className="cta-button group flex items-center gap-3 border border-[#0d2461]/20 bg-white px-5 py-3.5 text-sm font-bold text-[#0d2461] transition-all duration-300 hover:-translate-y-1 hover:border-[#0d2461] hover:bg-[#0d2461] hover:text-white"
                            >
                                <Phone size={18} />

                                <span>Call Now</span>

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            {/* Inquiry */}
                            <a
                                href="/contact"
                                className="cta-button group flex items-center gap-3 border border-[#0d2461]/20 bg-white px-5 py-3.5 text-sm font-bold text-[#0d2461] transition-all duration-300 hover:-translate-y-1 hover:border-[#0d2461] hover:bg-[#0d2461] hover:text-white"
                            >
                                <span>Inquiry</span>

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>
                        </div>

                        {/* =================================================
                            SOCIAL
                        ================================================= */}

                        <div className="mt-9 flex items-center gap-5">

                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                                Follow us
                            </span>

                            <span className="h-px w-8 bg-black/10" />

                            <div className="flex gap-2">

                                <SocialIcon
                                    href="#"
                                    icon={<FaLinkedin size={15} />}
                                />

                                <SocialIcon
                                    href="#"
                                    icon={<FaInstagram size={15} />}
                                />

                                <SocialIcon
                                    href="#"
                                    icon={<FaFacebook size={15} />}
                                />

                                <SocialIcon
                                    href="#"
                                    icon={<FaYoutube size={15} />}
                                />

                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        PRODUCT
                    ================================================= */}

                    <div className="cta-product relative flex min-h-[330px] items-center justify-center lg:min-h-[420px]">

                        {/* Product glow */}
                        <div className="absolute h-[260px] w-[260px] rounded-full bg-[#f5bd24]/10 blur-3xl sm:h-[330px] sm:w-[330px]" />

                        {/* Dashed ring */}
                        <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-[#0d2461]/10 sm:h-[370px] sm:w-[370px]" />

                        {/* Product */}
                        <div
                            ref={productRef}
                            className="relative z-10"
                        >
                            <img
                                src="/product/5.webp"
                                alt="Product"
                                className="h-auto max-h-[300px] w-auto max-w-[280px] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)] sm:max-h-[370px] sm:max-w-[350px]"
                            />
                        </div>

                        {/* Small triangle */}
                        <div className="absolute right-[5%] top-[8%] opacity-30">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                            >
                                <path
                                    d="M40 5L75 70H5L40 5Z"
                                    stroke="#f5bd24"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>

                        {/* Product badge */}
                        <div className="absolute bottom-[3%] left-[5%] flex items-center gap-3 border border-[#0d2461]/10 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                            <span className="h-2 w-2 rounded-full bg-[#f5bd24]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0d2461]/60">
                                Reliable Supply
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialIcon({ href, icon }) {
    return (
        <a
            href={href}
            className="flex h-9 w-9 items-center justify-center border border-[#0d2461]/10 bg-white text-[#0d2461]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#0d2461]"
        >
            {icon}
        </a>
    );
}