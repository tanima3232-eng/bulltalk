import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "不動産・インフラ投資｜Bulltalk - プロが実践する資産分散の新常識",
  description:
    "年金基金や機関投資家も実践する不動産・インフラ投資の本質を、元大手信託銀行員12年・FP1級が解説。ALTERNA（オルタナ）で10万円から始める不動産デジタル証券の仕組みを紹介します。",
};

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main>
        {/* PR表示 */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 text-center">
          <p className="text-xs text-gray-400">
            本ページにはアフィリエイト広告（PR）が含まれています。
            <br className="sm:hidden" />
            2026年5月時点の情報に基づきます。
          </p>
        </div>

        {/* ===== Hero ===== */}
        <section
          className="py-20 px-4 text-white"
          style={{
            background:
              "linear-gradient(135deg,#0d1b2e 0%,#1a2e4a 50%,#1a3a2a 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 装飾グロー */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-100px",
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(ellipse,rgba(201,168,76,0.18) 0%,transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-80px",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(ellipse,rgba(34,197,94,0.10) 0%,transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="max-w-3xl mx-auto text-center"
            style={{ position: "relative", zIndex: 1 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C" }}
            >
              PRIVATE ASSET INVESTMENT
            </p>
            <h1
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.8rem,5vw,3rem)", lineHeight: 1.25 }}
            >
              金融機関など
              <br />
              プロが実践するセオリーを
              <br />
              <span style={{ color: "#C9A84C" }}>個人のポートフォリオに。</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
              インフレ時代に備える「実物資産」という選択肢。
              <br />
              10万円から始める、プロ品質の不動産・インフラ投資。
            </p>
            {/* Hero CTA */}
            <a
              href="https://h.accesstrade.net/sp/cc?rk=0100pv9j00oqbc"
              target="_blank"
              rel="nofollow"
              referrerPolicy="no-referrer-when-downgrade"
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                color: "#1A2E4A",
                boxShadow: "0 4px 24px rgba(201,168,76,0.45)",
              }}
            >
              <img
                src="https://h.accesstrade.net/sp/rr?rk=0100pv9j00oqbc"
                alt=""
                style={{ display: "none" }}
                width={1}
                height={1}
              />
              無料で登録して案件を見てみる →
            </a>
            <p className="text-white/40 text-[10px] mt-3 whitespace-nowrap">
              ※三井物産デジタル・アセットマネジメントの公式サイトに移ります。
            </p>
          </div>
        </section>

        {/* ===== セクション①：なぜ今、不動産・インフラ投資なのか ===== */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#C9A84C" }}
            >
              WHY NOW?
            </p>
            <h2 className="section-title mb-6">
              プロが実践する「分散投資」の形
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              年金基金や多くの金融機関など、巨額の資金を運用するプロの機関投資家たちは、株式や債券だけでなく、
              不動産やインフラなどの「オルタナティブ資産」をポートフォリオに組み込んでいます。
              <br />
              <br />
              <strong className="text-navy">世界のプロ投資家はすでに動いています。</strong>
            </p>

            {/* データカード */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg,#0d1b2e,#1a2e4a)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#C9A84C" }}
                >
                  Harvard Endowment
                </p>
                <p className="text-white font-bold text-3xl mb-1">
                  約<span style={{ color: "#C9A84C" }}>78</span>%
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  ハーバード大学基金の資産配分において、オルタナティブ資産が占める割合
                  <br />
                  <span className="text-white/40 text-xs">（※2023会計年度実績）</span>
                </p>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg,#0d1b2e,#1a2e4a)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#C9A84C" }}
                >
                  GPIF（あなたの年金を運用する国の機関）
                </p>
                <p className="text-white font-bold text-3xl mb-1">
                  約<span style={{ color: "#C9A84C" }}>3.6</span>兆円
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  実はあなたの年金も、不動産・インフラへ投資されています。国民年金や厚生年金を運用するGPIFでは3.6兆円もの資金を投資しています。
                  <br />
                  <span className="text-white/40 text-xs">（※2024年3月末時点）</span>
                </p>
              </div>
            </div>

            {/* 2つの理由 */}
            <p className="text-gray-600 leading-relaxed mb-6">
              プロの投資家が不動産などの実物資産を組み込む理由は大きく<strong className="text-navy">2つ</strong>あります。
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-offwhite rounded-2xl p-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1A2E4A,#2A4A7F)",
                    color: "#C9A84C",
                  }}
                >
                  01
                </div>
                <div>
                  <p className="font-bold text-navy mb-1">インフレ対策</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    モノの値段が上がるインフレ局面に強い実物資産。現金の実質価値が目減りする時代だからこそ、不動産などを組み込むことで資産を守るという考え方です。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-offwhite rounded-2xl p-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1A2E4A,#2A4A7F)",
                    color: "#C9A84C",
                  }}
                >
                  02
                </div>
                <div>
                  <p className="font-bold text-navy mb-1">分散効果</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    株式市場との相関性が低く、ポートフォリオ全体のリスクを抑える分散効果が期待できます。株価が下がる局面でも比較的値動きが緩やかとされています。
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.03))",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <p className="text-navy font-bold mb-2 text-sm">
                💡 では、個人はどうすればいい？
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                これまで、プロが扱うような都心の大型不動産やインフラへの投資には数億円単位の資金が必要でした。しかし、
                <strong className="text-navy">ブロックチェーン技術を活用した「不動産デジタル証券」</strong>
                の登場により、個人でも10万円から投資できるようになりました。
              </p>
            </div>

            {/* セクション①末CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://h.accesstrade.net/sp/cc?rk=0100pv9j00oqbc"
                target="_blank"
                rel="nofollow"
                referrerPolicy="no-referrer-when-downgrade"
                className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                  color: "#1A2E4A",
                  boxShadow: "0 4px 24px rgba(201,168,76,0.40)",
                }}
              >
                <img
                  src="https://h.accesstrade.net/sp/rr?rk=0100pv9j00oqbc"
                  alt=""
                  style={{ display: "none" }}
                  width={1}
                  height={1}
                />
                無料で登録して案件を見てみる →
              </a>
              <p className="text-gray-400 text-[10px] mt-2 text-center">
              ※三井物産デジタル・アセットマネジメントの公式サイトに移ります。
            </p>
            </div>
          </div>
        </section>

        {/* ===== セクション②：不動産デジタル証券とは ===== */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#C9A84C" }}
            >
              DIGITAL SECURITIES
            </p>
            <h2 className="section-title mb-4">不動産デジタル証券とは</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              ブロックチェーン技術を活用して、これまでは富裕層・機関投資家しかアクセスできなかった
              <strong className="text-navy">大型不動産や優良インフラ</strong>
              に、10万円程度の少額から投資できる仕組みです。
              三井物産系・三菱UFJグループなど大手金融機関もこの分野に参入し、市場は急拡大しています。
            </p>

            {/* 市場規模推移 */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "white",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-navy font-bold mb-4 text-sm uppercase tracking-wide">
                📈 市場規模の拡大
              </p>
              <div className="grid grid-cols-3 gap-2 text-center mb-4 items-start">
                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-1">2025年実績</p>
                  <p className="text-navy font-bold text-xl">3,288<span className="text-sm font-normal">億円</span></p>
                  <p className="text-xs text-gray-400">（前年比約3倍）</p>
                </div>
                <div
                  className="rounded-xl py-2 px-1 overflow-hidden pt-2"
                  style={{ background: "rgba(201,168,76,0.08)" }}
                >
                  <p className="text-xs text-gray-400 mb-1">2026年予想</p>
                  <p
                    className="font-bold text-xl"
                    style={{ color: "#C9A84C" }}
                  >
                    4,732<span className="text-sm font-normal">億円</span>
                  </p>
                  <p className="text-[10px] text-gray-400">（前年比+40%超）</p>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-1">2030年見通し</p>
                  <p className="text-navy font-bold text-xl">2.5<span className="text-sm font-normal">兆円</span></p>
                  <p className="text-[9px] text-gray-400 whitespace-nowrap mb-1">(ケネディクス予想)</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-right">
                出所：プログマ、ケネディクス
              </p>
            </div>

            {/* REITとの比較 */}
            <div
              className="rounded-2xl overflow-hidden mb-4"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <div
                className="px-6 py-3 text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg,#1A2E4A,#2A4A7F)" }}
              >
                不動産デジタル証券 vs REIT（不動産投資信託）比較
              </div>
              <div className="bg-white">
                <div className="grid grid-cols-3 text-center text-xs border-b border-gray-100">
                  <div className="p-3 bg-gray-50 font-bold text-gray-500"></div>
                  <div
                    className="p-3 font-bold"
                    style={{ color: "#1A2E4A", background: "rgba(201,168,76,0.07)" }}
                  >
                    デジタル証券
                  </div>
                  <div className="p-3 font-bold text-gray-500">REIT</div>
                </div>
                {[
                  ["最低投資額", "10万円〜", <>数万円〜<br />（市場価格）</>],
                  ["投資対象", "厳選した不動産", "複数物件に分散"],
                  ["上場", "非上場（OTC）", "東証上場"],
                  ["流動性", "低め", "高い"],
                  ["株式相関", "低い", "やや高い"],
                  ["値動き", "比較的緩やか", "株式市場に連動"],
                ].map(([label, digital, reit], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 text-center text-xs border-b border-gray-50 last:border-0"
                  >
                    <div className="p-3 bg-gray-50 text-gray-500 font-medium text-left pl-4">
                      {label}
                    </div>
                    <div
                      className="p-3 font-bold text-navy"
                      style={{ background: "rgba(201,168,76,0.04)" }}
                    >
                      {digital}
                    </div>
                    <div className="p-3 text-gray-500">{reit}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              ※上記は一般的な特性の比較であり、すべての商品に当てはまるものではありません。
            </p>
          </div>
        </section>

        {/* ===== セクション③：ALTERNA メインCTA ===== */}
        <section
          className="py-16 px-4"
          style={{
            background: "linear-gradient(180deg,#f8f9fa 0%,#ffffff 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto">

            {/* セクションヘッダー */}
            <div className="text-center mb-10">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#C9A84C" }}
              >
                RECOMMENDED SERVICE
              </p>
              <h2 className="section-title mb-3">
                スマホで手軽に、<br className="sm:hidden" />
                プロ品質の安定資産へ
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                不動産デジタル証券「ALTERNA（オルタナ）」
              </p>
            </div>

            {/* ALTERNAカード */}
            <div
              className="rounded-3xl overflow-hidden shadow-xl mb-6"
              style={{ border: "2px solid #1A2E4A" }}
            >
              {/* カードヘッダー */}
              <div
                className="px-8 py-7"
                style={{
                  background:
                    "linear-gradient(135deg,#0d1b2e 0%,#1e3a5f 50%,#2d4a70 100%)",
                }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">
                      DIGITAL SECURITIES PLATFORM
                    </p>
                    <h3 className="text-white font-bold text-2xl mb-1">
                      ALTERNA（オルタナ）
                    </h3>
                    <p className="text-white/50 text-xs">
                      提供：三井物産デジタル・アセットマネジメント（MDM）
                    </p>
                  </div>
                  <div
                    className="rounded-xl px-4 py-2 text-xs font-bold"
                    style={{
                      background: "rgba(201,168,76,0.2)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.4)",
                    }}
                  >
                    三井物産グループ
                  </div>
                </div>
              </div>

              {/* カード本文 */}
              <div className="bg-white px-8 py-7">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  「ALTERNA（オルタナ）」は、三井物産グループが提供する個人投資家向けのオンライン資産運用サービスです。
                  これまで機関投資家に限定されていたような、厳選された大型不動産やインフラなどの安定資産に、
                  <strong className="text-navy">スマートフォンから10万円という少額で投資が可能</strong>になりました。
                </p>

                {/* スペック */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="bg-offwhite rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">最低投資額</p>
                    <p className="text-navy font-bold text-lg">10万円から</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-4">
                    <p className="text-gray-400 text-[9px] whitespace-nowrap mb-1">想定利回り（過去実績）</p>
                    <p className="text-navy font-bold text-base">年3.0～4.3%</p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">投資対象</p>
                    <p className="text-navy font-bold text-sm leading-snug">
                      不動産・インフ<br />ラを裏付け資産<br />としたデジタル<br />証券
                    </p>
                  </div>
                  <div className="bg-offwhite rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">税制</p>
                    <p className="text-navy font-bold text-sm">申告分離課税 約20%</p>
                    <p className="text-gray-400 text-xs mt-1">
                      特定口座（源泉徴収あり）選択で原則確定申告不要
                    </p>
                  </div>
                </div>

                {/* 4つの特徴 */}
                <div className="mb-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "#1A2E4A" }}
                  >
                    4つの特徴
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏢",
                        title: "厳選された投資対象",
                        desc: "三井物産グループが厳選した大型不動産・インフラ等。マンション、ホテル、商業施設など多彩な案件が揃います。",
                      },
                      {
                        icon: "📱",
                        title: "スマホで完結",
                        desc: "10万円から投資可能。口座開設から投資の申込み手続きまで、すべてスマートフォンで完結します。",
                      },
                      {
                        icon: "💼",
                        title: "プロにお任せ",
                        desc: "煩雑な運用管理は不要。総合商社や不動産金融出身のプロが厳選・運用します。",
                      },
                      {
                        icon: "📊",
                        title: "税制メリット",
                        desc: "利益は株式と同じ「申告分離課税（約20%）」。特定口座（源泉徴収あり）を選択すれば、原則としてご自身での確定申告は不要です。",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl p-4"
                        style={{ background: "#F8F9FA", border: "1px solid #F0F0F0" }}
                      >
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-navy text-sm mb-1">
                            {item.title}
                          </p>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MDMの強み */}
                <div
                  className="rounded-2xl p-5 mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(26,46,74,0.04),rgba(26,46,74,0.02))",
                    border: "1px solid rgba(26,46,74,0.12)",
                  }}
                >
                  <p className="text-navy font-bold text-sm mb-3">
                    三井物産デジタル・アセットマネジメント（MDM）の強み
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        label: "製販一体のワンストップ体制",
                        desc: "商品の組成から販売・運用までを一気通貫で行い、業務効率の最大化を図っています。",
                      },
                      {
                        label: "資産運用のプロ集団",
                        desc: "総合商社や不動産金融などの出身者が集結し、プロの目利きで投資対象を厳選しています。",
                      },
                      {
                        label: "デジタルネイティブな金融機関",
                        desc: "社員の約3割がソフトウェアエンジニア。最新テクノロジーを活用したスムーズな投資体験を提供しています。",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span
                          className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center font-bold text-white text-[10px]"
                          style={{ background: "#C9A84C" }}
                        >
                          ✓
                        </span>
                        <div>
                          <span className="text-navy font-bold">{item.label}：</span>
                          <span className="text-gray-500">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 注意事項 */}
                <div
                  className="flex items-start gap-2 text-xs leading-relaxed mb-6 p-4 rounded-xl"
                  style={{ background: "#F8F9FA", border: "1px solid #E5E7EB" }}
                >
                  <span className="flex-shrink-0 text-gray-400">※</span>
                  <span className="text-gray-500">
                    ALTERNA（オルタナ）が提供する金融商品は元本や将来の投資成果を保証するものではありません。
                    投資にあたっては、リスクを十分ご理解の上、ご自身の判断と責任でお願いします。
                  </span>
                </div>

                {/* CTA ボタン */}
                <a
                  href="https://h.accesstrade.net/sp/cc?rk=0100pv9j00oqbc"
                  target="_blank"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full text-center py-5 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                    color: "#1A2E4A",
                    boxShadow: "0 4px 24px rgba(201,168,76,0.40)",
                    fontSize: "1rem",
                  }}
                >
                  <img
                    src="https://h.accesstrade.net/sp/rr?rk=0100pv9j00oqbc"
                    alt=""
                    style={{ display: "none" }}
                    width={1}
                    height={1}
                  />
                  無料で登録して案件を見てみる →
                </a>
                <p className="text-center text-xs text-gray-400 mt-2">
                  ※三井物産デジタル・アセットマネジメントの公式サイトに移ります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== セクション④：なぜ今が注目なのか（市場背景） ===== */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#C9A84C" }}
            >
              MARKET TREND
            </p>
            <h2 className="section-title mb-6">
              なぜ今、注目されているのか
            </h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "📰",
                  title: "大手金融機関の相次ぐ参入",
                  desc: "三菱UFJフィナンシャル・グループは2024年10月にデジタル証券関連事業へ参入。みずほフィナンシャルグループも2025年3月、みずほ銀行・みずほ信託銀行・みずほ証券の三位一体で初めて不動産裏付けのデジタル証券を個人投資家向けに販売開始。",
                },
                {
                  icon: "🏦",
                  title: "政府の「資産運用立国」政策",
                  desc: "政府は資産運用立国を掲げ、貯蓄から投資への動きを促しています。長期デフレを経てインフレ局面に入った日本では、現預金の実質的な価値が目減りする中、実物資産への関心が急速に高まっています。",
                },
                {
                  icon: "📈",
                  title: "インフレ時代の資産防衛ニーズ",
                  desc: "不動産は賃料収入など安定した収益を見込みやすく、インフレ耐性を持つ資産とされます。金利上昇局面で安定収益を求める動きも強まっており、こうした需要がデジタル証券市場の拡大を後押ししています。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-navy mb-1 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg,rgba(26,46,74,0.05),rgba(26,46,74,0.02))",
                border: "1px solid rgba(26,46,74,0.15)",
              }}
            >
              <p className="text-navy font-bold text-sm mb-2">
                📣 専門家の声（Bloomberg 2026年5月報道より）
              </p>
              <blockquote className="text-gray-600 text-sm leading-relaxed italic">
                「不動産裏付けのデジタル証券はインフレヘッジの機能がある。少額投資が可能で、REITで扱うような大型物件にも投資できる。自らポートフォリオを組めるのも利点」
              </blockquote>
              <p className="text-gray-400 text-xs mt-2 text-right">
                — 三井住友トラスト基礎研究所　米倉勝弘 上席主任研究員
              </p>
            </div>
          </div>
        </section>

        {/* ===== セクション⑤：LINE CTA ===== */}
        <section
          className="py-16 px-4"
          style={{
            background: "linear-gradient(135deg,#0d1b2e,#1a3a2a,#0d1b2e)",
          }}
        >
          <div className="max-w-xl mx-auto text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#C9A84C" }}
            >
              FREE CONSULTATION
            </p>
            <h2 className="text-white font-bold text-xl mb-4">
              あなたの資産配分を
              <br />
              <span style={{ color: "#C9A84C" }}>無料でシミュレーション</span>
            </h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              不動産・インフラ投資はリスクもあります。
              <br />
              仕組みをしっかり理解してから始めることが重要です。
              <br />
              不明点はLINEから無料でご相談いただけます。
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
                <a
                  href="https://h.accesstrade.net/sp/cc?rk=0100pv9j00oqbc"
                  target="_blank"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                    color: "#1A2E4A",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.40)",
                  }}
                >
                  <img
                    src="https://h.accesstrade.net/sp/rr?rk=0100pv9j00oqbc"
                    alt=""
                    style={{ display: "none" }}
                    width={1}
                    height={1}
                  />
                  ALTERNAに無料で登録する →
                </a>
                <p className="text-white/30 text-[10px] leading-tight text-center">
                  ※三井物産デジタル・アセットマネジメントの公式サイトに移ります。
                </p>
              </div>
              <a
                href="https://lin.ee/FmH7NXr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-4 rounded-2xl transition-all duration-300 hover:opacity-80 w-full sm:w-auto"
                style={{ background: "#06C755", color: "#FFFFFF", boxShadow: "0 0 20px rgba(6,199,85,0.35)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
                </svg>
                LINEで無料相談する
              </a>
            </div>
          </div>
        </section>

        {/* ===== 免責事項 ===== */}
        <section className="bg-gray-50 py-10 px-4 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-gray-500 mb-3">
              投資に関する注意事項
            </p>
            <div className="space-y-1.5">
              {[
                "当サイトで紹介している金融商品は、国内外の経済情勢、金利水準、対象となる不動産等の価値の変動により、投資元本を割り込むリスクがあります。",
                "過去の利回りや実績は、将来の運用成果を示唆・保証するものではありません。",
                "各商品の詳細なリスクや手数料等については、リンク先の公式サイトに掲載されている商品概要説明書や契約締結前交付書面等をよくお読みになり、投資に関する最終決定はお客様ご自身の判断と責任で行ってください。",
                "ALTERNA（オルタナ）が提供する金融商品は元本や将来の投資成果を保証するものではありません。",
                "本ページにはアフィリエイト広告（PR）が含まれています。",
                "本ページは情報提供を目的としており、投資助言ではありません。",
                "2026年5月時点の情報に基づきます。制度・サービス内容は変更される可能性があります。",
              ].map((text, i) => (
                <p key={i} className="text-xs text-gray-400">
                  ※{text}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
