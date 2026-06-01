"use client";

import { useState } from "react";
import { journalEntries } from "@/data/journal";
import { JournalSidebar } from "@/components/journal/JournalSidebar";
import { JournalEntryViewer } from "@/components/journal/JournalEntryViewer";
import Navbar from "@/components/ui/Navbar";

export default function JournalPage() {
  const [activeId, setActiveId] = useState(journalEntries[0].id);
  const activeEntry = journalEntries.find((e) => e.id === activeId) || journalEntries[0];

  return (
    <main className="relative bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row relative z-10">
        <JournalSidebar
          entries={journalEntries}
          activeId={activeId}
          onSelect={setActiveId}
        />
        
        <div className="flex-1 w-full overflow-y-auto min-h-screen">
          <JournalEntryViewer entry={activeEntry} />
        </div>
      </div>
    </main>
  );
}
