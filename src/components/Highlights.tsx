export default function Highlights() {
  const features = [
    { title: "MIL-STD tested", desc: "Ruggedized systems proven in harsh environments." },
    { title: "End-to-end manufacturing", desc: "Tight control from design to deployment." },
    { title: "Modular payloads", desc: "Configure platforms for diverse mission needs." },
  ];

  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-[#0b0e13] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-6 rounded-full bg-[var(--accent)]" />
                <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}