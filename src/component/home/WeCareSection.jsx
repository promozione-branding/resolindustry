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
                bg-[#FFF4DF]
                px-5
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
                        max-w-[1050px]
                        overflow-hidden
                    "
                >
                    <Image
                        src="/we-care.png"
                        alt="Resol Industries"
                        width={1000}
                        height={300}
                        priority
                        className="
                            h-auto
                            w-full
                            object-contain
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
                        sm:mt-10
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
                            md:text-[20px]
                            xl:text-[30px]
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