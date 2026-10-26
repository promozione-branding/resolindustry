"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingGif() {
    return (
        <section className="relative w-full">
            {/* CONTACT BUTTONS — BOTTOM LEFT */}
            <div className="fixed bottom-6 left-4 z-[999] flex flex-col items-start gap-3">
                <a
                    href="tel:+919355804591"
                    aria-label="Call us"
                    className="flex items-center gap-2 rounded-full bg-red-500 py-3 pl-4 pr-5 text-white shadow-lg transition hover:bg-red-600 animate-bounce"
                >
                    <FaPhoneAlt size={22} />
                    <span className="text-sm font-semibold">Call Us</span>
                </a>

                <a
                    href="https://wa.me/919355804591"
                    aria-label="Chat on WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-green-500 py-3 pl-4 pr-5 text-white shadow-lg transition hover:bg-green-600 animate-bounce"
                >
                    <FaWhatsapp size={26} />
                    <span className="text-sm font-semibold">WhatsApp</span>
                </a>
            </div>

            {/* GIF — BOTTOM RIGHT */}
            <div className="fixed bottom-6 right-6 z-[999]">
                <Image
                    src="/themegif2.gif"
                    alt="Resol Industries Limited"
                    width={140}
                    height={140}
                    unoptimized
                    className="h-[140px] w-[140px] object-contain"
                />
            </div>
        </section>
    );
}