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
        <section className="brand-hero brand-hero--standard py-16 px-4 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
              🔥 BULL友 MEMBERS ONLY
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Bull友になる
            </h1>
          </div>
        </section>

        <section className="brand-membership py-16 px-4" aria-label="Bull友の特典と登録">
          <div className="max-w-2xl mx-auto text-center">
            {/* 安心バッジ */}
            <div className="flex justify-center items-center gap-2 mb-10">
              <span className="text-xs font-bold text-slate-400 shrink-0">＼</span>
              <div className="flex flex-wrap justify-center gap-2 min-w-0">
                {["✓ 完全無料", "✓ LINE追加するだけ", "✓ 特典あり"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center font-bold rounded-full whitespace-nowrap bg-offwhite text-slate-600 border border-slate-200 text-[11px] px-2.5 py-1"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 shrink-0">／</span>
            </div>

            {/* メリット3点 */}
            <div className="flex flex-col gap-4 mb-10 text-left">
              {[
                { num: "①", title: "『プロが最初に決めている資産配分の考え方』ブック", desc: "資産形成の考え方をまとめた全21ページPDFを無料公開。" },
                { num: "②", title: "元大手信託銀行員への無料相談（1回）", desc: "投資・資産形成・相続・不動産等の疑問を直接プロに相談できます。" },
                { num: "③", title: "LINE登録者限定の相場情報・マーケットコメント", desc: "一般公開しないディープな相場情報をお届けします。" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-light-navy border border-slate-200 rounded-2xl flex items-start gap-3 sm:gap-4 p-4 sm:p-5"
                >
                  <span className="font-bold text-sm shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-navy text-white">
                    {item.num}
                  </span>
                  <div className="min-w-0">
                    <p className="text-navy font-bold text-sm leading-relaxed mb-1">{item.title}</p>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <a
              href="https://lin.ee/FmH7NXr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold transition-colors w-full sm:w-auto max-w-full text-base sm:text-lg px-6 sm:px-8 py-4 rounded-xl"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
              </svg>
              今すぐBull友になる
            </a>

            <p className="text-slate-500 text-xs mt-5">完全無料</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
