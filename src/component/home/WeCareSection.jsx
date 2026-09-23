"use client";

import React from "react";
import Image from "next/image";

export default function WeCareSection() {
    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                bg-gray-50
                px-5
                border border-orange-300
                py-8
                sm:px-8
                md:py-10
                lg:px-12
                lg:py-14
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1500px]
                    flex-col
                    items-center
                    text-center
                "
            >

                {/* =====================================================
                    IMAGE IN PLACE OF WE CARE
                ===================================================== */}

                <div
                    className="
                        relative
                        w-full
                        max-w-[600px]
                        overflow-hidden
                    "
                >
                    <Image
                        src="/ChatGPT Image Sep 22, 2026, 10_40_29 AM (1).png"
                        alt="Resol Industries"
                        width={800}
                        height={200}
                        priority
                        className="
                            h-auto
                            w-full
                            object-cover
                        "
                    />
                </div>


                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <div
                    className="
                        mt-8
                        max-w-[1250px]
                        px-2
                        sm:mt-0
                    "
                >
                    <p
                        className="
                            font-sans
                            text-[24px]
                            font-normal
                            leading-[1.25]
                            tracking-[-0.025em]
                            text-[#0d2461]
                            sm:text-[12px]
                            md:text-[25px]
                        "
                    >
                        Resol Industries Ltd. is a prominent polymer
                        products distributor, delivering quality materials
                        and dependable solutions to industries across India.
                    </p>
                </div>


                {/* =====================================================
                    GOLD ACCENT
                ===================================================== */}

                <div
                    className="
                        mt-2
                        h-[2px]
                        w-20
                        bg-[#D5AE6D]
                        sm:mt-5
                    "
                />

            </div>
        </section>
    );
}