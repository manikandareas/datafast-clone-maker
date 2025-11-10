import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";
import { FloatingMathDecorations } from "@/components/FloatingMathDecorations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingMathDecorations />
      <div className="relative z-10">
        <Header />
        <Hero />
        <DashboardPreview />
      </div>
    </div>
  );
};

export default Index;
