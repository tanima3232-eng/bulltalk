import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Bulltalk",
  description:
    "Bulltalk（ブルトーク）のプライバシーポリシーです。個人情報の収集・利用・管理方針について説明しています。",
};

const sections = [
  {
    title: "1. 事業者情報",
    content: `本プライバシーポリシーは、アドフィン（以下「当社」といいます）が運営するウェブサイト「Bulltalk（ブルトーク）」（以下「本サービス」といいます）における、ユーザーの個人情報の取り扱いについて定めるものです。`,
  },
  {
    title: "2. 収集する個人情報",
    content: `当社は、以下の情報を収集することがあります。

・お名前・メールアドレス（お問い合わせ・LINE登録時）
・LINEアカウント情報（LINE公式アカウント連携時）
・サービス利用履歴・アクセスログ
・Cookieおよびこれに類する技術による利用状況データ
・Google Analytics等のアクセス解析データ（匿名）`,
  },
  {
    title: "3. 個人情報の利用目的",
    content: `収集した個人情報は、以下の目的のために利用します。

・本サービスの提供・運営・改善
・お問い合わせへの対応
・サービスに関するご連絡・情報提供（メールマガジン・LINE配信等）
・新サービス・機能のご案内
・利用規約違反等への対応
・その他、上記の利用目的に付随する目的`,
  },
  {
    title: "4. 個人情報の第三者提供",
    content: `当社は、以下のいずれかに該当する場合を除き、ユーザーの個人情報を第三者に提供しません。

・ユーザーの同意がある場合
・法令に基づく場合
・人の生命・身体・財産の保護のために必要な場合
・公衆衛生の向上または児童の健全な育成のために必要な場合
・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合`,
  },
  {
    title: "5. Cookieの利用",
    content: `本サービスでは、サービスの利便性向上および利用状況の分析のため、Cookieを使用しています。ブラウザの設定によりCookieを無効にすることができますが、その場合、一部のサービスが正常に機能しないことがあります。

また、Google Analytics（Googleが提供するアクセス解析ツール）を使用しており、Cookieを通じて匿名のトラフィックデータを収集しています。Google Analyticsの利用に関する情報は、Googleのプライバシーポリシーをご参照ください。`,
  },
  {
    title: "6. アフィリエイトプログラム",
    content: `本サービスでは、アフィリエイトプログラムに参加しており、商品・サービスのご紹介に際し広告収益を得る場合があります。アフィリエイト広告であることは、各ページ内で明示します。`,
  },
  {
    title: "7. 個人情報の管理",
    content: `当社は、ユーザーの個人情報を適切に管理し、個人情報の漏洩・紛失・改ざん等を防止するために、合理的なセキュリティ対策を実施します。ただし、インターネット上での完全なセキュリティを保証するものではありません。`,
  },
  {
    title: "8. 個人情報の開示・訂正・削除",
    content: `ユーザーは、当社が保有する自己の個人情報について、開示・訂正・削除を請求することができます。請求は下記のお問い合わせ先までご連絡ください。

メールアドレス：info@adfin.jp`,
  },
  {
    title: "9. 未成年者の個人情報",
    content: `18歳未満のユーザーが個人情報を提供する場合は、保護者の同意を得た上でご利用ください。`,
  },
  {
    title: "10. プライバシーポリシーの変更",
    content: `当社は、必要に応じて本プライバシーポリシーを改定することがあります。重要な変更がある場合は、本サービス上にてお知らせします。改定後のプライバシーポリシーは、本ページ上に掲載した時点で効力を生じるものとします。`,
  },
  {
    title: "11. お問い合わせ",
    content: `本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。

事業者名：アドフィン
代表者：谷本 光章
メールアドレス：info@adfin.jp`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
              LEGAL
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              プライバシーポリシー
            </h1>
            <p className="text-white/70 text-sm">
              Privacy Policy — 個人情報の取り扱いについて
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro box */}
            <div className="bg-light-gold border-l-4 border-gold rounded-r-xl px-6 py-4 mb-10">
              <p className="text-navy font-bold text-sm">
                アドフィン（以下「当社」）は、ユーザーの個人情報保護を重要な責務と認識し、以下のプライバシーポリシーを定め、誠実に遵守します。
              </p>
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
                >
                  <h2 className="text-navy font-bold text-lg mb-4 pb-3 border-b border-gray-100">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-loose whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-xs mt-10 text-center">
              制定日：2026年6月28日　最終更新日：2026年6月28日
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
