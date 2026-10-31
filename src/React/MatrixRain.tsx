import React, { useEffect, useRef, useState } from "react";

interface MatrixRainProps {
  primaryColor?: string;
  headColor?: string;
  accentColor?: string;
}

export default function MatrixRain({
  primaryColor = "#4EEDB8",
  headColor = "#ffffff",
  accentColor = "#5FFEC4",
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [activeSpeed, setActiveSpeed] = useState<"normal" | "fast">("normal");

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Characters: Katakana, Numbers, Code Operators, Full-Stack tokens
    const characters =
      "ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789{}<>=/*+-$#@;:%&|PythonAiogramReactFastAPI";
    const charArray = characters.split("");

    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let dropLengths: number[] = [];

    // Track mouse position for interactive ripples
    let mouseX = -1000;
    let mouseY = -1000;

    const initGrid = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      columns = Math.floor(width / fontSize);
      drops = [];
      speeds = [];
      dropLengths = [];

      for (let i = 0; i < columns; i++) {
        // Stagger initial vertical drop positions randomly above and across canvas
        drops[i] = Math.floor(Math.random() * -50);
        // Varying speed for 3D depth perception
        speeds[i] = 0.5 + Math.random() * 0.9;
        // Trail length
        dropLengths[i] = 10 + Math.floor(Math.random() * 20);
      }
    };

    initGrid();

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    resizeObserver.observe(container);

    // Mouse interactive handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let lastTime = performance.now();
    const frameInterval = activeSpeed === "fast" ? 25 : 38; // ~30-40ms loop for authentic matrix pace

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (time - lastTime < frameInterval) return;
      lastTime = time;

      // Dark translucent wash to create smooth persistence trails
      ctx.fillStyle = "rgba(7, 7, 12, 0.14)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const currentDropY = drops[i];
        const y = currentDropY * fontSize;

        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Check if cursor is nearby
        const distToMouse = Math.hypot(x - mouseX, y - mouseY);
        const isNearMouse = distToMouse < 60;

        // Draw Head of Raindrop (Brightest Glowing Leader)
        if (isNearMouse) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#5FFEC4";
          ctx.shadowBlur = 15;
          ctx.fillText(char, x, y);
        } else {
          ctx.fillStyle = headColor;
          ctx.shadowColor = accentColor;
          ctx.shadowBlur = 8;
          ctx.fillText(char, x, y);
        }
        ctx.shadowBlur = 0; // Reset shadow blur for trails

        // Draw Fading Body and Trail
        const trailLength = dropLengths[i];
        for (let j = 1; j <= trailLength; j++) {
          const trailY = (currentDropY - j) * fontSize;
          if (trailY < 0 || trailY > height) continue;

          const trailChar = charArray[(Math.floor(Math.random() * charArray.length) + j) % charArray.length];

          // Compute opacity fade
          const alpha = Math.max(0, 1 - j / trailLength);

          if (j < 3) {
            ctx.fillStyle = `rgba(95, 254, 196, ${alpha * 0.95})`; // Neon mint near head
          } else if (j < 8) {
            ctx.fillStyle = `rgba(78, 237, 184, ${alpha * 0.85})`; // Vibrant mint mid
          } else {
            ctx.fillStyle = `rgba(5, 150, 105, ${alpha * 0.55})`; // Deep emerald tail
          }

          ctx.fillText(trailChar, x, trailY);
        }

        // Advance drop position
        drops[i] += speeds[i] * (isNearMouse ? 2.5 : 1);

        // Reset drop to top with randomized delay once it leaves the screen
        if (drops[i] * fontSize > height && Math.random() > 0.96) {
          drops[i] = Math.floor(Math.random() * -15);
          speeds[i] = 0.5 + Math.random() * 0.9;
          dropLengths[i] = 10 + Math.floor(Math.random() * 20);
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [headColor, primaryColor, accentColor, activeSpeed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] sm:min-h-[360px] overflow-hidden bg-[#04070a] select-none cursor-crosshair rounded-2xl"
    >
      {/* Matrix Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* High-tech HUD Vignette Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,7,10,0.7)_85%,rgba(4,7,10,0.95)_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#04070a] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#04070a] to-transparent"></div>

      {/* Subtle Cyber Grid Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(78,237,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(78,237,184,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Top Overlay Telemetry Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto z-10 font-mono text-[11px]">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#4EEDB8]/30 text-[#4EEDB8] shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#4EEDB8] animate-pulse"></span>
          <span className="font-semibold tracking-wide">MATRIX RAIN 2.0</span>
        </div>

        <button
          onClick={() => setActiveSpeed((prev) => (prev === "normal" ? "fast" : "normal"))}
          title="Tezlikni o'zgartirish"
          className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#4EEDB8]/30 text-[#4EEDB8] hover:text-white hover:border-[#5FFEC4] text-[10px] font-bold transition-all cursor-pointer"
        >
          {activeSpeed === "fast" ? "⚡ FAST" : "● NORMAL"}
        </button>
      </div>

      {/* Central Full-Stack Code HUD Box */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-[280px] sm:max-w-xs p-3.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-[#4EEDB8]/35 shadow-[0_0_30px_rgba(78,237,184,0.25)] space-y-2 text-center group">
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#5FFEC4] font-bold">
            <span className="text-[#4EEDB8]">&gt;</span>
            <span>SYSTEM_KERNEL: READY</span>
          </div>
          <p className="font-mono text-[11px] text-slate-300 leading-tight">
            Python &middot; Aiogram 3 &middot; React &middot; FastAPI
          </p>
          <div className="pt-1 flex items-center justify-center gap-1.5 font-mono text-[10px] text-[#4EEDB8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4EEDB8] animate-ping"></span>
            <span>Latency: 0.1ms · 60 FPS</span>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stack Badges */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto z-10 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#4EEDB8]/30 text-[#4EEDB8] shadow-md">
          <span>⚡ Python & Aiogram 3</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#5FFEC4]/30 text-[#5FFEC4] shadow-md">
          <span>💻 Full-Stack Web</span>
        </div>
      </div>
    </div>
  );
}
