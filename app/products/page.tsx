import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/data/products";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}