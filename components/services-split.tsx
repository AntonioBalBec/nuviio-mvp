"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Factory, Leaf, Cpu, Wifi, BarChart3, Thermometer, Droplets, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function ServicesSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Slider position: 0 = center, -1 = full left (shows Terra), 1 = full right (shows Core)
  const sliderX = useMotionValue(0);
  
  // Transform slider position to visual positions
  const coreOpacity = useTransform(sliderX, [-1, 0, 1], [0, 0.5, 1]);
  const terraOpacity = useTransform(sliderX, [-1, 0, 1], [1, 0.5, 0]);
  const coreX = useTransform(sliderX, [-1, 0, 1], [100, 50, 0]);
  const terraX = useTransform(sliderX, [-1, 0, 1], [0, -50, -100]);
  const dividerPosition = useTransform(sliderX, [-1, 0, 1], [0, 50, 100]);

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    const containerWidth = containerRef.current?.offsetWidth || 1000;
    const normalizedX = (info.offset.x / containerWidth) * 2;
    const clampedX = Math.max(-1, Math.min(1, normalizedX));
    sliderX.set(clampedX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = sliderX.get();
    // Snap to nearest position
    if (currentX > 0.3) {
      animate(sliderX, 1, { type: "spring", stiffness: 300, damping: 30 });
    } else if (currentX < -0.3) {
      animate(sliderX, -1, { type: "spring", stiffness: 300, damping: 30 });
    } else {
      animate(sliderX, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const goToCore = () => {
    animate(sliderX, 1, { type: "spring", stiffness: 300, damping: 30 });
  };

  const goToTerra = () => {
    animate(sliderX, -1, { type: "spring", stiffness: 300, damping: 30 });
  };

  const goToCenter = () => {
    animate(sliderX, 0, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Instructions banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-neutral-200"
      >
        <ChevronLeft className="w-4 h-4 text-emerald-500" />
        <span className="text-sm text-neutral-600 font-medium">Desliza para explorar</span>
        <ChevronRight className="w-4 h-4 text-blue-500" />
      </motion.div>

      {/* Nuviio Core - Industrial (Right/Blue side) */}
      <motion.div
        style={{ 
          x: useTransform(coreX, (v) => `${v}%`),
          opacity: coreOpacity 
        }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-core" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-core)" />
            </svg>
          </div>
          
          {/* Animated glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-3xl">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30">
              <Factory className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">Sector Industrial</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nuviio
              <span className="block text-blue-400">Core</span>
            </h2>
            
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed max-w-lg">
              Soluciones IoT industriales para optimizar procesos, 
              monitorear equipos en tiempo real y predecir mantenimiento 
              antes de que ocurran fallas.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
              {[
                { icon: Cpu, label: "Control de Procesos" },
                { icon: BarChart3, label: "Analítica Industrial" },
                { icon: Wifi, label: "Conectividad 24/7" },
                { icon: Thermometer, label: "Monitoreo Ambiental" },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 text-neutral-400">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
            
            <Link href="#core">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors"
              >
                Explorar Core
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Nuviio Terra - Sector Primario (Left/Green side) */}
      <motion.div
        style={{ 
          x: useTransform(terraX, (v) => `${v}%`),
          opacity: terraOpacity 
        }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative w-full h-full bg-gradient-to-bl from-emerald-900 via-green-800 to-emerald-900">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots-terra" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-terra)" />
            </svg>
          </div>
          
          {/* Animated glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
          />
          
          {/* Content - aligned right */}
          <div className="relative h-full flex flex-col justify-center items-end px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl text-right">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
                <Leaf className="w-8 h-8 text-emerald-400" />
              </div>
              
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 ml-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-300 font-medium">Sector Primario</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nuviio
                <span className="block text-emerald-400">Terra</span>
              </h2>
              
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Tecnología IoT para agricultura y ganadería inteligente. 
                Optimiza recursos, monitorea cultivos y mejora la 
                productividad de forma sostenible.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 justify-items-end">
                {[
                  { icon: Droplets, label: "Riego Inteligente" },
                  { icon: Sun, label: "Clima en Tiempo Real" },
                  { icon: BarChart3, label: "Análisis de Suelo" },
                  { icon: Wifi, label: "Sensores Remotos" },
                ].map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3 text-neutral-400">
                    <span className="text-sm">{feature.label}</span>
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                ))}
              </div>
              
              <Link href="#terra">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Explorar Terra
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center state - visible when slider is in middle */}
      <motion.div
        style={{ 
          opacity: useTransform(sliderX, [-0.5, 0, 0.5], [0, 1, 0])
        }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="h-full flex flex-col items-center justify-center">
          <motion.p 
            className="text-xl md:text-2xl text-neutral-500 font-medium mb-4 text-center px-4"
          >
            Dos soluciones, un ecosistema
          </motion.p>
          <div className="flex items-center gap-8 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4 text-emerald-500" />
              Terra
            </span>
            <span className="flex items-center gap-2">
              Core
              <ChevronRight className="w-4 h-4 text-blue-500" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Vertical divider line */}
      <motion.div
        style={{ left: useTransform(dividerPosition, (v) => `${v}%`) }}
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent z-20 pointer-events-none"
      />

      {/* Draggable center logo */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDrag={handleDrag}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ 
          left: useTransform(dividerPosition, (v) => `${v}%`),
          x: "-50%",
          y: "-50%"
        }}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 1.15 }}
        className="absolute top-1/2 z-30 cursor-grab active:cursor-grabbing"
      >
        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl flex items-center justify-center transition-shadow ${isDragging ? 'shadow-3xl ring-4 ring-blue-500/20' : ''}`}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl md:text-2xl">N</span>
          </div>
        </div>
        {/* Drag indicator arrows */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2">
          <ChevronLeft className="w-5 h-5 text-emerald-500 animate-pulse" />
        </div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2">
          <ChevronRight className="w-5 h-5 text-blue-500 animate-pulse" />
        </div>
      </motion.div>

      {/* Quick navigation buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        <motion.button
          onClick={goToTerra}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 rounded-full text-sm font-medium transition-colors border border-emerald-500/20"
        >
          Terra
        </motion.button>
        <motion.button
          onClick={goToCenter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-neutral-200/50 hover:bg-neutral-200 text-neutral-600 rounded-full text-sm font-medium transition-colors"
        >
          Centro
        </motion.button>
        <motion.button
          onClick={goToCore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 rounded-full text-sm font-medium transition-colors border border-blue-500/20"
        >
          Core
        </motion.button>
      </div>
    </section>
  );
}
