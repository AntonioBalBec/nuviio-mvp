"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Nodo Cero", href: "#nodo-cero" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Metodologia", href: "#metodologia" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Smooth interpolated values based on scroll position
  const scrollProgress = useTransform(scrollY, [0, 150], [0, 1]);
  
  // Background opacity and blur
  const bgOpacity = useTransform(scrollProgress, [0, 1], [0, 0.95]);
  const backdropBlur = useTransform(scrollProgress, [0, 1], [0, 20]);
  
  // Container width and padding - starts full width, shrinks to pill
  const containerMaxWidth = useTransform(scrollProgress, [0, 1], ["1280px", "720px"]);
  const innerPaddingX = useTransform(scrollProgress, [0, 1], ["32px", "20px"]);
  const innerPaddingY = useTransform(scrollProgress, [0, 1], ["16px", "10px"]);
  
  // Border radius animation
  const borderRadius = useTransform(scrollProgress, [0, 1], ["0px", "9999px"]);
  
  // Border and shadow
  const borderOpacity = useTransform(scrollProgress, [0, 1], [0, 0.1]);
  const shadowOpacity = useTransform(scrollProgress, [0, 1], [0, 0.2]);
  
  // Logo size
  const logoSize = useTransform(scrollProgress, [0, 1], [40, 36]);
  const logoInnerSize = useTransform(scrollProgress, [0, 1], [12, 8]);
  
  // Text color - white at start, dark when scrolled
  const textColor = useTransform(scrollProgress, [0, 1], ["rgb(255,255,255)", "rgb(10,10,10)"]);
  const textColorMuted = useTransform(scrollProgress, [0, 1], ["rgba(255,255,255,0.85)", "rgba(10,10,10,0.7)"]);
  
  // Button styles - white at start, dark when scrolled
  const buttonBg = useTransform(scrollProgress, [0, 1], ["rgb(255,255,255)", "rgb(10,10,10)"]);
  const buttonText = useTransform(scrollProgress, [0, 1], ["rgb(10,10,10)", "rgb(255,255,255)"]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-7xl mx-auto">
          <motion.nav
            style={{
              maxWidth: containerMaxWidth,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <motion.div
              style={{
                backgroundColor: useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`),
                backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
                borderRadius,
                paddingLeft: innerPaddingX,
                paddingRight: innerPaddingX,
                paddingTop: innerPaddingY,
                paddingBottom: innerPaddingY,
                borderColor: useTransform(borderOpacity, (v) => `rgba(0,0,0,${v})`),
                boxShadow: useTransform(shadowOpacity, (v) => `0 4px 30px rgba(0,0,0,${v})`),
              }}
              className="flex items-center justify-between border w-full"
            >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: logoSize,
                  height: logoSize,
                  borderWidth: 2,
                  borderColor: textColor,
                }}
              >
                <motion.div 
                  className="rounded-full"
                  style={{
                    width: logoInnerSize,
                    height: logoInnerSize,
                    backgroundColor: textColor,
                  }}
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold tracking-tight"
                style={{ color: textColor }}
              >
                Nuviio
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium transition-colors"
                  style={{ color: textColorMuted }}
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
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
              }}
            >
              Contactar
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-colors"
              style={{ color: textColor }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </motion.div>
          </motion.nav>
        </div>
      </header>

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
              className="fixed top-4 left-4 right-4 z-50 bg-white rounded-3xl p-6 shadow-2xl border border-neutral-200"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-10 h-10 border-2 border-neutral-900 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-neutral-900 rounded-full" />
                  </div>
                  <span className="text-xl font-bold text-neutral-900">Nuviio</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-900"
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
                    className="px-4 py-4 text-lg font-medium text-neutral-900 hover:bg-neutral-100 rounded-2xl transition-colors"
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
                  className="mt-4 inline-flex items-center justify-center px-6 py-4 bg-neutral-900 text-white rounded-full text-base font-semibold"
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
