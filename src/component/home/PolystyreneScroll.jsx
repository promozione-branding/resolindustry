"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 236;

export default function PolystyreneScroll() {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;

        if (!section || !canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const images = [];
        let currentFrame = 0;
        let destroyed = false;

        // ============================================
        // CANVAS SIZE
        // ============================================

        function resizeCanvas() {
            if (destroyed) return;

            const rect = canvas.getBoundingClientRect();

            const width = Math.round(rect.width);
            const height = Math.round(rect.height);

            const dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";

            drawFrame(currentFrame);
        }

        // ============================================
        // DRAW FRAME
        // ============================================

        function drawFrame(index) {
            if (destroyed) return;

            const img = images[index];

            if (!img || !img.complete) return;

            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            if (!width || !height) return;

            ctx.clearRect(
                0,
                0,
                width,
                height
            );

            // ========================================
            // CONTAIN
            // Keeps entire product visible
            // ========================================

            const imageWidth = img.naturalWidth;
            const imageHeight = img.naturalHeight;

            const imageRatio =
                imageWidth / imageHeight;

            const canvasRatio =
                width / height;

            let drawWidth;
            let drawHeight;

            if (imageRatio > canvasRatio) {
                drawWidth = width;
                drawHeight =
                    width / imageRatio;
            } else {
                drawHeight = height;
                drawWidth =
                    height * imageRatio;
            }

            const x =
                (width - drawWidth) / 2;

            const y =
                (height - drawHeight) / 2;

            ctx.drawImage(
                img,
                x,
                y,
                drawWidth,
                drawHeight
            );
        }

        // ============================================
        // LOAD FRAMES
        // ============================================

        function loadFrame(index) {
            return new Promise((resolve) => {
                const img = new Image();

                img.onload = () => {
                    images[index] = img;

                    // Show first frame immediately
                    if (index === 0) {
                        drawFrame(0);
                    }

                    resolve();
                };

                img.onerror = () => {
                    console.error(
                        `❌ FRAME NOT FOUND: ${img.src
                        }`
                    );

                    resolve();
                };

                img.src =
                    `/frames/ezgif-frame-${String(
                        index + 1
                    ).padStart(3, "0")}.jpg`;
            });
        }

        // ============================================
        // LOAD FIRST FRAME
        // ============================================

        loadFrame(0).then(() => {
            if (destroyed) return;

            resizeCanvas();

            // ========================================
            // SCROLLTRIGGER
            // ========================================

            ScrollTrigger.create({
                trigger: section,

                start: "top top",

                end: "bottom bottom",

                scrub: true,

                onUpdate: (self) => {
                    if (destroyed) return;

                    const frame = Math.floor(
                        self.progress *
                        (FRAME_COUNT - 1)
                    );

                    if (
                        frame !== currentFrame &&
                        images[frame]
                    ) {
                        currentFrame = frame;

                        drawFrame(
                            currentFrame
                        );
                    }
                },
            });

            // ========================================
            // LOAD REMAINING FRAMES
            // ========================================

            for (
                let i = 1;
                i < FRAME_COUNT;
                i++
            ) {
                loadFrame(i);
            }

            ScrollTrigger.refresh();
        });

        // ============================================
        // RESIZE
        // ============================================

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        // ============================================
        // CLEANUP
        // ============================================

        return () => {
            destroyed = true;

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            ScrollTrigger.getAll().forEach(
                (trigger) => {
                    if (
                        trigger.trigger === section
                    ) {
                        trigger.kill();
                    }
                }
            );
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                h-[700vh]
                w-full
                bg-[#f5f5f2]
            "
        >
            {/* ======================================
                STICKY SCREEN
            ====================================== */}

            <div
                className="
                    sticky
                    top-0
                    h-screen
                    w-full
                    overflow-hidden
                "
            >
                {/* ==================================
                    BACKGROUND
                ================================== */}

                <div className="absolute inset-0">

                    <div
                        className="
                            absolute
                            inset-0
                            opacity-[0.06]
                        "
                        style={{
                            backgroundImage:
                                `
                                linear-gradient(
                                    #111 1px,
                                    transparent 1px
                                ),
                                linear-gradient(
                                    90deg,
                                    #111 1px,
                                    transparent 1px
                                )
                                `,
                            backgroundSize:
                                "50px 50px",
                        }}
                    />

                    <div
                        className="
                            absolute
                            left-[-200px]
                            top-1/2
                            h-[500px]
                            w-[500px]
                            -translate-y-1/2
                            rounded-full
                            bg-[#c99618]/10
                            blur-[100px]
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-[-100px]
                            right-[-200px]
                            h-[500px]
                            w-[500px]
                            rounded-full
                            bg-[#071a3d]/10
                            blur-[100px]
                        "
                    />
                </div>

                {/* ==================================
                    CANVAS
                ================================== */}

                <canvas
                    ref={canvasRef}
                    className="
                        absolute
                        inse
                        top-1/4
                        z-10
                        h-100
                        w-full overflow-hidden
                    "
                />

                {/* ==================================
                    TOP CONTENT
                ================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-6
                        top-8
                        z-30
                        sm:left-10
                        lg:left-16
                    "
                >
                    <p
                        className="
                            mb-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-[#c99618]
                        "
                    >
                        Manufacturing Process
                    </p>

                    <h2
                        className="
                            max-w-[600px]
                            text-3xl
                            font-bold
                            uppercase
                            leading-tight
                            text-[#071a3d]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        From Raw Material
                        <br />
                        To Packed Product
                    </h2>
                </div>

                {/* ==================================
                    RIGHT INFO
                ================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-6
                        top-1/2
                        z-30
                        hidden
                        -translate-y-1/2
                        lg:block
                    "
                >
                    <div
                        className="
                            w-[220px]
                            border-l
                            border-[#071a3d]/20
                            pl-6
                        "
                    >
                        <span
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#c99618]
                            "
                        >
                            25 KG
                        </span>

                        <h3
                            className="
                                mt-2
                                text-xl
                                font-bold
                                uppercase
                                text-[#071a3d]
                            "
                        >
                            Polypropylene
                        </h3>

                        <p
                            className="
                                mt-3
                                text-sm
                                leading-6
                                text-[#071a3d]/60
                            "
                        >
                            Carefully filled,
                            expanded and packed
                            for industrial
                            applications.
                        </p>
                    </div>
                </div>

                {/* ==================================
                    BOTTOM LABELS
                ================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-8
                        left-6
                        z-30
                        flex
                        gap-3
                        sm:left-10
                        lg:left-16
                    "
                >
                    <span className="
                        rounded-full
                        border
                        border-[#071a3d]/20
                        bg-white/80
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                        backdrop-blur
                    ">
                        Fill
                    </span>

                    <span className="
                        rounded-full
                        border
                        border-[#071a3d]/20
                        bg-white/80
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                        backdrop-blur
                    ">
                        Expand
                    </span>

                    <span className="
                        rounded-full
                        border
                        border-[#071a3d]/20
                        bg-white/80
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                        backdrop-blur
                    ">
                        Pack
                    </span>
                </div>
            </div>
        </section>
    );
}