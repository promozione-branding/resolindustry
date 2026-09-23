"use client";

import React, {
    useLayoutEffect,
    useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 236;

export default function FrameScrollAnimation({
    triggerRef,
}) {
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const trigger = triggerRef?.current;

        if (!canvas || !trigger) return;

        const ctx = canvas.getContext("2d", {
            alpha: false,
            desynchronized: true,
        });

        if (!ctx) return;

        const images = new Array(FRAME_COUNT);

        const frameState = {
            frame: 0,
        };

        let destroyed = false;
        let loaded = 0;

        // ==========================================
        // HIGH QUALITY CANVAS SETTINGS
        // ==========================================

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // ==========================================
        // DRAW FRAME
        // ==========================================

        const drawFrame = (frameIndex) => {
            if (destroyed) return;

            const img = images[frameIndex];

            if (!img) return;

            const rect = canvas.getBoundingClientRect();

            const cssWidth = rect.width;
            const cssHeight = rect.height;

            if (!cssWidth || !cssHeight) return;

            const dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            // Make sure canvas has enough physical pixels
            const pixelWidth = Math.round(
                cssWidth * dpr
            );

            const pixelHeight = Math.round(
                cssHeight * dpr
            );

            if (
                canvas.width !== pixelWidth ||
                canvas.height !== pixelHeight
            ) {
                canvas.width = pixelWidth;
                canvas.height = pixelHeight;
            }

            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

            ctx.clearRect(
                0,
                0,
                cssWidth,
                cssHeight
            );

            // ======================================
            // COVER CALCULATION
            // ======================================

            const imageRatio =
                img.naturalWidth /
                img.naturalHeight;

            const canvasRatio =
                cssWidth / cssHeight;

            let drawWidth;
            let drawHeight;
            let x;
            let y;

            if (imageRatio > canvasRatio) {
                // Image wider than canvas

                drawHeight = cssHeight;

                drawWidth =
                    cssHeight *
                    imageRatio;

                x =
                    (cssWidth -
                        drawWidth) /
                    2;

                y = 0;
            } else {
                // Image taller than canvas

                drawWidth = cssWidth;

                drawHeight =
                    cssWidth /
                    imageRatio;

                x = 0;

                y =
                    (cssHeight -
                        drawHeight) /
                    2;
            }

            // ======================================
            // DRAW
            // ======================================

            ctx.drawImage(
                img,
                x,
                y,
                drawWidth,
                drawHeight
            );
        };

        // ==========================================
        // LOAD ONE FRAME
        // ==========================================

        const loadFrame = (index) => {
            return new Promise((resolve) => {
                const img = new Image();

                img.decoding = "async";

                img.src =
                    `/frames/ezgif-frame-${String(
                        index + 1
                    ).padStart(3, "0")}.jpg`;

                img.onload = () => {
                    if (destroyed) {
                        resolve();
                        return;
                    }

                    images[index] = img;

                    loaded++;

                    // Show first frame immediately
                    if (index === 0) {
                        drawFrame(0);
                    }

                    resolve();
                };

                img.onerror = () => {
                    console.error(
                        `Frame failed: ${index + 1}`
                    );

                    resolve();
                };
            });
        };

        // ==========================================
        // PRELOAD FRAMES
        // ==========================================

        const loadFrames = async () => {
            // Load first frame first
            await loadFrame(0);

            if (destroyed) return;

            drawFrame(0);

            // Load remaining frames
            await Promise.all(
                Array.from(
                    { length: FRAME_COUNT - 1 },
                    (_, i) =>
                        loadFrame(i + 1)
                )
            );

            if (destroyed) return;

            console.log(
                `Loaded ${loaded}/${FRAME_COUNT} frames`
            );

            ScrollTrigger.refresh();
        };

        // ==========================================
        // RESIZE
        // ==========================================

        const handleResize = () => {
            drawFrame(
                Math.round(frameState.frame)
            );
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        // ==========================================
        // FRAME SCROLL
        // ==========================================

        const frameTween = gsap.to(
            frameState,
            {
                frame: FRAME_COUNT - 1,

                ease: "none",

                snap: {
                    frame: 1,
                },

                scrollTrigger: {
                    trigger: trigger,

                    start: "top top",

                    end: "bottom bottom",

                    scrub: 0.15,

                    invalidateOnRefresh: true,

                    // IMPORTANT:
                    // DO NOT PIN HERE
                },

                onUpdate: () => {
                    drawFrame(
                        Math.round(
                            frameState.frame
                        )
                    );
                },
            }
        );

        // ==========================================
        // START
        // ==========================================

        loadFrames();

        // ==========================================
        // CLEANUP
        // ==========================================

        return () => {
            destroyed = true;

            window.removeEventListener(
                "resize",
                handleResize
            );

            frameTween.scrollTrigger?.kill();
            frameTween.kill();

            images.forEach((img) => {
                if (img) {
                    img.src = "";
                }
            });
        };
    }, [triggerRef]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            <canvas
                ref={canvasRef}
                className="
                    block
                    h-full
                    w-full
                "
            />
        </div>
    );
}