"use client";

import React from "react";
import Image from "next/image";
import {
  Warehouse,
  Truck,
  ShieldCheck,
  Users,
  Award,
  Factory,
  MapPin,
  Handshake,
} from "lucide-react";


const features = [
  {
    icon: Warehouse,
    title: "Wide Distribution",
    text: "Pan India presence with strong distribution network",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    text: "Efficient logistics ensuring on-time delivery everywhere",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Safe, durable & reliable products you can trust",
  },
  {
    icon: Users,
    title: "Trusted By Many",
    text: "Loved by customers, trusted by generations",
  },
];

const stats = [
  { icon: Award, top: "Since 20XX", bottom: "Years of legacy" },
  { icon: Factory, top: "Made in India", bottom: "Proudly manufacturing" },
  { icon: MapPin, top: "Pan India", bottom: "Reach & distribution" },
  { icon: Handshake, top: "Partnering", bottom: "For a stronger tomorrow" },
];

const brands = [];


export default function SupplyChainSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f4f6fb] h-[800px]">
      <Image
        src="/india_map_.png"
        alt=""
        fill
        priority={false}
        sizes="80vw"
        className="-z-20 object-cover object-[75%_center] md:object-right"
      />
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 md:py-16 lg:px-16 lg:py-20">
        <div className="max-w-[640px]">
          <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            <span className="block text-[#0a1a4a]">All India</span>
            <span className="block bg-[linear-gradient(90deg,#b8862b,#e9c46a,#b8862b)] bg-clip-text text-transparent">
              Supply Chain
            </span>
          </h2>

          <div className="mt-6 flex items-center gap-4 sm:mt-8">
            <span className="h-px w-8 bg-[#b8862b] sm:w-14" />
            <h3 className="text-lg font-bold uppercase tracking-wide text-[#0a1a4a] sm:text-2xl lg:text-3xl">
              Resol Industries Limited
            </h3>
            <span className="h-px flex-1 bg-[#b8862b]" />
          </div>

          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#0a1a4a]/80 sm:text-sm">
            Delivering quality across every corner of India
          </p>

          <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
            <span className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#0a1a4a]/15 sm:block" />

            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4a445]/70 bg-[#0a1a4a] text-white shadow-[0_6px_16px_-6px_rgba(10,26,74,0.6)]">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-[#0a1a4a] sm:text-base">
                    {title}
                  </h4>
                  <p className="mt-1 max-w-[230px] text-sm leading-snug text-[#0a1a4a]/75">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-y-5 rounded-xl border border-[#d4a445]/30 bg-[#081640] px-4 py-5 shadow-xl sm:px-6 lg:grid-cols-4 lg:gap-y-0">
            {stats.map(({ icon: Icon, top, bottom }, i) => (
              <div
                key={top}
                className={`flex items-center gap-3 px-2 lg:px-4 ${
                  i !== 0 ? "lg:border-l lg:border-white/15" : ""
                }`}
              >
                <Icon
                  size={34}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#f7e08a]"
                />
                <div className="leading-tight">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-white sm:text-xs">
                    {top}
                  </p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-wide text-white/70 sm:text-[10px]">
                    {bottom}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {brands.length > 0 && (
            <div className="relative mt-10 rounded-full border border-[#0a1a4a]/70 bg-white/70 px-4 pb-3 pt-5 backdrop-blur-sm">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f4f6fb] px-3 text-sm font-extrabold text-[#0a1a4a]">
                Co-Brands
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {brands.map((b) => (
                  <Image
                    key={b.alt}
                    src={b.src}
                    alt={b.alt}
                    width={90}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}