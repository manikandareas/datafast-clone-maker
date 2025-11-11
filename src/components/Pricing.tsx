import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Pricing = () => {
  const features = [
    "Gratis 50 Labs - Buat hingga 50 lab lengkap dengan unlimited questions",
    "Generate dari PDF & URL - Upload PDF atau paste link artikel—AI langsung bikin soal",
    "Monitoring Real-time Siswa - Pantau siapa yang sedang mengerjakan, siapa yang kesulitan",
    "Analytics Mendalam - Score distribution, completion rate, per-question difficulty",
    "Auto-save Otomatis - Siswa gak akan kehilangan jawaban, tersimpan otomatis",
    "Akses Multi-user - 30 website, 30 anggota tim (unlimited di beta)",
    "Support Prioritas - Respon cepat dari tim via email & chat",
    "Progress Tracking Detail - Lihat detail per siswa: current question, time spent, correctness"
  ];

  const avatarSeeds = ["User1", "User2", "User3", "User4", "User5", "User6", "User7", "User8"];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              PRICING
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Harga yang Sesuai dengan Kebutuhan Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Coba semua fitur premium tanpa bayar selama periode beta. Akses penuh untuk pendidik modern.
          </p>
        </div>

        <Card className="bg-card/50 border-primary/50 border-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-6 py-2 bg-accent text-accent-foreground font-semibold text-sm">
            🎉 PALING POPULER
          </div>
          
          <CardHeader className="space-y-6 pt-12">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Beta Gratis
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-foreground">Rp 0</span>
                <span className="text-muted-foreground text-lg">/selama beta</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Coba semua fitur premium tanpa bayar! Akses penuh ke platform assessment terlengkap untuk pendidik modern. Periode Beta terbatas, ayo daftar sekarang.
            </p>
          </CardHeader>

          <CardContent className="space-y-3 px-6">
            {features.map((feature, index) => {
              const [title, description] = feature.split(' - ');
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{title}</span>
                    {description && (
                      <span className="text-sm text-muted-foreground"> - {description}</span>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="pt-4 border-t border-border/50">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Data Retention:</strong> 5+ tahun
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 px-6 pb-8">
            <Button className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent/90">
              Daftar Gratis Sekarang 🚀
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-center space-y-2 w-full">
              <p className="text-xs text-muted-foreground">
                ✨ Setup hanya 2 menit • 🔒 Data aman & terenkripsi
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>14-day free trial (setelah beta)</span>
                <span>•</span>
                <span>Tanpa kartu kredit</span>
                <span>•</span>
                <span>Cancel kapan saja</span>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-block px-6 py-3 bg-muted/50 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              💡 <strong className="text-foreground">Harga post-beta</strong> akan diumumkan sebelum periode beta berakhir. Early adopters mendapat harga spesial!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-12">
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
            Bergabung dengan <span className="font-semibold text-foreground">500+</span> pendidik Indonesia
          </p>
        </div>
      </div>
    </section>
  );
};