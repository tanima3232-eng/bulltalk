import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "iDeCo口座開設｜Bulltalk - 節税しながら老後資金を積立",
  description:
    "iDeCoの仕組みから口座開設まで、元大手信託銀行員12年・FP1級が解説。松井証券・楽天証券・SBI証券・マネックス証券・三菱UFJeスマート証券を比較。2026年4月制度改正対応。",
};

const idecoProviders = [
  {
    id: "matsui",
    name: "松井証券",
    star: true,
    mgmtFee: "0円",
    products: "◎ 40本",
    points: "◎ 最大1%",
    app: "○",
    target: "コスト重視・商品多数・ポイントも貯めたい方",
    ctaUrl: "https://h.accesstrade.net/sp/cc?rk=0100mnux00oqbc",
    pixelUrl: "https://h.accesstrade.net/sp/rr?rk=0100mnux00oqbc",
    hidden: false,
    affiliateRel: true,
  },
  {
    id: "sbi",
    name: "SBI証券",
    star: false,
    mgmtFee: "0円",
    products: "◎ 38本",
    points: "○ Vポイント",
    app: "○",
    target: "Vポイントユーザー・商品数重視の方",
    ctaUrl: "https://www.sbisec.co.jp/",
    hidden: false,
  },
  {
    id: "monex",
    name: "マネックス証券",
    star: true,
    mgmtFee: "0円",
    products: "○ 27本",
    points: "○ dポイント",
    app: "◎",
    target: "dポイントユーザー・証券もマネックスの方",
    ctaUrl: "https://www.monex.co.jp/",
    hidden: false,
  },
  {
    id: "mufg",
    name: "三菱UFJeスマート証券",
    star: false,
    mgmtFee: "0円",
    products: "○ 25本",
    points: "○ Ponta",
    app: "○",
    target: "auユーザー・三菱UFJメインの方",
    ctaUrl: "https://www.bk.mufg.jp/",
    hidden: false,
  },
  {
    id: "rakuten",
    name: "楽天証券",
    star: true,
    mgmtFee: "0円",
    products: "◎ 32本",
    points: "○ 楽天P",
    app: "◎",
    target: "楽天ユーザー・NISAも楽天の方",
    ctaUrl: "https://www.rakuten-sec.co.jp/",
    hidden: true,
  },
];

const visibleProviders = idecoProviders.filter((p) => !p.hidden);

export default function IDeCoPage() {
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
          style={{ background: "linear-gradient(135deg,#0d1b2e 0%,#1e3a5f 60%,#0d1b2e 100%)", position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
              width: "500px", height: "250px",
              background: "radial-gradient(ellipse,rgba(74,222,128,0.12) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="max-w-3xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4ADE80" }}>iDeCo ACCOUNT</p>
            <h1 className="font-bold mb-4" style={{ fontSize: "clamp(1.6rem,4.5vw,2.8rem)", lineHeight: 1.2 }}>
              節税しながら老後資金を<br />
              <span style={{ color: "#4ADE80" }}>賢く積み立てる。</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              iDeCoは掛金全額が所得控除。<br />
              あなたに合った金融機関を一緒に選びましょう。
            </p>
          </div>
        </section>

        {/* 冒頭必須記載 */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">

            {/* ① 共通手数料 */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ border: "2px solid #E5E7EB", background: "#FAFAFA" }}
            >
              <h2 className="text-navy font-bold text-lg mb-3">① 全金融機関共通の手数料</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                iDeCoには、運営管理手数料とは別に、
                <strong className="text-navy">国民年金基金連合会・信託銀行への手数料が計171円/月（年間2,052円）</strong>
                全金融機関共通でかかります。各社の比較は運営管理手数料のみを表示しています。
              </p>
              <div
                className="rounded-xl p-4 flex items-center gap-3"
                style={{ background: "#FFF8E7", border: "1px solid #C9A84C" }}
              >
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-navy font-bold text-sm">共通手数料の内訳</p>
                  <p className="text-gray-500 text-xs mt-1">
                    国民年金基金連合会：105円/月 ＋ 信託銀行（事務委託先）：66円/月 ＝ 合計171円/月
                  </p>
                </div>
              </div>
            </div>

            {/* ② マッチング拠出制度改正 */}
            <div
              className="rounded-2xl p-6"
              style={{ border: "2px solid #4ADE80", background: "#F0FDF4" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "#4ADE80", color: "#1A2E4A" }}
                >
                  2026年4月〜 制度改正
                </span>
                <h2 className="text-navy font-bold text-base">② マッチング拠出の変更点</h2>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>「事業主掛金を超えてはならない」制限が<strong>2026年4月より撤廃</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>拠出限度額（月5.5万円）の範囲内で自由に上乗せ可能に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span><strong>2026年12月以降</strong>は上限が月<strong>6.2万円</strong>に拡大予定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold mt-0.5">⚠</span>
                  <span className="text-gray-600">企業型DCがある会社員はiDeCoよりマッチング拠出が有利になるケースが増加しています。一般的には個別の状況により異なるため、ご自身の状況を確認することが目安とされています。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section className="bg-offwhite py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-gold text-xs font-bold uppercase tracking-widest text-center mb-2">COMPARISON</p>
            <h2 className="section-title text-center mb-2">iDeCo口座 比較表</h2>


            {/* PC テーブル */}
            <div className="hidden md:block overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#1A2E4A", color: "#FFFFFF" }}>
                    <th className="px-4 py-4 text-left font-bold">金融機関</th>
                    <th className="px-4 py-4 text-center font-bold">運営管理<br />手数料</th>
                    <th className="px-4 py-4 text-center font-bold">商品数</th>
                    <th className="px-4 py-4 text-center font-bold">ポイント</th>
                    <th className="px-4 py-4 text-center font-bold">アプリ</th>
                    <th className="px-4 py-4 text-center font-bold">こんな人に</th>
                    <th className="px-4 py-4 text-center font-bold">詳細</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleProviders.map((p) => (
                    <tr
                      key={p.id}
                      style={{
                        background: p.star
                          ? "linear-gradient(135deg,#F0FDF4 0%,#ECFDF5 100%)"
                          : "#FFFFFF",
                        borderBottom: "1px solid #F3F4F6",
                      }}
                    >
                      <td className="px-4 py-5">
                        <span className="font-bold text-navy">{p.name}</span>
                      </td>
                      <td className="px-4 py-5 text-center text-navy font-bold">{p.mgmtFee}</td>
                      <td className="px-4 py-5 text-center text-navy">{p.products}</td>
                      <td className="px-4 py-5 text-center text-navy">{p.points}</td>
                      <td className="px-4 py-5 text-center text-navy">{p.app}</td>
                      <td className="px-4 py-5 text-center text-navy text-xs">{p.target}</td>
                      <td className="px-4 py-5 text-center">
                        <a
                          href={p.ctaUrl}
                          target="_blank"
                          rel={p.affiliateRel ? "nofollow" : "noopener noreferrer"}
                          referrerPolicy={p.affiliateRel ? "no-referrer-when-downgrade" : undefined}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-bold text-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                          style={{
                            background: p.star
                              ? "linear-gradient(135deg,#C9A84C,#E8C96A)"
                              : "#1A2E4A",
                            color: p.star ? "#1A2E4A" : "#FFFFFF",
                          }}
                        >
                          {p.affiliateRel && p.pixelUrl && (
                            <img src={p.pixelUrl} alt="" style={{ display: "none" }} width={1} height={1} />
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
              {visibleProviders.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl overflow-hidden shadow-sm"
                  style={{
                    background: p.star ? "linear-gradient(135deg,#F0FDF4,#ECFDF5)" : "#FFFFFF",
                    border: p.star ? "2px solid #C9A84C" : "1px solid #E5E7EB",
                  }}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-navy text-base">{p.name}</h3>
                      <span className="text-gold font-bold text-sm">手数料 {p.mgmtFee}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                      <div className="bg-white/80 rounded-lg p-2">
                        <p className="text-gray-400">商品数</p>
                        <p className="text-navy font-bold">{p.products}</p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-2">
                        <p className="text-gray-400">ポイント</p>
                        <p className="text-navy font-bold">{p.points}</p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-2">
                        <p className="text-gray-400">アプリ</p>
                        <p className="text-navy font-bold">{p.app}</p>
                      </div>
                    </div>
                    <p className="text-xs text-navy mb-4"><span className="text-gold font-bold">こんな人に：</span>{p.target}</p>
                    <a
                      href={p.ctaUrl}
                      target="_blank"
                      rel={p.affiliateRel ? "nofollow" : "noopener noreferrer"}
                      referrerPolicy={p.affiliateRel ? "no-referrer-when-downgrade" : undefined}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-md"
                      style={{
                        background: p.star ? "linear-gradient(135deg,#C9A84C,#E8C96A)" : "#1A2E4A",
                        color: p.star ? "#1A2E4A" : "#FFFFFF",
                      }}
                    >
                      {p.affiliateRel && p.pixelUrl && (
                        <img src={p.pixelUrl} alt="" style={{ display: "none" }} width={1} height={1} />
                      )}
                      公式サイトへ →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 谷本コメント */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: "#f8f9fa", border: "2px solid #C9A84C", boxShadow: "0 4px 20px rgba(201,168,76,0.15)" }}
            >
              <div className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden border-2 border-gold">
                <Image src="/profile.jpg" alt="谷本光章" width={56} height={56} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">谷本コメント</p>
                <p className="text-navy font-bold text-sm leading-relaxed">
                  「iDeCoは所得控除のメリットが大きく、特に年収400〜700万円台の方に向いています。一般的には、まずNISAを最大活用した後にiDeCoを検討するのが目安とされています。」
                </p>
                <p className="text-gray-400 text-xs mt-2">元大手信託銀行12年・FP1級・CMA・宅建士</p>
              </div>
            </div>
          </div>
        </section>

        {/* LINE CTA */}
        <section
          className="py-16 px-4"
          style={{ background: "linear-gradient(135deg,#0d1b2e,#1e3a5f,#0d1b2e)" }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4ADE80" }}>iDeCoについて迷ったら</p>
            <h2 className="text-white font-bold text-xl mb-4">元信託銀行員に無料相談</h2>
            <p className="text-white/60 text-sm mb-6">あなたの年収・会社の制度に合った選択をアドバイスします。</p>
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
            <p className="text-xs text-gray-400">※iDeCoの掛金は原則60歳まで引き出せません。</p>
            <p className="text-xs text-gray-400">※国民年金基金連合会・信託銀行への手数料（計171円/月）は全社共通でかかります。</p>
            <p className="text-xs text-gray-400">※運用成果は保証されません。将来の受取額は運用結果により異なります。</p>
            <p className="text-xs text-gray-400">※加入資格・掛金上限は職業・加入状況により異なります。詳細は公式サイトをご確認ください。</p>
            <p className="text-xs text-gray-400">※本ページにはアフィリエイト広告（PR）が含まれています。</p>
            <p className="text-xs text-gray-400">※本ページは情報提供を目的としており、投資助言ではありません。</p>
            <p className="text-xs text-gray-400">※投資は自己責任でお願いします。</p>
            <p className="text-xs text-gray-400">※2026年4月時点の情報に基づきます。制度改正等により内容が変更される場合があります。最新情報は各社公式サイトおよび国民年金基金連合会でご確認ください。</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
