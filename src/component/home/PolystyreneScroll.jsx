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
        // DRAW FRAME
        // ============================================

        function drawFrame(index) {
            if (destroyed) return;

            const img = images[index];

            if (!img || !img.complete) return;

            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            if (!width || !height) return;

            ctx.clearRect(0, 0, width, height);

            const imageWidth = img.naturalWidth;
            const imageHeight = img.naturalHeight;

            if (!imageWidth || !imageHeight) return;

            const imageRatio = imageWidth / imageHeight;
            const canvasRatio = width / height;

            let drawWidth;
            let drawHeight;

            // ========================================
            // CONTAIN
            // Entire product stays visible
            // ========================================

            // ========================================
            // COVER
            // Full canvas width + height
            // ========================================

            if (imageRatio > canvasRatio) {
                drawHeight = height;
                drawWidth = height * imageRatio;
            } else {
                drawWidth = width;
                drawHeight = width / imageRatio;
            }

            const x = (width - drawWidth) / 2;
            const y = (height - drawHeight) / 2;

            ctx.drawImage(
                img,
                x,
                y,
                drawWidth,
                drawHeight
            );
        }

        // ============================================
        // CANVAS SIZE
        // ============================================

        function resizeCanvas() {
            if (destroyed) return;

            const rect = canvas.getBoundingClientRect();

            const width = Math.round(rect.width);
            const height = Math.round(rect.height);

            if (!width || !height) return;

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
        // LOAD FRAME
        // ============================================

        function loadFrame(index) {
            return new Promise((resolve) => {
                const img = new Image();

                img.onload = () => {
                    images[index] = img;

                    if (index === 0) {
                        drawFrame(0);
                    }

                    resolve();
                };

                img.onerror = () => {
                    console.error(
                        `FRAME NOT FOUND: /frames/ezgif-frame-${String(
                            index + 1
                        ).padStart(3, "0")}.jpg`
                    );

                    resolve();
                };

                img.src = `/frames/ezgif-frame-${String(
                    index + 1
                ).padStart(3, "0")}.jpg`;
            });
        }

        // ============================================
        // INITIAL FRAME
        // ============================================

        loadFrame(0).then(() => {
            if (destroyed) return;

            resizeCanvas();

            // ========================================
            // SCROLLTRIGGER
            // ========================================

            const trigger = ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: true,

                onUpdate: (self) => {
                    if (destroyed) return;

                    const frame = Math.floor(
                        self.progress * (FRAME_COUNT - 1)
                    );

                    if (
                        frame !== currentFrame &&
                        images[frame]
                    ) {
                        currentFrame = frame;

                        drawFrame(currentFrame);
                    }
                },
            });

            // ========================================
            // LOAD ALL FRAMES
            // ========================================

            for (
                let i = 1;
                i < FRAME_COUNT;
                i++
            ) {
                loadFrame(i);
            }

            ScrollTrigger.refresh();

            // Keep reference used for cleanup
            section._scrollTrigger = trigger;
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

            if (section._scrollTrigger) {
                section._scrollTrigger.kill();
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                h-[580vh]
                w-full
                bg-white
                
            "
        >
            {/* ==========================================
                STICKY SCREEN
            ========================================== */}

            <div
                className="
                    sticky
                    top-0
                    h-screen
                    w-full
                    overflow-hidden
                "
            >

                {/* ======================================
                    CANVAS
                    FULL BACKGROUND
                ====================================== */}

                <canvas
                    ref={canvasRef}
                    className="
                        absolute
                        inset-0
                        z-10
                        block
                        h-full
                        w-full
                    "
                />

                {/* ======================================
                    SUBTLE OVERLAY
                    Keeps text/cards readable
                ====================================== */}

                {/* <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-20
                        bg-white/[0.04]
                    "
                /> */}

                {/* ======================================
                    TOP HEADING
                ====================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-8
                        z-40
                        w-full
                        -translate-x-1/2
                        px-6
                        text-center
                        sm:px-10
                        lg:px-16
                    "
                >
                    {/* <h2
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
                    </h2> */}
                </div>

                {/* ======================================
                    DESKTOP CARDS
                ====================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-40
                        hidden
                        lg:block
                    "
                >

                    {/* ==================================
                        TOP LEFT
                    ================================== */}

                    {/* <div
                        className="
                            absolute
                            left-8
                            top-[14%]
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
                                Polypropylene is a lightweight
                                thermoplastic known for excellent
                                chemical resistance, processability
                                and a high melting point.
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
                    </div> */}

                    {/* ==================================
                        BOTTOM LEFT
                    ================================== */}

                    {/* <div
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
                    </div> */}

                    {/* ==================================
                        TOP RIGHT
                    ================================== */}

                    {/* <div
                        className="
                            absolute
                            right-8
                            top-[14%]
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

                                {[
                                    "Automotive",
                                    "Packaging",
                                    "Textiles",
                                    "Household Goods",
                                ].map((item) => (
                                    <span
                                        key={item}
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
                                        {item}
                                    </span>
                                ))}

                            </div>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    leading-6
                                    text-[#071a3d]/60
                                "
                            >
                                A versatile material used across
                                multiple industrial and consumer
                                applications.
                            </p>
                        </div>
                    </div> */}

                    {/* ==================================
                        BOTTOM RIGHT
                    ================================== */}

                    {/* <div
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
                                    <span
                                        className="
                                            text-sm
                                            font-bold
                                            text-[#c99618]
                                        "
                                    >
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
                                Designed for reliable processing,
                                mechanical strength and long-term
                                industrial performance.
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
                    </div> */}

                </div>

                {/* ======================================
                    MOBILE INFO
                ====================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-8
                        left-1/2
                        z-40
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
                            A lightweight thermoplastic with
                            excellent chemical resistance,
                            processability and thermal endurance.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}