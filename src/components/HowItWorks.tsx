import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Wand2, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const StepCard = ({ 
  number, 
  visual,
  title, 
  description,
  showArrow = true 
}: { 
  number: number; 
  visual: React.ReactNode;
  title: string; 
  description: string;
  showArrow?: boolean;
}) => {
  return (
    <>
      <Card className="flex-1 bg-card/30 backdrop-blur-sm border-border/30 overflow-hidden hover:border-primary/20 transition-all duration-300">
        <div className="aspect-4/3 bg-muted/20 border-b border-border/30 flex items-center justify-center p-6">
          {visual}
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {number}. {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
      
      {showArrow && (
        <ArrowRight className="hidden lg:block h-8 w-8 text-muted-foreground/30 shrink-0 mx-4" />
      )}
    </>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              CARA KERJA
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 px-4">
            Dari Materi ke Quiz Interaktif dalam 3 Langkah
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 mb-12">
          <StepCard
            number={1}
            visual={
              <div className="w-full h-full flex items-center justify-center">
                <FileText className="h-24 w-24 text-primary/60" />
              </div>
            }
            title="Upload Materi"
            description="Upload PDF, paste URL, atau ketik langsung. AI langsung proses dalam hitungan detik—gak perlu format khusus."
          />

          <StepCard
            number={2}
            visual={
              <div className="w-full h-full flex items-center justify-center">
                <Wand2 className="h-24 w-24 text-primary/60" />
              </div>
            }
            title="AI Bikin Soal"
            description="Dalam 2-5 menit, soal pilihan ganda dan essay siap pakai. Tinggal cek dan edit kalau perlu—atau langsung share."
          />

          <StepCard
            number={3}
            visual={
              <div className="w-full h-full flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-primary/60" />
              </div>
            }
            title="Pantau Real-time"
            description="Siswa join pakai kode 6 digit. Kamu pantau siapa yang stuck, lihat statistik detail, dan analisa hasilnya—semua real-time."
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