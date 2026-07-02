import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LINE登録者限定特典｜Bulltalk",
  description: "LINE友だち登録ありがとうございます。限定特典PDFをダウンロードしてください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LineTokutenPage() {
  return (
    <>
      <style>{`
        .download-btn:hover {
          box-shadow: 0 0 48px rgba(201,168,76,0.65), 0 6px 24px rgba(0,0,0,0.4) !important;
          transform: translateY(-2px);
        }
        .download-btn {
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
      `}</style>
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
          {/* 背景グロー（上） */}
          <div style={{
            position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: "700px", height: "350px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          {/* 背景グロー（下） */}
          <div style={{
            position: "absolute", bottom: "-100px", right: "10%",
            width: "400px", height: "400px",
            background: "radial-gradient(ellipse, rgba(6,199,85,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="max-w-2xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>

            {/* バッジ */}
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>
              🎁 LINE MEMBERS ONLY GIFT
            </p>

            <h1
              className="font-bold mb-3 text-white"
              style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", lineHeight: 1.2 }}
            >
              LINE登録者限定特典
            </h1>
            <p className="text-white/60 text-sm mb-10 leading-relaxed">
              友だち登録いただきありがとうございます。<br />
              以下のボタンから限定PDFをダウンロードしてください。
            </p>

            {/* PDFカード */}
            <div
              className="rounded-2xl p-8 mb-8 text-left"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,168,76,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* PDFアイコン＆タイトル */}
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{
                    width: "64px", height: "64px",
                    background: "linear-gradient(135deg, #C9A84C 0%, #e8c96a 100%)",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#1A2E4A" opacity="0.9"/>
                    <path d="M14 2V8H20" fill="#1A2E4A" opacity="0.5"/>
                    <text x="7" y="17" fill="white" fontSize="5" fontWeight="bold" fontFamily="sans-serif">PDF</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <span
                    className="inline-block text-xs font-bold rounded-full mb-2"
                    style={{
                      background: "rgba(201,168,76,0.18)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.4)",
                      padding: "3px 10px",
                    }}
                  >
                    限定資料
                  </span>
                  <h2 className="text-white font-bold text-lg leading-snug">
                    資産配分の考え方
                  </h2>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">
                    元大手信託銀行員が解説する、長期的な資産形成に役立つ配分戦略をまとめたPDF資料です。
                  </p>
                </div>
              </div>

              {/* 区切り線 */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "24px 0" }} />

              {/* 内容ポイント */}
              <ul className="flex flex-col gap-2">
                {[
                  "なぜ資産配分が最重要なのか",
                  "リスク許容度に合わせた配分の目安",
                  "日本人が陥りがちな偏りとその対策",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/70">
                    <span style={{ color: "#C9A84C", flexShrink: 0 }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* ダウンロードボタン */}
            <a
              href="/line-tokuten.pdf"
              download="【LINE特典】Bulltalk_資産配分の考え方.pdf"
              id="line-tokuten-download-btn"
              className="download-btn inline-flex items-center gap-3 font-bold text-lg px-10 py-5 rounded-2xl w-full justify-center"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #e8c96a 100%)",
                color: "#1A2E4A",
                boxShadow: "0 0 32px rgba(201,168,76,0.45), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="currentColor"/>
                <path d="M5 18H19V20H5V18Z" fill="currentColor"/>
              </svg>
              PDFをダウンロードする
            </a>

            <p className="text-white/30 text-xs mt-5">
              ※ このページはLINE登録者限定です。URLの共有はご遠慮ください。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
