"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 236;

export default function FrameScrollAnimation() {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;

        if (!section || !canvas) return;

        const ctx = canvas.getContext("2d");

        const images = [];
        const frameData = {
            frame: 0,
        };

        let loadedCount = 0;
        let animationReady = false;

        // ------------------------------------
        // LOAD ALL FRAMES
        // ------------------------------------

        const loadFrame = (index) => {
            return new Promise((resolve) => {
                const img = new Image();

                img.src = `/frames/ezgif-frame-${String(index + 1).padStart(
                    3,
                    "0"
                )}.jpg`;

                img.onload = () => {
                    images[index] = img;
                    loadedCount++;

                    if (loadedCount === FRAME_COUNT) {
                        animationReady = true;
                        drawFrame(0);
                    }

                    resolve();
                };

                img.onerror = () => {
                    console.error(`Failed to load frame ${index + 1}`);
                    resolve();
                };
            });
        };

        // ------------------------------------
        // LOAD FRAMES
        // ------------------------------------

        Promise.all(
            Array.from({ length: FRAME_COUNT }, (_, index) =>
                loadFrame(index)
            )
        );

        // ------------------------------------
        // CANVAS RESIZE
        // ------------------------------------

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (animationReady) {
                drawFrame(Math.round(frameData.frame));
            }
        };

        // ------------------------------------
        // DRAW FRAME
        // ------------------------------------

        function drawFrame(index) {
            if (!images[index]) return;

            const img = images[index];

            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            if (!width || !height) return;

            ctx.clearRect(0, 0, width, height);

            // Cover image like CSS object-fit: cover
            const imageRatio = img.width / img.height;
            const canvasRatio = width / height;

            let drawWidth;
            let drawHeight;
            let offsetX;
            let offsetY;

            if (imageRatio > canvasRatio) {
                drawHeight = height;
                drawWidth = height * imageRatio;

                offsetX = (width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = width;
                drawHeight = width / imageRatio;

                offsetX = 0;
                offsetY = (height - drawHeight) / 2;
            }

            ctx.drawImage(
                img,
                offsetX,
                offsetY,
                drawWidth,
                drawHeight
            );
        }

        // ------------------------------------
        // RESIZE
        // ------------------------------------

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        // ------------------------------------
        // SCROLL ANIMATION
        // ------------------------------------

        const ctxAnimation = gsap.to(frameData, {
            frame: FRAME_COUNT - 1,

            ease: "none",

            snap: {
                frame: 1,
            },

            scrollTrigger: {
                trigger: section,

                start: "top top",

                end: "+=700%",

                scrub: 0.5,

                pin: true,

                anticipatePin: 1,

                invalidateOnRefresh: true,
            },

            onUpdate: () => {
                drawFrame(Math.round(frameData.frame));
            },
        });

        // ------------------------------------
        // CLEANUP
        // ------------------------------------

        return () => {
            window.removeEventListener("resize", resizeCanvas);

            ctxAnimation.scrollTrigger?.kill();
            ctxAnimation.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen overflow-hidden bg-black"
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
            />
        </section>
    );
}