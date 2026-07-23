"use client";

import type { Metadata } from "next";
import Image from "next/image";

const LINE_URL = "https://lin.ee/FmH7NXr";

export default function KanezatoShindanLpPage() {
  return (
    <main
      style={{
        background: "#ffffff",
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
          <p style={{ color: "#1A2E4A", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>
            Bulltalk｜谷本光章
          </p>
          <p style={{ color: "rgba(0,0,0,0.5)", fontSize: 12 }}>
            元大手信託銀行員 / FP1級 / 証券アナリスト / 宅建士
          </p>
        </div>

        {/* ══════════════════════════════
            ① LINE登録特典バナー（画像クリックでLINE友だち追加）
        ══════════════════════════════ */}
        <a
          href={LINE_URL}
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
            ② LINE友だち追加 CTAボタン
        ══════════════════════════════ */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", marginBottom: 32 }}
        >
          <div
            style={{
              background: "#06C755",
              color: "#fff",
              fontWeight: 800,
              fontSize: 16,
              borderRadius: 999,
              padding: "16px 0",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              boxShadow: "0 4px 20px rgba(6,199,85,0.5)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
            </svg>
            LINEで友だち追加して無料で受け取る
          </div>
        </a>

      </div>
    </main>
  );
}
