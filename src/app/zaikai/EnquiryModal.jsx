"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Clock,
    Loader2,
    Mail,
    Minus,
    Phone,
    Plus,
    ShieldCheck,
    Sparkles,
    User,
    X,
} from "lucide-react";

const serif = Playfair_Display({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const ease = [0.22, 1, 0.36, 1];

const enquiryTypes = ["Request a quote", "Book a demo", "General question"];

const perks = [
    { icon: Clock, text: "Reply within 1 business day" },
    { icon: Sparkles, text: "Tailored recommendations" },
    { icon: ShieldCheck, text: "No obligation, no spam" },
];

const emptyForm = {
    type: enquiryTypes[0],
    name: "",
    email: "",
    phone: "",
    organization: "",
    quantity: 1,
    message: "",
};

function Field({ id, label, icon: Icon, required, children }) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a5670]"
            >
                {label}
                {required && <span className="text-[#1243b8]">*</span>}
            </label>
            <div className="group relative">
                {Icon && (
                    <Icon
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a95a8] transition-colors group-focus-within:text-[#1243b8]"
                    />
                )}
                {children}
            </div>
        </div>
    );
}

export default function EnquiryModal({ product, onClose, reduceMotion }) {
    const [form, setForm] = useState(emptyForm);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const firstFieldRef = useRef(null);
    const Icon = product.icon;

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        firstFieldRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
    const setQty = (n) => setForm((f) => ({ ...f, quantity: Math.max(1, n) }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product: product.name, ...form }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    const input =
        "w-full rounded-xl border border-[#e1e6ee] bg-[#f8fafc] py-3 pl-10 pr-4 text-sm text-[#111b2f] outline-none transition placeholder:text-[#9aa5b8] hover:border-[#c9d3e2] focus:border-[#1243b8] focus:bg-white focus:ring-4 focus:ring-[#1243b8]/10";

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* backdrop */}
            <div
                className="absolute inset-0 bg-[#030b1a]/75 backdrop-blur-md"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* dialog */}
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="enquiry-title"
                initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.97 }}
                transition={{ duration: 0.4, ease }}
                className="relative z-10 flex max-h-[94vh] w-full max-w-[1200px] flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_40px_120px_rgba(3,11,26,0.55)] sm:rounded-[28px] md:max-h-[90vh] md:flex-row"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#06142c] shadow-lg ring-1 ring-black/5 transition hover:rotate-90 hover:bg-[#8fdcf5]"
                >
                    <X size={18} />
                </button>

                {/* ───── PRODUCT PANEL ───── */}
                <aside className="relative h-48 w-full shrink-0 overflow-hidden bg-[#06142c] md:h-auto md:w-[40%]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06142c] via-[#06142c]/70 to-[#06142c]/10 md:via-[#06142c]/60" />

                    <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <span
                                className={`flex h-10 w-10 items-center justify-center rounded-xl ${product.badge}`}
                            >
                                <Icon size={20} />
                            </span>
                            {product.categories.map((c) => (
                                <span
                                    key={c}
                                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>

                        <div>
                            <p className="mb-2 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#83d7ed]">
                                <span className="h-px w-7 bg-[#83d7ed]" />
                                Enquire about
                            </p>
                            <h3
                                className={`${serif.className} text-[1.75rem] font-semibold leading-[1.1] md:text-[2.1rem]`}
                            >
                                {product.name}
                            </h3>
                            <p className="mt-3 hidden max-w-[320px] text-sm leading-6 text-white/80 md:block">
                                {product.description}
                            </p>

                            <ul className="mt-6 hidden space-y-3 border-t border-white/15 pt-5 md:block">
                                {perks.map(({ icon: P, text }) => (
                                    <li key={text} className="flex items-center gap-3 text-[13px] text-white/90">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 text-[#8fdcf5] ring-1 ring-white/15">
                                            <P size={14} />
                                        </span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* ───── FORM PANEL ───── */}
                <div className="flex-1 overflow-y-auto bg-white p-5 sm:p-8 md:p-9">
                    {status === "success" ? (
                        <motion.div
                            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease }}
                            className="flex h-full min-h-[360px] flex-col items-center justify-center text-center"
                        >
                            <motion.span
                                initial={reduceMotion ? false : { scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                                className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-8 ring-emerald-50/60"
                            >
                                <CheckCircle2 size={44} strokeWidth={1.75} />
                            </motion.span>
                            <h4 className={`${serif.className} mt-6 text-3xl font-semibold text-[#0e1a33]`}>
                                Enquiry sent
                            </h4>
                            <p className="mt-3 max-w-[340px] text-sm leading-6 text-[#4a5670]">
                                Thanks, {form.name.split(" ")[0] || "there"}! We&apos;ve received your
                                request about <strong className="text-[#0e1a33]">{product.name}</strong> and
                                will reply to <strong className="text-[#0e1a33]">{form.email}</strong> shortly.
                            </p>
                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#06142c] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition hover:bg-[#0c2845]"
                            >
                                Back to products
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#06142c]">
                                    <ArrowRight size={16} />
                                </span>
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <header className="pr-10">
                                <h4
                                    id="enquiry-title"
                                    className={`${serif.className} text-[1.7rem] font-semibold leading-tight text-[#0e1a33] sm:text-3xl`}
                                >
                                    Let&apos;s find the right fit.
                                </h4>
                                <p className="mt-1.5 text-sm leading-6 text-[#4a5670]">
                                    Tell us about your space and we&apos;ll get back with options.
                                </p>
                            </header>

                            {/* enquiry type segmented control */}
                            <div
                                role="radiogroup"
                                aria-label="Enquiry type"
                                className="grid grid-cols-3 gap-1 rounded-2xl bg-[#eef2f8] p-1"
                            >
                                {enquiryTypes.map((t) => {
                                    const on = form.type === t;
                                    return (
                                        <button
                                            key={t}
                                            type="button"
                                            role="radio"
                                            aria-checked={on}
                                            onClick={() => setForm((f) => ({ ...f, type: t }))}
                                            className={`rounded-xl px-2 py-2.5 text-[12px] font-semibold leading-tight transition sm:text-[13px] ${
                                                on
                                                    ? "bg-[#06142c] text-white shadow-md"
                                                    : "text-[#4a5670] hover:bg-white/70"
                                            }`}
                                        >
                                            {t}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field id="enq-name" label="Full name" icon={User} required>
                                    <input
                                        id="enq-name"
                                        ref={firstFieldRef}
                                        required
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={update("name")}
                                        placeholder="Jane Doe"
                                        className={input}
                                    />
                                </Field>
                                <Field id="enq-email" label="Email" icon={Mail} required>
                                    <input
                                        id="enq-email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={update("email")}
                                        placeholder="jane@company.com"
                                        className={input}
                                    />
                                </Field>
                                <Field id="enq-phone" label="Phone" icon={Phone}>
                                    <input
                                        id="enq-phone"
                                        type="tel"
                                        autoComplete="tel"
                                        value={form.phone}
                                        onChange={update("phone")}
                                        placeholder="+1 555 000 0000"
                                        className={input}
                                    />
                                </Field>
                                <Field id="enq-org" label="Organization" icon={Building2}>
                                    <input
                                        id="enq-org"
                                        autoComplete="organization"
                                        value={form.organization}
                                        onChange={update("organization")}
                                        placeholder="School / company"
                                        className={input}
                                    />
                                </Field>
                            </div>

                            {/* quantity stepper */}
                            <div className="flex items-center justify-between rounded-2xl border border-[#e1e6ee] bg-[#f8fafc] px-4 py-3">
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a5670]">
                                        Quantity
                                    </p>
                                    <p className="text-xs text-[#8a95a8]">How many units do you need?</p>
                                </div>
                                <div className="flex items-center gap-1 rounded-full bg-white p-1 shadow-sm ring-1 ring-[#e1e6ee]">
                                    <button
                                        type="button"
                                        onClick={() => setQty(form.quantity - 1)}
                                        aria-label="Decrease quantity"
                                        disabled={form.quantity <= 1}
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#06142c] transition hover:bg-[#eef2f8] disabled:opacity-30"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <input
                                        aria-label="Quantity"
                                        inputMode="numeric"
                                        value={form.quantity}
                                        onChange={(e) =>
                                            setQty(parseInt(e.target.value.replace(/\D/g, ""), 10) || 1)
                                        }
                                        className="w-10 bg-transparent text-center text-sm font-semibold text-[#0e1a33] outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setQty(form.quantity + 1)}
                                        aria-label="Increase quantity"
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#06142c] transition hover:bg-[#eef2f8]"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="enq-msg"
                                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a5670]"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="enq-msg"
                                    rows={3}
                                    value={form.message}
                                    onChange={update("message")}
                                    placeholder="Room size, use case, timeline…"
                                    className="w-full resize-none rounded-xl border border-[#e1e6ee] bg-[#f8fafc] px-4 py-3 text-sm text-[#111b2f] outline-none transition placeholder:text-[#9aa5b8] hover:border-[#c9d3e2] focus:border-[#1243b8] focus:bg-white focus:ring-4 focus:ring-[#1243b8]/10"
                                />
                            </div>

                            {status === "error" && (
                                <p
                                    role="alert"
                                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700"
                                >
                                    Something went wrong. Please try again.
                                </p>
                            )}

                            <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                                <p className="flex items-center gap-2 text-xs text-[#8a95a8]">
                                    <ShieldCheck size={14} className="shrink-0" />
                                    Your details are only used to respond to this enquiry.
                                </p>
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="inline-flex shrink-0 items-center justify-between gap-6 rounded-full bg-[#06142c] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white shadow-lg shadow-[#06142c]/20 transition hover:bg-[#0c2845] disabled:opacity-70"
                                >
                                    {status === "sending" ? "Sending…" : "Send enquiry"}
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#06142c]">
                                        {status === "sending" ? (
                                            <Loader2 size={16} className="animate-spin" />
                                        ) : (
                                            <ArrowRight size={16} />
                                        )}
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}