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
import { FaLinkedinIn } from "react-icons/fa";

function Input({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    inputMode,
    maxLength,
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                inputMode={inputMode}
                maxLength={maxLength}
                autoComplete={name === "name" ? "name" : name === "email" ? "email" : "tel"}
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
    
    "Polymers",
    "PET Resin",
    "Plasticizers",
    "Calcium Carbonate",
    "Citric Acid ",
    "Melamine",
    "Additives",
  
];

export default function Form() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        product: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const digits = value.replace(/\\D/g, "").slice(-10);
            setForm((prev) => ({ ...prev, mobile: digits }));
            return;
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        const mobile = form.mobile.trim();
        if (!/^[0-9]{10}$/.test(mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setLoading(true);
        try {
            // Same endpoint and payload shape as the existing EnquiryPopup.
            const response = await fetch("https://brandbnalo.com/api/form/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    platform: "RESOL Industries Limited",
        platformEmail: "info@resolvinyls.com",
                    email: form.email.trim(),
                    phone:mobile,
                    place:"NA",
                    product: form.product,
                    company: "NA",
                    message: form.message.trim(),
                }),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || result?.success === false) {
                throw new Error(
                    result?.message ||
                    result?.error ||
                    `Unable to submit your enquiry (HTTP ${response.status}). Please try again.`
                );
            }

            setSubmitted(true);
            setForm({
                name: "",
                email: "",
                mobile: "",
                product: "",
                message: "",
            });
        } catch (err) {
            setError(
                err instanceof TypeError
                    ? "Could not connect to the enquiry server. Please check your connection or API CORS settings and try again."
                    : err.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
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
                                   Visit Our corporate Office
                                </p>

                                <h3 className="mt-1 text-lg font-black leading-tight text-[#071a3d]">
                                    New Delhi Office
                                </h3>
                            </div>

                        </div>

                        {/* ADDRESS */}
                        <p className="mb-4 max-w-md text-sm leading-6 text-slate-900">
                            {address}
                        </p>

                        {/* MAP */}
                        <div className="overflow-hidden rounded-xl border border-slate-200">
                            <iframe
                                title="Resol Industries Limited Office Location"
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
                                    href="https://www.facebook.com/ResolIndustriesLtd"
                                    label="Facebook"
                                    icon={<FaFacebookF size={16} />}
                                />

                                <SocialIcon
                                    href="https://www.instagram.com/resolindustriesltd/"
                                    label="Instagram"
                                    icon={<FaInstagram size={17} />}
                                />

                                {/* <SocialIcon
                                    href="#"
                                    label="YouTube"
                                    icon={<FaYoutube size={17} />}
                                /> */}

                                <SocialIcon
                                    href="https://www.linkedin.com/company/resol-industries-ltd"
                                    label="Linkedin"
                                    icon={<FaLinkedinIn size={16} />}
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
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            {/* PHONE + PRODUCT */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                <Input
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    inputMode="numeric"
                                    maxLength={10}
                                    required
                                />

                                <div>
                                    <label className="mb-1.5 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                                        Product
                                    </label>

                                    <select
                                        name="product"
                                        value={form.product}
                                        onChange={handleChange}
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

                                <label className="mb-1.5 block text-xs font-black uppercase tracking-[0.15em] text-[#071a3d]">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                    placeholder="Tell us about your requirement..."
                                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-[#071a3d] outline-none transition placeholder:text-slate-400 focus:border-[#f5bd24] focus:bg-white"
                                />

                            </div>

                            {error && (
                                <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {error}
                                </p>
                            )}

                            {submitted && (
                                <p role="status" className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                                    Thank you! Your enquiry has been submitted successfully.
                                </p>
                            )}

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group mt-1 inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[#071a3d] px-6 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#f5bd24] hover:text-[#071a3d] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Submitting..." : submitted ? "Enquiry Sent" : "Send Enquiry"}

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