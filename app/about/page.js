import React from 'react';
import { Users, Award, Heart, Truck, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-medium">
                  About
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-accent">Zoomlexbd</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Crafting premium fashion experiences with quality, style, and
              comfort at the heart of everything we do.
            </p>
            <div className="flex justify-center space-x-8 text-sm md:text-base text-gray-300">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-accent" />
                <span>Customer First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-accent" />
                <span>5-Star Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a passion for exceptional fashion, Zoomlexbd began
                as a vision to bring premium quality clothing to fashion
                enthusiasts across Bangladesh. We believe that great style
                shouldn&apos;t be a luxury – it should be accessible to
                everyone.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From our humble beginnings to becoming a trusted name in
                fashion, we&apos;ve maintained our commitment to quality
                craftsmanship, innovative designs, and customer satisfaction.
                Every piece in our collection tells a story of dedication and
                attention to detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-black text-white px-4 py-2 rounded-full">
                  <span className="font-semibold">Est. 2020</span>
                </div>
                <div className="bg-accent text-white px-4 py-2 rounded-full">
                  <span className="font-semibold">
                    10,000+ Happy Customers
                  </span>
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-full">
                  <span className="font-semibold">
                    500+ Products
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <Users className="w-24 h-24 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Our Team
                  </h3>
                  <p className="text-gray-700">
                    Passionate professionals dedicated to your style
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our
              commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-accent">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product undergoes rigorous
                quality checks to ensure it meets our high standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-accent">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Customer Care
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We&apos;re here to provide
                exceptional service and support at every step of your journey.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-accent">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly evolve our designs and processes to bring you the
                latest trends and timeless classics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-accent">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency,
                reliability, and consistent delivery of our promises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <Truck className="w-24 h-24 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-700">
                    Quick and reliable shipping across Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Why Choose Zoomlexbd?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Premium Materials
                    </h3>
                    <p className="text-gray-600">
                      We source only the finest fabrics and materials to ensure
                      comfort and durability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Expert Craftsmanship
                    </h3>
                    <p className="text-gray-600">
                      Every piece is carefully crafted by skilled artisans with
                      attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Affordable Luxury
                    </h3>
                    <p className="text-gray-600">
                      High-quality fashion at prices that won&apos;t break the
                      bank.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Easy Returns
                    </h3>
                    <p className="text-gray-600">
                      30-day hassle-free return policy for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              The trust and satisfaction of our customers drive us forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">10K+</div>
              <div className="text-lg text-gray-300">Happy Customers</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">500+</div>
              <div className="text-lg text-gray-300">Products</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">98%</div>
              <div className="text-lg text-gray-300">Satisfaction Rate</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">24/7</div>
              <div className="text-lg text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Experience Zoomlexbd?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust us for their fashion
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;