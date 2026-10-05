"use client";

import { useState } from "react";
import Link from "next/link";

// サーバー専用モジュールの問題回避のため直接定義
type MarketArticleMeta = {
  slug: string;
  title: string;
  date: string;
  updated: string;
  description: string;
  summary: string;
  points: string[];
  market_view: string;
  next_points: string[];
  tags: string[];
  instagram_url: string;
  author: string;
};

type MonthlyArchive = {
  year: number;
  month: number;
  label: string;
  count: number;
};

export default function MarketJapanListClient({
  articles,
  archives,
}: {
  articles: MarketArticleMeta[];
  archives: MonthlyArchive[];
}) {
  const [displayCount, setDisplayCount] = useState(10);

  const displayedArticles = articles.slice(0, displayCount);
  const hasMore = displayCount < articles.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* メインカラム: 記事一覧 */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {displayedArticles.map((article) => (
              <div key={article.slug} className="card p-5">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-bold text-navy mb-3">
                  <Link href={`/market/japan/${article.slug}`} className="hover:text-gold transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link href={`/market/japan/${article.slug}`} className="text-navy font-bold text-sm hover:opacity-80">
                  続きを読む →
                </Link>
              </div>
            ))}
            {articles.length === 0 && (
              <p className="text-center text-gray-500 py-10">記事がありません。</p>
            )}
          </div>

          {/* もっと見るボタン */}
          {hasMore && (
            <div className="mt-10 text-center">
              <button onClick={handleLoadMore} className="btn-navy">
                もっと見る
              </button>
            </div>
          )}
        </div>

        {/* サイドバー: 月別アーカイブ */}
        <aside className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
            <h3 className="font-bold text-navy mb-4 border-b border-gray-200 pb-2">月別アーカイブ</h3>
            <ul className="space-y-2">
              {archives.map((archive) => (
                <li key={`${archive.year}-${archive.month}`}>
                  <Link
                    href={`/market/japan/${archive.year}/${String(archive.month).padStart(2, '0')}`}
                    className="flex justify-between items-center text-sm text-gray-600 hover:text-navy hover:font-bold transition-all"
                  >
                    <span>{archive.label}</span>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {archive.count}
                    </span>
                  </Link>
                </li>
              ))}
              {archives.length === 0 && (
                <li className="text-sm text-gray-500">アーカイブがありません</li>
              )}
            </ul>
          </div>
        </aside>

      </div>
    </section>
  );
}
