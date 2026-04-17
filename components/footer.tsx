"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Contacto", href: "#contacto" },
  ],
  services: [
    { name: "Automatización IoT", href: "#" },
    { name: "Análisis de Datos", href: "#" },
    { name: "Seguridad", href: "#" },
    { name: "Consultoría", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Phone, href: "#", label: "Phone" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold">Nuviio</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Transformando empresas con tecnología IoT de vanguardia.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-background/60 text-sm mb-4">
              Recibe las últimas novedades en IoT.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-background/10 rounded-full text-sm placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
              >
                <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Nuviio. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
