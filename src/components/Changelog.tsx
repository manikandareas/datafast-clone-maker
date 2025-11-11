import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Changelog = () => {
  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mb-3">
          <span className="text-primary text-sm font-semibold">
            Oct 6, 2025 • Last release
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Color schemes & cross-domain tracking 🔍
        </h2>
        
        <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
          Change your dashboard colors, track visitors across domains,
          and 2 security features.
        </p>
        
        <Button variant="secondary" size="lg" className="mb-4 gap-2">
          <Play className="h-4 w-4 fill-current" />
          Watch Video
        </Button>
        
        <div>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            All changelogs
          </a>
        </div>
      </div>
    </section>
  );
};
