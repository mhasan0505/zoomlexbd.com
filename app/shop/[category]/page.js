import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  // These would typically come from your database or CMS
  const categories = ['shirts', 'formal', 'casual', 'accessories'];

  return categories.map((category) => ({
    category: category,
  }));
}

const CategoryPage = ({ params }) => {
  const { category } = params;

  // This would be fetched from your database based on the category
  const products = [
    { id: '1', name: 'Product 1', price: 29.99, image: '/Icons/shirt.png' },
    { id: '2', name: 'Product 2', price: 39.99, image: '/Icons/shirt.png' },
    { id: '3', name: 'Product 3', price: 49.99, image: '/Icons/shirt.png' },
    { id: '4', name: 'Product 4', price: 59.99, image: '/Icons/shirt.png' },
  ];

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
                <BreadcrumbPage>{categoryTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mt-4 text-gray-900">{categoryTitle}</h1>
          <p className="text-gray-600 mt-2">Browse our collection of {categoryTitle.toLowerCase()}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/shop/${category}/${product.id}`} key={product.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={256}
                    height={192}
                    className="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-accent font-semibold">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;