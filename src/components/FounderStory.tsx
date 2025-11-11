import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export const FounderStory = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12 lg:mb-16">
          {/* Story Text */}
          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="text-base md:text-lg">👋</span>
              <span className="text-sm md:text-base lg:text-lg">
                Hey, <span className="font-semibold">Pioneer</span> from <span className="font-semibold">Indonesia</span> 🇮🇩
              </span>
            </div>

            <p className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed">
              I'm Marc, the creator of DataFast. I've also built{" "}
              <a href="#" className="text-primary hover:text-primary/80 font-semibold underline-offset-4 hover:underline">
                24 startups
              </a>{" "}
              and earned $2M+ online.
            </p>

            <p className="text-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed">
              I learned that <span className="font-semibold">data is a goldmine of opportunities</span>. 
              But most analytics tools just show <span className="italic">vanity metrics</span>...
            </p>

            <p className="text-foreground/60 italic text-sm md:text-base leading-relaxed">
              Pageviews, visitors, bounce rates... but do any of these actually tell you where 
              your money is coming from?
            </p>

            <div className="space-y-2 md:space-y-3 pt-2 md:pt-4">
              <p className="text-foreground/80 text-sm md:text-base font-medium">
                So I built DataFast for 3 reasons:
              </p>
              <div className="space-y-1 md:space-y-2 pl-3 md:pl-4">
                <p className="text-foreground/80 text-sm md:text-base">
                  1. <span className="font-semibold">Find marketing channels that drive PAYING customers</span>, not just pageviews.
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  2. <span className="font-semibold">Discover what makes people buy</span> and turn more visits into revenue.
                </p>
                <p className="text-foreground/80 text-sm md:text-base">
                  3. <span className="font-semibold">Make revenue-driven decisions</span> and work on the right things.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 text-sm md:text-base leading-relaxed pt-2 md:pt-4">
              I'm building DataFast in front of{" "}
              <a href="#" className="text-primary hover:text-primary/80 font-semibold underline-offset-4 hover:underline">
                127,000+ people
              </a>{" "}
              on Twitter. Let's ship! 🚢
            </p>
          </div>
        </div>

        {/* Bottom - Dashboard Preview with Video */}
        <div className="relative">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="aspect-video md:aspect-[16/9] bg-gradient-to-br from-muted/30 to-muted/10 relative">
              {/* Dashboard mockup */}
              <div className="absolute inset-0 p-3 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-5xl bg-background rounded-lg shadow-2xl border border-border p-3 md:p-4 lg:p-6">
                  <div className="flex justify-between items-center mb-3 md:mb-4 lg:mb-6 pb-2 md:pb-3 lg:pb-4 border-b border-border/50">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="h-4 w-4 md:h-5 lg:h-6 md:w-5 lg:w-6 bg-primary/20 rounded flex items-center justify-center text-xs">📊</div>
                      <span className="text-xs md:text-sm lg:text-base font-semibold text-foreground">DataFast</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 md:gap-4">
                      <span className="text-xs md:text-sm text-muted-foreground">M</span>
                      <span className="text-xs md:text-sm text-muted-foreground">Marc Lou</span>
                    </div>
                  </div>
                  
                  <div className="mb-2 md:mb-3 lg:mb-4 text-xs md:text-sm text-foreground/70">
                    Hey Marc Lou, you got <span className="font-semibold text-foreground">8.4k visitors</span> and made{" "}
                    <span className="font-semibold text-foreground">$2,919</span> in the last 24 hours.
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { name: "shipfa.st", visitors: "3.4k", revenue: "$2.5k" },
                      { name: "insigh.to", visitors: "236" },
                      { name: "zenvoice.io", visitors: "511" },
                      { name: "byedispute.com", visitors: "3.4k", revenue: "$2.5k" },
                      { name: "poopup.ai", visitors: "236" },
                      { name: "launchvir.al", visitors: "511" },
                    ].map((site, i) => (
                      <div key={i} className="bg-muted/20 rounded-lg p-2 md:p-3 border border-border/30">
                        <div className="text-xs text-muted-foreground mb-1 md:mb-2 truncate">{site.name}</div>
                        <div className="h-8 md:h-10 lg:h-12 bg-primary/5 rounded mb-1 md:mb-2 flex items-end justify-around px-1 md:px-2">
                          {[...Array(8)].map((_, j) => (
                            <div
                              key={j}
                              className="w-0.5 md:w-1 bg-primary/30 rounded-t"
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                            />
                          ))}
                        </div>
                        <div className="text-xs text-foreground/60 truncate">
                          {site.visitors} visitors
                          {site.revenue && <span className="ml-1">• {site.revenue}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Play buttons overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
                <button className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full bg-foreground hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:scale-110 transform">
                  <Play className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-background fill-background ml-0.5 md:ml-1" />
                </button>
                <button className="hidden sm:flex h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full bg-foreground hover:bg-foreground/90 transition-all duration-300 items-center justify-center shadow-2xl hover:scale-110 transform">
                  <Play className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-background fill-background ml-0.5 md:ml-1" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
