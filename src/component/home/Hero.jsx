"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
    {
        type: "image",
        src: "/12.jpeg",
        title: "Industrial Solutions",
        description:
            "Delivering quality materials and reliable solutions across industries.",
    },
    {
        type: "video",
        src: "/video/Home 2  cargozen.mp4",
        title: "Resol Industries Ltd",
        description:
            "Innovative solutions, reliable performance, and quality you can trust.",
    },
];

export default function HeroSlider() {
    const imageSlideRef = useRef(null);
    const imageRef = useRef(null);
    const imageContentRef = useRef(null);

    useEffect(() => {
        const slide = imageSlideRef.current;
        const image = imageRef.current;

        if (!slide || !image) return;

        gsap.set(image, {
            scale: 1.15,
        });

        const tl = gsap.timeline();

        tl.to(image, {
            scale: 1,
            duration: 6,
            ease: "power2.out",
        })
            .fromTo(
                slide.querySelector(".slide-label"),
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=5.5"
            )
            .fromTo(
                slide.querySelector(".slide-title"),
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.45"
            )
            .fromTo(
                slide.querySelector(".slide-description"),
                {
                    y: 35,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.5"
            );

        return () => {
            tl.kill();
        };
    }, []);

    const animateImageSlide = () => {
        const image = imageRef.current;
        const content = imageContentRef.current;

        if (!image || !content) return;

        const label = content.querySelector(".slide-label");
        const title = content.querySelector(".slide-title");
        const description = content.querySelector(".slide-description");

        // Kill previous animations
        gsap.killTweensOf([
            image,
            label,
            title,
            description,
        ]);

        // Reset image
        gsap.set(image, {
            scale: 1,
        });

        // Reset text
        gsap.set(label, {
            y: 35,
            opacity: 0,
        });

        gsap.set(title, {
            y: 60,
            opacity: 0,
        });

        gsap.set(description, {
            y: 30,
            opacity: 0,
        });

        // Continuous image zoom
        gsap.to(image, {
            scale: 1.15,
            duration: 5,
            ease: "none",
        });

        // Text animation
        const tl = gsap.timeline();

        tl.to(label, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
        })
            .to(
                title,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                },
                "-=0.4"
            )
            .to(
                description,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.5"
            );
    };

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-black">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                speed={900}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChangeTransitionStart={(swiper) => {
                    setActiveIndex(swiper.realIndex);

                    if (swiper.realIndex === 1) {
                        animateImageSlide();
                    }
                }}
                className="h-full w-full"
            >
                {/* ================= SLIDE 1 - VIDEO ================= */}
                <SwiperSlide className="relative h-full w-full">
                    <video
                        src="/video/Home 2  cargozen.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Text */}
                    <div className="relative z-10 flex h-full items-center pt-20 justify-center px-6 text-center text-white">
                        <div className="max-w-5xl">
                            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/80">
                                Welcome to Resol Industry
                            </p>

                            <h1 className="font-heading text-5xl font-semibold uppercase tracki sm:text-6xl md:text-7xl lg:text-7xl">
                                Global Sourcing. Industrial Excellence.
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl">
                                Innovative solutions, reliable performance,
                                and quality you can trust.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* ================= SLIDE 2 - IMAGE ================= */}
                {/* <SwiperSlide className="relative h-full w-full overflow-hidden">

                    <img
                        ref={imageRef}
                        src="/12.jpeg"
                        alt="Resol Industries"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT 
                    <div
                        ref={imageContentRef}
                        className="
            relative
            z-10
            flex
            h-full
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
                    slide-label
                    mb-5
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-white/80
                "
                            >
                                Industrial Solutions
                            </p>

                            <h2
                                className="
                    slide-title
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
                                Quality That Delivers
                            </h2>

                            <p
                                className="
                    slide-description
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
                                Delivering quality materials and reliable
                                solutions across industries.
                            </p>

                        </div>
                    </div>

                </SwiperSlide> */}
            </Swiper>

            <button
                type="button"
                className="
                    hero-prev
                    absolute left-5 top-1/2 z-30
                    flex h-12 w-12 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/40
                    bg-black/20
                    text-white
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:bg-white
                    hover:text-black
                    sm:left-8
                    sm:h-14
                    sm:w-14
                "
                aria-label="Previous slide"
            >
                <ChevronLeft
                    size={26}
                    strokeWidth={1.5}
                />
            </button>

            {/* ================= NEXT ================= */}
            <button
                type="button"
                className="
                    hero-next
                    absolute right-5 top-1/2 z-30
                    flex h-12 w-12 -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/40
                    bg-black/20
                    text-white
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:bg-white
                    hover:text-black
                    sm:right-8
                    sm:h-14
                    sm:w-14
                "
                aria-label="Next slide"
            >
                <ChevronRight
                    size={26}
                    strokeWidth={1.5}
                />
            </button>

            {/* ================= COUNTER ================= */}
            {/* <div
                className="
                    absolute bottom-8 right-6 z-30
                    text-sm tracking-[0.2em]
                    text-white/70
                    sm:right-10
                "
            >
                <span className="text-white">
                    {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="mx-2">/</span>

                <span>
                    {String(slides.length).padStart(2, "0")}
                </span>
            </div> */}
        </section >
    );
}