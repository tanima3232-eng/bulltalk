import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bulltalk リンク一覧｜元大手信託銀行員 谷本光章",
  description:
    "元大手信託銀行員・谷本光章のリンク集。LINE特典PDF・おすすめ証券口座など。",
  robots: { index: false, follow: false },
};

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
            ① LINE登録特典カード
        ══════════════════════════════ */}
        <a
          href="https://lin.ee/FmH7NXr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", marginBottom: 24 }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1e3a5c 0%, #1A2E4A 100%)",
              border: "1.5px solid #C9A84C",
              borderRadius: 16,
              padding: "20px 20px 16px",
              boxShadow: "0 4px 24px rgba(201,168,76,0.18)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* 背景グロー */}
            <div style={{
              position: "absolute", top: -40, right: -40,
              width: 160, height: 160,
              background: "radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* ラベル */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{
                background: "#C9A84C", color: "#1A2E4A",
                fontSize: 10, fontWeight: 800, padding: "3px 10px",
                borderRadius: 20, letterSpacing: "0.08em",
              }}>
                LINE登録特典
              </span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>完全無料</span>
            </div>

            {/* メインコピー */}
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>📘</span>
              <div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, marginBottom: 4 }}>
                  プロが最初に決めている
                </p>
                <p style={{ color: "#ffffff", fontWeight: 800, fontSize: 17, lineHeight: 1.4, marginBottom: 10 }}>
                  「資産配分の考え方」
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginBottom: 12 }}>
                  元大手信託銀行員が教える 全21ページ限定PDF
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 }}>
                  {[
                    "投資を始める前に考えること",
                    "プロが商品より先に決めること",
                    "インフレ時代のお金の守り方",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "#4ADE80", fontSize: 12 }}>✅</span>
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAボタン */}
            <div
              style={{
                background: "#06C755",
                color: "#fff",
                fontWeight: 800,
                fontSize: 15,
                borderRadius: 999,
                padding: "14px 0",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                boxShadow: "0 4px 20px rgba(6,199,85,0.5)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
              </svg>
              LINEで無料で受け取る
            </div>
          </div>
        </a>

        {/* ══════════════════════════════
            ② おすすめ証券会社セクション
        ══════════════════════════════ */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 16,
            padding: "22px 18px",
            marginBottom: 24,
          }}
        >
          {/* タイトル */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <span style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #C9A84C, #e8c96a)",
              color: "#1A2E4A",
              fontSize: 10, fontWeight: 800,
              padding: "4px 14px", borderRadius: 20,
              marginBottom: 10, letterSpacing: "0.05em",
            }}>
              🔥 絶対に必要
            </span>
            <p style={{ color: "#ffffff", fontWeight: 800, fontSize: 16, lineHeight: 1.5 }}>
              私がおすすめの証券会社<br />
              <span style={{ color: "#C9A84C" }}>2つの口座</span>がコレ！
            </p>
          </div>

          {/* 2社並列 */}
          <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
            {/* 楽天証券 */}
            <div style={{
              flex: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 12, padding: "14px 10px", textAlign: "center",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                overflow: "hidden", margin: "0 auto 8px",
              }}>
                <Image
                  src="/rakuten-logo.png"
                  alt="楽天証券"
                  width={52}
                  height={52}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>楽天証券</p>
            </div>

            {/* マネックス証券 */}
            <div style={{
              flex: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 12, padding: "14px 10px", textAlign: "center",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                overflow: "hidden", margin: "0 auto 8px",
              }}>
                <Image
                  src="/monex-logo.png"
                  alt="マネックス証券"
                  width={52}
                  height={52}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>マネックス証券</p>
            </div>
          </div>

          {/* なんで2つ使ってるの？ */}
          <div style={{
            background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.35)",
            borderRadius: 12, padding: "12px 14px", textAlign: "center",
          }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginBottom: 4 }}>
              なんで2つも使ってるの？
            </p>
            <p style={{ color: "#C9A84C", fontWeight: 800, fontSize: 15 }}>
              それぞれ異なる強みを<br />持っているから！
            </p>
          </div>
        </div>

        {/* ══════════════════════════════
            ③ 各社の強み
        ══════════════════════════════ */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: 16,
            padding: "20px 18px",
            marginBottom: 24,
          }}
        >
          {/* 楽天証券 */}
          <div style={{ marginBottom: 20 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#BF0000", borderRadius: 8,
              padding: "6px 14px", marginBottom: 12,
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 12 }}>楽</span>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>楽天証券</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "初心者でも使いやすい画面",
                "NISA口座数No.1",
                "楽天ポイントが貯まる・使える",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    width: 18, height: 18, background: "#BF0000", borderRadius: 4,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontSize: 10 }}>✓</span>
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(201,168,76,0.2)", marginBottom: 20 }} />

          {/* マネックス証券 */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#003D7A", borderRadius: 8,
              padding: "6px 14px", marginBottom: 12,
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 12 }}>M</span>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>マネックス証券</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "アプリが使いやすい",
                "より高精度の分析ツール",
                "dポイントが貯まる・使える",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    width: 18, height: 18, background: "#003D7A", borderRadius: 4,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ color: "#fff", fontSize: 10 }}>✓</span>
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            ④ プロのコメント + アフィリエイトリンク
        ══════════════════════════════ */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: 16,
            padding: "20px 18px",
            marginBottom: 24,
          }}
        >
          {/* アイコン＋吹き出し */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              border: "2.5px solid #C9A84C", overflow: "hidden", flexShrink: 0,
            }}>
              <Image
                src="/profile.jpg"
                alt="谷本光章"
                width={64}
                height={64}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              {/* 吹き出し */}
              <div style={{
                background: "#C9A84C", color: "#1A2E4A",
                borderRadius: "0 12px 12px 12px",
                padding: "10px 14px",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", left: -8, top: 12,
                  width: 0, height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "8px solid #C9A84C",
                }} />
                <p style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.5 }}>
                  「口座は使い分けるもの」
                </p>
                <p style={{ fontWeight: 600, fontSize: 12, marginTop: 2 }}>
                  証券口座にも役割分担を
                </p>
              </div>
            </div>
          </div>

          {/* 説明文 */}
          <div style={{
            background: "rgba(255,255,255,0.07)", borderRadius: 10,
            padding: "14px 14px", marginBottom: 20,
          }}>
            <p style={{
              color: "rgba(255,255,255,0.85)", fontSize: 13,
              lineHeight: 1.8,
            }}>
              楽天証券は、NISA口座数No.1の実績と使いやすい取引画面で、日々の売買のメイン口座に適しています。マネックス証券は、銘柄分析ツールや情報量に強みがあり、投資判断の材料集めに役立ちます。プロも、1つの口座だけに頼らず、目的別に使い分けています。
            </p>
          </div>

          {/* アフィリエイトバナー：楽天証券 */}
          <div style={{ marginBottom: 12 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, marginBottom: 6 }}>楽天証券</p>
            <div style={{
              borderRadius: 10, overflow: "hidden",
              border: "1px solid rgba(191,0,0,0.4)",
            }}>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="https://ad2.trafficgate.net/t/r/1109/738/317466_396735"
                target="_blank"
                rel="nofollow noreferrer"
                style={{ display: "block" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://srv2.trafficgate.net/t/b/1109/738/317466_396735"
                  alt="楽天証券 口座開設"
                  style={{ width: "100%", display: "block" }}
                />
              </a>
            </div>
          </div>

          {/* アフィリエイトバナー：マネックス証券 */}
          <div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, marginBottom: 6 }}>マネックス証券</p>
            <div style={{
              borderRadius: 10, overflow: "hidden",
              border: "1px solid rgba(0,61,122,0.4)",
            }}>
              <a
                href="https://h.accesstrade.net/sp/cc?rk=0100pe7200oqbc"
                rel="nofollow noreferrer"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ display: "block" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://h.accesstrade.net/sp/rr?rk=0100pe7200oqbc"
                  alt="マネックス証券"
                  style={{ width: "100%", display: "block" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            ⑤ LINE再案内（まだ受け取っていない方へ）
        ══════════════════════════════ */}
        <a
          href="https://lin.ee/FmH7NXr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block", marginBottom: 32 }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #0f2340 0%, #1A2E4A 100%)",
              border: "1.5px solid rgba(201,168,76,0.5)",
              borderRadius: 16,
              padding: "20px 18px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, marginBottom: 10 }}>
              まだ受け取っていない方へ
            </p>
            <span style={{ fontSize: 28 }}>📘</span>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 8 }}>
              プロが最初に決めている
            </p>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>
              「資産配分の考え方」
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 16 }}>
              LINE登録で 全21ページPDF無料公開
            </p>
            <div style={{
              background: "#06C755", color: "#fff",
              fontWeight: 800, fontSize: 15,
              borderRadius: 999, padding: "14px 0",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: "0 4px 20px rgba(6,199,85,0.5)",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
              </svg>
              LINEで無料で受け取る
            </div>
          </div>
        </a>

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
