"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MetaBalls from "./MetaBalls";

export default function Preloader({ onComplete }) {
    const preloaderRef = useRef(null);
    const ballRef = useRef(null);
    const percentRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const preloader = preloaderRef.current;
        const ball = ballRef.current;
        const percent = percentRef.current;
        const progress = progressRef.current;

        if (!preloader || !ball || !percent || !progress) return;

        const counter = { value: 17 };

        const tl = gsap.timeline();

        // Initial state
        gsap.set(ball, {
            scale: 0.65,
            opacity: 0,
        });

        gsap.set(percent, {
            opacity: 0,
            y: 10,
        });

        gsap.set(progress, {
            scaleX: 0,
            transformOrigin: "left center",
        });

        // -----------------------------
        // BALL ENTER
        // -----------------------------

        tl.to(ball, {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
        });

        // -----------------------------
        // COUNTER ENTER
        // -----------------------------

        tl.to(
            percent,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            },
            "-=0.6"
        );

        // -----------------------------
        // LOADING PROGRESS
        // -----------------------------

        tl.to(
            counter,
            {
                value: 100,
                duration: 3.8,
                ease: "power2.inOut",

                onUpdate: () => {
                    const value = Math.round(counter.value);

                    percent.textContent = `${value}%`;

                    gsap.set(progress, {
                        scaleX: value / 100,
                    });
                },
            },
            "-=0.15"
        );

        // -----------------------------
        // SMALL BALL PULSE
        // -----------------------------

        tl.to(
            ball,
            {
                scale: 1.08,
                duration: 0.7,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1,
            },
            "-=0.6"
        );

        // -----------------------------
        // EXIT
        // -----------------------------

        tl.to(ball, {
            scale: 1.3,
            opacity: 0,
            duration: 0.7,
            ease: "power3.in",
        });

        tl.to(
            percent,
            {
                opacity: 0,
                y: -8,
                duration: 0.35,
            },
            "<"
        );

        tl.to(
            preloader,
            {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                pointerEvents: "none",

                onComplete: () => {
                    if (onComplete) onComplete();
                },
            },
            "-=0.15"
        );

        return () => {
            tl.kill();
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
            {/* CENTER METABALL */}
            <div
                ref={ballRef}
                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:h-full md:w-full"
            >
                <MetaBalls
                    color="#ffffff"
                    cursorBallColor="#ffffff"
                    cursorBallSize={4}
                    ballCount={20}
                    animationSize={46}
                    enableMouseInteraction
                    enableTransparency={true}
                    hoverSmoothness={0.25}
                    clumpFactor={2}
                    speed={0.3}
                />
            </div>

            {/* BOTTOM LOADER */}
            <div className="absolute bottom-[55px] left-1/2 w-[240px] -translate-x-1/2 md:bottom-[65px] md:w-[90%]">
                <div className="mb-3 flex items-center justify-between">
                    <span
                        className="text-[10px] font-medium uppercase tracking-[0.25em]"
                        style={{ color: "#FFFFFF" }}
                    >
                        Loading
                    </span>

                    <span
                        ref={percentRef}
                        className="text-[11px] font-medium tracking-[0.15em]"
                        style={{ color: "#FFFFFF" }}
                    >
                        17%
                    </span>
                </div>

                <div
                    className="relative h-[1px] w-full overflow-hidden"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.25)",
                    }}
                >
                    <div
                        ref={progressRef}
                        className="absolute left-0 top-0 h-full w-full"
                        style={{
                            backgroundColor: "#FFFFFF",
                            transform: "scaleX(0)",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}