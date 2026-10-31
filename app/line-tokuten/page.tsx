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
      <Header />
      <main>
        <section className="brand-hero brand-hero--quiet py-16 px-4 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
              🎁 LINE MEMBERS ONLY GIFT
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              LINE登録者限定特典
            </h1>
            <p className="text-white/70 text-sm leading-relaxed">
              友だち登録いただきありがとうございます。<br />
              以下のボタンから限定PDFをダウンロードしてください。
            </p>
          </div>
        </section>

        <section className="brand-membership py-16 px-4" aria-label="限定資料のダウンロード">
          <div className="max-w-2xl mx-auto text-center">
            {/* PDFカード */}
            <div className="bg-light-navy border border-slate-200 rounded-2xl p-5 sm:p-8 mb-8 text-left">
              {/* PDFアイコン＆タイトル */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="shrink-0 flex items-center justify-center rounded-xl w-14 h-14 sm:w-16 sm:h-16 bg-navy">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="white" opacity="0.9"/>
                    <path d="M14 2V8H20" fill="white" opacity="0.5"/>
                    <text x="7" y="17" fill="var(--brand-navy)" fontSize="5" fontWeight="bold" fontFamily="sans-serif">PDF</text>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-xs font-bold rounded-full mb-2 bg-white text-navy border border-slate-200 px-2.5 py-1">
                    限定資料
                  </span>
                  <h2 className="text-navy font-bold text-lg leading-snug">
                    資産配分の考え方
                  </h2>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    元大手信託銀行員が解説する、長期的な資産形成に役立つ資産配分の考え方をまとめたPDF資料です。
                  </p>
                </div>
              </div>

              {/* 内容ポイント */}
              <ul className="flex flex-col gap-3 border-t border-slate-200 mt-6 pt-6">
                {[
                  "なぜプロは商品より先に資産配分を決めるのか",
                  "お金を「使う・備える・残す・増やす」で整理する方法",
                  "長期で資産形成するための基本的な考え方",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                    <span className="text-navy font-bold shrink-0">✓</span>
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
              className="btn-primary inline-flex items-center justify-center gap-3 w-full text-base sm:text-lg px-4 sm:px-8 py-4"
            >
              <svg className="shrink-0" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="currentColor"/>
                <path d="M5 18H19V20H5V18Z" fill="currentColor"/>
              </svg>
              PDFをダウンロードする
            </a>

            <p className="text-slate-500 text-xs mt-5 leading-relaxed">
              ※ このページはLINE登録者限定です。URLの共有はご遠慮ください。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
