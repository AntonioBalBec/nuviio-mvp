"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Nodo Cero", href: "#nodo-cero" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Metodologia", href: "#metodologia" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Full width transparent navbar - shown when not scrolled */}
        <motion.nav
          initial={false}
          animate={{
            opacity: isScrolled ? 0 : 1,
            pointerEvents: isScrolled ? "none" : "auto",
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 px-6 lg:px-12 py-6"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 border-2 border-white/80 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/80 rounded-full" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Nuviio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-white text-neutral-900 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Contactar
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.nav>

        {/* Pill navbar - shown when scrolled */}
        <motion.div
          initial={false}
          animate={{
            y: isScrolled ? 0 : -20,
            opacity: isScrolled ? 1 : 0,
            pointerEvents: isScrolled ? "auto" : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="px-4 py-4"
        >
          <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-2.5 bg-neutral-900/95 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
              >
                <div className="w-5 h-5 border-2 border-neutral-800 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center px-5 py-2 bg-white text-neutral-900 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors"
            >
              Contactar
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-4 left-4 right-4 z-50 bg-neutral-900 rounded-3xl p-6 shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <span className="text-xl font-bold text-white">Nuviio</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-4 text-lg font-medium text-white hover:bg-white/10 rounded-2xl transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contacto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-6 py-4 bg-white text-neutral-900 rounded-full text-base font-semibold"
                >
                  Contactar
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
