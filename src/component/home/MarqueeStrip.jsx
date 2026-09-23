"use client";

import React from "react";

const topItems = [
    "Importer",
    "Distributor",
    "Supplier",
    "Wholesaler",
];

const bottomItems = [
    "Polymers",
    "Pet Resin",
    "Citric Acid",
    "Plasticizers",
    "Fillers",
    "Colurants",
];

function MarqueeRow({ items, reverse = false }) {
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div
            className={`flex w-max items-center whitespace-nowrap ${reverse ? "marquee-reverse" : "marquee"
                }`}
        >
            {repeatedItems.map((item, index) => (
                <React.Fragment key={`${item}-${index}`}>
                    <h2
                        className="
                            mx-7
                            whitespace-nowrap
                            text-[28px]
                            font-normal
                            leading-none
                            tracking-[-0.025em]
                            md:mx-9
                            md:text-[38px]
                        "
                    >
                        {item}
                    </h2>

                    <span
                        className="
                            text-[20px]
                            leading-none
                            md:text-[27px]
                        "
                    >
                        •
                    </span>
                </React.Fragment>
            ))}
        </div>
    );
}

export default function MarqueeSection() {
    return (
        <section
            className="
                relative
                h-[270px]
                w-full
                overflow-hidden
                bg-[#f3f3f3]
                text-black
                md:h-[260px]
            "
        >
            {/* ================================
                LINE 1 — WHITE
            ================================= */}
            <div
                className="
                    absolute
                    left-[-6%]
                    top-[35px]
                    z-20
                    flex
                    h-[105px]
                    w-[112%]
                    items-center
                    overflow-hidden
                    border-y
                    border-white/40
                    bg-black
                    text-white
                    rotate-[4deg]
                    md:top-[45px]
                    md:h-[120px]
                "
            >
                <MarqueeRow items={topItems} />
            </div>

            {/* ================================
                LINE 2 — BLACK
            ================================= */}
            <div
                className="
                    absolute
                    left-[-6%]
                    top-[130px]
                    z-30
                    flex
                    h-[145px]
                    w-[112%]
                    items-start
                    pt-5
                    overflow-hidden
                    bg-[#C4C4C4]
                    text-black
                    rotate-[-4deg]
                    md:top-[130px]
                    md:h-[200px]
                "
                style={{
                    background: "linear-gradient(90deg, #C9C9C9 0%, #EEEEEE 50%, #CCCCCC 100%)",
                }}
            >
                <MarqueeRow items={bottomItems} />
            </div>
        </section>
    );
}