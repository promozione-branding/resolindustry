"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaArrowRight,
} from "react-icons/fa6";

/* ============================================================
   OFFICE DATA
============================================================ */

const offices = [
    {
        id: "01",
        title: "New Delhi",
        type: "Registered Office",
        text: "Office No. DSM-321, DLF Tower, Shivaji Marg, New Delhi 110015",
    },
    {
        id: "02",
        title: "Maharashtra",
        type: "Regional Office",
        text: "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra, 421302",
    },
    {
        id: "03",
        title: "Gujarat",
        type: "Regional Office",
        text: "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpra, Kachchh, Gujarat, 370405",
    },
    {
        id: "04",
        title: "Chennai",
        type: "Regional Office",
        text: "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
    },
];

/* ============================================================
   FOOTER
============================================================ */

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden text-white">

            {/* ======================================================
                BACKGROUND IMAGE
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 -z-10">

                <img
                    src="/landing-bottom-bg.jpg"
                    alt=""
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                    "
                />

                {/* DARK OVERLAY */}
                {/* <div
                    className="
                        absolute
                        inset-0
                        bg-[#090909]/80
                    "
                /> */}

                {/* BOTTOM GRADIENT */}
                {/* <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-[#090909]/70
                        via-[#090909]/55
                        to-[#090909]/95
                    "
                /> */}

                {/* GOLD TINT */}
                {/* <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#D4A017]/[0.04]
                        via-transparent
                        to-[#D4A017]/[0.08]
                    "
                /> */}

            </div>


            {/* ======================================================
                DECORATIVE BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* LARGE GOLD GLOW - LEFT */}

                <div
                    className="
                        absolute
                        -left-[220px]
                        top-[180px]
                        h-[600px]
                        w-[600px]
                        rounded-full
                        bg-[#D4A017]/5
                        blur-[150px]
                    "
                />

                {/* LARGE GOLD GLOW - RIGHT */}

                <div
                    className="
                        absolute
                        -right-[250px]
                        bottom-[50px]
                        h-[650px]
                        w-[650px]
                        rounded-full
                        bg-[#D4A017]/5
                        blur-[160px]
                    "
                />

                {/* LARGE WATERMARK */}

                <div
                    className="
                        absolute
                        bottom-40
                        left-1/2
                        -translate-x-1/2
                        select-none
                        whitespace-nowrap
                        text-[20vw]
                        font-black
                        leading-none
                        tracking-[0.5em]
                        text-white/[0.04]
                    "
                >
                    RIL
                </div>

                {/* TOP GOLD LINE */}

                <div
                    className="
                        absolute
                        left-0
                        top-0
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-[#D4A017]/50
                        to-transparent
                    "
                />

            </div>


            {/* ======================================================
                MAIN FOOTER CONTENT
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1500px]
                    px-5
                    py-10
                    sm:px-8
                    md:py-12
                    lg:px-12
                    xl:px-16
                "
            >

                {/* ====================================================
                    BRAND + SOCIAL
                ==================================================== */}

                <div
                    className="
                        mb-16
                        grid
                        gap-10
                        border-b
                        border-white/[0.08]
                        pb-12
                        lg:grid-cols-[1fr_auto]
                        lg:items-end
                    "
                >

                    {/* BRAND */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >

                        <Link
                            href="/"
                            className="inline-block"
                        >
                            <img
                                src="/logo/logo.webp"
                                alt="Resol Industries Ltd."
                                className="
                                    h-auto
                                    w-[105px]
                                    object-contain
                                "
                            />
                        </Link>


                        <p
                            className="
                                mt-5
                                max-w-[620px]
                                font-(--font-lexend)
                                text-[13px]
                                leading-6
                                text-white/60
                            "
                        >
                            Your trusted partner for polymers, resins, PET resin
                            and industrial raw materials. We focus on dependable
                            sourcing, consistent quality and reliable supply
                            solutions across India.
                        </p>

                    </motion.div>


                    {/* SOCIAL */}

                    <div>

                        <p
                            className="
                                mb-4
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-white/50
                                lg:text-right
                            "
                        >
                            Connect With Us
                        </p>

                        <div className="flex gap-2">

                            <SocialIcon
                                href="#"
                                label="Facebook"
                                icon={<FaFacebookF size={13} />}
                            />

                            <SocialIcon
                                href="#"
                                label="Instagram"
                                icon={<FaInstagram size={14} />}
                            />

                            <SocialIcon
                                href="#"
                                label="YouTube"
                                icon={<FaYoutube size={14} />}
                            />

                            <SocialIcon
                                href="#"
                                label="X"
                                icon={<FaXTwitter size={13} />}
                            />

                        </div>

                    </div>

                </div>


                {/* ====================================================
                    MAIN GRID
                ==================================================== */}

                <div
                    className="
                        grid
                        gap-16
                        lg:grid-cols-12
                        lg:gap-10
                    "
                >

                    {/* ==================================================
                        OFFICES
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="lg:col-span-8"
                    >

                        {/* SECTION TITLE */}

                        <div className="mb-3 flex items-end justify-between">

                            <div>

                                <p
                                    className="
                                        mb-2
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.3em]
                                        text-[#D4A017]
                                    "
                                >
                                    Our Presence
                                </p>

                                <h3
                                    className="
                                        font-(--font-outfit)
                                        text-3xl
                                        font-semibold
                                        tracking-[-0.03em]
                                        text-white
                                        md:text-4xl
                                    "
                                >
                                    Office Locations
                                </h3>

                            </div>


                            <FaLocationDot
                                size={19}
                                className="
                                    mb-1
                                    hidden
                                    text-[#D4A017]
                                    sm:block
                                "
                            />

                        </div>


                        {/* OFFICE LIST */}

                        <div className="border-t border-white/10">

                            {offices.map((office, index) => (

                                <motion.div
                                    key={office.id}
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="
                                        group
                                        relative
                                        grid
                                        gap-5
                                        border-b
                                        border-white/10
                                        py-7
                                        transition-all
                                        duration-300
                                        sm:grid-cols-[55px_160px_1fr]
                                        sm:items-start
                                    "
                                >

                                    {/* GOLD HOVER LINE */}

                                    <span
                                        className="
                                            absolute
                                            left-0
                                            top-0
                                            h-full
                                            w-[2px]
                                            origin-top
                                            scale-y-0
                                            bg-[#D4A017]
                                            transition-transform
                                            duration-500
                                            group-hover:scale-y-100
                                        "
                                    />


                                    {/* NUMBER */}

                                    <div
                                        className="
                                            font-(--font-outfit)
                                            text-[11px]
                                            font-bold
                                            tracking-[0.15em]
                                            text-[#D4A017]
                                        "
                                    >
                                        {office.id}
                                    </div>


                                    {/* CITY */}

                                    <div>

                                        <h4
                                            className="
                                                font-(--font-outfit)
                                                text-[15px]
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {office.title}
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-[8px]
                                                font-bold
                                                uppercase
                                                tracking-[1.5px]
                                                text-white/50
                                            "
                                        >
                                            {office.type}
                                        </p>

                                    </div>


                                    {/* ADDRESS */}

                                    <p
                                        className="
                                            max-w-[500px]
                                            font-(--font-lexend)
                                            text-[12px]
                                            leading-6
                                            text-white/60
                                            transition-colors
                                            duration-300
                                            group-hover:text-white/75
                                        "
                                    >
                                        {office.text}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>


                    {/* ==================================================
                        CONTACT
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                        className="lg:col-span-4"
                    >

                        <div
                            className="
                                border
                                border-white/10
                                bg-black/20
                                p-6
                                backdrop-blur-[2px]
                                md:p-8
                            "
                        >

                            {/* TITLE */}

                            <div className="mb-8">

                                <p
                                    className="
                                        mb-2
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.3em]
                                        text-[#D4A017]
                                    "
                                >
                                    Let&apos;s Talk
                                </p>

                                <h3
                                    className="
                                        font-(--font-outfit)
                                        text-3xl
                                        font-semibold
                                        tracking-[-0.03em]
                                        text-white
                                    "
                                >
                                    Contact
                                    <br />
                                    Information
                                </h3>

                            </div>


                            {/* PHONE */}

                            <ContactBlock
                                icon={<FaPhone size={12} />}
                                title="Phone"
                            >

                                <a
                                    href="tel:+911141417725"
                                    className="
                                        block
                                        text-white/60
                                        transition-colors
                                        hover:text-[#D4A017]
                                    "
                                >
                                    +91-11-41417725
                                </a>

                                <a
                                    href="tel:+911141417825"
                                    className="
                                        block
                                        text-white/60
                                        transition-colors
                                        hover:text-[#D4A017]
                                    "
                                >
                                    +91-11-41417825
                                </a>

                            </ContactBlock>


                            {/* MOBILE */}

                            <ContactBlock
                                icon={<FaPhone size={12} />}
                                title="Mobile"
                            >

                                <a
                                    href="tel:+919999995255"
                                    className="
                                        block
                                        text-white/60
                                        transition-colors
                                        hover:text-[#D4A017]
                                    "
                                >
                                    +91-9999995255
                                </a>

                                <a
                                    href="tel:+919999997765"
                                    className="
                                        block
                                        text-white/60
                                        transition-colors
                                        hover:text-[#D4A017]
                                    "
                                >
                                    +91-9999997765
                                </a>

                                <a
                                    href="tel:+919810929486"
                                    className="
                                        block
                                        text-white/60
                                        transition-colors
                                        hover:text-[#D4A017]
                                    "
                                >
                                    +91-9810929486
                                </a>

                            </ContactBlock>


                            {/* EMAIL */}

                            <ContactBlock
                                icon={<FaEnvelope size={12} />}
                                title="Email"
                            >

                                <a
                                    href="mailto:info@resolvinyls.com"
                                    className="
                                        break-all
                                        text-white/60
                                        transition-colors
                                        hover:text-[#D4A017]
                                    "
                                >
                                    info@resolvinyls.com
                                </a>

                            </ContactBlock>


                            {/* WHATSAPP */}

                            <a
                                href="https://wa.me/919810929486"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    mt-8
                                    flex
                                    items-center
                                    justify-between
                                    border
                                    border-[#D4A017]/25
                                    bg-[#D4A017]/5
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:border-[#D4A017]/70
                                    hover:bg-[#D4A017]/10
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            bg-[#D4A017]
                                            text-[#111111]
                                        "
                                    >
                                        <FaWhatsapp size={18} />
                                    </div>


                                    <div>

                                        <p
                                            className="
                                                text-[8px]
                                                font-bold
                                                uppercase
                                                tracking-[1.5px]
                                                text-white/30
                                            "
                                        >
                                            Quick Inquiry
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-[12px]
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            Chat on WhatsApp
                                        </p>

                                    </div>

                                </div>


                                <FaArrowRight
                                    size={12}
                                    className="
                                        text-[#D4A017]
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />

                            </a>

                        </div>

                    </motion.div>

                </div>

            </div>


            {/* ======================================================
                BOTTOM BAR
            ====================================================== */}

            <div className="relative z-10 border-t border-white/10">

                <div
                    className="
                        mx-auto
                        flex
                        max-w-[1500px]
                        flex-col
                        gap-4
                        px-5
                        py-6
                        sm:px-8
                        md:flex-row
                        md:items-center
                        md:justify-between
                        lg:px-12
                        xl:px-16
                    "
                >

                    {/* COPYRIGHT */}

                    <p
                        className="
                            text-[10px]
                            leading-5
                            text-white/50
                        "
                    >
                        © {new Date().getFullYear()} Resol Industries Ltd.
                        All rights reserved.
                    </p>


                    {/* LINKS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-x-5
                            gap-y-2
                            text-[11px]
                            text-white/50
                        "
                    >

                        <Link
                            href="/privacy-policy"
                            className="
                                transition-colors
                                hover:text-[#D4A017]
                            "
                        >
                            Privacy Policy
                        </Link>


                        <span className="h-3 w-px bg-white/10" />


                        <Link
                            href="/terms-and-conditions"
                            className="
                                transition-colors
                                hover:text-[#D4A017]
                            "
                        >
                            Terms & Conditions
                        </Link>


                        <span className="h-3 w-px bg-white/10" />


                        <p>

                            Website Designed By{" "}

                            <Link
                                href="https://inquirybazaar.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    text-white/60
                                    transition-colors
                                    hover:text-[#D4A017]
                                "
                            >
                                Inquiry Bazaar Pvt. Ltd.
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}


/* ============================================================
   SOCIAL ICON
============================================================ */

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
                h-9
                w-9
                items-center
                justify-center
                border
                border-white/10
                text-white/35
                transition-all
                duration-300
                hover:border-[#D4A017]
                hover:bg-[#D4A017]
                hover:text-[#111111]
            "
        >
            {icon}
        </a>
    );
}


/* ============================================================
   CONTACT BLOCK
============================================================ */

function ContactBlock({
    icon,
    title,
    children,
}) {
    return (
        <div
            className="
                mb-7
                flex
                gap-4
                border-b
                border-white/10
                pb-6
            "
        >

            {/* ICON */}

            <div
                className="
                    flex
                    h-8
                    w-8
                    flex-shrink-0
                    items-center
                    justify-center
                    border
                    border-[#D4A017]/20
                    text-[#D4A017]
                "
            >
                {icon}
            </div>


            {/* CONTENT */}

            <div>

                <p
                    className="
                        mb-1.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[1.8px]
                        text-white/25
                    "
                >
                    {title}
                </p>

                <div
                    className="
                        space-y-0.5
                        text-[12px]
                        leading-6
                        text-white/55
                    "
                >
                    {children}
                </div>

            </div>

        </div>
    );
}