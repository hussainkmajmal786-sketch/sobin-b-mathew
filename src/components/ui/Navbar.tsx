"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-xl font-bold tracking-tighter">
        SBM<span className="text-primary">.</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-silver hover:text-foreground transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <a
          href="/#contact"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors glass hover:bg-black/5 dark:hover:bg-white/10 text-foreground rounded-full border border-black/10 dark:border-white/10"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
