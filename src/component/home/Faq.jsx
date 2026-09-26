"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ChevronDown,
    FlaskConical,
    Factory,
    Package,
    MapPin,
    Mail,
    ShieldCheck,
    Boxes,
    Handshake,
    Map,
} from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "What products does Resol Industries offer?",
        answer:
            "Resol Industries Ltd. offers polymers, resins, chemicals, plasticizers, fillers, colourants, and rubber products including PVC Resin, PET Resin, EVA, Calcium Carbonate, Citric Acid, Plasticizers, and Natural & Synthetic Rubber.",
        icon: FlaskConical,
        color: "gold",
        products: [
            {
                name: "PVC Resin",
                image: "/products/pvc-resin.webp",
            },
            {
                name: "PET Resin",
                image: "/products/pet-resin.webp",
            },
            {
                name: "Calcium Carbonate",
                image: "/products/calcium-carbonate.webp",
            },
            {
                name: "Citric Acid",
                image: "/products/citric-acid.webp",
            },
            {
                name: "Plasticizers",
                image: "/products/plasticizers.webp",
            },
            {
                name: "Natural & Synthetic Rubber",
                image: "/products/rubber.webp",
            },
        ],
    },
    {
        id: 2,
        question: "Which industries do you serve?",
        answer:
            "We serve a wide range of industries including Packaging, Plastics, PVC Pipes & Fittings, Paints & Coatings, Footwear, Flooring, Adhesives, Textiles, and other manufacturing applications.",
        icon: Factory,
        color: "blue",
    },
    {
        id: 3,
        question: "Do you supply products in bulk?",
        answer:
            "Yes. Resol Industries specialises in B2B and wholesale distribution and supports bulk requirements based on product availability, specifications, quantity, and delivery requirements.",
        icon: Package,
        color: "gold",
    },
    {
        id: 4,
        question: "Where does Resol Industries operate?",
        answer:
            "Our head office is based in New Delhi, and we serve customers across India through our supply and distribution network.",
        icon: MapPin,
        color: "blue",
    },
    {
        id: 5,
        question: "How can I enquire about a product?",
        answer:
            "You can contact our team through the enquiry form or contact page. Share the product, required quantity, application, and delivery location, and our team will assist you with the relevant information.",
        icon: Mail,
        color: "gold",
    },
];

const benefits = [
    {
        icon: ShieldCheck,
        title: "Trusted",
        subtitle: "Quality",
    },
    {
        icon: Boxes,
        title: "Bulk",
        subtitle: "Supply",
    },
    {
        icon: Handshake,
        title: "Reliable",
        subtitle: "Partnerships",
    },
    {
        icon: Map,
        title: "Pan India",
        subtitle: "Reach",
    },
];

export default function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(1);

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };

    return (
        <section className="relative overflow-hidden bg-[#fafaf8] py-10 md:py-12 lg:py-15">

            {/* Decorative Shapes */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#f5bd24]/5 blur-3xl" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0d2461]/5 blur-3xl" />

            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* ================= HEADER ================= */}
                <div className="mb-5 max-w-3xl lg:mb-8">

                    <span className="mb- inline-block text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d39d09]">
                        Quick Answers
                    </span>

                    <h2 className="font-[Playfair_Display,serif] text-4xl font-semibold leading-[1.05] text-[#0d2461] sm:text-5xl lg:text-6xl">
                        Frequently Asked{" "}
                        <span className="text-[#f5bd24]">
                            Questions
                        </span>
                    </h2>

                    <div className="mt-4 h-[3px] w-16 bg-[#f5bd24]" />

                </div>

                {/* ================= MAIN GRID ================= */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">

                    {/* ================= FAQ LEFT ================= */}
                    <div className="space-y-4">

                        {faqs.map((faq) => {
                            const Icon = faq.icon;
                            const isOpen = activeFaq === faq.id;

                            return (
                                <div
                                    key={faq.id}
                                    className={`overflow-hidden rounded-[22px] border bg-white transition-all duration-500 ${isOpen
                                        ? "border-[#dbe3ed] shadow-[0_15px_50px_rgba(13,36,97,0.08)]"
                                        : "border-slate-200 hover:border-[#f5bd24]/50"
                                        }`}
                                >

                                    {/* FAQ HEADER */}
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(faq.id)}
                                        className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-6 md:py-4"
                                    >

                                        {/* Icon */}
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${faq.color === "gold"
                                                ? "bg-[#fff4d3] text-[#d29c0c]"
                                                : "bg-[#e8f1fc] text-[#0d2461]"
                                                }`}
                                        >
                                            <Icon size={22} strokeWidth={1.8} />
                                        </div>

                                        {/* Question */}
                                        <span className="flex-1 pr-3 text-[15px] font-semibold leading-6 text-[#0d2461] md:text-[17px]">
                                            {faq.question}
                                        </span>

                                        {/* Arrow */}
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 ${isOpen
                                                ? "rotate-180 border-[#f5bd24] bg-[#f5bd24] text-[#0d2461]"
                                                : "text-[#0d2461]"
                                                }`}
                                        >
                                            <ChevronDown size={18} />
                                        </span>

                                    </button>

                                    {/* FAQ CONTENT */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 pb-6 md:px-6 md:pb-7">

                                                <div className="ml-0 border-l-2 border-[#f5bd24] pl-5 md:ml-[60px]">
                                                    <p className="text-[14px] leading-7 text-slate-500 md:text-[15px]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}

                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="relative">
                        {/* PRODUCT IMAGE */}
                        <div className="relative mx-auto w-full max-w-[600px]">

                            {/* Yellow decorative border */}
                            <div className="absolute -left-3 top-8 h-[78%] w-[92%] rounded-[55px] border-[5px] border-[#f5bd24] md:-left-5" />

                            {/* Image wrapper */}
                            <div className="relative overflow-hidden rounded-[55px] bg-slate-100">

                                <div className="relative aspect-[4/3.5]">

                                    <Image
                                        src="/images.jpg"
                                        alt="Resol Industries polymers and chemical products"
                                        fill
                                        priority
                                        className="object-cover"
                                    />

                                </div>

                            </div>

                            {/* Floating circle */}
                            <div className="absolute -right-2 top-12 h-6 w-6 rounded-full bg-[#f5bd24] md:-right-4" />

                        </div>

                        {/* ================= BENEFITS ================= */}
                        <div className="mt-8 grid grid-cols-4">

                            {benefits.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className={`flex flex-col items-center justify-center px-2 text-center ${index !== 0
                                            ? "border-l border-[#f5bd24]"
                                            : ""
                                            }`}
                                    >

                                        <Icon
                                            size={25}
                                            strokeWidth={1.6}
                                            className="mb-3 text-[#0d2461]"
                                        />

                                        <span className="text-[11px] font-semibold text-[#0d2461] md:text-xs">
                                            {item.title}
                                        </span>

                                        <span className="text-[10px] text-slate-500 md:text-[11px]">
                                            {item.subtitle}
                                        </span>

                                    </div>
                                );
                            })}

                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom decorative line */}
            <div className="pointer-events-none absolute -bottom-32 right-[-100px] h-64 w-64 rounded-full border border-[#0d2461]/10" />
            <div className="pointer-events-none absolute -bottom-24 right-[-60px] h-48 w-48 rounded-full border border-[#0d2461]/10" />

        </section>
    );
}