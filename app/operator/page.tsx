import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "Bulltalkの運営者情報。サイト名、運営者、運営内容、お問い合わせ先をご案内します。",
  alternates: { canonical: "https://www.bulltalk.jp/operator" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Bulltalk",
    title: "運営者情報 | Bulltalk",
    description: "Bulltalkの運営者情報とお問い合わせ先。",
    url: "https://www.bulltalk.jp/operator",
  },
};

export default function OperatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-offwhite">
      <main className="w-full flex-1 px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-xl">
          <div className="mb-7 text-center">
            <p className="mb-2 font-inter text-[11px] font-bold tracking-[0.2em] text-[#8B7038]">BULLTALK</p>
            <h1 className="text-2xl font-bold tracking-wide text-navy sm:text-3xl">運営者情報</h1>
          </div>

          <dl className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-7">
            {[
              { label: "サイト名", value: "Bulltalk" },
              { label: "運営者", value: "谷本 光章" },
              { label: "運営内容", value: "金融・投資に関する情報発信" },
            ].map(({ label, value }) => (
              <div key={label} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[112px_1fr] sm:gap-4">
                <dt className="text-sm font-bold text-navy">{label}</dt>
                <dd className="text-sm leading-relaxed text-dark">{value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[112px_1fr] sm:gap-4">
              <dt className="text-sm font-bold text-navy">お問い合わせ</dt>
              <dd className="text-sm leading-relaxed">
                <a href="mailto:info@adfin.jp" className="inline-flex min-h-[44px] items-center break-all text-navy underline decoration-slate-300 underline-offset-4 hover:decoration-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">info@adfin.jp</a>
              </dd>
            </div>
          </dl>

          <div className="mt-6 text-center">
            <Link href="/social" prefetch={false} className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">
              <span aria-hidden="true">←</span> 公式SNS・リンク集へ戻る
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center">
        <Link href="/legal/privacy" prefetch={false} className="inline-flex min-h-[44px] items-center text-xs text-slate-600 hover:text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy">プライバシーポリシー</Link>
        <p className="mt-2 text-[11px] text-slate-500">© {new Date().getFullYear()} Bulltalk</p>
      </footer>
    </div>
  );
}
