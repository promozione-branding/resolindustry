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
  { name: "Contact", href: "/contact-us", dropdown: true },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full text-black">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-25">

        {/* Top bar */}
        <div className="flex min-h-[90px] items-center justify-between gap-6 border-b border-black/15">

          {/* Phone */}
          <a
            href="tel:+919810929486"
            className="group flex items-center gap-3 text-sm font-semibold tracking-wide sm:text-base rounded-md border sm:border-0 border-white/25 p-2"
          >
            <Phone size={22} strokeWidth={2.5} />
            <span className="hidden sm:flex">+91 9810929486</span>
          </a>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-3 sm:top-1 -translate-x-1/2"
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
            className="border border-black/50 px-7 flex gap-2 items-center py-4 text-sm font-bold uppercase tracking-wide text-black backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#071a3d]"
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
        <nav className="hidden min-h-[60px] items-center justify-between border-b border-x border-black/15 px-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 whitespace-nowrap text-[13px] font-bold uppercase tracking-wide transition hover:text-[#f5bd24]"
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