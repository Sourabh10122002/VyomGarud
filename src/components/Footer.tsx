import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 sm:py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between md:gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-8 rounded-full bg-[var(--accent)]" />
            <span className="font-heading text-lg sm:text-xl">VyomGarud</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/70">
            <Link className="hover:text-white" href="/about">About</Link>
            <Link className="hover:text-white" href="/capabilities">Capabilities</Link>
            <Link className="hover:text-white" href="/products">Products</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <Link className="hover:text-white" href="/terms">Terms</Link>
          </nav>
          <div className="text-xs sm:text-sm text-white/50">© {new Date().getFullYear()} VyomGarud</div>
        </div>
      </div>
    </footer>
  );
}