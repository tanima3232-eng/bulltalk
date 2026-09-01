import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLatestVideos } from "@/lib/youtube";
import Image from "next/image";

export const metadata: Metadata = {
  title: "相場分析｜Bulltalk - 日経225・ブル型投資信託の投資判断を毎日配信",
  description:
    "今日の日経225は買い？売り？元大手信託銀行12年・FP1級・CMA・宅建士が場引け前に毎日分析。日経225投資の最新情報をチェック。",
};

export default async function MarketPage() {
  const videos = await getLatestVideos(3);
  return (
    <>
      <Header />
      <main>
        {/* S1: FV（ファーストビュー） */}
        <section className="bg-navy text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-6">毎日場引け前に更新</p>
            <h1 className="font-bold mb-6">
              <span className="block text-4xl md:text-6xl text-white mb-5">
                本気で勝つなら
              </span>
              <span className="block text-4xl md:text-6xl">
                <span className="text-gold" style={{fontSize: "1.15em"}}>Bull友</span>
                <span className="text-white">会員</span>
              </span>
            </h1>

            {/* 安心バッジ：会員 = LINE登録だけ */}
            <div className="flex justify-center items-center gap-2 flex-wrap mb-2">
              <span className="text-sm" style={{color:"#4ADE80"}}>＼</span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{background:"rgba(6,199,85,0.15)", color:"#4ADE80", border:"1px solid rgba(6,199,85,0.35)"}}
              >
                ✓ 完全無料
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{background:"rgba(6,199,85,0.15)", color:"#4ADE80", border:"1px solid rgba(6,199,85,0.35)"}}
              >
                ✓ LINE追加のみ
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{background:"rgba(6,199,85,0.15)", color:"#4ADE80", border:"1px solid rgba(6,199,85,0.35)"}}
              >
                ✓ 特典あり
              </span>
              <span className="text-sm" style={{color:"#4ADE80"}}>／</span>
            </div>

            <div className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-8">
              <p className="text-gold font-bold text-xl md:text-2xl mb-3">今日は買い？売り？</p>
              <p>元大手信託銀行12年・FP1級・CMA・宅建士が<br />毎日の日経225指数の投資判断を無料配信します</p>
            </div>
          </div>
        </section>

        {/* S2: 最新分析動画 */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-center font-black text-navy mb-8" style={{fontSize:"clamp(1.8rem,5vw,2.8rem)", letterSpacing:"0.1em"}}>毎日更新</p>
            <h2 className="section-title text-center">最新分析動画</h2>
            <p className="section-subtitle text-center">毎日場引け前に最新動画を公開中。</p>

            {videos.length > 0 ? (
              <>
                {/* スマホ：横スクロール */}
                <div className="flex md:hidden gap-3 mb-8 overflow-x-auto pb-3 -mx-4 px-4"
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
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          unoptimized
                          style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                        />
                        <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div style={{position: "absolute", top: 6, left: 6}} className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Shorts
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-navy font-bold text-xs leading-snug line-clamp-2">{video.title}</p>
                        <p className="text-gray-400 text-xs mt-1">{video.published}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* PC: 3列 */}
                <div className="hidden md:flex justify-center gap-4 mb-8">
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
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover"
                            unoptimized
                            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                          />
                          <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div style={{position: "absolute", top: 8, left: 8}} className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            Shorts
                          </div>
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
              // 動画がない場合のプレースホルダー
              <>
                {/* スマホ */}
                <div className="flex md:hidden gap-3 mb-8 overflow-x-auto pb-3 -mx-4 px-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-none bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                      style={{width: "55vw", maxWidth: "200px"}}>
                      <div style={{position: "relative", paddingBottom: "177.78%", background: "#f3f4f6"}}>
                        <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                          <div className="text-center text-gray-400">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg className="w-4 h-4 text-gray-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
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
                {/* PC */}
                <div className="hidden md:flex justify-center gap-4 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        style={{width: "200px", flexShrink: 0}}>
                        <div style={{position: "relative", paddingBottom: "177.78%", background: "#f3f4f6"}}>
                          <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div className="text-center text-gray-400">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-4 h-4 text-gray-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
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
                分析動画をもっと見る →
              </a>
            </div>
          </div>
        </section>

        {/* S3: 企業分析レポートはこちら */}
        <section
          className="py-16 px-4"
          style={{
            background: "linear-gradient(135deg, #0d1b2e 0%, #1A2E4A 50%, #0d1b2e 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 背景グロー */}
          <div style={{
            position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
            width: "500px", height: "250px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="max-w-3xl mx-auto text-center" style={{position: "relative", zIndex: 1}}>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4" style={{letterSpacing:"0.2em"}}>
              📊 ANALYSIS REPORT
            </p>
            <h2
              className="font-bold text-white mb-4"
              style={{fontSize:"clamp(1.8rem,5vw,2.8rem)", lineHeight: 1.2}}
            >
              企業分析レポート<br />
              <span style={{color:"#C9A84C"}}>はこちら</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
              日経225構成銘柄をはじめとする個別企業の分析レポートを<br className="hidden md:inline" />
              noteにて公開中。プロの視点で読み解く企業価値をご覧ください。
            </p>

            <a
              href="https://note.com/bulltalk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-base md:text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
                color: "#1A2E4A",
                boxShadow: "0 0 28px rgba(201,168,76,0.4), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* noteロゴ風アイコン */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h7v2H4v-2z"/>
              </svg>
              noteで企業分析レポートを見る →
            </a>
            <p className="text-white/30 text-xs mt-5">note.com/bulltalk</p>
          </div>
        </section>

        {/* S4: Bull友3特典・LINE */}
        <section
          className="py-20 px-4"
          style={{
            background: "linear-gradient(135deg, #0d1b2e 0%, #1A2E4A 50%, #0d1b2e 100%)",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {/* 背景グロー装飾 */}
          <div style={{
            position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: "600px", height: "300px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="max-w-2xl mx-auto text-center" style={{position:"relative", zIndex:1}}>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4" style={{letterSpacing:"0.2em"}}>
              🔥 BULL友 MEMBERS ONLY
            </p>
            <h2
              className="font-bold mb-4"
              style={{fontSize:"clamp(2rem,6vw,3.2rem)", lineHeight:1.15, color:"#FFFFFF"}}
            >
              勝ちたい奴、<br />
              <span style={{color:"#C9A84C"}}>俺</span>についてこい
            </h2>
            <div className="flex justify-center items-center gap-2 flex-wrap mb-10">
              <span className="text-sm" style={{color:"#4ADE80"}}>＼</span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{background:"rgba(6,199,85,0.15)", color:"#4ADE80", border:"1px solid rgba(6,199,85,0.35)"}}
              >
                ✓ 完全無料
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{background:"rgba(6,199,85,0.15)", color:"#4ADE80", border:"1px solid rgba(6,199,85,0.35)"}}
              >
                ✓ LINE追加のみ
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{background:"rgba(6,199,85,0.15)", color:"#4ADE80", border:"1px solid rgba(6,199,85,0.35)"}}
              >
                ✓ 特典あり
              </span>
              <span className="text-sm" style={{color:"#4ADE80"}}>／</span>
            </div>

            {/* 3つの特典 見出し */}
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{color:"#C9A84C", letterSpacing:"0.2em"}}>MEMBER BENEFITS</p>
              <p className="text-white font-bold" style={{fontSize:"clamp(1.2rem,3vw,1.6rem)"}}>
                <span style={{color:"#C9A84C"}}>3つ</span>のBull友特典
              </p>
              <div style={{width:"40px", height:"2px", background:"linear-gradient(90deg,#C9A84C,transparent)", margin:"10px auto 0"}} />
            </div>

            {/* メリットカード */}
            <div className="flex flex-col gap-4 mb-10 text-left">
              {[
                { num: "①", title: "『プロが最初に決めている資産配分の考え方』ブック", desc: "資産形成の考え方をまとめた全21ページPDFを無料公開。" },
                { num: "②", title: "元大手信託銀行員への無料相談（1回）", desc: "投資・資産形成・相続・不動産等の疑問を直接プロに相談できます。" },
                { num: "③", title: "LINE登録者限定の相場情報・マーケットコメント", desc: "一般公開しないディープな相場情報をお届けします。" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="font-bold text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{background:"#C9A84C", color:"#1A2E4A", fontSize:"0.85rem"}}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm leading-snug mb-1">{item.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <a
              href="https://lin.ee/FmH7NXr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300"
              style={{
                background: "#06C755",
                color: "#FFFFFF",
                boxShadow: "0 0 32px rgba(6,199,85,0.45), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
              </svg>
              今すぐBull友になる
            </a>

            <p className="text-white/30 text-xs mt-5">LINE追加のみ・完全無料</p>
          </div>
        </section>

        {/* S5: 谷本光章プロフィール */}
        <section className="bg-offwhite py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Profile Photo */}
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
                <h2 className="text-3xl font-bold text-navy mb-6">谷本 光章とは</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "🏦 元大手信託銀行 12年",
                    "📜 FP1級 ／ 証券アナリスト（CMA）／ 宅建士",
                    "🏆 新人コンペ全国2位・社長賞受賞",
                    "💼 個人〜機関投資家まで幅広く担当",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy/80">
                      <span className="text-xl">{item.slice(0, 2)}</span>
                      <span>{item.slice(3)}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center md:text-left">
                  <a href="/about" className="btn-primary">
                    詳しく見る →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S6: Bull友CTA（最終） */}
        <section className="bg-gold py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-navy/60 text-xs font-bold uppercase tracking-widest mb-4">
              🔥 BULL友 MEMBERS ONLY
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">
              Bull友になる
            </h2>

            {/* 安心バッジ */}
            <div className="flex justify-center items-center gap-1.5 mb-8">
              <span className="text-xs font-bold" style={{color: "#1A2E4A"}}>＼</span>
              {["✓ 完全無料", "✓ LINE追加するだけ", "✓ 特典あり"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center font-bold rounded-full whitespace-nowrap"
                  style={{
                    background: "rgba(26,46,74,0.08)",
                    color: "#1A2E4A",
                    border: "1.5px solid #1A2E4A",
                    fontSize: "11px",
                    padding: "4px 10px",
                  }}
                >
                  {badge}
                </span>
              ))}
              <span className="text-xs font-bold" style={{color: "#1A2E4A"}}>／</span>
            </div>

            {/* カード型メリット3点 */}
            <div className="flex flex-col gap-3 mb-8 text-left">
              {[
                {
                  num: "①",
                  title: "『プロが最初に決めている資産配分の考え方』ブック",
                  desc: "資産形成の考え方をまとめた全21ページPDFを無料公開。",
                },
                {
                  num: "②",
                  title: "元大手信託銀行員への無料相談（1回）",
                  desc: "投資・資産形成・相続・不動産等の疑問を直接プロに相談できます。",
                },
                {
                  num: "③",
                  title: "LINE登録者限定の相場情報・マーケットコメント",
                  desc: "一般公開しないディープな相場情報をお届けします。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(26,46,74,0.12)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="font-bold text-sm flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
                    style={{ background: "#1A2E4A", color: "#C9A84C" }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p className="text-navy font-bold text-sm leading-snug mb-0.5">{item.title}</p>
                    <p className="text-navy/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <a
              href="https://lin.ee/FmH7NXr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line inline-flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-xl shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
              </svg>
              今すぐBull友になる
            </a>

            <p className="text-navy/40 text-xs mt-4">LINE追加のみ・完全無料</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
