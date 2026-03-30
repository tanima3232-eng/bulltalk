import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import { getAllColumns } from "@/lib/columns";

export const metadata: Metadata = {
  title: "コラム一覧｜相続・資産形成・不動産の金融知識",
  description:
    "相続・資産形成・不動産について、元大手信託銀行員が基礎から解説するコラム一覧です。",
};

const categoryColors: Record<string, string> = {
  souzoku: "border-purple-500 text-purple-600",
  asset: "border-green-500 text-green-600",
  fudosan: "border-blue-500 text-blue-600",
};

export default function ColumnPage() {
  const columns = getAllColumns();

  const categories = [
    { id: "all", label: "すべて" },
    { id: "souzoku", label: "相続" },
    { id: "asset", label: "資産形成" },
    { id: "fudosan", label: "不動産" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Column</p>
            <h1 className="text-3xl md:text-4xl font-bold">金融コラム</h1>
            <p className="text-white/70 mt-4">相続・資産形成・不動産の知識を元信託銀行員が解説</p>
          </div>
        </section>

        {/* Column List */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat.id}
                  className="px-4 py-2 rounded-full text-sm font-bold bg-white border-2 border-navy text-navy cursor-pointer hover:bg-navy hover:text-white transition-colors"
                >
                  {cat.label}
                </span>
              ))}
            </div>

            {/* Column Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {columns.map((col) => (
                <Link key={col.slug} href={`/column/${col.slug}`} className="card p-5 group flex flex-col">
                  {/* Thumbnail Placeholder */}
                  <div className="bg-light-navy rounded-lg aspect-video mb-4 flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">
                      {col.category === "souzoku" ? "🏛️" : col.category === "asset" ? "📊" : "🏠"}
                    </span>
                  </div>
                  <span className={`inline-block text-xs font-bold border rounded-full px-3 py-1 mb-3 w-fit ${categoryColors[col.category] || "border-gray-400 text-gray-600"}`}>
                    {col.categoryLabel}
                  </span>
                  <h2 className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-relaxed flex-1">
                    {col.title}
                  </h2>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">{col.excerpt}</p>
                  <p className="text-gray-400 text-xs mt-3">{col.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
