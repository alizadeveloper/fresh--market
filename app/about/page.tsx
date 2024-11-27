export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">About FreshMarket</h1>
      
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
          <p className="mb-6 text-muted-foreground">
            Founded in 2024, FreshMarket began with a simple mission: to make fresh,
            organic produce accessible to everyone. We partner with local farmers and
            artisanal producers to bring you the highest quality products while
            supporting sustainable agriculture.
          </p>
          <p className="text-muted-foreground">
            Today, we serve thousands of customers, delivering fresh produce and
            artisanal goods directly to their doorsteps. Our commitment to quality,
            sustainability, and customer satisfaction remains at the heart of
            everything we do.
          </p>
        </div>
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
            alt="Organic farming"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-semibold">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-card p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">Quality</h3>
            <p className="text-muted-foreground">
              We carefully select each product to ensure it meets our high standards
              of freshness and quality.
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">Sustainability</h3>
            <p className="text-muted-foreground">
              We support sustainable farming practices and work to minimize our
              environmental impact.
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">Community</h3>
            <p className="text-muted-foreground">
              We believe in supporting local farmers and producers, helping to build
              stronger communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}