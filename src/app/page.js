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
import WhyChoose from "@/component/home/WhyUsSection";
import Preloader from "@/component/layout/Preloader";
import { useState } from "react";
import HeroSlider from "@/component/home/HeroSlider";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import StrongerTogether from "@/component/home/StrongerTogether";
import Icon from "@/component/home/Icon";
import ProductSlider from "@/component/home/ProductSlider";



export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => setLoading(false)}
        />
      )}

      <Hero />
      {/* <HeroSlider /> */}
      {/* <HotelLuxScroll /> */}
      <StrongerTogether />
      <Icon />
      <PolystyreneScroll />
      <MarqueeRow />
      <ProductSlider />
      <TeamSection />
      <WeCareSection />
      <WhyChoose />
      <Client />

      {/* <ProductShowcase /> */}
      <Cta />
      {/* <ShipSection /> */}
      <CustomerCareCTA />
      <CTASection />
      {/* <ProcessSection /> */}
      <ReviewsSection />
      <FAQSection />
      <Form />
      <FloatingGif />
    </>
  );
}