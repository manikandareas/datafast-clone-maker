import { useEffect, useRef } from "react";

const MathSVGs = () => (
  <>
    {/* Integral Symbol */}
    <svg className="math-decoration absolute" style={{ top: "15%", left: "10%", width: "80px", height: "80px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 10C35 10 30 15 30 25V75C30 85 35 90 45 90M45 10C55 10 60 15 60 25V75C60 85 55 90 45 90" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.15" strokeLinecap="round"/>
    </svg>

    {/* Pi Symbol */}
    <svg className="math-decoration absolute" style={{ top: "30%", right: "8%", width: "80px", height: "80px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 30H80M30 30V80M70 30V80" stroke="hsl(var(--chart-1))" strokeWidth="4" opacity="0.15" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    {/* Sigma Symbol */}
    <svg className="math-decoration absolute" style={{ top: "60%", left: "15%", width: "80px", height: "80px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70 20H30L50 50L30 80H70" stroke="hsl(var(--chart-3))" strokeWidth="4" opacity="0.15" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    {/* Infinity Symbol */}
    <svg className="math-decoration absolute" style={{ top: "45%", right: "12%", width: "90px", height: "90px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50C20 35 27 30 35 30C43 30 47 35 50 40C53 35 57 30 65 30C73 30 80 35 80 50C80 65 73 70 65 70C57 70 53 65 50 60C47 65 43 70 35 70C27 70 20 65 20 50Z" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.15" strokeLinecap="round"/>
    </svg>

    {/* Delta Symbol */}
    <svg className="math-decoration absolute" style={{ top: "75%", left: "8%", width: "80px", height: "80px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20L20 80H80L50 20Z" stroke="hsl(var(--chart-4))" strokeWidth="3" opacity="0.15" strokeLinejoin="round"/>
    </svg>

    {/* Square Root Symbol */}
    <svg className="math-decoration absolute" style={{ top: "20%", left: "85%", width: "85px", height: "85px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50L35 70L45 30H85" stroke="hsl(var(--chart-2))" strokeWidth="3" opacity="0.15" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    {/* Function f(x) */}
    <svg className="math-decoration absolute" style={{ top: "70%", right: "18%", width: "75px", height: "75px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="30" y="60" fontFamily="serif" fontSize="48" fill="hsl(var(--chart-5))" opacity="0.15" fontStyle="italic">f(x)</text>
    </svg>

    {/* Plus Minus */}
    <svg className="math-decoration absolute" style={{ top: "50%", left: "5%", width: "70px", height: "70px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 25V55M30 40H70M30 70H70" stroke="hsl(var(--chart-1))" strokeWidth="4" opacity="0.15" strokeLinecap="round"/>
    </svg>

    {/* Angle Symbol */}
    <svg className="math-decoration absolute" style={{ top: "85%", right: "25%", width: "75px", height: "75px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 70L30 30L70 70" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.15" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 55C35 55 40 60 40 65" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.15" fill="none"/>
    </svg>

    {/* Derivative d/dx */}
    <svg className="math-decoration absolute" style={{ top: "40%", left: "75%", width: "80px", height: "80px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="15" y="60" fontFamily="serif" fontSize="40" fill="hsl(var(--chart-3))" opacity="0.15" fontStyle="italic">d/dx</text>
    </svg>

    {/* Bracket Notation */}
    <svg className="math-decoration absolute" style={{ top: "10%", left: "65%", width: "70px", height: "70px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 20C30 20 25 25 25 30V70C25 75 30 80 35 80M65 20C70 20 75 25 75 30V70C75 75 70 80 65 80" stroke="hsl(var(--chart-4))" strokeWidth="3" opacity="0.15" strokeLinecap="round"/>
    </svg>

    {/* Theta Symbol */}
    <svg className="math-decoration absolute" style={{ top: "65%", left: "82%", width: "75px", height: "75px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="25" stroke="hsl(var(--chart-5))" strokeWidth="3" opacity="0.15" fill="none"/>
      <path d="M30 50H70" stroke="hsl(var(--chart-5))" strokeWidth="3" opacity="0.15"/>
    </svg>
  </>
);

export const FloatingMathDecorations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.scrollY;
      const decorations = containerRef.current.querySelectorAll('.math-decoration');
      
      decorations.forEach((decoration, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        const rotate = scrolled * (0.02 + index * 0.01);
        
        (decoration as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${rotate}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .math-decoration {
          animation: float 8s ease-in-out infinite;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
        
        .math-decoration:nth-child(even) {
          animation-delay: -2s;
          animation-duration: 10s;
        }
        
        .math-decoration:nth-child(3n) {
          animation-delay: -4s;
          animation-duration: 12s;
        }
      `}</style>
      <MathSVGs />
    </div>
  );
};
