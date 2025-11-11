import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const FeaturedTestimonial = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-3 md:space-y-4">
          {/* Stars */}
          <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Main Quote */}
          <p className="text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed px-4">
            I've using DataFast for the past month.
          </p>

          {/* Numbered List */}
          <div className="space-y-1 text-xs md:text-sm lg:text-base text-foreground/80 px-4">
            <p>1. saw exactly how users were discovering my SaaS</p>
            <p>2. fixed my onboarding</p>
            <p>
              3. <span className="text-amber-600 dark:text-amber-400 font-semibold">doubled my conversion rate in 30 days</span>
            </p>
          </div>

          {/* Closing Statement */}
          <p className="text-xs md:text-sm lg:text-base text-foreground/80 pt-1 md:pt-2 px-4">
            This tool is insane for tracking what's actually working.
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-2 md:gap-3 pt-3 md:pt-4">
            <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-border flex-shrink-0">
              <AvatarImage 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Osu" 
                alt="Osu Dev" 
              />
              <AvatarFallback>OD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground text-sm md:text-base">Osu Dev</div>
              <div className="text-xs md:text-sm text-muted-foreground">shortmake.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
