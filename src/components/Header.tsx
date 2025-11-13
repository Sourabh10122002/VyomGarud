"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-8 rounded-full bg-[var(--accent)]" />
          <Link href="/" className="font-heading text-lg">VyomGarud</Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/about" className="text-white/70 hover:text-white">About</Link>
          <Link href="/capabilities" className="text-white/70 hover:text-white">Capabilities</Link>
          <Link href="/products" className="text-white/70 hover:text-white">Products</Link>
          <Link href="/contact" className="text-white/70 hover:text-white">Contact</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white/80 hover:text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-6 py-4 space-y-3 text-sm">
            <Link href="/about" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>About</Link>
            <Link href="/capabilities" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>Capabilities</Link>
            <Link href="/products" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/contact" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/privacy" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>Privacy</Link>
            <Link href="/terms" className="block text-white/80 hover:text-white" onClick={() => setOpen(false)}>Terms</Link>
          </nav>
        </div>
      )}
    </header>
  );
}