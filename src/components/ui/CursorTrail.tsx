"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Point {
  x: number;
  y: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const points = useRef<Point[]>([]);
  const trailLength = 15;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (points.current.length === 0) {
        for (let i = 0; i < trailLength; i++) {
          points.current.push({ x: e.clientX, y: e.clientY });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    document.body.classList.add("custom-cursor-active");

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.current.length > 0) {
        const isDark = resolvedTheme === "dark";

        // Update positions
        let head = points.current[0];
        head.x += (mouse.current.x - head.x) * 0.3;
        head.y += (mouse.current.y - head.y) * 0.3;

        for (let i = 1; i < points.current.length; i++) {
          const prev = points.current[i - 1];
          const curr = points.current[i];
          curr.x += (prev.x - curr.x) * 0.35;
          curr.y += (prev.y - curr.y) * 0.35;
        }

        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        // DRAW PASS 1: Glow
        for (let i = 0; i < points.current.length - 1; i++) {
          const p1 = points.current[i];
          const p2 = points.current[i + 1];
          const opacity = (1 - i / points.current.length) * 0.25;
          const hue = (Date.now() / 20 + i * 10) % 360;

          const saturation = isDark ? 80 : 100;
          const lightness = isDark ? 60 : 40; 

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.lineWidth = (points.current.length - i) * 2.0; // Reduced width
          ctx.stroke();
        }

        // DRAW PASS 2: Core
        for (let i = 0; i < points.current.length - 1; i++) {
          const p1 = points.current[i];
          const p2 = points.current[i + 1];
          const opacity = (1 - i / points.current.length) * 0.7;
          const hue = (Date.now() / 20 + i * 10) % 360;

          const saturation = isDark ? 80 : 100;
          const lightness = isDark ? 75 : 35; 

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.lineWidth = (points.current.length - i) * 0.7; // Reduced width
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("custom-cursor-active");
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, resolvedTheme]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;
  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ 
        // Difference mode is essential for visibility on light sections within dark mode
        // and makes colors darker on light backgrounds naturally.
        mixBlendMode: "difference",
        filter: "blur(4px) contrast(1.1) brightness(1.1)"
      }}
    />
  );
};

export default CursorTrail;
