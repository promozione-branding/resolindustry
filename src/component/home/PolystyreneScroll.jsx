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

const FRAME_COUNT = 192;

// Shared card styles (compact padding on short viewports)
const CARD =
    "relative overflow-visible rounded-[22px] border border-white/20 bg-white/15 p-5 shadow-[0_8px_40px_rgba(13,36,97,0.14)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-[#0d2461]/5 [@media(max-height:820px)]:p-4";

// Column wrappers: cards are stacked in a flex column so they can never overlap
const COLUMN =
    "absolute top-[8vh] bottom-[6vh] flex w-[280px] flex-col justify-between gap-4 xl:w-[310px]";

const ICON_CIRCLE =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/25";

const HIDE_WHEN_SHORT = "[@media(max-height:820px)]:hidden";

function PointerRight() {
    return (
        <div className="absolute -right-16 top-1/2 flex -translate-y-1/2 items-center">
            <div className="h-[2px] w-14 bg-[#0d2461]/50" />
            <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
        </div>
    );
}

function PointerLeft() {
    return (
        <div className="absolute -left-16 top-1/2 flex -translate-y-1/2 items-center">
            <div className="h-3 w-3 rounded-full border-2 border-[#c99618] bg-[#0d2461]" />
            <div className="h-[2px] w-14 bg-[#0d2461]/50" />
        </div>
    );
}

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
        // DRAW FRAME (COVER)
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

            if (imageRatio > canvasRatio) {
                drawHeight = height;
                drawWidth = height * imageRatio;
            } else {
                drawWidth = width;
                drawHeight = width / imageRatio;
            }

            const x = (width - drawWidth) / 2;
            const y = (height - drawHeight) / 2;

            ctx.drawImage(img, x, y, drawWidth, drawHeight);
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

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";

            drawFrame(currentFrame);
        }


        function loadFrame(index) {
            return new Promise((resolve) => {
                const img = new Image();
                const src = `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.webp`;

                img.onload = () => {
                    images[index] = img;

                    if (index === 0) {
                        drawFrame(0);
                    }

                    resolve();
                };

                img.onerror = () => {
                    resolve();
                };

                img.src = src;
            });
        }

        loadFrame(0).then(() => {
            if (destroyed) return;

            resizeCanvas();

            const trigger = ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: true,

                onUpdate: (self) => {
                    if (destroyed) return;

                    const frame = Math.floor(self.progress * (FRAME_COUNT - 1));

                    if (frame !== currentFrame && images[frame]) {
                        currentFrame = frame;
                        drawFrame(currentFrame);
                    }
                },
            });

            for (let i = 1; i < FRAME_COUNT; i++) {
                loadFrame(i);
            }

            ScrollTrigger.refresh();

            section._scrollTrigger = trigger;
        });

        window.addEventListener("resize", resizeCanvas);

        return () => {
            destroyed = true;

            window.removeEventListener("resize", resizeCanvas);

            if (section._scrollTrigger) {
                section._scrollTrigger.kill();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[580vh] w-full bg-white">

            <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-10 block h-full w-full"
                />

                <div className="pointer-events-none absolute inset-0 z-40 hidden lg:block">
                    <div className={`${COLUMN} left-8 xl:left-14`}>
                        <div className={CARD}>
                            <PointerRight />

                            <div className="flex items-center gap-3">
                                <div className={ICON_CIRCLE}>
                                    <Package
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>

                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                        Material 01
                                    </span>

                                    <h3 className="mt-1 text-lg font-bold uppercase tracking-tight text-[#0d2461]">
                                        Polypropylene
                                    </h3>
                                </div>
                            </div>

                            <p
                                className={`mt-4 text-[13px] leading-6 text-[#0d2461]/90 ${HIDE_WHEN_SHORT}`}
                            >
                                Polypropylene is a lightweight thermoplastic
                                known for excellent chemical resistance,
                                processability and a high melting point.
                            </p>

                            <div className="mt-4 flex items-center gap-2 border-t border-[#0d2461]/15 pt-4 [@media(max-height:820px)]:mt-3 [@media(max-height:820px)]:pt-3">
                                <CheckCircle2
                                    size={16}
                                    className="text-[#c99618]"
                                />

                                <span className="text-sm font-bold uppercase tracking-wider text-[#0d2461]/80">
                                    Lightweight Thermoplastic
                                </span>
                            </div>
                        </div>

                        {/* KEY PROPERTIES */}
                        <div className={CARD}>
                            <PointerRight />

                            <div className="flex items-center gap-3">
                                <div className={ICON_CIRCLE}>
                                    <Settings2
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>

                                <span className="text-base font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                    Key Properties
                                </span>
                            </div>

                            <div className="mt-5 space-y-3 [@media(max-height:820px)]:mt-3 [@media(max-height:820px)]:space-y-2">
                                {[
                                    {
                                        label: "Chemical Resistance",
                                        value: "Excellent",
                                        icon: ShieldCheck,
                                    },
                                    {
                                        label: "Processability",
                                        value: "High",
                                        icon: Workflow,
                                    },
                                    {
                                        label: "Thermal Endurance",
                                        value: "High",
                                        icon: Thermometer,
                                    },
                                    {
                                        label: "Melting Point",
                                        value: "High",
                                        icon: Flame,
                                    },
                                ].map(({ label, value, icon: Icon }, i) => (
                                    <div key={label}>
                                        {i > 0 && (
                                            <div className="mb-3 h-px bg-[#0d2461]/15 [@media(max-height:820px)]:mb-2" />
                                        )}

                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    size={16}
                                                    className="text-[#c99618]"
                                                />

                                                <span className="text-xs text-[#0d2461]/65">
                                                    {label}
                                                </span>
                                            </div>

                                            <span className="text-xs font-semibold text-[#0d2461]">
                                                {value}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ==================================
                        RIGHT COLUMN
                    ================================== */}
                    <div className={`${COLUMN} right-8 xl:right-14`}>
                        {/* APPLICATIONS */}
                        <div className={CARD}>
                            <PointerLeft />

                            <div className="flex items-center justify-end gap-3">
                                <div className="text-right">
                                    <span className="text-base font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                        Applications
                                    </span>
                                </div>

                                <div className={ICON_CIRCLE}>
                                    <Boxes
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>
                            </div>

                            <div className="mt-2 flex flex-wrap justify-end gap-2">
                                {[
                                    { name: "Automotive", icon: Car },
                                    { name: "Packaging", icon: Package },
                                    { name: "Textiles", icon: Shirt },
                                    { name: "Household", icon: Home },
                                ].map(({ name, icon: Icon }) => (
                                    <span
                                        key={name}
                                        className="flex items-center gap-2 rounded-full border border-[#0d2461]/20 bg-transparent px-2 py-2 text-xs font-semibold uppercase tracking-wider text-[#0d2461]"
                                    >
                                        <Icon
                                            size={16}
                                            strokeWidth={1.5}
                                            className="text-[#c99618]"
                                        />

                                        {name}
                                    </span>
                                ))}
                            </div>

                            <p
                                className={`mt-2 text-right text-[13px] leading-6 text-[#0d2461]/70 ${HIDE_WHEN_SHORT}`}
                            >
                                A versatile material used across multiple
                                industrial and consumer applications.
                            </p>
                        </div>

                        {/* PRODUCT GRADE */}
                        <div className={CARD}>
                            <PointerLeft />

                            <div className="flex items-center justify-end gap-3">
                                <div className="text-right">
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                        Product Grade
                                    </span>

                                    <h3 className="text-2xl font-bold text-[#0d2461]">
                                        25 KG
                                    </h3>
                                </div>

                                <div className={ICON_CIRCLE}>
                                    <Scale
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#0d2461]"
                                    />
                                </div>
                            </div>

                            <p
                                className={`mt-2 text-right text-[13px] leading-6 text-[#0d2461]/70 ${HIDE_WHEN_SHORT}`}
                            >
                                Designed for reliable processing, mechanical
                                strength and long-term industrial performance.
                            </p>

                            <div className="mt-2 grid grid-cols-2 gap-3">
                                <div className="rounded-xl border border-[#0d2461]/15 bg-transparent p-3 [@media(max-height:820px)]:p-2">
                                    <div className="flex items-center gap-2">
                                        <Dumbbell
                                            size={16}
                                            className="text-[#c99618]"
                                        />

                                        <span className="text-xs font-bold uppercase tracking-wider text-[#0d2461]/70">
                                            Strength
                                        </span>
                                    </div>

                                    <span className="mt-2 block text-base font-bold text-[#0d2461] [@media(max-height:820px)]:mt-1">
                                        High
                                    </span>
                                </div>

                                <div className="rounded-xl border border-[#0d2461]/15 bg-transparent p-3 [@media(max-height:820px)]:p-2">
                                    <div className="flex items-center gap-2">
                                        <Gauge
                                            size={16}
                                            className="text-[#c99618]"
                                        />

                                        <span className="text-xs font-bold uppercase tracking-wider text-[#0d2461]/70">
                                            Endurance
                                        </span>
                                    </div>

                                    <span className="mt-2 block text-sm font-bold text-[#0d2461] [@media(max-height:820px)]:mt-1">
                                        Thermal
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pointer-events-none absolute bottom-8 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 lg:hidden">
                    <div className="rounded-[24px] border border-[#071a3d]/10 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c99618]">
                            Polypropylene · 25 KG
                        </span>

                        <h3 className="mt-2 text-xl font-bold uppercase text-[#071a3d]">
                            Polypropylene
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#071a3d]/60">
                            A lightweight thermoplastic with excellent chemical
                            resistance, processability and thermal endurance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}