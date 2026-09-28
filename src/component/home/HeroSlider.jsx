"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

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
    const swiperRef = useRef(null);
    const heroRef = useRef(null);

    const piecesRef = useRef([]);
    const contentRef = useRef(null);

    const currentIndex = useRef(0);
    const isAnimating = useRef(false);

    useLayoutEffect(() => {
        const hero = heroRef.current;

        if (!hero) return;

        const ctx = gsap.context(() => {
            const pieces = piecesRef.current.filter(Boolean);

            // Initial panels position
            gsap.set(pieces, {
                yPercent: -110,
            });

            // Initial image animation
            gsap.to(pieces, {
                yPercent: 0,
                duration: 1.25,
                stagger: 0.12,
                ease: "power4.out",
            });

            // Initial text animation
            gsap.fromTo(
                contentRef.current.children,
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    delay: 0.7,
                    ease: "power3.out",
                }
            );
        }, hero);

        return () => ctx.revert();
    }, []);

    const animateSlide = (swiper) => {
        if (!swiper || isAnimating.current) return;

        const nextIndex = swiper.realIndex;

        if (nextIndex === currentIndex.current) return;

        isAnimating.current = true;

        const nextSlide = slides[nextIndex];

        const pieces = piecesRef.current.filter(Boolean);
        const content = contentRef.current;

        if (!content) {
            isAnimating.current = false;
            return;
        }

        const label = content.querySelector(".hero-label");
        const title = content.querySelector(".hero-title");
        const description = content.querySelector(".hero-description");

        // ==========================================
        // SET NEXT IMAGE
        // ==========================================

        pieces.forEach((piece, index) => {
            const image = piece.querySelector(".piece-image");

            if (!image) return;

            image.style.backgroundImage = `url("${nextSlide.image}")`;
            image.style.left = `${index * -100}%`;
        });

        // ==========================================
        // GSAP TIMELINE
        // ==========================================

        const tl = gsap.timeline({
            onComplete: () => {
                currentIndex.current = nextIndex;
                isAnimating.current = false;
            },
        });

        // ==========================================
        // TEXT OUT
        // ==========================================

        tl.to(
            [label, title, description],
            {
                y: 35,
                opacity: 0,
                duration: 0.35,
                stagger: 0.04,
                ease: "power2.in",
            },
            0
        );

        // ==========================================
        // RESET PANELS
        // ==========================================

        tl.set(
            pieces,
            {
                yPercent: -110,
            },
            0.32
        );

        // ==========================================
        // SIX PANELS ENTER
        // ==========================================

        tl.to(
            pieces,
            {
                yPercent: 0,
                duration: 1.15,
                stagger: {
                    each: 0.12,
                },
                ease: "power4.out",
            },
            0.38
        );

        // ==========================================
        // UPDATE TEXT
        // ==========================================

        tl.set(
            label,
            {
                textContent: "Welcome to",
            },
            1.05
        );

        tl.set(
            title,
            {
                textContent: nextSlide.title,
            },
            1.05
        );

        tl.set(
            description,
            {
                textContent: nextSlide.description,
            },
            1.05
        );

        // ==========================================
        // TEXT IN
        // ==========================================

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

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
    };

    const handleSlideChange = (swiper) => {
        animateSlide(swiper);
    };

    return (
        <section
            ref={heroRef}
            className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-black"
        >
            {/* ================================================
                SWIPER
            ================================================= */}

            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                loop={true}
                speed={0}
                allowTouchMove={true}
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
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

            {/* ================================================
                WHITE BACKGROUND
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 z-[1] bg-white" />

            {/* ================================================
                DARK OVERLAY
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 z-20 bg-black/20" />

            {/* ================================================
                SIX IMAGE PANELS
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 z-[25] flex">
                {[0, 1, 2, 3, 4, 5].map((item) => (
                    <div
                        key={item}
                        ref={(el) => {
                            piecesRef.current[item] = el;
                        }}
                        className="hero-piece relative h-full w-1/6 overflow-hidden"
                    >
                        <div
                            className="piece-image absolute top-0 h-full w-[600%] max-w-none bg-cover bg-center"
                            style={{
                                backgroundImage: `url("${slides[0].image}")`,
                                left: `${item * -100}%`,
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* ================================================
                CENTER CONTENT
            ================================================= */}

            <div
                ref={contentRef}
                className="pointer-events-none absolute inset-0 z-[50] flex items-center justify-center px-6 text-center text-white"
            >
                <div className="max-w-5xl">
                    <p className="hero-label mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/80">
                        Welcome to
                    </p>

                    <h1 className="hero-title text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Resol Industries Ltd
                    </h1>

                    <p className="hero-description mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl">
                        Innovative solutions, reliable performance, and
                        quality you can trust.
                    </p>
                </div>
            </div>

            {/* ================================================
                PREVIOUS BUTTON
            ================================================= */}

            <button
                type="button"
                className="hero-prev group absolute left-6 top-1/2 z-[60] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:left-10"
                aria-label="Previous slide"
            >
                <ChevronLeft
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                />
            </button>

            {/* ================================================
                NEXT BUTTON
            ================================================= */}

            <button
                type="button"
                className="hero-next group absolute right-6 top-1/2 z-[60] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:right-10"
                aria-label="Next slide"
            >
                <ChevronRight
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </button>

            {/* ================================================
                SLIDE NUMBER
            ================================================= */}

            <div className="absolute bottom-8 right-8 z-[60] text-sm tracking-[0.2em] text-white/70">
                <span className="text-white">
                    {String(currentIndex.current + 1).padStart(2, "0")}
                </span>

                <span className="mx-2">/</span>

                <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
        </section>
    );
}