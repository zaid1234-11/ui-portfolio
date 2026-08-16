import React, { forwardRef, useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';

// Shared global mouse position tracker to prevent dozens of redundant window listeners
let globalMouse = { x: -9999, y: -9999 };
let listenersAttached = false;

function initGlobalMouse() {
  if (listenersAttached || typeof window === 'undefined') return;
  listenersAttached = true;

  const handleMouseMove = (ev: MouseEvent) => {
    globalMouse.x = ev.clientX;
    globalMouse.y = ev.clientY;
  };
  const handleTouchMove = (ev: TouchEvent) => {
    if (ev.touches.length > 0) {
      globalMouse.x = ev.touches[0].clientX;
      globalMouse.y = ev.touches[0].clientY;
    }
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
}

interface VariableProximityProps {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  fromColor?: string;
  toColor?: string;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    fromColor,
    toColor,
    ...restProps
  } = props;

  const spanRef = useRef<HTMLSpanElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    initGlobalMouse();
  }, []);

  // Use IntersectionObserver to completely halt RAF when off-screen
  useEffect(() => {
    const el = spanRef.current;
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

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr: string) =>
      new Map<string, number>(
        settingsStr
          .split(',')
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(' ');
            return [name.replace(/['"]/g, ''), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const targetColor = toColor || "#B8925A";

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return norm ** 2;
      case 'gaussian':
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  };

  const currentFalloffsRef = useRef<number[]>([]);
  const isSettledRef = useRef(false);

  useEffect(() => {
    if (!isVisible) return;

    let frameId: number;

    const loop = () => {
      const { x, y } = globalMouse;
      const targetContainer = containerRef.current || spanRef.current;

      // Quick bounding check on container before checking every letter
      if (targetContainer) {
        const cRect = targetContainer.getBoundingClientRect();
        const isNear =
          x >= cRect.left - radius &&
          x <= cRect.right + radius &&
          y >= cRect.top - radius &&
          y <= cRect.bottom + radius;

        if (!isNear && isSettledRef.current) {
          frameId = requestAnimationFrame(loop);
          return;
        }
      }

      let allSettled = true;

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return;

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;

        const distance = calculateDistance(x, y, letterCenterX, letterCenterY);

        const baseColor = fromColor || "#FAF6EE";

        let targetFalloff = 0;
        if (distance < radius) {
          targetFalloff = calculateFalloff(distance);
        }

        const currentFalloff = currentFalloffsRef.current[index] || 0;
        const smoothedFalloff = currentFalloff + (targetFalloff - currentFalloff) * 0.45;
        currentFalloffsRef.current[index] = smoothedFalloff;

        if (smoothedFalloff < 0.001 && targetFalloff === 0) {
          if (letterRef.style.fontVariationSettings !== fromFontVariationSettings) {
            letterRef.style.fontVariationSettings = fromFontVariationSettings;
            letterRef.style.color = baseColor;
          }
          return;
        }

        allSettled = false;

        const falloffValue = smoothedFalloff;
        let fontWeightValue = "";
        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
            if (axis === 'wght') fontWeightValue = Math.round(interpolatedValue).toString();
            return `'${axis}' ${interpolatedValue}`;
          })
          .join(', ');

        interpolatedSettingsRef.current[index] = newSettings;
        letterRef.style.fontVariationSettings = newSettings;
        if (fontWeightValue) letterRef.style.fontWeight = fontWeightValue;

        const colorInterpolator = gsap.utils.interpolate(baseColor, targetColor);
        letterRef.style.color = colorInterpolator(falloffValue);
      });

      isSettledRef.current = allSettled;
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, fromFontVariationSettings, parsedSettings, radius, falloff, fromColor, targetColor, containerRef]);

  const words = label.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={(el) => {
        spanRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLSpanElement | null>).current = el;
      }}
      onClick={onClick}
      style={{
        display: 'inline',
        fontFamily: 'inherit',
        ...style
      }}
      className={className}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map(letter => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={el => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                style={{
                  display: 'inline-block',
                  fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex]
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;
