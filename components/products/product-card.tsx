import { Card } from "@/components/ui/card";
import { Product } from "@/lib/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <p className="mt-2 font-bold text-primary">${product.price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  );
}