"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

// Video background component
function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg_nv_2-65QdBIHSIHZGQt9Ub8p2ppfquuhVRj.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <VideoBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title - Nuviio */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Nuviio
        </motion.h1>

        {/* Tagline - Shape the Unseen */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light tracking-wide mb-12"
        >
          Shape the Unseen
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#nodo-cero"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,200,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full text-base font-semibold transition-all shadow-lg"
          >
            Comenzar con Nodo Cero
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#metodologia"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-base font-medium border border-white/30 hover:border-white/50 transition-all"
          >
            <Play className="w-5 h-5" />
            Ver como funciona
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
