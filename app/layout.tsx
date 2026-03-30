import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bulltalk（ブルトーク）｜元大手信託銀行員が本音で発信する金融教育サイト",
    template: "%s | Bulltalk",
  },
  description:
    "日経225分析・相続・資産運用・不動産まで。元大手信託銀行員12年・FP1級・証券アナリスト（CMA）・宅建士が無料で解説します。",
  keywords: ["日経225", "資産運用", "相続", "不動産", "FP", "投資信託", "ブル型"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://bulltalk.jp",
    siteName: "Bulltalk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased bg-offwhite text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
