import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "谷本光章について｜元大手信託銀行員・FP1級・証券アナリスト・宅建士の経歴",
  description:
    "谷本光章の経歴ページ。信託銀行12年の実務経験、FP1級・証券アナリスト（CMA）・宅建士の資格保有。新人コンペ全国2位・社長賞受賞。",
};

const career = [
  {
    period: "2014〜2017年",
    area: "個人顧客向けコンサル",
    detail: "富裕層を中心に個人のお客様への資産運用・相続対策・不動産コンサル。新人コンペ全国2位。支店内実績は常に最上位入賞。",
  },
  {
    period: "2017〜2018年",
    area: "一般法人向けコンサル",
    detail: "学校法人等への資産運用・不動産・年金制度導入提案。スタートアップ連携。",
  },
  {
    period: "2018〜2024年",
    area: "金融法人向けコンサル",
    detail: "地方銀行・信用金庫・JA等への資産運用・不動産・年金コンサルや各種アライアンス提携、共同出資など。2022年度社長賞受賞。",
  },
  {
    period: "2024〜2025年",
    area: "投資家事業\n戦略企画推進",
    detail: "国内外金融法人・年金基金・地公体等への戦略企画推進。全国本支店への戦略指導。",
  },
  {
    period: "2025年〜",
    area: "独立・情報発信",
    detail: "Bulltalkとして日経225分析・金融教育コンテンツを発信。LINE・サイトを通じ情報発信・相談受付開始。",
  },
];

const highlights = [
  {
    icon: "🏆",
    title: "新人コンペ全国2位",
    desc: "入社1年目から全国コンペで2位。支店内でも複数期に渡り実績最上位。",
  },
  {
    icon: "🥇",
    title: "社長賞受賞（2022年度）",
    desc: "金融法人営業として、全社最高水準の成果を上げ社長賞を受賞。",
  },
  {
    icon: "📊",
    title: "幅広い顧客層での実務経験",
    desc: "個人〜一般法人〜金融機関まで、あらゆるお客様の資産に関する課題や経営課題を解決。",
  },
  {
    icon: "📝",
    title: "3つの難関資格を保有",
    desc: "FP1級・証券アナリスト（CMA）・宅建士を保有。金融・不動産・相続をワンストップでカバー。",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* ① Hero — bg-navy */}
        <section className="bg-navy text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gold overflow-hidden shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="谷本光章 プロフィール写真"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">ABOUT ME</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">谷本光章について</h1>
                <p className="text-gold text-sm font-semibold leading-relaxed mb-4">
                  FP1級 × 証券アナリスト × 宅建士<br />
                  大手信託銀行12年勤務
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  元大手信託銀行員として、個人・法人・機関投資家まで<br />
                  幅広い資産課題を解決してきた実務のプロ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ② 実績ハイライト — bg-white */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">実績ハイライト</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="bg-offwhite rounded-2xl p-6 shadow-sm flex gap-4">
                  <div className="text-4xl">{h.icon}</div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">{h.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ③ 基本情報・資格 — bg-offwhite */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">基本情報・資格</h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm p-6">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    { label: "氏名", value: "谷本 光章（たにもと みつあき）" },
                    { label: "前職", value: "元大手信託銀行（12年間勤務）" },
                    { label: "FP資格", value: "ファイナンシャルプランナー1級（FP1級）" },
                    { label: "証券資格", value: "証券アナリスト（CMA）" },
                    { label: "不動産資格", value: "宅地建物取引士" },
                    { label: "発信内容", value: "日経225分析・相続・資産運用・不動産" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-gray-100">
                      <td className="py-4 pr-6 text-navy font-bold text-sm w-28 whitespace-nowrap align-top">{row.label}</td>
                      <td className="py-4 text-gray-700 text-sm">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ④ 職務経歴 — bg-light-navy（視覚的区切り） */}
        <section className="bg-light-navy py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">職務経歴</h2>
            <div className="space-y-4">
              {career.map((c) => (
                <div key={c.period} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-36 shrink-0">
                      <span className="text-gold font-bold text-sm">{c.period}</span>
                    </div>
                    <div className="md:w-40 shrink-0">
                      <p className="font-bold text-navy text-sm whitespace-pre-line">{c.area}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{c.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ なぜ情報発信を始めたのか — bg-white（読みやすい清潔感） */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">なぜ、情報発信を始めたのか</h2>
            <div className="bg-offwhite rounded-2xl p-8 shadow-sm prose prose-lg max-w-none text-gray-700 leading-loose">
              <p>
                12年間、私は大手信託銀行で働いてきました。
              </p>
              <p>
                個人のお客様の相続対策、不動産の売買、資産運用。
                法人のお客様への人事・年金制度、不動産コンサル、
                銀行などの機関投資家向け資産運用コンサル。
                スタートアップ企業ファンドへの投資、
                機関投資家向け事業戦略立案まで、
                幅広い領域で「お金」「投資」と向き合ってきました。
              </p>
              <p>
                実績も新人コンペ全国2位、社長賞受賞など、順調なキャリアだったと思います。
              </p>

              <blockquote className="blockquote-style">
                「それでも、もっとできることがあると感じていました。」
              </blockquote>

              <p>
                12年間、私が向き合ってきたのは個人の富裕層から、
                企業・金融機関まで幅広いお客様でした。
                相続対策、資産運用、不動産の活用、年金制度の設計——
                高度な知識と経験を積む環境に恵まれていたと思います。
              </p>
              <p>
                そこで実感したのは、「お金の知識があるだけで、
                選択肢がこれほど広がるのか」ということです。
                適切な生前贈与の設計で何百万円もの相続税が変わる。
                投資信託の選び方、投資手法で、リスクやコストが大きく違う。
                不動産の評価の仕組みを知っているだけで、相続の組み立て方が変わる。
              </p>
              <p>
                こうした知識は、どなたにとっても役に立つものばかりです。
                正しく、わかりやすく伝えれば、誰でも理解できる。
                信託銀行で培ってきた経験を、もっと多くの人の役に立てたい。
                それが独立を決めた理由です。
              </p>

              <blockquote className="blockquote-style">
                「本当に必要な情報を、必要な人に届けたい。」<br />
                それが、私がこの発信を始めた理由です。
              </blockquote>

              <p>
                マーケット分析から、相続の基礎知識、資産形成、資産運用、不動産まで。
                元大手信託銀行員の実務経験をもとに、わかりやすくお伝えしていきます。
              </p>
              <p>何でも気軽にLINEで相談してください。</p>
            </div>
          </div>
        </section>

        {/* ⑥ あなたへのメッセージ — bg-navy（感情的な締め） */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">あなたへのメッセージ</h2>
            <div className="space-y-4 text-white/90 leading-loose">
              <p>お金の知識は、知っているだけで選択肢が広がります。</p>
              <p>
                どの投資信託を選ぶか、NISAやiDeCoをどう使うか、資産をどう育てるか——
                少しの知識の差が、長い目で見ると大きな結果の差になります。
              </p>
              <p>12年間の実務で培ってきたことを、できるだけわかりやすく伝えていきます。</p>
            </div>
            <blockquote className="blockquote-style mt-8">
              「知識は、あなたとあなたの家族を守る盾になります。」
            </blockquote>
            <p className="text-white/80 mt-6 leading-loose">
              日経225の今日の動向や、「資産形成で何から始めればいいか？」など。<br />
              何でも気軽にLINEで相談してください。
            </p>
            <div className="mt-8 text-center md:text-left">
              <a href="https://lin.ee/FmH7NXr" className="btn-line inline-flex items-center gap-2">
                LINEで無料相談する →
              </a>
            </div>
          </div>
        </section>

        {/* ⑦ CTA — bg-gold */}
        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
