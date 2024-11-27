"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/lib/data/products";
import { ShoppingCart } from "lucide-react";
import { notFound } from "next/navigation";

// Dummy Product Data
const productList = [
  {
    id: 1,
    name: "Fresh Apples",
    description: "Crisp and juicy apples, freshly picked.",
    price: 3.5,
    image: "/images/apples.jpg",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Fresh Orange",
    description: "Rich in vitamin C and flavor.",
    price: 2.99,
    image: "/images/oranges.jpg",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Organic Bananas",
    description: "Rich in potassium and flavor.",
    price: 2.99,
    image: "/images/bananas.jpg",
    category: "Fruits",
  },
  {
    id: 4,
    name: "Carrots",
    description: "Fresh, crunchy carrots for healthy snacks.",
    price: 1.99,
    image: "/images/carrots.jpg",
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Broccoli",
    description: "High-quality broccoli, perfect for meals.",
    price: 2.5,
    image: "/images/broccoli.jpg",
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Tomatoes",
    description: "Ripe and juicy tomatoes, perfect for salads.",
    price: 2.0,
    image: "/images/tomatoes.jpg",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Grapes",
    description: "Sweet and seedless grapes for snacks.",
    price: 4.5,
    image: "/images/grapes.jpg",
    category: "Fruits",
  },
  {
    id: 8,
    name: "Spinach",
    description: "Fresh organic spinach leaves.",
    price: 1.5,
    image: "/images/spinach.jpg",
    category: "Vegetables",
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productList.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Main Product Details */}
      <Card className="overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
            <p className="mb-4 text-lg text-muted-foreground">
              {product.description}
            </p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Product Details</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Category: {product.category}</li>
                <li>Freshly sourced from local farms</li>
                <li>Available for same-day delivery</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
            </div>
            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
