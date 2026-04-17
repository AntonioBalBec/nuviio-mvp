"use client";

import { motion } from "framer-motion";
import { Twitter, Dribbble, Linkedin, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Carlos Mendoza",
    role: "CEO & Fundador",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "María González",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Luis Ramírez",
    role: "Director de Innovación",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop"
  },
];

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "100+", label: "Proyectos completados" },
  { value: "50+", label: "Clientes satisfechos" },
  { value: "24/7", label: "Soporte técnico" },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Social */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Conoce las Mentes{" "}
              <span className="block">Detrás del Trabajo</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-3"
          >
            {[Twitter, Dribbble, Linkedin].map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon className="w-5 h-5 text-foreground" />
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo Nuviio trabajando"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Team Avatars */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {team.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="w-12 h-12 rounded-full border-3 border-white overflow-hidden"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-foreground">+15 expertos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-8"
            >
              <p className="text-lg leading-relaxed">
                En <strong className="text-foreground">Nuviio</strong>, reunimos{" "}
                <span className="text-foreground font-medium">diseñadores, estrategas y creadores</span>{" "}
                <span className="text-muted-foreground">
                  para desarrollar experiencias digitales audaces y reflexivas, 
                  creadas con cuidado y curiosidad.
                </span>
              </p>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">+50 Proyectos</p>
                    <p className="text-xs text-muted-foreground">5 países</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-background rounded-2xl p-6"
                >
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Colaboración de equipo"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
              <div className="absolute inset-0 p-6 flex items-center justify-between">
                <div>
                  <p className="text-secondary-foreground/70 text-sm">Nuviio Facts</p>
                  <p className="text-2xl font-bold text-secondary-foreground mt-1">Innovación constante</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
