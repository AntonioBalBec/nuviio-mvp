"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

// Animated dot grid background
function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="fill-foreground/10" />
          </pattern>
          <radialGradient id="fade-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#fade-gradient)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" mask="url(#fade-mask)" />
      </svg>
    </div>
  );
}

// Animated floating orbs
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-l from-accent/15 to-accent/5 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "0%", right: "-5%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-t from-primary/10 to-transparent blur-2xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "20%" }}
      />
    </div>
  );
}

// Animated lines/connections
function TechLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="40%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="70%"
          y1="30%"
          x2="90%"
          y2="60%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.line
          x1="20%"
          y1="70%"
          x2="40%"
          y2="85%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.circle
          cx="10%"
          cy="20%"
          r="4"
          className="fill-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.circle
          cx="30%"
          cy="40%"
          r="4"
          className="fill-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <motion.circle
          cx="70%"
          cy="30%"
          r="3"
          className="fill-accent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="90%"
          cy="60%"
          r="3"
          className="fill-accent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
      </svg>
    </div>
  );
}

// Counter animation hook
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
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
  }, [target, duration]);
  
  return count;
}

function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const count = useCounter(value);
  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-bold text-foreground">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background Layers */}
      <DotGrid />
      <FloatingOrbs />
      <TechLines />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 backdrop-blur-sm rounded-full border border-border/50"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-muted-foreground">
              Soluciones IoT de Nueva Generacion
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Conecta, Automatiza y{" "}
            <span className="relative">
              <span className="text-primary">Transforma</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
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
          className="text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Desarrollamos soluciones IoT inteligentes que optimizan procesos, 
          reducen costos y llevan tu negocio al siguiente nivel.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#nodo-cero"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(20, 184, 166, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium transition-all"
          >
            Probar Nodo Cero
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#metodologia"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-foreground rounded-full text-base font-medium hover:bg-muted/80 transition-colors"
          >
            <Play className="w-4 h-4" />
            Ver Metodologia
          </motion.a>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Zap,
              title: "Automatizacion",
              description: "Procesos automatizados que optimizan recursos y eliminan tareas repetitivas.",
            },
            {
              icon: Shield,
              title: "Seguridad",
              description: "Proteccion de datos y comunicaciones con los mas altos estandares.",
            },
            {
              icon: BarChart3,
              title: "Analisis",
              description: "Datos en tiempo real para decisiones estrategicas informadas.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
              <motion.div 
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
              >
                <ArrowRight className="w-4 h-4 text-foreground" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          <StatCounter value={400} suffix="+" label="Clientes Activos" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <StatCounter value={50} suffix="+" label="Proyectos IoT" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <StatCounter value={99} suffix=".9%" label="Uptime Garantizado" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold text-foreground">24/7</p>
            <p className="text-sm text-muted-foreground mt-1">Soporte Tecnico</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
