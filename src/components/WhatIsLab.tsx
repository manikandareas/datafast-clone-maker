export const WhatIsLab = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
              TENTANG LAB
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Apa itu Lab?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Lab adalah assessment interaktif yang dibuat dari konten Anda. Lihat bagaimana Lab bekerja dalam video di bawah ini.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg border border-border bg-background">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Apa itu Lab?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
