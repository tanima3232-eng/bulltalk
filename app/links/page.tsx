"use client";

import Image from "next/image";

export default function LinksPage() {
  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Noto Sans JP', 'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "16px 16px 60px" }}>

        {/* ── プロフィールヘッダー（画像2に含まれるため非表示） ── */}

        {/* ══════════════════════════════
            ① LINE登録特典バナー（画像クリックでLINE登録）
        ══════════════════════════════ */}
        <a
          href="https://lin.ee/FmH7NXr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", marginBottom: 24 }}
        >
          <Image
            src="/line-tokuten-banner.png"
            alt="LINE登録者限定 無料プレゼント｜資産配分の考え方 全17ページPDF"
            width={800}
            height={450}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 16,
              display: "block",
              boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
            }}
            priority
          />
        </a>

        {/* ══════════════════════════════
            ② おすすめ証券会社セクション（一時非表示）
        ══════════════════════════════ */}
        {/* 口座開設セクションは一時非表示
        <div ...>...</div>
        */}

        {/* ══════════════════════════════
            ⑤ LINE再案内（まだ受け取っていない方へ）（一時非表示）
        ══════════════════════════════ */}
        {/* LINE再案内は一時非表示
        <a href="https://lin.ee/FmH7NXr" ...>...</a>
        */}

        {/* ══════════════════════════════
            ⑥ 免責事項フッター
        ══════════════════════════════ */}

      </div>
    </main>
  );
}
