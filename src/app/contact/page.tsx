import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl font-semibold">Contact</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Share your mission requirements; we’ll recommend the right platform.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
}