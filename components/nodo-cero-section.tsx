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

const featurePairs = [
  [
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
  ],
  [
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
  ],
  [
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
  ],
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

  // Each pair appears and disappears sequentially
  // Pair 1: 0-20% visible, fades out at 20-25%
  // Pair 2: 25-45% visible, fades out at 45-50%
  // Pair 3: 50-70% visible, fades out at 70-75%
  // Banner: 75-100% visible
  
  const pair1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [0, 1, 1, 0]);
  const pair1Y = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [60, 0, 0, -40]);
  
  const pair2Opacity = useTransform(scrollYProgress, [0.20, 0.27, 0.40, 0.47], [0, 1, 1, 0]);
  const pair2Y = useTransform(scrollYProgress, [0.20, 0.27, 0.40, 0.47], [60, 0, 0, -40]);
  
  const pair3Opacity = useTransform(scrollYProgress, [0.45, 0.52, 0.65, 0.72], [0, 1, 1, 0]);
  const pair3Y = useTransform(scrollYProgress, [0.45, 0.52, 0.65, 0.72], [60, 0, 0, -40]);

  // Header fades out when banner appears
  const headerOpacity = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);
  
  // Banner appears at the end
  const bannerOpacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 1]);
  const bannerY = useTransform(scrollYProgress, [0.72, 0.82], [60, 0]);

  const pairTransforms = [
    { opacity: pair1Opacity, y: pair1Y },
    { opacity: pair2Opacity, y: pair2Y },
    { opacity: pair3Opacity, y: pair3Y },
  ];

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
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          
          {/* Header - Fades out when banner appears */}
          <motion.div 
            style={{ opacity: headerOpacity }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 backdrop-blur-sm text-white rounded-full mb-8 border border-blue-400/30"
            >
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold">Piloto sin Friccion</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-display)]">
              Nodo Cero
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              El punto de entrada perfecto al mundo IoT
            </p>
          </motion.div>

          {/* Feature Pairs - Each pair appears and replaces the previous */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
            {featurePairs.map((pair, pairIndex) => (
              <motion.div
                key={pairIndex}
                style={{ 
                  opacity: pairTransforms[pairIndex].opacity,
                  y: pairTransforms[pairIndex].y,
                }}
                className="absolute inset-x-0 bottom-0 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {pair.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                        <feature.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Final Banner - Full pricing info */}
          <motion.div 
            style={{ 
              opacity: bannerOpacity,
              y: bannerY,
            }}
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <div className="w-full max-w-5xl">
              <div className="relative bg-neutral-900 rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-2xl">
                {/* Badge */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-white rounded-full border border-blue-500/30">
                    <Rocket className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold">Nodo Cero - Piloto IoT</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Price and CTA */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <span className="text-neutral-500 line-through text-2xl">$2,500</span>
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -60%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                      <span className="text-6xl sm:text-7xl font-bold text-white">$999</span>
                      <span className="text-neutral-500 text-xl">USD</span>
                    </div>
                    <p className="text-neutral-500 text-lg mb-10">Pago unico. Sin suscripciones.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <motion.a
                        href="#contacto"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-500/30"
                      >
                        Comenzar Ahora
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#contacto"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-800 text-white rounded-full text-lg font-medium hover:bg-neutral-700 transition-colors border border-neutral-700"
                      >
                        Agendar Demo
                      </motion.a>
                    </div>
                  </div>

                  {/* Right: What's included */}
                  <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700">
                    <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                      Que incluye
                    </h4>
                    <ul className="space-y-5">
                      {includesItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 text-neutral-300 text-lg"
                        >
                          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                            <item.icon className="w-5 h-5 text-blue-400" />
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-10 pt-8 border-t border-neutral-800">
                  <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
                    <span className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      Pago 100% Seguro
                    </span>
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      ROI Garantizado
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      Sin Compromiso
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator - only visible initially */}
          <motion.div 
            style={{ opacity: headerOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
