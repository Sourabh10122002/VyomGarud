import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl font-semibold">About VyomGarud</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            We build mission-ready UAV systems with uncompromising reliability and performance.
          </p>
        </div>
      </section>
      <About />
    </div>
  );
}