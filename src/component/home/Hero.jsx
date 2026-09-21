import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/13753874_1280_720_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Left Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/65 via-[#071a3d]/60 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-screen items-center px-6 pt-32 sm:px-10 lg:px-16 xl:px-24">
                <div className="max-w-4xl text-white">

                    {/* Small Label */}
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-[2px] w-12 bg-[#f5bd24]" />

                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f5bd24]">
                            Resol Industries Ltd.
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-heading text-5xl font-bold uppercase leading-[1.05] sm:text-6xl md:text-7xl lg:text-7xl">
                        Powering
                        <br />
                        <span className="text-[#f5bd24]">
                            Industries
                        </span>
                        <span>,</span>
                        <br />
                        with Quality Materials.
                    </h1>
                    
                    <div className="mt-9 flex flex-wrap items-center gap-4">

                        <Link
                            href="/products"
                            className="group flex items-center gap-3 bg-[#f5bd24] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#071a3d] transition-all duration-300 hover:bg-white"
                        >
                            Explore Products

                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>

                        <Link
                            href="/contact"
                            className="border border-white/50 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
                        >
                            Contact Us
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}