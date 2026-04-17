"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Cpu,
  Wifi,
  BarChart3,
  Zap,
  Target
} from "lucide-react";

// All features with blue icons
const allFeatures = [
  {
    icon: DollarSign,
    title: "Inversion Reducida",
    description: "Solo $999 USD para validar el potencial de IoT en tu negocio.",
  },
  {
    icon: Clock,
    title: "2 Semanas",
    description: "Implementacion rapida para que veas resultados de inmediato.",
  },
  {
    icon: Target,
    title: "ROI Medible",
    description: "Metricas claras que demuestran el valor de la solucion.",
  },
  {
    icon: Cpu,
    title: "Hardware Incluido",
    description: "Sensor IoT personalizado para tu caso de uso especifico.",
  },
  {
    icon: BarChart3,
    title: "Dashboard en Vivo",
    description: "Visualiza tus datos en tiempo real desde cualquier dispositivo.",
  },
  {
    icon: Shield,
    title: "Sin Riesgo",
    description: "Sin compromiso de continuidad si no cumple expectativas.",
  },
];

const includesItems = [
  { icon: Cpu, text: "Sensor IoT personalizado" },
  { icon: Wifi, text: "Conectividad incluida" },
  { icon: BarChart3, text: "Dashboard en tiempo real" },
  { icon: Zap, text: "Soporte tecnico dedicado" },
];

export function NodoCeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to show different content phases
  // Phase 1: 0-0.25 - Show features 1-2
  // Phase 2: 0.25-0.5 - Show features 3-4
  // Phase 3: 0.5-0.75 - Show features 5-6
  // Phase 4: 0.75-1 - Show pricing banner

  const phase1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3], [1, 1, 1, 0]);
  const phase2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const phase3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const phase4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} id="nodo-cero" className="relative h-[400vh]">
      {/* Sticky container with video background */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desarmado_y_Telemetr%C3%ADa_IoT-TQZYXg8KTxirmAN9wRUHAwEKiTh38a.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Header - Always visible */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 backdrop-blur-sm text-white rounded-full mb-6 border border-blue-400/30"
            >
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold">Piloto sin Friccion</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight font-[family-name:var(--font-display)]">
              Nodo Cero
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              El punto de entrada perfecto al mundo IoT
            </p>
          </div>

          {/* Phase 1: Features 1-2 */}
          <motion.div 
            style={{ opacity: phase1Opacity }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mt-16 px-4"
          >
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {allFeatures.slice(0, 2).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Phase 2: Features 3-4 */}
          <motion.div 
            style={{ opacity: phase2Opacity }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mt-16 px-4"
          >
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {allFeatures.slice(2, 4).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Phase 3: Features 5-6 */}
          <motion.div 
            style={{ opacity: phase3Opacity }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mt-16 px-4"
          >
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {allFeatures.slice(4, 6).map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Phase 4: Pricing Banner */}
          <motion.div 
            style={{ opacity: phase4Opacity }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mt-8 px-4"
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Price and CTA */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-white/50 line-through text-xl">$2,500</span>
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -60%
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl sm:text-6xl font-bold text-white">$999</span>
                      <span className="text-white/60 text-lg">USD</span>
                    </div>
                    <p className="text-white/60 mb-8">Pago unico. Sin suscripciones.</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="#contacto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-base font-semibold transition-all shadow-lg shadow-blue-500/30"
                      >
                        Comenzar Ahora
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#contacto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full text-base font-medium hover:bg-white/20 transition-colors border border-white/20"
                      >
                        Agendar Demo
                      </motion.a>
                    </div>
                  </div>

                  {/* Right: What's included */}
                  <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      Incluye
                    </h4>
                    <ul className="space-y-4">
                      {includesItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-white/80"
                        >
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      Pago 100% Seguro
                    </span>
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      ROI Garantizado
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Sin Compromiso
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/50"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 bg-white/50 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature card component with blue icons
function FeatureCard({ feature, index }: { feature: typeof allFeatures[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-400/30">
          <feature.icon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white mb-1">
            {feature.title}
          </h4>
          <p className="text-white/70 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
