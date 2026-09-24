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
                h-[580vh]
                w-full
                bg-[#fff]
            "
        >

            <div
                className="
                    sticky
                    top-0
                    h-screen
                    w-full
                    overflow-hidden
                "
            >
                <canvas
                    ref={canvasRef}
                    className="
                        absolute
                        inse
                        top-1/4
                        z-10
                        h-120
                        w-full overflow-hidden
                    "
                />


                {/* ==================================
    TOP HEADING
================================== */}
                <div
                    className="
        pointer-events-none
        absolute
        left-1/2
        top-8
        z-30
        w-full
        -translate-x-1/2
        px-6
        text-center
        sm:px-10
        lg:px-16
    "
                >
                    <h2
                        className="
            mx-auto
            max-w-[700px]
            text-3xl
            font-bold
            uppercase
            leading-[0.95]
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
    FOUR PRODUCT CARDS
================================== */}
                <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">

                    {/* ==================================
        TOP LEFT
    ================================== */}
                    <div
                        className="
            absolute
            left-8
            top-[8%]
            w-[280px]
            xl:left-14
            xl:w-[310px]
        "
                    >
                        <div
                            className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#071a3d]/10
                bg-white/90
                p-6
                shadow-[0_20px_60px_rgba(7,26,61,0.10)]
                backdrop-blur-xl
            "
                        >
                            {/* Accent */}
                            <div
                                className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-[#c99618]
                "
                            />

                            <span
                                className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#c99618]
                "
                            >
                                Material 01
                            </span>

                            <h3
                                className="
                    mt-2
                    text-xl
                    font-bold
                    uppercase
                    tracking-tight
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
                                Polypropylene is a lightweight thermoplastic
                                known for excellent chemical resistance,
                                processability and a high melting point.
                            </p>

                            <div className="mt-5 flex items-center gap-2">
                                <span
                                    className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#c99618]
                    "
                                />

                                <span
                                    className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#071a3d]/50
                    "
                                >
                                    Lightweight Thermoplastic
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
            absolute
            bottom-[8%]
            left-8
            w-[280px]
            xl:left-14
            xl:w-[310px]
        "
                    >
                        <div
                            className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#071a3d]/10
                bg-[#071a3d]
                p-6
                shadow-[0_20px_60px_rgba(7,26,61,0.16)]
            "
                        >
                            <span
                                className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#c99618]
                "
                            >
                                Key Properties
                            </span>

                            <div className="mt-5 space-y-3">

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/50">
                                        Chemical Resistance
                                    </span>

                                    <span className="text-xs font-semibold text-white">
                                        Excellent
                                    </span>
                                </div>

                                <div className="h-px bg-white/10" />

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/50">
                                        Processability
                                    </span>

                                    <span className="text-xs font-semibold text-white">
                                        High
                                    </span>
                                </div>

                                <div className="h-px bg-white/10" />

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/50">
                                        Thermal Endurance
                                    </span>

                                    <span className="text-xs font-semibold text-white">
                                        High
                                    </span>
                                </div>

                                <div className="h-px bg-white/10" />

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/50">
                                        Melting Point
                                    </span>

                                    <span className="text-xs font-semibold text-[#c99618]">
                                        High
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ==================================
        TOP RIGHT
    ================================== */}
                    <div
                        className="
            absolute
            right-8
            top-[8%]
            w-[280px]
            xl:right-14
            xl:w-[310px]
        "
                    >
                        <div
                            className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#071a3d]/10
                bg-white/90
                p-6
                shadow-[0_20px_60px_rgba(7,26,61,0.10)]
                backdrop-blur-xl
            "
                        >
                            <span
                                className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#c99618]
                "
                            >
                                Applications
                            </span>

                            <div className="mt-5 flex flex-wrap gap-2">

                                <span
                                    className="
                        rounded-full
                        border
                        border-[#071a3d]/10
                        bg-[#071a3d]/[0.03]
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                    "
                                >
                                    Automotive
                                </span>

                                <span
                                    className="
                        rounded-full
                        border
                        border-[#071a3d]/10
                        bg-[#071a3d]/[0.03]
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                    "
                                >
                                    Packaging
                                </span>

                                <span
                                    className="
                        rounded-full
                        border
                        border-[#071a3d]/10
                        bg-[#071a3d]/[0.03]
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                    "
                                >
                                    Textiles
                                </span>

                                <span
                                    className="
                        rounded-full
                        border
                        border-[#071a3d]/10
                        bg-[#071a3d]/[0.03]
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#071a3d]
                    "
                                >
                                    Household Goods
                                </span>

                            </div>

                            <p
                                className="
                    mt-5
                    text-sm
                    leading-6
                    text-[#071a3d]/60
                "
                            >
                                A versatile material used across multiple
                                industrial and consumer applications.
                            </p>
                        </div>
                    </div>


                    {/* ==================================
        BOTTOM RIGHT
    ================================== */}
                    <div
                        className="
            absolute
            bottom-[8%]
            right-8
            w-[280px]
            xl:right-14
            xl:w-[310px]
        "
                    >
                        <div
                            className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#071a3d]/10
                bg-white/90
                p-6
                shadow-[0_20px_60px_rgba(7,26,61,0.10)]
                backdrop-blur-xl
            "
                        >
                            <div className="flex items-start justify-between">

                                <div>
                                    <span
                                        className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#c99618]
                        "
                                    >
                                        Product Grade
                                    </span>

                                    <h3
                                        className="
                            mt-2
                            text-2xl
                            font-bold
                            text-[#071a3d]
                        "
                                    >
                                        25 KG
                                    </h3>
                                </div>

                                <div
                                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#c99618]/10
                    "
                                >
                                    <span className="text-sm font-bold text-[#c99618]">
                                        PP
                                    </span>
                                </div>

                            </div>

                            <p
                                className="
                    mt-4
                    text-sm
                    leading-6
                    text-[#071a3d]/60
                "
                            >
                                Designed for reliable processing, mechanical
                                strength and long-term industrial performance.
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-3">

                                <div
                                    className="
                        rounded-xl
                        bg-[#071a3d]/[0.04]
                        p-3
                    "
                                >
                                    <span
                                        className="
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-[#071a3d]/40
                        "
                                    >
                                        Strength
                                    </span>

                                    <span
                                        className="
                            mt-1
                            block
                            text-xs
                            font-bold
                            text-[#071a3d]
                        "
                                    >
                                        High
                                    </span>
                                </div>

                                <div
                                    className="
                        rounded-xl
                        bg-[#071a3d]/[0.04]
                        p-3
                    "
                                >
                                    <span
                                        className="
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-[#071a3d]/40
                        "
                                    >
                                        Endurance
                                    </span>

                                    <span
                                        className="
                            mt-1
                            block
                            text-xs
                            font-bold
                            text-[#071a3d]
                        "
                                    >
                                        Thermal
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                {/* ==================================
    MOBILE PRODUCT INFO
================================== */}
                <div
                    className="
        pointer-events-none
        absolute
        bottom-20
        left-1/2
        z-30
        w-[calc(100%-2rem)]
        max-w-[420px]
        -translate-x-1/2
        lg:hidden
    "
                >
                    <div
                        className="
            rounded-[24px]
            border
            border-[#071a3d]/10
            bg-white/90
            p-5
            shadow-xl
            backdrop-blur-xl
        "
                    >
                        <span
                            className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#c99618]
            "
                        >
                            Polypropylene · 25 KG
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
                mt-2
                text-xs
                leading-5
                text-[#071a3d]/60
            "
                        >
                            A lightweight thermoplastic with excellent
                            chemical resistance, processability and
                            thermal endurance.
                        </p>
                    </div>
                </div>


                {/* ==================================
    BOTTOM PROCESS LABELS
================================== */}
                <div
                    className="
        pointer-events-none
        absolute
        bottom-8
        left-1/2
        z-30
        flex
        -translate-x-1/2
        gap-2
        sm:gap-3
    "
                >
                    <span
                        className="
            rounded-full
            border
            border-[#071a3d]/20
            bg-white/90
            px-3
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-[#071a3d]
            backdrop-blur
            sm:px-4
        "
                    >
                        Fill
                    </span>

                    <span
                        className="
            rounded-full
            border
            border-[#071a3d]/20
            bg-white/90
            px-3
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-[#071a3d]
            backdrop-blur
            sm:px-4
        "
                    >
                        Expand
                    </span>

                    <span
                        className="
            rounded-full
            border
            border-[#071a3d]/20
            bg-white/90
            px-3
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-[#071a3d]
            backdrop-blur
            sm:px-4
        "
                    >
                        Pack
                    </span>
                </div>

            </div>
        </section>
    );
}