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
        image:
            "https://timbero.siksmart.com/kidfashion/wp-content/uploads/sites/3/2026/06/Grace-Mitchell.webp",
        rotation: -10,
    },
    {
        quote:
            "Timbero always manages to combine comfort and style so effortlessly. The clothing looks beautifully made and feels durable without sacrificing softness. Every order has arrived carefully packaged and exactly as described, which gives me confidence whenever I shop here.",
        name: "Amelia Brooks",
        role: "Happy Customer",
        image:
            "https://timbero.siksmart.com/kidfashion/wp-content/uploads/sites/3/2026/06/Amelia-Brooks.webp",
        rotation: -5,
    },
    {
        quote:
            "I’ve placed multiple orders with Timbero and every experience has been consistently positive. The clothing feels incredibly soft, the stitching is well done, and the sizing has always been accurate for my children. I also appreciate how closely the products match the photos online.",
        name: "Charlotte Evans",
        role: "Mother of Two",
        image:
            "https://timbero.siksmart.com/kidfashion/wp-content/uploads/sites/3/2026/06/Charlotte-Evans.webp",
        rotation: 4,
    },
    {
        quote:
            "I’m always impressed with the consistency and quality from Timbero. The clothing is soft, easy to wear, and perfectly suited for little ones. Everything feels reliable and carefully designed.",
        name: "Olivia Parker",
        role: "Returning Customer",
        image:
            "https://timbero.siksmart.com/kidfashion/wp-content/uploads/sites/3/2026/06/Megan-Wilson.webp",
        rotation: 0,
    },
    {
        quote:
            "The quality from Timbero is consistently excellent. I appreciate the soft fabrics, thoughtful details, and how easy it is to find clothing that feels comfortable and looks great on kids.",
        name: "Rachel Turner",
        role: "Verified Buyer",
        image:
            "https://timbero.siksmart.com/kidfashion/wp-content/uploads/sites/3/2026/06/Sarah-Johnson.webp",
        rotation: 7,
    },
];

export default function ReviewsSection() {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const cardsRef = useRef([]);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean);

            if (!cards.length) return;

            /*
             * ----------------------------------------------------
             * INITIAL CARD STATE
             * ----------------------------------------------------
             *
             * Every card except the first starts outside
             * the review area on the RIGHT.
             */

            cards.forEach((card, index) => {
                if (index === 0) {
                    gsap.set(card, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: reviews[index].rotation,
                        zIndex: 10,
                    });
                } else {
                    gsap.set(card, {
                        x: 800,
                        y: 0,
                        scale: 0.9,
                        opacity: 0,
                        rotation: 12,
                        zIndex: 10 + index,
                    });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,

                    start: "top top",

                    /*
                     * Longer distance gives the cards
                     * a smooth entrance.
                     */
                    end: `+=${(reviews.length - 1) * 1000}`,

                    scrub: 1,

                    pin: pinRef.current,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,
                },
            });

            /*
             * ----------------------------------------------------
             * CARD TRANSITIONS
             * ----------------------------------------------------
             */

            for (let i = 1; i < cards.length; i++) {
                const activeCard = cards[i];

                /*
                 * New card comes from the RIGHT.
                 */
                tl.to(activeCard, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    rotation: reviews[i].rotation,
                    duration: 1,
                    ease: "power3.out",
                });

                /*
                 * Move all previous cards backward.
                 *
                 * This creates the stacked-card effect.
                 */
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

                /*
                 * Hold the current card briefly.
                 */
                tl.to({}, {
                    duration: 0.45,
                });
            }

            /*
             * Make sure ScrollTrigger calculates the
             * correct dimensions after everything loads.
             */
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-[#0D2461]"
        >
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://ik.imagekit.io/owoxybaax/Timbero/home-5-testimonials-background.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    draggable="false"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/50" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>

            <div
                ref={pinRef}
                className="relative z-10 flex min-h-screen items-center overflow-hidden"
            >
                <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-16 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-14">
                    {/* ==================================================
                        LEFT — REVIEW CARDS
                    ================================================== */}

                    <div className="relative flex h-[570px] items-center justify-center">
                        <div className="relative h-[440px] w-full max-w-[560px]">
                            {reviews.map((review, index) => (
                                <article
                                    key={index}
                                    ref={(el) => {
                                        cardsRef.current[index] = el;
                                    }}
                                    className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="rounded-[28px] bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-9 lg:p-10">
                                        {/* Quote mark */}
                                        <div className="mb-4 h-[42px] text-[65px] leading-[0.8] text-black/10">
                                            “
                                        </div>

                                        {/* Review */}
                                        <p className="text-[16px] leading-[1.7] text-[#222] md:text-[17px] lg:text-[18px]">
                                            {review.quote}
                                        </p>

                                        {/* Author */}
                                        <div className="mt-7 flex items-center gap-4 border-t border-black/10 pt-6">
                                            <div className="h-12 w-12 border border-gray-400 shrink-0 overflow-hidden flex items-center justify-center rounded-full">
                                                <User />
                                            </div>

                                            <div>
                                                <div className="text-[15px] font-semibold text-[#151515]">
                                                    {review.name}
                                                </div>

                                                <div className="mt-1 text-sm text-black/50">
                                                    {review.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* ==================================================
                        RIGHT — STATIC TEXT
                    ================================================== */}

                    <div className="relative text-white">
                        <div className="max-w-[600px] lg:pl-5">
                            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-white/55 md:text-xs">
                                Customer Testimonials
                            </p>

                            <h2 className="text-[48px] font-medium leading-[0.98] tracking-[0.015em] sm:text-[56px] md:text-[64px] lg:text-[76px]">
                                Loved by
                                <br />
                                Thousands
                                <br />
                                Customers
                            </h2>

                            <p className="mt-8 max-w-[500px] text-[15px] leading-7 text-white/65 md:text-[17px] md:leading-8">
                                Our customers choose us for quality,
                                consistency and comfort. Every product is
                                thoughtfully designed to deliver an experience
                                they can trust again and again.
                            </p>

                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-px w-14 bg-white/40" />

                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                                    Real Customer Experiences
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}