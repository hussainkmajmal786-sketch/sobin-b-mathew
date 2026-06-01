"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.2 5.2 0 0 0 19 5.31a5.2 5.2 0 0 0-.5-3.31s-1.3-.4-4.2 1.5a14.2 14.2 0 0 0-8 0C3.4 1.6 2.1 2 2.1 2a5.2 5.2 0 0 0-.5 3.31 5.2 5.2 0 0 0 1.5 2.5c0 5.75 3.35 6.78 6.5 7.15A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const projects = [
  {
    title: "Smart Home Automation",
    description: "Control home appliances securely from anywhere using IoT architectures and real-time cloud connectivity. Features include remote scheduling, energy usage analytics, and voice assistant integration.",
    stack: ["ESP32", "MQTT", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Agriculture Monitoring",
    description: "A comprehensive sensing array providing real-time monitoring of soil moisture, temperature, and humidity. Implements automated irrigation logic based on precision sensor data.",
    stack: ["Arduino", "Sensors", "IoT Cloud", "C++"],
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0a3864?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "IoT Health Monitoring System",
    description: "Wearable sensor-driven patient monitoring platform that tracks vital signs (heart rate, SpO2, body temperature) and alerts healthcare providers during critical anomalies.",
    stack: ["Raspberry Pi", "Python", "Biometric Sensors"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Energy Management",
    description: "Intelligent energy tracking and optimization solution to monitor power consumption across multiple nodes. Identifies inefficiencies and suggests energy-saving automation routines.",
    stack: ["ESP8266", "InfluxDB", "Grafana", "C"],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-silver/80">
              Showcasing practical implementations of embedded systems, sensor networks, and smart automation algorithms.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/10"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-silver/80 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-silver">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors">
                    Live Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
                    <GithubIcon className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
