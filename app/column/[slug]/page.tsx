import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import { getColumnBySlug, getAllColumns } from "@/lib/columns";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const columns = getAllColumns();
  return columns.map((col) => ({ slug: col.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getColumnBySlug(slug);
  if (!data) return {};
  return {
    title: `${data.meta.title}｜Bulltalk`,
    description: data.meta.excerpt,
  };
}

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getColumnBySlug(slug);
  if (!data) notFound();

  const { meta, content } = data;

  // 同カテゴリ優先で関連3本
  const allColumns = getAllColumns().filter((c) => c.slug !== slug);
  const sameCategory = allColumns.filter((c) => c.category === meta.category);
  const others = allColumns.filter((c) => c.category !== meta.category);
  const related = [...sameCategory, ...others].slice(0, 3);

  const ICONS: Record<string, string> = {
    fudosan: "🏠",
    souzoku: "🏛️",
    asset: "📊",
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-6 mb-5">
              <Link
                href="/column"
                className="text-white/50 hover:text-gold text-sm transition-colors shrink-0"
              >
                ← コラム一覧
              </Link>
              {/* Category Badge */}
              <span
                className="inline-block text-xs font-bold rounded-full px-4 py-1.5 text-white"
                style={{ backgroundColor: meta.categoryColor }}
              >
                {meta.categoryLabel}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {meta.title}
            </h1>
            <p className="text-white/50 text-sm mt-5">{meta.date}</p>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-a:text-gold prose-blockquote:border-l-gold prose-blockquote:text-gray-500 prose-strong:text-navy prose-table:text-sm">
              <MDXRemote source={content} />
            </article>

            {/* Disclaimer */}
            <div className="mt-12 p-5 bg-gray-50 rounded-xl border-l-4 border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                ※ 本記事は情報提供を目的としており、投資助言・法律相談・税務相談ではありません。
                記載内容は作成時点の情報であり、制度改正等により変更になる場合があります。
                個別状況へのアドバイスは<a href="https://lin.ee/FmH7NXr" className="text-gold underline hover:opacity-80">LINEよりお気軽にご相談ください</a>。
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-offwhite py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-navy mb-6">関連コラム</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((col) => (
                <Link
                  key={col.slug}
                  href={`/column/${col.slug}`}
                  className="bg-white rounded-xl p-4 group hover:shadow-md transition-all duration-200 border border-gray-100 hover:-translate-y-0.5"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-lg mb-3"
                    style={{ backgroundColor: col.categoryColor + "20" }}
                  >
                    {ICONS[col.category] || "📄"}
                  </div>
                  <span
                    className="inline-block text-xs font-bold rounded-full px-2.5 py-0.5 mb-2 text-white"
                    style={{ backgroundColor: col.categoryColor }}
                  >
                    {col.categoryLabel}
                  </span>
                  <p className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                    {col.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/column"
                className="inline-block bg-navy text-white font-bold px-8 py-3 rounded-xl hover:bg-navy/90 transition-colors"
              >
                コラム一覧をすべて見る
              </Link>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
