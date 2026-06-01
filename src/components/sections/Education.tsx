"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Academic <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-silver/80">
            A solid foundation in Electronics and Communication Engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform md:-translate-x-1/2" />

          {/* Education Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-[7px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(41,151,255,0.5)] z-10 group-hover:scale-150 transition-transform duration-300" />
            
            <div className="ml-8 md:ml-0 md:w-1/2 md:px-12 w-full">
              <div className="glass p-8 rounded-3xl group-hover:bg-white/[0.06] transition-colors">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  2021 - 2025
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">College of Engineering Kidangoor</h3>
                <h4 className="text-lg text-primary mb-4 font-medium">Bachelor of Technology</h4>
                <p className="text-silver/90 mb-6">
                  Specializing in Electronics & Communication Engineering.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs font-medium text-silver bg-white/5 px-2 py-1 rounded">IoT Development</span>
                  <span className="text-xs font-medium text-silver bg-white/5 px-2 py-1 rounded">Embedded Systems</span>
                  <span className="text-xs font-medium text-silver bg-white/5 px-2 py-1 rounded">Smart Device Design</span>
                  <span className="text-xs font-medium text-silver bg-white/5 px-2 py-1 rounded">AI Integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
