"use client";

import React, {
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import {
    Swiper,
    SwiperSlide,
} from "swiper/react";

import {
    Navigation,
} from "swiper/modules";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import gsap from "gsap";

import "swiper/css";

const slides = [
    {
        type: "video",
        src: "/video/Home 2  cargozen.mp4",
        label: "Welcome to Resol",
        title: "Resol Industries Ltd",
        description:
            "Innovative solutions, reliable performance, and quality you can trust.",
    },
    {
        type: "image",
        src: "/12.jpeg",
        label: "Industrial Solutions",
        title: "Quality That Delivers",
        description:
            "Delivering quality materials and reliable solutions across industries.",
    },
];

export default function HeroSlider() {
    const heroRef = useRef(null);
    const swiperRef = useRef(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const panelsRef = useRef([]);
    const contentRef = useRef(null);

    const currentIndex = useRef(0);
    const autoplayTimer = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    /*
    =====================================================
    CLEAR TIMER
    =====================================================
    */

    const clearAutoTimer = () => {
        if (autoplayTimer.current) {
            clearTimeout(autoplayTimer.current);
            autoplayTimer.current = null;
        }
    };

    /*
    =====================================================
    AUTO NEXT
    =====================================================
    */

    const startAutoSlide = () => {
        clearAutoTimer();

        autoplayTimer.current = setTimeout(() => {
            if (
                swiperRef.current &&
                !swiperRef.current.destroyed
            ) {
                swiperRef.current.slideNext();
            }
        }, 3000);
    };

    /*
    =====================================================
    INITIAL ANIMATION
    =====================================================
    */

    useLayoutEffect(() => {
        const hero = heroRef.current;

        if (!hero) return;

        const ctx = gsap.context(() => {
            const panels =
                panelsRef.current.filter(Boolean);

            const content =
                contentRef.current;

            const label =
                content?.querySelector(".hero-label");

            const title =
                content?.querySelector(".hero-title");

            const description =
                content?.querySelector(
                    ".hero-description"
                );

            /*
            =============================================
            PANELS START ABOVE
            =============================================
            */

            gsap.set(panels, {
                yPercent: -110,
            });

            /*
            =============================================
            PANEL REVEAL
            =============================================
            */

            gsap.to(panels, {
                yPercent: 0,
                duration: 1.2,
                stagger: 0.12,
                ease: "power4.out",
            });

            /*
            =============================================
            TEXT
            =============================================
            */

            gsap.fromTo(
                [label, title, description],
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    delay: 0.65,
                    ease: "power3.out",
                }
            );

            /*
            =============================================
            START TIMER
            =============================================
            */

            gsap.delayedCall(2, () => {
                startAutoSlide();
            });
        }, hero);

        return () => {
            clearAutoTimer();
            ctx.revert();
        };
    }, []);

    /*
    =====================================================
    SLIDE CHANGE ANIMATION
    =====================================================
    */

    const animateSlide = (swiper) => {
        if (!swiper) return;

        const nextIndex = swiper.realIndex;

        if (
            nextIndex === currentIndex.current
        ) {
            return;
        }

        clearAutoTimer();

        const panels =
            panelsRef.current.filter(Boolean);

        const content =
            contentRef.current;

        if (!content || !panels.length) {
            currentIndex.current = nextIndex;
            setActiveIndex(nextIndex);
            startAutoSlide();
            return;
        }

        const label =
            content.querySelector(
                ".hero-label"
            );

        const title =
            content.querySelector(
                ".hero-title"
            );

        const description =
            content.querySelector(
                ".hero-description"
            );

        /*
        =============================================
        KILL OLD ANIMATIONS
        =============================================
        */

        gsap.killTweensOf(panels);

        gsap.killTweensOf([
            label,
            title,
            description,
        ]);

        /*
        =============================================
        UPDATE TEXT
        =============================================
        */

        const nextSlide =
            slides[nextIndex];

        label.textContent =
            nextSlide.label;

        title.textContent =
            nextSlide.title;

        description.textContent =
            nextSlide.description;

        /*
        =============================================
        NEW TIMELINE
        =============================================
        */

        const tl = gsap.timeline({
            onComplete: () => {
                currentIndex.current =
                    nextIndex;

                setActiveIndex(
                    nextIndex
                );

                startAutoSlide();
            },
        });

        /*
        =============================================
        1. HIDE TEXT
        =============================================
        */

        tl.to(
            [
                label,
                title,
                description,
            ],
            {
                y: 35,
                opacity: 0,
                duration: 0.3,
                stagger: 0.04,
                ease: "power2.in",
            },
            0
        );

        /*
        =============================================
        2. PANELS COME FROM TOP
        =============================================
        */

        tl.set(
            panels,
            {
                yPercent: -110,
            },
            0.25
        );

        /*
        =============================================
        3. PANEL REVEAL
        =============================================
        */

        tl.to(
            panels,
            {
                yPercent: 0,
                duration: 1.15,
                stagger: 0.12,
                ease: "power4.out",
            },
            0.35
        );

        /*
        =============================================
        4. SHOW NEW TEXT
        =============================================
        */

        tl.to(
            [
                label,
                title,
                description,
            ],
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.1,
                ease: "power3.out",
            },
            0.95
        );
    };

    /*
    =====================================================
    SWIPER INIT
    =====================================================
    */

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;

        if (
            prevRef.current &&
            nextRef.current
        ) {
            swiper.params.navigation.prevEl =
                prevRef.current;

            swiper.params.navigation.nextEl =
                nextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
        }
    };

    /*
    =====================================================
    SLIDE CHANGE
    =====================================================
    */

    const handleSlideChange = (swiper) => {
        animateSlide(swiper);
    };

    /*
    =====================================================
    PREVIOUS
    =====================================================
    */

    const handlePrevious = () => {
        if (!swiperRef.current) return;

        clearAutoTimer();

        swiperRef.current.slidePrev();
    };

    /*
    =====================================================
    NEXT
    =====================================================
    */

    const handleNext = () => {
        if (!swiperRef.current) return;

        clearAutoTimer();

        swiperRef.current.slideNext();
    };

    return (
        <section
            ref={heroRef}
            className="
                relative
                h-[100svh]
                min-h-[650px]
                w-full
                overflow-hidden
                bg-black
            "
        >
            {/* =========================================
                NORMAL SWIPER
            ========================================= */}

            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                speed={0}
                allowTouchMove={true}
                resistance={false}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
                className="
                    absolute
                    inset-0
                    z-0
                    h-full
                    w-full
                "
            >
                {/* =====================================
                    VIDEO SLIDE
                ===================================== */}

                <SwiperSlide className="relative h-full w-full">
                    <video
                        src="/video/Home 2  cargozen.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                        "
                    />

                    <div className="absolute inset-0 bg-black/40" />
                </SwiperSlide>

                {/* =====================================
                    IMAGE SLIDE
                ===================================== */}

                <SwiperSlide className="relative h-full w-full">
                    <img
                        src="/12.jpeg"
                        alt="Resol Industries"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                        "
                    />

                    <div className="absolute inset-0 bg-black/40" />
                </SwiperSlide>
            </Swiper>

            {/* =========================================
                SIX PANEL TRANSITION
                ONLY ANIMATION — NO MEDIA INSIDE
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    flex
                    overflow-hidden
                "
            >
                {[0, 1, 2, 3, 4, 5].map(
                    (index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                panelsRef.current[
                                    index
                                ] = el;
                            }}
                            className="
                                h-full
                                w-1/6
                                shrink-0
                                bg-black
                            "
                        />
                    )
                )}
            </div>

            {/* =========================================
                CONTENT
            ========================================= */}

            <div
                ref={contentRef}
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-40
                    flex
                    items-center
                    justify-center
                    px-6
                    pt-20
                    text-center
                    text-white
                "
            >
                <div className="max-w-5xl">

                    <p
                        className="
                            hero-label
                            mb-5
                            text-sm
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-white/80
                        "
                    >
                        Welcome to Resol
                    </p>

                    <h1
                        className="
                            hero-title
                            font-heading
                            text-5xl
                            font-semibold
                            uppercase
                            tracking-tight
                            sm:text-6xl
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Resol Industries Ltd
                    </h1>

                    <p
                        className="
                            hero-description
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-7
                            text-white/85
                            sm:text-lg
                            md:text-xl
                        "
                    >
                        Innovative solutions,
                        reliable performance,
                        and quality you can
                        trust.
                    </p>

                </div>
            </div>

            {/* =========================================
                PREVIOUS
            ========================================= */}

            <button
                ref={prevRef}
                type="button"
                onClick={handlePrevious}
                className="
                    group
                    absolute
                    left-5
                    top-1/2
                    z-60
                    flex
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/40
                    bg-black/10
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    sm:left-7
                    sm:h-14
                    sm:w-14
                    md:left-10
                "
                aria-label="Previous slide"
            >
                <ChevronLeft
                    size={25}
                    strokeWidth={1.5}
                    className="
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                    "
                />
            </button>

            {/* =========================================
                NEXT
            ========================================= */}

            <button
                ref={nextRef}
                type="button"
                onClick={handleNext}
                className="
                    group
                    absolute
                    right-5
                    top-1/2
                    z-60
                    flex
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/40
                    bg-black/10
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    sm:right-7
                    sm:h-14
                    sm:w-14
                    md:right-10
                "
                aria-label="Next slide"
            >
                <ChevronRight
                    size={25}
                    strokeWidth={1.5}
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
            </button>

            {/* =========================================
                COUNTER
            ========================================= */}

            <div
                className="
                    absolute
                    bottom-8
                    right-6
                    z-60
                    text-sm
                    tracking-[0.2em]
                    text-white/70
                    sm:right-8
                "
            >
                <span className="text-white">
                    {String(
                        activeIndex + 1
                    ).padStart(2, "0")}
                </span>

                <span className="mx-2">
                    /
                </span>

                <span>
                    {String(
                        slides.length
                    ).padStart(2, "0")}
                </span>
            </div>
        </section>
    );
}
