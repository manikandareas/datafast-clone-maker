import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  visual: React.ReactNode;
  hasPlayButton?: boolean;
}

const FeatureCard = ({ title, description, visual, hasPlayButton = true }: FeatureCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-2">
          {description}{" "}
          <a href="#" className="text-primary hover:text-primary/80 transition-colors font-medium">
            See live demo
          </a>
        </p>
      </div>
      <div className="relative bg-background/30 border-t border-border/30">
        {visual}
        {hasPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="h-20 w-20 rounded-full bg-foreground hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center shadow-2xl group-hover:scale-110">
              <Play className="h-8 w-8 text-background fill-background ml-1" />
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Analytics that bring customers, not confusion
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <FeatureCard
            title="Web analytics"
            description="Get meaningful insights like Google Analytics, but 10× simpler—focused only on what drives growth, not vanity metrics."
            visual={
              <div className="aspect-[16/10] bg-background/50 p-6 flex items-center justify-center">
                <div className="w-full max-w-lg bg-card rounded-lg shadow-xl border border-border/30 p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-muted-foreground pb-2 border-b border-border/30">
                      <span>Referrer</span>
                      <span>Visitors</span>
                    </div>
                    {[
                      { name: "Google", count: "4", color: "bg-blue-500" },
                      { name: "Direct/None", count: "3", color: "bg-gray-500" },
                      { name: "marcelo.com", count: "3", color: "bg-orange-500" },
                      { name: "robinsp.se", count: "2", color: "bg-yellow-500" },
                      { name: "DevDojo.io", count: "2", color: "bg-purple-500" },
                      { name: "bing.com", count: "2", color: "bg-green-500" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${item.color}`} />
                          <span className="text-foreground/80">{item.name}</span>
                        </div>
                        <span className="text-muted-foreground">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Revenue attribution"
            description="Discover marketing channels drive PAYING customers, customer segments with the highest LTV, and patterns that directly influence purchase decisions."
            visual={
              <div className="aspect-[16/10] bg-background/50 p-6 flex items-center justify-center">
                <div className="w-full max-w-lg bg-card rounded-lg shadow-xl border border-border/30 p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">Last 30 days</div>
                      <div className="flex gap-4 text-xs">
                        <div>
                          <div className="text-muted-foreground">Visitors</div>
                          <div className="text-foreground font-bold">33.9k</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Revenue</div>
                          <div className="text-foreground font-bold">$37.4k</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Conv. rate</div>
                          <div className="text-primary font-bold">0.48%</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-1">
                      {[30, 45, 25, 60, 40, 55, 35, 70, 50, 45, 65, 40, 75, 55, 48, 62, 38, 58, 42, 68].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/30 rounded-sm"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Goals, funnels, journeys"
            description="Set custom goals like signups or lead magnet downloads, and see the full journey each visitor takes from first click to conversion—so you know exactly what drives results."
            hasPlayButton={false}
            visual={
              <div className="aspect-[16/10] bg-background/50 p-6 flex items-center justify-center">
                <div className="w-full max-w-lg bg-card rounded-lg shadow-xl border border-border/30 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-foreground">Conversion Funnel</div>
                      <div className="text-xs text-muted-foreground">Last 7 days</div>
                    </div>
                    {[
                      { label: "Landing page", value: 1250, percent: 100 },
                      { label: "Product viewed", value: 856, percent: 68 },
                      { label: "Added to cart", value: 342, percent: 27 },
                      { label: "Checkout", value: 156, percent: 12 },
                      { label: "Purchase", value: 89, percent: 7 },
                    ].map((step, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-foreground/80">{step.label}</span>
                          <span className="text-muted-foreground">{step.value} ({step.percent}%)</span>
                        </div>
                        <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${step.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Live visitor intelligence"
            description="Watch visitors in real time, see who's likely to buy, and use the API to act instantly. It's as useful as it is addictive."
            visual={
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                <div className="relative w-full max-w-lg">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg shadow-2xl border border-border/50 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-foreground">Live Visitors</div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-muted-foreground">14 online</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { country: "🇺🇸", location: "New York, US", page: "/pricing" },
                        { country: "🇬🇧", location: "London, UK", page: "/features" },
                        { country: "🇩🇪", location: "Berlin, DE", page: "/dashboard" },
                      ].map((visitor, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
                          <span className="text-2xl">{visitor.country}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-foreground/80 truncate">{visitor.location}</div>
                            <div className="text-xs text-muted-foreground truncate">{visitor.page}</div>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};
