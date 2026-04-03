"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/bulltalk", label: "Bulltalkとは" },
  { href: "/column", label: "コラム" },
  { href: "/about", label: "経歴" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-2xl tracking-wide">
          <span className="text-gold">Bull</span>talk
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/line"
            className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200"
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-white hover:bg-white/10 transition-colors border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/line"
              className="block w-full text-center bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              無料相談
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
