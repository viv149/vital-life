"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2, BiUser } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import '@fontsource/poppins/700.css';
import '@fontsource/inter';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SHOP', href: '#shop' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Header() {
  // Mock active link and cart count
  const active = 'HOME';
  const cartCount = 2;

  // Scroll background logic
  const [bg, setBg] = useState('#D2FFD2');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBg('#fff');
      } else {
        setBg('#D2FFD2');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="py-4 px-4 border-b border-gray-100 w-full font-inter transition-colors duration-300"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-poppins font-bold text-[#468852] tracking-tight select-none">
          VitalLife
        </Link>
        {/* Nav links */}
        <ul className="hidden md:flex gap-8 mx-8 text-base font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition-colors duration-200 px-1 ${active === link.name ? 'text-[#468852] font-bold' : 'text-black hover:text-[#468852]'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:text-[#468852] transition-colors" aria-label="Search">
            <BiSearchAlt2 />
          </button>
          <button className="relative text-2xl hover:text-[#468852] transition-colors" aria-label="Cart">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-[#E4903E] text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
              {cartCount}
            </span>
          </button>
          <button className="flex items-center gap-1 text-base font-medium hover:text-[#468852] transition-colors">
            <BiUser className="text-2xl" />
            <span className="hidden sm:inline">LOGIN</span>
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      <ul className="flex md:hidden justify-center gap-6 mt-4 text-base font-medium">
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`transition-colors duration-200 px-1 ${active === link.name ? 'text-[#468852] font-bold' : 'text-black hover:text-[#468852]'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

