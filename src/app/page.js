"use client"
import Client from "@/component/home/Client";
import CustomerCareCTA from "@/component/home/CTA";
import CTASection from "@/component/home/CtaSection";
import FAQSection from "@/component/home/Faq";
import ReviewsSection from "@/component/home/Review";
import Form from "@/component/home/Form";
import Hero from "@/component/home/Hero";
import HotelLuxScroll from "@/component/home/HotelLuxScroll";
import MarqueeRow from "@/component/home/MarqueeStrip";
import PolystyreneScroll from "@/component/home/PolystyreneScroll";
import ProcessSection from "@/component/home/ProcessSection";
import ProductShowcase from "@/component/home/Product";
import ShipSection from "@/component/home/ShipSection";
import FloatingGif from "@/component/home/StickySection";
import Cta from "@/component/home/VideoSection";
import WeCareSection from "@/component/home/WeCareSection";
import TeamSection from "@/component/home/Whyus";
import WhyChooseUs from "@/component/home/WhyUsSection";
import Preloader from "@/component/layout/Preloader";
import { useState } from "react";
import HeroSlider from "@/component/home/HeroSlider";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import StrongerTogether from "@/component/home/StrongerTogether";

const products = [
  {
    id: 1,
    name: "PVC Resin",
    category: "Polymers",
    image: "/product/Polystyrene_PS.png",
    description:
      "High quality PVC resin for reliable industrial applications.",
  },
  {
    id: 2,
    name: "EVA Resin",
    category: "Polymers",
    image: "/product/EVA_Resin.png",
    description:
      "Reliable EVA polymer solutions for multiple industries.",
  },
  {
    id: 3,
    name: "Polyethylene",
    category: "Polymers",
    image: "/product/Polyethylene_PE.png",
    description:
      "Premium LLDPE material for flexible applications.",
  },
  {
    id: 4,
    name: "Polypropylene",
    category: "Polymers",
    image: "/product/Polypropylene_PP.png",
    description:
      "Quality LDPE materials for packaging applications.",
  },
  {
    id: 5,
    name: "Polystyrene",
    category: "Polymers",
    image: "/product/PVC_Resin.png",
    description:
      "High-performance plasticizers for flexible materials.",
  },
];

function ProductCard({
  product,
}) {

  return (
    <div
      className="
      relative
                h-[600px]
                w-[280px]
                overflow-hidden
                rounded-[10px]
            "
    >

      {/* PRODUCT IMAGE */}

      <div className="absolute inset-0 bg-[#F3F3F1]">

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="270px"
          priority
          className="object-center"
        />

      </div>


      {/* DARK GRADIENT */}

      {/* <div
        className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[65%]
                    bg-gradient-to-t
                    from-black/90
                    via-black/35
                    to-transparent
                "
      /> */}


      {/* CATEGORY */}

      {/* <div
        className="
                    absolute
                    left-5
                    top-5
                    rounded-[5px]
                    bg-white/90
                    px-3
                    py-2
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#0d2461]
                    backdrop-blur-sm
                "
      >
        {product.category}
      </div> */}


      {/* CONTENT */}

      {/* <div
        className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    px-5
                    py-4
                "
      >



        <div
          className="
                        flex
                        items-center
                        justify-between
                    "
        >

          <h3
            className="
                        text-[27px]
                        font-normal
                        leading-none
                        tracking-[-0.04em]
                        text-white
                    "
          >
            {product.name}
          </h3>

          <span
            className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                        "
          >
            <ArrowRight size={15} />
          </span>
        </div>

      </div> */}

    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => setLoading(false)}
        />
      )}

      {/* <Hero /> */}
      <HeroSlider />
      <StrongerTogether />
      {/* <HotelLuxScroll /> */}
      <MarqueeRow />
      <PolystyreneScroll />
      <TeamSection />
      <WeCareSection />
      <Client />

      <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16 border-t border-orange-100">
        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col items-center justify-center text-center sm:mb-12">
          <span
            className="
        inline-flex
        rounded-md
        bg-[#0d2461]
        px-4
        py-2
        text-[9px]
        uppercase
        tracking-[0.22em]
        text-white
      "
          >
            OUR PRODUCTS
          </span>

          <h2
            className="
        mt-5
        max-w-4xl
        text-[36px]
        font-medium
        leading-[0.95]
        tracking-[-0.055em]
        text-[#0d2461]
        sm:text-[46px]
        md:text-[56px]
        lg:text-[68px]
      "
          >
            Quality polymers.
            <span className="block">Reliable supply.</span>
          </h2>
        </div>

        {/* PRODUCTS GRID */}
        <div
          className="
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      sm:gap-5
    "
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id || product._id || index}
              product={product}
            />
          ))}
        </div>
      </div>

      {/* <ProductShowcase /> */}
      <Cta />
      <ShipSection />
      <CustomerCareCTA />
      <CTASection />
      <WhyChooseUs />
      <ProcessSection />
      <ReviewsSection />
      <FAQSection />
      <Form />
      <FloatingGif />
    </>
  );
}