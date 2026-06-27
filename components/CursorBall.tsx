"use client";

import { useEffect, useRef } from "react";
import TennisBall from "./TennisBall";

/**
 * A real tennis ball that trails the cursor on desktop (pointer: fine),
 * rolling slightly as it moves. Hidden on touch and reduced-motion.
 */
export default function CursorBall() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    const el = ref.current;
    if (!el) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let x = mx;
    let y = my;
    let angle = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      el.style.opacity = "1";
    };

    const loop = () => {
      const dx = mx - x;
      const dy = my - y;
      x += dx * 0.16;
      y += dy * 0.16;
      // roll proportional to horizontal travel
      angle += dx * 0.6;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}deg)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-ball" aria-hidden="true">
      <TennisBall className="h-6 w-6 drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]" />
    </div>
  );
}
