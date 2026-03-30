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
    title: data.meta.title,
    description: data.meta.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  souzoku: "border-purple-500 text-purple-600 bg-purple-50",
  asset: "border-green-500 text-green-600 bg-green-50",
  fudosan: "border-blue-500 text-blue-600 bg-blue-50",
};

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getColumnBySlug(slug);
  if (!data) notFound();

  const { meta, content } = data;

  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <span className={`inline-block text-xs font-bold border rounded-full px-3 py-1 mb-4 ${categoryColors[meta.category] || "border-gray-400 text-gray-600 bg-gray-50"}`}>
              {meta.categoryLabel}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">{meta.title}</h1>
            <p className="text-white/50 text-sm mt-4">{meta.date}</p>
          </div>
        </section>

        {/* Article */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:text-navy prose-a:text-gold">
              <MDXRemote source={content} />
            </article>

            {/* Disclaimer */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <p className="disclaimer">
                ※ 本サイトの情報は投資助言ではありません。投資は自己責任でお願いします。
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-offwhite py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-navy mb-6">関連コラム</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getAllColumns()
                .filter((c) => c.slug !== slug)
                .slice(0, 3)
                .map((col) => (
                  <Link key={col.slug} href={`/column/${col.slug}`} className="card p-4 group">
                    <span className={`inline-block text-xs font-bold border rounded-full px-2 py-0.5 mb-2 ${categoryColors[col.category] || ""}`}>
                      {col.categoryLabel}
                    </span>
                    <p className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                      {col.title}
                    </p>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/column" className="btn-navy px-8 py-3 inline-block">
                ← コラム一覧に戻る
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
