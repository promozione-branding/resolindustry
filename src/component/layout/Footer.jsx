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
import { usePathname } from "next/navigation";

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

const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Products", href: "/products" },
    { name: "Our Articles", href: "/our-articles" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Zaikai", href: "/zaikai" },
];

const categories = [
    { name: "Polymers", href: "/products#polymers" },
    { name: "PET Resin", href: "/products#pet-resin" },
    { name: "Calcium Carbonate", href: "/products#calcium-carbonate" },
    { name: "Citric Acid", href: "/products#citric-acid" },
    { name: "Plasticizers", href: "/products#plasticizers" },
    { name: "Melamine", href: "/products#melamine" },
    { name: "Fillers", href: "/products#fillers" },
];

const supportLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Request a Quote", href: "/contact" },
    { name: "Product Enquiry", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Shipping & Delivery", href: "/shipping-delivery" },
];

export default function Footer() {
    const pathname = usePathname();
    const isAdminRoute = pathname.startsWith("/admin");
    if (isAdminRoute) {
        return null;
    }

    return (
        <footer className="relative isolate overflow-hidden  bg-gradient-to-br
                            from-[#0b1c52]
                            to-[#050d2b] text-white">

            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div
                    className="
                        absolute
                        -left-[220px]
                        top-[150px]
                        h-[600px]
                        w-[600px]
                        rounded-full
                        bg-[#D4A017]/5
                        blur-[150px]
                    "
                />

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

                <div
                    className="
                        absolute
                        bottom-32
                        left-1/2
                        -translate-x-1/2
                        select-none
                        whitespace-nowrap
                        text-[20vw]
                        font-black
                        leading-none
                        tracking-[0.5em]
                        text-white/[0.035]
                    "
                >
                    RIL
                </div>

                <div
                    className="
                        absolute
                        left-0
                        top-0
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-[#D4A017]/60
                        to-transparent
                    "
                />

            </div>

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1500px]
                    px-5
                    py-6
                    sm:px-8
                    md:py-6
                    lg:px-12
                    xl:px-16
                "
            >

                {/* =====================================================
                    OFFICE LOCATIONS
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <div className="mb-5 flex items-end justify-between">

                        <div>
                            <p
                                className="
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
                                    text-3xl
                                    font-semibold
                                    tracking-[-0.03em]
                                    text-white
                                    md:text-4xl
                                "
                            >
                                Our Office Locations
                            </h3>
                        </div>

                        <FaLocationDot
                            size={20}
                            className="mb-2 hidden text-[#D4A017] sm:block"
                        />

                    </div>

                    {/* LOCATION CARDS */}

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {offices.map((office, index) => (

                            <motion.div
                                key={office.id}
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
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    border
                                    border-white/20
                                    bg-black/10
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:border-[#D4A017]/60
                                    hover:bg-[#D4A017]/5
                                "
                            >

                                {/* TOP GOLD LINE */}

                                <span
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        h-[2px]
                                        w-0
                                        bg-[#D4A017]
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />

                                <div className="mb-5 flex items-center justify-between">

                                    <span
                                        className="
                                            text-[11px]
                                            font-bold
                                            tracking-[0.15em]
                                            text-[#D4A017]
                                        "
                                    >
                                        {office.id}
                                    </span>

                                    <FaLocationDot
                                        size={13}
                                        className="
                                            text-white/80
                                            transition-colors
                                            group-hover:text-[#D4A017]
                                        "
                                    />

                                </div>

                                <h4
                                    className="
                                        text-lg
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
                                        text-[#D4A017]
                                    "
                                >
                                    {office.type}
                                </p>

                                <p
                                    className="
                                        mt-4
                                        text-[11px]
                                        leading-5
                                        text-white/80
                                    "
                                >
                                    {office.text}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

                <div
                    className="
                        mt-6
                        grid
                        gap-12
                        border-t
                        border-white/20
                        pt-6
                        md:grid-cols-2
                        lg:grid-cols-4
                        lg:gap-10
                    "
                >

                    {/* =================================================
                        COLUMN 1 — BRAND
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <Link
                            href="/"
                            className="inline-block"
                        >
                            <img
                                src="/logo/logo_transparent.png"
                                alt="Resol Industries Ltd."
                                className="
                                    h-auto
                                    w-[110px]
                                    object-contain
                                "
                            />

                            <p className="mt-1 ml-1 text-[12px] text-white/80">
                                Resol Industry Ltd.
                            </p>
                        </Link>

                        {/* SOCIAL */}

                        <div className="mt-7">

                            <p
                                className="
                                    mb-3
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/80
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

                    </motion.div>


                    {/* =================================================
                        COLUMN 2 — USEFUL LINKS
                    ================================================= */}

                    <FooterColumn
                        number="01"
                        title="Useful Links"
                        links={usefulLinks}
                    />


                    {/* =================================================
                        COLUMN 3 — CATEGORIES
                    ================================================= */}

                    <FooterColumn
                        number="02"
                        title="Categories"
                        links={categories}
                    />

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <h3
                                className="
                        text-[15px]
                        font-semibold
                        text-white
                    "
                            >
                                Support
                            </h3>

                        </div>
                        <ContactItem
                            icon={<FaPhone size={12} />}
                            title="Call Us"
                            value="+91-11-41417725"
                            href="tel:+911141417725"
                        />

                        <ContactItem
                            icon={<FaEnvelope size={12} />}
                            title="Email Us"
                            value="info@resolvinyls.com"
                            href="mailto:info@resolvinyls.com"
                        />

                        <a
                            href="https://wa.me/919810929486"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            group
                            flex
                            items-center
                            justify-between
                            border
                            border-[#D4A017]/20
                            px-4
                            py-3
                            transition-all
                            hover:border-[#D4A017]/60
                            hover:bg-[#D4A017]/10
                        "
                        >

                            <div className="flex items-center gap-3">

                                <div
                                    className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    bg-[#D4A017]
                                    text-[#111]
                                "
                                >
                                    <FaWhatsapp size={16} />
                                </div>

                                <div>
                                    <p
                                        className="
                                        text-[8px]
                                        font-bold
                                        uppercase
                                        tracking-[1.5px]
                                        text-white/60
                                    "
                                    >
                                        Quick Inquiry
                                    </p>

                                    <p className="mt-0.5 text-[12px] font-semibold">
                                        Chat on WhatsApp
                                    </p>
                                </div>

                            </div>

                            <FaArrowRight
                                size={12}
                                className="
                                text-[#D4A017]
                                transition-transform
                                group-hover:translate-x-1
                            "
                            />

                        </a>
                    </div>
                </div>

            </div>

            <div className="relative z-10 border-t border-white/20">

                <div
                    className="
                        mx-auto
                        flex
                        max-w-[1500px]
                        flex-col
                        gap-3
                        px-5
                        py-5
                        sm:px-8
                        md:flex-row
                        md:items-center
                        md:justify-between
                        lg:px-12
                        xl:px-16
                    "
                >

                    <p className="text-[10px] leading-5 text-white/80">
                        © {new Date().getFullYear()} Resol Industries Ltd.
                        All rights reserved.
                    </p>

                    <p className="text-[10px] text-white/80">

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
        </footer>
    );
}

function FooterColumn({
    number,
    title,
    links,
}) {
    return (
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

            <div className="mb-2 flex items-center gap-3">
                <h3
                    className="
                        text-[15px]
                        font-semibold
                        text-white
                    "
                >
                    {title}
                </h3>

            </div>

            <ul className="space-y-3 ml-1">

                {links.map((link) => (

                    <li key={link.name}>

                        <Link
                            href={link.href}
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-white/80
                                transition-colors
                                hover:text-white
                            "
                        >


                            <span>{link.name}</span>

                            <FaArrowRight
                                size={15}
                                className="
                                    text-[#D4A017]
                                    opacity-0
                                    transition-all
                                    duration-300
                                    group-hover:translate-x-1
                                    group-hover:opacity-100
                                "
                            />
                        </Link>

                    </li>

                ))}

            </ul>

        </motion.div>
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
                h-9
                w-9
                items-center
                justify-center
                border
                border-white/50
                text-white/80
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

function ContactItem({
    icon,
    title,
    value,
    href,
}) {
    return (
        <a
            href={href}
            className="
                group
                flex
                items-center
                gap-3
                border
                border-white/10
                px-4
                py-3
                transition-all
                hover:border-[#D4A017]/50
            "
        >

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

            <div>

                <p
                    className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[1.5px]
                        text-white/60
                    "
                >
                    {title}
                </p>

                <p
                    className="
                        mt-0.5
                        text-[11px]
                        text-white/80
                        transition-colors
                        group-hover:text-[#D4A017]
                    "
                >
                    {value}
                </p>

            </div>

        </a>
    );
}