"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15", suffix: "+", label: "Projects Completed" },
  { value: "20", suffix: "+", label: "Technologies Learned" },
  { value: "6", suffix: "mo", label: "Internship Experience" },
  { value: "1000", suffix: "+", label: "Learning Hours" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Engineering Ideas Into <span className="text-gradient-blue">Intelligent Systems</span>
            </h2>
            <div className="space-y-6 text-lg text-silver/90 leading-relaxed">
              <p>
                Sobin B Mathew is an Electronics and Communication Engineering student at College of Engineering Kidangoor.
              </p>
              <p>
                Currently serving as an IoT Assistant Intern at IIIT Kottayam through the PM VIKAS Program, he focuses on embedded systems, smart automation, IoT architectures, sensor integration, and future-ready technology solutions.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {['Embedded Systems', 'IoT Architecture', 'Smart Automation'].map((tag, i) => (
                <span key={tag} className="glass px-4 py-2 rounded-full text-sm font-medium text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass p-8 rounded-3xl flex flex-col justify-center border border-white/5 hover:bg-white/[0.06] transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tighter">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-silver">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
