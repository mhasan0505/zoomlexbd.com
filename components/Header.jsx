"use client";

import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  Search,
  ShoppingCart,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categories = [
    {
      name: "Shirts",
      subcategories: ["Casual Shirts", "Formal Shirts", "T-Shirts"],
    },
    {
      name: "Pants",
      subcategories: ["Jeans", "Chinos", "Formal Pants"],
    },
    {
      name: "Boxers",
      subcategories: ["Cotton Boxers", "Silk Boxers", "Sports Boxers"],
    },
    {
      name: "Accessories",
      subcategories: ["Belts", "Watches", "Wallets"],
    },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="/faq"
              className="text-white hover:text-blue-400 transition-colors"
            >
              FAQs
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/help"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Help
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/support"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Support
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Twitter size={16} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Youtube size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/zoomlex_logo.jpg"
                alt="Zoomlexbd Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h1 className="text-2xl font-bold text-gray-900">zoomlexbd</h1>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Heart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            {/* Categories Dropdown - Desktop */}
            <div className="hidden lg:block relative">
              <button
                className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 w-64 hover:bg-gray-700 transition-colors"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <span className="font-medium">Categories</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg z-50">
                  {categories.map((category, index) => (
                    <div key={index} className="relative group">
                      <Link
                        href={`/category/${category.name.toLowerCase()}`}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {category.name}
                        <ChevronDown
                          size={16}
                          className="transform -rotate-90"
                        />
                      </Link>

                      {/* Subcategories */}
                      <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {category.subcategories.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/category/${category.name.toLowerCase()}/${sub
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors translate-4"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Main Navigation */}
            <div
              className={`lg:flex lg:items-center lg:space-x-8 lg:ml-8 ${
                isMenuOpen ? "block" : "hidden"
              } lg:block`}
            >
              <div className="lg:flex lg:space-x-8">
                <Link
                  href="/"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>

              {/* Auth Links */}
              <div className="lg:flex lg:space-x-4 lg:ml-auto border-t lg:border-t-0 pt-4 lg:pt-0">
                <Link
                  href="/auth/login"
                  className="block lg:inline-block px-4 py-2 lg:py-0 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="block lg:inline-block px-4 py-2 lg:py-0 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Categories */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-gray-50">
            <div className="px-4 py-2">
              <h3 className="font-medium text-gray-900 mb-2">Categories</h3>
              {categories.map((category, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="flex items-center justify-between w-full text-left py-2 text-gray-700"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    {category.name}
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="ml-4 space-y-1">
                      {category.subcategories.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`/category/${category.name.toLowerCase()}/${sub
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
