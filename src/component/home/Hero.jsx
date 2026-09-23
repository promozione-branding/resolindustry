import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/KRONOS_WebsiteClip_White_LQ.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/50" /> */}

            {/* Left Gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#071a3d]/65 via-[#071a3d]/60 to-transparent" /> */}

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-screen items-center px-6 pt-32 sm:px-10 lg:px-16 xl:px-24">
                <div className="max-w-4xl text-white">



                    {/* Heading */}
                    <h1 className="font-heading text-5xl font-bold uppercase text-black leading-[1.05] sm:text-6xl md:text-7xl lg:text-[65px]">
                        The Foundation of
                        <br />
                        <span className="">
                            Polymer and
                        </span>
                        <br />
                        Chemical Innovation
                    </h1>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href="/contact"
                            className="border border-black/50 px-7 py-4 text-sm font-bold uppercase tracking-wide text-black backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
                        >
                            Our Story
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}