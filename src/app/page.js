"use client"
import Client from "@/component/home/Client";
import CustomerCareCTA from "@/component/home/CTA";
import CTASection from "@/component/home/CtaSection";
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
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <HotelLuxScroll />
      <MarqueeRow />
      <PolystyreneScroll />
      <TeamSection />
      <WeCareSection />
      <Client />
      <ProductShowcase />
      <Cta />
      <ShipSection />
      <CustomerCareCTA />
      <CTASection />
      <WhyChooseUs />
      <ProcessSection />
      <FloatingGif />
    </>
  );
}