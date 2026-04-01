import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import { getLatestVideos } from "@/lib/youtube";
import Image from "next/image";

export const metadata: Metadata = {
  title: "225分析｜日経225・ブル型投資信託の投資判断を毎日配信",
  description:
    "今日の日経225は買い？売り？元大手信託銀行員・証券アナリストが場引け前に毎日分析。SBI証券で口座開設して日経225投資を始めよう。",
};

export default async function MarketPage() {
  const videos = await getLatestVideos(3);
  return (
    <>
      <Header />
      <main>
        {/* M1: Hero */}
        <section className="bg-navy text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">毎日場引け前に更新</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              今日の日経225、<span className="text-gold">買い？売り？</span><br />
              場引け前に毎日分析します。
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              元大手信託銀行員・証券アナリストが<br />
              日経225投資信託の投資判断を無料配信
            </p>
            <a href="https://lin.ee/FmH7NXr" className="btn-line inline-flex items-center gap-3 text-lg px-8 py-4 rounded-xl shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
              </svg>
              LINEで受け取る（無料）
            </a>
          </div>
        </section>

        {/* M2: 日経225とは */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">日経225とは</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                日本を代表する<strong>225銘柄（上場企業）の平均株価指数</strong>です。
                ソニー・トヨタ・三菱UFJなど日本を代表する企業の株価から算出され、
                日本経済の体温計として世界中が注目しています。
              </p>
              <div className="bg-light-navy rounded-xl p-6 flex items-center justify-center min-h-40 border-2 border-dashed border-navy/20">
                <p className="text-navy/40 text-sm text-center">225銘柄の構成イメージ図<br />（後で追加）</p>
              </div>
            </div>
          </div>
        </section>

        {/* M3: 日経225に投資するとは */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">日経225に投資するとは</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-light-gold rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-3">📊 投資信託</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  個別株ではなく指数ごと丸ごと買えます。少額からでも日経225全体に投資でき、
                  分散効果で個別銘柄リスクを低減できます。
                </p>
              </div>
              <div className="bg-light-gold rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-3">📈 ETF（上場投資信託）</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  株式のようにリアルタイムで売買できる投資信託。
                  日経225連動ETFは流動性が高く、機動的な売買が可能です。
                </p>
              </div>
            </div>
            <div className="bg-light-navy rounded-xl p-6 flex items-center justify-center min-h-40 border-2 border-dashed border-navy/20 mt-6">
              <p className="text-navy/40 text-sm text-center">投資信託の仕組み図解<br />（後で追加）</p>
            </div>
          </div>
        </section>

        {/* M4: ブル型という投資戦略 */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">ブル型という投資戦略</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>上昇相場で利益を最大化するレバレッジ型</strong>の投資信託です。
                指数の動きに対して倍率をかけた値動きをします。
                ハイリスク・ハイリターンの特性があります。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-navy font-bold mb-1">通常の投資信託</p>
                  <p className="text-3xl font-bold text-blue-600">×1</p>
                  <p className="text-sm text-gray-500 mt-1">指数と同じ値動き</p>
                </div>
                <div className="bg-gold/10 rounded-xl p-4 text-center border-2 border-gold">
                  <p className="text-navy font-bold mb-1">ブル型（例：4.3倍）</p>
                  <p className="text-3xl font-bold text-gold">×4.3</p>
                  <p className="text-sm text-gray-500 mt-1">指数の4.3倍の値動き</p>
                </div>
              </div>
              <div className="bg-light-navy rounded-xl p-6 flex items-center justify-center min-h-32 border-2 border-dashed border-navy/20">
                <p className="text-navy/40 text-sm text-center">通常 vs ブル型の比較グラフ<br />（後で追加）</p>
              </div>
            </div>
          </div>
        </section>

        {/* M5: 4.3倍ブルとは */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">4.3倍ブルとは</h2>
            <div className="bg-navy text-white rounded-2xl p-8 mb-6">
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                日経225の動きの約<span className="text-gold font-bold text-2xl">4.3倍</span>の値動きをする投資信託です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-gold font-bold mb-1">購入締切</p>
                  <p className="text-white">毎日 15:15</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-gold font-bold mb-1">購入場所</p>
                  <p className="text-white">各証券会社で購入可能<br /><span className="text-sm text-white/70">（SBI証券・楽天証券など）</span></p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-red-600 text-sm font-bold">
                ⚠️ 注意事項<br />
                本ページの情報は投資助言ではありません。投資は自己責任でお願いします。
              </p>
            </div>
          </div>
        </section>

        {/* M6: 最新分析動画 */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">最新分析動画</h2>
            <p className="section-subtitle">毎日場引け前に最新動画を公開中。YouTubeで自動更新されます。</p>

            {videos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {videos.map((video) => (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group hover:-translate-y-1"
                  >
                    <div className="relative aspect-video bg-gray-100">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {/* 再生ボタン */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-navy font-bold text-sm leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                        {video.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-2">{video.published}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              // 動画がない場合のプレースホルダー
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-gray-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-sm">動画準備中</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center">
              <a
                href="https://www.youtube.com/@bulltalk_jp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy px-8 py-3 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTubeチャンネルをもっと見る →
              </a>
            </div>
          </div>
        </section>

        {/* M7: 口座開設3ステップ */}
        <section className="bg-light-gold py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">口座開設の方法</h2>
            <p className="section-subtitle">SBI証券なら最短翌営業日から投資スタートできます</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { step: "STEP 1", title: "SBI証券のサイトにアクセス", icon: "🌐" },
                { step: "STEP 2", title: "無料登録", icon: "✍️" },
                { step: "STEP 3", title: "本人確認書類を提出", desc: "最短翌営業日", icon: "📋" },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <p className="text-gold font-bold text-sm mb-1">{s.step}</p>
                  <p className="text-navy font-bold">{s.title}</p>
                  {s.desc && <p className="text-gray-500 text-sm mt-1">{s.desc}</p>}
                </div>
              ))}
            </div>
            <a
              href="#sbi-affiliate-url-placeholder"
              className="btn-primary text-lg px-10 py-5 rounded-xl shadow-lg inline-block"
            >
              🏦 SBI証券で口座を開設する（無料）
            </a>

          </div>
        </section>

        {/* M8: 免責表示 */}
        <section className="bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="disclaimer space-y-1">
              <p>※ 本ページの情報は投資助言ではありません。</p>
              <p>※ 投資は自己責任でお願いします。</p>
              <p>※ 過去の実績は将来の成果を保証しません。</p>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
