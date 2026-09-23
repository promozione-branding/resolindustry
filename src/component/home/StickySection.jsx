"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function FloatingGif() {
    return (
        <section className="relative w-full">
            {/* Your normal page content can continue here */}

            {/* FIXED GIF — BOTTOM RIGHT */}
            <div className="fixed bottom-6 right-6 z-[999]">
                <div className="relative">

                    {/* GIF */}
                    <Image
                        src="/Business Syndicate (1).gif"
                        alt="Resol Industries"
                        width={140}
                        height={140}
                        unoptimized
                        className="h-[140px] w-[140px] object-contain"
                    />

                    {/* Close button */}
                    {/* <button
                        type="button"
                        className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0d2461] text-white shadow-lg transition hover:bg-[#f5bd24] hover:text-[#0d2461]"
                    >
                        <X size={14} strokeWidth={2.5} />
                    </button> */}

                </div>
            </div>
        </section>
    );
}