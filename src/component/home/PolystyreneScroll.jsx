"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Package,
    CheckCircle2,
    Settings2,
    ShieldCheck,
    Workflow,
    Thermometer,
    Flame,
    Boxes,
    Car,
    Shirt,
    Home,
    Scale,
    Dumbbell,
    Gauge,
} from "lucide-react";

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
                    {/* =====================================================
                LEFT TOP — MATERIAL
            ====================================================== */}
                    <div
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
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-5
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                        >
                            {/* Pointer */}
                            <div
                                className="
                            absolute
                            -right-16
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                            >
                                <div className="h-[2px] w-14 bg-[#0d2461]/50" />

                                <div
                                    className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                                />
                            </div>

                            <div className="flex items-center gap-3">

                                <div
                                    className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                                >
                                    <Package
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>

                                <div>
                                    <span
                                        className="
                                    text-[9px]
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
                                    mt-1
                                    text-lg
                                    font-bold
                                    uppercase
                                    tracking-tight
                                    text-[#0d2461]
                                "
                                    >
                                        Polypropylene
                                    </h3>
                                </div>

                            </div>

                            <p
                                className="
                            mt-4
                            text-[13px]
                            leading-6
                            text-[#0d2461]/75
                        "
                            >
                                Polypropylene is a lightweight thermoplastic
                                known for excellent chemical resistance,
                                processability and a high melting point.
                            </p>

                            <div
                                className="
                            mt-4
                            flex
                            items-center
                            gap-2
                            border-t
                            border-[#0d2461]/15
                            pt-4
                        "
                            >
                                <CheckCircle2
                                    size={14}
                                    className="text-[#c99618]"
                                />

                                <span
                                    className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-[#0d2461]/60
                            "
                                >
                                    Lightweight Thermoplastic
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* =====================================================
                LEFT BOTTOM — KEY PROPERTIES
            ====================================================== */}
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
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-5
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                        >
                            {/* Pointer */}
                            <div
                                className="
                            absolute
                            -right-16
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                            >
                                <div className="h-[2px] w-14 bg-[#0d2461]/50" />

                                <div
                                    className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                                />
                            </div>

                            <div className="flex items-center gap-3">

                                <div
                                    className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                                >
                                    <Settings2
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>

                                <span
                                    className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-[#c99618]
                            "
                                >
                                    Key Properties
                                </span>

                            </div>

                            <div className="mt-5 space-y-3">

                                <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">

                                        <ShieldCheck
                                            size={14}
                                            className="text-[#c99618]"
                                        />

                                        <span className="text-[11px] text-[#0d2461]/65">
                                            Chemical Resistance
                                        </span>

                                    </div>

                                    <span className="text-[11px] font-semibold text-[#0d2461]">
                                        Excellent
                                    </span>

                                </div>

                                <div className="h-px bg-[#0d2461]/15" />

                                <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">

                                        <Workflow
                                            size={14}
                                            className="text-[#c99618]"
                                        />

                                        <span className="text-[11px] text-[#0d2461]/65">
                                            Processability
                                        </span>

                                    </div>

                                    <span className="text-[11px] font-semibold text-[#0d2461]">
                                        High
                                    </span>

                                </div>

                                <div className="h-px bg-[#0d2461]/15" />

                                <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">

                                        <Thermometer
                                            size={14}
                                            className="text-[#c99618]"
                                        />

                                        <span className="text-[11px] text-[#0d2461]/65">
                                            Thermal Endurance
                                        </span>

                                    </div>

                                    <span className="text-[11px] font-semibold text-[#0d2461]">
                                        High
                                    </span>

                                </div>

                                <div className="h-px bg-[#0d2461]/15" />

                                <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-2">

                                        <Flame
                                            size={14}
                                            className="text-[#c99618]"
                                        />

                                        <span className="text-[11px] text-[#0d2461]/65">
                                            Melting Point
                                        </span>

                                    </div>

                                    <span className="text-[11px] font-semibold text-[#c99618]">
                                        High
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>


                    {/* =====================================================
                RIGHT TOP — APPLICATIONS
            ====================================================== */}
                    <div
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
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-5
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                        >
                            {/* Pointer */}
                            <div
                                className="
                            absolute
                            -left-16
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                            >
                                <div
                                    className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                                />

                                <div className="h-[2px] w-14 bg-[#0d2461]/50" />
                            </div>

                            <div className="flex items-center justify-end gap-3">

                                <div className="text-right">

                                    <span
                                        className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#c99618]
                                "
                                    >
                                        Applications
                                    </span>

                                </div>

                                <div
                                    className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                                >
                                    <Boxes
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>

                            </div>

                            <div className="mt-5 flex flex-wrap justify-end gap-2">

                                {[
                                    {
                                        name: "Automotive",
                                        icon: Car,
                                    },
                                    {
                                        name: "Packaging",
                                        icon: Package,
                                    },
                                    {
                                        name: "Textiles",
                                        icon: Shirt,
                                    },
                                    {
                                        name: "Household",
                                        icon: Home,
                                    },
                                ].map(({ name, icon: Icon }) => (
                                    <span
                                        key={name}
                                        className="
                                    flex
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    border
                                    border-[#0d2461]/20
                                    bg-transparent
                                    px-3
                                    py-2
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-[#0d2461]
                                "
                                    >
                                        <Icon
                                            size={11}
                                            strokeWidth={1.5}
                                            className="text-[#c99618]"
                                        />

                                        {name}
                                    </span>
                                ))}

                            </div>

                            <p
                                className="
                            mt-5
                            text-right
                            text-[13px]
                            leading-6
                            text-[#0d2461]/70
                        "
                            >
                                A versatile material used across multiple
                                industrial and consumer applications.
                            </p>
                        </div>
                    </div>


                    {/* =====================================================
                RIGHT BOTTOM — PRODUCT GRADE
            ====================================================== */}
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
        overflow-visible
        rounded-[22px]
        border
        border-white/20
        bg-white/15
        p-5
        shadow-[0_8px_40px_rgba(13,36,97,0.14)]
        backdrop-blur-2xl
        backdrop-saturate-150
        ring-1
        ring-[#0d2461]/5
    "
                        >
                            {/* Pointer */}
                            <div
                                className="
                            absolute
                            -left-16
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                        "
                            >
                                <div
                                    className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-[#c99618]
                                bg-[#0d2461]
                            "
                                />

                                <div className="h-[2px] w-14 bg-[#0d2461]/50" />
                            </div>

                            <div className="flex items-center justify-end gap-3">

                                <div className="text-right">

                                    <span
                                        className="
                                    text-[9px]
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
                                    mt-1
                                    text-2xl
                                    font-bold
                                    text-[#0d2461]
                                "
                                    >
                                        25 KG
                                    </h3>

                                </div>

                                <div
                                    className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#0d2461]/25
                            "
                                >
                                    <Scale
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>

                            </div>

                            <p
                                className="
                            mt-4
                            text-right
                            text-[13px]
                            leading-6
                            text-[#0d2461]/70
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
                                border
                                border-[#0d2461]/15
                                bg-transparent
                                p-3
                            "
                                >
                                    <div className="flex items-center gap-2">

                                        <Dumbbell
                                            size={13}
                                            className="text-[#c99618]"
                                        />

                                        <span
                                            className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-[#0d2461]/50
                                    "
                                        >
                                            Strength
                                        </span>

                                    </div>

                                    <span
                                        className="
                                    mt-2
                                    block
                                    text-xs
                                    font-bold
                                    text-[#0d2461]
                                "
                                    >
                                        High
                                    </span>

                                </div>

                                <div
                                    className="
                                rounded-xl
                                border
                                border-[#0d2461]/15
                                bg-transparent
                                p-3
                            "
                                >
                                    <div className="flex items-center gap-2">

                                        <Gauge
                                            size={13}
                                            className="text-[#c99618]"
                                        />

                                        <span
                                            className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-[#0d2461]/50
                                    "
                                        >
                                            Endurance
                                        </span>

                                    </div>

                                    <span
                                        className="
                                    mt-2
                                    block
                                    text-xs
                                    font-bold
                                    text-[#0d2461]
                                "
                                    >
                                        Thermal
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
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