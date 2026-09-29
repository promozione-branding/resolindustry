"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Ship,
  Building2,
  Package,
  Truck,
  Sparkle,
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

const items = [
  {
    icon: Ship,
    title: "Importer",
    description: "Global Sourcing",
  },
  {
    icon: Building2,
    title: "Wholesaler",
    description: "Bulk Supply",
  },
  {
    icon: Package,
    title: "Supplier",
    description: "Assured Quality",
  },
  {
    icon: Truck,
    title: "Distributor",
    description: "On-Time Delivery",
  },
];

const productCategories = [
  {
    name: "Polymers",
    image: "/Polymers.webp",
    href: "/polymers",
    products: [
      {
        name: "PVC Resin",
        image: "/product/1.png",
        href: "/polymers",
      },
      {
        name: "EVA Resin",
        image: "/product/4.png",
        href: "/polymers",
      },
      {
        name: "Polyethylene (PE)",
        image: "/product/1.png",
        href: "/polymers",
      },
      {
        name: "Polypropylene (PP)",
        image: "/product/3.png",
        href: "/polymers",
      },
      {
        name: "Polystyrene",
        image: "/product/2.png",
        href: "/polymers",
      },
      {
        name: "POE",
        image: "/product/1.png",
        href: "/polymers",
      },
    ],
  },

  {
    name: "PET Resin",
    image: "/pet resin.webp",
    href: "/pet-resin",
    products: [
      {
        name: "PET Resin",
        image: "/products/pet-resin.jpg",
        href: "/pet-resin",
      },
    ],
  },

  {
    name: "Calcium Carbonate",
    image: "/Ground_Calcium_Carbonate.jpg",
    href: "/calcium-carbonate",
    products: [
      {
        name: "Precipitated Calcium",
        image: "/products/precipitated-calcium.jpg",
        href: "/calcium-carbonate",
      },
    ],
  },

  {
    name: "Citric Acid",
    image: "/BLOG-citric-acid-origins.png",
    href: "/citric-acid",
    products: [
      {
        name: "Citric Acid",
        image: "/products/citric-acid.jpg",
        href: "/citric-acid",
      },
    ],
  },

  {
    name: "Plasticizers",
    image: "/Plasticizers-2.jpg",
    href: "/plasticizer",
    products: [
      {
        name: "DOP",
        image: "/products/dop.jpg",
        href: "/plasticizer",
      },
      {
        name: "DOTP",
        image: "/products/dotp.jpg",
        href: "/plasticizer",
      },
      {
        name: "DINP",
        image: "/products/dinp.jpg",
        href: "/plasticizer",
      },
    ],
  },

  {
    name: "Melamine",
    image: "/images (1).jpg",
    href: "/melamine",
    products: [
      {
        name: "Melamine",
        image: "/products/melamine.jpg",
        href: "/melamine",
      },
    ],
  },

  {
    name: "Fillers, Activators & Colourants",
    image: "/milky-white-filler-masterbatch-500x500.webp",
    href: "/fillers-activators-colourants",
    products: [
      {
        name: "Precipitated Silica",
        image: "/products/precipitated-silica.jpg",
        href: "/fillers-activators-colourants",
      },
      {
        name: "Carbon Black",
        image: "/products/carbon-black.jpg",
        href: "/fillers-activators-colourants",
      },
      {
        name: "Zinc Oxide",
        image: "/products/zinc-oxide.jpg",
        href: "/fillers-activators-colourants",
      },
      {
        name: "Titanium Dioxide",
        image: "/products/titanium-dioxide.jpg",
        href: "/fillers-activators-colourants",
      },
      {
        name: "Stearic Acid",
        image: "/products/stearic-acid.jpg",
        href: "/fillers-activators-colourants",
      },
    ],
  },
];

function StripSet() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <React.Fragment key={`${item.title}-${index}`}>
            <div className="group flex shrink-0 cursor-default items-center gap-3 px-6 transition-transform duration-300 hover:-translate-y-[1px] hover:scale-[1.04] md:gap-3">

              {/* Icon */}
              <span
                className="
                  flex h-[30px] w-[30px] shrink-0 items-center justify-center
                  rounded-full
                  border border-white/70
                  
                  text-white
                  shadow-[0_0_0_3px_rgba(212,164,69,0.12),0_0_14px_rgba(212,164,69,0.35)]
                  md:h-[30px] md:w-[30px]
                  max-md:h-6 max-md:w-6
                "
              >
                <Icon
                  className="h-4 w-4 max-md:h-[13px] max-md:w-[13px]"
                  strokeWidth={1.8}
                />
              </span>

              {/* Title */}
              <span
                className="
                  whitespace-nowrap
                  bg-[linear-gradient(90deg,#b8862b,#f7e08a,#fff4c6,#d4a445,#b8862b)]
                  bg-[length:250%_100%]
                  bg-clip-text
                  text-[14px]
                  font-extrabold
                  uppercase
                  tracking-[0.32em]
                  text-transparent
                  text-white
                  animate-[rtm-foil_5s_linear_infinite]
                  max-md:text-[12px]
                  max-md:tracking-[0.24em]
                "
              >
                {item.title}
              </span>

              {/* Description */}
              <span
                className="
                  whitespace-nowrap
                  border-l border-[#d4a445]/45
                  pl-3
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#e2e8ff]/90
                  max-md:hidden
                "
              >
                {item.description}
              </span>
            </div>

            {/* Separator */}
            <Sparkle
              className="
                h-[14px] w-[14px]
                shrink-0
                text-[#f7e08a]
                drop-shadow-[0_0_6px_rgba(247,224,138,0.8)]
                animate-[rtm-spin_6s_linear_infinite]
              "
              fill="currentColor"
              strokeWidth={0}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

function ResolTopStrip() {
  return (
    <div
      className="
        relative z-50
        h-12
        overflow-hidden
        max-md:h-10
      "
    >
      {/* Top gold hairline */}
      {/* <div
        className="
          absolute left-0 right-0 top-0 z-10
          h-[2px]
          bg-[linear-gradient(90deg,transparent,#d4a445,#f7e08a,#d4a445,transparent)]
          opacity-90
        "
      /> */}

      {/* Light sweep */}
      {/* <div
        className="
          pointer-events-none
          absolute bottom-0 top-0 z-[2]
          w-[220px]
          -left-[260px]
          skew-x-[-20deg]
          bg-[linear-gradient(100deg,transparent,rgba(255,236,170,0.22),transparent)]
          animate-[rtm-sweep_6s_ease-in-out_infinite]
        "
      /> */}

      {/* Viewport */}
      <div
        className="
          flex h-full items-center
          [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]
        "
      >
        {/* Scrolling track */}
        <div
          className="
            flex w-max
            animate-[rtm-scroll_38s_linear_infinite]
            hover:[animation-play-state:paused]
            max-md:animate-[rtm-scroll_26s_linear_infinite]
          "
        >
          {/* First set */}
          <StripSet />

          {/* Duplicate set for seamless loop */}
          <StripSet />

          {/* Extra set keeps the strip filled on large screens */}
          <StripSet />
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <header className="absolute top-0 left-0 z-50 w-full text-black">
      {/* Top Marquee */}
      <ResolTopStrip />

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
        <nav
          className="relative hidden min-h-[60px] items-center justify-between border-b border-x border-white/85 px-5 lg:flex"
          onMouseLeave={() => setProductOpen(false)}
        >
          {navLinks.map((link) => {
            const isProducts = link.name === "Products";

            return (
              <div
                key={link.name}
                className="relative flex h-full items-center"
                onMouseEnter={() => {
                  if (isProducts) {
                    setProductOpen(true);
                  }
                }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 whitespace-nowrap text-[13px] font-bold uppercase tracking-wide text-white transition hover:text-[#f5bd24]"
                >
                  {link.name}

                  {link.dropdown && (
                    <ChevronDown
                      size={15}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${productOpen ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {/* PRODUCTS MEGA MENU */}
                {isProducts && productOpen && (
                  <ProductsMegaMenu
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                )}
              </div>
            );
          })}
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

function ProductsMegaMenu({
  activeCategory,
  setActiveCategory,
}) {
  const category = productCategories[activeCategory];

  return (
    <div
      className="
        absolute
        left-30
        top-[42px]
        z-[100]
        w-[1000px]
        -translate-x-1/2
        overflow-hidden
        border
        border-white/15
        bg-[#071a3d]
        shadow-[0_30px_80px_rgba(0,0,0,0.5)]
        backdrop-blur-xl
      "
      onMouseEnter={() => { }}
    >
      {/* =========================================
          CATEGORY BAR
      ========================================= */}
      <div className="border-b border-white/10 bg-[#061633] px-2 py-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">

          {productCategories.map((item, index) => {
            const active = activeCategory === index;

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setActiveCategory(index)}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  min-w-[128px]
                  items-center
                  gap-1
                  overflow-hidden
                  border
                  px-0.5
                  py-1
                  transition-all
                  duration-300
                  ${active
                    ? "border-[#f5bd24]/50 bg-[#f5bd24]/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                  }
                `}
              >
                {/* Category image */}
                <div
                  className={`
                    relative
                    h-18
                    w-full
                    shrink-0
                    overflow-hidden
                    border
                    transition-all
                    duration-300
                    ${active
                      ? "border-[#f5bd24]"
                      : "border-white/10"
                    }
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`
                      object-cover
                      transition-transform
                      duration-500
                      h-full w-full
                      ${active
                        ? "scale-110"
                        : "group-hover:scale-110"
                      }
                    `}
                  />

                  <div className="absolute inset-0 bg-[#071a3d]/20" />
                </div>

                {/* Category text */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`
                      line-clamp-2
                      text-[10px]
                      font-bold
                      uppercase
                      text-center
                      leading-[1.25]
                      tracking-wide
                      transition-colors
                      ${active
                        ? "text-[#f5bd24]"
                        : "text-white"
                      }
                    `}
                  >
                    {item.name}
                  </p>
                </div>

                {/* Active indicator */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-2
                    right-2
                    h-[1px]
                    bg-[#f5bd24]
                    transition-all
                    duration-300
                    ${active
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-2">
        <div
          className={`
            grid
            gap-2
                 grid-cols-4
          `}
        >
          {category.products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.025]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#f5bd24]/50
                hover:bg-white/[0.05]
              "
            >
              {/* Product image */}
              <div className="relative h-[120px] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="250px"
                  className="h-full w-full
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image overlay */}
                {/* <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071a3d]
                    via-[#071a3d]/10
                    to-transparent
                  "
                /> */}

                {/* Number */}
                <span
                  className="
                    absolute
                    left-2
                    top-2
                    text-[9px]
                    font-bold
                    tracking-widest
                    text-white/60
                  "
                >
                  {String(
                    category.products.indexOf(product) + 1
                  ).padStart(2, "0")}
                </span>

                {/* Arrow */}
                <span
                  className="
                    absolute
                    right-2
                    top-2
                    flex
                    h-7
                    w-7
                    translate-x-2
                    items-center
                    justify-center
                    border
                    border-white/20
                    bg-[#071a3d]/70
                    text-white
                    opacity-0
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={13} />
                </span>
              </div>

              {/* Product name */}
              <div className="flex py-1.5 items-center justify-between gap-2 px-4">

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#f5bd24]
                  "
                >
                  {product.name}
                </span>

                <span
                  className="
                    text-sm
                    text-[#f5bd24]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#f5bd24] to-transparent opacity-70" />
    </div>
  );
}