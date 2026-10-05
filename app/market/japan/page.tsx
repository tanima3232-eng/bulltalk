import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllMarketArticles, getMonthlyArchive } from "@/lib/market-japan";
import MarketJapanListClient from "./MarketJapanListClient";

export const metadata: Metadata = {
  title: "日本株マーケット情報｜毎営業日の相場分析",
  description: "毎営業日、後場開始後を目安に日本株を分析。その日の値動きと背景、翌営業日に向けて確認したいポイントをまとめています。元大手信託銀行員・証券アナリスト（CMA）・FP1級が解説。",
  openGraph: {
    title: "日本株マーケット情報｜毎営業日の相場分析",
    description: "毎営業日、後場開始後を目安に日本株を分析。その日の値動きと背景、翌営業日に向けて確認したいポイントをまとめています。元大手信託銀行員・証券アナリスト（CMA）・FP1級が解説。",
    url: "https://bulltalk.jp/market/japan/",
    siteName: "Bulltalk",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://bulltalk.jp/market/japan/" },
};

export default function MarketJapanPage() {
  const articles = getAllMarketArticles();
  const archives = getMonthlyArchive();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title text-white">日本株マーケット情報</h1>
            <p className="text-gold font-bold mb-6">毎営業日の相場分析</p>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              毎営業日、後場開始後を目安に日本株を分析し、その日の値動きと背景を整理。翌営業日に向けた相場の見方をまとめています。
            </p>
          </div>
        </section>

        {/* 記事一覧 + 月別アーカイブ */}
        <MarketJapanListClient articles={articles} archives={archives} />
        
        {/* Instagram・note・著者への導線 */}
        <section className="bg-light-navy py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-6 md:p-8 text-center flex flex-col items-center">
              <h2 className="text-xl font-bold text-navy mb-4">Instagramでも毎営業日の分析を配信しています</h2>
              <a href="https://www.instagram.com/bulltalk_jp/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Instagramを見る (@bulltalk_jp)
              </a>
            </div>
            
            <div className="card p-6 md:p-8 text-center flex flex-col items-center">
              <h2 className="text-xl font-bold text-navy mb-4">企業分析レポートはnoteで公開しています</h2>
              <a href="https://note.com/bulltalk" target="_blank" rel="noopener noreferrer" className="btn-navy">
                noteを見る
              </a>
            </div>
            
            <div className="text-center mt-8">
              <a href="/about" className="text-navy font-bold underline hover:opacity-80">
                著者プロフィールはこちら
              </a>
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
