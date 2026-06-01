"use client";

import { motion } from "framer-motion";
import NetworkBackground from "@/components/canvas/NetworkBackground";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <NetworkBackground />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-silver">Engineering the Future</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
        >
          Sobin B Mathew
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-silver max-w-4xl mb-8 font-light leading-relaxed"
        >
          <span className="text-foreground font-medium">Electronics & Communication Engineering Student</span>{" "}
          <span className="opacity-50">•</span> IoT Assistant Intern @ IIIT Kottayam <span className="opacity-50">•</span> PM VIKAS Program
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-silver/80 max-w-2xl mb-12"
        >
          Passionate about Embedded Systems, IoT, AI-Powered Hardware, Smart Devices, and Next-Generation Technology Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#experience"
            className="group flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:scale-105 transition-all w-full sm:w-auto"
          >
            Explore Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            className="group flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 border border-white/10 text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
    </section>
  );
}
