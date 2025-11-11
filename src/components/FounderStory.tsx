import { Card } from "@/components/ui/card";
import founderTeamImage from "@/assets/founder-team.jpeg";

export const FounderStory = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Card */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 animate-fade-in">
            <Card className="bg-card border-border overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
              <div className="aspect-square relative">
                <img 
                  src={founderTeamImage} 
                  alt="Tim DataFast" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </Card>
          </div>

          {/* Right Side - Story Text */}
          <div className="space-y-4 md:space-y-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="text-lg md:text-xl">👋</span>
              <span className="text-sm md:text-base">
                Hey, <span className="font-semibold text-foreground">Pioneer</span> from <span className="font-semibold text-foreground">Indonesia</span> 🇮🇩
              </span>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              I'm Marc, the creator of DataFast. I've also built{" "}
              <a 
                href="#" 
                className="text-foreground font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
              >
                24 startups
              </a>{" "}
              and earned $2M+ online.
            </p>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              I learned that <span className="font-semibold text-foreground">data is a goldmine of opportunities</span>. 
              But most analytics tools just show <span className="italic text-foreground/60">vanity metrics</span>...
            </p>

            <p className="text-foreground/60 italic text-sm md:text-base leading-relaxed pl-4 border-l-2 border-border">
              Pageviews, visitors, bounce rates... but do any of these actually tell you where 
              your money is coming from?
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-foreground/80 text-sm md:text-base font-medium">
                So I built DataFast for 3 reasons:
              </p>
              <div className="space-y-2 pl-1">
                <p className="text-foreground/80 text-sm md:text-base">
                  1. <span className="font-semibold text-foreground">Find marketing channels that drive PAYING customers</span>, not just pageviews.
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  2. <span className="font-semibold text-foreground">Discover what makes people buy</span> and turn more visits into revenue.
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  3. <span className="font-semibold text-foreground">Make revenue-driven decisions</span> and work on the right things.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed pt-2">
              I'm building DataFast in front of{" "}
              <a 
                href="#" 
                className="text-foreground font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
              >
                127,000+ people
              </a>{" "}
              on Twitter. Let's ship! 🚢
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};