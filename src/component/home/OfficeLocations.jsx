
"use client";

import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaRegBuilding,
    FaPhone,
} from "react-icons/fa6";

const offices = [
    {
        id: "01",
        title: "New Delhi",
        type: "Corporate Office",
        addresses: [
            "Plot No. 106/47, Khata No. 89, Khasra No. 106/23, Village Khera Kalan, Delhi-110082",
            
        ],
        phones: ["+91-11-41417825"],
        image: "/delhi_loc.webp",
    },
    {
        id: "02",
        title: "Maharashtra",
        type: "Regional Office",
        addresses: [
            "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra, 421302",
        ],
        phones: ["+91-11-41417825"],
        image: "/maharashtra_loc.webp",
    },
    {
        id: "03",
        title: "Gujarat",
        type: "Regional Office",
        addresses: [
            "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpara, Kachchh, Gujarat - 370405",
        ],
        phones: ["+91-11-41417825"],
        image: "/gujarat_loc.webp",
    },
    {
        id: "04",
        title: "Chennai",
        type: "Regional Office",
        addresses: [
            "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu - 600089",
        ],
        phones: ["+91-11-41417825"],
        image: "/chennai_loc.webp",
    },
    {
        id: "05",
        title: "Telangana",
        type: "Regional Office",
        addresses: [
            "D No. 8-2-293/82/A/75, Plot No. 75, Road Number 9, Jubilee Hills, Hyderabad, Telangana - 500033",
        ],
        phones: ["+91-11-41417825"],
        image: "/telangana_loc.webp",
    },
    {
        id: "06",
        title: "Haryana",
        type: "Regional Office",
        addresses: [
            "Plot No. 20, Street No. 4, Sector 7A, Jhajjar Farrukhnagar Road, Reliance Model Economic Township, Yaqubpur, Jhajjar, Haryana – 124103",
        ],
        phones: ["+91-11-41417825"],
        image: "/haryana_loc.webp",
    },
    {
        id: "07",
        title: "Punjab",
        type: "Regional Office",
        addresses: [
            "Building No. 1, Sunam Ghasiwala Road, Sheron, Sangrur, Punjab - 148106",
        ],
        phones: ["+91-11-41417825"],
        image: "/punjab.webp",
    },
];

const mapUrl = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const telHref = (phone) =>
    `tel:${phone.replace(/[^\d+]/g, "")}`;

const IconSlot = ({ children }) => (
    <span className="flex h-5 w-4 shrink-0 items-center justify-center text-[#0b1c52]">
        {children}
    </span>
);

export default function OfficeLocations() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* BACKGROUND */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/office_location.webp')",
                }}
            />

            <div className="absolute inset-0 -z-10" />

            <div className="mx-auto max-w-[2100px] px-5 py-12 sm:px-8 lg:px-12 xl:px-16">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10"
                >
                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0b1c52] md:text-6xl">
                        Our Office{" "}
                        <span className="text-[#D4A017]">
                            Locations
                        </span>
                    </h2>

                    <p className="mt-2 text-base text-slate-600 md:text-lg">
                        We are strategically located across India to serve
                        our clients better.
                    </p>
                </motion.div>

                {/* OFFICE CARDS GRID */}
                <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-12">

                    {offices.map((office, index) => {
                        const multiple = office.addresses.length > 1;

                        return (
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
                                className={`
                                    group flex h-full gap-4 rounded-2xl
                                    bg-white/95 p-3
                                    shadow-[0_8px_30px_rgba(11,28,82,0.10)]
                                    backdrop-blur
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:shadow-[0_14px_40px_rgba(11,28,82,0.18)]
                                    ${index < 3
                                        ? "xl:col-span-4"
                                        : "xl:col-span-3"
                                    }
                                `}
                            >
                                {/* OFFICE IMAGE */}
                                <div className="relative w-[38%] shrink-0 overflow-hidden rounded-xl">
                                    <img
                                        src={office.image}
                                        alt={`${office.title} office`}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="min-h-[190px]" />
                                </div>

                                {/* OFFICE DETAILS */}
                                <div className="flex min-w-0 flex-1 flex-col py-1 pr-1">

                                    <h4 className="mt-2 text-xl font-bold leading-tight text-[#0b1c52]">
                                        {office.title}
                                    </h4>

                                    <span className="mt-1 w-fit rounded-full bg-[#FBEFC9] px-3 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0b1c52]">
                                        {office.type}
                                    </span>

                                    {/* ADDRESSES */}
                                    <ul className="mt-3 flex flex-col gap-2.5">
                                        {office.addresses.map(
                                            (addr, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2"
                                                >
                                                    <IconSlot>
                                                        <FaRegBuilding
                                                            size={14}
                                                        />
                                                    </IconSlot>

                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-[14px] font-bold leading-5 text-slate-700">
                                                            {addr}
                                                        </p>

                                                        {multiple && (
                                                            <a
                                                                href={mapUrl(addr)}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0b1c52] underline decoration-[#D4A017] underline-offset-2 hover:text-[#D4A017]"
                                                            >
                                                                View Map
                                                                <FaArrowRight
                                                                    size={9}
                                                                />
                                                            </a>
                                                        )}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* PHONE NUMBERS */}
                                    <div className="mb-4 mt-3 flex flex-col gap-1.5 border-t border-slate-200 pt-3">
                                        {office.phones?.map(
                                            (phone, phoneIndex) => (
                                                <a
                                                    key={`${office.id}-${phoneIndex}`}
                                                    href={telHref(phone)}
                                                    className="flex items-start gap-2 text-[12px] font-semibold leading-5 text-slate-700 hover:text-[#D4A017]"
                                                >
                                                    <IconSlot>
                                                        <FaPhone size={12} />
                                                    </IconSlot>

                                                    <span>{phone}</span>
                                                </a>
                                            )
                                        )}
                                    </div>

                                    {/* MAP BUTTON */}
                                    {!multiple && (
                                        <a
                                            href={mapUrl(
                                                office.addresses[0]
                                            )}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0b1c52] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#D4A017] hover:text-[#111]"
                                        >
                                            View on Map
                                            <FaArrowRight size={11} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
