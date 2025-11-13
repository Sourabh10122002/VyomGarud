"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Reliability and ISR performance exceeded expectations during extended operations.",
    author: "Group Captain R.",
    role: "Mission Lead",
    company: "Air Wing",
    imageUrl: "https://loremflickr.com/160/160/drone,airborne",
  },
  {
    quote:
      "Ground control UI is operator-first. Training time dropped by half.",
    author: "A. Verma",
    role: "GCS Supervisor",
    company: "Signals Unit",
    imageUrl: "https://loremflickr.com/160/160/drone,operators",
  },
  {
    quote:
      "Secure links held up in challenging terrain. Telemetry remained consistent.",
    author: "Lt. Col. M.",
    role: "Field Ops",
    company: "Northern Command",
    imageUrl: "https://loremflickr.com/160/160/drone,signal",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const goPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Testimonials
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Previous"
              className="rounded-md border border-white/20 px-3 py-2 text-white/80 hover:text-white"
              onClick={goPrev}
            >
              ◀
            </button>
            <button
              aria-label="Next"
              className="rounded-md border border-white/20 px-3 py-2 text-white/80 hover:text-white"
              onClick={goNext}
            >
              ▶
            </button>
          </div>
        </div>

        <div
          className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0b0e13] p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid items-center gap-6 md:grid-cols-[160px_1fr]">
                <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={testimonials[index].imageUrl}
                    alt="Drone imagery"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-white/85">
                    “{testimonials[index].quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-white/60">
                    <span className="inline-block h-1.5 w-8 rounded-full bg-[var(--accent)]" />
                    <p className="text-sm">
                      <span className="text-white/85 font-medium">{testimonials[index].author}</span>
                      {testimonials[index].role ? `, ${testimonials[index].role}` : ""}
                      {testimonials[index].company ? ` — ${testimonials[index].company}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile controls */}
          <div className="mt-6 flex gap-3 md:hidden">
            <button
              aria-label="Previous"
              className="flex-1 rounded-md border border-white/20 px-3 py-2 text-white/80 hover:text-white"
              onClick={goPrev}
            >
              Previous
            </button>
            <button
              aria-label="Next"
              className="flex-1 rounded-md border border-white/20 px-3 py-2 text-white/80 hover:text-white"
              onClick={goNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}