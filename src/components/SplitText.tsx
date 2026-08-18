import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  isReady?: boolean;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  tag = 'h1',
  isReady = true,
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const animatedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  // Split lines, words, and characters into structured elements
  const splitElements = useMemo(() => {
    if (!text) return null;

    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      const words = line.split(' ');
      return (
        <span key={lineIdx} className="split-line block overflow-hidden">
          {words.map((word, wordIdx) => {
            const isLastWord = wordIdx === words.length - 1;
            const chars = Array.from(word);

            return (
              <span key={wordIdx} className="split-word inline-block whitespace-nowrap">
                {splitType.includes('chars') ? (
                  chars.map((char, charIdx) => (
                    <span
                      key={charIdx}
                      className="split-char inline-block will-change-[transform,opacity]"
                    >
                      {char}
                    </span>
                  ))
                ) : (
                  <span className="split-word-inner inline-block will-change-[transform,opacity]">
                    {word}
                  </span>
                )}
                {!isLastWord && <span className="inline-block">&nbsp;</span>}
              </span>
            );
          })}
        </span>
      );
    });
  }, [text, splitType]);

  useGSAP(
    () => {
      if (!containerRef.current || !text || !fontsLoaded || !isReady) return;
      if (animatedRef.current) return;

      const el = containerRef.current;
      const targets =
        splitType.includes('chars')
          ? el.querySelectorAll('.split-char')
          : el.querySelectorAll('.split-word-inner, .split-word');

      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: `top ${(1 - threshold) * 100}%`,
            once: true,
            fastScrollEnd: true
          },
          onComplete: () => {
            animatedRef.current = true;
            onCompleteRef.current?.();
          }
        }
      );
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        fontsLoaded,
        isReady
      ],
      scope: containerRef
    }
  );

  const Tag = tag as any;

  return (
    <Tag
      ref={containerRef}
      style={{ textAlign }}
      className={`split-parent ${className}`}
    >
      {splitElements}
    </Tag>
  );
};

export default SplitText;
