import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Precision. Reliability. Autonomy.
            </h2>
            <p className="mt-4 text-lg text-white/80">
              VyomGarud engineers high-reliability unmanned aerial systems designed for mission
              success. From autonomous flight control to secure communications and ground control,
              we deliver end-to-end platforms built to exacting, military-grade standards.
            </p>
            <ul className="mt-6 grid gap-2 text-white/70">
              <li>• Redundant autonomy stack with sensor fusion</li>
              <li>• Stabilized ISR payloads and real-time intelligence</li>
              <li>• Operator-first Ground Control Stations</li>
              <li>• Secure, long-range communications</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              src="https://loremflickr.com/1000/800/drone,manufacturing"
              alt="Aerospace manufacturing"
              width={1000}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}