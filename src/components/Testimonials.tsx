import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Link as LinkIcon } from "lucide-react";

interface TestimonialProps {
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
  content: string;
  image?: string;
  likes: number;
  replies: number;
  date: string;
}

const TestimonialCard = ({ name, handle, avatar, verified, content, image, likes, replies, date }: TestimonialProps) => {
  return (
    <Card className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12 shrink-0">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-foreground truncate">{name}</span>
            {verified && (
              <Badge variant="secondary" className="h-5 w-5 p-0 rounded-full bg-primary">
                <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </Badge>
            )}
            <span className="text-muted-foreground text-sm truncate">@{handle}</span>
          </div>
          
          <p className="text-foreground mb-3 leading-relaxed">{content}</p>
          
          {image && (
            <div className="mb-3 rounded-lg overflow-hidden border border-border">
              <img src={image} alt="Dashboard preview" className="w-full h-auto" />
            </div>
          )}
          
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>{replies}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <LinkIcon className="h-4 w-4" />
            </button>
            <span className="ml-auto text-xs">{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      handle: "sarahjdev",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      verified: true,
      content: "Datafast is absolute art! Real-time insights that actually help me understand where my customers are coming from. 10x better than analytics tools I've used before.",
      likes: 156,
      replies: 12,
      date: "2h ago"
    },
    {
      name: "Marcus Chen",
      handle: "marcusc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      verified: true,
      content: "Started a trial and love it so far. Real time visitors with referring source is a game changer. Best decision for my SaaS.",
      likes: 89,
      replies: 8,
      date: "5h ago"
    },
    {
      name: "Emma Williams",
      handle: "emmawilliams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      verified: true,
      content: "What stops analytics tools from generating reports like this? The revenue attribution is incredible. I can finally see which channels actually drive sales.",
      likes: 234,
      replies: 18,
      date: "1d ago"
    },
    {
      name: "Alex Rivera",
      handle: "alexrivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      verified: true,
      content: "Okay, I was skeptical but I'm converted after trying it. I'm now obsessed with finding out exactly where my subscribers are coming from.",
      likes: 145,
      replies: 15,
      date: "1d ago"
    },
    {
      name: "David Kim",
      handle: "davidkim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      verified: false,
      content: "This looks awesome! Switched my analytics completely to Datafast. Now every time someone mentions my product, I know it from this dashboard 📊",
      likes: 167,
      replies: 9,
      date: "2d ago"
    },
    {
      name: "Lisa Anderson",
      handle: "lisaanderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      verified: true,
      content: "Switched from Google Analytics to Datafast. Being able to track every payment is really good. Clean interface, powerful insights.",
      likes: 198,
      replies: 14,
      date: "3d ago"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by founders & marketers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of businesses making data-driven decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
