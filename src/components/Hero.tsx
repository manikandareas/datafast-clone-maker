import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SubjectShapes } from "./SubjectShapes";
export const Hero = () => {
  const userAvatars = ["https://api.dicebear.com/7.x/avataaars/svg?seed=1", "https://api.dicebear.com/7.x/avataaars/svg?seed=2", "https://api.dicebear.com/7.x/avataaars/svg?seed=3", "https://api.dicebear.com/7.x/avataaars/svg?seed=4", "https://api.dicebear.com/7.x/avataaars/svg?seed=5", "https://api.dicebear.com/7.x/avataaars/svg?seed=6", "https://api.dicebear.com/7.x/avataaars/svg?seed=7", "https://api.dicebear.com/7.x/avataaars/svg?seed=8"];
  return <section className="py-12 md:py-20 px-4 relative overflow-hidden min-h-[60vh]">
      <div className="absolute inset-0 z-0">
        <SubjectShapes />
      </div>
      <div className="container mx-auto max-w-5xl text-center relative z-20">
        

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 px-2">
          Buat soal dan kerjakan dalam hitungan menit?
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Platform assessment berbasis AI yang mengubah PDF atau web content menjadi kuis interaktif. Real-time
          monitoring, auto-save, dan analytics mendalam untuk pendidik modern Indonesia.
        </p>

        <div className="mb-6 md:mb-8 px-4 flex justify-center">
          <Button size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold">
            Mulai Gratis Sekarang 🚀
          </Button>
        </div>

        <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
          ✨ Gratis 50 Labs • ⚡ Tanpa Kartu Kredit • 🚀 Setup 2 Menit
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
          <div className="flex -space-x-2">
            {userAvatars.slice(0, 6).map((avatar, i) => <Avatar key={i} className="border-2 border-background h-8 w-8 md:h-10 md:w-10">
                <AvatarImage src={avatar} alt={`Pendidik ${i + 1}`} />
                <AvatarFallback>P{i + 1}</AvatarFallback>
              </Avatar>)}
          </div>
          <span className="text-xs md:text-sm text-muted-foreground text-center">
            Dipercaya oleh <span className="font-semibold text-foreground">500+</span> pendidik Indonesia
          </span>
        </div>
      </div>
    </section>;
};