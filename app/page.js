import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/application/Header";

const Page = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      price: "$49.99",
      image: "/api/placeholder/300/400",
      category: "shirts"
    },
    {
      id: 2,
      name: "Classic Chino Pants",
      price: "$69.99",
      image: "/api/placeholder/300/400",
      category: "pants"
    },
    {
      id: 3,
      name: "Comfort Boxers Pack",
      price: "$24.99",
      image: "/api/placeholder/300/400",
      category: "boxers"
    },
    {
      id: 4,
      name: "Leather Belt",
      price: "$39.99",
      image: "/api/placeholder/300/400",
      category: "accessories"
    }
  ];

  const categories = [
    { name: "Shirts", href: "/products/shirts", image: "/api/placeholder/250/300" },
    { name: "Pants", href: "/products/pants", image: "/api/placeholder/250/300" },
    { name: "Boxers", href: "/products/boxers", image: "/api/placeholder/250/300" },
    { name: "Accessories", href: "/products/accessories", image: "/api/placeholder/250/300" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Elevate Your
                <span className="block text-tomato-600">Style</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover premium men&apos;s fashion at Zoomlex BD. From classic shirts to comfortable boxers,
                we offer quality pieces that define modern masculinity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-gray-800 text-white px-8">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8">
                  View Collection
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">ZBD</span>
                  </div>
                  <p className="text-gray-600">Premium Men&apos;s Fashion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collection of men&apos;s essentials
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-0">
                    <div className="bg-gray-100 h-48 rounded-t-xl flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-400">{category.name[0]}</span>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked items that represent the best of our collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="bg-gray-100 h-64 rounded-t-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">IMG</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-black">{product.price}</p>
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
          <h2 className="text-3xl font-bold text-black mb-6">About Zoomlex BD</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Founded with a vision to redefine men&apos;s fashion in Bangladesh, Zoomlex BD combines
            contemporary design with traditional craftsmanship. We believe that every man deserves
            to feel confident and comfortable in what he wears.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Quality Assured</h3>
              <p className="text-gray-600">Premium materials and expert craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping across Bangladesh</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help with your fashion needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/zoomlex_logo.jpg"
                  alt="Zoomlex BD"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">Zoomlex BD</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium men&apos;s fashion for the modern gentleman.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products/shirts" className="hover:text-white transition-colors">Shirts</Link></li>
                <li><Link href="/products/pants" className="hover:text-white transition-colors">Pants</Link></li>
                <li><Link href="/products/boxers" className="hover:text-white transition-colors">Boxers</Link></li>
                <li><Link href="/products/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zoomlex BD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
