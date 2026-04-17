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
  
  // Transform slider to percentage for panel widths
  const leftPanelWidth = useTransform(sliderX, [-200, 0, 200], [100, 50, 0]);
  const rightPanelWidth = useTransform(sliderX, [-200, 0, 200], [0, 50, 100]);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = sliderX.get();
    // Snap to positions
    if (currentX > 100) {
      animate(sliderX, 200, { type: "spring", stiffness: 400, damping: 35 });
    } else if (currentX < -100) {
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
  }: { 
    type: "core" | "terra"; 
  }) => {
    const isCore = type === "core";
    const Icon = isCore ? Factory : Leaf;
    const title = isCore ? "Core" : "Terra";
    const sector = isCore ? "Sector Industrial" : "Sector Primario";
    const description = isCore 
      ? "Soluciones IoT industriales para optimizar procesos, monitorear equipos en tiempo real y predecir mantenimiento antes de que ocurran fallas."
      : "Tecnologia IoT para agricultura y ganaderia inteligente. Optimiza recursos, monitorea cultivos y mejora la productividad de forma sostenible.";
    const features = isCore
      ? [
          { icon: Cpu, label: "Control de Procesos" },
          { icon: BarChart3, label: "Analitica Industrial" },
          { icon: Wifi, label: "Conectividad 24/7" },
          { icon: Thermometer, label: "Monitoreo Ambiental" },
        ]
      : [
          { icon: Droplets, label: "Riego Inteligente" },
          { icon: Sun, label: "Clima en Tiempo Real" },
          { icon: BarChart3, label: "Analisis de Suelo" },
          { icon: Wifi, label: "Sensores Remotos" },
        ];
    const bgImage = isCore ? "/images/iiot-industry.jpg" : "/images/iot-agriculture.jpg";
    const accentColor = isCore ? "blue" : "emerald";

    return (
      <div className="relative h-full w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={`${title} background`}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 ${isCore ? "bg-blue-950/85" : "bg-emerald-950/80"}`} />
        </div>
        
        {/* Content - Centered */}
        <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-xl text-center">
            {/* Icon */}
            <div className={`mb-6 mx-auto inline-flex items-center justify-center w-20 h-20 rounded-2xl ${isCore ? "bg-blue-500/20 border-blue-500/30" : "bg-emerald-500/20 border-emerald-500/30"} border backdrop-blur-sm`}>
              <Icon className={`w-10 h-10 ${isCore ? "text-blue-400" : "text-emerald-400"}`} />
            </div>
            
            {/* Badge */}
            <div className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full ${isCore ? "bg-blue-500/10 border-blue-500/20" : "bg-emerald-500/10 border-emerald-500/20"} border backdrop-blur-sm`}>
              <span className={`w-2 h-2 rounded-full ${isCore ? "bg-blue-400" : "bg-emerald-400"} animate-pulse`} />
              <span className={`text-sm ${isCore ? "text-blue-300" : "text-emerald-300"} font-medium`}>{sector}</span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
              Nuviio
            </h2>
            <h3 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isCore ? "text-blue-400" : "text-emerald-400"} mb-8`}>
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed">
              {description}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div 
                  key={feature.label} 
                  className="flex items-center justify-center gap-3 text-neutral-300"
                >
                  <feature.icon className={`w-5 h-5 ${isCore ? "text-blue-400" : "text-emerald-400"}`} />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link href={`#${type}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group inline-flex items-center gap-3 px-8 py-4 ${isCore ? "bg-blue-500 hover:bg-blue-600" : "bg-emerald-500 hover:bg-emerald-600"} text-white font-semibold rounded-full transition-colors text-lg`}
              >
                Explorar {title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
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
          width: useTransform(leftPanelWidth, (v) => `${v}%`)
        }}
        className="absolute top-0 left-0 h-full overflow-hidden"
      >
        <div className="h-full" style={{ width: "100vw" }}>
          <ServiceContent type="terra" />
        </div>
      </motion.div>

      {/* Right Panel - Core */}
      <motion.div
        style={{ 
          width: useTransform(rightPanelWidth, (v) => `${v}%`)
        }}
        className="absolute top-0 right-0 h-full overflow-hidden"
      >
        <div className="h-full" style={{ width: "100vw", marginLeft: "auto" }}>
          <ServiceContent type="core" />
        </div>
      </motion.div>

      {/* Draggable divider - simple line */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
        dragElastic={0.05}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x: sliderX }}
        className="absolute top-0 bottom-0 left-1/2 -ml-6 w-12 z-50 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Divider line */}
        <div className={`h-full w-1 bg-white/80 rounded-full transition-all ${isDragging ? "w-1.5 bg-white" : ""}`} />
        
        {/* Drag handle */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-10 h-24 bg-white/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center gap-1 shadow-xl transition-transform ${isDragging ? "scale-110" : ""}`}>
          <ChevronLeft className="w-4 h-4 text-emerald-600" />
          <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 via-neutral-400 to-blue-400 rounded-full" />
          <ChevronRight className="w-4 h-4 text-blue-600" />
        </div>
      </motion.div>

      {/* Center message - visible in middle position */}
      <motion.div
        style={{ 
          opacity: useTransform(sliderX, [-80, 0, 80], [0, 1, 0])
        }}
        className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
      >
        <div className="bg-white/95 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-2xl">
          <p className="text-2xl md:text-3xl text-neutral-800 font-bold text-center">
            Dos soluciones, un ecosistema
          </p>
          <p className="text-sm text-neutral-500 text-center mt-2">
            Arrastra para explorar cada sector
          </p>
        </div>
      </motion.div>

      {/* Quick navigation buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        <motion.button
          onClick={goToTerra}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-colors shadow-lg"
        >
          <span className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Terra
          </span>
        </motion.button>
        <motion.button
          onClick={goToCenter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white hover:bg-neutral-100 text-neutral-700 rounded-full font-semibold transition-colors shadow-lg"
        >
          Centro
        </motion.button>
        <motion.button
          onClick={goToCore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors shadow-lg"
        >
          <span className="flex items-center gap-2">
            Core
            <ArrowRight className="w-4 h-4" />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
