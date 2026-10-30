// Server component: no "use client" here. Interactive pieces are client
// components imported below; the preloader state lives in <HeroIntro />.
import dynamic from "next/dynamic";

import HeroIntro from "@/component/home/HeroIntro";
import DesktopPolystyrene from "@/component/home/DesktopPolystyrene";
import ProductSlider from "@/component/home/ProductSlider";

// Below-the-fold sections are code-split into their own chunks so the
// initial JavaScript only contains what the first screen needs.
const Icon = dynamic(() => import("@/component/home/Icon"));
const MarqueeRow = dynamic(() => import("@/component/home/MarqueeStrip"));
const TeamSection = dynamic(() => import("@/component/home/Whyus"));
const WeCareSection = dynamic(() => import("@/component/home/WeCareSection"));
const StrongerTogether = dynamic(() => import("@/component/home/StrongerTogether"));
const WhyChoose = dynamic(() => import("@/component/home/WhyUsSection"));
const Client = dynamic(() => import("@/component/home/Client"));
const Cta = dynamic(() => import("@/component/home/VideoSection"));
const CTASection = dynamic(() => import("@/component/home/CtaSection"));
const SupplyChainSection = dynamic(() => import("@/component/home/SupplyChainSection"));
const ReviewsSection = dynamic(() => import("@/component/home/Review"));
const FAQSection = dynamic(() => import("@/component/home/Faq"));
const CustomerCareCTA = dynamic(() => import("@/component/home/CTA"));
const Form = dynamic(() => import("@/component/home/Form"));

export default function Home() {
  return (
    <>
      <HeroIntro />

      {/* Desktop only: not mounted at all on phones */}
      <DesktopPolystyrene />

      <ProductSlider />
      <Icon />

      <MarqueeRow />

      <TeamSection />
      <WeCareSection />
      <StrongerTogether />
      <WhyChoose />
      <Client />
      <Cta />
      <CTASection />
      <SupplyChainSection />
      <ReviewsSection />
      <FAQSection />
      <CustomerCareCTA />
      <Form />
    </>
  );
}
