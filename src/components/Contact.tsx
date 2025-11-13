"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
              <Image
                src="https://loremflickr.com/1000/700/drone,operators"
                alt="Ground control operations"
                width={1000}
                height={700}
                className="object-cover"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-white/70">
              Have a mission requirement? Let’s talk. Email
              {" "}
              <a className="text-[var(--accent)] hover:underline" href="mailto:contact@vyomgarud.com">
                contact@vyomgarud.com
              </a>
              {" "}or use the form.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Name"
                className="rounded-md border border-white/10 bg-[#0b0e13] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="rounded-md border border-white/10 bg-[#0b0e13] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
            <textarea
              required
              placeholder="Message"
              rows={4}
              className="w-full rounded-md border border-white/10 bg-[#0b0e13] px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center rounded-md bg-[var(--accent)] px-5 font-medium text-black hover:brightness-110"
            >
              {sent ? "Message queued" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}