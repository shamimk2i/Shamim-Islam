import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'project' | 'read' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch/coarse pointer or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="project"]')) {
        setCursorType('project');
      } else if (target.closest('[data-cursor="read"]')) {
        setCursorType('read');
      } else if (target.closest('[data-cursor="drag"]')) {
        setCursorType('drag');
      } else if (target.closest('a, button, [role="button"], input, textarea')) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: position.x,
        y: position.y,
        width: cursorType === 'project' || cursorType === 'read' ? 68 : cursorType === 'link' ? 36 : 10,
        height: cursorType === 'project' || cursorType === 'read' ? 68 : cursorType === 'link' ? 36 : 10,
        backgroundColor:
          cursorType === 'project' || cursorType === 'read'
            ? '#111111'
            : cursorType === 'link'
            ? 'rgba(104, 113, 95, 0.18)'
            : '#111111',
        border: cursorType === 'link' ? '1px solid rgba(104, 113, 95, 0.5)' : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 32,
        mass: 0.5,
      }}
      style={{
        borderRadius: '9999px',
      }}
    >
      {(cursorType === 'project' || cursorType === 'read') && (
        <span className="text-[10px] tracking-widest uppercase font-mono-meta text-[#F5F4F0] font-medium select-none">
          {cursorType === 'project' ? 'VIEW ↗' : 'READ'}
        </span>
      )}
    </motion.div>
  );
}
