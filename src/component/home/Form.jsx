"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaArrowRight,
    FaPaperPlane,
    FaXTwitter,
} from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Input({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                {label}
            </label>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a3d] outline-none transition placeholder:text-slate-400 focus:border-[#f5bd24] focus:bg-white"
            />
        </div>
    );
}

function SocialIcon({
    href,
    label,
    icon,
}) {
    return (
        <a
            href={href}
            aria-label={label}
            className="
        flex
        h-12
        w-12
        items-center
        justify-center
        border
        border-[#0d2461]
        text-[#0d2461]
        transition-all
        duration-300
        hover:border-[#D4A017]
        hover:bg-[#D4A017]
        hover:text-white
      "
        >
            {icon}
        </a>
    );
}

const products = [
    "PVC Resin",
    "PET Resin",
    "Polymers",
    "Plasticizers",
    "Calcium Carbonate",
    "Fillers & Colourants",
    "Natural & Synthetic Rubber",
    "Other",
];

export default function Form() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };
    return (
        <section className="px-6 py-14 md:px-12 border-t border-orange-100">

            <div className="mx-auto max-w-7xl">

                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5bd24]">
                            Send An Enquiry
                        </p>

                        <h2 className="mt-4 text-4xl font-black leading-tight text-[#071a3d] sm:text-5xl">
                            Tell Us What
                            <br />
                            <span className="text-[#f5bd24]">
                                You Need.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                            Share your requirement with our team. Tell us
                            about the product you are looking for and our
                            team will get back to you.
                        </p>

                        <div className="mt-10 border-l-2 border-[#f5bd24] pl-5">
                            <p className="text-sm font-black text-[#071a3d]">
                                Looking for a specific product?
                            </p>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Mention the product, quantity and any
                                specific requirements in your message.
                            </p>
                        </div>

                        <div>

                            <p
                                className="
                                          my-4
                                          text-[10px]
                                          font-bold
                                          uppercase
                                          tracking-[0.25em]
                                          text-white-50
                                        "
                            >
                                Connect With Us
                            </p>

                            <div className="flex gap-2">

                                <SocialIcon
                                    href="#"
                                    label="Facebook"
                                    icon={<FaFacebookF size={20} />}
                                />

                                <SocialIcon
                                    href="#"
                                    label="Instagram"
                                    icon={<FaInstagram size={20} />}
                                />

                                <SocialIcon
                                    href="#"
                                    label="YouTube"
                                    icon={<FaYoutube size={20} />}
                                />

                                <SocialIcon
                                    href="#"
                                    label="X"
                                    icon={<FaXTwitter size={20} />}
                                />

                            </div>

                        </div>

                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(7,26,61,0.08)] sm:p-8 lg:p-10"
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-5"
                        >

                            <div className="grid gap-5 sm:grid-cols-2">

                                <Input
                                    label="Name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                />

                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                />

                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">

                                <Input
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                />

                                <div>
                                    <label className="mb-2 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                                        Product
                                    </label>

                                    <select
                                        name="product"
                                        required
                                        className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a3d] outline-none transition focus:border-[#f5bd24] focus:bg-white"
                                    >
                                        <option value="">
                                            Select product
                                        </option>

                                        {products.map((product) => (
                                            <option
                                                key={product}
                                                value={product}
                                            >
                                                {product}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder="Tell us about your requirement..."
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-[#071a3d] outline-none transition placeholder:text-slate-400 focus:border-[#f5bd24] focus:bg-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-2 inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#071a3d] px-7 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                {submitted
                                    ? "Enquiry Sent"
                                    : "Send Enquiry"}

                                <FaPaperPlane
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                        </form>

                    </motion.div>

                </div>

            </div>
        </section>
    )
}
