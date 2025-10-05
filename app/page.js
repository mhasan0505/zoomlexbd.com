import CategorySection from "@/components/application/CategorySection";
import Footer from "@/components/application/Footer";
import Header from "@/components/application/Header";
import Slider from "@/components/application/Slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      price: "$49.99",
      image: "/Hero/hero_section.png",
      category: "shirts",
    },
    {
      id: 2,
      name: "Classic Chino Pants",
      price: "$69.99",
      image: "/Hero/hero_section.png",
      category: "pants",
    },
    {
      id: 3,
      name: "Comfort Boxers Pack",
      price: "$24.99",
      image: "/Hero/hero_section.png",
      category: "boxers",
    },
    {
      id: 4,
      name: "Leather Belt",
      price: "$39.99",
      image: "/Hero/hero_section.png",
      category: "accessories",
    },
  ];

  const categories = [
    {
      name: "Shirts",
      href: "/products/shirts",
      image: "/api/placeholder/250/300",
    },
    {
      name: "Pants",
      href: "/products/pants",
      image: "/api/placeholder/250/300",
    },
    {
      name: "Boxers",
      href: "/products/boxers",
      image: "/api/placeholder/250/300",
    },
    {
      name: "Accessories",
      href: "/products/accessories",
      image: "/api/placeholder/250/300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />
      {/* Hero Section */}

      <Slider />
      {/* Categories Section */}

      <CategorySection />

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked items that represent the best of our collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="bg-gray-100 h-64 rounded-t-xl flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-black">
                      {product.price}
                    </p>
                    <Button className="w-full mt-3 bg-black hover:bg-gray-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            About Zoomlex BD
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Founded with a vision to redefine men&apos;s fashion in Bangladesh,
            Zoomlex BD combines contemporary design with traditional
            craftsmanship. We believe that every man deserves to feel confident
            and comfortable in what he wears.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable shipping across Bangladesh
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Always here to help with your fashion needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
