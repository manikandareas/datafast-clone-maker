import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Code2, CreditCard, TrendingUp, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

const StepCard = ({ 
  number, 
  title, 
  description, 
  visual, 
  showArrow = true 
}: { 
  number: number; 
  title: string; 
  description: string; 
  visual: React.ReactNode;
  showArrow?: boolean;
}) => {
  return (
    <div className="flex items-center gap-6">
      <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300">
        <div className="aspect-[4/3] bg-muted/30 border-b border-border/30 flex items-center justify-center p-8">
          {visual}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {number}. {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
      
      {showArrow && (
        <ArrowRight className="hidden lg:block h-8 w-8 text-muted-foreground/40 flex-shrink-0" />
      )}
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              How it works?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Find revenue opportunities in 3 steps
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-0 mb-16">
          <StepCard
            number={1}
            title="Install DataFast script"
            description="You'll see beautiful web analytics in 1 minute. Oh, and the script loads super fast (4kb)."
            visual={
              <div className="w-full bg-secondary/50 rounded-lg p-6 font-mono text-sm">
                <div className="space-y-1 text-left">
                  <div className="flex gap-3">
                    <span className="text-muted-foreground">1</span>
                    <span>
                      <span className="text-pink-400">&lt;script</span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-foreground">2</span>
                    <span className="text-green-400 ml-6">defer</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-foreground">3</span>
                    <span className="ml-6">
                      <span className="text-green-400">data-domain</span>
                      <span className="text-foreground">=</span>
                      <span className="text-orange-300">"unicorn.com"</span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-foreground"></span>
                    <span className="ml-6">
                      <span className="text-green-400">src</span>
                      <span className="text-foreground">=</span>
                      <span className="text-orange-300">"https://datafa.st/js"</span>
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-foreground">4</span>
                    <span>
                      <span className="text-pink-400">&lt;/script&gt;</span>
                    </span>
                  </div>
                </div>
              </div>
            }
          />

          <StepCard
            number={2}
            title="Connect revenue data"
            description="Link your favorite payment processor so DataFast can attribute revenue to your traffic sources."
            visual={
              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 bg-background/80 rounded-lg p-4 border border-border/50">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <span className="text-foreground font-semibold text-lg">Stripe</span>
                </div>
                <div className="flex items-center gap-3 bg-background/80 rounded-lg p-4 border border-border/50">
                  <div className="h-10 w-10 rounded-lg bg-foreground flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full border-2 border-background" />
                  </div>
                  <span className="text-foreground font-semibold text-lg">Polar</span>
                </div>
                <div className="flex items-center gap-3 bg-background/80 rounded-lg p-4 border border-border/50">
                  <div className="h-10 w-10 rounded-lg bg-yellow-400 flex items-center justify-center text-2xl">
                    🍋
                  </div>
                  <span className="text-foreground font-semibold text-lg">LemonSqueezy</span>
                </div>
              </div>
            }
          />

          <StepCard
            number={3}
            title="Grow your business"
            description="DataFast analyzes your funnel to find what makes people buy, and tells you exactly how to get more of them."
            visual={
              <div className="relative w-full bg-secondary/30 rounded-lg p-6">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span className="text-muted-foreground font-medium">Referrer</span>
                    <span className="text-muted-foreground font-medium">Visitors</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-foreground">Direct/None</span>
                    <span className="text-muted-foreground">1.1k</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 bg-card/50 rounded px-2 -mx-2 relative">
                    <span className="text-foreground font-medium">Google</span>
                    <span className="text-foreground font-medium">683</span>
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                        Focus here
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-8 border-r-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-foreground">X</span>
                    <span className="text-muted-foreground">213</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-foreground">marcos</span>
                    <span className="text-muted-foreground">209</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-foreground">Facebook</span>
                    <span className="text-muted-foreground">192</span>
                  </div>
                </div>
              </div>
            }
            showArrow={false}
          />
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Plus className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="website.com" 
                className="pl-10 h-12 bg-muted/50 border-border/50 text-foreground"
              />
            </div>
            <Button size="lg" className="h-12 px-8 gap-2 whitespace-nowrap">
              Add my website
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            14-day free trial. No card required
          </p>
        </div>
      </div>
    </section>
  );
};
