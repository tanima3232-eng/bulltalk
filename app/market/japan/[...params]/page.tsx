import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import {
  getMarketArticleBySlug,
  getAllMarketArticles,
  getAdjacentArticles,
  getRelatedArticles,
  getArticlesByMonth,
  getMonthlyArchive,
} from "@/lib/market-japan";

/* ── ヘルパー ── */

function formatDateJa(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  return `${y}年${parseInt(m)}月${parseInt(d)}日`;
}

type RouteType =
  | { kind: "article"; slug: string }
  | { kind: "archive"; year: string; month: string };

function resolveRoute(params: string[]): RouteType | null {
  // /market/japan/2026-09-18  → 記事
  if (params.length === 1 && /^\d{4}-\d{2}-\d{2}$/.test(params[0])) {
    return { kind: "article", slug: params[0] };
  }
  // /market/japan/2026/09     → 月別アーカイブ
  if (
    params.length === 2 &&
    /^\d{4}$/.test(params[0]) &&
    /^\d{1,2}$/.test(params[1])
  ) {
    return { kind: "archive", year: params[0], month: params[1].padStart(2, "0") };
  }
  return null;
}

/* ── 静的パス生成 ── */

export async function generateStaticParams() {
  const articles = getAllMarketArticles();
  const archives = getMonthlyArchive();

  const articleParams = articles.map((a) => ({ params: [a.slug] }));
  const archiveParams = archives.map((a) => ({
    params: [String(a.year), String(a.month).padStart(2, "0")],
  }));

  return [...articleParams, ...archiveParams];
}

/* ── メタデータ ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ params: string[] }>;
}): Promise<Metadata> {
  const { params: segments } = await params;
  const route = resolveRoute(segments);
  if (!route) return {};

  if (route.kind === "article") {
    const article = getMarketArticleBySlug(route.slug);
    if (!article) return {};
    return {
      title: article.meta.title,
      description: article.meta.description,
      openGraph: {
        title: article.meta.title,
        description: article.meta.description,
        type: "article",
        url: `https://bulltalk.jp/market/japan/${route.slug}/`,
        siteName: "Bulltalk",
        locale: "ja_JP",
      },
      alternates: {
        canonical: `https://bulltalk.jp/market/japan/${route.slug}/`,
      },
    };
  }

  // archive
  return {
    title: `${route.year}年${parseInt(route.month)}月 日本株マーケット情報`,
    description: `${route.year}年${parseInt(route.month)}月の日本株マーケット情報のアーカイブページです。`,
    alternates: {
      canonical: `https://bulltalk.jp/market/japan/${route.year}/${route.month}/`,
    },
  };
}

/* ── ページコンポーネント ── */

export default async function MarketJapanCatchAllPage({
  params,
}: {
  params: Promise<{ params: string[] }>;
}) {
  const { params: segments } = await params;
  const route = resolveRoute(segments);
  if (!route) notFound();

  if (route.kind === "article") {
    return <ArticlePage slug={route.slug} />;
  }

  return <ArchivePage year={route.year} month={route.month} />;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   個別記事ページ
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ArticlePage({ slug }: { slug: string }) {
  const article = getMarketArticleBySlug(slug);
  if (!article) notFound();

  const { meta, content } = article;
  const { prev, next } = getAdjacentArticles(slug);
  const relatedArticles = getRelatedArticles(slug, 4);
  const formattedDate = formatDateJa(meta.date);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    datePublished: meta.date,
    dateModified: meta.updated,
    author: {
      "@type": "Person",
      name: meta.author,
      url: "https://bulltalk.jp/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Bulltalk",
      url: "https://bulltalk.jp",
    },
    description: meta.description,
    mainEntityOfPage: `https://bulltalk.jp/market/japan/${slug}/`,
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://bulltalk.jp",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "日本株マーケット情報",
        item: "https://bulltalk.jp/market/japan/",
      },
      { "@type": "ListItem", position: 3, name: formattedDate },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdArticle),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumb),
          }}
        />

        {/* Hero section */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-gold transition-colors">
                ホーム
              </Link>
              <span className="mx-2">&gt;</span>
              <Link
                href="/market/japan"
                className="hover:text-gold transition-colors"
              >
                日本株マーケット情報
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white">{formattedDate}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {meta.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-white/70 items-center">
              <div>公開日: {meta.date}</div>
              {meta.updated !== meta.date && (
                <div>最終更新日: {meta.updated}</div>
              )}
              <div>
                執筆者:{" "}
                <Link href="/about" className="text-gold hover:underline">
                  {meta.author}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* 今日の日本株まとめ */}
            {meta.summary && (
              <div className="bg-light-gold border-l-4 border-gold rounded-r-lg px-6 py-4">
                <p className="text-navy font-bold leading-relaxed">
                  {meta.summary}
                </p>
              </div>
            )}

            {/* 今日のポイント */}
            {meta.points && meta.points.length > 0 && (
              <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-navy mb-4 border-b pb-2">
                  今日のポイント
                </h2>
                <ul className="space-y-3">
                  {meta.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold mt-1">✔︎</span>
                      <span className="text-dark leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 日本株市場の動き */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                日本株市場の動き
              </h2>
              <article className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-a:text-gold">
                <MDXRemote source={content} />
              </article>
            </div>

            {/* 今日の主な材料 */}
            {meta.tags && meta.tags.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">
                  今日の主な材料
                </h2>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-light-navy text-navy px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 本日の相場観 */}
            {meta.market_view && (
              <div className="bg-white rounded-xl shadow p-6 border-l-4 border-gold">
                <h2 className="text-lg font-bold text-navy mb-3">
                  本日の相場観
                </h2>
                <p className="text-dark leading-relaxed">{meta.market_view}</p>
              </div>
            )}

            {/* 翌営業日に向けて確認したいポイント */}
            {meta.next_points && meta.next_points.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">
                  翌営業日に向けて確認したいポイント
                </h2>
                <ul className="list-disc list-inside space-y-2 text-dark">
                  {meta.next_points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instagramリール埋め込みエリア */}
            {meta.instagram_url && (
              <div className="bg-offwhite rounded-xl p-6 text-center">
                <h2 className="text-xl font-bold text-navy mb-4">
                  Instagramでは動画で解説しています
                </h2>
                <a
                  href={meta.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white font-bold rounded-lg hover:opacity-90 transition-all duration-200"
                >
                  動画で解説を見る
                </a>
              </div>
            )}
          </div>
        </section>

        {/* 前後記事リンク + 関連記事 */}
        <section className="bg-offwhite py-14 px-4">
          <div className="max-w-3xl mx-auto">
            {/* 前後記事リンク */}
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 mb-12">
              {next ? (
                <Link
                  href={`/market/japan/${next.slug}`}
                  className="flex-1 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group"
                >
                  <span className="text-sm text-gray-500 group-hover:text-gold transition-colors mb-2">
                    ← 次の営業日の日本株を見る
                  </span>
                  <span className="text-navy font-bold leading-snug">
                    {formatDateJa(next.date)}
                  </span>
                </Link>
              ) : (
                <div className="flex-1 hidden md:block"></div>
              )}

              {prev ? (
                <Link
                  href={`/market/japan/${prev.slug}`}
                  className="flex-1 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:items-end group"
                >
                  <span className="text-sm text-gray-500 group-hover:text-gold transition-colors mb-2">
                    前営業日の日本株を見る →
                  </span>
                  <span className="text-navy font-bold leading-snug md:text-right">
                    {formatDateJa(prev.date)}
                  </span>
                </Link>
              ) : (
                <div className="flex-1 hidden md:block"></div>
              )}
            </div>

            {/* 関連記事 */}
            {relatedArticles.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xl font-bold text-navy mb-6">関連記事</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/market/japan/${a.slug}`}
                      className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 block group"
                    >
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDateJa(a.date)}
                      </div>
                      <h3 className="font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                        {a.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 著者プロフィール */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-navy mb-2">
                    谷本光章｜プロの株価分析
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4 list-disc list-inside">
                    <li>元大手信託銀行12年</li>
                    <li>証券アナリスト（CMA）</li>
                    <li>FP1級</li>
                    <li>宅建士</li>
                  </ul>
                  <p className="text-sm text-dark mb-4 leading-relaxed">
                    個人・富裕層・法人・金融機関向けの資産運用コンサルティングに従事。
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href="https://www.instagram.com/bulltalk_jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline font-bold"
                    >
                      Instagram: @bulltalk_jp
                    </a>
                    <a
                      href="https://note.com/bulltalk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline font-bold"
                    >
                      note
                    </a>
                    <Link
                      href="/about"
                      className="text-gold hover:underline font-bold"
                    >
                      プロフィール詳細 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="bg-navy rounded-xl p-8 text-center text-white mb-12">
              <h2 className="text-xl font-bold mb-6">
                さらに詳しい情報をチェック
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm text-white/80">
                    毎営業日の日本株分析はInstagramでも配信しています
                  </p>
                  <a
                    href="https://www.instagram.com/bulltalk_jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-white text-navy font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
                  >
                    Instagram (@bulltalk_jp)
                  </a>
                </div>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
                <div>
                  <p className="mb-3 text-sm text-white/80">
                    企業分析や詳しいマーケット分析はnoteで公開しています
                  </p>
                  <a
                    href="https://note.com/bulltalk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-white text-navy font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
                  >
                    note (Bulltalk)
                  </a>
                </div>
              </div>
            </div>

            {/* 共通注記 */}
            <div className="bg-gray-50 rounded-xl border-l-4 border-gray-200 p-5">
              <p className="text-xs text-gray-500 leading-relaxed">
                本記事は一般的な市場情報および筆者の相場観を提供するものであり、特定の金融商品の売買を推奨するものではありません。記載内容は掲載日時点の市場環境に基づいています。投資判断はご自身の判断と責任で行ってください。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   月別アーカイブページ
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ArchivePage({ year, month }: { year: string; month: string }) {
  const articles = getArticlesByMonth(Number(year), Number(month));
  const displayMonth = parseInt(month);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-white/70 mb-4 flex items-center">
              <Link
                href="/"
                className="hover:text-gold transition-colors"
              >
                ホーム
              </Link>
              <span className="mx-2">&gt;</span>
              <Link
                href="/market/japan"
                className="hover:text-gold transition-colors"
              >
                日本株マーケット情報
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white">
                {year}年{displayMonth}月
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {year}年{displayMonth}月 日本株マーケット情報
            </h1>
          </div>
        </section>

        {/* 記事一覧 */}
        <section className="bg-offwhite py-14 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article) => (
              <div key={article.slug} className="card p-5">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h2 className="text-lg font-bold text-navy mb-3">
                  <Link
                    href={`/market/japan/${article.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/market/japan/${article.slug}`}
                  className="text-navy font-bold text-sm hover:opacity-80"
                >
                  続きを読む →
                </Link>
              </div>
            ))}

            {articles.length === 0 && (
              <p className="text-center text-gray-500 py-10">
                この月の記事はありません。
              </p>
            )}

            <div className="text-center mt-12">
              <Link href="/market/japan" className="btn-navy">
                日本株マーケット情報一覧へ戻る
              </Link>
            </div>
          </div>
        </section>

        {/* 共通注記 */}
        <section className="bg-white py-8 px-4 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="disclaimer">
              本ページの情報は一般的な市場情報および筆者の相場観であり、特定の金融商品の売買を推奨するものではありません。投資判断はご自身の判断と責任で行ってください。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
