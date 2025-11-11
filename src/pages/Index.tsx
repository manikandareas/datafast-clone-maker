import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsLab } from "@/components/WhatIsLab";
import { LiveMonitoringPreview } from "@/components/LiveMonitoringPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { Changelog } from "@/components/Changelog";
import { FounderStory } from "@/components/FounderStory";
import { FeaturedTestimonial } from "@/components/FeaturedTestimonial";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatIsLab />
      <LiveMonitoringPreview />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Changelog />
      <FounderStory />
      <FeaturedTestimonial />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
