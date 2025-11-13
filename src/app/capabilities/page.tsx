import Capabilities from "@/components/Capabilities";
import Highlights from "@/components/Highlights";

export default function CapabilitiesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl font-semibold">Capabilities</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            From autonomous flight to secure communications, explore our core systems.
          </p>
        </div>
      </section>
      <Capabilities />
      <Highlights />
    </div>
  );
}