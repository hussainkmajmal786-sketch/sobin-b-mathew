"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.2 5.2 0 0 0 19 5.31a5.2 5.2 0 0 0-.5-3.31s-1.3-.4-4.2 1.5a14.2 14.2 0 0 0-8 0C3.4 1.6 2.1 2 2.1 2a5.2 5.2 0 0 0-.5 3.31 5.2 5.2 0 0 0 1.5 2.5c0 5.75 3.35 6.78 6.5 7.15A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-silver/80"
          >
            Interested in collaboration or have an opportunity? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Contact Details</h3>
              
              <div className="space-y-6">
                <a href="mailto:sobinbmathew@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-silver group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-silver/80 mb-1">Email</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">sobinbmathew@example.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-silver group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-silver/80 mb-1">Phone</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-silver group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-silver/80 mb-1">Location</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">Kerala, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Social Profiles</h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-silver group-hover:text-[#0A66C2] transition-colors" />
                    <span className="font-medium text-foreground">LinkedIn</span>
                  </div>
                  <span className="text-sm text-silver/60 group-hover:text-foreground transition-colors">Connect &rarr;</span>
                </a>
                
                <a href="#" className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-silver group-hover:text-foreground transition-colors" />
                    <span className="font-medium text-foreground">GitHub</span>
                  </div>
                  <span className="text-sm text-silver/60 group-hover:text-foreground transition-colors">Follow &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
