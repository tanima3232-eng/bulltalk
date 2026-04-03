import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import { getLatestVideos } from "@/lib/youtube";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bulltalk（ブルトーク）｜日経225・ブル型投資信託の投資判断を毎日配信",
  description:
    "今日の日経225は買い？売り？元大手信託銀行12年・FP1級・CMA・宅建士が場引け前に毎日分析。SBI証券で口座開設して日経225投資を始めよう。",
};

export default async function HomePage() {
  const videos = await getLatestVideos(3);
  return (
    <>
      <Header />
      <main>
        {/* S1: Hero */}
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
              <span className="text-white/40 text-sm">＼</span>
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
              <span className="text-white/40 text-sm">／</span>
            </div>

            <div className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-8">
              <p className="text-gold font-bold text-xl md:text-2xl mb-3">今日は買い？売り？</p>
              <p>元大手信託銀行12年・FP1級・CMA・宅建士が<br />毎日の日経225指数の投資判断を無料配信します</p>
            </div>
          </div>
        </section>

        {/* M6: 最新分析動画 */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center font-black text-navy mb-2" style={{fontSize:"clamp(1.8rem,5vw,2.8rem)", letterSpacing:"0.1em"}}>毎日更新</p>
            <h2 className="section-title">最新分析動画</h2>
            <p className="section-subtitle">毎日場引け前に最新動画を公開中。</p>

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
                分析動画をもっと見る →
              </a>
            </div>
          </div>
        </section>

        {/* LINE CTA セクション */}
        <section
          className="py-20 px-4"
          style={{
            background: "linear-gradient(135deg, #0d1b2e 0%, #1A2E4A 50%, #0d1b2e 100%)",
            position: "relative",
            overflow: "hidden",
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

            {/* バナーコピー */}
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
              <span className="text-white/40 text-sm">＼</span>
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
              <span className="text-white/40 text-sm">／</span>
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
                { num: "①", title: "毎日の「買い・売り」判断をLINEで受け取れる", desc: "場引け前に届く、プロの投資判断をリアルタイムで確認。" },
                { num: "②", title: "LINE登録者限定の相場情報・マーケットコメント", desc: "一般公開しないディープな相場情報をお届けします。" },
                { num: "③", title: "元大手信託銀行員へのLINE無料相談（1回）", desc: "投資・資産形成・相続・不動産等の疑問を直接プロに相談できます。" },
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

        {/* 経歴サマリー */}
        <section className="bg-offwhite py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo Placeholder */}
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-navy/10 border-4 border-gold flex items-center justify-center">
                  <div className="text-center text-navy/50">
                    <div className="text-5xl mb-2">👤</div>
                    <p className="text-sm">プロフィール写真</p>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div>
                <p className="text-gold text-sm font-bold uppercase tracking-wider mb-2">About</p>
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
                <a href="/about" className="btn-primary">
                  詳しく見る →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* M2: 日経225とは */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-center font-black text-navy mb-2" style={{fontSize:"clamp(1.8rem,5vw,2.8rem)", letterSpacing:"0.1em"}}>初めての方へ</p>
            <h2 className="section-title">日経225とは</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                日本を代表する<strong>225銘柄（上場企業）の平均株価指数</strong>です。
                ソニー・トヨタ・三菱UFJなど日本を代表する企業の株価から算出され、
                日本経済の体温計として世界中が注目しています。
              </p>
              <div className="my-4 w-full overflow-x-auto rounded-lg">
                <p className="text-xs text-gray-400 mb-2">図：日経225セクター別構成イメージ</p>
                <svg width="100%" viewBox="0 0 680 410" style={{fontFamily:"sans-serif"}}>
                  {/* 外枠：全体 */}
                  <rect x="20" y="10" width="640" height="385" rx="16" fill="#EEF1F7" stroke="#1A2E4A" strokeWidth="2"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="340" y="38" textAnchor="middle" dominantBaseline="central" fontSize="13">日経225（東証プライム上場企業から選ばれた225銘柄）</text>

                  {/* テクノロジー：ネイビー薄め */}
                  <rect x="40" y="60" width="185" height="115" rx="10" fill="#D6E0EF" stroke="#1A2E4A" strokeWidth="1.5"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="132" y="84" textAnchor="middle" dominantBaseline="central" fontSize="12">テクノロジー</text>
                  <text fill="#2D3748" x="132" y="106" textAnchor="middle" fontSize="11">ソニー</text>
                  <text fill="#2D3748" x="132" y="124" textAnchor="middle" fontSize="11">キーエンス</text>
                  <text fill="#2D3748" x="132" y="142" textAnchor="middle" fontSize="11">東京エレクトロン</text>
                  <text fill="#1A2E4A" x="132" y="162" textAnchor="middle" fontSize="11" fontWeight="bold">他多数</text>

                  {/* 自動車・製造：ゴールド薄め */}
                  <rect x="247" y="60" width="185" height="115" rx="10" fill="#F5ECC8" stroke="#C9A84C" strokeWidth="1.5"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="339" y="84" textAnchor="middle" dominantBaseline="central" fontSize="12">自動車・製造</text>
                  <text fill="#2D3748" x="339" y="106" textAnchor="middle" fontSize="11">トヨタ自動車</text>
                  <text fill="#2D3748" x="339" y="124" textAnchor="middle" fontSize="11">本田技研工業</text>
                  <text fill="#2D3748" x="339" y="142" textAnchor="middle" fontSize="11">三菱重工業</text>
                  <text fill="#A88025" x="339" y="162" textAnchor="middle" fontSize="11" fontWeight="bold">他多数</text>

                  {/* 金融・銀行：deep gold */}
                  <rect x="454" y="60" width="185" height="115" rx="10" fill="#EDDC9A" stroke="#A88025" strokeWidth="1.5"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="546" y="84" textAnchor="middle" dominantBaseline="central" fontSize="12">金融・銀行</text>
                  <text fill="#2D3748" x="546" y="106" textAnchor="middle" fontSize="11">三菱UFJ銀行</text>
                  <text fill="#2D3748" x="546" y="124" textAnchor="middle" fontSize="11">三井住友銀行</text>
                  <text fill="#2D3748" x="546" y="142" textAnchor="middle" fontSize="11">みずほ銀行</text>
                  <text fill="#7A5C10" x="546" y="162" textAnchor="middle" fontSize="11" fontWeight="bold">他多数</text>

                  {/* 小売・消費：中間ネイビー */}
                  <rect x="40" y="192" width="185" height="115" rx="10" fill="#C8D6EA" stroke="#2A4A7F" strokeWidth="1.5"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="132" y="216" textAnchor="middle" dominantBaseline="central" fontSize="12">小売・消費</text>
                  <text fill="#2D3748" x="132" y="238" textAnchor="middle" fontSize="11">ファーストリテイリング</text>
                  <text fill="#2D3748" x="132" y="256" textAnchor="middle" fontSize="11">セブン＆アイ</text>
                  <text fill="#2D3748" x="132" y="274" textAnchor="middle" fontSize="11">リクルートHD</text>
                  <text fill="#2A4A7F" x="132" y="294" textAnchor="middle" fontSize="11" fontWeight="bold">他多数</text>

                  {/* 素材・化学：ベージュゴールド */}
                  <rect x="247" y="192" width="185" height="115" rx="10" fill="#EDE5CB" stroke="#9C8A5A" strokeWidth="1.5"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="339" y="216" textAnchor="middle" dominantBaseline="central" fontSize="12">素材・化学</text>
                  <text fill="#2D3748" x="339" y="238" textAnchor="middle" fontSize="11">信越化学工業</text>
                  <text fill="#2D3748" x="339" y="256" textAnchor="middle" fontSize="11">旭化成</text>
                  <text fill="#2D3748" x="339" y="274" textAnchor="middle" fontSize="11">住友化学</text>
                  <text fill="#7A6840" x="339" y="294" textAnchor="middle" fontSize="11" fontWeight="bold">他多数</text>

                  {/* その他：ネイビー+ゴールドグラデ */}
                  <rect x="454" y="192" width="185" height="115" rx="10" fill="#E0D9C5" stroke="#B8962A" strokeWidth="1.5"/>
                  <text fontWeight="bold" fill="#1A2E4A" x="546" y="216" textAnchor="middle" dominantBaseline="central" fontSize="12">その他</text>
                  <text fill="#2D3748" x="546" y="238" textAnchor="middle" fontSize="11">東日本旅客鉄道</text>
                  <text fill="#2D3748" x="546" y="256" textAnchor="middle" fontSize="11">東京電力HD</text>
                  <text fill="#2D3748" x="546" y="274" textAnchor="middle" fontSize="11">NTT</text>
                  <text fill="#C9A84C" x="546" y="294" textAnchor="middle" fontSize="11" fontWeight="bold">他多数</text>

                  {/* フッター注記 */}
                  <rect x="60" y="323" width="560" height="28" rx="8" fill="#FFFFFF" stroke="#C9A84C" strokeWidth="0.8" opacity="0.7"/>
                  <text fill="#1A2E4A" x="340" y="337" textAnchor="middle" dominantBaseline="central" fontSize="11">構成銘柄は年2回定期見直し＋上場廃止等による臨時見直しあり</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* M3: 日経225に投資するとは */}
        <section className="bg-offwhite py-16 px-4">
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
            {/* 投資信託の仕組み図解 */}
            <div className="my-4 w-full overflow-x-auto mt-6">
              <div style={{fontFamily:"'Hiragino Kaku Gothic Pro','Noto Sans JP',sans-serif", padding:"20px"}}>
                <h4 style={{textAlign:"center", color:"#1A2E4A", fontSize:"15px", fontWeight:"bold", marginBottom:"24px", letterSpacing:"0.05em"}}>投資信託の仕組み</h4>

                <div style={{width:"max-content", margin:"0 auto"}}>
                {/* フォワードフロー：投資家 → 投資信託 → 運用先 */}
                <div style={{display:"flex", alignItems:"center", gap:"0", flexWrap:"nowrap"}}>

                  {/* 投資家 */}
                  <div style={{background:"#fff", border:"2px solid #1A2E4A", borderRadius:"10px", padding:"12px 10px", textAlign:"center", minWidth:"90px", maxWidth:"110px", flexShrink:0}}>
                    <div style={{fontSize:"22px", marginBottom:"4px"}}>👥</div>
                    <div style={{fontSize:"12px", fontWeight:"bold", color:"#1A2E4A", lineHeight:"1.4"}}>投資家<br />（受益者）</div>
                    <div style={{fontSize:"10px", color:"#666", marginTop:"3px", lineHeight:"1.4"}}>少額から<br />参加可能</div>
                  </div>

                  {/* → 資金 → */}
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"2px", flexShrink:0, width:"56px"}}>
                    <div style={{fontSize:"9px", color:"#888", textAlign:"center", lineHeight:"1.3", whiteSpace:"nowrap"}}>資金を<br />まとめる</div>
                    <svg width="48" height="20" viewBox="0 0 48 20">
                      <defs><marker id="ah1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1A2E4A"/></marker></defs>
                      <line x1="2" y1="10" x2="42" y2="10" stroke="#1A2E4A" strokeWidth="2" markerEnd="url(#ah1)"/>
                    </svg>
                  </div>

                  {/* 投資信託（ファンド） */}
                  <div style={{background:"#1A2E4A", border:"2px solid #1A2E4A", borderRadius:"10px", padding:"12px 10px", textAlign:"center", minWidth:"90px", maxWidth:"110px", flexShrink:0}}>
                    <div style={{fontSize:"20px", marginBottom:"4px"}}>📦</div>
                    <div style={{fontSize:"12px", fontWeight:"bold", color:"#C9A84C", lineHeight:"1.4"}}>投資信託<br />（ファンド）</div>
                    <div style={{fontSize:"10px", color:"#F4F4F2", marginTop:"3px", lineHeight:"1.4"}}>プロが運用</div>
                  </div>

                  {/* → 分散投資 → */}
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"2px", flexShrink:0, width:"56px"}}>
                    <div style={{fontSize:"9px", color:"#888", textAlign:"center", lineHeight:"1.3", whiteSpace:"nowrap"}}>分散<br />投資</div>
                    <svg width="48" height="20" viewBox="0 0 48 20">
                      <defs><marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#C9A84C"/></marker></defs>
                      <line x1="2" y1="10" x2="42" y2="10" stroke="#C9A84C" strokeWidth="2" markerEnd="url(#ah2)"/>
                    </svg>
                  </div>

                  {/* 運用先資産 */}
                  <div style={{display:"flex", flexDirection:"column", gap:"6px", flexShrink:0}}>
                    <div style={{background:"#fff", border:"1.5px solid #C9A84C", borderRadius:"8px", padding:"6px 10px", fontSize:"11px", fontWeight:"bold", color:"#1A2E4A", textAlign:"center", minWidth:"80px"}}>📈 株式</div>
                    <div style={{background:"#fff", border:"1.5px solid #C9A84C", borderRadius:"8px", padding:"6px 10px", fontSize:"11px", fontWeight:"bold", color:"#1A2E4A", textAlign:"center", minWidth:"80px"}}>🏛️ 債券</div>
                    <div style={{background:"#fff", border:"1.5px solid #C9A84C", borderRadius:"8px", padding:"6px 10px", fontSize:"11px", fontWeight:"bold", color:"#1A2E4A", textAlign:"center", minWidth:"80px"}}>🌏 不動産</div>
                  </div>
                </div>

                {/* リターンフロー：収益が戻る */}
                <div style={{display:"flex", alignItems:"center", gap:"0", marginTop:"14px"}}>
                  <div style={{width:"90px", minWidth:"90px"}}></div>
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"2px", flexShrink:0, width:"56px"}}>
                    <svg width="48" height="20" viewBox="0 0 48 20">
                      <defs><marker id="ah3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1A2E4A"/></marker></defs>
                      <line x1="42" y1="10" x2="2" y2="10" stroke="#1A2E4A" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#ah3)"/>
                    </svg>
                    <div style={{fontSize:"9px", color:"#1A2E4A", fontWeight:"bold", textAlign:"center", lineHeight:"1.3"}}>収益還元</div>
                  </div>
                  <div style={{width:"90px", minWidth:"90px"}}></div>
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"2px", flexShrink:0, width:"56px"}}>
                    <svg width="48" height="20" viewBox="0 0 48 20">
                      <defs><marker id="ah4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#C9A84C"/></marker></defs>
                      <line x1="42" y1="10" x2="2" y2="10" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#ah4)"/>
                    </svg>
                    <div style={{fontSize:"9px", color:"#C9A84C", fontWeight:"bold", textAlign:"center", lineHeight:"1.3"}}>運用益</div>
                  </div>
                  <div style={{width:"88px", minWidth:"88px"}}></div>
                </div>

                {/* ポイント3つ */}
                <div style={{display:"flex", gap:"10px", marginTop:"18px"}}>
                  <div style={{background:"#fff", borderLeft:"4px solid #1A2E4A", borderRadius:"6px", padding:"8px 12px", fontSize:"11px", color:"#1A2E4A", width:"120px", lineHeight:"1.6"}}>
                    <strong>少額から参加</strong><br />100円〜投資可能
                  </div>
                  <div style={{background:"#fff", borderLeft:"4px solid #C9A84C", borderRadius:"6px", padding:"8px 12px", fontSize:"11px", color:"#1A2E4A", width:"120px", lineHeight:"1.6"}}>
                    <strong>分散でリスク低減</strong><br />個別銘柄リスクを分散
                  </div>
                  <div style={{background:"#fff", borderLeft:"4px solid #1A2E4A", borderRadius:"6px", padding:"8px 12px", fontSize:"11px", color:"#1A2E4A", width:"120px", lineHeight:"1.6"}}>
                    <strong>プロに任せる</strong><br />専門家が運用判断
                  </div>
                </div>
                </div>

                {/* 注記 */}
                <div style={{fontSize:"10px", color:"#888", textAlign:"center", marginTop:"18px", borderTop:"1px solid #ccc", paddingTop:"10px", lineHeight:"1.6"}}>
                  ※本図は投資助言ではありません。投資は自己責任でお願いします。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M4: ブル型という投資戦略 */}
        <section className="bg-white py-16 px-4">
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
              {/* ブルファンドの図 */}
              <div className="my-4 w-full overflow-x-auto">
                <div style={{maxWidth:"520px", margin:"0 auto", fontFamily:"'Hiragino Kaku Gothic Pro','Noto Sans JP',sans-serif"}}>
                  <h4 style={{textAlign:"center", color:"#1A2E4A", fontSize:"15px", fontWeight:"bold", marginBottom:"24px", letterSpacing:"0.05em"}}>
                    （イメージ図）ブル型4.3倍の仕組み
                  </h4>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{position:"relative", height:"300px", display:"flex", alignItems:"flex-end", gap:"40px", paddingBottom:"2px"}}>
                      {/* ベースライン */}
                      <div style={{position:"absolute", bottom:"0", left:"0", right:"0", height:"2px", background:"#1A2E4A"}}></div>

                      {/* 左バー：純資産総額 */}
                      <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", height:"100%"}}>
                        <div style={{fontSize:"11px", color:"#1A2E4A", fontWeight:"bold", textAlign:"center", marginBottom:"6px", lineHeight:"1.5"}}>純資産<br />総額</div>
                        <div style={{background:"#1A2E4A", width:"90px", height:"70px", borderRadius:"4px 4px 0 0"}}></div>
                      </div>

                      {/* 右バー：株価指数先物 + ブラケット */}
                      <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", height:"100%", position:"relative"}}>
                        <div style={{fontSize:"11px", color:"#1A2E4A", fontWeight:"bold", textAlign:"center", marginBottom:"6px", lineHeight:"1.5"}}>株価指数先物<br />取引の買建て額</div>
                        <div style={{background:"#C9A84C", width:"90px", height:"240px", borderRadius:"4px 4px 0 0", position:"relative"}}>
                          <div style={{position:"absolute", bottom:"70px", left:"0", right:"0", height:"2px", background:"#F4F4F2", opacity:0.6}}></div>
                        </div>
                        {/* ブラケット */}
                        <div style={{position:"absolute", right:"-52px", bottom:"0", height:"240px"}}>
                          <div style={{position:"absolute", right:"0", top:"0", bottom:"0", width:"2px", background:"#888"}}></div>
                          <div style={{position:"absolute", right:"0", top:"0", width:"10px", height:"2px", background:"#888"}}></div>
                          <div style={{position:"absolute", right:"0", top:"170px", width:"10px", height:"2px", background:"#888"}}></div>
                          <div style={{position:"absolute", right:"0", bottom:"0", width:"10px", height:"2px", background:"#888"}}></div>
                          <div style={{position:"absolute", left:"14px", top:"70px", fontSize:"11px", color:"#333", fontWeight:"bold", lineHeight:"1.5", whiteSpace:"nowrap"}}>
                            純資産の<br />概ね<br /><span style={{color:"#C9A84C", fontSize:"14px"}}>4.3倍</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 凡例 */}
                  <div style={{display:"flex", gap:"24px", justifyContent:"center", marginTop:"16px"}}>
                    <div style={{display:"flex", alignItems:"center", gap:"6px", fontSize:"11px", color:"#1A2E4A"}}>
                      <div style={{width:"14px", height:"14px", borderRadius:"2px", background:"#1A2E4A"}}></div>
                      純資産総額
                    </div>
                    <div style={{display:"flex", alignItems:"center", gap:"6px", fontSize:"11px", color:"#1A2E4A"}}>
                      <div style={{width:"14px", height:"14px", borderRadius:"2px", background:"#C9A84C"}}></div>
                      株価指数先物取引の買建て額
                    </div>
                  </div>

                  {/* 注記 */}
                  <div style={{fontSize:"9px", color:"#666", textAlign:"left", marginTop:"20px", lineHeight:"1.8", borderTop:"1px solid #ccc", paddingTop:"12px"}}>
                    ※本図は投資助言ではありません。投資は自己責任でお願いします。<br />
                    下落時は損失も4.3倍程度になります。過去の実績は将来を保証しません。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M5: 4.3倍ブルとは */}
        <section className="bg-offwhite py-16 px-4">
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
                  <p className="text-white/50 text-xs mt-1">※証券会社や商品によって異なる場合があります。</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-gold font-bold mb-1">購入場所</p>
                  <p className="text-white">各証券会社で購入可能</p>
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


        {/* M7: 口座開設3ステップ */}
        <section className="bg-light-gold py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">口座開設の方法</h2>
            <p className="section-subtitle">SBI証券なら最短翌営業日から投資スタートできます</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { step: "STEP 1", title: "証券会社のサイトにアクセス", icon: "🌐" },
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
              証券口座を開設する（無料）
            </a>
            <p style={{fontSize:"9px"}} className="text-gray-500 mt-4">※投資信託や株式への投資には証券会社での口座開設が必要となります。</p>
          </div>
        </section>

        {/* 最新コラム */}
        <section className="bg-offwhite py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-navy mb-1 flex items-center gap-2">
              <span>📝</span> 最新コラム
            </h2>
            <p className="text-gray-500 text-sm mb-6">資産形成の基礎から、プロの知識を無料で学べます。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { cat: "資産形成", title: "人生で必要なお金はいくら？ライフイベントから逆算する", slug: "asset-01-life-money" },
                { cat: "資産形成", title: "インフレ時代に「預金だけ」が危険な理由", slug: "asset-07-inflation" },
                { cat: "資産形成", title: "NISA完全ガイド｜非課税で資産を増やす仕組みと始め方", slug: "asset-02-nisa-guide" },
              ].map((article) => (
                <a key={article.slug} href={`/column/${article.slug}`} className="card p-5 group block">
                  <span className="inline-block text-xs font-bold text-gold border border-gold rounded-full px-3 py-1 mb-3">
                    {article.cat}
                  </span>
                  <h4 className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-relaxed">
                    {article.title}
                  </h4>
                </a>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-5">
              相続・不動産に関するコラムも多数掲載しています。
            </p>
            <div className="text-center mt-3">
              <a href="/column" className="btn-primary px-8 py-3 inline-block">
                もっと見る →
              </a>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
