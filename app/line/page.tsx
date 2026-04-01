import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LINE登録｜bull友になる（無料）",
  description: "毎日の225分析・金融コラムをLINEで受け取ろう。無料Zoom相談もLINEから。",
};

export default function LinePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gold min-h-screen py-20 px-4 flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Bull友になる<br />（LINE登録）
            </h1>
            <p className="text-navy/80 text-lg mb-4">セミナー情報を受け取る</p>
            <p className="text-navy/80 mb-10">無料相談もLINEから</p>
            <a
              href="https://lin.ee/FmH7NXr"
              className="btn-line inline-flex items-center justify-center gap-3 text-xl px-10 py-5 rounded-2xl shadow-xl"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
              </svg>
              LINEで無料相談する
            </a>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
