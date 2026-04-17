"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "¿Qué servicios ofrece Nuviio?",
    answer: "Ofrecemos soluciones completas de IoT incluyendo automatización inteligente, análisis de datos en tiempo real, seguridad conectada, y consultoría estratégica para transformación digital."
  },
  {
    question: "¿Con quién trabajan?",
    answer: "Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones multinacionales, en sectores como manufactura, logística, agricultura, ciudades inteligentes y retail."
  },
  {
    question: "¿Cuánto tiempo toma un proyecto?",
    answer: "El tiempo varía según la complejidad. Proyectos piloto pueden completarse en 4-6 semanas, mientras que implementaciones empresariales completas pueden tomar 3-6 meses."
  },
  {
    question: "¿Manejan tanto diseño como desarrollo?",
    answer: "Sí, ofrecemos servicios end-to-end. Desde el diseño de arquitectura IoT y UX/UI de dashboards, hasta el desarrollo de firmware, backend y aplicaciones móviles."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-8">
              <Search className="w-4 h-4" />
              <span className="text-sm">Guía Rápida</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Aclarando los{" "}
              <span className="text-primary">Detalles</span>
            </h2>

            <div className="mt-12">
              <p className="text-muted-foreground mb-4">¿Tienes más preguntas?</p>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium"
              >
                <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                LLÁMANOS
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-muted rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-secondary-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed pl-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
