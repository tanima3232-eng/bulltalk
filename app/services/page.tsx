import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";

export const metadata: Metadata = {
  title: "提供サービス｜金融機関・法人・個人向けコンサルティング・研修｜Bulltalk",
  description:
    "FP1級・証券アナリスト・宅建士の資格と大手信託銀行12年の実務経験を活かした、金融機関・法人・個人向けコンサルティング、セミナー・研修サービス。資産形成、相続対策、不動産、事業承継など幅広く対応。",
};

const serviceCategories = [
  {
    id: "corporate",
    label: "法人・団体様向け",
    image: "/images/cards-b/professional-services.webp",
    imagePosition: "50% 50%",
    items: [
      "役員・従業員様向け、各種研修・セミナー・コンサルティング（金融教育、退職前ライフプラン、事業承継対策、相続対策、福利厚生制度に関する内容等）",
      "オーナー様向け、コンサルティング（資産運用、不動産、相続、事業承継に関する内容等）",
      "その他、金融、不動産、相続、事業承継に関すること全般ご要望に応じて対応可能です。",
    ],
  },
  {
    id: "individual",
    label: "個人のお客様向け",
    image: "/images/cards-b/personal-planning.webp",
    imagePosition: "50% 50%",
    items: [
      "ライフプラン、資産形成、NISA・iDeCo、住宅購入、不動産投資、相続・老後資金に関する相談",
      "その他、金融、不動産、相続、事業承継に関すること全般ご要望に応じて対応可能です。",
    ],
  },
  {
    id: "financial",
    label: "金融機関様向け",
    image: "/images/cards-b/trust-bank.webp",
    imagePosition: "50% 50%",
    items: [
      "営業担当者向け各種研修（資産形成、相続対策、不動産、信託、保有資格に関する内容等）",
      "顧客向けセミナー講師（資産形成、相続対策、不動産、信託に関する内容等）",
      "その他、金融、信託、不動産、相続、事業承継に関すること全般ご要望に応じて対応可能です。",
    ],
  },
];

const seminarThemes = [
  { title: "退職前ライフプラン研修", image: "retirement-planning", tag: "法人・団体" },
  { title: "社会人1年目から始める資産形成", image: "wealth-growth", tag: "法人" },
  { title: "相続で揉めない方法", image: "inheritance", tag: "法人・団体" },
  { title: "金融機関職員様向け営業研修", image: "seminar-stage", imagePosition: "50% 50%", tag: "金融機関" },
  { title: "事業承継はじめの一歩", image: "business-succession", tag: "団体・経営者" },
  { title: "NISA・iDeCo活用講座", image: "financial-knowledge", tag: "法人・団体" },
  { title: "経営者様向け資産設計", image: "wealth-simulation", tag: "団体・経営者" },
  {
    title: "その他テーマにも対応",
    image: "professional-services",
    desc: "金融、不動産、相続、事業承継に関すること全般、ご要望に応じて対応可能です。お気軽にご相談ください。",
  },
];

const strengths = [
  {
    image: "/images/cards-b/professional-credentials.webp",
    title: "3つの難関資格",
    desc: "FP1級・証券アナリスト（CMA）・宅建士を保有。金融・不動産・相続をワンストップでカバー。",
  },
  {
    image: "/images/cards-b/trust-bank.webp",
    title: "大手信託銀行12年の実務",
    desc: "個人・法人・金融機関・機関投資家まで幅広い顧客への実務コンサルティング経験。",
  },
  {
    image: "/images/cards-b/achievement-award.webp",
    title: "社長賞受賞の実績",
    desc: "新人コンペ全国2位、金融法人営業で全社最高水準の成果を上げ社長賞を受賞。",
  },
  {
    image: "/images/cards-b/seminar-stage.webp",
    title: "研修講師としての登壇経験",
    desc: "全国本支店への戦略指導や営業担当者向け各種研修企画・講師として多数登壇。",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* ① Hero */}
        <section className="brand-hero brand-hero--standard bg-navy text-white py-20 px-4 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Services</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">提供サービス</h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              大手信託銀行12年の実務経験と3つの難関資格を活かし、<br className="hidden md:inline" />
              法人・個人・金融機関様向けに幅広くサービスを提供しています。
            </p>
          </div>
        </section>

        {/* ② 選ばれる理由 */}
        <section id="strengths" className="bg-white py-16 px-4 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">選ばれる理由</h2>
            <p className="section-subtitle text-center">12年の信託銀行キャリアで培った確かな専門性</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((s) => (
                <div
                  key={s.title}
                  className="brand-surface flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[3/2] bg-light-navy">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 238px, (min-width: 640px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5">
                    <h3 className="mb-3 text-base font-bold leading-relaxed text-navy">{s.title}</h3>
                    <p className="text-[13px] leading-[1.8] text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ③ サービスカテゴリ */}
        <section id="service-categories" className="bg-offwhite py-16 px-4 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">対応可能な業務</h2>
            <p className="section-subtitle text-center">ご要望に応じて柔軟にカスタマイズいたします</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="brand-surface overflow-hidden rounded-2xl bg-white"
                >
                  {/* Card Header */}
                  <div className="relative h-44 bg-light-navy">
                    <Image
                      src={cat.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 320px, calc(100vw - 32px)"
                      className="object-cover"
                      style={{ objectPosition: cat.imagePosition }}
                    />
                  </div>
                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="mb-5 border-b border-slate-200 pb-4 text-lg font-bold text-navy">{cat.label}</h3>
                    <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                          <span className="text-[#55748f] font-bold mt-0.5 shrink-0">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ④ セミナー・研修テーマ */}
        <section id="seminar-themes" className="bg-light-navy py-16 px-4 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">主なセミナー・研修テーマ</h2>
            <p className="section-subtitle text-center">
              ご要望に応じてテーマのカスタマイズも可能です
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-5">
              {seminarThemes.map((theme) => (
                <div
                  key={theme.title}
                  className="brand-surface flex min-h-[132px] overflow-hidden"
                >
                  <div className="relative w-24 shrink-0 bg-navy sm:w-28 lg:w-32">
                    <Image
                      src={`/images/cards-b/${theme.image}.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
                      className="object-cover"
                      style={{ objectPosition: theme.imagePosition || "50% 50%" }}
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                    <h3 className="font-bold text-navy text-sm sm:text-base leading-relaxed mb-2">{theme.title}</h3>
                    {theme.tag && (
                      <span className="brand-tag self-start rounded-full px-2.5 py-1 text-xs font-semibold">
                        {theme.tag}
                      </span>
                    )}
                    {theme.desc && (
                      <p className="text-xs text-gray-600 leading-relaxed">{theme.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ ご相談の流れ */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">ご相談の流れ</h2>
            <p className="section-subtitle text-center">まずはお気軽にお問い合わせください</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "お問い合わせ", desc: "LINEまたはメールからお気軽にご連絡ください。", icon: "📩" },
                { step: "02", title: "ヒアリング", desc: "ご要望・課題をお伺いし、最適なプランをご提案します。", icon: "🗣️" },
                { step: "03", title: "ご提案", desc: "内容・スケジュール・費用をご提示いたします。", icon: "📄" },
                { step: "04", title: "実施", desc: "コンサルティング・研修を実施。アフターフォローも対応。", icon: "✅" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <div className="text-gold font-bold text-xs mb-1">STEP {s.step}</div>
                  <h3 className="font-bold text-navy text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑥ CTA */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
              研修・セミナー・コンサルティングの内容やご予算は、<br className="hidden md:inline" />
              ご要望に応じて柔軟にカスタマイズ可能です。<br />
              どんな些細なことでも、まずはお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://lin.ee/FmH7NXr"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-200 text-base"
              >
                💬 LINEで相談する
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-light-gold transition-all duration-200 text-base"
              >
                📩 メールで相談する
              </a>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
