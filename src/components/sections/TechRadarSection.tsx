"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Radar, Signal, Wifi, Satellite, Radio, Target } from "lucide-react";
import { technologies } from "../../constants/technologies";

interface TechItem {
  name: string;
  category: string;
  angle: number;
  distance: number;
  color: string;
  pulsePhase: number;
}

const categoryColors: Record<string, string> = {
  frontend: "#22d3ee",
  backend: "#34d399",
  tools: "#a78bfa",
  infrastructure: "#fb923c",
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Ferramentas",
  infrastructure: "Infraestrutura",
};

export default function TechRadarSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [techItems, setTechItems] = useState<TechItem[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();
  const sweepAngleRef = useRef(0);
  const timeRef = useRef(0);

  // Generate tech positions
  useEffect(() => {
    const items: TechItem[] = [];
    const categories = Object.entries(technologies);
    
    categories.forEach(([category, techs], categoryIndex) => {
      const categoryAngleStart = (categoryIndex / categories.length) * Math.PI * 2 - Math.PI / 2;
      const categoryAngleRange = (Math.PI * 2) / categories.length;
      
      techs.forEach((tech, techIndex) => {
        const angleOffset = ((techIndex + 0.5) / techs.length) * categoryAngleRange;
        const angle = categoryAngleStart + angleOffset;
        // Distribute across rings based on index
        const ringIndex = techIndex % 4;
        const distance = 0.25 + ringIndex * 0.18 + (Math.random() * 0.08 - 0.04);
        
        items.push({
          name: tech,
          category,
          angle,
          distance: Math.min(Math.max(distance, 0.2), 0.9),
          color: categoryColors[category] || "#22d3ee",
          pulsePhase: Math.random() * Math.PI * 2,
        });
      });
    });
    
    setTechItems(items);
  }, []);

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const size = Math.min(containerRef.current.offsetWidth, 550);
        setDimensions({ width: size, height: size });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Draw radar
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 30;

    const drawRadar = (timestamp: number) => {
      timeRef.current = timestamp;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Background glow
      const bgGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius * 1.2);
      bgGlow.addColorStop(0, "rgba(34, 211, 238, 0.03)");
      bgGlow.addColorStop(0.5, "rgba(34, 211, 238, 0.01)");
      bgGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Draw concentric circles with labels
      const rings = [
        { radius: 0.25, label: "CORE" },
        { radius: 0.45, label: "ACTIVE" },
        { radius: 0.65, label: "LEARNING" },
        { radius: 0.85, label: "EXPLORING" },
      ];

      rings.forEach((ring, i) => {
        const radius = maxRadius * ring.radius;
        
        // Ring circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 + i * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Dashed inner ring
        if (i > 0) {
          ctx.beginPath();
          ctx.setLineDash([4, 8]);
          ctx.arc(centerX, centerY, radius - 10, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34, 211, 238, 0.05)`;
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // Draw cross lines with tick marks
      const drawAxisLine = (angle: number) => {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        const endX = centerX + Math.cos(angle) * maxRadius;
        const endY = centerY + Math.sin(angle) * maxRadius;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "rgba(34, 211, 238, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Tick marks
        for (let d = 0.2; d <= 0.9; d += 0.2) {
          const tickX = centerX + Math.cos(angle) * maxRadius * d;
          const tickY = centerY + Math.sin(angle) * maxRadius * d;
          const perpAngle = angle + Math.PI / 2;
          const tickLength = 4;
          
          ctx.beginPath();
          ctx.moveTo(
            tickX - Math.cos(perpAngle) * tickLength,
            tickY - Math.sin(perpAngle) * tickLength
          );
          ctx.lineTo(
            tickX + Math.cos(perpAngle) * tickLength,
            tickY + Math.sin(perpAngle) * tickLength
          );
          ctx.strokeStyle = "rgba(34, 211, 238, 0.2)";
          ctx.stroke();
        }
      };

      // Draw 8 axis lines
      for (let i = 0; i < 8; i++) {
        drawAxisLine((i / 8) * Math.PI * 2 - Math.PI / 2);
      }

      // Draw sweep line with gradient trail
      sweepAngleRef.current += 0.012;
      const sweepAngle = sweepAngleRef.current;

      // Sweep trail gradient
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, sweepAngle - 0.8, sweepAngle);
      ctx.closePath();
      const sweepGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        maxRadius
      );
      sweepGradient.addColorStop(0, "rgba(34, 211, 238, 0.2)");
      sweepGradient.addColorStop(0.7, "rgba(34, 211, 238, 0.1)");
      sweepGradient.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // Bright sweep line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      const sweepEndX = centerX + Math.cos(sweepAngle) * maxRadius;
      const sweepEndY = centerY + Math.sin(sweepAngle) * maxRadius;
      ctx.lineTo(sweepEndX, sweepEndY);
      const lineGrad = ctx.createLinearGradient(centerX, centerY, sweepEndX, sweepEndY);
      lineGrad.addColorStop(0, "rgba(34, 211, 238, 0.9)");
      lineGrad.addColorStop(1, "rgba(34, 211, 238, 0.3)");
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw tech points
      techItems.forEach((tech) => {
        const x = centerX + Math.cos(tech.angle) * tech.distance * maxRadius;
        const y = centerY + Math.sin(tech.angle) * tech.distance * maxRadius;

        // Check if in sweep range for highlight effect
        let angleDiff = ((sweepAngle - tech.angle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;
        const inSweep = angleDiff < 0.6;
        const sweepIntensity = inSweep ? Math.max(0, 1 - angleDiff / 0.6) : 0;

        // Pulsing effect
        const pulse = Math.sin(timestamp * 0.002 + tech.pulsePhase) * 0.3 + 0.7;
        const baseSize = 6;
        const size = baseSize * (1 + sweepIntensity * 0.5);

        // Outer glow
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        const glowOpacity = (0.2 + sweepIntensity * 0.4) * pulse;
        glowGradient.addColorStop(0, tech.color + Math.floor(glowOpacity * 255).toString(16).padStart(2, '0'));
        glowGradient.addColorStop(0.5, tech.color + Math.floor(glowOpacity * 0.3 * 255).toString(16).padStart(2, '0'));
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Main point with ring
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = tech.color;
        ctx.fill();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Target ring when in sweep
        if (sweepIntensity > 0.3) {
          ctx.beginPath();
          ctx.arc(x, y, size * 2 * sweepIntensity, 0, Math.PI * 2);
          ctx.strokeStyle = tech.color + Math.floor(sweepIntensity * 200).toString(16).padStart(2, '0');
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Center satellite icon
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      const centerGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 12);
      centerGrad.addColorStop(0, "rgba(34, 211, 238, 0.9)");
      centerGrad.addColorStop(0.7, "rgba(34, 211, 238, 0.4)");
      centerGrad.addColorStop(1, "rgba(34, 211, 238, 0.1)");
      ctx.fillStyle = centerGrad;
      ctx.fill();

      // Inner center
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Rotating outer ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating marks
      for (let i = 0; i < 4; i++) {
        const markAngle = (i / 4) * Math.PI * 2 + timestamp * 0.001;
        const markX = centerX + Math.cos(markAngle) * 18;
        const markY = centerY + Math.sin(markAngle) * 18;
        ctx.beginPath();
        ctx.arc(markX, markY, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.6)";
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(drawRadar);
    };

    animationRef.current = requestAnimationFrame(drawRadar);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, techItems]);

  // Handle mouse interaction
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: e.clientX, y: e.clientY });
    
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 30;

    let closest: TechItem | null = null;
    let closestDist = 25;

    techItems.forEach((tech) => {
      const techX = centerX + Math.cos(tech.angle) * tech.distance * maxRadius;
      const techY = centerY + Math.sin(tech.angle) * tech.distance * maxRadius;
      const dist = Math.hypot(x - techX, y - techY);
      
      if (dist < closestDist) {
        closest = tech;
        closestDist = dist;
      }
    });

    setHoveredTech(closest);
  }, [dimensions, techItems]);

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hex-grid opacity-10" />
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 cyber-glass px-4 py-2 rounded-full">
              <Satellite className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                TECH.RADAR // SATELLITE.SCAN
              </span>
              <Radio className="w-4 h-4 text-primary animate-spin-slow" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Radar de Tecnologias
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full neon-glow-sm" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Escaneamento em tempo real do meu arsenal tecnologico
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Radar Canvas */}
            <div 
              ref={containerRef} 
              className="flex-1 w-full max-w-[550px] aspect-square relative"
            >
              {/* Outer frame decoration */}
              <div className="absolute -inset-4 border border-primary/10 rounded-full" />
              <div className="absolute -inset-2 border border-primary/20 rounded-full" />
              
              <div className="cyber-glass rounded-full p-4 fui-corners relative">
                {/* Corner accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                  <Target className="w-4 h-4 text-primary/60" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
                  <Signal className="w-4 h-4 text-primary/60" />
                </div>
                
                <canvas
                  ref={canvasRef}
                  width={dimensions.width}
                  height={dimensions.height}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="cursor-crosshair w-full h-full rounded-full"
                />
              </div>
              
              {/* Compass Labels */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-xs text-primary/80 flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground">000</span>
                <span>N</span>
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 font-mono text-xs text-primary/80 flex items-center gap-1">
                <span>E</span>
                <span className="text-[10px] text-muted-foreground">090</span>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-primary/80 flex flex-col items-center">
                <span>S</span>
                <span className="text-[10px] text-muted-foreground">180</span>
              </div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 font-mono text-xs text-primary/80 flex items-center gap-1">
                <span className="text-[10px] text-muted-foreground">270</span>
                <span>W</span>
              </div>

              {/* Hover Tooltip */}
              {hoveredTech && (
                <div 
                  className="fixed z-50 pointer-events-none"
                  style={{ 
                    left: mousePos.x + 15, 
                    top: mousePos.y - 10,
                  }}
                >
                  <div className="cyber-glass px-4 py-2 rounded-lg text-left animate-fade-in border border-primary/30">
                    <p className="font-mono text-sm font-bold" style={{ color: hoveredTech.color }}>
                      {hoveredTech.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {categoryLabels[hoveredTech.category]}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Info Panels */}
            <div className="lg:w-80 space-y-4">
              {/* Category Legend */}
              <div className="cyber-glass rounded-xl p-6 fui-panel">
                <div className="flex items-center gap-2 mb-4">
                  <Wifi className="w-4 h-4 text-primary" />
                  <h3 className="font-mono text-sm text-primary uppercase tracking-wider">
                    Sinais Detectados
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-3 group">
                      <div 
                        className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" 
                        style={{ 
                          backgroundColor: categoryColors[key],
                          boxShadow: `0 0 10px ${categoryColors[key]}40`
                        }}
                      />
                      <span className="text-sm text-foreground">{label}</span>
                      <span className="text-xs text-muted-foreground ml-auto font-mono bg-secondary/50 px-2 py-0.5 rounded">
                        {technologies[key as keyof typeof technologies]?.length || 0}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Panel */}
              <div className="cyber-glass rounded-xl p-6 fui-panel">
                <div className="flex items-center gap-2 mb-4">
                  <Radar className="w-4 h-4 text-primary animate-spin-slow" />
                  <h3 className="font-mono text-xs text-primary uppercase tracking-wider">
                    Metricas do Sistema
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-primary text-neon-sm font-mono">
                      {Object.values(technologies).flat().length}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">TOTAL.TECHS</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-emerald-400 font-mono">
                      {Object.keys(technologies).length}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">CATEGORIAS</p>
                  </div>
                </div>
                
                {/* Signal strength bars */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground font-mono w-16">SIGNAL</span>
                    <div className="flex-1 h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-primary rounded-full animate-pulse" />
                    </div>
                    <span className="text-[10px] text-primary font-mono">85%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground font-mono w-16">RANGE</span>
                    <div className="flex-1 h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">MAX</span>
                  </div>
                </div>
              </div>

              {/* Scan Status */}
              <div className="cyber-glass rounded-xl p-4 fui-panel">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono text-emerald-400">SCAN.ACTIVE</p>
                    <p className="text-[10px] text-muted-foreground font-mono">Monitoramento continuo</p>
                  </div>
                  <Signal className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
