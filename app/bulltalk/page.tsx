import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bulltalkとは｜元大手信託銀行員が本音で発信する金融教育サイト",
  description:
    "日経225分析・相続・資産運用・不動産まで。元大手信託銀行員12年・FP1級・証券アナリスト（CMA）・宅建士が無料で解説します。",
};

export default function BulltalkPage() {
  return (
    <>
      <Header />
      <main>
        {/* ページ識別 */}
        <div className="bg-navy text-center py-5 border-b border-gold/20">
          <p
            className="font-black text-gold tracking-widest"
            style={{fontSize:"clamp(1.8rem,5vw,2.8rem)", letterSpacing:"0.15em"}}
          >
            初めての方へ
          </p>
        </div>

        {/* S1: Hero */}
        <section className="bg-navy text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">FP1級×証券アナリスト×宅建士</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="block mb-5">勝つための情報を</span>
              <span className="block"><span className="text-gold">プロ</span>が直接届ける</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              相場分析から資産形成・相続・不動産まで<br />
              元大手信託銀行員が、プロの視点で無料解説
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/market" className="btn-red text-base px-8 py-4 rounded-xl">
                📈 今日の225分析を見る
              </Link>
              <Link href="/column" className="btn-blue text-base px-8 py-4 rounded-xl">
                📚 お金の知識を学ぶ
              </Link>
            </div>
          </div>
        </section>

        {/* S2: 分岐カード */}
        <section className="bg-offwhite py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">あなたはどちら？</h2>
            <p className="section-subtitle text-center">Bulltalkは2つのコンテンツで構成されています</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bulltalk Card */}
              <div className="card p-8 border-t-4 border-gold">
                <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4">毎日勝負したい方</span>
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-navy mb-2">Bulltalk</h3>
                <p className="text-navy font-semibold mb-3">日経225・ブル型投信に興味がある方へ</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  毎日場引け前に買い/売り判断を配信。元大手信託銀行の証券アナリストが相場の動きをわかりやすく解説します。
                </p>
                <Link href="/market" className="btn-primary block text-center">
                  分析を見る →
                </Link>
              </div>

              {/* 人生信託ラボ Card */}
              <div className="card p-8 border-t-4 border-navy">
                <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">人生を豊かにしたい方</span>
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-navy mb-2">人生信託ラボ</h3>
                <p className="text-navy font-semibold mb-3">資産形成・相続・不動産を学びたい方へ</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  実務12年のプロが基礎から解説。信託銀行で培った知識を惜しみなくお伝えします。
                </p>
                <Link href="/column" className="btn-navy block text-center">
                  コラムを読む →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* S3: 最新コンテンツ */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">最新コンテンツ</h2>
            <p className="section-subtitle text-center">最新の分析・コラムをチェック</p>

            {/* YouTube Placeholder */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>🎬</span> 最新分析動画
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center text-gray-400 p-4">
                      <div className="text-3xl mb-2">▶️</div>
                      <p className="text-sm">YouTube動画<br />（近日追加予定）</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column Placeholder */}
            <div>
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>📝</span> 最新コラム
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { cat: "資産形成", title: "人生で必要なお金はいくら？ライフイベントから逆算する", slug: "asset-01-life-money" },
                  { cat: "資産形成", title: "インフレ時代に「預金だけ」が危険な理由", slug: "asset-07-inflation" },
                  { cat: "資産形成", title: "NISA完全ガイド｜非課税で資産を増やす仕組みと始め方", slug: "asset-02-nisa-guide" },
                ].map((article) => (
                  <Link key={article.slug} href={`/column/${article.slug}`} className="card p-5 group">
                    <span className="inline-block text-xs font-bold text-gold border border-gold rounded-full px-3 py-1 mb-3">
                      {article.cat}
                    </span>
                    <h4 className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-relaxed">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-5">
                相続・不動産に関するコラムも多数掲載しています。
              </p>
              <div className="text-center mt-3">
                <Link href="/column" className="btn-primary px-8 py-3">
                  もっと見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* S4: 経歴サマリー */}
        <section className="bg-navy text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo Placeholder */}
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full border-4 border-gold overflow-hidden shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt="谷本光章 プロフィール写真"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Profile */}
              <div>
                <p className="text-gold text-sm font-bold uppercase tracking-wider mb-2">ABOUT ME</p>
                <h2 className="text-3xl font-bold mb-6">谷本 光章とは</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "🏦 元大手信託銀行 12年",
                    "📜 FP1級 ／ 証券アナリスト（CMA）／ 宅建士",
                    "🏆 新人コンペ全国2位・社長賞受賞",
                    "💼 個人〜機関投資家まで幅広く担当",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90">
                      <span className="text-xl">{item.slice(0, 2)}</span>
                      <span>{item.slice(3)}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="btn-primary">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* S5: LINE CTA */}
        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
