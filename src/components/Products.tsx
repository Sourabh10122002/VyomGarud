"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "VG-Scout",
    desc: "Lightweight ISR platform with endurance and stabilized EO payloads.",
    icon: "/globe.svg",
    tags: "drone,lightweight",
  },
  {
    name: "VG-Guardian",
    desc: "Ruggedized multi-mission UAV with redundant autonomy stack.",
    icon: "/window.svg",
    tags: "drone,rugged",
  },
  {
    name: "VG-Carrier",
    desc: "Medium-lift logistics platform with modular bay and secure links.",
    icon: "/file.svg",
    tags: "drone,carrier",
  },
  {
    name: "VG-Swift",
    desc: "Agile tactical UAV for rapid deployment and short-range ops.",
    icon: "/vercel.svg",
    tags: "drone,agile",
  },
  {
    name: "VG-Titan",
    desc: "Heavy-lift endurance platform for industrial logistics and resupply.",
    icon: "/next.svg",
    tags: "drone,heavy",
  },
  {
    name: "VG-Horizon",
    desc: "Long-range mapping UAV with RTK GNSS and high-res imagery.",
    icon: "/globe.svg",
    tags: "drone,mapping",
  },
  {
    name: "VG-Stealth",
    desc: "Low-observable reconnaissance platform with quiet propulsion.",
    icon: "/window.svg",
    tags: "drone,stealth",
  },
  {
    name: "VG-Atlas",
    desc: "Multi-role cargo and ISR platform with modular architecture.",
    icon: "/file.svg",
    tags: "drone,cargo",
  },
];

export default function Products() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
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
                    src={`https://loremflickr.com/600/360/${p.tags}`}
                    alt={p.name}
                    width={600}
                    height={360}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-8 rounded-full bg-[var(--accent)] transition-all group-hover:w-10" />
                  <h3 className="font-heading text-lg font-semibold">{p.name}</h3>
                </div>
                <p className="mt-3 text-white/70">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <Image src={p.icon} alt="icon" width={20} height={20} className="opacity-70" />
                  <a href="/contact" className="text-[var(--accent)] hover:underline">Request specs</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}