"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  Target, 
  TrendingUp,
  Clock,
  DollarSign,
  Shield
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Inversion Reducida",
    description: "Precio especial para que pruebes sin compromiso financiero significativo.",
  },
  {
    icon: Clock,
    title: "Implementacion Rapida",
    description: "En menos de 2 semanas tendras tu nodo piloto funcionando.",
  },
  {
    icon: Target,
    title: "Resultados Medibles",
    description: "Metricas claras para validar el retorno de inversion.",
  },
  {
    icon: Shield,
    title: "Sin Riesgo",
    description: "Si no cumple tus expectativas, no hay compromiso de continuidad.",
  },
];

const includesItems = [
  "Sensor IoT personalizado para tu caso de uso",
  "Dashboard en tiempo real con metricas clave",
  "Soporte tecnico dedicado durante el piloto",
  "Informe de resultados y recomendaciones",
  "Capacitacion basica para tu equipo",
  "Integracion con tus sistemas existentes",
];

export function NodoCeroSection() {
  return (
    <section id="nodo-cero" className="relative py-24 bg-foreground overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nodo-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodo-dots)" />
        </svg>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Oferta Especial</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-background mb-6 text-balance">
            Nodo Cero
          </h2>
          <p className="text-xl sm:text-2xl text-background/60 max-w-3xl mx-auto leading-relaxed">
            Tu punto de entrada al mundo IoT. Un piloto de bajo costo para validar 
            nuestra propuesta de valor sin fricciones.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-background mb-8">
              Por que empezar con Nodo Cero?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-background/10 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-background mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-background/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-background rounded-3xl p-8 sm:p-10 shadow-2xl">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Mas Popular
                </motion.div>
              </div>

              {/* Price */}
              <div className="text-center mb-8 pt-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-muted-foreground line-through text-xl">$2,500</span>
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded">
                    -60%
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl sm:text-6xl font-bold text-foreground">$999</span>
                  <span className="text-muted-foreground">USD</span>
                </div>
                <p className="text-muted-foreground mt-2">Pago unico - Sin suscripcion</p>
              </div>

              {/* Includes */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Que incluye:</h4>
                <ul className="space-y-3">
                  {includesItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(20, 184, 166, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold transition-all"
                >
                  Comenzar con Nodo Cero
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-muted text-foreground rounded-full text-base font-medium hover:bg-muted/80 transition-colors"
                >
                  Agendar Demo Gratuita
                </motion.a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-primary" />
                    Pago Seguro
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    ROI Garantizado
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-background/60 mb-4">
            Tienes dudas? Nuestro equipo esta listo para ayudarte.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Hablar con un especialista
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
