"use client";

import { motion } from "framer-motion";
import { FaLocationDot, FaArrowRight, FaRegBuilding } from "react-icons/fa6";



const offices = [
    {
        id: "01",
        title: "New Delhi",
        type: "Registered Office",
        text: "Office No. DSM-321, DLF Tower, Shivaji Marg, New Delhi 110015",
        image: "/delhi_loc.webp",
    },
    {
        id: "02",
        title: "Maharashtra",
        type: "Regional Office",
        text: "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra, 421302",
        image: "/maharashtra_loc.webp",
    },
    {
        id: "03",
        title: "Gujarat",
        type: "Regional Office",
        text: "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpra, Kachchh, Gujarat, 370405",
        image: "/gujarat_loc.webp",
    },
    {
        id: "04",
        title: "Chennai",
        type: "Regional Office",
        text: "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
        image: "/chennai_loc.webp",
    },
    {
        id: "05",
        title: "Telangana",
        type: "Regional Office",
        text: "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
        image: "/telangana_loc.webp",
    },
    {
        id: "06",
        title: "Haryana",
        type: "Regional Office",
        text: "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
        image: "/haryana_loc.webp",
    },
];

const mapUrl = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function OfficeLocations() {
    return (
        <section className="relative isolate overflow-hidden">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/contact_us_bg.webp')" }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/60 to-white/30" />

            <div className="mx-auto max-w-[1800px] px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-4">
                        <span className="h-[3px] w-14 bg-[#D4A017]" />
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1c52]">
                            Our Presence
                        </p>
                    </div>

                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0b1c52] md:text-6xl">
                        Our Office <span className="text-[#D4A017]">Locations</span>
                    </h2>

                    <p className="mt-2 text-base text-slate-600 md:text-lg">
                        We are strategically located across India to serve our clients
                        better.
                    </p>
                </motion.div>

                {/* CARDS */}
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {offices.map((office, index) => (
                        <motion.div
                            key={office.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group flex gap-4 rounded-2xl bg-white/95 p-3 shadow-[0_8px_30px_rgba(11,28,82,0.10)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,28,82,0.18)]"
                        >
                            {/* IMAGE */}
                            <div className="relative w-[38%] shrink-0 overflow-hidden rounded-xl">
                                <img
                                    src={office.image}
                                    alt={`${office.title} office`}
                                    className="h-full min-h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex min-w-0 flex-1 flex-col py-1 pr-1">
                                <div className="flex items-start justify-between">
                                    <span className="rounded bg-[#F5A81C] px-2 py-0.5 text-xs font-bold text-white">
                                        {office.id}
                                    </span>
                                    <FaLocationDot size={16} className="text-[#0b1c52]" />
                                </div>

                                <h4 className="mt-2 text-xl font-bold text-[#0b1c52]">
                                    {office.title}
                                </h4>

                                <span className="mt-1 w-fit rounded-full bg-[#FBEFC9] px-3 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0b1c52]">
                                    {office.type}
                                </span>

                                <div className="mt-3 flex flex-1 items-start gap-2 border-b border-slate-200 pb-3">
                                    <FaRegBuilding
                                        size={16}
                                        className="mt-0.5 shrink-0 text-[#0b1c52]"
                                    />
                                    <p className="text-[12px] leading-5 text-slate-700 font-extrabold">
                                        {office.text}
                                    </p>
                                </div>

                                <a
                                    href={mapUrl(office.text)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#0b1c52] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#D4A017] hover:text-[#111]"
                                >
                                    View on Map
                                    <FaArrowRight size={11} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}