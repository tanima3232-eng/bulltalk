"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/market", label: "相場分析" },
  { href: "/simulation", label: "シミュレーション" },
  { href: "/column", label: "金融コラム" },
  { href: "/services", label: "提供サービス" },
];

const accountLinks = [
  { href: "/accounts/stock", label: "NISA・証券口座開設" },
  { href: "/accounts/ideco", label: "iDeCo口座開設" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountDropOpen, setAccountDropOpen] = useState(false);
  const [altDropOpen, setAltDropOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-2xl tracking-wide">
          <span className="text-gold">Bull</span>talk
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* 口座開設ドロップダウン */}
          <div
            className="relative"
            onMouseEnter={() => setAccountDropOpen(true)}
            onMouseLeave={() => setAccountDropOpen(false)}
          >
            <button className="text-white text-sm font-medium hover:text-gold transition-colors duration-200 flex items-center gap-1">
              口座開設
              <svg className={`w-3 h-3 transition-transform duration-200 ${accountDropOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {accountDropOpen && (
              <div className="absolute top-full left-0 pt-1 min-w-[180px] z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  {accountLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-navy text-sm font-medium hover:bg-light-gold transition-colors border-b border-gray-50 last:border-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* オルタナティブ投資ドロップダウン */}
          <div
            className="relative"
            onMouseEnter={() => setAltDropOpen(true)}
            onMouseLeave={() => setAltDropOpen(false)}
          >
            <button className="text-white text-sm font-medium hover:text-gold transition-colors duration-200 flex items-center gap-1">
              オルタナティブ投資
              <svg className={`w-3 h-3 transition-transform duration-200 ${altDropOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {altDropOpen && (
              <div className="absolute top-full left-0 pt-1 min-w-[230px] z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <Link
                    href="/alternative"
                    className="block px-4 py-3 text-navy text-sm font-medium hover:bg-light-gold transition-colors border-b border-gray-50"
                  >
                    オルタナティブ投資とは
                  </Link>
                  <Link
                    href="/real-estate"
                    className="block px-4 py-3 text-navy text-sm font-medium hover:bg-light-gold transition-colors"
                  >
                    不動産・インフラ投資とは
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-white text-sm font-medium hover:text-gold transition-colors duration-200"
          >
            経歴
          </Link>

          <Link
            href="/contact"
            className="text-white text-sm font-medium hover:text-gold transition-colors duration-200"
          >
            お問い合わせ
          </Link>

          <Link
            href="/line"
            className="text-navy text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
            style={{background: "#C9A84C"}}
          >
            Bull友になる
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
          {/* 口座開設グループ */}
          <div className="px-6 pt-3 pb-1">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">口座開設</p>
          </div>
          {accountLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-8 py-3 text-white/80 hover:bg-white/10 transition-colors border-b border-white/5 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* オルタナティブ投資グループ（モバイル） */}
          <div className="px-6 pt-3 pb-1">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">オルタナティブ投資</p>
          </div>
          <Link
            href="/alternative"
            className="block px-8 py-3 text-white/80 hover:bg-white/10 transition-colors border-b border-white/5 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            オルタナティブ投資とは
          </Link>
          <Link
            href="/real-estate"
            className="block px-8 py-3 text-white/80 hover:bg-white/10 transition-colors border-b border-white/5 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            不動産・インフラ投資とは
          </Link>
          <Link
            href="/about"
            className="block px-6 py-4 text-white hover:bg-white/10 transition-colors border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            経歴
          </Link>
          <Link
            href="/contact"
            className="block px-6 py-4 text-white hover:bg-white/10 transition-colors border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </Link>
          <Link
            href="/line"
            className="flex items-center gap-2 px-6 py-4 text-gold font-bold hover:bg-white/10 transition-colors border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            Bull友になる
          </Link>
        </div>
      )}
    </header>
  );
}
