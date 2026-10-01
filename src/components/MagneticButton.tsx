import React, { useRef, useState, ReactNode, ButtonHTMLAttributes } from 'react';
import { useSound } from '../context/SoundContext';

export interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  strength?: number;
  playSoundOnClick?: boolean;
  soundType?: 'click' | 'pop' | 'swoosh';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.28,
  playSoundOnClick = true,
  soundType = 'click',
  onClick,
  onMouseEnter,
  id,
  type = 'button',
  title,
  disabled,
  ...rest
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { playClick, playPop, playSwoosh } = useSound();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (playSoundOnClick) {
      if (soundType === 'click') playClick();
      else if (soundType === 'pop') playPop();
      else if (soundType === 'swoosh') playSwoosh();
    }
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      id={id}
      type={type}
      title={title}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      className={`relative inline-flex items-center justify-center will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
