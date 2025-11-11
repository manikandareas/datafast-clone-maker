import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Wand2, Share2, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const StepCard = ({ 
  number, 
  icon,
  title, 
  description,
  showArrow = true 
}: { 
  number: number; 
  icon: React.ReactNode;
  title: string; 
  description: string;
  showArrow?: boolean;
}) => {
  return (
    <div className="flex items-center gap-3 md:gap-6">
      <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300">
        <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border-b border-border/30 flex items-center justify-center p-4">
          <div className="text-primary scale-75 sm:scale-100">
            {icon}
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="text-xs md:text-sm text-muted-foreground font-semibold mb-2">LANGKAH {number}</div>
          <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
      
      {showArrow && (
        <ArrowRight className="hidden lg:block h-6 w-6 xl:h-8 xl:w-8 text-muted-foreground/40 flex-shrink-0" />
      )}
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
              CARA KERJA
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Dari Materi ke Quiz Interaktif dalam 4 Langkah
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Upload materi, AI bikin soal, siswa join pakai kode, kamu pantau real-time. 
            Selesai dalam 5 menit, hemat waktu berjam-jam!
          </p>
          <div className="mt-3 md:mt-4 inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-xs md:text-sm text-accent">
              ✅ Tanpa kartu kredit • 🔒 Auto-save biar aman
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-0 mb-8 md:mb-12 lg:mb-16">
          <StepCard
            number={1}
            icon={<FileText className="h-20 w-20" />}
            title="Upload Materi"
            description="PDF, URL, atau teks apa aja. Tinggal paste!"
          />

          <StepCard
            number={2}
            icon={<Wand2 className="h-20 w-20" />}
            title="AI Bikin Soal"
            description="Dalam 2-5 menit soal sudah jadi. Tinggal cek & edit."
          />

          <StepCard
            number={3}
            icon={<Share2 className="h-20 w-20" />}
            title="Kasih Kode ke Siswa"
            description="Siswa join pakai kode 6 digit. Gak perlu registrasi!"
          />

          <StepCard
            number={4}
            icon={<BarChart3 className="h-20 w-20" />}
            title="Pantau & Analisa"
            description="Lihat siapa yang stuck, mana soal tersulit—semuanya real-time."
            showArrow={false}
          />
        </div>

        <div className="text-center">
          <Button size="lg" className="h-14 px-8 text-lg font-semibold">
            Mulai Gratis Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✨ Gratis 50 Labs • ⚡ Setup 2 Menit • 🔒 Data Aman
          </p>
        </div>
      </div>
    </section>
  );
};