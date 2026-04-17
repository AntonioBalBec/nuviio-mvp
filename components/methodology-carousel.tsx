"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";

const methodologySteps = [
  {
    week: "Semana 1",
    number: "01",
    title: "INVESTIGACIÓN",
    description: "Profundizamos en tendencias del mercado, comportamientos de usuario e insights de la industria para descubrir oportunidades que dan forma a estrategias mas inteligentes.",
    tags: ["Brainstorming", "Analisis", "Discovery"],
    image: "/images/methodology-research.jpg"
  },
  {
    week: "Semana 2",
    number: "02",
    title: "PROTOTIPO",
    description: "Creamos prototipos funcionales que permiten validar conceptos rapidamente, iterando con feedback real para optimizar la experiencia del usuario.",
    tags: ["Wireframes", "UX Design", "Testing"],
    image: "/images/methodology-prototype.jpg"
  },
  {
    week: "Semana 3",
    number: "03",
    title: "DESARROLLO",
    description: "Implementamos soluciones robustas utilizando las ultimas tecnologias IoT, asegurando escalabilidad, seguridad y rendimiento optimo.",
    tags: ["Coding", "Integration", "IoT"],
    image: "/images/methodology-development.jpg"
  },
  {
    week: "Semana 4",
    number: "04",
    title: "PRESENTACIÓN",
    description: "Entregamos el proyecto final con documentacion completa, capacitacion y soporte continuo para garantizar el exito a largo plazo.",
    tags: ["Delivery", "Training", "Support"],
    image: "/images/methodology-deployment.jpg"
  },
];

export function MethodologyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="metodologia" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Share2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">Nuestra Metodologia</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Como Trabajamos
          </h2>
          
          {/* Week Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            {methodologySteps.map((step, index) => (
              <motion.button
                key={step.week}
                onClick={() => scrollTo(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndex === index
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {step.week}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="embla overflow-hidden">
            <div className="embla__container flex">
              {methodologySteps.map((step, index) => (
                <div key={step.number} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid lg:grid-cols-3 gap-6 items-stretch"
                  >
                    {/* Left Card - Info */}
                    <div className={`rounded-3xl p-8 flex flex-col justify-between min-h-[400px] transition-all ${
                      selectedIndex === index 
                        ? "bg-white shadow-xl shadow-neutral-200/50 border border-neutral-100" 
                        : "bg-neutral-50 border border-neutral-100"
                    }`}>
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <span className="text-white font-bold text-lg">{step.number}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-neutral-900">{step.title}</h3>
                          <motion.button
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className="ml-auto w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.button>
                        </div>
                        <p className="text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Center Card - Image */}
                    <div className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-0 shadow-xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="text-8xl font-bold text-white/30">.{step.number}</div>
                      </div>
                    </div>

                    {/* Right Card - Additional Info */}
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
                      <div>
                        <span className="text-sm text-neutral-400">Fase {index + 1} de 4</span>
                        <h4 className="text-xl font-bold mt-2">
                          {index < methodologySteps.length - 1 
                            ? `Siguiente: ${methodologySteps[index + 1].title}`
                            : "Entrega Final"
                          }
                        </h4>
                        <p className="text-neutral-400 mt-4 text-sm">
                          {index < methodologySteps.length - 1 
                            ? methodologySteps[index + 1].description.slice(0, 100) + "..."
                            : "Proyecto completado y listo para produccion."
                          }
                        </p>
                      </div>
                      <div className="text-8xl font-bold text-white/10">
                        .{String(index + 2 > 4 ? 1 : index + 2).padStart(2, "0")}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={scrollPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-lg border border-neutral-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {methodologySteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    selectedIndex === index ? "w-8 bg-blue-600" : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={scrollNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-lg border border-neutral-200"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
