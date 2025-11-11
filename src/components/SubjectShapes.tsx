export const SubjectShapes = () => {
  // Static positions for all shapes - positioned in empty areas, visible in viewport
  const shapes = [
    { index: 0, x: 8, y: 12, rotation: 15, scale: 0.55, opacity: 0.75, animation: "slide-in-left" }, // Math - top left
    { index: 1, x: 92, y: 15, rotation: -20, scale: 0.6, opacity: 0.7, animation: "slide-in-right" }, // Physics - top right
    { index: 2, x: 5, y: 82, rotation: 25, scale: 0.5, opacity: 0.65, animation: "slide-in-bottom-left" }, // Biology - bottom left
    { index: 3, x: 93, y: 78, rotation: -15, scale: 0.6, opacity: 0.75, animation: "slide-in-bottom-right" }, // Language - bottom right
    { index: 4, x: 94, y: 45, rotation: 10, scale: 0.52, opacity: 0.65, animation: "scale-fade-in" }, // Chemistry - middle right
    { index: 5, x: 6, y: 48, rotation: -18, scale: 0.53, opacity: 0.7, animation: "rotate-fade-in" }, // Geography - middle left
  ];

  return (
    <>
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none w-28 h-28 md:w-36 md:h-36 animate-${shape.animation} animate-float`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: `translate(-50%, -50%) rotate(${shape.rotation}deg) scale(${shape.scale})`,
            opacity: shape.opacity,
            animationDelay: `${i * 0.15}s`,
            animationFillMode: "both",
          }}
        >
          <ShapeSVG index={shape.index} />
        </div>
      ))}
    </>
  );
};

const ShapeSVG = ({ index }: { index: number }) => {
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
        <ellipse cx="100" cy="100" rx="70" ry="30" fill="none" stroke="var(--primary)" strokeWidth="12" />
        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="30"
          transform="rotate(60 100 100)"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="12"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="30"
          transform="rotate(-60 100 100)"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="12"
        />
        {/* Nucleus */}
        <circle cx="100" cy="100" r="20" fill="var(--accent)" stroke="oklch(0.2 0 0)" strokeWidth="6" />
        {/* 3D depth */}
        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="30"
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
        <line x1="60" y1="50" x2="140" y2="50" stroke="var(--accent)" strokeWidth="8" />
        <line x1="60" y1="90" x2="140" y2="90" stroke="var(--accent)" strokeWidth="8" />
        <line x1="60" y1="130" x2="140" y2="130" stroke="var(--accent)" strokeWidth="8" />
        <line x1="60" y1="170" x2="140" y2="170" stroke="var(--accent)" strokeWidth="8" />
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
        <path d="M50 40 L40 45 L40 165 L50 160 Z" fill="oklch(0.45 0.18 257)" />
        {/* Pages */}
        <rect x="70" y="70" width="60" height="6" rx="3" fill="var(--accent)" />
        <rect x="70" y="90" width="50" height="6" rx="3" fill="var(--accent)" />
        <rect x="70" y="110" width="55" height="6" rx="3" fill="var(--accent)" />
        <rect x="70" y="130" width="45" height="6" rx="3" fill="var(--accent)" />
        {/* 3D depth */}
        <path d="M150 40 L156 34 L156 154 L150 160 Z" fill="oklch(0.2 0 0)" opacity="0.6" />
      </g>
    </svg>,

    // Chemistry - Molecule
    <svg key="chemistry" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* Bonds */}
        <line x1="100" y1="60" x2="60" y2="120" stroke="var(--primary)" strokeWidth="10" />
        <line x1="100" y1="60" x2="140" y2="120" stroke="var(--primary)" strokeWidth="10" />
        <line x1="60" y1="120" x2="140" y2="120" stroke="var(--primary)" strokeWidth="10" />
        <line x1="140" y1="120" x2="120" y2="160" stroke="var(--primary)" strokeWidth="10" />
        <line x1="60" y1="120" x2="80" y2="160" stroke="var(--primary)" strokeWidth="10" />
        {/* Atoms */}
        <circle cx="100" cy="60" r="20" fill="var(--chart-2)" stroke="oklch(0.2 0 0)" strokeWidth="5" />
        <circle cx="60" cy="120" r="20" fill="var(--primary)" stroke="oklch(0.2 0 0)" strokeWidth="5" />
        <circle cx="140" cy="120" r="20" fill="var(--chart-3)" stroke="oklch(0.2 0 0)" strokeWidth="5" />
        <circle cx="80" cy="160" r="18" fill="var(--chart-4)" stroke="oklch(0.2 0 0)" strokeWidth="5" />
        <circle cx="120" cy="160" r="18" fill="var(--accent)" stroke="oklch(0.2 0 0)" strokeWidth="5" />
        {/* 3D shadows */}
        <circle cx="102" cy="62" r="20" fill="oklch(0.2 0 0)" opacity="0.2" />
      </g>
    </svg>,

    // Geography - Globe/Earth
    <svg key="geography" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <g className="drop-shadow-2xl">
        {/* Globe circle */}
        <circle cx="100" cy="100" r="70" fill="var(--chart-3)" stroke="oklch(0.2 0 0)" strokeWidth="6" />
        {/* Latitude lines */}
        <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="var(--primary)" strokeWidth="4" />
        <ellipse cx="100" cy="100" rx="70" ry="40" fill="none" stroke="var(--primary)" strokeWidth="4" />
        {/* Longitude lines */}
        <ellipse cx="100" cy="100" rx="25" ry="70" fill="none" stroke="var(--primary)" strokeWidth="4" />
        <ellipse cx="100" cy="100" rx="45" ry="70" fill="none" stroke="var(--primary)" strokeWidth="4" />
        {/* Center meridian */}
        <line x1="100" y1="30" x2="100" y2="170" stroke="var(--accent)" strokeWidth="5" />
        {/* 3D shadow */}
        <circle cx="104" cy="104" r="70" fill="oklch(0.2 0 0)" opacity="0.15" />
      </g>
    </svg>,
  ];

  return <div className="w-full h-full transition-all duration-700 ease-out">{shapes[index]}</div>;
};
