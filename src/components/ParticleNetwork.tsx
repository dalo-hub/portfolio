import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme.ts";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offset = 0;
    const speed = 0.3;
    const cellSize = 60;

    const resize = () => {
      cvs.width = cvs.offsetWidth * window.devicePixelRatio;
      cvs.height = cvs.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const w = cvs.offsetWidth;
      const h = cvs.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === "dark";
      const lineColor = isDark
        ? "rgba(14, 165, 233, 0.08)"
        : "rgba(2, 132, 199, 0.07)";
      const dotColor = isDark
        ? "rgba(14, 165, 233, 0.2)"
        : "rgba(2, 132, 199, 0.15)";

      offset = (offset + speed) % cellSize;

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;

      const startX = -offset;
      for (let x = startX; x <= w + cellSize; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y <= h; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      ctx.fillStyle = dotColor;
      for (let x = startX; x <= w + cellSize; x += cellSize) {
        for (let y = 0; y <= h; y += cellSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}
