import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
  const userAvatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Revenue-first analytics
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover which marketing channels bring customers so you can grow your business, fast.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
          <div className="relative flex-1">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="website.com" 
              className="pl-10 h-12 bg-background border-border"
            />
          </div>
          <Button size="lg" className="h-12 px-8 gap-2">
            Add my website
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-8">
          14-day free trial. No card required
        </p>
        
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {userAvatars.map((avatar, i) => (
              <Avatar key={i} className="border-2 border-background h-10 w-10">
                <AvatarImage src={avatar} alt={`User ${i + 1}`} />
                <AvatarFallback>U{i + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Loved by <span className="font-semibold text-foreground">9,342</span> users
          </span>
        </div>
      </div>
    </section>
  );
};
