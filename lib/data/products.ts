export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80",
    category: "Fruits",
    description: "Fresh organic bananas sourced from sustainable farms.",
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    category: "Fruits",
    description: "Sweet and juicy strawberries picked at peak ripeness.",
  },
  {
    id: 3,
    name: "Organic Tomatoes",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
    category: "Vegetables",
    description: "Vine-ripened organic tomatoes perfect for salads and cooking.",
  },
  {
    id: 4,
    name: "Fresh Lettuce",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800&q=80",
    category: "Vegetables",
    description: "Crisp and fresh lettuce grown in our local greenhouses.",
  },
  {
    id: 5,
    name: "Organic Avocados",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
    category: "Fruits",
    description: "Perfectly ripe organic avocados ready to eat.",
  },
  {
    id: 6,
    name: "Fresh Carrots",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
    category: "Vegetables",
    description: "Sweet and crunchy carrots freshly harvested.",
  },
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}