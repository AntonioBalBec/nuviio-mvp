"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";


// Improved Lava Lamp with deep blue colors
function LavaLampBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Large prominent blobs with deep blue colors */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,0,255,0.4) 0%, rgba(0,50,255,0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
          left: "-10%",
          top: "-20%",
        }}
        animate={{
          x: [0, 150, 50, 200, 0],
          y: [0, 100, 200, 50, 0],
          scale: [1, 1.2, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,100,255,0.5) 0%, rgba(0,50,200,0.3) 40%, transparent 70%)",
          filter: "blur(50px)",
          right: "-5%",
          top: "10%",
        }}
        animate={{
          x: [0, -100, -50, -150, 0],
          y: [0, 150, 50, 100, 0],
          scale: [1, 1.3, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,0,200,0.45) 0%, rgba(0,0,150,0.25) 40%, transparent 70%)",
          filter: "blur(55px)",
          left: "30%",
          bottom: "-30%",
        }}
        animate={{
          x: [0, -80, 120, -50, 0],
          y: [0, -150, -80, -200, 0],
          scale: [1, 1.15, 1.25, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30,64,175,0.5) 0%, rgba(29,78,216,0.3) 40%, transparent 70%)",
          filter: "blur(45px)",
          right: "20%",
          bottom: "10%",
        }}
        animate={{
          x: [0, 100, -100, 80, 0],
          y: [0, -100, -50, -150, 0],
          scale: [1.1, 1, 1.2, 1.15, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.55) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
          filter: "blur(40px)",
          left: "50%",
          top: "30%",
        }}
        animate={{
          x: [0, -120, 80, -60, 0],
          y: [0, 80, -60, 100, 0],
          scale: [1, 1.25, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Additional accent blobs */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(8,145,178,0.2) 40%, transparent 70%)",
          filter: "blur(35px)",
          left: "10%",
          top: "50%",
        }}
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, -80, 0],
          scale: [1, 1.2, 1.05, 1.15, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,0,255,0.35) 0%, rgba(0,0,200,0.2) 40%, transparent 70%)",
          filter: "blur(30px)",
          right: "10%",
          top: "60%",
        }}
        animate={{
          x: [0, -60, 40, -80, 0],
          y: [0, 50, -30, 70, 0],
          scale: [1.1, 1, 1.2, 1.05, 1.1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50" />
    </div>
  );
}

// Floating IoT connection nodes
function FloatingNodes() {
  const nodes = [
    { x: "8%", y: "25%", delay: 0, size: 10 },
    { x: "92%", y: "20%", delay: 0.5, size: 8 },
    { x: "85%", y: "65%", delay: 1, size: 12 },
    { x: "12%", y: "70%", delay: 1.5, size: 9 },
    { x: "45%", y: "12%", delay: 0.8, size: 11 },
    { x: "25%", y: "45%", delay: 1.2, size: 7 },
    { x: "75%", y: "40%", delay: 0.3, size: 10 },
    { x: "60%", y: "75%", delay: 0.9, size: 8 },
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
          transition={{ delay: node.delay + 0.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div 
                className="bg-blue-600 rounded-full shadow-lg shadow-blue-600/40"
                style={{ width: node.size, height: node.size }}
              />
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-full"
                style={{ width: node.size, height: node.size }}
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,0,255,0.3)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
            <stop offset="100%" stopColor="rgba(0,0,255,0.3)" />
          </linearGradient>
        </defs>
        {[
          "M 8% 25% Q 20% 20% 45% 12%",
          "M 45% 12% Q 70% 15% 92% 20%",
          "M 25% 45% Q 50% 50% 75% 40%",
          "M 12% 70% Q 35% 72% 60% 75%",
          "M 75% 40% Q 80% 55% 85% 65%",
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8,8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: 1 + i * 0.3 }}
          />
        ))}
      </svg>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-blue-200 shadow-sm"
            whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,255,0.15)" }}
          >
            <motion.span 
              className="w-2 h-2 bg-blue-600 rounded-full"
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
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Transforma
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
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
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full text-base font-semibold transition-all shadow-lg shadow-blue-600/30"
          >
            Comenzar con Nodo Cero
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#metodologia"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.95)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-neutral-800 rounded-full text-base font-medium border border-neutral-200 hover:border-blue-300 transition-all shadow-sm"
          >
            <Play className="w-5 h-5 text-blue-600" />
            Ver como funciona
          </motion.a>
        </motion.div>

        {/* Transition wave to next section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        >
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 35C672 40 768 50 864 55C960 60 1056 60 1152 55C1248 50 1344 40 1392 35L1440 30V120H0V60Z"
              fill="url(#waveGradient)"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="rgb(5, 46, 22)" />
                <stop offset="50%" stopColor="rgb(15, 23, 42)" />
                <stop offset="100%" stopColor="rgb(23, 37, 84)" />
              </linearGradient>
            </defs>
          </svg>
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
            className="flex flex-col items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Explorar</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
