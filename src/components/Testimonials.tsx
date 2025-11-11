import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

const TestimonialCard = ({ name, role, content }: TestimonialProps) => {
  return (
    <Card className="flex-shrink-0 w-[380px] p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group">
      <div className="mb-4 text-primary/20">
        <Quote className="h-10 w-10" />
      </div>
      <p className="text-foreground text-base mb-6 leading-relaxed italic">
        "{content}"
      </p>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
          {name[0]}
        </div>
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
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
      name: "Dr. Sari Wijaya",
      role: "Dosen Ilmu Komputer",
      content: "Ngertiin bikin PDF jadi kuis dalam hitungan menit. Game changer banget!"
    },
    {
      name: "Prof. Ahmad Rahman",
      role: "Profesor Matematika",
      content: "Monitoring real-time bantu aku improve cara ngajar langsung."
    },
    {
      name: "Maya Kusuma",
      role: "Admin Akademik",
      content: "Siswa suka banget sama pengalaman yang smooth. Gak ada masalah teknis lagi."
    },
    {
      name: "Dr. Rini Astuti",
      role: "Pengajar Biologi",
      content: "Dari URL jadi assessment dalam detik. Workflow aku 10x lebih efisien!"
    }
  ];

  const testimonialsRow2: TestimonialProps[] = [
    {
      name: "Budi Santoso",
      role: "Training Manager",
      content: "Dashboard analytics tunjukkin persis dimana siswa kesulitan."
    },
    {
      name: "Lisa Purnama",
      role: "Educator Online",
      content: "Fitur autosave jadi siswa gak pernah kehilangan progress mereka."
    },
    {
      name: "Dr. Andi Pratama",
      role: "Kepala Departemen",
      content: "Tools kurasi soal kasih kontrol penuh atas konten pembelajaran."
    },
    {
      name: "Fitri Handayani",
      role: "Guru SMA",
      content: "Kode akses bikin sharing lab ke siswa jadi super gampang."
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mb-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Apa Kata Pendidik Indonesia?
        </h2>
        <p className="text-lg text-muted-foreground">
          Ribuan guru dan dosen sudah beralih ke cara yang lebih smart dalam membuat assessment
        </p>
      </div>
      
      <div className="space-y-4">
        <MarqueeRow testimonials={testimonialsRow1} direction="left" />
        <MarqueeRow testimonials={testimonialsRow2} direction="right" />
      </div>
    </section>
  );
};