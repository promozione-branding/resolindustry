"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

import "swiper/css";

const slides = [
    {
        image: "/home-bg-11.jpg.jpeg",
        title: "Resol Industries Ltd",
        description:
            "Innovative solutions, reliable performance, and quality you can trust.",
    },
    {
        image: "/02_header-1.jpg",
        title: "Resol Industries Ltd",
        description:
            "Building better solutions through technology, quality, and expertise.",
    },
];

export default function HeroSlider() {
    const heroRef = useRef(null);
    const swiperRef = useRef(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const piecesRef = useRef([]);
    const contentRef = useRef(null);

    const currentIndex = useRef(0);
    const isAnimating = useRef(false);

    const autoplayTimer = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    /*
    =====================================================
    CLEAR AUTO TIMER
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
    START NEXT SLIDE TIMER
    =====================================================
    */

    const startAutoSlide = () => {
        clearAutoTimer();

        /*
         * This is the waiting time AFTER the zoom finishes.
         *
         * 2000 = 2 seconds
         * 3000 = 3 seconds
         * 5000 = 5 seconds
         */

        autoplayTimer.current = setTimeout(() => {
            if (swiperRef.current && !swiperRef.current.destroyed) {
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
            const pieces = piecesRef.current.filter(Boolean);

            const images = pieces
                .map((piece) =>
                    piece.querySelector(".piece-image")
                )
                .filter(Boolean);

            /*
             * Panels start above screen
             */

            gsap.set(pieces, {
                yPercent: -110,
            });

            /*
             * Strong initial zoom
             */

            gsap.set(images, {
                scale: 1.18,
            });

            /*
             * Panels reveal
             */

            gsap.to(pieces, {
                yPercent: 0,
                duration: 1.2,
                stagger: 0.12,
                ease: "power4.out",
            });

            /*
             * Zoom from 1.18 -> 1
             */

            gsap.to(images, {
                scale: 1,
                duration: 2.5,
                delay: 0.15,
                ease: "power2.out",
            });

            /*
             * Slow cinematic zoom
             *
             * 1 -> 1.12
             */

            gsap.to(images, {
                scale: 1.12,
                duration: 6,
                delay: 2.65,
                ease: "none",
                onComplete: () => {
                    /*
                     * IMPORTANT:
                     *
                     * Zoom is now finished.
                     *
                     * Wait 3 seconds and then
                     * automatically move to next slide.
                     */

                    startAutoSlide();
                },
            });

            /*
             * Text animation
             */

            const contentElements =
                contentRef.current?.querySelectorAll(
                    ".hero-label, .hero-title, .hero-description"
                );

            if (contentElements?.length) {
                gsap.fromTo(
                    contentElements,
                    {
                        y: 40,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        delay: 0.7,
                        ease: "power3.out",
                    }
                );
            }
        }, hero);

        return () => {
            clearAutoTimer();
            ctx.revert();
        };
    }, []);

    /*
    =====================================================
    SLIDE ANIMATION
    =====================================================
    */

    const animateSlide = (swiper) => {
        if (!swiper) return;

        const nextIndex = swiper.realIndex;

        if (nextIndex === currentIndex.current) {
            return;
        }

        clearAutoTimer();

        const nextSlide = slides[nextIndex];

        const pieces = piecesRef.current.filter(Boolean);

        const images = pieces
            .map((piece) =>
                piece.querySelector(".piece-image")
            )
            .filter(Boolean);

        const content = contentRef.current;

        if (!content || !pieces.length) {
            currentIndex.current = nextIndex;
            setActiveIndex(nextIndex);

            startAutoSlide();

            return;
        }

        const label = content.querySelector(".hero-label");
        const title = content.querySelector(".hero-title");
        const description = content.querySelector(
            ".hero-description"
        );

        /*
         * Stop old GSAP animations
         */

        gsap.killTweensOf(pieces);
        gsap.killTweensOf(images);
        gsap.killTweensOf([
            label,
            title,
            description,
        ]);

        /*
         * Change image
         */

        pieces.forEach((piece, index) => {
            const image =
                piece.querySelector(".piece-image");

            if (!image) return;

            image.style.backgroundImage = `url("${nextSlide.image}")`;

            image.style.left = `${index * -100}%`;
        });

        /*
         * Update text
         */

        label.textContent = "Welcome to";
        title.textContent = nextSlide.title;
        description.textContent =
            nextSlide.description;

        isAnimating.current = true;

        /*
         * New timeline
         */

        const tl = gsap.timeline({
            onComplete: () => {
                currentIndex.current = nextIndex;

                setActiveIndex(nextIndex);

                isAnimating.current = false;

                /*
                 * VERY IMPORTANT:
                 *
                 * Start waiting only after
                 * the complete zoom animation.
                 */

                startAutoSlide();
            },
        });

        /*
        ================================================
        HIDE TEXT
        ================================================
        */

        tl.to(
            [label, title, description],
            {
                y: 30,
                opacity: 0,
                duration: 0.3,
                stagger: 0.04,
                ease: "power2.in",
            },
            0
        );

        /*
        ================================================
        PANELS BACK TO TOP
        ================================================
        */

        tl.set(
            pieces,
            {
                yPercent: -110,
            },
            0.3
        );

        /*
        ================================================
        RESET IMAGE ZOOM
        ================================================
        */

        tl.set(
            images,
            {
                scale: 1.20,
            },
            0.3
        );

        /*
        ================================================
        SIX PANELS REVEAL
        ================================================
        */

        tl.to(
            pieces,
            {
                yPercent: 0,
                duration: 1.15,
                stagger: 0.12,
                ease: "power4.out",
            },
            0.38
        );

        /*
        ================================================
        ZOOM OUT
        ================================================
        */

        tl.to(
            images,
            {
                scale: 1,
                duration: 2.5,
                ease: "power2.out",
            },
            0.4
        );

        /*
        ================================================
        CINEMATIC ZOOM
        ================================================
        
        1 -> 1.12
        
        Increase 1.12 to 1.15 or 1.18
        if you want even more zoom.
        */

        tl.to(
            images,
            {
                scale: 1.12,
                duration: 6,
                ease: "none",
            },
            2.9
        );

        /*
        ================================================
        SHOW TEXT
        ================================================
        */

        tl.to(
            [label, title, description],
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.1,
                ease: "power3.out",
            },
            1.1
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
            swiper.params.navigation &&
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
    SWIPER SLIDE CHANGE
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
            className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-black"
        >
            {/* =========================================
                SWIPER
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
                className="absolute inset-0 z-0 h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative h-full w-full"
                    />
                ))}
            </Swiper>

            {/* =========================================
                BASE
            ========================================= */}

            <div className="pointer-events-none absolute inset-0 z-[1] bg-black" />

            {/* =========================================
                SIX PANELS
            ========================================= */}

            <div className="pointer-events-none absolute inset-0 z-[20] flex">
                {[0, 1, 2, 3, 4, 5].map(
                    (index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                piecesRef.current[index] =
                                    el;
                            }}
                            className="hero-piece relative h-full w-1/6 overflow-hidden"
                        >
                            <div
                                className="piece-image absolute top-0 h-full w-[600%] max-w-none bg-cover bg-center will-change-transform"
                                style={{
                                    backgroundImage: `url("${slides[0].image}")`,
                                    left: `${index * -100}%`,
                                    transform:
                                        "scale(1.18)",
                                }}
                            />
                        </div>
                    )
                )}
            </div>

            {/* =========================================
                OVERLAY
            ========================================= */}

            <div className="pointer-events-none absolute inset-0 z-[30] bg-black/20" />

            {/* =========================================
                CONTENT
            ========================================= */}

            <div
                ref={contentRef}
                className="pointer-events-none absolute inset-0 z-[40] flex items-center justify-center px-6 text-center text-white"
            >
                <div className="max-w-5xl">
                    <p className="hero-label mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/80">
                        Welcome to
                    </p>

                    <h1 className="hero-title text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Resol Industries Ltd
                    </h1>

                    <p className="hero-description mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl">
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
                className="hero-prev group absolute left-5 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:left-7 sm:h-14 sm:w-14 md:left-10"
                aria-label="Previous slide"
            >
                <ChevronLeft
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                />
            </button>

            {/* =========================================
                NEXT
            ========================================= */}

            <button
                ref={nextRef}
                type="button"
                onClick={handleNext}
                className="hero-next group absolute right-5 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:right-7 sm:h-14 sm:w-14 md:right-10"
                aria-label="Next slide"
            >
                <ChevronRight
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </button>

            {/* =========================================
                COUNTER
            ========================================= */}

            <div className="absolute bottom-8 right-6 z-[60] text-sm tracking-[0.2em] text-white/70 sm:right-8">
                <span className="text-white">
                    {String(activeIndex + 1).padStart(
                        2,
                        "0"
                    )}
                </span>

                <span className="mx-2">/</span>

                <span>
                    {String(slides.length).padStart(
                        2,
                        "0"
                    )}
                </span>
            </div>
        </section>
    );
}