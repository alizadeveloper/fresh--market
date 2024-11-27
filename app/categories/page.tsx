import { ProductCard } from "@/components/products/product-card";
import { categories, getProductsByCategory } from "@/lib/data/products";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="mb-8 text-3xl font-bold">Product Categories</h1>
      
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="mb-6 text-2xl font-semibold">{category}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {getProductsByCategory(category).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}