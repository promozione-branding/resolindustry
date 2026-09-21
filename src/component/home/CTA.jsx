"use client";

import React from "react";
import Image from "next/image";
import {
    MessageCircle,
    Phone,
    ArrowUpRight, ArrowDown
} from "lucide-react";

export default function CustomerCareCTA() {
    return (<>
        <section className="relative w-full overflow-hidden bg-[#0d2461]">
            <div className="relative min-h-[720px] w-full sm:min-h-[780px] lg:min-h-screen">

                {/* =================================================
                    BACKGROUND IMAGE
                ================================================= */}

                <Image
                    src="/industrial-port-container-yard_1112-1200.avif"
                    alt="Customer Care"
                    fill
                    priority
                    sizes="100vw"
                    className="
                        object-cover
                        object-center
                    "
                />


                <div
                    className="
                        absolute
                        inset-0
                        bg-[#000]/55
                    "
                />

                {/* Extra blue tint */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[#0d2461]/15
                        mix-blend-multiply
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[720px]
                        flex-col
                        items-center
                        justify-center
                        px-5
                        text-center
                        sm:min-h-[780px]
                        lg:min-h-screen
                    "
                >

                    {/* Small Label */}

                    <span
                        className="
                            mb-5
                            font-sans
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.45em]
                            text-[#D6B27A]
                            sm:text-[12px]
                        "
                    >
                        Resol Industries Ltd.
                    </span>


                    {/* =================================================
                        BELL IMAGE
                    ================================================= */}

                    <div
                        className="
                            relative
                            z-20
                            h-[190px]
                            w-[250px]
                            sm:h-[230px]
                            sm:w-[310px]
                            md:h-[270px]
                            md:w-[360px]
                            lg:h-[320px]
                            lg:w-[430px]
                        "
                    >

                        <Image
                            src="/float-01.png"
                            alt="Customer care bell"
                            fill
                            priority
                            sizes="430px"
                            className="
                                object-contain
                                drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]
                            "
                        />

                    </div>


                    {/* =================================================
                        MAIN TITLE
                    ================================================= */}

                    <h1
                        className="
                            relative
                            z-10
                            -mt-2
                            font-serif
                            text-[17vw]
                            font-normal
                            leading-[0.8]
                            tracking-[-0.055em]
                            text-white
                            sm:text-[13vw]
                            md:text-[12vw]
                            lg:text-[10vw]
                            xl:text-[145px]
                        "
                    >
                        Customer Care
                    </h1>


                    {/* =================================================
                        DOWN BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                        aria-label="Scroll down"
                        className="
                            group
                            mt-10
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#D6B27A]/80
                            bg-[#D6B27A]
                            text-white
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-[#0d2461]
                        "
                    >
                        <ArrowDown
                            size={18}
                            strokeWidth={1.7}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-y-1
                            "
                        />
                    </button>

                </div>

                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-32
                        w-full
                        bg-gradient-to-t
                        from-[#0d2461]/60
                        to-transparent
                    "
                />
            </div>
        </section>

        <section className="relative w-full overflow-hidden bg-[#F4F3F0]">
            <div className="mx-auto grid min-h-[620px] w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2">

                {/* =====================================================
                    LEFT — CONTENT / CTA
                ===================================================== */}

                <div
                    className="
                        relative
                        flex
                        flex-col
                        justify-center
                        px-6
                        py-16
                        sm:px-10
                        md:px-14
                        lg:px-20
                        xl:px-24
                    "
                >

                    {/* Small Label */}
                    <span
                        className="
                            mb-5
                            font-sans
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#C69D58]
                            sm:text-[12px]
                        "
                    >
                        We are here for you
                    </span>


                    {/* Main Heading */}
                    <h2
                        className="
                            max-w-[620px]
                            font-serif
                            text-[48px]
                            font-normal
                            leading-[0.95]
                            tracking-[-0.045em]
                            text-[#0D2461]
                            sm:text-[60px]
                            md:text-[70px]
                            lg:text-[76px]
                            xl:text-[86px]
                        "
                    >
                        Let&apos;s talk about
                        <br />
                        your requirements.
                    </h2>


                    {/* Description */}
                    <p
                        className="
                            mt-7
                            max-w-[570px]
                            font-sans
                            text-[15px]
                            leading-[1.75]
                            text-[#333]/75
                            sm:text-[17px]
                        "
                    >
                        Have a requirement or looking for the right
                        polymer and chemical solution? Our team is ready
                        to understand your needs and help you find the
                        right products for your business.
                    </p>


                    {/* =================================================
                        CTA BUTTONS
                    ================================================= */}

                    <div
                        className="
                            mt-9
                            flex
                            flex-wrap
                            gap-3
                            sm:gap-4
                        "
                    >

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                bg-[#0D2461]
                                px-6
                                py-3.5
                                font-sans
                                text-[13px]
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:bg-[#C69D58]
                            "
                        >
                            <MessageCircle
                                size={17}
                                strokeWidth={1.8}
                            />

                            <span>WhatsApp</span>

                            <ArrowUpRight
                                size={15}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>


                        {/* Call */}
                        <a
                            href="tel:+919999999999"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-[#0D2461]/30
                                bg-transparent
                                px-6
                                py-3.5
                                font-sans
                                text-[13px]
                                font-medium
                                text-[#0D2461]
                                transition-all
                                duration-300
                                hover:border-[#C69D58]
                                hover:bg-[#C69D58]
                                hover:text-white
                            "
                        >
                            <Phone
                                size={17}
                                strokeWidth={1.8}
                            />

                            <span>Call Us</span>

                            <ArrowUpRight
                                size={15}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>


                        {/* Inquiry */}
                        <a
                            href="/contact-us"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-[#C69D58]
                                px-6
                                py-3.5
                                font-sans
                                text-[13px]
                                font-medium
                                text-[#0D2461]
                                transition-all
                                duration-300
                                hover:bg-[#C69D58]
                                hover:text-white
                            "
                        >
                            <span>Send Inquiry</span>

                            <ArrowUpRight
                                size={15}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />
                        </a>

                    </div>


                    {/* Bottom Information */}
                    <div
                        className="
                            mt-10
                            flex
                            flex-wrap
                            gap-x-8
                            gap-y-3
                            border-t
                            border-[#0D2461]/10
                            pt-6
                        "
                    >
                        <div>
                            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C69D58]">
                                Headquarters
                            </p>

                            <p className="mt-1 font-sans text-sm text-[#0D2461]/70">
                                New Delhi, India
                            </p>
                        </div>

                        <div>
                            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C69D58]">
                                Response
                            </p>

                            <p className="mt-1 font-sans text-sm text-[#0D2461]/70">
                                Our team will get back to you
                            </p>
                        </div>
                    </div>

                </div>


                {/* =====================================================
                    RIGHT — IMAGE
                ===================================================== */}

                <div
                    className="
                        relative
                        min-h-[420px]
                        overflow-hidden
                        lg:min-h-[620px]
                    "
                >

                    <Image
                        src="/Plasticizers-2.jpg"
                        alt="Resol Industries customer care"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                            object-cover
                            object-center
                            transition-transform
                            duration-[1200ms]
                            hover:scale-[1.04]
                        "
                    />

                    {/* Dark subtle overlay */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#0D2461]/35
                            via-transparent
                            to-transparent
                        "
                    />

                    {/* Image Label */}
                    <div
                        className="
                            absolute
                            bottom-7
                            left-7
                            right-7
                            flex
                            items-end
                            justify-between
                            sm:bottom-10
                            sm:left-10
                            sm:right-10
                        "
                    >

                        <div>
                            <p
                                className="
                                    font-sans
                                    text-[10px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-white/70
                                "
                            >
                                Resol Industries Ltd.
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-serif
                                    text-2xl
                                    text-white
                                    sm:text-3xl
                                "
                            >
                                Customer Care
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    </>
    );
}