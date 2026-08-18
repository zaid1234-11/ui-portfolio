import { useRef, useEffect } from 'react';

interface ShapeGridProps {
  direction?: string;
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  shape?: string;
  hoverTrailAmount?: number;
}

const ShapeGrid = ({
  direction = 'diagonal',
  speed = 0.3,
  borderColor = 'rgba(255, 255, 255, 0.08)',
  squareSize = 40,
  hoverFillColor = '#B8925A',
  shape = 'square',
  hoverTrailAmount = 6
}: ShapeGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const activeCellsRef = useRef<Map<string, { opacity: number; lastActive: number }>>(new Map());
  const mousePosRef = useRef<{ x: number; y: number; isInside: boolean }>({ x: -1000, y: -1000, isInside: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const trailDuration = Math.max(hoverTrailAmount * 120, 700); // milliseconds of visible decay

      const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
      const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

      const cols = Math.ceil(canvas.width / squareSize) + 3;
      const rows = Math.ceil(canvas.height / squareSize) + 3;

      // Update and prune active cell trail opacities
      for (const [key, data] of activeCellsRef.current.entries()) {
        const elapsed = now - data.lastActive;
        if (elapsed > trailDuration) {
          activeCellsRef.current.delete(key);
        } else {
          data.opacity = Math.max(0, 1 - elapsed / trailDuration);
        }
      }

      for (let col = -2; col < cols; col++) {
        for (let row = -2; row < rows; row++) {
          const sx = col * squareSize + offsetX;
          const sy = row * squareSize + offsetY;
          const cellKey = `${col},${row}`;

          const activeData = activeCellsRef.current.get(cellKey);

          // Draw filled hover/trail cell if active
          if (activeData && activeData.opacity > 0.01) {
            ctx.save();
            ctx.globalAlpha = activeData.opacity * 0.75;
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(sx, sy, squareSize, squareSize);

            // Subtle bright border highlight on active cell
            ctx.strokeStyle = hoverFillColor;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(sx + 0.5, sy + 0.5, squareSize - 1, squareSize - 1);
            ctx.restore();
          }

          // Draw base grid line
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(sx, sy, squareSize, squareSize);
        }
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.005);
      const wrap = squareSize;

      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrap) % wrap;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrap) % wrap;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrap) % wrap;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrap) % wrap;
          break;
        case 'diagonal':
        default:
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrap) % wrap;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrap) % wrap;
          break;
      }

      // If mouse is inside canvas, light up the current grid cell
      if (mousePosRef.current.isInside) {
        const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize;
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize;

        const col = Math.floor((mousePosRef.current.x - offsetX) / squareSize);
        const row = Math.floor((mousePosRef.current.y - offsetY) / squareSize);
        const key = `${col},${row}`;

        activeCellsRef.current.set(key, { opacity: 1, lastActive: Date.now() });
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      mousePosRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        isInside
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let isVisible = false;
    let isPageVisible = !document.hidden;

    const tryStart = () => {
      if (isVisible && isPageVisible && !requestRef.current) {
        requestRef.current = requestAnimationFrame(updateAnimation);
      }
    };

    const tryStop = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        isVisible ? tryStart() : tryStop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      isPageVisible = !document.hidden;
      isPageVisible ? tryStart() : tryStop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    tryStart();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      tryStop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount]);

  return <canvas ref={canvasRef} className="w-full h-full border-none block pointer-events-none"></canvas>;
};

export default ShapeGrid;
