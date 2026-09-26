"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Products", href: "/products", dropdown: true },
  { name: "Client Reviews", href: "/reviews" },
  { name: "Our Articles", href: "/our-articles" },
  { name: "Contact", href: "/contact-us", },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full text-black">
      {/* Top Marquee */}
      <div className="w-full overflow-hidden bg-[#0d2461] text-white">
        <div className="flex w-max animate-marquee whitespace-nowrap py-2.5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-8 text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs">
                Importer
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

              <span className="mx-8 text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs">
                Supplier
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

              <span className="mx-8 text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs">
                Distributor
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

              <span className="mx-8 text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs">
                Wholesaler
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-25">

        {/* Top bar */}
        <div className="flex min-h-[90px] items-center justify-between gap-6 border-b text-white border-white/85">

          {/* Phone */}
          <a
            href="tel:+919810929486"
            className="group flex items-center gap-3 text-sm font-semibold tracking-wide sm:text-base rounded-md border sm:border-0 border-white/85 p-2"
          >
            <Phone size={22} strokeWidth={2.5} />
            <span className="hidden sm:flex">+91 9810929486</span>
          </a>

          {/* Logo */}
          <Link
            href="/"
            className=""
          >
            <Image
              src="/logo/logo.webp"
              alt="Megha Systems"
              width={145}
              height={100}
              className="h-auto w-[60px] object-contain sm:w-[80px]"
              priority
            />
          </Link>

          {/* Quote button */}
          <Link
            href="/contact"
            className="border border-white/80 text-white px-7 flex gap-2 items-center py-4 text-sm font-bold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-white"
          >
            Get Free Quote
            <ArrowUpRight size={17} />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto rounded-md border border-white/25 p-2 sm:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden min-h-[60px] items-center justify-between border-b border-x border-white/85 px-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 whitespace-nowrap text-white text-[13px] font-bold uppercase tracking-wide transition hover:text-[#f5bd24]"
            >
              {link.name}

              {link.dropdown && (
                <ChevronDown
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:rotate-180"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav className="border border-white/15 bg-[#071a3d]/95 px-5 py-5 backdrop-blur-md lg:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wide transition hover:text-[#f5bd24]"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} />}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 bg-[#c99618] px-5 py-4 text-sm font-bold uppercase text-white"
              >
                Get Free Quote
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}