"use client";

import React from "react";
import { User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
    {
        quote:
            "I’ve ordered from many children’s clothing stores, but Timbero stands out because of its consistency. The fit is dependable, the fabrics remain soft after washing, and the overall quality feels reliable from one order to the next. It makes shopping online feel simple and stress-free.",
        name: "Emma Richardson",
        role: "Verified Buyer",
    },
    {
        quote:
            "Timbero always manages to combine comfort and style so effortlessly. The clothing looks beautifully made and feels durable without sacrificing softness. Every order has arrived carefully packaged and exactly as described, which gives me confidence whenever I shop here.",
        name: "Amelia Brooks",
        role: "Happy Customer",
    },
    {
        quote:
            "I’ve placed multiple orders with Timbero and every experience has been consistently positive. The clothing feels incredibly soft, the stitching is well done, and the sizing has always been accurate for my children. I also appreciate how closely the products match the photos online.",
        name: "Charlotte Evans",
        role: "Mother of Two",
    },
    {
        quote:
            "I’m always impressed with the consistency and quality from Timbero. The clothing is soft, easy to wear, and perfectly suited for little ones. Everything feels reliable and carefully designed.",
        name: "Olivia Parker",
        role: "Returning Customer",
    },
    {
        quote:
            "The quality from Timbero is consistently excellent. I appreciate the soft fabrics, thoughtful details, and how easy it is to find clothing that feels comfortable and looks great on kids.",
        name: "Rachel Turner",
        role: "Verified Buyer",
    },
];

export default function ReviewsSection() {
    return (
        <section className="relative overflow-hidden bg-[#0D2461] px-5 pt-10 text-white sm:px-8 md:pt-14">
            <div className="absolute inset-0">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661436527731-8f494a3b66f7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="h-full w-full object-cover object-center"
                    draggable="false"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative mx-auto w-full max-w-[1250px]">
                <div className="mx-auto mb-10 max-w-6xl text-center">
                    <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/65 md:text-xs">
                        Customer Testimonials
                    </p>
                    <h2 className="text-[40px] font-medium leading-[1.05] tracking-[0.01em] sm:text-5xl md:text-6xl">
                        Loved by Thousands of Customers
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween: 28,
                        },
                    }}
                    className="!pb-14 [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:!opacity-50 [&_.swiper-pagination-bullet-active]:!opacity-100"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.name} className="!h-auto">
                            <article className="flex h-full min-h-[250px] flex-col rounded-[24px] bg-white p-4 text-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-4">
                                <div className="h-[42px] text-[65px] leading-[0.8] text-black/10">
                                    “
                                </div>
                                <p className="flex-1 -mt-1 text-[15px] leading-[1.5] sm:text-sm">
                                    {review.quote}
                                </p>
                                <div className="mt-4 flex items-center gap-4 border-t border-black/10 pt-2">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-300">
                                        <User size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="text-[15px] font-semibold text-[#151515]">
                                            {review.name}
                                        </div>
                                        <div className="text-xs text-black/50">
                                            {review.role}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
