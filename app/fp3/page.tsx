import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";

export const metadata: Metadata = {
  title: "FP3級講座｜近日公開予定",
  description: "元FP1級・信託銀行員によるFP3級対策講座。近日公開予定です。",
};

export default function FP3Page() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-white min-h-[60vh] py-20 px-4 flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Coming Soon</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">FP3級講座</h1>
            <p className="text-white/80 text-lg mb-4">
              元大手信託銀行員・FP1級保有者による<br />
              FP3級対策講座を準備中です。
            </p>
            <p className="text-white/60 mb-10">
              LINEに登録いただくと、公開時にいち早くお知らせします。
            </p>
            <div className="bg-white/10 rounded-2xl p-8 inline-block">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-white font-bold text-xl">近日公開予定</p>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
