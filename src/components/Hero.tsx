import { Button } from "@/components/ui/button";
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
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
          <span className="text-accent font-semibold text-sm">
            🎉 Beta Gratis - Akses Penuh Tanpa Batas
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Buat soal dan kerjakan dalam hitungan menit?
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Platform assessment berbasis AI yang mengubah PDF atau web content menjadi kuis interaktif. Real-time monitoring, auto-save, dan analytics mendalam untuk pendidik modern Indonesia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <Button size="lg" className="h-14 px-8 text-lg font-semibold">
            Mulai Gratis Sekarang 🚀
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
            Lihat Demo Langsung
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-8">
          ✨ Gratis 50 Labs • ⚡ Tanpa Kartu Kredit • 🚀 Setup 2 Menit
        </p>
        
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {userAvatars.map((avatar, i) => (
              <Avatar key={i} className="border-2 border-background h-10 w-10">
                <AvatarImage src={avatar} alt={`Pendidik ${i + 1}`} />
                <AvatarFallback>P{i + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Dipercaya oleh <span className="font-semibold text-foreground">500+</span> pendidik Indonesia
          </span>
        </div>
      </div>
    </section>
  );
};
