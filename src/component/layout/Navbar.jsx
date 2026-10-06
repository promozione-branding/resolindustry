"use client";

import React, { useEffect, useState } from "react";
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
import { products } from "../../../data";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Products", href: "/products", dropdown: true },
  { name: "Our Articles", href: "/our-articles" },
  { name: "Contact", href: "/contact-us", },
  { name: "Zaikai", href: "/zaikai" },
  // { name: "Projects", href: "/projects" },
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

const productCategories = products;

function StripSet() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <React.Fragment key={`${item.title}-${index}`}>
            <div
              className="
                group flex shrink-0 cursor-default items-center gap-3
                px-6
                transition-transform duration-300
                hover:-translate-y-[1px] hover:scale-[1.04]
                md:gap-3
              "
            >
              {/* Icon */}
              <span
                className="
                  flex h-[30px] w-[30px] shrink-0 items-center justify-center
                  rounded-full

                  border border-[#d4a445]/70

                  bg-[radial-gradient(circle_at_30%_25%,rgba(247,224,138,0.25),rgba(8,22,64,0.6))]

                  text-[#f7e08a]

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
text-white
                  text-[14px]
                  font-extrabold
                  uppercase
                  tracking-[0.32em]
                  text-transparent

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

        border-b border-[#d4a445]/55

        bg-[radial-gradient(120%_180%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%),linear-gradient(90deg,#081640,#13287a_50%,#081640)]

        shadow-[0_1px_0_rgba(0,0,0,0.35),inset_0_-8px_18px_-12px_rgba(212,164,69,0.45)]

        max-md:h-10
      "
    >
      {/* Top gold hairline */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-10
          h-[2px]

          bg-[linear-gradient(90deg,transparent,#d4a445,#f7e08a,#d4a445,transparent)]

          opacity-90
        "
      />

      {/* Light sweep */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          top-0
          z-[2]

          -left-[260px]
          w-[220px]

          skew-x-[-20deg]

          bg-[linear-gradient(100deg,transparent,rgba(255,236,170,0.22),transparent)]

          animate-[rtm-sweep_6s_ease-in-out_infinite]
        "
      />

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

          {/* Extra set */}
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
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  if (isAdminRoute) {
    return null;
  }
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingText = "Resol Industries Ltd.";

  useEffect(() => {
    let timeout;

    if (!isDeleting && typedText.length < typingText.length) {
      timeout = setTimeout(() => {
        setTypedText(typingText.slice(0, typedText.length + 1));
      }, 100);
    } else if (!isDeleting && typedText.length === typingText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(typingText.slice(0, typedText.length - 1));
      }, 55);
    } else if (isDeleting && typedText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

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
            className="group flex items-center gap-3 text-sm font-semibold tracking-widest sm:text-base rounded-md border sm:border-0 border-white/85 p-2"
          >
            <Phone size={22} strokeWidth={2.5} />
            <span className="hidden sm:flex">+91 9810929486</span>
          </a>

          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-center"
          >
            <Image
              src="/logo/logo_transparent.png"
              alt="Resol"
              width={145}
              height={100}
              className="h-auto object-contain w-[60px]"
              priority
            />
            <p className="mt-0.5 flex h-4 items-center text-xs font-medium tracking-wide text-white">
              {typedText}
            </p>
          </Link>

          {/* Quote button */}
          <Link
            href="/contact-us"
            className="border border-white/80 text-white px-7 flex gap-2 items-center py-4 text-sm font-bold uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-white"
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
                  className="group flex items-center gap-2 whitespace-nowrap text-base font-bold uppercase tracking-widest text-white transition hover:text-[#f5bd24]"
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
        left-220
        top-[42px]
        z-[100]
        w-[min(1320px,calc(100vw-32px))]
        -translate-x-1/2
        overflow-hidden
        rounded-[18px]
        border
        border-[#d4a445]/35
        bg-[radial-gradient(80%_60%_at_20%_0%,rgba(212,164,69,0.14),transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(19,40,122,0.8),transparent_70%),linear-gradient(160deg,#0a1a4a,#050d2b)]
        p-[18px]
        font-inherit
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.03)_inset]
        backdrop-blur-[14px]
        origin-top
        animate-[megaMenuOpen_.45s_cubic-bezier(.2,.9,.25,1.15)_both]
      "
    >
      {/* =========================================
          TOP GOLD LINE
      ========================================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#d4a445]
          to-transparent
        "
      />

      {/* =========================================
          CATEGORY TABS
      ========================================= */}
      <div
        className="
          mb-3
          grid
          grid-cols-[repeat(auto-fit,minmax(130px,1fr))]
          gap-3
          border-b
          border-[#d4a445]/20
          pb-[18px]
          max-[900px]:flex
          max-[900px]:overflow-x-auto
          max-[900px]:snap-x
          max-[900px]:snap-mandatory
          max-[900px]:px-1
        "
      >
        {productCategories.map((item, index) => {
          const active = activeCategory === index;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActiveCategory(index)}
              style={{
                "--i": index,
              }}
              className={`
                group
                relative
                isolate
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-[14px]
                border
                text-center
                no-underline
                transition-all
                duration-300
                ease-out

                max-[900px]:min-w-[120px]
                max-[900px]:shrink-0
                max-[900px]:snap-start

                ${active
                  ? `
                      -translate-y-1.5
                      border-[#d4a445]
                      bg-white/[0.03]
                      shadow-[0_14px_34px_-10px_rgba(212,164,69,0.35)]
                    `
                  : `
                      border-white/10
                      bg-white/[0.03]
                      hover:-translate-y-1
                      hover:border-[#d4a445]/60
                      hover:shadow-[0_10px_25px_-12px_rgba(212,164,69,0.25)]
                    `
                }
              `}
            >
              {/* =====================================
                  ACTIVE GOLD BORDER
              ===================================== */}
              {/* <span
                className={`
                  pointer-events-none
                  absolute
                  inset-0
                  z-[5]
                  rounded-[14px]
                  p-[2px]
                  bg-[conic-gradient(from_0deg,#b8862b,#f7e08a,#fff6cf,#d4a445,#b8862b)]
                  [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
                  [mask-composite:exclude]
                  [-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
                  [-webkit-mask-composite:xor]
                  transition-opacity
                  duration-300
                  animate-[goldSpin_3.5s_linear_infinite]

                  ${active
                    ? "opacity-100"
                    : "opacity-0"
                  }
                `}
              /> */}

              {/* =====================================
                  CATEGORY IMAGE
              ===================================== */}
              <div
                className="
                  relative
                  z-[1]
                  h-[92px]
                  overflow-hidden
                  rounded-t-[12px]
                  max-[900px]:h-[70px]
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    brightness-[0.72]
                    saturate-[0.55]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-110
                    group-hover:brightness-[0.9]
                    group-hover:saturate-[0.9]
                  "
                />

                {/* IMAGE GRADIENT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    from-[40%]
                    to-[#050d2b]/[0.85]
                  "
                />

                {/* =====================================
                    ACTIVE CHECK
                ===================================== */}
                {active && (
                  <span
                    className="
                      absolute
                      right-2
                      top-2
                      z-[10]
                      grid
                      h-[22px]
                      w-[22px]
                      place-items-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#f7e08a]
                      to-[#b8862b]
                      text-[#050d2b]
                      shadow-[0_0_0_3px_rgba(247,224,138,0.2)]
                      animate-[badgePop_.35s_cubic-bezier(.2,.9,.3,1.5)_both]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="h-3 w-3"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                )}
              </div>

              {/* =====================================
                  CATEGORY NAME
              ===================================== */}
              <div
                className="
                  relative
                  z-[6]
                  px-1
                  pb-3
                  pt-[10px]
                  text-[12.5px]
                  font-extrabold
                  uppercase
                  leading-[1.3]
                  tracking-[0.08em]
                  text-[#dfe5ff]
                  transition-colors
                  duration-300
                "
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>

      {/* =========================================
          HEADING
      ========================================= */}
      <div
        className="
          mx-1
          mb-4
          flex
          items-baseline
          justify-between
          gap-4
          animate-[menuFade_.4s_ease_both]
        "
      >
        <div className="flex items-baseline gap-2">
          <h3
            className="
              m-0
              text-[20px]
              font-extrabold
              uppercase
              tracking-[0.04em]
              text-white
              max-[900px]:text-[16px]
            "
          >
            {category.name}
          </h3>

          <span
            className="
              text-[12px]
              uppercase
              tracking-[0.14em]
              text-[#dfe5ff]/60
            "
          >
            {category.products.length} Products
          </span>
        </div>

        <Link
          href={category.href}
          className="
            whitespace-nowrap
            border-b
            border-transparent
            text-[12px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#f7e08a]
            no-underline
            transition-all
            duration-300
            hover:border-[#f7e08a]
            hover:tracking-[0.2em]
          "
        >
          View All
        </Link>
      </div>

      {/* =========================================
          PRODUCT GRID
      ========================================= */}
      <div
        className="
          grid
          grid-cols-[repeat(auto-fill,minmax(230px,1fr))]
          gap-[14px]
          max-[900px]:grid-cols-2
          max-[900px]:gap-2.5
        "
      >
        {category.products.map((product, index) => (
          <Link
            key={product.name}
            href={product.href}
            style={{
              "--i": index,
            }}
            className="
              group
              relative
              flex
              flex-col
              overflow-hidden
              rounded-[14px]
              border
              border-white/[0.08]
              bg-gradient-to-b
              from-white/[0.06]
              to-white/[0.02]
              text-white
              no-underline
              transition-all
              duration-500
              ease-out
              animate-[productCardIn_.55s_cubic-bezier(.2,.9,.3,1.1)_both]
              [animation-delay:calc(var(--i)*70ms)]
              hover:-translate-y-1.5
              hover:border-[#d4a445]/70
              hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,.8),0_0_24px_rgba(212,164,69,.25)]
            "
          >
            {/* =====================================
                PRODUCT IMAGE
            ===================================== */}
            <div
              className="
                relative
                h-[250px]
                overflow-hidden
                max-[900px]:h-[110px]
              "
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="250px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* DARK IMAGE OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#050d2b]/50
                  via-transparent
                  to-transparent
                "
              />

              {/* SHINE SWEEP */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[-60%]
                  top-0
                  w-[45%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-[#fff4c6]/45
                  to-transparent
                  transition-[left]
                  duration-[800ms]
                  ease-out
                  group-hover:left-[120%]
                "
              />

              {/* NUMBER */}
              <span
                className="
                  absolute
                  left-2.5
                  top-2.5
                  z-[2]
                  rounded-full
                  border
                  border-[#d4a445]/55
                  bg-[#050d2b]/75
                  px-[9px]
                  py-[3px]
                  text-[11px]
                  font-extrabold
                  tracking-[0.1em]
                  text-[#f7e08a]
                  backdrop-blur
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* ARROW */}
              <span
                className="
                  absolute
                  right-2.5
                  top-2.5
                  z-[2]
                  grid
                  h-[30px]
                  w-[30px]
                  translate-x-1.5
                  place-items-center
                  rounded-full
                  border
                  border-[#d4a445]/50
                  bg-[#050d2b]/70
                  text-[#f7e08a]
                  opacity-50
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  ease-out
                  group-hover:translate-x-0
                  group-hover:rotate-[-45deg]
                  group-hover:border-transparent
                  group-hover:bg-gradient-to-br
                  group-hover:from-[#f7e08a]
                  group-hover:to-[#b8862b]
                  group-hover:text-[#050d2b]
                  group-hover:opacity-100
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </div>

            {/* =====================================
                PRODUCT BODY
            ===================================== */}
            <div
              className="
                relative
                flex
                items-center
                justify-between
                gap-2.5
                px-4
                py-3.5
              "
            >
              {/* GOLD UNDERLINE */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-full
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-[#b8862b]
                  via-[#f7e08a]
                  to-[#d4a445]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* PRODUCT NAME */}
              <span
                className="
                  text-[14px]
                  font-extrabold
                  uppercase
                  tracking-[0.06em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#f7e08a]
                  max-[900px]:text-[12px]
                "
              >
                {product.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* =========================================
          BOTTOM GOLD LINE
      ========================================= */}
      <div
        className="
          mt-[18px]
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#f7e08a]
          to-transparent
          opacity-70
        "
      />
    </div>
  );
}