import Products from "@/components/Products";

export default function ProductsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl font-semibold">Products</h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Explore our UAV platforms engineered for different mission profiles.
          </p>
        </div>
      </section>
      <Products />
    </div>
  );
}