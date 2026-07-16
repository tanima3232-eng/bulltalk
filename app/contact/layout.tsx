import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜コンサルティング・研修・セミナーのご依頼｜Bulltalk",
  description:
    "Bulltalk（アドフィン）へのお問い合わせフォーム。コンサルティング、研修、セミナー、FP相談、講演依頼など、お気軽にお問い合わせください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
