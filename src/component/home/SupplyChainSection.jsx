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
  { icon: Award, top: "Since 2005", bottom: "Years of legacy" },
{ icon: Factory, top: "Import Excellence", bottom: "Across India" },
  { icon: MapPin, top: "Pan India", bottom: "Reach & distribution" },
  { icon: Handshake, top: "Partnering", bottom: "For a stronger tomorrow" },
];

const brands = [];

export default function SupplyChainSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f4f6fb] xl:min-h-[800px]">
      {/* Desktop background map */}
      <Image
        src="/map.jpeg"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="-z-20 hidden object-cover object-right xl:block"
      />

      <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 md:py-14 xl:px-16 xl:py-20">
        <div className="mx-auto max-w-[760px] xl:mx-0 xl:max-w-[640px]">
          <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            <span className="block text-[#0a1a4a]">All India</span>
            <span className="block bg-[linear-gradient(90deg,#b8862b,#e9c46a,#b8862b)] bg-clip-text text-transparent">
              Supply Chain
            </span>
          </h2>

          <div className="mt-5 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <span className="h-px w-6 shrink-0 bg-[#b8862b] sm:w-14" />
            <h3 className="text-base font-bold uppercase tracking-wide text-[#0a1a4a] sm:text-2xl xl:text-3xl">
              Resol Industries Limited
            </h3>
            <span className="h-px flex-1 bg-[#b8862b]" />
          </div>

          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#0a1a4a]/80 sm:text-sm">
            Delivering quality across every corner of India
          </p>

          {/* Map shown inline on phones & tablets only */}
          <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg sm:mt-8 xl:hidden">
            <Image
              src="/map.jpeg"
              alt="Map of India showing Resol Industries' pan-India distribution network"
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover object-[70%_center] md:object-right"
            />
          </div>

          <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
            <span className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#0a1a4a]/15 sm:block" />

            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4a445]/70 bg-[#0a1a4a] text-white shadow-[0_6px_16px_-6px_rgba(10,26,74,0.6)] sm:h-14 sm:w-14">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-[#0a1a4a] sm:text-base">
                    {title}
                  </h4>
                  <p className="mt-1 max-w-[260px] text-sm leading-snug text-[#0a1a4a]/75">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-5 rounded-xl border border-[#d4a445]/30 bg-[#081640] px-4 py-5 shadow-xl sm:px-6 md:grid-cols-4 md:gap-y-0">
            {stats.map(({ icon: Icon, top, bottom }, i) => (
              <div
                key={top}
                className={`flex items-center gap-3 px-1 md:px-3 ${
                  i !== 0 ? "md:border-l md:border-white/15" : ""
                }`}
              >
                <Icon
                  size={30}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#f7e08a]"
                />
                <div className="min-w-0 leading-tight">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-white sm:text-xs">
                    {top}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/70">
                    {bottom}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {brands.length > 0 && (
            <div className="relative mt-10 rounded-3xl border border-[#0a1a4a]/70 bg-white/70 px-4 pb-3 pt-5 backdrop-blur-sm sm:rounded-full">
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