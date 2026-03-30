import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";

export const metadata: Metadata = {
  title: "相談メニュー｜無料・有料Zoom相談",
  description: "お金・投資・相続・不動産について元信託銀行員に相談できます。LINEから無料Zoom相談を申し込む。",
};

export default function ConsultPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Consult</p>
            <h1 className="text-3xl md:text-4xl font-bold">相談メニュー</h1>
            <p className="text-white/70 mt-4">元大手信託銀行員に気軽に相談できます</p>
          </div>
        </section>

        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8 border-t-4 border-green-500">
                <p className="text-green-600 font-bold text-sm mb-2">FREE</p>
                <h2 className="text-2xl font-bold text-navy mb-4">無料Zoom相談</h2>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  <li>✅ 30分間</li>
                  <li>✅ 日経225・投資信託の基礎</li>
                  <li>✅ NISA・iDeCoの始め方</li>
                  <li>✅ 資産運用の方向性確認</li>
                </ul>
                <a href="#line-url-placeholder" className="btn-line w-full block text-center py-3 rounded-xl">
                  LINEから申し込む（無料）
                </a>
              </div>

              <div className="card p-8 border-t-4 border-gold">
                <p className="text-gold font-bold text-sm mb-2">PREMIUM</p>
                <h2 className="text-2xl font-bold text-navy mb-4">有料Zoom相談</h2>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  <li>✅ 60分間</li>
                  <li>✅ 相続対策・資産承継</li>
                  <li>✅ 不動産活用・相続評価</li>
                  <li>✅ ポートフォリオ診断</li>
                  <li>✅ 個別の投資判断サポート</li>
                </ul>
                <a href="#line-url-placeholder" className="btn-primary w-full block text-center py-3 rounded-xl">
                  LINEから詳細を聞く
                </a>
              </div>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
