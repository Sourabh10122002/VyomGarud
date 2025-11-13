import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
