import Client from "@/component/home/Client";
import CustomerCareCTA from "@/component/home/CTA";
import Hero from "@/component/home/Hero";
import HotelLuxSection from "@/component/home/LuxuryCollageSection";
import ProductShowcase from "@/component/home/Product";
import ResolProducts from "@/component/home/Product";
import WeCareSection from "@/component/home/WeCareSection";
import LifeAtReliance from "@/component/home/Whyus";

export default function Home() {
  return (
    <>
      <Hero />
      <HotelLuxSection />
      <LifeAtReliance />
      <WeCareSection />
      <Client />
      <ProductShowcase />
      <CustomerCareCTA />
    </>
  );
}