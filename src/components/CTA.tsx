import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Target, Eye, Save } from "lucide-react";

export const CTA = () => {
  const avatarSeeds = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

  const stats = [
    { icon: <Clock className="h-6 w-6" />, label: "5 Menit", sublabel: "Dari materi ke quiz interaktif" },
    { icon: <Target className="h-6 w-6" />, label: "10x Lebih Cepat", sublabel: "Dibanding bikin manual" },
    { icon: <Eye className="h-6 w-6" />, label: "Real-time", sublabel: "Monitoring siswa langsung" },
    { icon: <Save className="h-6 w-6" />, label: "Auto-save", sublabel: "Siswa gak kehilangan progress" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="border-2 border-primary/30 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
          
          <div className="relative space-y-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Udah Cape Bikin Soal Manual Tiap Minggu?
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Saatnya beralih ke Ngerti.in! Upload materi, AI bikin soal, siswa join pakai kode—selesai dalam 5 menit. 
              Hemat waktu berjam-jam, fokus ke yang lebih penting: ngajar dengan hati.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg font-semibold"
              >
                Coba Gratis Sekarang 🚀
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-lg"
              >
                Minta Demo Personal
              </Button>
            </div>

            {/* Badge */}
            <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
              <p className="text-sm text-accent">
                ✨ Gratis 50 Labs • ⚡ Tanpa Kartu Kredit • 🔒 Data Aman & Terenkripsi
              </p>
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
                Bergabung dengan <span className="font-semibold text-foreground">500+</span> pendidik Indonesia yang sudah beralih ke cara yang lebih smart!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};