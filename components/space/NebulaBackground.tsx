"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

// Simplex noise implementation for procedural nebula
class SimplexNoise {
  private perm: number[] = [];
  
  constructor(seed: number = Math.random() * 10000) {
    const p: number[] = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    
    // Shuffle using seed
    let n = seed;
    for (let i = 255; i > 0; i--) {
      n = ((n * 16807) % 2147483647);
      const j = n % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
    }
  }
  
  noise2D(x: number, y: number): number {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    
    const s = (x + y) * F2;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = x - X0;
    const y0 = y - Y0;
    
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    
    const ii = i & 255;
    const jj = j & 255;
    
    const grad = (hash: number, x: number, y: number): number => {
      const h = hash & 7;
      const u = h < 4 ? x : y;
      const v = h < 4 ? y : x;
      return ((h & 1) ? -u : u) + ((h & 2) ? -2 * v : 2 * v);
    };
    
    let n0 = 0, n1 = 0, n2 = 0;
    
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * grad(this.perm[ii + this.perm[jj]], x0, y0);
    }
    
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * grad(this.perm[ii + i1 + this.perm[jj + j1]], x1, y1);
    }
    
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * grad(this.perm[ii + 1 + this.perm[jj + 1]], x2, y2);
    }
    
    return 70 * (n0 + n1 + n2);
  }
  
  fractalNoise(x: number, y: number, octaves: number = 4): number {
    let value = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;
    
    for (let i = 0; i < octaves; i++) {
      value += amplitude * this.noise2D(x * frequency, y * frequency);
      maxValue += amplitude;
      amplitude *= 0.5;
      frequency *= 2;
    }
    
    return value / maxValue;
  }
}

export default function NebulaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const noiseRef = useRef<SimplexNoise | null>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    noiseRef.current = new SimplexNoise(42);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initParticles();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 4000);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.2,
          opacity: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.004 + 0.001,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 50;
      const colors = [
        "34, 211, 238", // Cyan
        "14, 165, 233", // Blue
        "99, 102, 241", // Indigo
        "139, 92, 246", // Purple
      ];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 60 + 30,
          opacity: Math.random() * 0.015 + 0.005,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 1000,
          maxLife: 1000 + Math.random() * 500,
        });
      }
    };

    const drawNebulaLayer = (time: number) => {
      if (!noiseRef.current) return;
      
      const noise = noiseRef.current;
      const scale = 0.0008;
      const timeScale = time * 0.00003;
      
      // Create gradient overlay based on noise
      const imageData = ctx.createImageData(canvas.width / 4, canvas.height / 4);
      const data = imageData.data;
      
      for (let y = 0; y < imageData.height; y++) {
        for (let x = 0; x < imageData.width; x++) {
          const nx = x * 4 * scale + timeScale;
          const ny = y * 4 * scale + timeScale * 0.7;
          
          // Multiple noise layers for more organic look
          const n1 = noise.fractalNoise(nx, ny, 4);
          const n2 = noise.fractalNoise(nx * 2 + 100, ny * 2 + 100, 3);
          const n3 = noise.fractalNoise(nx * 0.5 + 200, ny * 0.5 + timeScale * 0.5, 2);
          
          const combined = (n1 + n2 * 0.5 + n3 * 0.3) / 1.8;
          const value = (combined + 1) / 2;
          
          const idx = (y * imageData.width + x) * 4;
          
          // Color based on noise value - cyan to purple gradient
          if (value > 0.5) {
            const t = (value - 0.5) * 2;
            data[idx] = Math.floor(34 + (139 - 34) * t * 0.3); // R
            data[idx + 1] = Math.floor(211 - (211 - 92) * t * 0.3); // G
            data[idx + 2] = Math.floor(238 + (246 - 238) * t * 0.3); // B
            data[idx + 3] = Math.floor(value * 25); // A
          } else {
            const t = value * 2;
            data[idx] = Math.floor(14 * t); // R
            data[idx + 1] = Math.floor(165 * t * 0.3); // G
            data[idx + 2] = Math.floor(233 * t * 0.5); // B
            data[idx + 3] = Math.floor(t * 15); // A
          }
        }
      }
      
      // Create temporary canvas for scaling
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = imageData.width;
      tempCanvas.height = imageData.height;
      const tempCtx = tempCanvas.getContext("2d");
      if (tempCtx) {
        tempCtx.putImageData(imageData, 0, 0);
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      }
    };

    const drawParticle = (particle: Particle) => {
      // Update position with slow drift
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Reset if out of bounds or life exceeded
      if (
        particle.x < -particle.size ||
        particle.x > canvas.width + particle.size ||
        particle.y < -particle.size ||
        particle.y > canvas.height + particle.size ||
        particle.life > particle.maxLife
      ) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.life = 0;
      }

      // Draw glowing particle
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size
      );
      
      const fadeIn = Math.min(particle.life / 100, 1);
      const fadeOut = Math.max(0, 1 - (particle.life - particle.maxLife + 100) / 100);
      const fade = Math.min(fadeIn, fadeOut);
      
      gradient.addColorStop(0, `rgba(${particle.color}, ${particle.opacity * fade})`);
      gradient.addColorStop(0.5, `rgba(${particle.color}, ${particle.opacity * fade * 0.3})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(
        particle.x - particle.size,
        particle.y - particle.size,
        particle.size * 2,
        particle.size * 2
      );
    };

    const drawStar = (star: Star, time: number) => {
      const twinkle =
        Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.4 + 0.6;
      const currentOpacity = star.opacity * twinkle;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
      ctx.fill();

      // Cyan glow for larger stars
      if (star.size > 1.2) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 4
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${currentOpacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(34, 211, 238, ${currentOpacity * 0.15})`);
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const animate = (timestamp: number) => {
      timeRef.current = timestamp;
      
      // Deep space gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "#030712"); // Near black
      bgGradient.addColorStop(0.3, "#050a14"); // Deep navy
      bgGradient.addColorStop(0.6, "#071020"); // Dark blue
      bgGradient.addColorStop(1, "#0a0f1a"); // Space navy
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw procedural nebula
      drawNebulaLayer(timestamp);

      // Draw floating particles
      particlesRef.current.forEach((particle) => {
        drawParticle(particle);
      });

      // Draw stars
      starsRef.current.forEach((star) => {
        drawStar(star, timestamp);
      });

      // Subtle vignette
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      vignetteGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignetteGradient.addColorStop(0.7, "rgba(0, 0, 0, 0)");
      vignetteGradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
