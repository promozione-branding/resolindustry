import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/banner.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Left Gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/65 via-[#071a3d]/60 to-transparent" /> */}

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-screen justify-center items-center">
                <div className="text-white pt-20">
                    {/* Heading */}
                    <h1 className="font-heading text-7xl font-bold uppercase text-white leading-[1.05] sm:text-6xl md:text-7xl lg:text-[80px]">
                        Resol Industries Ltd
                    </h1>

                    {/* <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="border border-white/80 text-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-black backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24]"
                        >
                            Our Story
                        </Link>

                    </div> */}
                </div>
            </div>
        </section>
    );
}