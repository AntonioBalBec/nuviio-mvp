"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, ArrowLeft, Factory, Leaf, Cpu, Wifi, BarChart3, Thermometer, Droplets, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ServicesSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Slider position: 0 = center, negative = left (Terra), positive = right (Core)
  const sliderX = useMotionValue(0);
  
  // Transform slider to percentage (0-100)
  const sliderPercent = useTransform(sliderX, [-200, 0, 200], [0, 50, 100]);
  
  // Content visibility - minimal opacity change
  const coreOpacity = useTransform(sliderX, [-200, -50, 0, 50, 200], [0.3, 0.6, 1, 1, 1]);
  const terraOpacity = useTransform(sliderX, [-200, -50, 0, 50, 200], [1, 1, 1, 0.6, 0.3]);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = sliderX.get();
    // Snap to positions: -200 (Terra), 0 (Center), 200 (Core)
    if (currentX > 80) {
      animate(sliderX, 200, { type: "spring", stiffness: 400, damping: 35 });
    } else if (currentX < -80) {
      animate(sliderX, -200, { type: "spring", stiffness: 400, damping: 35 });
    } else {
      animate(sliderX, 0, { type: "spring", stiffness: 400, damping: 35 });
    }
  };

  const goToCore = () => animate(sliderX, 200, { type: "spring", stiffness: 400, damping: 35 });
  const goToTerra = () => animate(sliderX, -200, { type: "spring", stiffness: 400, damping: 35 });
  const goToCenter = () => animate(sliderX, 0, { type: "spring", stiffness: 400, damping: 35 });

  // Service card content component for consistent layout
  const ServiceContent = ({ 
    type, 
    align 
  }: { 
    type: "core" | "terra"; 
    align: "left" | "right";
  }) => {
    const isCore = type === "core";
    const Icon = isCore ? Factory : Leaf;
    const title = isCore ? "Core" : "Terra";
    const sector = isCore ? "Sector Industrial" : "Sector Primario";
    const description = isCore 
      ? "Soluciones IoT industriales para optimizar procesos, monitorear equipos en tiempo real y predecir mantenimiento antes de que ocurran fallas."
      : "Tecnología IoT para agricultura y ganadería inteligente. Optimiza recursos, monitorea cultivos y mejora la productividad de forma sostenible.";
    const features = isCore
      ? [
          { icon: Cpu, label: "Control de Procesos" },
          { icon: BarChart3, label: "Analítica Industrial" },
          { icon: Wifi, label: "Conectividad 24/7" },
          { icon: Thermometer, label: "Monitoreo Ambiental" },
        ]
      : [
          { icon: Droplets, label: "Riego Inteligente" },
          { icon: Sun, label: "Clima en Tiempo Real" },
          { icon: BarChart3, label: "Análisis de Suelo" },
          { icon: Wifi, label: "Sensores Remotos" },
        ];
    const accentColor = isCore ? "blue" : "emerald";
    const bgImage = isCore ? "/images/iiot-industry.jpg" : "/images/iot-agriculture.jpg";

    return (
      <div className={`relative h-full flex flex-col justify-center ${align === "left" ? "items-start text-left pl-8 md:pl-16 lg:pl-24 pr-32" : "items-end text-right pr-8 md:pr-16 lg:pr-24 pl-32"}`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={`${title} background`}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${isCore ? "bg-neutral-900/80" : "bg-emerald-900/70"}`} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-lg">
          {/* Icon */}
          <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${isCore ? "bg-blue-500/20 border-blue-500/30" : "bg-emerald-500/20 border-emerald-500/30"} border backdrop-blur-sm`}>
            <Icon className={`w-8 h-8 ${isCore ? "text-blue-400" : "text-emerald-400"}`} />
          </div>
          
          {/* Badge */}
          <div className={`mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${isCore ? "bg-blue-500/10 border-blue-500/20" : "bg-emerald-500/10 border-emerald-500/20"} border backdrop-blur-sm`}>
            <span className={`w-2 h-2 rounded-full ${isCore ? "bg-blue-400" : "bg-emerald-400"} animate-pulse`} />
            <span className={`text-sm ${isCore ? "text-blue-300" : "text-emerald-300"} font-medium`}>{sector}</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            Nuviio
          </h2>
          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isCore ? "text-blue-400" : "text-emerald-400"} mb-6`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
            {description}
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((feature) => (
              <div 
                key={feature.label} 
                className={`flex items-center gap-3 text-neutral-300 ${align === "right" ? "flex-row-reverse" : ""}`}
              >
                <feature.icon className={`w-5 h-5 ${isCore ? "text-blue-400" : "text-emerald-400"}`} />
                <span className="text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link href={`#${type}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group inline-flex items-center gap-3 px-6 py-3 ${isCore ? "bg-blue-500 hover:bg-blue-600" : "bg-emerald-500 hover:bg-emerald-600"} text-white font-semibold rounded-full transition-colors ${align === "right" ? "flex-row-reverse" : ""}`}
            >
              {align === "left" ? (
                <>
                  Explorar {title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Explorar {title}
                </>
              )}
            </motion.button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-slate-100">
      {/* Instructions banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-neutral-200"
      >
        <ChevronLeft className="w-4 h-4 text-emerald-500 animate-pulse" />
        <span className="text-sm text-neutral-600 font-medium">Desliza para explorar</span>
        <ChevronRight className="w-4 h-4 text-blue-500 animate-pulse" />
      </motion.div>

      {/* Left Panel - Terra */}
      <motion.div
        style={{ 
          opacity: terraOpacity,
          width: useTransform(sliderPercent, (v) => `${v}%`)
        }}
        className="absolute top-0 left-0 h-full overflow-hidden"
      >
        <div className="absolute inset-0 w-screen h-full">
          <ServiceContent type="terra" align="right" />
        </div>
      </motion.div>

      {/* Right Panel - Core */}
      <motion.div
        style={{ 
          opacity: coreOpacity,
          width: useTransform(sliderPercent, (v) => `${100 - v}%`)
        }}
        className="absolute top-0 right-0 h-full overflow-hidden"
      >
        <div className="absolute inset-0 w-screen h-full" style={{ right: 0, left: "auto" }}>
          <ServiceContent type="core" align="left" />
        </div>
      </motion.div>

      {/* Draggable divider with N logo */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x: sliderX }}
        className="absolute top-0 bottom-0 left-1/2 -ml-10 w-20 z-50 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/50 -translate-x-1/2" />
        
        {/* N Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.15 }}
          className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl flex items-center justify-center transition-shadow ${isDragging ? "ring-4 ring-white/50" : ""}`}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl md:text-2xl">N</span>
          </div>
          
          {/* Drag hints */}
          <motion.div 
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -left-8 top-1/2 -translate-y-1/2"
          >
            <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg" />
          </motion.div>
          <motion.div 
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -right-8 top-1/2 -translate-y-1/2"
          >
            <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Center message - visible in middle position */}
      <motion.div
        style={{ 
          opacity: useTransform(sliderX, [-100, 0, 100], [0, 1, 0])
        }}
        className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
      >
        <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl">
          <p className="text-xl md:text-2xl text-neutral-700 font-semibold text-center">
            Dos soluciones, un ecosistema
          </p>
          <p className="text-sm text-neutral-500 text-center mt-1">
            Arrastra el control para explorar
          </p>
        </div>
      </motion.div>

      {/* Quick navigation buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        <motion.button
          onClick={goToTerra}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-sm font-medium transition-colors shadow-lg"
        >
          Terra
        </motion.button>
        <motion.button
          onClick={goToCenter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 bg-white hover:bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium transition-colors shadow-lg"
        >
          Centro
        </motion.button>
        <motion.button
          onClick={goToCore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors shadow-lg"
        >
          Core
        </motion.button>
      </div>
    </section>
  );
}
