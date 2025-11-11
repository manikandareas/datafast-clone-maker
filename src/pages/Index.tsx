import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { Changelog } from "@/components/Changelog";
import { FounderStory } from "@/components/FounderStory";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DashboardPreview />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Changelog />
      <FounderStory />
    </div>
  );
};

export default Index;
