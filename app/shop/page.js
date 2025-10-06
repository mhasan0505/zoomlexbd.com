import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import CategorySection from '@/components/application/CategorySection';

const ShopPage = () => {
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
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold mt-4 text-gray-900">Shop</h1>
          <p className="text-gray-600 mt-2">Browse our collections</p>
        </div>
      </div>

      <CategorySection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 mb-8">Discover our most popular items</p>
        </div>

        {/* Featured products would go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* This would be populated with actual featured products */}
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Featured Product 1</p>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Featured Product 2</p>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Featured Product 3</p>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Featured Product 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;