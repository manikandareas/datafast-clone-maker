import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DashboardPreview />
    </div>
  );
};

export default Index;
