import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  // These would typically come from your database or CMS
  const products = [
    { id: "1", category: "shirts" },
    { id: "2", category: "shirts" },
    { id: "3", category: "formal" },
    { id: "4", category: "casual" },
  ];

  return products.map((product) => ({
    category: product.category,
    productId: product.id,
  }));
}

const ProductPage = ({ params }) => {
  const { category, productId } = params;

  // This would be fetched from your database based on the productId
  const product = {
    id: productId,
    name: `Premium ${
      category.charAt(0).toUpperCase() + category.slice(1)
    } Product ${productId}`,
    price: 49.99,
    description:
      "This premium product is crafted with the finest materials to ensure comfort and durability. Perfect for any occasion, this item will be a great addition to your wardrobe.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Burgundy"],
    images: ["/Icons/shirt.png", "/Icons/shirt.png", "/Icons/shirt.png"],
    features: [
      "Premium quality fabric",
      "Comfortable fit",
      "Durable construction",
      "Easy to care for",
    ],
  };

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/shop/${category}`}>
                  {categoryTitle}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={256}
                height={192}
                className="w-full h-auto object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={128}
                    height={96}
                    className="w-full h-auto object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-semibold text-accent mt-2">
              ${product.price}
            </p>

            <div className="mt-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-accent hover:text-white hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-accent hover:text-white hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="mt-2 flex items-center">
                <button className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  value="1"
                  className="w-16 text-center border-t border-b border-gray-300 py-2"
                  readOnly
                />
                <button className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-8">
              <button className="w-full bg-accent text-white py-3 px-6 rounded-md font-medium hover:bg-accent/90 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Features</h3>
              <ul className="mt-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
