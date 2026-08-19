import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        width: '32px',
        height: '32px',
        backgroundImage: "url('/Fountain Pen & Pen Nib 3D--pointer--SweezyCursors..cur')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        marginLeft: '0px',
        marginTop: '0px'
      }}
    />
  );
}
