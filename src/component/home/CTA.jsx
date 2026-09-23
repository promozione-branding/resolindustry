"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import {
    MessageCircle,
    Phone,
    ArrowUpRight,
    ArrowDown,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CustomerCareCTA() {

    /* =========================================================
       HERO REFS
    ========================================================= */

    const heroRef = useRef(null);
    const heroBgRef = useRef(null);
    const heroOverlayRef = useRef(null);

    const heroLabelRef = useRef(null);
    const bellRef = useRef(null);
    const titleRef = useRef(null);
    const downButtonRef = useRef(null);

    /* =========================================================
       SECOND SECTION REFS
    ========================================================= */

    const careSectionRef = useRef(null);
    const contentRef = useRef(null);

    const smallLabelRef = useRef(null);
    const secondHeadingRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const infoRef = useRef(null);

    const imageWrapperRef = useRef(null);
    const secondImageRef = useRef(null);
    const imageLabelRef = useRef(null);


    /* =========================================================
       GSAP
    ========================================================= */

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            /* =====================================================
               HERO INITIAL STATE
            ===================================================== */

            /*
             * IMPORTANT:
             *
             * Customer Care is NOT hidden anymore.
             *
             * It starts from the left and scroll brings
             * it into the center.
             */

            gsap.set(titleRef.current, {
                x: "-42vw",
                y: 0,
                opacity: 1,
            });


            /*
             * Bell starts normally.
             */

            gsap.set(bellRef.current, {
                y: 0,
                scale: 1,
                opacity: 1,
                rotation: 0,
            });


            /*
             * Label visible.
             */

            gsap.set(heroLabelRef.current, {
                y: 0,
                opacity: 1,
            });


            /*
             * Button visible.
             */

            gsap.set(downButtonRef.current, {
                y: 0,
                scale: 1,
                opacity: 1,
            });


            /*
             * Background.
             */

            gsap.set(heroBgRef.current, {
                scale: 1.12,
                yPercent: -3,
            });


            /* =====================================================
               HERO MASTER SCROLL
            ===================================================== */

            const heroScroll = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,

                    /*
                     * IMPORTANT:
                     *
                     * Starts immediately when the hero
                     * reaches the top.
                     */

                    start: "top top",

                    /*
                     * We don't wait until the bottom.
                     *
                     * Customer Care reaches center during
                     * the FIRST HALF of the hero.
                     */

                    end: "55% top",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });


            /* =====================================================
               CUSTOMER CARE
            ===================================================== */

            heroScroll.to(
                titleRef.current,
                {
                    x: 0,
                    y: -15,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 0.5,
                },
                0
            );


            /* =====================================================
               BELL
            ===================================================== */

            heroScroll.to(
                bellRef.current,
                {
                    y: -55,
                    scale: 1.03,
                    rotation: 2,
                    ease: "none",
                    duration: 1,
                },
                0
            );


            /* =====================================================
               LABEL
            ===================================================== */

            heroScroll.to(
                heroLabelRef.current,
                {
                    y: -45,
                    opacity: 0.35,
                    ease: "none",
                    duration: 1,
                },
                0
            );


            /* =====================================================
               BUTTON
            ===================================================== */

            heroScroll.to(
                downButtonRef.current,
                {
                    y: -30,
                    opacity: 0.4,
                    scale: 0.9,
                    ease: "none",
                    duration: 1,
                },
                0
            );


            /* =====================================================
               BACKGROUND PARALLAX
            ===================================================== */

            gsap.to(heroBgRef.current, {
                yPercent: 12,
                scale: 1.2,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "top top",
                    end: "bottom top",

                    scrub: 1.2,

                    invalidateOnRefresh: true,
                },
            });


            /* =====================================================
               OVERLAY
            ===================================================== */

            gsap.to(heroOverlayRef.current, {
                opacity: 0.72,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "top top",
                    end: "bottom top",

                    scrub: 1,
                },
            });


            /* =====================================================
               HERO EXIT

               After Customer Care reaches center, it slowly
               moves upward instead of waiting until the end.
            ===================================================== */

            gsap.to(titleRef.current, {
                y: -100,
                opacity: 0.2,

                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,

                    start: "50% top",
                    end: "bottom top",

                    scrub: 1,
                },
            });


            /* =====================================================
               SECOND SECTION INITIAL STATE
            ===================================================== */

            gsap.set(smallLabelRef.current, {
                y: 25,
                opacity: 0,
            });


            gsap.set(secondHeadingRef.current, {
                y: 60,
                opacity: 0,
            });


            gsap.set(descriptionRef.current, {
                y: 35,
                opacity: 0,
            });


            gsap.set(buttonsRef.current?.children || [], {
                y: 25,
                opacity: 0,
            });


            gsap.set(infoRef.current, {
                y: 25,
                opacity: 0,
            });


            /* =====================================================
               SECOND IMAGE INITIAL
            ===================================================== */

            gsap.set(imageWrapperRef.current, {
                clipPath: "inset(0 0 100% 0)",
            });


            gsap.set(secondImageRef.current, {
                scale: 1.15,
                yPercent: -5,
            });


            gsap.set(imageLabelRef.current, {
                y: 25,
                opacity: 0,
            });


            /* =====================================================
               SECOND SECTION REVEAL
            ===================================================== */

            const secondTl = gsap.timeline({
                scrollTrigger: {
                    trigger: careSectionRef.current,

                    /*
                     * Start VERY EARLY.
                     */

                    start: "top 90%",

                    /*
                     * Finish before section reaches
                     * the center of viewport.
                     */

                    end: "top 35%",

                    scrub: 1,

                    invalidateOnRefresh: true,
                },
            });


            /* IMAGE */

            secondTl.to(
                imageWrapperRef.current,
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "power3.out",
                    duration: 1,
                },
                0
            );


            /* LABEL */

            secondTl.to(
                smallLabelRef.current,
                {
                    y: 0,
                    opacity: 1,
                    ease: "power3.out",
                    duration: 0.5,
                },
                0.05
            );


            /* HEADING */

            secondTl.to(
                secondHeadingRef.current,
                {
                    y: 0,
                    opacity: 1,
                    ease: "power3.out",
                    duration: 0.75,
                },
                0.12
            );


            /* DESCRIPTION */

            secondTl.to(
                descriptionRef.current,
                {
                    y: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 0.55,
                },
                0.28
            );


            /* BUTTONS */

            secondTl.to(
                buttonsRef.current?.children || [],
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    ease: "power3.out",
                    duration: 0.45,
                },
                0.38
            );


            /* INFO */

            secondTl.to(
                infoRef.current,
                {
                    y: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 0.45,
                },
                0.52
            );


            /* IMAGE LABEL */

            secondTl.to(
                imageLabelRef.current,
                {
                    y: 0,
                    opacity: 1,
                    ease: "power3.out",
                    duration: 0.45,
                },
                0.48
            );


            /* =====================================================
               SECOND IMAGE PARALLAX
            ===================================================== */

            gsap.to(secondImageRef.current, {
                scale: 1.05,
                yPercent: 7,

                ease: "none",

                scrollTrigger: {
                    trigger: careSectionRef.current,

                    start: "top bottom",
                    end: "bottom top",

                    scrub: 1.2,

                    invalidateOnRefresh: true,
                },
            });


            /* =====================================================
               SECOND CONTENT PARALLAX
            ===================================================== */

            gsap.fromTo(
                contentRef.current,

                {
                    y: 25,
                },

                {
                    y: -20,

                    ease: "none",

                    scrollTrigger: {
                        trigger: careSectionRef.current,

                        start: "top bottom",
                        end: "bottom top",

                        scrub: 1.5,
                    },
                }
            );


            /* =====================================================
               REFRESH
            ===================================================== */

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

        }, heroRef);


        return () => {
            ctx.revert();
        };

    }, []);


    /* =========================================================
       SCROLL BUTTON
    ========================================================= */

    const scrollToCare = () => {
        careSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    /* =========================================================
       RETURN
    ========================================================= */

    return (
        <>
            {/* =====================================================
                HERO
            ===================================================== */}

            <section
                ref={heroRef}
                className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#0d2461]
                "
            >

                <div
                    className="
                        relative
                        min-h-[720px]
                        w-full
                        sm:min-h-[780px]
                        lg:min-h-screen
                    "
                >

                    {/* =================================================
                        BACKGROUND
                    ================================================= */}

                    <div
                        ref={heroBgRef}
                        className="
                            absolute
                            -inset-[8%]
                            will-change-transform
                        "
                    >

                        <Image
                            src="/industrial-port-container-yard_1112-1200.avif"
                            alt="Resol Industries customer care"
                            fill
                            priority
                            sizes="100vw"
                            className="
                                object-cover
                                object-center
                            "
                        />

                    </div>


                    {/* =================================================
                        OVERLAY
                    ================================================= */}

                    <div
                        ref={heroOverlayRef}
                        className="
                            absolute
                            inset-0
                            bg-black/55
                        "
                    />


                    <div
                        className="
                            absolute
                            inset-0
                            bg-[#0d2461]/20
                            mix-blend-multiply
                        "
                    />


                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div
                        className="
                            relative
                            z-10
                            flex
                            min-h-[720px]
                            flex-col
                            items-center
                            justify-center
                            overflow-visible
                            px-5
                            text-center
                            sm:min-h-[780px]
                            lg:min-h-screen
                        "
                    >

                        {/* LABEL */}

                        <span
                            ref={heroLabelRef}
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
                            BELL
                        ================================================= */}

                        <div
                            ref={bellRef}
                            className="
                                relative
                                z-20
                                h-[190px]
                                w-[250px]
                                will-change-transform
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
                                    drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]
                                "
                            />

                        </div>


                        {/* =================================================
                            CUSTOMER CARE
                        ================================================= */}

                        <div
                            className="
                                relative
                                z-10
                                w-full
                                overflow-visible
                            "
                        >

                            <h1
                                ref={titleRef}
                                className="
                                    relative
                                    -mt-2
                                    whitespace-nowrap
                                    font-serif
                                    text-[16vw]
                                    font-normal
                                    leading-[0.8]
                                    tracking-[-0.055em]
                                    text-white
                                    will-change-transform
                                    sm:text-[13vw]
                                    md:text-[12vw]
                                    lg:text-[10vw]
                                    xl:text-[145px]
                                "
                            >
                                Customer Care
                            </h1>

                        </div>


                        {/* =================================================
                            DOWN BUTTON
                        ================================================= */}

                        <button
                            ref={downButtonRef}
                            type="button"
                            onClick={scrollToCare}
                            aria-label="Scroll to customer care information"
                            className="
                                group
                                mt-10
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#D6B27A]/80
                                bg-[#D6B27A]
                                text-white
                                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
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


                    {/* BOTTOM GRADIENT */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            bottom-0
                            left-0
                            z-[5]
                            h-40
                            w-full
                            bg-gradient-to-t
                            from-[#0d2461]/70
                            to-transparent
                        "
                    />

                </div>

            </section>


            {/* =====================================================
                SECOND SECTION
            ===================================================== */}

            {/* <section
                ref={careSectionRef}
                className="
                    relative
                    w-full
                    overflow-hidden
                    bg-[#F4F3F0]
                "
            >

                <div
                    className="
                        mx-auto
                        grid
                        min-h-[650px]
                        w-full
                        max-w-[1600px]
                        grid-cols-1
                        lg:grid-cols-2
                    "
                >

                    
                    <div
                        ref={contentRef}
                        className="
                            relative
                            z-10
                            flex
                            flex-col
                            justify-center
                            px-6
                            py-20
                            will-change-transform
                            sm:px-10
                            md:px-14
                            lg:px-20
                            xl:px-24
                        "
                    >


                        <span
                            ref={smallLabelRef}
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



                        <h2
                            ref={secondHeadingRef}
                            className="
                                max-w-[650px]
                                font-serif
                                text-[46px]
                                font-normal
                                leading-[0.95]
                                tracking-[-0.045em]
                                text-[#0D2461]
                                sm:text-[60px]
                                md:text-[70px]
                                lg:text-[72px]
                                xl:text-[84px]
                            "
                        >
                            Let&apos;s talk about
                            <br />
                            your requirements.
                        </h2>


                        <p
                            ref={descriptionRef}
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


                        

                        <div
                            ref={buttonsRef}
                            className="
                                mt-9
                                flex
                                flex-wrap
                                gap-3
                                sm:gap-4
                            "
                        >

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
                                    hover:-translate-y-1
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
                                    hover:-translate-y-1
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
                                    hover:-translate-y-1
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


                       
                        <div
                            ref={infoRef}
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-x-10
                                gap-y-4
                                border-t
                                border-[#0D2461]/10
                                pt-6
                            "
                        >

                            <div>

                                <p
                                    className="
                                        font-sans
                                        text-[10px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#C69D58]
                                    "
                                >
                                    Headquarters
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-sans
                                        text-sm
                                        text-[#0D2461]/70
                                    "
                                >
                                    New Delhi, India
                                </p>

                            </div>


                            <div>

                                <p
                                    className="
                                        font-sans
                                        text-[10px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#C69D58]
                                    "
                                >
                                    Response
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-sans
                                        text-sm
                                        text-[#0D2461]/70
                                    "
                                >
                                    Our team will get back to you
                                </p>

                            </div>

                        </div>

                    </div>


                   

                    <div
                        ref={imageWrapperRef}
                        className="
                            relative
                            min-h-[460px]
                            overflow-hidden
                            will-change-[clip-path]
                            lg:min-h-[650px]
                        "
                    >

                        <div
                            ref={secondImageRef}
                            className="
                                absolute
                                -inset-[8%]
                                will-change-transform
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
                                "
                            />

                        </div>


                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#0D2461]/60
                                via-[#0D2461]/5
                                to-transparent
                            "
                        />


                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-[18px]
                                border
                                border-white/10
                            "
                        />


                        <div
                            ref={imageLabelRef}
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
                                        mt-2
                                        font-serif
                                        text-2xl
                                        tracking-[-0.02em]
                                        text-white
                                        sm:text-3xl
                                    "
                                >
                                    Customer Care
                                </p>

                            </div>


                            <span
                                className="
                                    hidden
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/30
                                    bg-white/10
                                    text-white
                                    backdrop-blur-md
                                    sm:flex
                                "
                            >

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.5}
                                />

                            </span>

                        </div>

                    </div>

                </div>

            </section> */}
        </>
    );
}