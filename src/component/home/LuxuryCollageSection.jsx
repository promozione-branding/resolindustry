"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   IMAGES
========================================================= */

const images = {
    outerLeft: [
        "/polymer-raw-materials-image-800x600-1.webp",
        "/product/2.png",
    ],

    innerLeft: [
        "/product/3.png",
        "/product/4.png",
    ],

    innerRight: [
        "/product/1.png",
        "/product/2.png",
    ],

    outerRight: [
        "/product/3.png",
        "/product/4.png",
    ],

    center: "/product/5.webp",
};


/* =========================================================
   GALLERY IMAGE
========================================================= */

function GalleryImage({
    src,
    imageRef,
    className = "",
}) {
    return (
        <div
            ref={imageRef}
            className={`
                absolute
                overflow-hidden
                ${className}
            `}
        >
            <Image
                src={src}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
            />
        </div>
    );
}


/* =========================================================
   MAIN
========================================================= */

export default function HotelLuxSection() {

    const sectionRef = useRef(null);

    /* =====================================================
       SIDE IMAGE REFS
    ===================================================== */

    const outerLeft1Ref = useRef(null);
    const outerLeft2Ref = useRef(null);

    const innerLeft1Ref = useRef(null);
    const innerLeft2Ref = useRef(null);

    const innerRight1Ref = useRef(null);
    const innerRight2Ref = useRef(null);

    const outerRight1Ref = useRef(null);
    const outerRight2Ref = useRef(null);


    /* =====================================================
       CENTER IMAGE
    ===================================================== */

    const centerImageRef = useRef(null);
    const centerMaskRef = useRef(null);


    /* =====================================================
       TEXT
    ===================================================== */

    const textRef = useRef(null);
    const exploreRef = useRef(null);
    const hotelRef = useRef(null);
    const relaxRef = useRef(null);
    const arrowRef = useRef(null);


    /* =========================================================
       GSAP
    ========================================================= */

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            /* =================================================
               INITIAL SIDE IMAGE POSITIONS

               IMPORTANT:

               Images start ABOVE the final grid.

               Scroll ↓
               Images move DOWN ↓
            ================================================= */

            gsap.set(outerLeft1Ref.current, {
                y: "-105vh",
            });

            gsap.set(outerLeft2Ref.current, {
                y: "-105vh",
            });


            gsap.set(innerLeft1Ref.current, {
                y: "-72vh",
            });

            gsap.set(innerLeft2Ref.current, {
                y: "-72vh",
            });


            gsap.set(innerRight1Ref.current, {
                y: "-72vh",
            });

            gsap.set(innerRight2Ref.current, {
                y: "-72vh",
            });


            gsap.set(outerRight1Ref.current, {
                y: "-105vh",
            });

            gsap.set(outerRight2Ref.current, {
                y: "-105vh",
            });


            /* =================================================
               CENTER IMAGE

               Center is anchored at bottom.

               The MASK stays fixed.

               Only image inside the mask moves upward.

               This means the bottom of the center image
               remains visually locked to the bottom.
            ================================================= */

            gsap.set(centerImageRef.current, {
                yPercent: 100,
            });


            /* =================================================
               TEXT
            ================================================= */

            gsap.set(textRef.current, {
                opacity: 1,
                y: 0,
            });

            gsap.set(exploreRef.current, {
                y: 0,
            });

            gsap.set(hotelRef.current, {
                y: 0,
            });

            gsap.set(relaxRef.current, {
                y: 0,
            });

            gsap.set(arrowRef.current, {
                opacity: 1,
                y: 0,
            });


            /* =================================================
               MASTER TIMELINE
            ================================================= */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,

                    start: "top top",

                    /*
                     * Increase/decrease this if you want
                     * faster/slower animation.
                     */
                    end: "+=1700",

                    scrub: 1,

                    pin: true,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,
                },
            });


            /* =================================================
               OUTER LEFT
               TOP → DOWN
            ================================================= */

            tl.to(
                outerLeft1Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );

            tl.to(
                outerLeft2Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );


            /* =================================================
               INNER LEFT
               TOP → DOWN
            ================================================= */

            tl.to(
                innerLeft1Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );

            tl.to(
                innerLeft2Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );


            /* =================================================
               INNER RIGHT
               TOP → DOWN
            ================================================= */

            tl.to(
                innerRight1Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );

            tl.to(
                innerRight2Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );


            /* =================================================
               OUTER RIGHT
               TOP → DOWN
            ================================================= */

            tl.to(
                outerRight1Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );

            tl.to(
                outerRight2Ref.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "none",
                },
                0
            );


            /* =================================================
               CENTER IMAGE

               BOTTOM ANCHORED

               Starts below mask
                       ↓
                       ↓
                       ↓
               Reveals upward
            ================================================= */

            tl.to(
                centerImageRef.current,
                {
                    yPercent: 0,
                    duration: 1,
                    ease: "none",
                },
                0.12
            );


            /* =================================================
               TEXT FADE

               Keep typography visible during beginning
               of animation.

               Then fade it behind the gallery.
            ================================================= */

            tl.to(
                textRef.current,
                {
                    opacity: 0,
                    duration: 0.22,
                    ease: "none",
                },
                0.48
            );


            /* =================================================
               EXPLORE TEXT
            ================================================= */

            tl.to(
                exploreRef.current,
                {
                    y: 35,
                    duration: 0.22,
                    ease: "none",
                },
                0.42
            );


            /* =================================================
               MAIN TITLE
            ================================================= */

            tl.to(
                hotelRef.current,
                {
                    y: 55,
                    duration: 0.22,
                    ease: "none",
                },
                0.42
            );


            /* =================================================
               SECOND TITLE
            ================================================= */

            tl.to(
                relaxRef.current,
                {
                    y: 70,
                    duration: 0.22,
                    ease: "none",
                },
                0.42
            );


            /* =================================================
               ARROW
            ================================================= */

            tl.to(
                arrowRef.current,
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.16,
                    ease: "none",
                },
                0.40
            );


            /* =================================================
               REFRESH
            ================================================= */

            ScrollTrigger.refresh();

        }, sectionRef);


        return () => ctx.revert();

    }, []);


    /* =========================================================
       JSX
    ========================================================= */

    return (
        <div className="w-full">

            <section
                ref={sectionRef}
                className="
                    relative
                    h-screen
                    w-full
                    overflow-hidden
                    bg-[#F4F3F0]
                "
            >

                {/* =================================================
                    BACKGROUND
                ================================================= */}

                <div className="pointer-events-none absolute inset-0">

                    {/* White soft light */}

                    <div
                        className="
                            absolute
                            left-[15%]
                            top-[0%]
                            h-[75vh]
                            w-[48vw]
                            rounded-full
                            bg-white
                            opacity-70
                            blur-[110px]
                        "
                    />

                    {/* Light golden glow */}

                    <div
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            h-[55vh]
                            w-[32vw]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-[#D6B27A]/10
                            blur-[110px]
                        "
                    />

                </div>


                {/* =================================================
                    GALLERY
                ================================================= */}

                <div
                    className="
                        absolute
                        inset-0
                        z-[5]
                    "
                >

                    {/* =================================================
                        OUTER LEFT — ROW 1
                    ================================================= */}

                    <GalleryImage
                        src={images.outerLeft[0]}
                        imageRef={outerLeft1Ref}
                        className="
                            left-[1.3%]
                            top-[9.2%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        OUTER LEFT — ROW 2
                    ================================================= */}

                    <GalleryImage
                        src={images.outerLeft[1]}
                        imageRef={outerLeft2Ref}
                        className="
                            left-[1.3%]
                            top-[52%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        INNER LEFT — ROW 1
                    ================================================= */}

                    <GalleryImage
                        src={images.innerLeft[0]}
                        imageRef={innerLeft1Ref}
                        className="
                            left-[19.25%]
                            top-[9.2%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        INNER LEFT — ROW 2
                    ================================================= */}

                    <GalleryImage
                        src={images.innerLeft[1]}
                        imageRef={innerLeft2Ref}
                        className="
                            left-[19.25%]
                            top-[52%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        CENTER IMAGE

                        IMPORTANT:

                        The OUTER MASK is permanently attached
                        to the bottom of the viewport.

                        The image itself moves upward inside it.
                    ================================================= */}

                    <div
                        ref={centerMaskRef}
                        className="
                            absolute
                            bottom-0
                            left-[37.1%]
                            z-[10]
                            h-[84vh]
                            w-[25.6%]
                            overflow-hidden
                        "
                    >

                        <div
                            ref={centerImageRef}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                            "
                        >

                            <Image
                                src={images.center}
                                alt=""
                                fill
                                priority
                                sizes="26vw"
                                className="
                                    object-cover
                                    object-top
                                "
                            />

                        </div>

                    </div>


                    {/* =================================================
                        INNER RIGHT — ROW 1
                    ================================================= */}

                    <GalleryImage
                        src={images.innerRight[0]}
                        imageRef={innerRight1Ref}
                        className="
                            right-[19.25%]
                            top-[9.2%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        INNER RIGHT — ROW 2
                    ================================================= */}

                    <GalleryImage
                        src={images.innerRight[1]}
                        imageRef={innerRight2Ref}
                        className="
                            right-[19.25%]
                            top-[52%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        OUTER RIGHT — ROW 1
                    ================================================= */}

                    <GalleryImage
                        src={images.outerRight[0]}
                        imageRef={outerRight1Ref}
                        className="
                            right-[1.3%]
                            top-[9.2%]
                            aspect-square
                            w-[16.4%]
                        "
                    />


                    {/* =================================================
                        OUTER RIGHT — ROW 2
                    ================================================= */}

                    <GalleryImage
                        src={images.outerRight[1]}
                        imageRef={outerRight2Ref}
                        className="
                            right-[1.3%]
                            top-[52%]
                            aspect-square
                            w-[16.4%]
                        "
                    />

                </div>


                {/* =================================================
                    CENTER TYPOGRAPHY
                ================================================= */}

                <div
                    ref={textRef}
                    className="
                        absolute
                        left-1/2
                        top-[29%]
                        z-[30]
                        flex
                        w-[75%]
                        -translate-x-1/2
                        flex-col
                        items-center
                        text-center
                    "
                >

                    {/* =================================================
                        LABEL
                    ================================================= */}

                    <div
                        ref={exploreRef}
                        className="mb-5"
                    >

                        <span
                            className="
                                font-sans
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.35em]
                                text-[#D6B27A]
                                sm:text-[12px]
                            "
                        >
                            Explore our categories
                        </span>

                    </div>


                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h1
                        ref={hotelRef}
                        className="
                            m-0
                            whitespace-nowrap
                            font-serif
                            text-[10vw]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-[#0d2461]
                            sm:text-[7vw]
                        "
                    >
                        Resol Industries Ltd
                    </h1>


                    {/* =================================================
                        SECOND TITLE
                    ================================================= */}

                    <h2
                        ref={relaxRef}
                        className="
                            m-0
                            mt-[0.5vw]
                            font-serif
                            text-[10vw]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-[#0d2461]
                            sm:text-[6vw]
                        "
                    >
                        RIL
                    </h2>


                    {/* =================================================
                        GOLD ARROW
                    ================================================= */}

                    <div
                        ref={arrowRef}
                        className="
                            mt-8
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-[#D6B27A]
                        "
                    >

                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                        >
                            <path
                                d="M6 9l6 6 6-6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>

                </div>

            </section>

        </div>
    );
}