
"use client";

import { useEffect, useState } from "react";
import {
  X,
  UserRound,
  Mail,
  Phone,
  Package,
  MessageSquareText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const products = [
  "Polymers",
    "PET Resin",
    "Plasticizers",
    "Calcium Carbonate",
    "Citric Acid ",
    "Melamine",
    "Additives",
];

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  product: "",
  message: "",
};

const fields = [
  {
    name: "name",
    placeholder: "Full Name *",
    Icon: UserRound,
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    placeholder: "Email Address *",
    Icon: Mail,
    type: "email",
    autoComplete: "email",
  },
];

export default function EnquiryPopup({
  initialProduct = "",
  open,
  onClose,
}) {
  const isControlled = typeof open === "boolean";
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open : internalOpen;

  const [form, setForm] = useState({
    ...initialForm,
    product: initialProduct,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setForm((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const setIsOpen = (value) => {
    if (!isControlled) {
      setInternalOpen(value);
    }

    if (!value) {
      onClose?.();
    }
  };

  const openPopup = () => {
    setSuccess(false);
    setError("");
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  // Lock background scrolling while the popup is open.
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    const previousHtmlOverflow = html.style.overflow;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;
      body.style.overflow = previousBodyStyles.overflow;
      body.style.paddingRight = previousBodyStyles.paddingRight;
      html.style.overflow = previousHtmlOverflow;

      window.removeEventListener("keydown", handleEscape);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        mobile: digitsOnly,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const cleanedName = form.name.trim();
    const cleanedEmail = form.email.trim();
    const cleanedMessage = form.message.trim();

    if (!cleanedName) {
      setError("Please enter your full name.");
      return;
    }

   

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.product) {
      setError("Please select a product.");
      return;
    }

    if (!cleanedMessage) {
      setError("Please tell us about your requirements.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        platform: "RESOL Industries Limited",
        platformEmail: "info@resolvinyls.com",
        company: "NA",
        name: cleanedName,
        email: cleanedEmail,
        phone: form.mobile,
        place: "NA",
        product: form.product,
        message: cleanedMessage,
      };

      const response = await fetch("https://brandbnalo.com/api/form/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result = null;
      const responseText = await response.text();

      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = null;
        }
      }

      if (!response.ok || result?.success === false) {
        throw new Error(
          result?.message ||
            result?.error ||
            `Unable to submit your enquiry (HTTP ${response.status}). Please try again.`
        );
      }

      setSuccess(true);
      setForm({
        ...initialForm,
        product: initialProduct,
      });
    } catch (err) {
      console.error("Enquiry form submission failed:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Standalone button; hidden when controlled by Navbar */}
      {!isControlled && (
        <button
          type="button"
          onClick={openPopup}
          className="inline-flex items-center gap-3 rounded-lg bg-[#051B6F] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2b92]"
        >
          Get a Quote
          <ArrowRight size={18} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto overscroll-contain touch-pan-y bg-slate-950/75 p-2 backdrop-blur-sm sm:items-center sm:p-5 md:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePopup();
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative my-2 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl sm:my-4 sm:rounded-2xl md:my-auto md:grid-cols-[0.85fr_1.15fr] motion-safe:animate-[enquiryPopupIn_.3s_ease-out]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close enquiry form"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#051B6F] shadow-md transition hover:rotate-90 hover:bg-slate-100"
            >
              <X size={21} />
            </button>

            {/* Left branding panel */}
            <div
              className="relative flex min-h-[150px] flex-col overflow-hidden bg-cover bg-center p-4 sm:min-h-[220px] sm:p-7 md:min-h-[620px] md:p-9"
              style={{
                backgroundImage: `
                  linear-gradient(
                    180deg,
                    rgba(240,246,255,0.96),
                    rgba(240,246,255,0.90) 48%,
                    rgba(255,248,231,0.82)
                  )
                `,
              }}
            >
              <div className="relative z-10">
                <div className="text-5xl font-black leading-none tracking-tighter text-[#bd7a08]">
                  R
                </div>

                <p className="mt-1 text-xs font-extrabold tracking-[0.45em] text-[#bd7a08]">
                  RESOL
                </p>
              </div>

              <div className="relative z-10 mt-5 sm:mt-8 md:mt-16">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#b77c13] sm:text-xs">
                  YOUR TRUSTED POLYMER PARTNER
                </span>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#051B6F] sm:text-4xl lg:text-[42px]">
                  Let&apos;s Build
                  <br className="hidden md:block" /> a Stronger
                  <br className="hidden md:block" /> Tomorrow
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                  Get in touch with our experts for product enquiries,
                  competitive pricing and dependable bulk supply.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#051B6F]">
                    <ShieldCheck
                      size={19}
                      className="text-[#c58a19]"
                    />
                    Consistent Quality
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#051B6F]">
                    <Package
                      size={19}
                      className="text-[#c58a19]"
                    />
                    Reliable Supply
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 hidden border-t border-[#051B6F]/15 pt-5 text-[10px] font-bold tracking-[0.2em] text-[#051B6F] md:mt-auto md:block">
                RESOL INDUSTRIES LIMITED
              </div>

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-[#e5a01a]/40" />
            </div>

            {/* Right form panel */}
            <div className="min-w-0 bg-white p-4 sm:p-6 md:p-9 lg:p-10">
              {!success ? (
                <>
                  <div className="pr-9">
                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#bd7a08]">
                      WE&apos;RE HERE TO HELP
                    </span>

                    <h2
                      id="enquiry-title"
                      className="mt-2 text-3xl font-extrabold tracking-tight text-[#051B6F] sm:text-4xl"
                    >
                      Get a Quote
                    </h2>

                    <div className="mt-4 h-1 w-12 rounded-full bg-[#e5a01a]" />

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      Share your requirements and our team will get
                      back to you shortly.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col gap-3"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {fields.map(
                        ({
                          name,
                          placeholder,
                          Icon,
                          type,
                          autoComplete,
                        }) => (
                          <label
                            key={name}
                            className="flex min-h-12 min-w-0 items-center gap-3 rounded-lg border border-slate-200 px-3 transition focus-within:border-[#051B6F] focus-within:ring-2 focus-within:ring-[#051B6F]/10"
                          >
                            <Icon
                              size={18}
                              className="shrink-0 text-slate-600"
                            />

                            <input
                              name={name}
                              type={type}
                              placeholder={placeholder}
                              aria-label={placeholder}
                              autoComplete={autoComplete}
                              value={form[name]}
                              onChange={handleChange}
                              required
                              maxLength={120}
                              className="h-12 w-full min-w-0 bg-transparent text-sm text-black outline-none placeholder:text-black"
                            />
                          </label>
                        )
                      )}
                    </div>

                    {/* Row 2: Mobile + Product */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <label className="flex min-h-12 min-w-0 items-center gap-3 rounded-lg border border-slate-200 px-3 transition focus-within:border-[#051B6F] focus-within:ring-2 focus-within:ring-[#051B6F]/10">
                        <Phone
                          size={18}
                          className="shrink-0 text-slate-600"
                        />

                        <input
                          name="mobile"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          placeholder="Mobile Number *"
                          aria-label="Mobile Number"
                          autoComplete="tel"
                          value={form.mobile}
                          onChange={handleChange}
                          required
                          maxLength={10}
                          title="Enter exactly 10 digits."
                          className="h-12 w-full min-w-0 bg-transparent text-sm text-black outline-none placeholder:text-black"
                        />
                      </label>

                      <label className="flex min-h-12 min-w-0 items-center gap-3 rounded-lg border border-slate-200 px-3 transition focus-within:border-[#051B6F] focus-within:ring-2 focus-within:ring-[#051B6F]/10">
                        <Package
                          size={18}
                          className="shrink-0 text-slate-600"
                        />

                        <select
                          name="product"
                          aria-label="Select product"
                          value={form.product}
                          onChange={handleChange}
                          required
                          className="h-12 w-full min-w-0 bg-transparent text-sm text-black outline-none"
                        >
                          <option value="" disabled>
                            Select Product *
                          </option>

                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    {/* Message: Full width */}
                    <label className="flex items-start gap-3 rounded-lg border border-slate-200 px-3 py-3 transition focus-within:border-[#051B6F] focus-within:ring-2 focus-within:ring-[#051B6F]/10">
                      <MessageSquareText
                        size={19}
                        className="mt-0.5 shrink-0 text-slate-600"
                      />

                      <textarea
                        name="message"
                        placeholder="Tell us about your requirements *"
                        aria-label="Message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                        maxLength={2000}
                        className="w-full resize-y bg-transparent text-sm leading-6 text-black outline-none placeholder:text-black"
                      />
                    </label>

                    {error && (
                      <p role="alert" className="text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#051B6F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b2b92] disabled:cursor-wait disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Submit Enquiry"}
                      {!loading && <ArrowRight size={19} />}
                    </button>

                    <p className="text-center text-[10px] leading-5 text-slate-500">
                      Your information will be used to respond to
                      your enquiry.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center sm:min-h-[400px]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#051B6F]">
                    <ShieldCheck size={35} />
                  </div>

                  <h2 className="mt-5 text-3xl font-bold text-[#051B6F]">
                    Thank You!
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                    Your enquiry has been submitted successfully.
                    Our team will get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={closePopup}
                    className="mt-7 rounded-lg bg-[#051B6F] px-8 py-3 text-sm font-bold text-white hover:bg-[#0b2b92]"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      <style jsx global>{`
        @keyframes enquiryPopupIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
