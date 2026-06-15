"use client";

import { JournalEntry } from "@/data/journal";
import { cn } from "@/lib/utils";

export function JournalSidebar({
  entries,
  activeId,
  onSelect
}: {
  entries: JournalEntry[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="w-full md:w-80 border-r border-glass-border bg-background/50 h-auto md:h-screen md:sticky md:top-0 overflow-y-auto p-6 flex flex-col md:pt-28">
      <h3 className="text-xl font-bold mb-6 text-foreground tracking-tight">PM VIKAS Journal</h3>
      <div className="space-y-3">
        {entries.map((entry) => (
          <button
            key={entry.id}
            onClick={() => onSelect(entry.id)}
            className={cn(
              "w-full text-left p-4 rounded-2xl transition-all duration-300 border",
              activeId === entry.id
                ? "bg-primary/10 border-primary/30 text-foreground shadow-[0_0_15px_rgba(41,151,255,0.1)]"
                : "bg-transparent border-transparent text-silver hover:bg-glass hover:text-foreground"
            )}
          >
            <div className="text-xs font-semibold mb-2 opacity-70 uppercase tracking-wider text-primary">{entry.date}</div>
            <div className="font-medium text-sm leading-tight mb-3">{entry.title}</div>
            <div className="text-xs px-2 py-1 rounded-md bg-glass border border-glass-border inline-block text-silver">{entry.category}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
