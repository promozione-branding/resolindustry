"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function MarqueeRow({ items, rowRef }) {
    // 4 copies are required so there is always enough content
    // while the row is moving horizontally.
    const repeatedItems = [
        ...items,
        ...items,
        ...items,
        ...items,
    ];

    return (
        <div
            ref={rowRef}
            className="flex w-max items-center whitespace-nowrap"
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
    const sectionRef = useRef(null);
    const topRowRef = useRef(null);
    const bottomRowRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /*
             * TOP ROW
             * Moves LEFT while scrolling DOWN
             */
            gsap.fromTo(
                topRowRef.current,
                {
                    xPercent: 0,
                },
                {
                    xPercent: -25,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                    },
                }
            );

            /*
             * BOTTOM ROW
             * Moves RIGHT while scrolling DOWN
             */
            gsap.fromTo(
                bottomRowRef.current,
                {
                    xPercent: -25,
                },
                {
                    xPercent: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                h-[270px]
                w-full
                overflow-hidden
                bg-[#f3f3f3]
                text-black
                md:h-[250px]
            "
        >
            {/* =================================
                TOP BLACK MARQUEE
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
                    md:h-[100px]
                "
            >
                <MarqueeRow
                    items={topItems}
                    rowRef={topRowRef}
                />
            </div>

            {/* =================================
                BOTTOM GREY MARQUEE
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
                    overflow-hidden
                    bg-[#fff]
                    pt-5
                    text-black
                    rotate-[-4deg]
                    md:top-[130px]
                    md:h-[200px]
                "
               
            >
                <MarqueeRow
                    items={bottomItems}
                    rowRef={bottomRowRef}
                />
            </div>
        </section>
    );
}