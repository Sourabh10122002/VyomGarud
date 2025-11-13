"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Autonomous Flight Stack",
    blurb: "Redundant control, multi-sensor fusion, dynamic mission planning.",
    tags: "drone,autonomy-stack",
  },
  {
    title: "ISR Platforms",
    blurb: "EO/IR payloads, stabilized gimbals, real-time intelligence feeds.",
    tags: "drone,reconnaissance",
  },
  {
    title: "Ground Control Station",
    blurb: "Operator-first UI, secure links, resilient command and telemetry.",
    tags: "drone,ground-control",
  },
  {
    title: "Secure Comms & Telemetry",
    blurb: "Encrypted links, adaptive bandwidth, long-range reliability.",
    tags: "drone,signal",
  },
  {
    title: "AI Target Recognition",
    blurb: "Onboard ML for detection, tracking, and classification.",
    tags: "drone,ai",
  },
  {
    title: "Swarm Coordination",
    blurb: "Multi-vehicle formation, cooperative tasking, deconfliction.",
    tags: "drone,swarm",
  },
  {
    title: "BVLOS & Compliance",
    blurb: "Regulatory-ready systems with geofencing and failsafes.",
    tags: "drone,compliance",
  },
  {
    title: "Payload Integration",
    blurb: "Modular EO/IR, LiDAR, comms, and special mission packages.",
    tags: "drone,payload",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0e13] p-6 shadow-md"
            >
              <div className="absolute inset-0 bg-grid opacity-10" />
              <div className="relative z-10">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`https://loremflickr.com/600/360/${item.tags}`}
                    alt={item.title}
                    width={600}
                    height={360}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-8 rounded-full bg-[var(--accent)] transition-all group-hover:w-10" />
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-white/70">{item.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}