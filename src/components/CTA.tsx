import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CTA = () => {
  const avatarSeeds = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="border border-border/50 rounded-3xl bg-card/30 backdrop-blur-sm p-12 md:p-20 text-center">
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto leading-tight">
              Udah Cape Bikin Soal Manual Tiap Minggu?
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Saatnya beralih ke Ngerti.in! Upload materi, AI bikin soal, siswa join pakai kode—selesai dalam 5 menit.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="h-14 px-10 text-base font-semibold"
              >
                Coba Gratis Sekarang 🚀
              </Button>
            </div>

            {/* User Avatars */}
            <div className="flex flex-col items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                {avatarSeeds.map((seed, index) => (
                  <Avatar key={index} className="h-10 w-10 border-2 border-background">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                      alt={`Pendidik ${index + 1}`}
                    />
                    <AvatarFallback>P{index + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Dipercaya oleh <span className="font-semibold text-foreground">500+</span> pendidik Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};