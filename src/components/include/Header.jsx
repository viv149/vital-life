"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2, BiUser } from 'react-icons/bi';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import '@fontsource/poppins/700.css';
import '@fontsource/inter';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Shop', href: '#shop' },
];

export default function Header() {
  // Mock active link and cart count
  const [active, setActive] = useState('Home');
  const [cartCount] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full border-b border-gray-200 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white backdrop-blur-sm' : 'bg-white/15 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-poppins font-bold text-[#468852] select-none">VitalLife</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-[#468852] px-3 py-2 text-sm font-medium transition-colors duration-200 ${active === item.name ? 'text-[#468852] font-bold' : ''}`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              className="relative text-gray-700 hover:text-[#468852] p-2 rounded transition-colors cursor-pointer"
              aria-label="Cart"
            >
              <FiShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E4903E] text-white h-5 w-5 flex items-center justify-center rounded-full text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Auth */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 hidden sm:inline">Hi, User</span>
                <button
                  className="text-gray-700 hover:text-[#468852] text-sm px-2 py-1 rounded transition-colors cursor-pointer"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-[#468852] text-sm px-2 py-1 rounded transition-colors cursor-pointer"
                onClick={() => setIsLoggedIn(true)}
              >
                <BiUser className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-[#468852] p-2 rounded transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded transition-colors text-gray-700 hover:text-[#468852] hover:bg-gray-50 ${active === item.name ? 'text-[#468852] font-bold' : ''}`}
                  onClick={() => {
                    setActive(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                {isLoggedIn ? (
                  <button
                    className="text-gray-700 hover:text-[#468852] text-sm px-2 py-1 rounded transition-colors text-left cursor-pointer"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-[#468852] text-sm px-2 py-1 rounded transition-colors cursor-pointer"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    <BiUser className="h-4 w-4" />
                    <span className="hidden sm:inline">Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

