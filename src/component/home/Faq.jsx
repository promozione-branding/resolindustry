"use client";

import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import {
    ArrowRight,
    Phone,
    ShieldCheck,
    Boxes,
    Handshake,
} from "lucide-react";

const faqs = [
    {
        q: "What is the current PVC Resin price in India?",
        a: "The PVC Resin price in India can vary based on the grade, quantity, market conditions, and sourcing. Contact Resol Industries for the latest PVC Resin price based on your requirement.",
    },
    {
        q: "What is the PVC Resin price per kg?",
        a: "The PVC Resin price per kg depends on the product grade, order quantity, and prevailing market rates. You can contact us to enquire about the current price for your required PVC Resin grade.",
    },
    {
        q: "Which PVC Resin grades does Resol Industries import?",
        a: "Resol Industries imports different PVC Resin grades, including Suspension Grade and Emulsion Grade, for various industrial applications.",
    },
    {
        q: "Where can I buy PVC Resin in India?",
        a: "You can contact Resol Industries for your PVC Resin requirements. We import PVC Resin and distribute it to customers across India for applications such as pipes and fittings, flooring, footwear, and other industries.",
    },
    {
        q: "What is the current Calcium Carbonate price?",
        a: "Calcium Carbonate prices vary depending on the grade, quantity, specifications, and market conditions. Contact Resol Industries to enquire about the latest Calcium Carbonate price.",
    },
];

const trustItems = [
    {
        title: "Trusted",
        subtitle: "Quality",
        icon: ShieldCheck,
    },
    {
        title: "Bulk",
        subtitle: "Supply",
        icon: Boxes,
    },
    {
        title: "Reliable",
        subtitle: "Partnerships",
        icon: Handshake,
    },
];

export default function FAQSection({
    phone = "+919810929486",
    quoteHref = "/contact",
    backgroundImage = "/images/faq/granules.jpg",
}) {
    const sectionRef = useRef(null);
    const listRef = useRef(null);
    const chatRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    const [indicator, setIndicator] = useState({
        y: 0,
        height: 72,
    });

    const activeFaq = faqs[activeIndex];
    const nextIndex = (activeIndex + 1) % faqs.length;

    /* ---------------------------------
       SECTION REVEAL
    --------------------------------- */

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    /* ---------------------------------
       TYPING ANIMATION
    --------------------------------- */

    useEffect(() => {
        if (!isVisible) return;

        setTyping(true);

        const timer = setTimeout(() => {
            setTyping(false);
        }, 1100);

        return () => clearTimeout(timer);
    }, [activeIndex, isVisible]);

    /* ---------------------------------
       SLIDING FAQ INDICATOR
    --------------------------------- */

    useLayoutEffect(() => {
        if (!listRef.current) return;

        const updateIndicator = () => {
            const buttons =
                listRef.current.querySelectorAll(".faq-question");

            const activeButton = buttons[activeIndex];

            if (!activeButton) return;

            setIndicator({
                y: activeButton.offsetTop,
                height: activeButton.offsetHeight,
            });
        };

        updateIndicator();

        window.addEventListener("resize", updateIndicator);

        return () => {
            window.removeEventListener("resize", updateIndicator);
        };
    }, [activeIndex]);

    /* ---------------------------------
       CHANGE FAQ
    --------------------------------- */

    const selectFaq = (index) => {
        setActiveIndex(index);

        if (
            typeof window !== "undefined" &&
            window.matchMedia("(max-width: 980px)").matches
        ) {
            setTimeout(() => {
                chatRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 100);
        }
    };

    return (
        <section
            ref={sectionRef}
            className={`
                relative overflow-hidden
                bg-[#f6f3ee]
                px-4 py-10
                text-[#14255e]
                sm:px-6
                md:px-8 md:py-12
                lg:px-10 lg:py-15
                xl:px-12
                ${isVisible ? "is-visible" : ""}
            `}
        >
            {/* ---------------------------------
                BACKGROUND GLOW
            --------------------------------- */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-12%]
                    top-[-10%]
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-[#d4a445]/10
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-15%]
                    left-[-12%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#14255e]/[0.06]
                    blur-[100px]
                "
            />

            {/* ---------------------------------
                MAIN CONTAINER
            --------------------------------- */}

            <div
                className="
                    relative
                    mx-auto
                    grid
                    max-w-[1320px]
                    grid-cols-1
                    items-start
                    gap-9
                    lg:grid-cols-[1fr_1.05fr]
                    lg:gap-16
                "
            >
                {/* =====================================================
                    LEFT SIDE
                ===================================================== */}

                <div>
                    {/* Eyebrow */}

                    <span
                        className="
                            faq-eyebrow
                            inline-flex
                            items-center
                            gap-3
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.35em]
                            text-[#b8862b]
                        "
                    >
                        <span className="h-px w-9 bg-[#d4a445]" />

                        Quick Answers
                    </span>

                    {/* Heading */}

                    <h2
                        className="
                            mt-4
                            max-w-[650px]
                            text-[40px]
                            font-semibold
                            leading-[1.04]
                            tracking-[0.015em]
                            text-[#14255e]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-[clamp(42px,4.4vw,64px)]
                        "
                    >
                        Frequently asked
                        questions
                    </h2>

                    {/* Description */}

                    <p
                        className="
                            mt-5
                            mb-8
                            max-w-[460px]
                            text-[15px]
                            leading-7
                            text-[#5a6180]
                            md:text-base
                        "
                    >
                        Pick a question and our team&apos;s answer appears
                        instantly. Can&apos;t find what you need? Talk to us
                        directly.
                    </p>

                    {/* =================================================
                        FAQ LIST
                    ================================================= */}

                    <ul
                        ref={listRef}
                        className="
                            relative
                            m-0
                            grid
                            list-none
                            gap-[6px]
                            p-0
                        "
                        role="tablist"
                        aria-label="Frequently asked questions"
                    >
                        {/* Sliding active background */}

                        <li
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                left-0
                                right-0
                                z-0
                                rounded-[18px]
                                bg-gradient-to-br
                                from-[#0b1c52]
                                to-[#050d2b]
                                shadow-[0_18px_40px_-18px_rgba(5,13,43,0.7)]
                                transition-all
                                duration-[600ms]
                            "
                            style={{
                                top: 0,
                                height: indicator.height,
                                transform: `translateY(${indicator.y}px)`,
                            }}
                        >
                            {/* Gold vertical accent */}

                            <span
                                className="
                                    absolute
                                    left-0
                                    top-[18%]
                                    bottom-[18%]
                                    w-[3px]
                                    rounded-full
                                    bg-gradient-to-b
                                    from-[#f2d98a]
                                    to-[#b8862b]
                                    shadow-[0_0_12px_#d4a445]
                                "
                            />
                        </li>

                        {faqs.map((faq, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <li key={faq.q}>
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => selectFaq(index)}
                                        className={`
                                            faq-question
                                            group
                                            relative
                                            z-[1]
                                            flex
                                            w-full
                                            cursor-pointer
                                            items-center
                                            gap-[18px]
                                            rounded-[18px]
                                            border-0
                                            bg-transparent
                                            px-5
                                            py-[18px]
                                            text-left
                                            transition-colors
                                            duration-300
                                            ${isActive
                                                ? "text-white"
                                                : "text-[#14255e] hover:bg-[#14255e]/[0.05]"
                                            }
                                        `}
                                    >
                                        {/* Number */}

                                        <span
                                            className={`
                                                w-[30px]
                                                shrink-0
                                                text-[18px]
                                                font-semibold
                                                transition-colors
                                                duration-300
                                                ${isActive
                                                    ? "text-[#f2d98a]"
                                                    : "text-[#b8862b]"
                                                }
                                            `}
                                        >
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        {/* Question */}

                                        <span
                                            className="
                                                flex-1
                                                text-[15px]
                                                font-bold
                                                leading-[1.35]
                                                sm:text-[16px]
                                                md:text-[17px]
                                            "
                                        >
                                            {faq.q}
                                        </span>

                                        {/* Arrow */}

                                        <span
                                            className={`
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                transition-all
                                                duration-300
                                                ${isActive
                                                    ? "rotate-[-45deg] border-transparent bg-gradient-to-br from-[#f2d98a] to-[#b8862b] text-[#050d2b]"
                                                    : "border-[#14255e]/[0.18] text-[#14255e] group-hover:translate-x-1 group-hover:border-[#d4a445] group-hover:text-[#b8862b]"
                                                }
                                            `}
                                        >
                                            <ArrowRight size={15} />
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* =====================================================
                    RIGHT SIDE CHAT
                ===================================================== */}

                <div ref={chatRef}>
                    <div
                        className="
                            faq-chat
                            relative
                            overflow-hidden
                            rounded-[30px]
                            bg-gradient-to-br
                            from-[#0b1c52]
                            to-[#050d2b]
                            text-[#eef1fb]
                            shadow-[0_50px_90px_-40px_rgba(5,13,43,0.8)]
                            ring-1
                            ring-[#f2d98a]/[0.18]
                        "
                    >
                        {/* Background Image */}

                        <div
                            className="
                                absolute
                                inset-0
                                bg-cover
                                bg-center
                                opacity-[0.08]
                                saturate-50
                            "
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                            }}
                        />

                        {/* Gold glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                right-[-100px]
                                top-[-100px]
                                h-[350px]
                                w-[350px]
                                rounded-full
                                bg-[#d4a445]/10
                                blur-[80px]
                            "
                        />

                        {/* =================================================
                            CHAT HEADER
                        ================================================= */}

                        <div
                            className="
                                relative
                                flex
                                items-center
                                gap-3.5
                                border-b
                                border-white/[0.08]
                                bg-white/[0.03]
                                px-5
                                py-5
                                backdrop-blur-md
                                md:px-6
                            "
                        >
                            {/* Avatar */}

                            <span
                                className="
                                    relative
                                    grid
                                    h-[46px]
                                    w-[46px]
                                    shrink-0
                                    place-items-center
                                    rounded-full
                                    bg-[radial-gradient(circle_at_30%_25%,#fff4c6,#d4a445_60%,#b8862b)]
                                    text-[22px]
                                    font-bold
                                    text-[#050d2b]
                                "
                            >
                                R

                                <span
                                    className="
                                        absolute
                                        bottom-[1px]
                                        right-[1px]
                                        h-[11px]
                                        w-[11px]
                                        rounded-full
                                        border-2
                                        border-[#0b1c52]
                                        bg-emerald-400
                                    "
                                />
                            </span>

                            <div>
                                <b className="block text-[15px]">
                                    Resol Support
                                </b>

                                <small className="text-xs text-[#e2e8ff]/60">
                                    Usually replies within a few hours
                                </small>
                            </div>

                            {/* Counter */}

                            <span
                                className="
                                    ml-auto
                                    text-[10px]
                                    font-bold
                                    tracking-[0.2em]
                                    text-[#f2d98a]
                                "
                            >
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(faqs.length).padStart(2, "0")}
                            </span>
                        </div>

                        {/* =================================================
                            CHAT BODY
                        ================================================= */}

                        <div
                            key={activeIndex}
                            className="
                                relative
                                flex
                                min-h-[390px]
                                flex-col
                                gap-3.5
                                px-5
                                pb-5
                                pt-7
                                md:px-6
                            "
                        >
                            {/* User Question */}

                            <div
                                className="
                                    animate-faq-bubble
                                    max-w-[86%]
                                    self-end
                                    rounded-[22px]
                                    rounded-br-[6px]
                                    bg-gradient-to-br
                                    from-[#f2d98a]
                                    to-[#d4a445]
                                    px-5
                                    py-4
                                    text-[14px]
                                    font-bold
                                    leading-7
                                    text-[#050d2b]
                                    shadow-lg
                                    md:text-[15.5px]
                                "
                            >
                                {activeFaq.q}
                            </div>

                            {/* Typing */}

                            {typing ? (
                                <div
                                    className="
                                        animate-faq-bubble
                                        flex
                                        w-fit
                                        items-center
                                        gap-[6px]
                                        rounded-[22px]
                                        rounded-bl-[6px]
                                        border
                                        border-white/10
                                        bg-white/[0.07]
                                        px-5
                                        py-4
                                    "
                                    aria-label="Typing"
                                >
                                    <span className="faq-dot" />
                                    <span className="faq-dot [animation-delay:150ms]" />
                                    <span className="faq-dot [animation-delay:300ms]" />
                                </div>
                            ) : (
                                <>
                                    {/* Bot Answer */}

                                    <div
                                        className="
                                            animate-faq-bubble
                                            max-w-[86%]
                                            self-start
                                            rounded-[22px]
                                            rounded-bl-[6px]
                                            border
                                            border-white/10
                                            bg-white/[0.07]
                                            px-5
                                            py-4
                                            text-[14px]
                                            leading-7
                                            text-[#eef1fb]
                                            md:text-[15.5px]
                                            md:leading-[1.7]
                                        "
                                    >
                                        {activeFaq.a
                                            .split(" ")
                                            .map((word, index) => (
                                                <span
                                                    key={`${word}-${index}`}
                                                    className="
                                                        faq-word
                                                        inline
                                                    "
                                                    style={{
                                                        animationDelay: `${index * 28
                                                            }ms`,
                                                    }}
                                                >
                                                    {word}{" "}
                                                </span>
                                            ))}
                                    </div>

                                    {/* Next */}

                                    <button
                                        type="button"
                                        onClick={() => selectFaq(nextIndex)}
                                        className="
                                            group
                                            animate-faq-bubble
                                            mt-1
                                            inline-flex
                                            w-fit
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-dashed
                                            border-[#f2d98a]/50
                                            bg-transparent
                                            px-4
                                            py-2.5
                                            text-[12px]
                                            font-bold
                                            text-[#f2d98a]
                                            transition-all
                                            duration-300
                                            hover:border-solid
                                            hover:bg-[#f2d98a]/10
                                        "
                                    >
                                        Next: {faqs[nextIndex].q}

                                        <ArrowRight
                                            size={14}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* =================================================
                            FOOTER CTA
                        ================================================= */}

                        <div
                            className="
                                relative
                                mx-4
                                mb-5
                                flex
                                flex-wrap
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.06]
                                p-2.5
                                pl-5
                                text-sm
                                text-[#e2e8ff]/60
                                sm:mx-5
                                md:flex-nowrap
                            "
                        >
                            <span className="w-full md:w-auto">
                                Still have a question?
                            </span>

                            <a
                                href={`tel:${phone}`}
                                className="
                                    ml-auto
                                    inline-flex
                                    items-center
                                    gap-2
                                    whitespace-nowrap
                                    rounded-full
                                    border
                                    border-[#f2d98a]/45
                                    bg-transparent
                                    px-[18px]
                                    py-[11px]
                                    text-[12px]
                                    font-extrabold
                                    tracking-[0.06em]
                                    text-[#f2d98a]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#f2d98a]/10
                                "
                            >
                                <Phone size={15} />

                                Call us
                            </a>

                            <a
                                href={quoteHref}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    whitespace-nowrap
                                    rounded-full
                                    bg-gradient-to-br
                                    from-[#f2d98a]
                                    to-[#b8862b]
                                    px-[18px]
                                    py-[11px]
                                    text-[12px]
                                    font-extrabold
                                    tracking-[0.06em]
                                    text-[#050d2b]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_10px_24px_-8px_rgba(212,164,69,0.7)]
                                "
                            >
                                Get a quote

                                <ArrowRight size={15} />
                            </a>
                        </div>
                    </div>

                    {/* =================================================
                        TRUST ROW
                    ================================================= */}

                    <div
                        className="
                            mt-[22px]
                            grid
                            grid-cols-1
                            overflow-hidden
                            rounded-[20px]
                            bg-white
                            shadow-[0_20px_40px_-30px_rgba(5,13,43,0.4)]
                            sm:grid-cols-3
                        "
                    >
                        {trustItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`
                                        flex
                                        items-center
                                        gap-3
                                        px-5
                                        py-[18px]
                                        text-[13px]
                                        leading-tight
                                        text-[#5a6180]
                                        ${index !== 0
                                            ? "border-t border-[#14255e]/[0.08] sm:border-l sm:border-t-0"
                                            : ""
                                        }
                                    `}
                                >
                                    <Icon
                                        className="h-[26px] w-[26px] shrink-0 text-[#b8862b]"
                                    />

                                    <span>
                                        <b className="block text-sm text-[#14255e]">
                                            {item.title}
                                        </b>

                                        {item.subtitle}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* =========================================================
                ANIMATIONS
            ========================================================= */}


        </section>
    );
}