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
        title: "Resol Industries Limited",
        description:
            "Innovative solutions, reliable performance, and quality you can trust.",
    },
];

export default function HeroSlider({ loading }) {
    const imageSlideRef = useRef(null);
    const imageRef = useRef(null);
    const imageContentRef = useRef(null);
    const [videoReady, setVideoReady] = useState(false);
    const [videoFailed, setVideoFailed] = useState(false);

    useEffect(() => {
        const v = imageRef.current;
        if (v && !v.paused && v.readyState >= 3) setVideoReady(true);
    }, []);
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

    const text = "Global Sourcing. Industrial Excellence.";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        // Don't start while preloader is visible
        if (loading) return;

        setDisplayText("");

        let index = 0;

        const interval = setInterval(() => {
            index++;

            setDisplayText(text.slice(0, index));

            if (index >= text.length) {
                clearInterval(interval);
            }
        }, 55);

        return () => clearInterval(interval);
    }, [loading]);

    return (
        <section className="relative w-full overflow-hidden bg-black md:h-[100svh] md:min-h-[650px] md:pt-0">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
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
                className="h-auto w-full md:h-full"
            >
                <SwiperSlide className="relative !h-auto md:!h-full">
                    <div className="relative aspect-[3/4] w-full md:absolute md:inset-0 md:aspect-auto">
                        {/* Fallback image: always rendered underneath */}
                        <img
                            src="/12.jpeg"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />

                        {!videoFailed && (
                            <video
                                ref={imageRef}
                                src="/video/WhatsApp Video 2026-10-14 at 10.37.29 AM.mp4"
                                poster="/12.jpeg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                onPlaying={() => setVideoReady(true)}
                                onError={() => setVideoFailed(true)}
                                onStalled={() => setVideoReady(false)}
                                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/45" />

                        {/* Text inside the video box on every screen size */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center text-white md:pt-20">
                            <div className="mx-auto max-w-5xl">
                                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 sm:text-xs md:mb-5 md:text-sm md:tracking-[0.35em]">
                                    Welcome to Resol Industries Limited
                                </p>

                                <h1 className="font-heading text-2xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
                                    {displayText}
                                    <span className="ml-1 inline-block animate-pulse">|</span>
                                </h1>

                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base md:mt-6 md:text-xl md:leading-7">
                                    Polymer innovations to meet the current requirements of industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}