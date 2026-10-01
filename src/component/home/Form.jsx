"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaPaperPlane,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaLocationDot,
} from "react-icons/fa6";

function Input({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}) {
    return (
        <div>
            <label className="mb-1.5 block text-base font-black uppercase tracking-[0.15em] text-[#071a3d]">
                {label}
            </label>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a3d] outline-none transition placeholder:text-slate-400 focus:border-[#f5bd24] focus:bg-white"
            />
        </div>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex h-10 w-10 items-center justify-center
                rounded-lg border border-[#0d2461]
                text-[#0d2461]
                transition-all duration-300
                hover:border-[#f5bd24]
                hover:bg-[#f5bd24]
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

    const address =
        "Office No. DSM-321, DLF Tower, Shivaji Marg, New Delhi 110015";

    return (
        <section className="relative border-t border-orange-100 px-5 py-10 md:px-10 md:py-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", }} > {/* Background Overlay */}

            {/* <div className="absolute inset-0 bg-[#071a3d]/85" /> */}

            <div className="relative z-10 mx-auto max-w-7xl">

                <div className="grid lg:grid-cols-2 gap-5">

                    {/* ================= LEFT CONTACT ================= */}
                    {/* LEFT CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[1.5rem] border border-white/30 bg-white/35 backdrop-blur-sm p-4 shadow-[0_15px_50px_rgba(7,26,61,0.12)] sm:p-5"
                    >

                        {/* LOCATION TITLE */}
                        <div className="mb-4 flex items-start gap-3">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5bd24] text-[#071a3d]">
                                <FaLocationDot size={17} />
                            </div>

                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5bd24]">
                                    Visit Our Office
                                </p>

                                <h3 className="mt-1 text-lg font-black leading-tight text-[#071a3d]">
                                    New Delhi Office
                                </h3>
                            </div>

                        </div>

                        {/* ADDRESS */}
                        <p className="mb-4 max-w-md text-sm leading-6 text-slate-600">
                            {address}
                        </p>

                        {/* MAP */}
                        <div className="overflow-hidden rounded-xl border border-slate-200">
                            <iframe
                                title="Resol Industry Office Location"
                                src="https://www.google.com/maps?q=DLF+Tower,+Shivaji+Marg,+New+Delhi+110015&output=embed"
                                className="h-[330px] w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* SOCIAL */}
                        <div className="mt-5 border-t border-slate-100 pt-4">

                            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#071a3d]">
                                Connect With Us
                            </p>

                            <div className="flex gap-2.5">

                                <SocialIcon
                                    href="#"
                                    label="Facebook"
                                    icon={<FaFacebookF size={16} />}
                                />

                                <SocialIcon
                                    href="#"
                                    label="Instagram"
                                    icon={<FaInstagram size={17} />}
                                />

                                <SocialIcon
                                    href="#"
                                    label="YouTube"
                                    icon={<FaYoutube size={17} />}
                                />

                                <SocialIcon
                                    href="#"
                                    label="X"
                                    icon={<FaXTwitter size={16} />}
                                />

                            </div>

                        </div>

                    </motion.div>

                    {/* ================= RIGHT FORM ================= */}
                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[1.5rem] border border-white/30 bg-white/35 backdrop-blur-sm p-5 shadow-[0_15px_50px_rgba(7,26,61,0.12)] sm:p-7 lg:p-8"
                    >

                        {/* HEADING */}
                        <div className="mb-6 text-center">

                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white bg-[#0d2461] rounded-md px-2 py-2">
                                Send An Enquiry
                            </span>

                            <h2 className="mt-2 text-3xl font-black leading-tight text-[#0d2461] sm:text-4xl">
                                Tell Us What{" "}
                                <span className="">
                                    You Need.
                                </span>
                            </h2>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-4"
                        >

                            {/* NAME + EMAIL */}
                            <div className="grid gap-4 sm:grid-cols-2">

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

                            {/* PHONE + PRODUCT */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                <Input
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                />

                                <div>
                                    <label className="mb-1.5 block text-base font-black uppercase tracking-[0.15em] text-[#071a3d]">
                                        Product
                                    </label>

                                    <select
                                        name="product"
                                        required
                                        className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a3d] outline-none transition focus:border-[#f5bd24] focus:bg-white"
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

                            {/* MESSAGE */}
                            <div>

                                <label className="mb-1.5 block text-base font-black uppercase tracking-[0.15em] text-[#071a3d]">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder="Tell us about your requirement..."
                                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-[#071a3d] outline-none transition placeholder:text-slate-400 focus:border-[#f5bd24] focus:bg-white"
                                />

                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="group mt-1 inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[#071a3d] px-6 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#f5bd24] hover:text-[#071a3d]"
                            >
                                {submitted
                                    ? "Enquiry Sent"
                                    : "Send Enquiry"}

                                <FaPaperPlane
                                    size={13}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                        </form>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}