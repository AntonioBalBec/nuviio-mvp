"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  Target, 
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Cpu,
  Wifi,
  BarChart3,
  Zap
} from "lucide-react";

const leftFeatures = [
  {
    icon: DollarSign,
    title: "Inversion Reducida",
    description: "Solo $999 USD para validar el potencial de IoT en tu negocio.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "2 Semanas",
    description: "Implementacion rapida para que veas resultados de inmediato.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "ROI Medible",
    description: "Metricas claras que demuestran el valor de la solucion.",
    color: "from-purple-500 to-pink-500",
  },
];

const rightFeatures = [
  {
    icon: Cpu,
    title: "Hardware Incluido",
    description: "Sensor IoT personalizado para tu caso de uso especifico.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Dashboard en Vivo",
    description: "Visualiza tus datos en tiempo real desde cualquier dispositivo.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Sin Riesgo",
    description: "Sin compromiso de continuidad si no cumple expectativas.",
    color: "from-indigo-500 to-blue-500",
  },
];

const includesItems = [
  { icon: Cpu, text: "Sensor IoT personalizado" },
  { icon: Wifi, text: "Conectividad incluida" },
  { icon: BarChart3, text: "Dashboard en tiempo real" },
  { icon: Zap, text: "Soporte tecnico dedicado" },
];

export function NodoCeroSection() {
  return (
    <section id="nodo-cero" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl translate-x-1/2" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(0,0,0) 1px, transparent 1px), linear-gradient(to bottom, rgb(0,0,0) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full mb-6 shadow-lg shadow-blue-500/25"
          >
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-semibold">Piloto sin Friccion</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
            Nodo Cero
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed text-balance">
            El punto de entrada perfecto al mundo IoT. Valida nuestra propuesta 
            de valor con una inversion minima.
          </p>
        </motion.div>

        {/* Main Content: Features - Device - Features Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-neutral-200/50 border border-neutral-100 hover:border-blue-200 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Hover indicator */}
                <motion.div 
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center: Device Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow effect behind device */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-[300px] h-[300px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            {/* Connection lines radiating from device */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
              {/* Left side lines */}
              <motion.line 
                x1="200" y1="250" x2="30" y2="100"
                stroke="url(#deviceGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.line 
                x1="200" y1="250" x2="30" y2="250"
                stroke="url(#deviceGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.line 
                x1="200" y1="250" x2="30" y2="400"
                stroke="url(#deviceGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              {/* Right side lines */}
              <motion.line 
                x1="200" y1="250" x2="370" y2="100"
                stroke="url(#deviceGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.line 
                x1="200" y1="250" x2="370" y2="250"
                stroke="url(#deviceGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line 
                x1="200" y1="250" x2="370" y2="400"
                stroke="url(#deviceGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
              <defs>
                <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Device Image Container */}
            <motion.div
              className="relative z-10 w-full max-w-[350px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eFAWPxKwPUvwOYLt9icpy3nNONkt4N.png"
                alt="Nodo Cero - Dispositivo IoT"
                width={400}
                height={500}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              
              {/* Floating labels */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="absolute top-[10%] -left-4 bg-white px-3 py-1.5 rounded-full shadow-lg border border-neutral-100 text-xs font-medium text-neutral-700"
              >
                Panel Solar
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="absolute top-[40%] -right-4 bg-white px-3 py-1.5 rounded-full shadow-lg border border-neutral-100 text-xs font-medium text-neutral-700"
              >
                PCB IoT
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-[30%] -left-4 bg-white px-3 py-1.5 rounded-full shadow-lg border border-neutral-100 text-xs font-medium text-neutral-700"
              >
                Bateria LiPo
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, x: -10 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-neutral-200/50 border border-neutral-100 hover:border-blue-200 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Hover indicator */}
                <motion.div 
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="w-5 h-5 text-blue-500 rotate-180" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pricing CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Price and CTA */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-neutral-400 line-through text-xl">$2,500</span>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -60%
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-bold text-white">$999</span>
                  <span className="text-neutral-400 text-lg">USD</span>
                </div>
                <p className="text-neutral-400 mb-8">Pago unico. Sin suscripciones.</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contacto"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-base font-semibold transition-all shadow-lg shadow-blue-500/30"
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
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  Incluye
                </h4>
                <ul className="space-y-4">
                  {includesItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      {item.text}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trust badges */}
            <div className="relative mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  Pago 100% Seguro
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  ROI Garantizado
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Sin Compromiso
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
