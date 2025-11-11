import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CTA = () => {
  const avatarSeeds = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="border border-border/50 rounded-2xl bg-card/30 p-12 md:p-16 text-center">
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Find revenue hiding in your traffic
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover which marketing channels bring customers
              so you can grow your business, fast.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-base px-8 py-6 h-auto"
              >
                Start a 14-day free trial
              </Button>
            </div>

            {/* User Avatars */}
            <div className="flex flex-col items-center gap-3 pt-4">
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
        </div>
      </div>
    </section>
  );
};
