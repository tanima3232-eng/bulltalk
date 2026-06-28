import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Bulltalk",
  description:
    "Bulltalk（ブルトーク）の特定商取引法に基づく表記ページです。販売事業者・代表者・所在地・電話番号・メールアドレス・販売価格・お支払い方法等を掲載しています。",
};

const items = [
  {
    label: "販売事業者",
    value: "アドフィン",
  },
  {
    label: "代表者",
    value: "谷本 光章",
  },
  {
    label: "所在地",
    value: "所在地については、ご請求いただいた場合には、遅滞なく開示いたします。",
  },
  {
    label: "電話番号",
    value: "電話番号については、ご請求いただいた場合には、遅滞なく開示いたします。",
  },
  {
    label: "メールアドレス",
    value: "info@adfin.jp",
    isLink: true,
    href: "mailto:info@adfin.jp",
  },
  {
    label: "ホームページ",
    value: "https://www.bulltalk.jp/",
    isLink: true,
    href: "https://www.bulltalk.jp/",
  },
  {
    label: "販売価格",
    value: "各サービスページに表示された金額（税込）",
  },
  {
    label: "商品代金以外の必要料金",
    value: "インターネット接続に必要な通信料等はお客様のご負担となります。",
  },
  {
    label: "お支払い方法",
    value: "クレジットカード決済、その他当社が指定する決済方法",
  },
  {
    label: "お支払い時期",
    value:
      "サブスクリプションサービスは申込時および契約更新日に決済されます。\n単発サービスは申込時に決済されます。",
  },
  {
    label: "サービス提供時期",
    value:
      "決済完了後、速やかにサービスをご利用いただけます。面談サービスについては、予約日時に提供いたします。",
  },
  {
    label: "返品・キャンセルについて",
    value:
      "デジタルコンテンツの性質上、原則として返品・返金はお受けできません。\nサービス内容に重大な瑕疵がある場合は、個別にご対応いたします。",
  },
  {
    label: "動作環境",
    value:
      "最新バージョンのGoogle Chrome、Safari、Firefox、Microsoft Edge推奨。インターネット接続環境が必要です。",
  },
];

export default function TokuteishouTorihikiPage() {
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
              特定商取引法に基づく表記
            </h1>
            <p className="text-white/70 text-sm">
              特定商取引に関する法律第11条に基づき、以下の事項を表示します。
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  {items.map((item, i) => (
                    <tr
                      key={item.label}
                      className={`border-b border-gray-100 ${
                        i % 2 === 0 ? "bg-white" : "bg-offwhite/50"
                      }`}
                    >
                      <th className="py-5 px-6 text-navy font-bold text-sm w-44 md:w-56 whitespace-nowrap align-top text-left border-r border-gray-100">
                        {item.label}
                      </th>
                      <td className="py-5 px-6 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {item.isLink ? (
                          <a
                            href={item.href}
                            className="text-gold hover:underline break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-400 text-xs mt-8 text-center">
              最終更新日：2026年6月28日
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
