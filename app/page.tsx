import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import Image from "next/image";
import { getLatestVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Bulltalk（ブルトーク）｜元大手信託銀行員が発信する投資・資産形成サイト",
  description:
    "日経225分析・相続・資産運用・不動産まで。元大手信託銀行員12年・FP1級・証券アナリスト（CMA）・宅建士が無料で解説します。",
};

const serviceCards = [
  {
    icon: "📈",
    title: "相場分析",
    desc: "日経225の分析・売買判断を\n毎日配信",
    href: "/market",
    color: "border-red-400",
    tag: "毎日更新",
  },
  {
    icon: "📚",
    title: "金融コラム",
    desc: "資産形成・相続・不動産を\nプロが基礎から解説",
    href: "/column",
    color: "border-blue-400",
    tag: "30本以上",
  },
  {
    icon: "📊",
    title: "シミュレーション",
    desc: "あなたに合った資産形成の\n優先順位を診断",
    href: "/simulation",
    color: "border-green-400",
    tag: "無料",
  },
  {
    icon: "💼",
    title: "提供サービス",
    desc: "研修・セミナー・\nコンサルティング",
    href: "/services",
    color: "border-gold",
    tag: "企業・個人・金融機関様",
  },
];

const quickLinks = [
  { icon: "🏦", label: "NISA・証券口座を開設", href: "/accounts/stock" },
  { icon: "💰", label: "iDeCoを始める", href: "/accounts/ideco" },
  { icon: "📊", label: "オルタナティブ投資とは", href: "/alternative" },
  { icon: "🏠", label: "不動産・インフラ投資とは", href: "/real-estate" },
];

export default async function HomePage() {
  const videos = await getLatestVideos(3);
  return (
    <>
      <Header />
      <main>

        {/* ━━━ HERO ━━━ */}
        <section className="bg-navy text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">
              FP1級 × 証券アナリスト × 宅建士
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="block mb-2">あなたの資産に</span>
              <span className="block mb-5">役立つ情報を</span>
              <span className="block">
                <span className="text-gold">プロ</span>が直接届ける
              </span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              相場分析から資産形成・相続・不動産まで<br />
              元大手信託銀行員が、実務経験をもとに解説
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

        {/* ━━━ サービス一覧カード ━━━ */}
        <section className="bg-offwhite py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">Bulltalkでできること</h2>
            <p className="section-subtitle text-center">
              資産形成に役立つ情報をプロの視点でお届けしています。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${card.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{card.icon}</span>
                    <span className="text-xs font-bold text-gold bg-light-gold px-2 py-0.5 rounded-full">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {card.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ 経歴サマリー ━━━ */}
        <section className="bg-navy text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-gold overflow-hidden shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt="谷本光章 プロフィール写真"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <p className="text-gold text-sm font-bold uppercase tracking-wider mb-2">
                  ABOUT ME
                </p>
                <h2 className="text-3xl font-bold mb-6">谷本 光章とは</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "🏦 元大手信託銀行 12年",
                    "📜 FP1級 ／ 証券アナリスト（CMA）／ 宅建士",
                    "🏆 新人コンペ全国2位・社長賞受賞",
                    "💼 個人〜機関投資家まで幅広く担当",
                    "🏢 金融機関向け研修講師として多数登壇",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90">
                      <span className="text-xl">{item.slice(0, 2)}</span>
                      <span>{item.slice(3)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/about" className="btn-primary text-center">
                    経歴を見る →
                  </Link>
                  <Link href="/services" className="inline-block px-6 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-200 text-center">
                    提供サービスを見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ 最新コンテンツ ━━━ */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">最新コンテンツ</h2>
            <p className="section-subtitle text-center">最新の分析・コラムをチェック</p>

            {/* 動画セクション */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <span>🎬</span> 最新分析動画
              </h3>

              {videos.length > 0 ? (
                <>
                  {/* スマホ：横スクロール */}
                  <div className="flex md:hidden gap-3 mb-6 overflow-x-auto pb-3 -mx-4 px-4"
                    style={{scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch"}}>
                    {videos.map((video) => (
                      <a
                        key={video.id}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-none bg-white rounded-xl overflow-hidden shadow-sm group"
                        style={{width: "55vw", maxWidth: "200px", scrollSnapAlign: "start"}}
                      >
                        <div style={{position: "relative", paddingBottom: "177.78%", background: "#f3f4f6", overflow: "hidden"}}>
                          <Image src={video.thumbnail} alt={video.title} fill className="object-cover" unoptimized style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} />
                          <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                          </div>
                          <div style={{position: "absolute", top: 6, left: 6}} className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Shorts</div>
                        </div>
                        <div className="p-2">
                          <p className="text-navy font-bold text-xs leading-snug line-clamp-2">{video.title}</p>
                          <p className="text-gray-400 text-xs mt-1">{video.published}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* PC: 3列 */}
                  <div className="hidden md:flex justify-center gap-4 mb-6">
                    {videos.map((video) => (
                      <a
                        key={video.id}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group hover:-translate-y-1"
                        style={{width: "200px", flexShrink: 0}}
                      >
                        <div style={{position: "relative", paddingBottom: "177.78%", background: "#f3f4f6", overflow: "hidden"}}>
                          <Image src={video.thumbnail} alt={video.title} fill className="object-cover" unoptimized style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} />
                          <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                          </div>
                          <div style={{position: "absolute", top: 8, left: 8}} className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Shorts</div>
                        </div>
                        <div className="p-3">
                          <p className="text-navy font-bold text-xs leading-snug line-clamp-2 group-hover:text-gold transition-colors">{video.title}</p>
                          <p className="text-gray-400 text-xs mt-1">{video.published}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* スマホ placeholder */}
                  <div className="flex md:hidden gap-3 mb-6 overflow-x-auto pb-3 -mx-4 px-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-none bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        style={{width: "55vw", maxWidth: "200px"}}>
                        <div style={{position: "relative", paddingBottom: "177.78%", background: "#f3f4f6"}}>
                          <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="text-center text-gray-400">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-4 h-4 text-gray-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                              </div>
                              <p className="text-xs">動画準備中</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="h-3 bg-gray-100 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* PC placeholder */}
                  <div className="hidden md:flex justify-center gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100" style={{width: "200px", flexShrink: 0}}>
                        <div style={{position: "relative", paddingBottom: "177.78%", background: "#f3f4f6"}}>
                          <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="text-center text-gray-400">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-4 h-4 text-gray-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                              </div>
                              <p className="text-xs">動画準備中</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <div className="h-3 bg-gray-100 rounded w-3/4 mb-2" />
                          <div className="h-2 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* 最新コラム */}
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

        {/* ━━━ クイックリンク ━━━ */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">もっと探す</h2>
            <p className="section-subtitle text-center">口座開設・投資についてもっと知りたい方はこちら</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <span className="text-3xl mb-3 block">{link.icon}</span>
                  <p className="text-navy font-bold text-sm group-hover:text-gold transition-colors">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ LINE CTA ━━━ */}
        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
