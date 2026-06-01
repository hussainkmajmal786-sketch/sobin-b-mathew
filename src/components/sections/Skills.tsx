"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Core Skills",
    items: [
      { name: "Electronics Engineering", level: 90 },
      { name: "Embedded Systems", level: 85 },
      { name: "IoT Development", level: 88 },
      { name: "Microcontrollers", level: 92 },
      { name: "Arduino / ESP32", level: 95 },
      { name: "Sensor Integration", level: 85 },
    ]
  },
  {
    title: "Software Skills",
    items: [
      { name: "C Programming", level: 88 },
      { name: "Python", level: 80 },
      { name: "JavaScript / React", level: 75 },
      { name: "HTML / CSS", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Git", level: 85 },
    ]
  },
  {
    title: "Future Interests",
    items: [
      { name: "Artificial Intelligence", level: 70 },
      { name: "Edge Computing", level: 75 },
      { name: "Smart Cities", level: 80 },
      { name: "Robotics", level: 85 },
      { name: "Industry 4.0", level: 90 },
      { name: "Wearable Technology", level: 88 },
    ]
  }
];

function SkillGroup({ category, delay }: { category: typeof skillCategories[0], delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass p-8 rounded-3xl"
    >
      <h3 className="text-2xl font-bold text-foreground mb-8">{category.title}</h3>
      <div className="space-y-6">
        {category.items.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-silver/90">{skill.name}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: delay + index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-silver/80">
            A blend of hardware expertise and software proficiency, tailored for creating intelligent, connected systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <SkillGroup key={category.title} category={category} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
