"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, Shield, Wifi, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Cpu,
    title: "Automatización Inteligente",
    description: "Diseñamos sistemas automatizados intuitivos que optimizan tus procesos operativos con tecnología IoT de vanguardia.",
    tags: ["#Automatización", "#IoT"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Transformamos datos en tiempo real en insights accionables para impulsar decisiones estratégicas.",
    tags: ["#DataAnalytics", "#Insights"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    icon: Shield,
    title: "Seguridad Conectada",
    description: "Implementamos soluciones de seguridad robustas para proteger tu infraestructura IoT.",
    tags: ["#Security", "#Protection"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "04",
    icon: Wifi,
    title: "Conectividad Total",
    description: "Creamos redes de dispositivos interconectados que funcionan en perfecta armonía.",
    tags: ["#Connectivity", "#Network"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Nuestros Servicios
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              De la Visión al{" "}
              <span className="text-primary">Valor Medible</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-md leading-relaxed"
          >
            Desde soluciones innovadoras hasta plataformas de alto rendimiento, 
            nuestros números hablan por sí solos.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`relative group rounded-3xl overflow-hidden ${
                index === 0 ? "bg-card text-card-foreground" : "bg-foreground/5"
              }`}
            >
              <div className="p-8 flex flex-col h-full min-h-[400px]">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
                    }`}>
                      <span className="font-bold text-lg">{service.number}</span>
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${
                    index === 0 ? "bg-primary" : "bg-primary/50"
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6">
                  {/* Image */}
                  <div className="lg:w-1/2 aspect-video lg:aspect-auto rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <p className={`leading-relaxed ${
                      index === 0 ? "text-muted-foreground" : "text-secondary-foreground/70"
                    }`}>
                      {service.description}
                    </p>
                    
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-3 py-1 rounded-full ${
                              index === 0 
                                ? "bg-muted text-muted-foreground" 
                                : "bg-foreground/10 text-secondary-foreground/70"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                          index === 0
                            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                            : "bg-card text-card-foreground hover:bg-card/90"
                        }`}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        VER MÁS
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
