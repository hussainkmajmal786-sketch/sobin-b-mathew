"use client";

import { motion } from "framer-motion";
import { Cpu, Network, Zap, Settings, ShieldCheck, BarChart } from "lucide-react";

const highlights = [
  { icon: Network, title: "IoT System Design", desc: "Architecting end-to-end IoT solutions." },
  { icon: Cpu, title: "Sensor Networks", desc: "Integrating multi-sensor arrays for real-time data." },
  { icon: Settings, title: "Embedded Programming", desc: "Writing efficient firmware for microcontrollers." },
  { icon: Zap, title: "Smart Automation", desc: "Developing automated control systems." },
  { icon: BarChart, title: "Industry Exposure", desc: "Working with production-grade tech stacks." },
  { icon: ShieldCheck, title: "Real-world Applications", desc: "Building solutions that solve actual problems." },
];

export default function PMVikas() {
  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-silver uppercase tracking-wider">Internship Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            PM VIKAS <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-silver/80">
            A comprehensive dive into the world of Internet of Things, embedded engineering, and smart automation under the guidance of IIIT Kottayam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 rounded-3xl group hover:bg-white/[0.06] transition-colors relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-silver/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
