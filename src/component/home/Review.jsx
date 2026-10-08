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
            "RIL has consistently provided quality PVC Resin that meets our application requirements. Their sourcing and supply process has been reliable.",
        name: "Rajesh Mehta",
        role: "Procurement Manager",
    },
    {
        quote:
            "We appreciate the consistency of the PVC Resin supplied by RIL. The material has worked well for our rigid PVC profile production.",
        name: "Amit Sharma",
        role: "Production Head",
    },
    {
        quote:
            "RIL offers professional service with prompt communication and dependable coordination. They have been a reliable sourcing partner for us.",
        name: "Sandeep Gupta",
        role: "Purchase Manager",
    },
    {
        quote:
            "RIL has helped us maintain a steady supply of PVC Resin for our manufacturing requirements. Their product specifications have been consistent.",
        name: "Vikram Patel",
        role: "Operations Manager",
    },
    {
        quote:
            "The team at RIL understands our material requirements and provides suitable PVC Resin options. Their support throughout the sourcing process is appreciated.",
        name: "Manoj Agarwal",
        role: "Business Owner",
    },
    {
        quote:
            "We value RIL for their reliable PVC Resin sourcing, consistent service, and professional approach. They have become a dependable part of our supply chain.",
        name: "Nitin Verma",
        role: "Director",
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
                            <article className="flex h-full min-h-[200px] flex-col rounded-[24px] bg-white p-4 text-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-4">
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
