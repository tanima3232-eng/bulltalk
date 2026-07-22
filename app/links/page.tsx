"use client";

import Image from "next/image";

export default function LinksPage() {
  return (
    <main
      style={{
        background: "linear-gradient(160deg, #0d1b2e 0%, #1A2E4A 60%, #0d1b2e 100%)",
        minHeight: "100vh",
        fontFamily: "'Noto Sans JP', 'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "40px 16px 60px" }}>

        {/* ── プロフィールヘッダー ── */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "3px solid #C9A84C",
              overflow: "hidden",
              margin: "0 auto 12px",
              boxShadow: "0 0 24px rgba(201,168,76,0.35)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="谷本光章 プロフィール"
              width={96}
              height={96}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <p style={{ color: "#C9A84C", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>
            Bulltalk｜谷本光章
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
            元大手信託銀行員 / FP1級 / 証券アナリスト / 宅建士
          </p>
        </div>

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
            src="/line-tokuten-banner.jpg"
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
        <p style={{
          color: "rgba(255,255,255,0.3)", fontSize: 11,
          textAlign: "center", lineHeight: 1.7,
        }}>
          ※サイトの一部リンク先はアフィリエイト広告、PRを含みます。
        </p>
      </div>
    </main>
  );
}
