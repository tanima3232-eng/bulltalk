import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "オルタナティブ投資｜Bulltalk - 株・債券以外の資産分散を学ぶ",
  description:
    "暗号資産・不動産デジタル証券など伝統的資産以外への分散投資を元大手信託銀行員12年・FP1級が解説。マネックスビットコイン・ALTERNA（オルタナ）などを紹介。",
};

export default function AlternativePage() {
  return (
    <>
      <Header />
      <main>
        {/* PR表示 */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 text-center">
          <p className="text-xs text-gray-400">本ページにはアフィリエイト広告（PR）が含まれています。<br className="sm:hidden" />2026年4月時点の情報に基づきます。</p>
        </div>

        {/* Hero */}
        <section
          className="py-20 px-4 text-white"
          style={{
            background: "linear-gradient(135deg,#0d1b2e 0%,#1a2e4a 50%,#2d1b4e 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute", top: "-80px", right: "-100px",
              width: "500px", height: "500px",
              background: "radial-gradient(ellipse,rgba(139,92,246,0.15) 0%,transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: "-60px", left: "-80px",
              width: "400px", height: "400px",
              background: "radial-gradient(ellipse,rgba(201,168,76,0.12) 0%,transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div className="max-w-3xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#A78BFA" }}>ALTERNATIVE INVESTMENT</p>
            <h1 className="font-bold mb-4" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", lineHeight: 1.2 }}>
              株・債券だけじゃない。<br />
              <span className="text-gold">次の一手を、ここから。</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              不動産・インフラ・暗号資産など<br />
              伝統的資産以外への分散投資を学ぶ
            </p>
          </div>
        </section>

        {/* オルタナティブ投資とは */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-4">オルタナティブ投資とは</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              株式・債券などの伝統的資産以外の投資対象を指します。
              不動産・インフラ・ヘッジファンド・暗号資産などが含まれ、
              <strong className="text-navy">伝統資産との相関が低く、ポートフォリオの分散効果</strong>が期待されています。
              ただし、<strong className="text-navy">商品によってリスク特性が大きく異なります</strong>ので、目的に合わせて選ぶことが重要です。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-4 bg-offwhite rounded-2xl p-5">
                <span className="text-3xl flex-shrink-0">🏢</span>
                <div>
                  <p className="font-bold text-navy mb-1">不動産・インフラ投資</p>
                  <p className="text-gray-500 text-sm leading-relaxed">値動きだけでなく、安定した分配金収入を重視したい方に向いています。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-offwhite rounded-2xl p-5">
                <span className="text-3xl flex-shrink-0">₿</span>
                <div>
                  <p className="font-bold text-navy mb-1">暗号資産</p>
                  <p className="text-gray-500 text-sm leading-relaxed">一般的に価格変動が大きく、リスクが高い資産です。資産の一部として分散投資を検討する際の選択肢の一つです。仕組みを十分理解した上での投資が必要です。</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              ※オルタナティブ投資は株、債券、投資信託と同様に元本保証はありません。投資は自己責任でお願いします。
            </p>
          </div>
        </section>

        {/* ===== セクション①：不動産・インフラ投資 ===== */}
        <section className="bg-offwhite py-14 px-4">
          <div className="max-w-3xl mx-auto">

            {/* セクションヘッダー */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#1A2E4A,#2A4A7F)" }}
              >
                🏢
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#C9A84C" }}>
                  安定した利回りを得たい方
                </p>
                <h2 className="text-navy font-bold text-xl">不動産・インフラ投資</h2>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 pl-1">
              不動産やインフラを裏付資産とするデジタル証券です。値動きだけでなく、安定した分配金収入を重視したい方に向いています。
            </p>

            {/* ALTERNA カード（審査中・非表示） */}
            {/*
            ========== 提携審査通過後に下記コメントを解除 ==========
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{ border: "2px solid #1A2E4A" }}
            >
              <div className="px-8 py-6" style={{ background: "linear-gradient(135deg,#1e3a5f,#2d4a70)" }}>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">DIGITAL SECURITIES</p>
                    <h3 className="text-white font-bold text-xl">ALTERNA（オルタナ）</h3>
                    <p className="text-white/50 text-xs mt-1">提供：三井物産デジタル・アセットマネジメント（MDM）</p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-8 py-6">
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">種類</p>
                    <p className="text-navy font-bold">不動産・インフラを裏付資産としたデジタル証券</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">最低投資額</p>
                    <p className="text-navy font-bold">10万円から</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">想定利回り</p>
                    <p className="text-navy font-bold">3.0〜4.3%/年（過去実績）</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">税制</p>
                    <p className="text-navy font-bold">申告分離課税 20.315%</p>
                  </div>
                </div>
                <div className="text-xs text-red-500 leading-relaxed mb-6">
                  ⚠ ALTERNA（オルタナ）が提供する金融商品は元本や将来の投資成果を保証するものではありません。
                </div>
                <a
                  href="[提携承認後のアフィリエイトURLを差し替え]"
                  target="_blank"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full text-center py-4 rounded-2xl font-bold text-base"
                  style={{ background: "#1A2E4A", color: "#FFFFFF" }}
                >
                  公式サイトへ →
                </a>
              </div>
            </div>
            ============================================================= */}



          </div>
        </section>

        {/* ===== セクション②：暗号資産 ===== */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-3xl mx-auto">

            {/* セクションヘッダー */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#4C1D95,#7C3AED)" }}
              >
                ₿
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#7C3AED" }}>
                  分散投資・値上がり益を狙いたい方
                </p>
                <h2 className="text-navy font-bold text-xl">暗号資産</h2>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-2 pl-1">
              暗号資産は一般的に価格変動が大きく、リスクが高い資産です。一方で積立投資を活用するなど、
              リスクを分散しながら、<strong className="text-navy">暗号資産の大きな値動きによる値上がり益を狙える可能性があります。</strong>
              選択肢の一つとして掲載しております。
            </p>
            <div
              className="flex items-start gap-2 text-xs leading-relaxed mb-8 p-3 rounded-xl"
              style={{ background: "#F3F4F6", border: "1px solid #D1D5DB" }}
            >
              <span className="font-bold flex-shrink-0 text-gray-400">※</span>
              <span className="text-gray-500">暗号資産は法定通貨と異なり、価格変動リスクが非常に高い資産です。余裕資金の範囲内で、リスクを十分理解した上で投資してください。</span>
            </div>

            {/* マネックスビットコイン カード */}
            <div
              className="rounded-3xl overflow-hidden shadow-lg mb-6"
              style={{ border: "2px solid #C9A84C" }}
            >
              {/* カードヘッダー */}
              <div
                className="px-8 py-6"
                style={{ background: "linear-gradient(135deg,#1A2E4A,#2A4A7F)" }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">CRYPTO ASSET CFD</p>
                    <h3 className="text-white font-bold text-xl">マネックスビットコイン</h3>
                    <p className="text-white/50 text-xs mt-1">提供：マネックス証券株式会社</p>
                  </div>

                </div>
              </div>

              {/* カード本文 */}
              <div className="bg-white px-8 py-6">
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">種類</p>
                    <p className="text-navy font-bold">暗号資産CFD（差金決済取引）</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">リスク</p>
                    <p className="font-bold text-orange-500">高（レバレッジ最大2倍）</p>
                  </div>
                  <div className="col-span-2 bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">こんな人に</p>
                    <p className="text-navy font-bold">値上がりを期待して、伝統的資産（株や債券）との一部分散投資で保有したい方</p>
                  </div>
                </div>

                {/* 必須注意表示 */}
                <div className="space-y-2 mb-6">
                  {[
                    "マネックスビットコインはビットコイン現物取引ではなく、暗号資産CFD（差金決済取引）です。",
                    "レバレッジ最大2倍をかけた取引であり、投資元本を超える損失が生じる可能性があります。",
                    "スマートフォンアプリ専用のサービスです。PCからの取引には対応していません。",
                    "暗号資産は法定通貨と異なり、価格変動リスクが非常に高い資産です。",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs leading-relaxed"
                      style={{ color: "#6B7280" }}
                    >
                      <span className="flex-shrink-0 text-gray-400">※</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAボタン（PC：アフィリエイトURL / スマホ：monex.co.jp） */}
                {/* PC用 */}
                <a
                  href="https://h.accesstrade.net/sp/cc?rk=0100p7mq00oqbc"
                  target="_self"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hidden md:block w-full text-center py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                    color: "#1A2E4A",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                  }}
                >
                  <img
                    src="https://h.accesstrade.net/sp/rr?rk=0100p7mq00oqbc"
                    alt=""
                    style={{ display: "none" }}
                    width={1}
                    height={1}
                  />
                  公式サイトへ →
                </a>
                {/* スマホ用 */}
                <a
                  href="https://h.accesstrade.net/sp/cc?rk=0100p7mq00oqbc"
                  target="_self"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block md:hidden w-full text-center py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                    color: "#1A2E4A",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                  }}
                >
                  <img
                    src="https://h.accesstrade.net/sp/rr?rk=0100p7mq00oqbc"
                    alt=""
                    style={{ display: "none" }}
                    width={1}
                    height={1}
                  />
                  公式サイトへ →
                </a>
                {/* スマホ環境注意 */}
                <div
                  className="flex items-start gap-3 mt-4 rounded-2xl px-4 py-3"
                  style={{ background: "#F8F9FA", border: "1px solid #E5E7EB" }}
                >
                  <span className="text-base flex-shrink-0">📱</span>
                  <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
                    スマートフォンでアクセスの際、環境によっては一時的にエラーが表示される場合があります。その際はChromeまたはSafariの通常モードからお試しいただくか、PCからのアクセスをお試しください。
                  </p>
                </div>
              </div>
            </div>

            {/* コインチェック カード（審査中・非表示） */}
            {/*
            ========== 提携審査通過後に下記コメントを解除 ==========
            <div
              className="rounded-3xl overflow-hidden shadow-lg"
              style={{ border: "2px solid #E5E7EB" }}
            >
              <div className="px-8 py-6" style={{ background: "linear-gradient(135deg,#1A2E4A,#2A4A7F)" }}>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">CRYPTO ASSET</p>
                <h3 className="text-white font-bold text-xl">コインチェック（Coincheck）</h3>
                <p className="text-white/50 text-xs mt-1">提供：コインチェック株式会社（マネックスグループ傘下）</p>
              </div>
              <div className="bg-white px-8 py-6">
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">種類</p>
                    <p className="text-navy font-bold">暗号資産現物取引</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-3">
                    <p className="text-gray-400 text-xs mb-1">リスク</p>
                    <p className="font-bold text-orange-500">中〜高（価格変動が大きい）</p>
                  </div>
                </div>
                <a
                  href="[提携承認後のアフィリエイトURLを差し替え]"
                  target="_blank"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full text-center py-4 rounded-2xl font-bold text-base"
                  style={{ background: "#1A2E4A", color: "#FFFFFF" }}
                >
                  公式サイトへ →
                </a>
              </div>
            </div>
            ============================================================= */}



          </div>
        </section>

        {/* アドバイスCTA */}
        <section
          className="py-16 px-4"
          style={{ background: "linear-gradient(135deg,#0d1b2e,#2d1b4e,#0d1b2e)" }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#A78BFA" }}>投資を始める前に</p>
            <h2 className="text-white font-bold text-xl mb-4">まずは仕組みを理解しましょう</h2>
            <p className="text-white/60 text-sm mb-6">
              オルタナティブ投資はリスクが高く、<br className="sm:hidden" />仕組みを理解してから始めることが重要です。<br className="sm:hidden" />
              不明点は無料相談できます。
            </p>
            <a
              href="https://lin.ee/FmH7NXr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300"
              style={{ background: "#06C755", color: "#FFFFFF", boxShadow: "0 0 24px rgba(6,199,85,0.4)" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
              </svg>
              LINEで無料相談する
            </a>
          </div>
        </section>

        {/* 免責 */}
        <section className="bg-gray-50 py-8 px-4 border-t border-gray-200">
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-xs text-gray-400">※マネックスビットコインはビットコイン現物取引ではなく、暗号資産CFD（差金決済取引）です。</p>
            <p className="text-xs text-gray-400">※レバレッジ最大2倍をかけた取引であり、投資元本を超える損失が生じる可能性があります。</p>
            <p className="text-xs text-gray-400">※スマートフォンアプリ専用のサービスです。PCからの取引には対応していません。</p>
            <p className="text-xs text-gray-400">※暗号資産は法定通貨と異なり、価格変動リスクが非常に高い資産です。</p>
            <p className="text-xs text-gray-400">※本ページにはアフィリエイト広告（PR）が含まれています。</p>
            <p className="text-xs text-gray-400">※本ページは情報提供を目的としており、投資助言ではありません。</p>
            <p className="text-xs text-gray-400">※投資は自己責任でお願いします。</p>
            <p className="text-xs text-gray-400">※2026年4月時点の情報に基づきます。制度・サービス内容は変更される可能性があります。</p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
