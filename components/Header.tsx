"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const menuSections = [
  {
    label: "",
    links: [
      { href: "/", label: "🏠 トップ", desc: "Bulltalkトップページ" },
    ],
  },
  {
    label: "コンテンツ",
    links: [
      { href: "/market", label: "📈 相場分析", desc: "日経225の分析・売買判断" },
      { href: "/column", label: "📚 金融コラム", desc: "資産形成・相続・不動産を学ぶ" },
      { href: "/simulation", label: "📊 シミュレーション", desc: "資産形成をシミュレーション" },
    ],
  },
  {
    label: "サービス",
    links: [
      { href: "/services", label: "💼 提供サービス", desc: "研修・コンサル・セミナー" },
      { href: "/contact", label: "📩 お問い合わせ", desc: "ご依頼・ご相談はこちら" },
    ],
  },
  {
    label: "口座開設",
    links: [
      { href: "/accounts/stock", label: "🏦 NISA・証券口座開設", desc: "" },
      { href: "/accounts/ideco", label: "🏦 iDeCo口座開設", desc: "" },
    ],
  },
  {
    label: "投資を学ぶ",
    links: [
      { href: "/alternative", label: "📊 オルタナティブ投資とは", desc: "" },
      { href: "/real-estate", label: "🏠 不動産・インフラ投資とは", desc: "" },
    ],
  },
  {
    label: "その他",
    links: [
      { href: "/about", label: "👤 経歴", desc: "谷本光章について" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // メニュー開いている時にbodyスクロールを止める
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="bg-navy sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl tracking-wide" onClick={() => setMenuOpen(false)}>
            <span className="text-gold">Bull</span>talk
          </Link>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/line"
              className="text-navy text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{ background: "#C9A84C" }}
            >
              Bull友になる
            </Link>

            {/* Hamburger button - always visible */}
            <button
              className="text-white p-2 relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニューを開く"
            >
              <div className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"}`} />
              <div className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-navy shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ paddingTop: "72px" }}
        >
          <nav className="px-6 py-6">
            {menuSections.map((section, i) => (
              <div key={i} className="mb-6">
                {section.label && (
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                    {section.label}
                  </p>
                )}
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-colors group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div>
                        <p className="font-medium text-sm group-hover:text-gold transition-colors">
                          {link.label}
                        </p>
                        {link.desc && (
                          <p className="text-white/40 text-xs mt-0.5">{link.desc}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* LINE CTA in menu */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/line"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-navy transition-all duration-200 hover:opacity-90"
                style={{ background: "#C9A84C" }}
                onClick={() => setMenuOpen(false)}
              >
                Bull友になる
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 mt-3 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all duration-200 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                📩 お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
