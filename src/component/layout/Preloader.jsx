"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
    const preloaderRef = useRef(null);
    const percentRef = useRef(null);
    const progressRef = useRef(null);
    const videoRef = useRef(null);

    // Keep the latest callback without re-running the main effect
    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        // The preloader is desktop-only (hidden md:flex), so on mobile
        // skip it immediately; otherwise `loading` never becomes false.
        if (window.matchMedia("(max-width: 767px)").matches) {
            onCompleteRef.current?.();
            return;
        }

        const preloader = preloaderRef.current;
        const percent = percentRef.current;
        const progress = progressRef.current;
        const video = videoRef.current;

        if (!preloader || !percent || !progress || !video) {
            onCompleteRef.current?.();
            return;
        }

        let completed = false;

        // VIDEO SPEED
        video.playbackRate = 5;

        // INITIAL STATE
        gsap.set(percent, { opacity: 0, y: 10 });
        gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

        // COUNTER ENTER
        gsap.to(percent, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
        });

        // VIDEO PROGRESS
        const updateProgress = () => {
            if (!video.duration || !isFinite(video.duration)) return;

            const percentage = Math.min(
                100,
                (video.currentTime / video.duration) * 100
            );

            percent.textContent = `${Math.round(percentage)}%`;
            gsap.set(progress, { scaleX: percentage / 100 });
        };

        // VIDEO COMPLETE
        const finishPreloader = () => {
            if (completed) return;
            completed = true;

            percent.textContent = "100%";

            gsap.to(progress, {
                scaleX: 1,
                duration: 0.2,
                ease: "power2.out",
            });

            gsap.to(percent, {
                opacity: 0,
                y: -8,
                duration: 0.35,
                delay: 0.25,
                ease: "power2.in",
            });

            gsap.to(preloader, {
                opacity: 0,
                duration: 0.8,
                delay: 0.35,
                ease: "power2.inOut",
                pointerEvents: "none",
                onComplete: () => {
                    onCompleteRef.current?.();
                },
            });
        };

        // VIDEO EVENTS
        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("ended", finishPreloader);
        video.addEventListener("error", finishPreloader);

        // START VIDEO
        const playVideo = async () => {
            try {
                video.playbackRate = 4;
                await video.play();
            } catch (error) {
                console.log("Video autoplay blocked:", error);
                finishPreloader();
            }
        };

        playVideo();

        // Safety net: never let the preloader block the site forever
        const fallbackTimer = setTimeout(finishPreloader, 15000);

        return () => {
            clearTimeout(fallbackTimer);
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("ended", finishPreloader);
            video.removeEventListener("error", finishPreloader);
        };
    }, []);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[99999] md:flex hidden h-screen w-screen items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#02050F" }}
        >
            {/* BACKGROUND VIDEO */}
            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/resol_2.mp4"
                muted
                playsInline
                preload="auto"
            />

            {/* OVERLAY */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(13, 36, 97, 0.15)" }}
            />

            {/* LOADER */}
            <div className="absolute bottom-[40px] left-1/2 w-[90%] -translate-x-1/2 md:bottom-[28px] md:w-[88%]">
                <div className="mb-1 flex items-center justify-between">
                    <span
                        className="md:text-[35px] font-medium uppercase tracking-[0.25em]"
                        style={{ color: "#FFFFFF" }}
                    >
                        Loading
                    </span>

                    <span
                        ref={percentRef}
                        className="md:text-[40px] font-medium tracking-[0.15em]"
                        style={{ color: "#fff" }}
                    >
                        0%
                    </span>
                </div>

                {/* PROGRESS BAR */}
                <div
                    className="relative h-[1.5px] w-full overflow-hidden"
                    style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
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