"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-background pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                alt="Tecnología IoT de vanguardia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Dispositivos conectados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-8">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Innovación IoT para{" "}
                <span className="text-primary">tu Empresa</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              En <strong className="text-foreground">Nuviio</strong>, unimos tecnología, estrategia e innovación para crear{" "}
              <span className="text-foreground">experiencias digitales impactantes</span> con soluciones IoT de vanguardia.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">+50 Proyectos</p>
                  <p className="text-xs text-muted-foreground">En 5 países</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                  +12
                </span>
              </div>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4 mt-4"
            >
              {/* Stats Card */}
              <div className="bg-muted rounded-2xl p-6">
                <p className="text-5xl font-bold text-foreground">400+</p>
                <p className="text-sm text-muted-foreground mt-2">Clientes Satisfechos</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["TechCorp", "InnovateMX", "DataFlow"].map((company) => (
                    <span
                      key={company}
                      className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full"
                    >
                      {company}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-secondary text-secondary-foreground py-3 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
                >
                  Ver Planes
                </motion.button>
              </div>

              {/* Feature Card */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="IoT Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between text-white mb-2">
                    <span className="text-xs opacity-80">Nuviio Facts</span>
                    <span className="text-xs opacity-80">01/04</span>
                  </div>
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-sm text-white/80 mt-1">
                    Productos confiables en múltiples industrias.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
