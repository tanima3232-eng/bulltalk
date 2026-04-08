import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "証券口座開設｜Bulltalk - あなたに合った証券口座を比較",
  description:
    "元大手信託銀行員12年・FP1級が忖度なしで解説。NISA対応の証券口座を手数料・使いやすさ・商品数で比較。マネックス証券・SBI証券・松井証券などを公平に紹介。",
};

// 比較表データ
const brokers = [
  {
    id: "rakuten",
    name: "楽天証券",
    star: false,
    fee: "0円",
    products: "◎ 豊富",
    app: "◎ 便利",
    target: "楽天ユーザー・初心者",
    point: "NISA口座数No.1。楽天ポイントで投資可能",
    ctaUrl: "https://www.rakuten-sec.co.jp/",
    hidden: true, // 審査中：コメントアウト相当
  },
  {
    id: "monex",
    name: "マネックス証券",
    star: true, // ゴールドハイライト
    fee: "0円※",
    products: "◎ 豊富",
    app: "◎ 便利",
    target: "dポイントユーザー・中級者",
    point: "NISA手数料0円！dポイントが貯まる",
    ctaUrl: "https://h.accesstrade.net/sp/cc?rk=0100q1bu00oqbc",
    pixelUrl: "https://h.accesstrade.net/sp/rr?rk=0100q1bu00oqbc",
    hidden: false,
    affiliateRel: true,
  },
  {
    id: "sbi",
    name: "SBI証券",
    star: false,
    fee: "0円",
    products: "◎ 豊富",
    app: "○ 普通",
    target: "Vポイントユーザー",
    point: "Vポイントが貯まる。業界最大手の安心感",
    ctaUrl: "https://go.sbisec.co.jp/account/sogoflow_01.html?id=id01",
    hidden: false,
  },
  {
    id: "matsui",
    name: "松井証券",
    star: true,
    fee: "0円",
    products: "○ 多い",
    app: "○ 普通",
    target: "iDeCo検討中・長期投資家",
    point: "iDeCoの商品ラインナップが優秀",
    ctaUrl: "https://www.matsui.co.jp/",
    hidden: false,
  },
  {
    id: "mufg",
    name: "三菱UFJeスマート証券",
    star: false,
    fee: "0円",
    products: "○ 多い",
    app: "○ 普通",
    target: "auユーザー・三菱UFJ銀行利用者",
    point: "Pontaポイントが貯まる。銀行連携が便利",
    ctaUrl: "https://www.bk.mufg.jp/",
    hidden: false,
  },
];

const visibleBrokers = brokers.filter((b) => !b.hidden);

export default function StockAccountPage() {
  return (
    <>
      <Header />
      <main>
        {/* PR表示 */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 text-center">
          <p className="text-xs text-gray-400">本ページにはアフィリエイト広告（PR）が含まれています。2026年4月時点の情報に基づきます。</p>
        </div>

        {/* Hero */}
        <section
          className="py-20 px-4 text-white"
          style={{ background: "linear-gradient(135deg,#0d1b2e 0%,#1A2E4A 60%,#0d1b2e 100%)", position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
              width: "600px", height: "300px",
              background: "radial-gradient(ellipse,rgba(201,168,76,0.15) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="max-w-3xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">SECURITIES ACCOUNT</p>
            <p className="text-white/60 text-sm mb-2">元大手信託銀行員が選ぶ</p>
            <h1 className="font-bold mb-4" style={{ fontSize: "clamp(1.6rem,4.5vw,2.8rem)", lineHeight: 1.2 }}>
              あなたに合った証券口座、<br />
              <span className="text-gold">一緒に選びましょう。</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              手数料・使いやすさ・NISA対応まで<br />
              実務12年のプロが忖度なしで解説します。
            </p>
          </div>
        </section>

        {/* 谷本コメント */}
        <section className="bg-offwhite py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: "#fff", border: "2px solid #C9A84C", boxShadow: "0 4px 20px rgba(201,168,76,0.15)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden border-2 border-gold"
              >
                <Image src="/profile.jpg" alt="谷本光章" width={56} height={56} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">谷本コメント</p>
                <p className="text-navy font-bold text-sm leading-relaxed">
                  「証券口座は複数持てます。ご自身が活用しやすい証券口座を使うことが重要です。例えば、dポイントと連携したい方にはマネックス証券が選択肢の一つです。」
                </p>
                <p className="text-gray-400 text-xs mt-2">元大手信託銀行12年・FP1級・CMA・宅建士</p>
              </div>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section id="nisa-broker-comparison" className="bg-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-gold text-xs font-bold uppercase tracking-widest text-center mb-2">COMPARISON</p>
            <h2 className="section-title text-center mb-2">証券口座 比較表</h2>
            <p className="text-gray-400 text-sm text-center mb-8">
              ※比較表に順位付けなし。「こんな人に」欄で属性別に訴求しています。
            </p>

            {/* PC テーブル */}
            <div className="hidden md:block overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#1A2E4A", color: "#FFFFFF" }}>
                    <th className="px-4 py-4 text-left font-bold">証券会社</th>
                    <th className="px-4 py-4 text-center font-bold">手数料</th>
                    <th className="px-4 py-4 text-center font-bold">商品数</th>
                    <th className="px-4 py-4 text-center font-bold">アプリ</th>
                    <th className="px-4 py-4 text-center font-bold">こんな人に</th>
                    <th className="px-4 py-4 text-center font-bold">おすすめポイント</th>
                    <th className="px-4 py-4 text-center font-bold">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleBrokers.map((broker) => (
                    <tr
                      key={broker.id}
                      style={{
                        background: broker.star
                          ? "linear-gradient(135deg,#FFF8E7 0%,#FFF3D0 100%)"
                          : "#FFFFFF",
                        borderBottom: "1px solid #F3F4F6",
                      }}
                    >
                      <td className="px-4 py-5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-navy">{broker.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-center text-navy">{broker.fee}</td>
                      <td className="px-4 py-5 text-center text-navy">{broker.products}</td>
                      <td className="px-4 py-5 text-center text-navy">{broker.app}</td>
                      <td className="px-4 py-5 text-center text-navy text-xs">{broker.target}</td>
                      <td className="px-4 py-5 text-navy text-xs leading-relaxed">{broker.point}</td>
                      <td className="px-4 py-5 text-center">
                        <a
                          href={broker.ctaUrl}
                          target="_blank"
                          rel={broker.affiliateRel ? "nofollow" : "noopener noreferrer"}
                          referrerPolicy={broker.affiliateRel ? "no-referrer-when-downgrade" : undefined}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-bold text-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                          style={{
                            background: broker.star
                              ? "linear-gradient(135deg,#C9A84C,#E8C96A)"
                              : "#1A2E4A",
                            color: broker.star ? "#1A2E4A" : "#FFFFFF",
                          }}
                        >
                          {broker.affiliateRel && broker.pixelUrl && (
                            <img src={broker.pixelUrl} alt="" style={{ display: "none" }} width={1} height={1} />
                          )}
                          公式サイトへ →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* スマホ カード */}
            <div className="md:hidden space-y-4">
              {visibleBrokers.map((broker) => (
                <div
                  key={broker.id}
                  className="rounded-2xl overflow-hidden shadow-sm"
                  style={{
                    background: broker.star
                      ? "linear-gradient(135deg,#FFF8E7,#FFF3D0)"
                      : "#FFFFFF",
                    border: broker.star ? "2px solid #C9A84C" : "1px solid #E5E7EB",
                  }}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-navy text-base">{broker.name}</h3>
                      </div>
                      <span className="text-gold font-bold text-sm">手数料 {broker.fee}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div className="bg-white/80 rounded-lg p-2">
                        <p className="text-gray-400">商品数</p>
                        <p className="text-navy font-bold">{broker.products}</p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-2">
                        <p className="text-gray-400">アプリ</p>
                        <p className="text-navy font-bold">{broker.app}</p>
                      </div>
                    </div>
                    <p className="text-xs text-navy mb-1"><span className="text-gold font-bold">こんな人に：</span>{broker.target}</p>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">{broker.point}</p>
                    <a
                      href={broker.ctaUrl}
                      target="_blank"
                      rel={broker.affiliateRel ? "nofollow" : "noopener noreferrer"}
                      referrerPolicy={broker.affiliateRel ? "no-referrer-when-downgrade" : undefined}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-md"
                      style={{
                        background: broker.star
                          ? "linear-gradient(135deg,#C9A84C,#E8C96A)"
                          : "#1A2E4A",
                        color: broker.star ? "#1A2E4A" : "#FFFFFF",
                      }}
                    >
                      {broker.affiliateRel && broker.pixelUrl && (
                        <img src={broker.pixelUrl} alt="" style={{ display: "none" }} width={1} height={1} />
                      )}
                      公式サイトへ →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 text-center mt-6">
              ※順次掲載証券会社を追加予定。楽天証券は提携審査通過後に追加予定。<br />
              ※「1位」「おすすめ」等の根拠のない順位付けは行っておりません。<br />
              ※マネックス証券の手数料0円はNISA口座での国内株・投資信託取引を指します（一部商品除く）。
            </p>
          </div>
        </section>

        {/* 口座開設ステップ */}
        <section className="bg-light-gold py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-center mb-2">口座開設の流れ</h2>
            <p className="section-subtitle text-center">最短翌営業日から投資スタートできます</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "STEP 1", icon: "🌐", title: "公式サイトへアクセス", desc: "上の比較表CTAボタンから" },
                { step: "STEP 2", icon: "✍️", title: "無料登録", desc: "メールアドレスと基本情報を入力" },
                { step: "STEP 3", icon: "📋", title: "本人確認書類を提出", desc: "最短翌営業日に審査完了" },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <p className="text-gold font-bold text-sm mb-1">{s.step}</p>
                  <p className="text-navy font-bold mb-1">{s.title}</p>
                  <p className="text-gray-400 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINE CTA */}
        <section
          className="py-16 px-4"
          style={{ background: "linear-gradient(135deg,#0d1b2e,#1A2E4A,#0d1b2e)" }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">どれを選ぶか迷ったら</p>
            <h2 className="text-white font-bold text-xl mb-4">元信託銀行員に無料相談</h2>
            <p className="text-white/60 text-sm mb-6">あなたの状況に合った口座をアドバイスします。</p>
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
          <div className="max-w-3xl mx-auto space-y-2 text-center">
            <p className="text-xs text-gray-400">※マネックス証券の手数料0円はNISA口座での国内株・投資信託取引を指します（一部商品除く）。</p>
            <p className="text-xs text-gray-400">※手数料は条件により異なる場合があります。詳細は公式サイトをご確認ください。</p>
            <p className="text-xs text-gray-400">※NISAの運用成果は保証されません。</p>
            <p className="text-xs text-gray-400">※投資にはリスクが伴い、元本を割り込む可能性があります。</p>
            <p className="text-xs text-gray-400">※本ページにはアフィリエイト広告（PR）が含まれています。</p>
            <p className="text-xs text-gray-400">※本ページは情報提供を目的としており、投資助言ではありません。</p>
            <p className="text-xs text-gray-400">※投資は自己責任でお願いします。</p>
            <p className="text-xs text-gray-400">※2026年4月時点の情報に基づきます。</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
