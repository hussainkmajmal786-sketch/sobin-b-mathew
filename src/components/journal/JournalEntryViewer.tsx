"use client";

import { JournalEntry } from "@/data/journal";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export function JournalEntryViewer({ entry }: { entry: JournalEntry }) {
  return (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 md:p-12 max-w-4xl mx-auto pt-28"
    >
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-6">
          {entry.date}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
          {entry.title}
        </h1>
        <div className="text-sm font-medium text-silver/60">
          Category: {entry.category}
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-silver/80 prose-li:text-silver/80 prose-strong:text-foreground">
        <ReactMarkdown>{entry.content}</ReactMarkdown>
      </div>
    </motion.div>
  );
}
