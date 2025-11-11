import { Card } from "@/components/ui/card";
import { Sparkles, Monitor, MessageSquare, TrendingUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  keyPoints: string[];
}

const FeatureCard = ({ icon, title, description, keyPoints }: FeatureCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group p-8">
      <div className="mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-2">
        {keyPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-green-500 mt-0.5">✅</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <a href="#demo" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mt-6">
        Lihat Demo Langsung →
      </a>
    </Card>
  );
};

export const Features = () => {
  return (
    <section id="features" className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
              FEATURES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Platform Assessment yang Bikin Ngajar Lebih Efektif
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Semua yang kamu butuhkan untuk bikin, share, dan analisa quiz—dalam satu tempat.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FeatureCard
            icon={<Sparkles className="h-12 w-12" />}
            title="Generate Soal dengan AI"
            description="Upload PDF, URL, atau teks—AI bikin soal berkualitas dalam hitungan menit. Powered by RAG technology untuk soal yang relevan dengan konteks."
            keyPoints={[
              "Multi-source input: PDF, URL, Raw Text",
              "RAG (Retrieval-Augmented Generation) technology",
              "Subject detection otomatis (6 kategori)",
              "Smart retry untuk kualitas konsisten",
              "Provenance tracking—soal terhubung ke source material",
              "Edit manual tetap tersedia"
            ]}
          />

          <FeatureCard
            icon={<Monitor className="h-12 w-12" />}
            title="Pantau Siswa Real-time"
            description="Lihat siapa yang sedang mengerjakan, siapa yang kesulitan, dan progress setiap siswa—semuanya update otomatis tanpa refresh."
            keyPoints={[
              "Real-time participant tracking dengan WebSocket",
              "Status badges: In Progress, Completed, Timeout, Abandoned",
              "Live metrics: Active now, Average score, Completion rate",
              "Per-student detail: Current question, correct answers, time spent",
              "Search, sort, filter participants",
              "Pulse indicator untuk yang sedang aktif"
            ]}
          />

          <FeatureCard
            icon={<MessageSquare className="h-12 w-12" />}
            title="Feedback yang Membangun"
            description="Penjelasan personal setelah submit. Bantu siswa paham kenapa salah dan cara memperbaikinya."
            keyPoints={[
              "Explanation field untuk setiap soal",
              "Personal feedback per attempt",
              "Feedback status tracking (pending/completed)",
              "Optional—toggle on/off sesuai kebutuhan",
              "Bantu siswa belajar dari kesalahan",
              "Review mode untuk siswa lihat kembali jawaban"
            ]}
          />

          <FeatureCard
            icon={<TrendingUp className="h-12 w-12" />}
            title="Analytics Mendalam"
            description="Score distribution, completion trends, dan insights untuk improve cara ngajar."
            keyPoints={[
              "Score distribution chart (visual dengan Recharts)",
              "Completion rate tracking",
              "Average score trends",
              "Per-question difficulty analysis",
              "Time spent analytics",
              "Historical comparison (multiple sessions)"
            ]}
          />
        </div>
      </div>
    </section>
  );
};