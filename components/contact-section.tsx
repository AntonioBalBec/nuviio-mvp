"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contacto" className="py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Comencemos tu{" "}
            <span className="text-primary">Proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para transformar tu empresa con IoT? Contáctanos y hagamos realidad tu visión.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card text-card-foreground rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-muted rounded-xl border-0 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Map Card */}
            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop"
                alt="Ubicación"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                >
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                href="tel:+525512345678"
                whileHover={{ scale: 1.02 }}
                className="bg-foreground/5 rounded-2xl p-6 flex items-center gap-4 hover:bg-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">+52 55 1234 5678</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:hola@nuviio.com"
                whileHover={{ scale: 1.02 }}
                className="bg-foreground/5 rounded-2xl p-6 flex items-center gap-4 hover:bg-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hola@nuviio.com</p>
                </div>
              </motion.a>
            </div>

            {/* Address Card */}
            <div className="bg-foreground/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Oficina Principal</p>
                  <p className="font-medium">Ciudad de México, México</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Av. Paseo de la Reforma 250, Juárez, 06600
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
