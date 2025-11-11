import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, X, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Pricing = () => {
  const [sliderValue, setSliderValue] = useState([10]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const getEventLabel = (value: number) => {
    if (value <= 10) return "Up to 10k monthly events";
    if (value <= 50) return "Up to 50k monthly events";
    if (value <= 100) return "Up to 100k monthly events";
    if (value <= 500) return "Up to 500k monthly events";
    if (value <= 1000) return "Up to 1M monthly events";
    return "Up to 10M+ monthly events";
  };

  const starterFeatures = [
    { text: "10k monthly events", included: true },
    { text: "1 website", included: true },
    { text: "1 team member", included: true },
    { text: "3 years of data retention", included: true },
    { text: "Mentions and link attribution for X", included: false },
  ];

  const growthFeatures = [
    { text: "10k monthly events", included: true },
    { text: "30 websites", included: true },
    { text: "30 team members", included: true },
    { text: "5+ years of data retention", included: true },
    { text: "Mentions and link attribution for X", included: true },
  ];

  const avatarSeeds = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Traffic-based plans to match your growth
        </h2>

        {/* Slider Section */}
        <div className="mb-16 space-y-6">
          <div className="flex justify-center">
            <div className="inline-block px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground">
              {getEventLabel(sliderValue[0])}
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">10k</span>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                min={10}
                step={10}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground whitespace-nowrap">10M+</span>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-orange-500 font-medium">2 months free</span>
            <div className="flex gap-2 border border-border rounded-lg p-1 bg-secondary/30">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Starter Plan */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                STARTER
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-foreground">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {starterFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  )}
                  <span
                    className={`text-sm ${
                      feature.included ? "text-foreground" : "text-muted-foreground/70"
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Start 14-day free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                $0.00 due today. No card required.
              </p>
            </CardFooter>
          </Card>

          {/* Growth Plan */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                GROWTH
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-foreground">$19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {growthFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Start 14-day free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                $0.00 due today. No card required.
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* User Avatars Section */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {avatarSeeds.map((seed, index) => (
              <Avatar key={index} className="h-10 w-10 border-2 border-background">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                  alt={`User ${index + 1}`}
                />
                <AvatarFallback>U{index + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Loved by <span className="font-semibold text-foreground">9,341</span> users
          </p>
        </div>
      </div>
    </section>
  );
};
