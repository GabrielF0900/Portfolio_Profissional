"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Activity, 
  Cpu, 
  Database, 
  Wifi, 
  Clock, 
  Server,
  Gauge,
  Zap,
  Signal,
  Radio
} from "lucide-react";

interface SystemMetric {
  label: string;
  value: string | number;
  unit?: string;
  status: "nominal" | "warning" | "critical";
  icon: React.ReactNode;
  trend?: "up" | "down" | "stable";
}

function MetricCard({ metric, index }: { metric: SystemMetric; index: number }) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 200);
    }, 5000 + index * 1000);
    
    return () => clearInterval(interval);
  }, [index]);

  const statusColors = {
    nominal: "text-emerald-400",
    warning: "text-amber-400",
    critical: "text-red-400",
  };

  const statusBg = {
    nominal: "bg-emerald-500/20",
    warning: "bg-amber-500/20",
    critical: "bg-red-500/20",
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-2 cyber-glass rounded-lg transition-all duration-300 ${isAnimating ? 'scale-105 border-primary/40' : ''}`}>
      <div className={`p-1.5 rounded ${statusBg[metric.status]}`}>
        <span className={statusColors[metric.status]}>{metric.icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider truncate">
          {metric.label}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`text-sm font-mono font-bold ${statusColors[metric.status]}`}>
            {metric.value}
          </span>
          {metric.unit && (
            <span className="text-[10px] text-muted-foreground font-mono">{metric.unit}</span>
          )}
          {metric.trend && (
            <span className={`text-[10px] ${
              metric.trend === "up" ? "text-emerald-400" : 
              metric.trend === "down" ? "text-red-400" : 
              "text-muted-foreground"
            }`}>
              {metric.trend === "up" ? "+" : metric.trend === "down" ? "-" : "~"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ActivityGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataRef = useRef<number[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Initialize data
    if (dataRef.current.length === 0) {
      for (let i = 0; i < 60; i++) {
        dataRef.current.push(Math.random() * 40 + 30);
      }
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new data point
      dataRef.current.shift();
      const lastValue = dataRef.current[dataRef.current.length - 1];
      const newValue = Math.max(20, Math.min(80, lastValue + (Math.random() - 0.5) * 10));
      dataRef.current.push(newValue);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, "rgba(34, 211, 238, 0)");
      gradient.addColorStop(1, "rgba(34, 211, 238, 0.1)");
      
      // Draw filled area
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      dataRef.current.forEach((value, i) => {
        const x = (i / (dataRef.current.length - 1)) * canvas.width;
        const y = canvas.height - (value / 100) * canvas.height;
        if (i === 0) {
          ctx.lineTo(x, y);
        } else {
          const prevX = ((i - 1) / (dataRef.current.length - 1)) * canvas.width;
          const prevY = canvas.height - (dataRef.current[i - 1] / 100) * canvas.height;
          const cpX = (prevX + x) / 2;
          ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
          ctx.quadraticCurveTo(x, y, x, y);
        }
      });
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw line
      ctx.beginPath();
      dataRef.current.forEach((value, i) => {
        const x = (i / (dataRef.current.length - 1)) * canvas.width;
        const y = canvas.height - (value / 100) * canvas.height;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.strokeStyle = "rgba(34, 211, 238, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Draw end point
      const lastX = canvas.width;
      const lastY = canvas.height - (dataRef.current[dataRef.current.length - 1] / 100) * canvas.height;
      ctx.beginPath();
      ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34, 211, 238, 0.8)";
      ctx.fill();
    };
    
    const interval = setInterval(draw, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      width={120} 
      height={40} 
      className="rounded"
    />
  );
}

export default function SystemStatusBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [uptime, setUptime] = useState({ days: 0, hours: 0, minutes: 0 });
  const [metrics, setMetrics] = useState<SystemMetric[]>([]);
  
  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Calculate uptime (simulated from a fixed start date)
  useEffect(() => {
    const startDate = new Date("2024-01-15T00:00:00");
    const updateUptime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setUptime({ days, hours, minutes });
    };
    
    updateUptime();
    const interval = setInterval(updateUptime, 60000);
    return () => clearInterval(interval);
  }, []);
  
  // Generate and update metrics
  useEffect(() => {
    const generateMetrics = (): SystemMetric[] => [
      {
        label: "SYS.UPTIME",
        value: `${uptime.days}d ${uptime.hours}h`,
        status: "nominal",
        icon: <Activity className="w-3 h-3" />,
        trend: "up",
      },
      {
        label: "CPU.LOAD",
        value: (Math.random() * 20 + 15).toFixed(1),
        unit: "%",
        status: "nominal",
        icon: <Cpu className="w-3 h-3" />,
        trend: "stable",
      },
      {
        label: "MEM.USAGE",
        value: (Math.random() * 15 + 45).toFixed(1),
        unit: "%",
        status: "nominal",
        icon: <Database className="w-3 h-3" />,
        trend: "stable",
      },
      {
        label: "NET.LATENCY",
        value: Math.floor(Math.random() * 10 + 8),
        unit: "ms",
        status: "nominal",
        icon: <Wifi className="w-3 h-3" />,
        trend: "down",
      },
      {
        label: "API.STATUS",
        value: "200",
        status: "nominal",
        icon: <Server className="w-3 h-3" />,
      },
      {
        label: "THROUGHPUT",
        value: (Math.random() * 50 + 150).toFixed(0),
        unit: "req/s",
        status: "nominal",
        icon: <Gauge className="w-3 h-3" />,
        trend: "up",
      },
    ];
    
    setMetrics(generateMetrics());
    
    const interval = setInterval(() => {
      setMetrics(generateMetrics());
    }, 3000);
    
    return () => clearInterval(interval);
  }, [uptime]);

  return (
    <div className="fui-panel rounded-xl p-4 fui-corners">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-primary animate-pulse" />
          <h3 className="font-mono text-xs text-primary uppercase tracking-wider">
            SYSTEM.STATUS // MISSION.CONTROL
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-muted-foreground">
            {currentTime.toLocaleTimeString("pt-BR", { 
              hour: "2-digit", 
              minute: "2-digit", 
              second: "2-digit" 
            })}
          </span>
          <span className="text-primary/50">UTC-3</span>
        </div>
      </div>
      
      {/* Main Status */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-emerald-400 font-mono text-sm font-bold uppercase">
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <Signal className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-muted-foreground">SIGNAL: STRONG</span>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </div>
      
      {/* Activity Graph Section */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/30">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              REAL-TIME ACTIVITY
            </span>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-mono text-primary">LIVE</span>
            </div>
          </div>
          <ActivityGraph />
        </div>
        
        {/* Quick Stats */}
        <div className="hidden md:flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-muted-foreground">COMMITS:</span>
            <span className="text-primary">1,247</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-muted-foreground">DEPLOYS:</span>
            <span className="text-emerald-400">328</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-muted-foreground">UPTIME:</span>
            <span className="text-cyan-400">99.97%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
