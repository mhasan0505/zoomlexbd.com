"use client";

import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  PhoneCall,
  Search,
  ShoppingCart,
  Twitter,
  UserRound,
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
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      name: "Shirts",
      subcategories: [
        "Casual Shirts",
        "Formal Shirts",
        "T-Shirts",
        "Half Sleeve Shirts",
      ],
    },
    {
      name: "Pants",
      subcategories: ["Jeans", "Chinos", "Formal Pants", "Cargo Pants"],
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
      <div className="bg-primary py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="/faq"
              className="text-white hover:text-accent transition-colors"
            >
              FAQs
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-white">Shipping All Over Bangladesh !</span>
          </div>
          <div className="flex items-center space-x-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Link
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Twitter size={16} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Youtube size={16} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
              </Link>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-2">
              <PhoneCall size={18} className="text-white" />
              <span className="text-sm font-semibold text-white">
                +880 1712 345 678
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/zoomlex_logo.jpg"
                  alt="Zoomlexbd"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-accent text-white rounded-r-lg hover:bg-accent/90 transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-foreground hover:text-accent transition-colors relative group">
                <UserRound size={24} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-accent/85 transition-colors">
                  0
                </span>
              </button>
              <button className="p-2 text-foreground hover:text-accent transition-colors relative group">
                <Heart size={24} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-accent/85 transition-colors">
                  0
                </span>
              </button>

              <button className="p-2 text-foreground hover:text-accent transition-colors relative group">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-accent/85 transition-colors">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mt-4 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-accent text-white rounded-r-lg hover:bg-accent/90 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Categories Dropdown - Desktop */}
            <div className="hidden lg:block relative group">
              <button
                className="flex items-center justify-between bg-primary text-white px-6 py-4 w-64 hover:bg-accent transition-all duration-300 group-hover:bg-accent"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <span className="font-medium">Categories</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-400 ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Enhanced Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl z-50 transition-all duration-400 transform ${
                  isCategoriesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="relative group/item"
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <Link
                      href={`/category/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary hover:text-accent transition-all duration-400 hover:translate-x-2 border-l-4 border-transparent hover:border-accent"
                    >
                      <span className="font-medium">{category.name}</span>
                      <ChevronDown
                        size={16}
                        className="transform -rotate-90 transition-transform duration-400 group-hover/item:translate-x-1"
                      />
                    </Link>

                    {/* Enhanced Subcategories */}
                    <div
                      className={`absolute left-full top-0 w-56 bg-white border border-gray-200 shadow-xl transition-all duration-400 transform ${
                        hoveredCategory === index
                          ? "opacity-100 visible translate-x-0"
                          : "opacity-0 invisible -translate-x-2"
                      }`}
                    >
                      <div className="py-2">
                        <div className="px-4 py-2 bg-secondary border-b border-gray-200">
                          <span className="text-sm font-semibold text-accent">
                            {category.name}
                          </span>
                        </div>
                        {category.subcategories.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/category/${category.name.toLowerCase()}/${sub
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-accent transition-all duration-400 hover:translate-x-3 border-l-4 border-transparent hover:border-accent"
                          >
                            <span className="text-sm">{sub}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-foreground hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-4 lg:left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/shop"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-foreground hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 relative group"
                >
                  Shop
                  <span className="absolute bottom-0 left-4 lg:left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-foreground hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-4 lg:left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/contact"
                  className="block lg:inline-block px-4 py-4 lg:py-0 text-foreground hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-4 lg:left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Auth Links - Right Side */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-foreground hover:text-accent transition-all duration-300 font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-all duration-300 font-medium rounded-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Categories */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-secondary">
            <div className="px-4 py-2">
              <h3 className="font-medium text-foreground mb-2">Categories</h3>
              {categories.map((category, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-accent transition-all duration-300 hover:translate-x-1"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    <span className="font-medium">{category.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="ml-4 space-y-1 animate-fadeIn">
                      {category.subcategories.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`/category/${category.name.toLowerCase()}/${sub
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block py-2 text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-accent pl-2"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Links */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link
                  href="/auth/login"
                  className="block py-2 text-foreground hover:text-accent transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="block py-2 text-accent hover:text-accent/80 transition-all duration-300 font-medium"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
