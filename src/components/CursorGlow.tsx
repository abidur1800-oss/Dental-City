import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block"
    />
  );
};
