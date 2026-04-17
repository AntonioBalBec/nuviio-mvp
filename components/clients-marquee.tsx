"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", icon: "T" },
  { name: "InnovateMX", icon: "I" },
  { name: "DataFlow", icon: "D" },
  { name: "CloudSync", icon: "C" },
  { name: "SmartSys", icon: "S" },
  { name: "IoTech", icon: "I" },
  { name: "NetWave", icon: "N" },
  { name: "Archin", icon: "A" },
];

export function ClientsMarquee() {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center justify-center w-40 h-16 bg-muted rounded-full px-6 hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-foreground font-semibold text-sm">{client.icon}</span>
                </div>
                <span className="text-foreground font-medium text-sm">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
