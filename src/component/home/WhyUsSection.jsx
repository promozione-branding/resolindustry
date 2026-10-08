"use client";

import React, { useEffect, useState } from "react";
import {
    Network,
    ShieldCheck,
    Truck,
    Headphones,
    Plus,
} from "lucide-react";

const reasons = [
    {
        number: "01",
        title: "20+ Years of Industry Experience",
        description:
            "Established in 2005, Resol Industries brings extensive experience in importing and distributing industrial materials across India.",
        icon: Network,
        image:
            "https://media.licdn.com/dms/image/v2/D4E12AQHrGbJskT9T2w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1686349015497?e=2147483647&v=beta&t=N7gBkpxMxv9hN84oTOvWqdrq9-T1ULbnap-02Ndxod0",
    },
    {
        number: "02",
        title: "Trusted Importing Network",
        description:
            "We work with an established network of international sources to bring a diverse range of products to the Indian market.",
        icon: ShieldCheck,
        image:
            "https://www.augmentir.ai/wp-content/uploads/2023/08/quality-in-manufacturing.jpg",
    },
    {
        number: "03",
        title: "Wide Product Portfolio",
        description:
            "From PVC Resin and Calcium Carbonate to EVA, PE, PP, PET Resin, Plasticizers, Rubber, and other industrial materials, we offer products across multiple categories.",
        icon: Truck,
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=85",
    },
    {
        number: "04",
        title: "Consistent Quality",
        description:
            "We focus on sourcing products that meet the quality and application requirements of our customers.",
        icon: Headphones,
        image:
            "https://plus.unsplash.com/premium_photo-1661414473396-4600573d1f33?w=1200&auto=format&fit=crop&q=85",
    },
];

export default function WhyChoose() {
    const [active, setActive] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        const section = document.querySelector("#why-choose");

        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="why-choose"
            className="
                relative w-full overflow-hidden
                bg-white
                px-5 py-10
                md:px-10 md:py-12
                lg:py-15
            "
        >
            {/* BACKGROUND GHOST TEXT */}

            <div
                className="
                    pointer-events-none absolute
                    -top-2 left-0
                    select-none whitespace-nowrap
                    font-semibold
                    text-[90px] leading-none
                    text-transparent
                    [-webkit-text-stroke:1px_rgba(20,40,100,0.14)]
                    md:text-[150px]
                    lg:text-[200px]
                    motion-safe:animate-[ghostMove_60s_linear_infinite]
                "
            >
                WHY CHOOSE&nbsp;&nbsp; WHY CHOOSE&nbsp;&nbsp; WHY CHOOSE
            </div>

            <div className="relative z-10 mx-auto max-w-[1320px]">

                {/* HEADER */}

                <div
                    className="
                        mb-10 grid
                        grid-cols-1 gap-6
                        md:mb-14
                        lg:grid-cols-[1.1fr_1fr]
                        lg:items-end
                        lg:gap-14
                    "
                >
                    {/* LEFT */}

                    <div>
                        <div
                            className="
                                inline-flex items-center gap-3
                                text-[11px] font-bold
                                uppercase tracking-[0.4em]
                                text-[#b8862b]
                            "
                        >
                            <span className="h-px w-9 bg-[#d4a445]" />

                            Why Choose Us
                        </div>

                        <h2
                            className="
                                mt-4 max-w-[700px]
                                text-[42px] font-semibold
                                leading-[1.02]
                                text-[#0d2461]
                                md:text-[54px]
                                lg:text-[72px]
                            "
                        >
                            Why Choose{" "}
                            <em
                                className="
                                    bg-gradient-to-r
                                    from-[#b8862b]
                                    via-[#f2d98a]
                                    to-[#d4a445]
                                    bg-clip-text
                                    not-italic
                                    text-transparent
                                "
                            >
                                Resol Industry
                            </em>
                        </h2>
                    </div>

                    {/* RIGHT */}

                    <div className="pb-2">
                        <p
                            className="
                                m-0
                                text-[15px]
                                leading-[1.8]
                                text-[#555f70]
                                md:text-base
                            "
                        >
                            <strong className="text-[#0d2461]">
                                Resol Industries Ltd. (RIL)
                            </strong>{" "}
                            is a trusted PVC Resin importer and distributor, established in 2005. We specialize in the import and wholesale distribution of a wide range of quality polymers and chemicals, serving diverse industrial requirements.
                        </p>
                    </div>
                </div>

                {/* PANELS */}

                <div
                    className="
                        flex h-auto
                        flex-col gap-3
                        lg:h-[540px]
                        lg:flex-row
                        lg:gap-[14px]
                    "
                >
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        const isActive = active === index;

                        return (
                            <button
                                key={reason.number}
                                type="button"
                                onClick={() => setActive(index)}
                                aria-expanded={isActive}
                                className={`
                                    group relative
                                    min-w-0
                                    overflow-hidden
                                    rounded-[26px]
                                    border border-[#0d2461]/10
                                    bg-[#f3f5f8]
                                    p-0
                                    text-left
                                    isolation-isolate
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-[#b8862b]
                                    lg:h-full
                                    lg:transition-[flex,box-shadow,opacity,transform]
                                    lg:duration-700
                                    lg:ease-[cubic-bezier(.65,0,.2,1)]

                                    ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-[50px] opacity-0"
                                    }

                                    ${isActive
                                        ? `
                                                lg:flex-[4.2]
                                                shadow-[0_30px_70px_rgba(13,36,97,0.15),0_0_0_1px_rgba(184,134,43,0.35)]
                                            `
                                        : "lg:flex-1"
                                    }

                                    ${index === 0
                                        ? "delay-150"
                                        : index === 1
                                            ? "delay-[270ms]"
                                            : index === 2
                                                ? "delay-[390ms]"
                                                : "delay-[510ms]"
                                    }

                                    transition-all
                                    duration-1000
                                    ease-[cubic-bezier(.2,.8,.2,1)]

                                    h-[84px]
                                    lg:h-full
                                `}
                            >
                                {/* IMAGE */}

                                <div className="absolute inset-0 -z-20 overflow-hidden">
                                    <img
                                        src={reason.image}
                                        alt={reason.title}
                                        className={`
                                            h-full w-full
                                            object-cover
                                            transition-all
                                            duration-[1600ms]
                                            ease-[cubic-bezier(.2,.8,.2,1)]

                                            ${isActive
                                                ? "scale-100 grayscale-0 brightness-[0.82]"
                                                : "scale-[1.15] grayscale-[0.75] brightness-[0.65]"
                                            }

                                            group-hover:scale-105
                                            group-hover:grayscale-0
                                            group-hover:brightness-[0.75]
                                        `}
                                    />
                                </div>

                                {/* DARK IMAGE OVERLAY */}

                                <div
                                    className="
                                        absolute inset-0 -z-10
                                        bg-gradient-to-b
                                        from-[#06183f]/20
                                        via-[#06183f]/5
                                        to-[#06183f]/90
                                        transition-all duration-500
                                        group-hover:from-[#06183f]/30
                                        group-hover:via-[#06183f]/10
                                        group-hover:to-[#06183f]/95
                                    "
                                />

                                {/* COLLAPSED CONTENT */}

                                <div
                                    className={`
                                        absolute inset-0
                                        flex
                                        items-center
                                        justify-between
                                        px-5
                                        transition-opacity
                                        duration-500
                                        lg:flex-col
                                        lg:justify-between
                                        lg:px-0
                                        lg:py-[26px]

                                        ${isActive
                                            ? "pointer-events-none opacity-0"
                                            : "opacity-100"
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            text-[22px]
                                            font-semibold
                                            text-[#f2d98a]
                                        "
                                    >
                                        {reason.number}
                                    </span>

                                    <span
                                        className="
                                            flex-1
                                            pl-5
                                            text-[13px]
                                            font-bold
                                            uppercase
                                            tracking-[0.16em]
                                            text-white
                                            lg:flex-none
                                            lg:pl-0
                                            lg:[writing-mode:vertical-rl]
                                            lg:rotate-180
                                            lg:text-[15px]
                                            lg:tracking-[0.24em]
                                        "
                                    >
                                        {reason.title}
                                    </span>

                                    <span
                                        className="
                                            grid h-10 w-10
                                            shrink-0
                                            place-items-center
                                            rounded-full
                                            border
                                            border-[#f2d98a]/60
                                            bg-white/5
                                            text-[#f2d98a]
                                            backdrop-blur-sm
                                            transition-all
                                            duration-300
                                            group-hover:rotate-90
                                            group-hover:bg-[#f2d98a]
                                            group-hover:text-[#0d2461]
                                        "
                                    >
                                        <Plus size={16} />
                                    </span>
                                </div>

                                {/* EXPANDED CONTENT */}

                                <div
                                    className={`
                                        absolute inset-0
                                        flex flex-col
                                        justify-between
                                        p-6
                                        md:p-8
                                        transition-opacity
                                        duration-500

                                        ${isActive
                                            ? "pointer-events-auto opacity-100 delay-300"
                                            : "pointer-events-none opacity-0"
                                        }
                                    `}
                                >
                                    {/* TOP */}

                                    <div className="flex items-start justify-between">
                                        <span
                                            className="
                                                text-[56px]
                                                font-semibold
                                                leading-[0.8]
                                                text-transparent
                                                [-webkit-text-stroke:1px_rgba(242,217,138,0.9)]
                                                md:text-[80px]
                                            "
                                        >
                                            {reason.number}
                                        </span>

                                        <span
                                            className="
                                                grid h-[50px] w-[50px]
                                                place-items-center
                                                rounded-[16px]
                                                bg-gradient-to-br
                                                from-[#f2d98a]
                                                to-[#b8862b]
                                                text-[#0d2461]
                                                shadow-[0_12px_30px_rgba(184,134,43,0.35)]
                                                md:h-[60px]
                                                md:w-[60px]
                                                md:rounded-[18px]
                                            "
                                        >
                                            <Icon
                                                size={26}
                                                strokeWidth={1.7}
                                            />
                                        </span>
                                    </div>

                                    {/* BODY */}

                                    <div
                                        className={`
                                            max-w-[560px]
                                            transition-all
                                            duration-700
                                            ease-[cubic-bezier(.2,.8,.2,1)]

                                            ${isActive
                                                ? "translate-y-0 opacity-100 delay-500"
                                                : "translate-y-6 opacity-0"
                                            }
                                        `}
                                    >
                                        <h3
                                            className="
                                                m-0
                                                text-[30px]
                                                font-semibold
                                                leading-[1.1]
                                                text-white
                                                md:text-[42px]
                                            "
                                        >
                                            {reason.title}
                                        </h3>

                                        <span
                                            className="
                                                my-[18px]
                                                block h-[2px] w-16
                                                bg-gradient-to-r
                                                from-[#f2d98a]
                                                to-[#b8862b]
                                            "
                                        />

                                        <p
                                            className="
                                                m-0
                                                text-[14px]
                                                leading-[1.75]
                                                text-white/85
                                                md:text-base
                                            "
                                        >
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>

                                {/* PROGRESS */}

                                {isActive && (
                                    <div
                                        key={index}
                                        className="
                                            absolute left-6 right-6 top-0
                                            h-[3px]
                                            overflow-hidden
                                            rounded-b-[3px]
                                            bg-white/20
                                            md:left-[34px]
                                            md:right-[34px]
                                        "
                                    >
                                        <span
                                            className="
                                                block h-full w-full
                                                origin-left
                                                bg-gradient-to-r
                                                from-[#b8862b]
                                                to-[#f2d98a]
                                                animate-[progressFill_6s_linear_forwards]
                                            "
                                        />
                                    </div>
                                )}

                                {/* SHINE */}

                                <span
                                    className="
                                        pointer-events-none
                                        absolute -top-20 left-0
                                        z-20
                                        h-[500px] w-[100px]
                                        rotate-[20deg]
                                        -translate-x-[150%]
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/25
                                        to-transparent
                                        transition-transform
                                        duration-900
                                        ease-out
                                        group-hover:translate-x-[550%]
                                    "
                                />

                                {/* BOTTOM LINE */}

                                <span
                                    className="
                                        absolute bottom-0 left-0
                                        z-30
                                        h-[3px] w-0
                                        bg-[#f2d98a]
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tailwind arbitrary keyframes */}

        </section>
    );
}