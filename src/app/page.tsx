import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import Pricing from "@/components/Pricing";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <>
      
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <CaseStudies />
      <InteractiveDemo />
      <CTA />
    </>
  );
}
