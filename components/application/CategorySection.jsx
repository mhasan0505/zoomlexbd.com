import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shirt, Briefcase, Package, Sparkles } from 'lucide-react'

const CategorySection = () => {
  const categories = [
    {
      name: 'Shirts',
      href: '/shop/shirts',
      icon: Shirt,
      description: 'Premium quality shirts',
      count: '120+ items'
    },
    {
      name: 'Formal Wear',
      href: '/shop/formal',
      icon: Briefcase,
      description: 'Professional attire',
      count: '85+ items'
    },
    {
      name: 'Casual Wear',
      href: '/shop/casual',
      icon: Package,
      description: 'Everyday essentials',
      count: '200+ items'
    },
    {
      name: 'Accessories',
      href: '/shop/accessories',
      icon: Sparkles,
      description: 'Complete your look',
      count: '50+ items'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Package className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Shop by
            <span className="font-semibold text-accent ml-3">Category</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Discover our carefully curated collection designed for the modern gentleman
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link key={index} href={category.href} className="group">
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/20 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    {/* Floating accent dot */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-accent transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {category.count}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300"></div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors duration-300 group"
          >
            View All Collections
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategorySection