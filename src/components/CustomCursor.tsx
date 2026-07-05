import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        width: '32px', // Reduced size (can adjust this freely now!)
        height: '32px',
        backgroundImage: "url('/Fountain Pen & Pen Nib 3D--pointer--SweezyCursors..cur')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        // Slight offset so the tip of the pen aligns with the actual pointer coordinate
        marginLeft: '0px',
        marginTop: '0px'
      }}
    />
  );
}
