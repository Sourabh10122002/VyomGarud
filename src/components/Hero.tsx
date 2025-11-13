"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-10 md:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col justify-center space-y-6"
          >
            <h1 className="font-heading text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              VyomGarud
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              Military-grade UAV systems built for precision, reliability, and advanced
              autonomy. Engineered for mission-critical performance in the toughest
              environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center rounded-lg bg-[var(--accent)] px-6 font-medium text-black transition-transform hover:translate-y-[-2px] hover:brightness-110"
              >
                Talk to us
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex h-12 items-center rounded-lg border border-white/20 bg-black/30 px-6 font-medium text-white transition-colors hover:border-white/40"
              >
                View capabilities
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              <ul className="grid gap-2 text-white/70">
                <li>• BVLOS compliant operations</li>
                <li>• Modular payload bay</li>
                <li>• Rapid field deployment</li>
              </ul>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-white/20 p-4 rounded-lg text-center">
                  <p className="text-3xl font-semibold text-white/90">5000+</p>
                  <p className="text-xs text-white/60">Flight hours</p>
                </div>
                <div className="border border-white/20 p-4 rounded-lg text-center">
                  <p className="text-3xl font-semibold text-white/90">99.95%</p>
                  <p className="text-xs text-white/60">Uptime</p>
                </div>
                <div className="border border-white/20 p-4 rounded-lg text-center">
                  <p className="text-3xl font-semibold text-white/90">40+</p>
                  <p className="text-xs text-white/60">Deployments</p>
                </div>
                <div className="border border-white/20 p-4 rounded-lg text-center">
                  <p className="text-3xl font-semibold text-white/90">AES-2</p>
                  <p className="text-xs text-white/60">Secure links</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-full isolate overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e13] accent-gradient shadow-xl"
          >
            <Image
              src="https://loremflickr.com/1200/800/drone,image"
              alt="UAV in flight"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <svg
              viewBox="0 0 800 500"
              className="absolute inset-0 h-full w-full opacity-50"
              aria-hidden="true"
            >
              {/* Crosshair */}
              <circle cx="400" cy="250" r="140" fill="none" stroke="white" strokeOpacity="0.15" />
              <circle cx="400" cy="250" r="220" fill="none" stroke="white" strokeOpacity="0.1" />
              <line x1="0" y1="250" x2="800" y2="250" stroke="white" strokeOpacity="0.07" />
              <line x1="400" y1="0" x2="400" y2="500" stroke="white" strokeOpacity="0.07" />
              {/* Accent arc */}
              <path
                d="M 520 250 A 120 120 0 0 1 400 370"
                fill="none"
                stroke="#ff7b00"
                strokeOpacity="0.6"
                strokeWidth="2"
              />
            </svg>
            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-4">
                <span className="inline-block h-2 w-10 rounded-full bg-[var(--accent)]" />
                <p className="text-sm uppercase tracking-widest text-white/60">Mission Systems</p>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-white/80">Autonomy • ISR • GCS • Telemetry</p>
                <p className="text-white/60">MIL-STD tested • Redundant architecture</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}