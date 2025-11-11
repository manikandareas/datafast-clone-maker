import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const FeaturedTestimonial = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Stars */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 md:h-8 md:w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Main Quote */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed px-4">
            I've using DataFast for the past month.
          </p>

          {/* Numbered List */}
          <div className="space-y-2 text-base md:text-lg lg:text-xl text-foreground/80 px-4">
            <p>1. saw exactly how users were discovering my SaaS</p>
            <p>2. fixed my onboarding</p>
            <p>
              3. <span className="text-amber-600 dark:text-amber-400 font-semibold">doubled my conversion rate in 30 days</span>
            </p>
          </div>

          {/* Closing Statement */}
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 pt-2 md:pt-4 px-4">
            This tool is insane for tracking what's actually working.
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3 md:gap-4 pt-6 md:pt-8">
            <Avatar className="h-12 w-12 md:h-14 md:w-14 border-2 border-border flex-shrink-0">
              <AvatarImage 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Osu" 
                alt="Osu Dev" 
              />
              <AvatarFallback>OD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground text-base md:text-lg">Osu Dev</div>
              <div className="text-sm md:text-base text-muted-foreground">shortmake.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
