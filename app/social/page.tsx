import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";

const pageUrl = "https://www.bulltalk.jp/social";
const description =
  "谷本光章｜証券アナリスト（CMA）・FP1級・宅建士が金融・投資情報をわかりやすく発信。Instagram、YouTube、TikTok、公式LINE、note、資産形成シミュレーションへのリンクをまとめました。";

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

function LinkCard({ href, title, detail, icon, external = false }: {
  href: string;
  title: string;
  detail?: string;
  icon: ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-relaxed text-navy">{title}</span>
        {detail && <span className="mt-0.5 block text-sm leading-relaxed text-slate-600">{detail}</span>}
      </span>
      <span className="text-slate-400 transition-colors group-hover:text-navy"><Arrow external={external} /></span>
    </>
  );
  const className = "group flex min-h-[84px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy";
  return external ? <a href={href} className={className}>{content}</a> : <Link href={href} className={className}>{content}</Link>;
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
      <Header />
      <main className="bg-offwhite px-4 pb-14 pt-9 sm:pb-20 sm:pt-12">
        <div className="mx-auto max-w-xl">
          <div className="mb-9 text-center">
            <Image src="/profile.jpg" alt="谷本光章" width={88} height={88} sizes="88px" priority className="mx-auto mb-4 h-[88px] w-[88px] rounded-full border-4 border-white object-cover shadow-sm" />
            <p className="mb-2 font-inter text-[11px] font-bold tracking-[0.2em] text-[#8B7038]">BULLTALK / OFFICIAL LINKS</p>
            <h1 className="text-2xl font-bold tracking-wide text-navy sm:text-3xl">公式SNS・リンク集</h1>
            <p className="mt-4 text-lg font-bold text-navy">谷本光章</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">証券アナリスト（CMA）・FP1級｜宅建士</p>
            <p className="mt-3 text-sm text-dark">金融・投資情報をわかりやすく発信</p>
          </div>

          <div className="space-y-8">
            <section aria-labelledby="videos-heading">
              <SectionHeading id="videos-heading" number="01">動画でマーケットを知る</SectionHeading>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">毎日1分で投資に役立つ情報と注目ポイントを解説</p>
              <div className="space-y-3">
                <LinkCard href="https://www.instagram.com/bulltalk_jp" title="Instagram" detail="@bulltalk_jp" icon={<InstagramIcon />} external />
                <LinkCard href="https://www.youtube.com/@bulltalk_jp" title="YouTube" detail="@bulltalk_jp" icon={<Logo src="/images/social/youtube.png" />} external />
                <LinkCard href="https://www.tiktok.com/@bulltalk_jp" title="TikTok" detail="@bulltalk_jp" icon={<Logo src="/images/social/tiktok.png" />} external />
              </div>
            </section>

            <section aria-labelledby="line-heading">
              <SectionHeading id="line-heading" number="02">特典を受け取る・相談する</SectionHeading>
              <a href="https://lin.ee/FmH7NXr" className="group block rounded-2xl border border-green-200 bg-white p-5 shadow-sm transition-colors hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
                <span className="flex items-center gap-3">
                  <Logo src="/images/social/line.png" />
                  <span className="flex-1 text-lg font-bold text-navy">公式LINE</span>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800">登録無料</span>
                </span>
                <span className="mt-4 block space-y-3 text-sm leading-relaxed text-dark">
                  <span className="block"><span className="block font-bold text-navy">『プロが最初に決めている資産配分の考え方』ブック</span><span className="text-slate-600">LINE登録で受け取れます。</span></span>
                  <span className="block font-bold text-navy">元大手信託銀行員への無料相談（1回）</span>
                </span>
                <span className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-green-700 px-3 py-3 text-sm font-bold text-white transition-colors group-hover:bg-green-800">LINEで特典を受け取る・相談する<Arrow external /></span>
              </a>
            </section>

            <section aria-labelledby="reports-heading">
              <SectionHeading id="reports-heading" number="03">分析を詳しく読む</SectionHeading>
              <LinkCard href="https://note.com/bulltalk" title="note" detail="個別企業の株価分析レポート" icon={<span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-inter text-sm font-extrabold tracking-tighter text-black">note</span>} external />
            </section>

            <section aria-labelledby="simulation-heading">
              <SectionHeading id="simulation-heading" number="04">自分の資産形成を考える</SectionHeading>
              <LinkCard href="/simulation" title="資産形成シミュレーション" icon={<span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-navy text-navy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M4 4v16h16M8 16v-4m5 4V9m5 7V5" /></svg></span>} />
            </section>

            <section aria-labelledby="website-heading">
              <SectionHeading id="website-heading" number="05">Bulltalkをもっと知る</SectionHeading>
              <LinkCard href="/" title="Bulltalk 公式サイト" detail="金融コラム・サービス・プロフィールはこちら" icon={<Logo src="/profile.jpg" portrait />} />
            </section>
          </div>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center">
        <p className="mb-4 text-sm font-bold text-navy">Bulltalk｜谷本光章</p>
        <nav aria-label="リンク集の補足メニュー" className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-600">
          {[
            { href: "/about", label: "運営者について" },
            { href: "/contact", label: "お問い合わせ" },
            { href: "/legal/privacy", label: "プライバシーポリシー" },
            { href: "/legal/terms", label: "利用規約" },
            { href: "/legal/tokuteishoutorihiki", label: "特定商取引法に基づく表記" },
          ].map(({ href, label }) => <Link key={href} href={href} className="inline-flex min-h-[44px] items-center hover:text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy">{label}</Link>)}
        </nav>
        <p className="mt-4 text-[11px] text-slate-500">© {new Date().getFullYear()} Bulltalk</p>
      </footer>
    </>
  );
}
