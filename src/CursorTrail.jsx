import { useEffect, useRef } from "react";

export default function CursorTrail({ enabled }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context || !enabled) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    let particles = [];
    let frame = 0;
    let lastPoint = null;
    const allowed = () => !motion.matches && mouse.matches && !document.hidden;

    function clear() {
      cancelAnimationFrame(frame);
      frame = 0;
      particles = [];
      lastPoint = null;
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function resize() {
      clear();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw(time) {
      frame = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((particle) => time - particle.born < 600);
      for (const particle of particles) {
        const age = (time - particle.born) / 600;
        context.fillStyle = `rgba(220, 220, 230, ${0.55 * (1 - age) ** 2})`;
        const x = particle.x + particle.dx * age;
        const y = particle.y + particle.dy * age;
        context.fillRect(
          Math.round(x / 3) * 3,
          Math.round(y / 3) * 3,
          particle.size,
          particle.size,
        );
      }
      if (particles.length) frame = requestAnimationFrame(draw);
    }

    function add(x, y, burst = false) {
      const born = performance.now();
      const count = burst ? 8 : 2;
      for (let i = 0; i < count; i++) {
        const angle = burst
          ? (i / count) * Math.PI * 2
          : Math.random() * Math.PI * 2;
        const distance = burst ? 30 : 12;
        particles.push({
          x: x + (burst ? 0 : (Math.random() - 0.5) * 12),
          y: y + (burst ? 0 : (Math.random() - 0.5) * 12),
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          size: burst ? 4 : 3 + Math.floor(Math.random() * 2) * 2,
          born,
        });
      }
      particles = particles.slice(-48);
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function move(event) {
      if (event.pointerType !== "mouse" || !allowed()) return;
      if (
        lastPoint &&
        Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y) < 7
      )
        return;
      lastPoint = { x: event.clientX, y: event.clientY };
      add(event.clientX, event.clientY);
    }

    function press(event) {
      if (event.pointerType === "mouse" && event.button === 0 && allowed())
        add(event.clientX, event.clientY, true);
    }

    resize();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("blur", clear);
    document.documentElement.addEventListener("pointerleave", clear);
    document.addEventListener("visibilitychange", clear);
    motion.addEventListener("change", clear);
    mouse.addEventListener("change", clear);

    return () => {
      clear();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", clear);
      document.documentElement.removeEventListener("pointerleave", clear);
      document.removeEventListener("visibilitychange", clear);
      motion.removeEventListener("change", clear);
      mouse.removeEventListener("change", clear);
    };
  }, [enabled]);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
}
