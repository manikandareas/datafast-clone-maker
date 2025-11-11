import { useEffect, useState } from "react";

export const SubjectShapes = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which shape to show based on scroll progress
  const getShapeIndex = () => {
    if (scrollProgress < 0.2) return 0; // Math
    if (scrollProgress < 0.4) return 1; // Physics
    if (scrollProgress < 0.6) return 2; // Biology
    if (scrollProgress < 0.8) return 3; // Language
    return 4; // Chemistry
  };

  const shapeIndex = getShapeIndex();
  const transitionProgress = (scrollProgress % 0.2) / 0.2; // Progress within current shape

  return (
    <>
      {/* Top Left Shape */}
      <div 
        className="fixed top-0 left-0 w-64 h-64 -translate-x-16 -translate-y-16 pointer-events-none z-10 transition-all duration-700 ease-out"
        style={{
          transform: `translate(-4rem, -4rem) rotate(${scrollProgress * 360}deg) scale(${1 + Math.sin(scrollProgress * Math.PI * 2) * 0.1})`,
        }}
      >
        <ShapeSVG index={shapeIndex} position="top-left" />
      </div>

      {/* Top Right Shape */}
      <div 
        className="fixed top-0 right-0 w-80 h-80 translate-x-20 -translate-y-20 pointer-events-none z-10 transition-all duration-700 ease-out"
        style={{
          transform: `translate(5rem, -5rem) rotate(${-scrollProgress * 360}deg) scale(${1 + Math.cos(scrollProgress * Math.PI * 2) * 0.1})`,
        }}
      >
        <ShapeSVG index={(shapeIndex + 1) % 5} position="top-right" />
      </div>

      {/* Bottom Left Shape */}
      <div 
        className="fixed bottom-32 left-0 w-72 h-72 -translate-x-20 pointer-events-none z-10 transition-all duration-700 ease-out"
        style={{
          transform: `translate(-5rem, 0) rotate(${scrollProgress * 180}deg) scale(${1 + Math.sin(scrollProgress * Math.PI * 4) * 0.15})`,
        }}
      >
        <ShapeSVG index={(shapeIndex + 2) % 5} position="bottom-left" />
      </div>

      {/* Bottom Right Shape */}
      <div 
        className="fixed bottom-20 right-0 w-96 h-96 translate-x-24 pointer-events-none z-10 transition-all duration-700 ease-out"
        style={{
          transform: `translate(6rem, 0) rotate(${-scrollProgress * 180}deg) scale(${1 + Math.cos(scrollProgress * Math.PI * 4) * 0.15})`,
        }}
      >
        <ShapeSVG index={(shapeIndex + 3) % 5} position="bottom-right" />
      </div>
    </>
  );
};

const ShapeSVG = ({ index, position }: { index: number; position: string }) => {
  const shapes = [
    // Math - Plus/Multiplication symbols
    <svg key="math" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* Main purple shape with 3D effect */}
        <path
          d="M80 40 L120 40 L120 80 L160 80 L160 120 L120 120 L120 160 L80 160 L80 120 L40 120 L40 80 L80 80 Z"
          fill="var(--primary)"
          stroke="oklch(0.2 0 0)"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* 3D depth effect */}
        <path
          d="M120 40 L126 34 L126 74 L166 74 L166 114 L126 114 L126 154 L120 160 L120 120 L160 120 L160 80 L120 80 Z"
          fill="oklch(0.2 0 0)"
          opacity="0.8"
        />
      </g>
    </svg>,
    
    // Physics - Atom symbol
    <svg key="physics" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* Electron orbits */}
        <ellipse cx="100" cy="100" rx="70" ry="30" 
          fill="none" 
          stroke="var(--primary)" 
          strokeWidth="12"
        />
        <ellipse cx="100" cy="100" rx="70" ry="30" 
          transform="rotate(60 100 100)"
          fill="none" 
          stroke="var(--primary)" 
          strokeWidth="12"
        />
        <ellipse cx="100" cy="100" rx="70" ry="30" 
          transform="rotate(-60 100 100)"
          fill="none" 
          stroke="var(--primary)" 
          strokeWidth="12"
        />
        {/* Nucleus */}
        <circle cx="100" cy="100" r="20" 
          fill="var(--accent)" 
          stroke="oklch(0.2 0 0)"
          strokeWidth="6"
        />
        {/* 3D depth */}
        <ellipse cx="100" cy="100" rx="70" ry="30" 
          fill="none" 
          stroke="oklch(0.2 0 0)" 
          strokeWidth="6"
          opacity="0.3"
          transform="translate(4, 4)"
        />
      </g>
    </svg>,
    
    // Biology - DNA helix
    <svg key="biology" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* DNA strand 1 */}
        <path
          d="M60 30 Q80 60, 60 90 T60 150 T60 180"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* DNA strand 2 */}
        <path
          d="M140 30 Q120 60, 140 90 T140 150 T140 180"
          fill="none"
          stroke="var(--chart-3)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Connecting bars */}
        <line x1="60" y1="50" x2="140" y2="50" stroke="var(--accent)" strokeWidth="8"/>
        <line x1="60" y1="90" x2="140" y2="90" stroke="var(--accent)" strokeWidth="8"/>
        <line x1="60" y1="130" x2="140" y2="130" stroke="var(--accent)" strokeWidth="8"/>
        <line x1="60" y1="170" x2="140" y2="170" stroke="var(--accent)" strokeWidth="8"/>
        {/* 3D shadow */}
        <path
          d="M64 34 Q84 64, 64 94 T64 154 T64 184"
          fill="none"
          stroke="oklch(0.2 0 0)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.3"
        />
      </g>
    </svg>,
    
    // Language - Book/Text symbol
    <svg key="language" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* Book cover */}
        <path
          d="M50 40 L150 40 L150 160 L50 160 L50 40"
          fill="var(--primary)"
          stroke="oklch(0.2 0 0)"
          strokeWidth="6"
        />
        {/* Book spine 3D */}
        <path
          d="M50 40 L40 45 L40 165 L50 160 Z"
          fill="oklch(0.45 0.18 257)"
        />
        {/* Pages */}
        <rect x="70" y="70" width="60" height="6" rx="3" fill="var(--accent)"/>
        <rect x="70" y="90" width="50" height="6" rx="3" fill="var(--accent)"/>
        <rect x="70" y="110" width="55" height="6" rx="3" fill="var(--accent)"/>
        <rect x="70" y="130" width="45" height="6" rx="3" fill="var(--accent)"/>
        {/* 3D depth */}
        <path
          d="M150 40 L156 34 L156 154 L150 160 Z"
          fill="oklch(0.2 0 0)"
          opacity="0.6"
        />
      </g>
    </svg>,
    
    // Chemistry - Molecule
    <svg key="chemistry" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* Bonds */}
        <line x1="100" y1="60" x2="60" y2="120" stroke="var(--primary)" strokeWidth="10"/>
        <line x1="100" y1="60" x2="140" y2="120" stroke="var(--primary)" strokeWidth="10"/>
        <line x1="60" y1="120" x2="140" y2="120" stroke="var(--primary)" strokeWidth="10"/>
        <line x1="140" y1="120" x2="120" y2="160" stroke="var(--primary)" strokeWidth="10"/>
        <line x1="60" y1="120" x2="80" y2="160" stroke="var(--primary)" strokeWidth="10"/>
        {/* Atoms */}
        <circle cx="100" cy="60" r="20" fill="var(--chart-2)" stroke="oklch(0.2 0 0)" strokeWidth="5"/>
        <circle cx="60" cy="120" r="20" fill="var(--primary)" stroke="oklch(0.2 0 0)" strokeWidth="5"/>
        <circle cx="140" cy="120" r="20" fill="var(--chart-3)" stroke="oklch(0.2 0 0)" strokeWidth="5"/>
        <circle cx="80" cy="160" r="18" fill="var(--chart-4)" stroke="oklch(0.2 0 0)" strokeWidth="5"/>
        <circle cx="120" cy="160" r="18" fill="var(--accent)" stroke="oklch(0.2 0 0)" strokeWidth="5"/>
        {/* 3D shadows */}
        <circle cx="102" cy="62" r="20" fill="oklch(0.2 0 0)" opacity="0.2"/>
      </g>
    </svg>,
  ];

  return (
    <div className="w-full h-full transition-all duration-700 ease-out">
      {shapes[index]}
    </div>
  );
};
