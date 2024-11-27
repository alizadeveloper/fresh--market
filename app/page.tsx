"use client";

import { ShoppingBasket, TrendingUp, Truck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.waterfront-properties.com/uploads/istock_000021867978medium-1_1698.jpg')",
        }}
      >
        <div className="container mx-auto px-6 py-32 bg-black/50 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Fresh Market at Your Doorstep
            </h1>
            <p className="mb-8 text-xl">
              Discover fresh, organic produce and artisanal goods delivered straight to your home.
              Quality you can trust, convenience you deserve.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Shop Now
              <ShoppingBasket className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Same Day Delivery</h3>
              <p className="text-muted-foreground">
                Order before 2 PM for same-day delivery to your doorstep
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                100% satisfaction guarantee on all our products
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <ShoppingBasket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Wide Selection</h3>
              <p className="text-muted-foreground">
                Thousands of products from local and international vendors
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
