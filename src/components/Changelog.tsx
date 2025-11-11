import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Changelog = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl text-center space-y-4">
        <Badge variant="outline" className="border-orange-500/50 text-orange-500 text-xs">
          Oct 8, 2025 • Last release
        </Badge>
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Color schemes & cross-domain tracking 🎨
        </h2>
        
        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
          Change your dashboard colors, track visitors across domains,
          and 2 security features.
        </p>
        
        <div className="pt-2">
          <Button variant="outline" size="sm" className="gap-2 h-9">
            <Play className="h-3 w-3 fill-current" />
            Watch Video
          </Button>
        </div>
        
        <div className="pt-2">
          <a 
            href="#" 
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            All changelogs
          </a>
        </div>
      </div>
    </section>
  );
};
