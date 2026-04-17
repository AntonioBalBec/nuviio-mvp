"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Lava lamp blob component
function LavaBlob({ 
  size, 
  initialX, 
  initialY, 
  color,
  duration 
}: { 
  size: number; 
  initialX: string; 
  initialY: string; 
  color: string;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: color,
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: [0, 100, -50, 80, 0],
        y: [0, -80, 50, -100, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated lava lamp background
function LavaLampBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />
      
      {/* Lava blobs - blue/teal color scheme */}
      <div className="absolute inset-0 opacity-60">
        <LavaBlob
          size={600}
          initialX="-10%"
          initialY="-20%"
          color="radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 70%)"
          duration={20}
        />
        <LavaBlob
          size={500}
          initialX="60%"
          initialY="60%"
          color="radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0) 70%)"
          duration={25}
        />
        <LavaBlob
          size={450}
          initialX="70%"
          initialY="-10%"
          color="radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(14,165,233,0) 70%)"
          duration={22}
        />
        <LavaBlob
          size={400}
          initialX="20%"
          initialY="70%"
          color="radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0) 70%)"
          duration={28}
        />
        <LavaBlob
          size={350}
          initialX="40%"
          initialY="20%"
          color="radial-gradient(circle, rgba(20,184,166,0.5) 0%, rgba(20,184,166,0) 70%)"
          duration={18}
        />
        <LavaBlob
          size={300}
          initialX="80%"
          initialY="40%"
          color="radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(56,189,248,0) 70%)"
          duration={24}
        />
      </div>
      
      {/* Subtle mesh overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}

// Floating IoT nodes
function FloatingNodes() {
  const nodes = [
    { x: "10%", y: "30%", delay: 0, size: 8 },
    { x: "90%", y: "25%", delay: 0.5, size: 6 },
    { x: "80%", y: "70%", delay: 1, size: 10 },
    { x: "15%", y: "75%", delay: 1.5, size: 7 },
    { x: "50%", y: "15%", delay: 0.8, size: 9 },
    { x: "30%", y: "50%", delay: 1.2, size: 5 },
    { x: "70%", y: "45%", delay: 0.3, size: 8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.delay + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div 
                className="bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"
                style={{ width: node.size, height: node.size }}
              />
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full"
                style={{ width: node.size, height: node.size }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 10% 30% Q 30% 20% 50% 15%"
          stroke="url(#blueGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M 50% 15% Q 70% 20% 90% 25%"
          stroke="url(#blueGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.path
          d="M 30% 50% Q 50% 55% 70% 45%"
          stroke="url(#blueGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Counter animation hook
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, hasStarted]);
  
  return { count, ref };
}

function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
        {count}{suffix}
      </p>
      <p className="text-sm text-neutral-500 mt-2">{label}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Animated Lava Lamp Background */}
      <LavaLampBackground />
      <FloatingNodes />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-neutral-200 shadow-sm"
            whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
          >
            <motion.span 
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-neutral-700">
              Soluciones IoT de Nueva Generacion
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-900 leading-[1.1] tracking-tight text-balance">
            Conecta, Automatiza y{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Transforma
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>{" "}
            tu Empresa
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
        >
          Desarrollamos soluciones IoT inteligentes que optimizan procesos, 
          reducen costos y llevan tu negocio al siguiente nivel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#nodo-cero"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-base font-semibold transition-all shadow-lg shadow-blue-500/25"
          >
            Comenzar con Nodo Cero
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#metodologia"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-sm text-neutral-800 rounded-full text-base font-medium border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm"
          >
            <Play className="w-5 h-5" />
            Ver como funciona
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-12 px-8 bg-white/70 backdrop-blur-md rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-200/50"
        >
          <StatCounter value={400} suffix="+" label="Clientes Activos" />
          <StatCounter value={50} suffix="+" label="Proyectos IoT" />
          <StatCounter value={99} suffix=".9%" label="Uptime" />
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">24/7</p>
            <p className="text-sm text-neutral-500 mt-2">Soporte Tecnico</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#nodo-cero"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Explorar</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
