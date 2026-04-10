"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import SimulationCtaBanner from "@/components/SimulationCtaBanner";
import type { ColumnMeta } from "@/lib/columns";

const CATEGORIES = [
  { id: "all",     label: "すべて" },
  { id: "asset",   label: "資産形成" },
  { id: "souzoku", label: "相続" },
  { id: "fudosan", label: "不動産" },
];

const ICONS: Record<string, string> = {
  fudosan: "🏠",
  souzoku: "🏛️",
  asset:   "📊",
};

export default function ColumnListClient({ columns }: { columns: ColumnMeta[] }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? columns : columns.filter((c) => c.category === active);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Column</p>
            <h1 className="text-3xl md:text-4xl font-bold">金融コラム</h1>
            <p className="text-white/70 mt-4">
              資産形成・相続・不動産の知識を元信託銀行員が解説｜全{columns.length}本
            </p>
          </div>
        </section>

        {/* Column List */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-5xl mx-auto">

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                    active === cat.id
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-navy border-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  {cat.label}
                  {cat.id !== "all" && (
                    <span className="ml-2 text-xs opacity-70">
                      {columns.filter((c) => c.category === cat.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Column Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((col) => (
                <Link
                  key={col.slug}
                  href={`/column/${col.slug}`}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col group border border-gray-100 hover:-translate-y-1"
                >
                  {/* Icon Area */}
                  <div
                    className="rounded-xl aspect-video mb-4 flex items-center justify-center text-5xl"
                    style={{ backgroundColor: col.categoryColor + "18" }}
                  >
                    {ICONS[col.category] || "📄"}
                  </div>

                  {/* Category Badge */}
                  <span
                    className="inline-block text-xs font-bold rounded-full px-3 py-1 mb-3 w-fit text-white"
                    style={{ backgroundColor: col.categoryColor }}
                  >
                    {col.categoryLabel}
                  </span>

                  {/* Title */}
                  <h2 className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-relaxed flex-1">
                    {col.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">{col.excerpt}</p>

                  {/* Date */}
                  <p className="text-gray-400 text-xs mt-3">{col.date}</p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-20">記事が見つかりませんでした</p>
            )}
          </div>
        </section>

        <SimulationCtaBanner />
        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
