import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bull友会員登録（無料）｜Bulltalk",
  description: "LINEを友だち追加するだけで完全無料。毎日の日経225買い売り判断・限定相場情報・元信託銀行員への1回無料相談が受けられます。",
};

export default function LinePage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="min-h-screen py-20 px-4 flex items-center"
          style={{
            background: "linear-gradient(135deg, #0d1b2e 0%, #1A2E4A 50%, #0d1b2e 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 背景グロー */}
          <div style={{
            position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: "600px", height: "300px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="max-w-2xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>

            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>
              🔥 BULL友 MEMBERS ONLY
            </p>
            <h1
              className="font-bold mb-4 text-white"
              style={{ fontSize: "clamp(2rem,6vw,3rem)", lineHeight: 1.15 }}
            >
              Bull友になる
            </h1>

            {/* 安心バッジ */}
            <div className="flex justify-center items-center gap-2 flex-wrap mb-10">
              <span className="text-white/40 text-sm">＼</span>
              {["\u2713 \u5b8c\u5168\u7121\u6599", "\u2713 LINE\u8ffd\u52a0\u3059\u308b\u3060\u3051", "\u2713 \u7279\u5178\u3042\u308a"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(6,199,85,0.15)", color: "#4ADE80", border: "1px solid rgba(6,199,85,0.35)" }}
                >
                  {badge}
                </span>
              ))}
              <span className="text-white/40 text-sm">／</span>
            </div>

            {/* メリット3点 */}
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
                    style={{ background: "#C9A84C", color: "#1A2E4A", fontSize: "0.85rem" }}
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
      </main>
      <Footer />
    </>
  );
}
