import React, { useRef, useState, ReactNode } from 'react';

export interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  showGlare?: boolean;
  onClick?: () => void;
  cursorType?: string;
  key?: React.Key;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.012,
  perspective = 1000,
  showGlare = true,
  onClick,
  cursorType
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = (mouseX / rect.width) * 100;
    const yPercent = (mouseY / rect.height) * 100;

    const rotX = -((mouseY / rect.height) - 0.5) * (maxTilt * 2);
    const rotY = ((mouseX / rect.width) - 0.5) * (maxTilt * 2);

    setRotate({ x: rotX, y: rotY });
    if (showGlare) {
      setGlarePosition({
        x: xPercent,
        y: yPercent,
        opacity: 0.12
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorType}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
      className={`relative will-change-transform ${className}`}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${scale}, ${scale}, 1)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered
            ? 'transform 0.1s ease-out'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Soft Specular Glare Reflection */}
        {showGlare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-xs transition-opacity duration-300"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(circle 380px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.45), transparent 70%)`,
              mixBlendMode: 'overlay'
            }}
          />
        )}
      </div>
    </div>
  );
}
