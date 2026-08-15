'use client';
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "motion/react";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  movableClassName?: string;
}

export default function ScrollVelocity({
  texts,
  velocity = 10,
  className = "",
  movableClassName = ""
}: ScrollVelocityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const directionFactor = useRef<number>(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isVisible) return;

    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * Math.abs(velocityFactor.get()) * 15;

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div style={{ x }} className="flex whitespace-nowrap flex-nowrap min-w-max transform-gpu will-change-transform">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`flex items-center gap-8 px-4 ${movableClassName}`}>
            {texts.map((text, index) => (
              <React.Fragment key={index}>
                <span>{text}</span>
                <span className="text-[#B8925A] opacity-60">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
