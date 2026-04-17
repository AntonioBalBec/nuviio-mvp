"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Leaf, Cpu, Wifi, BarChart3, Thermometer, Droplets, Sun } from "lucide-react";
import Link from "next/link";

export function ServicesSplit() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Nuviio Core - Industrial (Left side) */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 45% 100%, 0 100%)" }}
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
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30">
                <Factory className="w-8 h-8 text-blue-400" />
              </div>
              
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-blue-300 font-medium">Sector Industrial</span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nuviio
                <span className="block text-blue-400">Core</span>
              </h2>
              
              {/* Description */}
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed max-w-md">
                Soluciones IoT industriales para optimizar procesos, 
                monitorear equipos en tiempo real y predecir mantenimiento 
                antes de que ocurran fallas.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Cpu, label: "Control de Procesos" },
                  { icon: BarChart3, label: "Analítica Industrial" },
                  { icon: Wifi, label: "Conectividad 24/7" },
                  { icon: Thermometer, label: "Monitoreo Ambiental" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-neutral-400"
                  >
                    <feature.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA */}
              <Link href="#core">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors"
                >
                  Explorar Core
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Nuviio Terra - Sector Primario (Right side) */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)" }}
      >
        <div className="relative w-full h-full bg-gradient-to-bl from-emerald-900 via-green-800 to-emerald-900">
          {/* Background pattern - organic */}
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
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-end px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl text-right"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
                <Leaf className="w-8 h-8 text-emerald-400" />
              </div>
              
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-300 font-medium">Sector Primario</span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nuviio
                <span className="block text-emerald-400">Terra</span>
              </h2>
              
              {/* Description */}
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Tecnología IoT para agricultura y ganadería inteligente. 
                Optimiza recursos, monitorea cultivos y mejora la 
                productividad de forma sostenible.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8 justify-items-end">
                {[
                  { icon: Droplets, label: "Riego Inteligente" },
                  { icon: Sun, label: "Clima en Tiempo Real" },
                  { icon: BarChart3, label: "Análisis de Suelo" },
                  { icon: Wifi, label: "Sensores Remotos" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-neutral-400"
                  >
                    <span className="text-sm">{feature.label}</span>
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </motion.div>
                ))}
              </div>
              
              {/* CTA */}
              <Link href="#terra">
                <motion.button
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Explorar Terra
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Center divider line */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 bottom-0 w-px origin-top"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)",
            transform: "rotate(10deg) translateX(-50%)",
          }}
        />
      </div>

      {/* Center logo badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
