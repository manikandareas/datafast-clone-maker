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
    <Card className="flex-shrink-0 w-[420px] p-5 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12 shrink-0">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-foreground">{name}</span>
            {verified && (
              <Badge variant="secondary" className="h-5 w-5 p-0 rounded-full bg-primary flex items-center justify-center">
                <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </Badge>
            )}
          </div>
          <div className="text-muted-foreground text-sm mb-3">@{handle}</div>
          
          <p className="text-foreground text-[15px] mb-3 leading-relaxed">{content}</p>
          
          {image && (
            <div className="mb-3 rounded-xl overflow-hidden border border-border/50">
              <img src={image} alt="Dashboard preview" className="w-full h-auto" />
            </div>
          )}
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm pt-2">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>{replies}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <LinkIcon className="h-4 w-4" />
              <span className="text-xs">Copy link</span>
            </button>
            <span className="ml-auto text-xs">{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const MarqueeRow = ({ testimonials, direction }: { testimonials: TestimonialProps[], direction: 'left' | 'right' }) => {
  return (
    <div className="relative overflow-hidden py-4 group/row">
      <div className={`flex gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover/row:[animation-play-state:paused]`}>
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonialsRow1: TestimonialProps[] = [
    {
      name: "Sergiu AI Directories",
      handle: "s_chiriac",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sergiu",
      verified: true,
      content: "Unhuu, more sales today! 🎉\n\nLoving how it's all displayed on Datafast by @marc_louvion. Important indicators is seeing the \"Revenue\" and \"Revenue per visitor\" stats.\n\nHow cool is that? 😎 #buildinpublic",
      likes: 16,
      replies: 4,
      date: "5:27 AM · Oct 2, 2024"
    },
    {
      name: "Keith Schembri",
      handle: "KeithSchembril",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Keith",
      verified: true,
      content: "ANDDDD LIFTOFF! Had my first wave of traffic, thanks to you collectively reaching 17.4K view\n\nHere's the breakdown:\n308 visits = 1.77% visited\n72 Signups = 23.38% Signup conversion\n\nIts only just the start...Keep Building!!",
      likes: 4,
      replies: 2,
      date: "6:39 AM · Jul 30, 2025"
    },
    {
      name: "Christopher Woggon",
      handle: "chrissyinspace",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
      verified: true,
      content: "Last month I was at $0, today I crossed $500. What seemed impossible is now reality. Keep trying, eventually you will be rewarded.",
      likes: 5,
      replies: 8,
      date: "9:04 PM · Jan 28, 2025"
    },
    {
      name: "DevOps Daily",
      handle: "thedevopsdaily",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevOps",
      verified: false,
      content: "The @DataFast_ UX is on a next level! 🔥\n\nWell done @marc_louvion!",
      likes: 3,
      replies: 1,
      date: "7:41 PM · Jul 11, 2025"
    },
    {
      name: "Dan Kulkov",
      handle: "DanKulkov",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan",
      verified: true,
      content: "datafast is really good\n\nmore insights than Plausible\n\nx2 cheaper",
      likes: 8,
      replies: 3,
      date: "5:27 AM · Aug 16, 2025"
    },
  ];

  const testimonialsRow2: TestimonialProps[] = [
    {
      name: "Hridoy Rehman",
      handle: "hridoyreh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hridoy",
      verified: true,
      content: "I decided to use DataFast to grow my MRR as data is the most important thing that we should care about...",
      likes: 3,
      replies: 2,
      date: "9:38 PM · Sep 15, 2025"
    },
    {
      name: "Uaghazade",
      handle: "uAghazadae",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Uagh",
      verified: true,
      content: "I've tried all the popular analytics tools on my projects. GA, plausible, posthog, you name it.\n\n@DataFast_ is the best analytics tool on the market right now.\n\njust shows the metrics you actually need. the clean, simple dashboard is a huge win.\n\nchange my mind",
      likes: 195,
      replies: 12,
      date: "3:14 PM · Oct 4, 2025"
    },
    {
      name: "Stephon Cooper-Miller",
      handle: "scoopermiller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephon",
      verified: true,
      content: "Just connect my 2nd SaaS I'm building to @marc_louvion's @DataFast_.\n\nI'm excited to keep building.\n\nNext, I have to finish the main function and start the beta testing.\n\n#SaaS #Business #Nocode #Indiehacker #entrepreneur",
      likes: 10,
      replies: 5,
      date: "7:33 PM · Aug 12, 2025"
    },
    {
      name: "Michael Andreuzza",
      handle: "Mike_Andreuzza",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      verified: true,
      content: "I have ditched Umami for all my projects and will close it tonight, just grabbing all my data just in case any of my clients acquired again.\n\nI have moved Lexington Themes to DataFast and will move the rest today too.\n\nThis is probably one pf the coolest products I have seen",
      likes: 10,
      replies: 6,
      date: "7:33 PM · Aug 12, 2025"
    },
    {
      name: "Emma Rodriguez",
      handle: "emmarod",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      verified: true,
      content: "Why I switched from Plausible to DataFast: The revenue tracking feature alone is worth it. Finally can see which campaigns actually convert to paying customers.",
      likes: 67,
      replies: 11,
      date: "3:04 AM · Mar 14, 2025"
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mb-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Loved by founders & marketers
        </h2>
        <p className="text-lg text-muted-foreground">
          Join thousands of businesses making data-driven decisions
        </p>
      </div>
      
      <div className="space-y-4">
        <MarqueeRow testimonials={testimonialsRow1} direction="left" />
        <MarqueeRow testimonials={testimonialsRow2} direction="right" />
      </div>
    </section>
  );
};
