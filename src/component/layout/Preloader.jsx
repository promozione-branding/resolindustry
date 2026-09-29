"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
    const preloaderRef = useRef(null);
    const percentRef = useRef(null);
    const progressRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const preloader = preloaderRef.current;
        const percent = percentRef.current;
        const progress = progressRef.current;
        const video = videoRef.current;

        if (!preloader || !percent || !progress || !video) return;

        let completed = false;

        // --------------------------------
        // INITIAL STATE
        // --------------------------------

        gsap.set(percent, {
            opacity: 0,
            y: 10,
        });

        gsap.set(progress, {
            scaleX: 0,
            transformOrigin: "left center",
        });

        // --------------------------------
        // COUNTER ENTER
        // --------------------------------

        gsap.to(percent, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
        });

        // --------------------------------
        // VIDEO PROGRESS
        // --------------------------------

        const updateProgress = () => {
            if (!video.duration || !isFinite(video.duration)) return;

            const percentage = Math.min(
                100,
                (video.currentTime / video.duration) * 100
            );

            percent.textContent = `${Math.round(percentage)}%`;

            gsap.set(progress, {
                scaleX: percentage / 100,
            });
        };

        // --------------------------------
        // VIDEO COMPLETE
        // --------------------------------

        const finishPreloader = () => {
            if (completed) return;

            completed = true;

            percent.textContent = "100%";

            gsap.to(progress, {
                scaleX: 1,
                duration: 0.2,
            });

            // Percentage exit
            gsap.to(percent, {
                opacity: 0,
                y: -8,
                duration: 0.35,
                delay: 0.25,
                ease: "power2.in",
            });

            // Preloader exit
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.8,
                delay: 0.35,
                ease: "power2.inOut",
                pointerEvents: "none",

                onComplete: () => {
                    if (onComplete) {
                        onComplete();
                    }
                },
            });
        };

        // --------------------------------
        // VIDEO EVENTS
        // --------------------------------

        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("ended", finishPreloader);

        // --------------------------------
        // START VIDEO
        // --------------------------------

        const playVideo = async () => {
            try {
                await video.play();
            } catch (error) {
                console.log("Video autoplay blocked:", error);

                finishPreloader();
            }
        };

        playVideo();

        return () => {
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("ended", finishPreloader);
        };
    }, [onComplete]);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center overflow-hidden"
            style={{
                backgroundColor: "#0D2461",
            }}
        >
            {/* =====================================
                FULLSCREEN BACKGROUND VIDEO
            ====================================== */}

            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/loader.mp4"
                muted
                playsInline
                preload="auto"
            />

            {/* =====================================
                VIDEO OVERLAY
            ====================================== */}

            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: "rgba(13, 36, 97, 0.15)",
                }}
            />

            {/* =====================================
                BOTTOM LOADER
            ====================================== */}

            <div className="absolute bottom-[55px] left-1/2 w-[240px] -translate-x-1/2 md:bottom-[65px] md:w-[90%]">
                <div className="mb-3 flex items-center justify-between">
                    <span
                        className="text-[10px] font-medium uppercase tracking-[0.25em]"
                        style={{
                            color: "#FFFFFF",
                        }}
                    >
                        Loading
                    </span>

                    <span
                        ref={percentRef}
                        className="text-[11px] font-medium tracking-[0.15em]"
                        style={{
                            color: "#FFFFFF",
                        }}
                    >
                        0%
                    </span>
                </div>

                {/* PROGRESS BAR */}

                <div
                    className="relative h-[1px] w-full overflow-hidden"
                    style={{
                        backgroundColor:
                            "rgba(255,255,255,0.35)",
                    }}
                >
                    <div
                        ref={progressRef}
                        className="absolute left-0 top-0 h-full w-full"
                        style={{
                            backgroundColor: "#FFFFFF",
                            transform: "scaleX(0)",
                            transformOrigin: "left center",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
