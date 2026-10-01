"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        quote:
            "I’ve ordered from many children’s clothing stores, but Timbero stands out because of its consistency. The fit is dependable, the fabrics remain soft after washing, and the overall quality feels reliable from one order to the next. It makes shopping online feel simple and stress-free.",
        name: "Emma Richardson",
        role: "Verified Buyer",
        rotation: -10,
    },
    {
        quote:
            "Timbero always manages to combine comfort and style so effortlessly. The clothing looks beautifully made and feels durable without sacrificing softness. Every order has arrived carefully packaged and exactly as described, which gives me confidence whenever I shop here.",
        name: "Amelia Brooks",
        role: "Happy Customer",
        rotation: -5,
    },
    {
        quote:
            "I’ve placed multiple orders with Timbero and every experience has been consistently positive. The clothing feels incredibly soft, the stitching is well done, and the sizing has always been accurate for my children. I also appreciate how closely the products match the photos online.",
        name: "Charlotte Evans",
        role: "Mother of Two",
        rotation: 4,
    },
    {
        quote:
            "I’m always impressed with the consistency and quality from Timbero. The clothing is soft, easy to wear, and perfectly suited for little ones. Everything feels reliable and carefully designed.",
        name: "Olivia Parker",
        role: "Returning Customer",
        rotation: 0,
    },
    {
        quote:
            "The quality from Timbero is consistently excellent. I appreciate the soft fabrics, thoughtful details, and how easy it is to find clothing that feels comfortable and looks great on kids.",
        name: "Rachel Turner",
        role: "Verified Buyer",
        rotation: 7,
    },
];

export default function ReviewsSection() {
    const stickyRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean);

            if (!cards.length) return;

            // ---------------------------------------------
            // INITIAL CARD STATE
            // ---------------------------------------------

            cards.forEach((card, index) => {
                if (index === 0) {
                    gsap.set(card, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: reviews[index].rotation,
                        zIndex: 20,
                    });
                } else {
                    gsap.set(card, {
                        x: 900,
                        y: 0,
                        scale: 0.9,
                        opacity: 0,
                        rotation: 12,
                        zIndex: 20 + index,
                    });
                }
            });

            // ---------------------------------------------
            // SCROLL ANIMATION
            // ---------------------------------------------

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stickyRef.current,

                    // Starts when section reaches navbar area
                    start: "top top+=80",

                    // Long enough scroll distance for all cards
                    end: `+=${(reviews.length - 1) * 900}`,

                    scrub: 1,

                    // IMPORTANT:
                    // CSS sticky handles the sticky behavior.
                    // GSAP must NOT pin this section.
                    pin: false,

                    invalidateOnRefresh: true,
                },
            });

            // ---------------------------------------------
            // CARD TRANSITIONS
            // ---------------------------------------------

            for (let i = 1; i < cards.length; i++) {
                const activeCard = cards[i];

                // New card enters from right
                tl.to(activeCard, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    rotation: reviews[i].rotation,
                    duration: 1,
                    ease: "power3.out",
                });

                // Previous cards move backward
                for (let j = 0; j < i; j++) {
                    const previousCard = cards[j];

                    const depth = i - j;

                    tl.to(
                        previousCard,
                        {
                            x: -depth * 18,
                            y: depth * 12,
                            scale: 1 - depth * 0.055,
                            opacity: Math.max(
                                0.25,
                                1 - depth * 0.16
                            ),
                            rotation:
                                reviews[j].rotation +
                                (j % 2 === 0 ? -2 : 2),
                            duration: 0.75,
                            ease: "power2.out",
                        },
                        "<"
                    );
                }

                // Small pause
                tl.to({}, {
                    duration: 0.35,
                });
            }

            // Refresh after layout is ready
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, stickyRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        /*
         * IMPORTANT:
         * This outer element creates the scroll area.
         * Do NOT put overflow-hidden on this element.
         */
        <div
            ref={stickyRef}
            className="relative h-[450vh] w-full"
        >
            {/*
             * STICKY VIEWPORT
             *
             * This is what stays on screen while
             * the parent continues scrolling.
             */}
            <section
                className="
                    sticky
                    top-10
                    z-20
                    h-[90vh]
                    w-full
                    overflow-hidden
                    bg-[#0D2461]
                "
            >
                {/* BACKGROUND */}

                <div className="absolute inset-0 z-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661436527731-8f494a3b66f7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            object-center
                        "
                        draggable="false"
                    />

                    <div className="absolute inset-0 bg-black/35" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/50" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                </div>

                {/* CONTENT */}

                <div
                    className="
                        relative
                        z-10
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                    "
                >
                    <div
                        className="
                            mx-auto
                            grid
                            w-full
                            max-w-[1450px]
                            grid-cols-1
                            items-center
                            gap-10
                            px-6
                            md:px-10
                            lg:grid-cols-2
                            lg:gap-20
                            lg:px-14
                        "
                    >
                        {/* LEFT — REVIEW CARDS */}

                        <div
                            className="
                                relative
                                flex
                                h-[500px]
                                w-full
                                items-center
                                justify-center
                                sm:h-[520px]
                                lg:h-[540px]
                            "
                        >
                            <div
                                className="
                                    relative
                                    h-[430px]
                                    w-full
                                    max-w-[560px]
                                "
                            >
                                {reviews.map((review, index) => (
                                    <article
                                        key={review.name}
                                        ref={(el) => {
                                            cardsRef.current[index] = el;
                                        }}
                                        className="
                                            absolute
                                            left-1/2
                                            top-1/2
                                            w-full
                                            -translate-x-1/2
                                            -translate-y-1/2
                                        "
                                    >
                                        <div
                                            className="
                                                rounded-[28px]
                                                bg-white
                                                p-7
                                                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                                                sm:p-8
                                                md:p-9
                                                lg:p-10
                                            "
                                        >
                                            {/* QUOTE */}

                                            <div
                                                className="
                                                    mb-4
                                                    h-[42px]
                                                    text-[65px]
                                                    leading-[0.8]
                                                    text-black/10
                                                "
                                            >
                                                “
                                            </div>

                                            {/* REVIEW */}

                                            <p
                                                className="
                                                    text-[15px]
                                                    leading-[1.7]
                                                    text-[#222]
                                                    sm:text-[16px]
                                                    md:text-[17px]
                                                    lg:text-[18px]
                                                "
                                            >
                                                {review.quote}
                                            </p>

                                            {/* AUTHOR */}

                                            <div
                                                className="
                                                    mt-7
                                                    flex
                                                    items-center
                                                    gap-4
                                                    border-t
                                                    border-black/10
                                                    pt-6
                                                "
                                            >
                                                <div
                                                    className="
                                                        flex
                                                        h-12
                                                        w-12
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        overflow-hidden
                                                        rounded-full
                                                        border
                                                        border-gray-400
                                                    "
                                                >
                                                    <User
                                                        size={20}
                                                        strokeWidth={1.5}
                                                    />
                                                </div>

                                                <div>
                                                    <div
                                                        className="
                                                            text-[15px]
                                                            font-semibold
                                                            text-[#151515]
                                                        "
                                                    >
                                                        {review.name}
                                                    </div>

                                                    <div
                                                        className="
                                                            mt-1
                                                            text-sm
                                                            text-black/50
                                                        "
                                                    >
                                                        {review.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — TEXT */}

                        <div className="relative flex items-center text-white">
                            <div className="max-w-[600px] lg:pl-5">
                                <p
                                    className="
                                        mb-6
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.35em]
                                        text-white/55
                                        md:text-xs
                                    "
                                >
                                    Customer Testimonials
                                </p>

                                <h2
                                    className="
                                        text-[44px]
                                        font-medium
                                        leading-[0.98]
                                        tracking-[0.015em]
                                        sm:text-[52px]
                                        md:text-[64px]
                                        lg:text-[76px]
                                    "
                                >
                                    Loved by
                                    <br />
                                    Thousands
                                    <br />
                                    Customers
                                </h2>

                                <p
                                    className="
                                        mt-8
                                        max-w-[500px]
                                        text-[15px]
                                        leading-7
                                        text-white/65
                                        md:text-[17px]
                                        md:leading-8
                                    "
                                >
                                    Our customers choose us for quality,
                                    consistency and comfort. Every product is
                                    thoughtfully designed to deliver an
                                    experience they can trust again and again.
                                </p>

                                <div
                                    className="
                                        mt-10
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
                                    <div className="h-px w-14 bg-white/40" />

                                    <span
                                        className="
                                            text-[10px]
                                            uppercase
                                            tracking-[0.3em]
                                            text-white/45
                                        "
                                    >
                                        Real Customer Experiences
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}