import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export const FounderStory = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[400px,1fr] gap-12 items-start mb-16">
          {/* Left side - Founder Card */}
          <div className="mx-auto">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800 p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-6xl opacity-20">🏆</div>
              <div className="absolute top-4 right-4 text-6xl opacity-20">🏆</div>
              
              <div className="relative mb-4">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-5xl">🏆</div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-5xl">🏆</div>
                <div className="w-32 h-32 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-7xl border-4 border-amber-200 dark:border-amber-800">
                  👨‍💻
                </div>
              </div>
              
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">2023</div>
              <div className="text-lg font-semibold text-amber-700 dark:text-amber-300">Maker of the Year</div>
            </Card>
          </div>

          {/* Right side - Story Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="text-lg">👋</span>
              <span className="text-lg">
                Hey, <span className="font-semibold">Pioneer</span> from <span className="font-semibold">Indonesia</span> 🇮🇩
              </span>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed">
              I'm Marc, the creator of DataFast. I've also built{" "}
              <a href="#" className="text-primary hover:text-primary/80 font-semibold underline-offset-4 hover:underline">
                24 startups
              </a>{" "}
              and earned $2M+ online.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              I learned that <span className="font-semibold">data is a goldmine of opportunities</span>. 
              But most analytics tools just show <span className="italic">vanity metrics</span>...
            </p>

            <p className="text-foreground/60 italic leading-relaxed">
              Pageviews, visitors, bounce rates... but do any of these actually tell you where 
              your money is coming from?
            </p>

            <div className="space-y-3 pt-4">
              <p className="text-foreground/80 font-medium">
                So I built DataFast for 3 reasons:
              </p>
              <div className="space-y-2 pl-4">
                <p className="text-foreground/80">
                  1. <span className="font-semibold">Find marketing channels that drive PAYING customers</span>, not just pageviews.
                </p>
                <p className="text-foreground/80">
                  2. <span className="font-semibold">Discover what makes people buy</span> and turn more visits into revenue.
                </p>
                <p className="text-foreground/80">
                  3. <span className="font-semibold">Make revenue-driven decisions</span> and work on the right things.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed pt-4">
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
            <div className="aspect-[16/9] bg-gradient-to-br from-muted/30 to-muted/10 relative">
              {/* Dashboard mockup */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full max-w-5xl bg-background rounded-lg shadow-2xl border border-border p-6">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-primary/20 rounded flex items-center justify-center text-xs">📊</div>
                      <span className="font-semibold text-foreground">DataFast</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">M</span>
                      <span className="text-sm text-muted-foreground">Marc Lou</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 text-sm text-foreground/70">
                    Hey Marc Lou, you got <span className="font-semibold text-foreground">8.4k visitors</span> and made{" "}
                    <span className="font-semibold text-foreground">$2,919</span> in the last 24 hours.
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "shipfa.st", visitors: "3.4k", revenue: "$2.5k" },
                      { name: "insigh.to", visitors: "236" },
                      { name: "zenvoice.io", visitors: "511" },
                      { name: "byedispute.com", visitors: "3.4k", revenue: "$2.5k" },
                      { name: "poopup.ai", visitors: "236" },
                      { name: "launchvir.al", visitors: "511" },
                    ].map((site, i) => (
                      <div key={i} className="bg-muted/20 rounded-lg p-3 border border-border/30">
                        <div className="text-xs text-muted-foreground mb-2 truncate">{site.name}</div>
                        <div className="h-12 bg-primary/5 rounded mb-2 flex items-end justify-around px-2">
                          {[...Array(8)].map((_, j) => (
                            <div
                              key={j}
                              className="w-1 bg-primary/30 rounded-t"
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                            />
                          ))}
                        </div>
                        <div className="text-xs text-foreground/60">
                          {site.visitors} visitors
                          {site.revenue && <span className="ml-1">• {site.revenue} revenue</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Play buttons overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-8">
                <button className="h-20 w-20 rounded-full bg-foreground hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:scale-110 transform">
                  <Play className="h-8 w-8 text-background fill-background ml-1" />
                </button>
                <button className="h-20 w-20 rounded-full bg-foreground hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center shadow-2xl hover:scale-110 transform">
                  <Play className="h-8 w-8 text-background fill-background ml-1" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
