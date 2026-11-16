import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const pageUrl = "https://www.bulltalk.jp/social";
const description =
  "Bulltalk／谷本光章の公式SNS・分析コンテンツへの入口。日本株・米国株のマーケット情報、株価分析・企業分析を発信しています。";

export const metadata: Metadata = {
  title: "公式SNS・リンク集",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Bulltalk",
    title: "Bulltalk｜公式SNS・リンク集",
    description,
    url: pageUrl,
    images: [{ url: "https://www.bulltalk.jp/profile.jpg", width: 1080, height: 1080, alt: "谷本光章" }],
  },
  twitter: {
    card: "summary",
    title: "Bulltalk｜公式SNS・リンク集",
    description,
    images: ["https://www.bulltalk.jp/profile.jpg"],
  },
};

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      {external ? <path d="M7 17 17 7M7 7h10v10" /> : <path d="M5 12h14m-6-6 6 6-6 6" />}
    </svg>
  );
}

function InstagramIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FCAF45] via-[#DD2A7B] to-[#8134AF] text-white" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-8 w-8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

function Logo({ src, portrait = false }: { src: string; portrait?: boolean }) {
  return <Image src={src} alt="" width={48} height={48} sizes="48px" className={`h-12 w-12 ${portrait ? "rounded-full object-cover" : "rounded-xl object-contain"}`} />;
}

function LinkCard({ href, title, detail, cta, icon, external = false }: {
  href: string;
  title: string;
  detail?: ReactNode;
  cta?: string;
  icon: ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-relaxed text-navy">{title}</span>
        {detail && <span className="mt-0.5 block text-sm leading-relaxed text-slate-600">{detail}</span>}
        {cta && <span className="mt-2 block text-sm font-medium leading-relaxed text-navy underline decoration-slate-300 underline-offset-4 group-hover:decoration-navy">{cta}</span>}
      </span>
      <span className="text-slate-400 transition-colors group-hover:text-navy"><Arrow external={external} /></span>
    </>
  );
  const className = "group flex min-h-[76px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy";
  return external ? <a href={href} className={className}>{content}</a> : <Link href={href} prefetch={false} className={className}>{content}</Link>;
}

function SectionHeading({ id, number, children }: { id: string; number: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mb-3 flex items-center gap-3 text-base font-bold text-navy sm:text-lg">
      <span className="font-inter text-xs font-medium tracking-wider text-[#8B7038]" aria-hidden="true">{number}</span>
      {children}
    </h2>
  );
}

export default function SocialPage() {
  return (
    <>
      <main className="bg-offwhite px-4 pb-9 pt-7 sm:pb-12 sm:pt-10">
        <div className="mx-auto max-w-xl">
          <div className="mb-7 text-center">
            <p className="mb-2 font-inter text-[11px] font-bold tracking-[0.2em] text-[#8B7038]">BULLTALK / OFFICIAL LINKS</p>
            <h1 className="text-2xl font-bold tracking-wide text-navy sm:text-3xl">公式SNS・リンク集</h1>
            <p className="mt-4 text-sm font-bold text-navy">谷本光章</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">証券アナリスト（CMA）｜FP1級｜宅建士</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">日本株・米国株のマーケット情報、<br />株価分析・企業分析を発信しています。</p>
          </div>

          <div className="space-y-6">
            <section aria-labelledby="videos-heading">
              <SectionHeading id="videos-heading" number="01">SNSでマーケットを知る</SectionHeading>
              <p className="mb-3 text-sm leading-relaxed text-slate-600">日本株・米国株に役立つ情報をタイムリーに発信</p>
              <LinkCard href="https://x.com/bulltalk_jp" title="X" icon={<Logo src="/images/social/x.png" />} external />
              <p className="mb-3 mt-5 text-sm leading-relaxed text-slate-600">毎日1分でプロの視点で相場を解説</p>
              <div className="space-y-2.5">
                <LinkCard href="https://www.instagram.com/bulltalk_jp" title="Instagram" icon={<InstagramIcon />} external />
                <LinkCard href="https://www.youtube.com/@bulltalk_jp" title="YouTube" icon={<span className="block rounded-xl border border-slate-200 bg-white"><Logo src="/images/social/youtube.png" /></span>} external />
                <LinkCard href="https://www.tiktok.com/@bulltalk_jp" title="TikTok" icon={<Logo src="/images/social/tiktok.png" />} external />
              </div>
            </section>

            <section aria-labelledby="reports-heading">
              <SectionHeading id="reports-heading" number="02">分析を詳しく読む</SectionHeading>
              <LinkCard href="https://note.com/bulltalk" title="note" detail="個別企業の株価分析レポートを無料公開" cta="noteで株価分析レポートを読む" icon={<span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-inter text-sm font-extrabold tracking-tighter text-black">note</span>} external />
            </section>

            <section aria-labelledby="simulation-heading">
              <SectionHeading id="simulation-heading" number="03">自分の資産形成を考える</SectionHeading>
              <LinkCard href="/simulation" title="資産形成シミュレーション" detail="毎月の積立額・期間・想定リターンから、将来の資産額を試算" cta="無料でシミュレーションする" icon={<Logo src="/profile.jpg" portrait />} />
            </section>

            <section aria-labelledby="line-heading">
              <SectionHeading id="line-heading" number="04">無料資料・最新情報を受け取る</SectionHeading>
              <p className="mb-3 text-sm leading-relaxed text-slate-600">資産形成に役立つ無料資料や最新情報を配信</p>
              <LinkCard href="https://lin.ee/FmH7NXr" title="LINE公式アカウントを見る" icon={<Logo src="/images/social/line.png" />} external />
            </section>

            <section aria-labelledby="website-heading">
              <SectionHeading id="website-heading" number="05">Bulltalkをもっと知る</SectionHeading>
              <LinkCard href="/" title="Bulltalk公式サイト" detail="マーケット分析・金融コラム・プロフィールなど" cta="Bulltalk公式サイトを見る" icon={<Logo src="/profile.jpg" portrait />} />
            </section>
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center">
        <nav aria-label="リンク集の補足メニュー" className="mx-auto flex max-w-xl items-center justify-center gap-2 text-xs text-slate-600">
          <Link href="/operator" prefetch={false} className="inline-flex min-h-[44px] items-center hover:text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy">運営者情報</Link>
          <span aria-hidden="true" className="text-slate-300">｜</span>
          <Link href="/legal/privacy" prefetch={false} className="inline-flex min-h-[44px] items-center hover:text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy">プライバシーポリシー</Link>
        </nav>
        <p className="mt-2 text-[11px] text-slate-500">© {new Date().getFullYear()} Bulltalk</p>
      </footer>
    </>
  );
}
