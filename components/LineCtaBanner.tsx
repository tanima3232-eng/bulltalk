export default function LineCtaBanner() {
  return (
    <section className="bg-gold py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-navy/60 text-xs font-bold uppercase tracking-widest mb-4">
          🔥 BULL友 MEMBERS ONLY
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">
          Bull友になる
        </h2>

        {/* 安心バッジ */}
        <div className="flex justify-center items-center gap-2 flex-wrap mb-8">
          <span className="text-navy/50 text-sm">＼</span>
          {["✓ 完全無料", "✓ LINE追加するだけ", "✓ 特典あり"].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center font-bold rounded-full text-xs px-3 py-1.5"
              style={{
                background: "rgba(26,46,74,0.12)",
                color: "#1A2E4A",
                border: "1px solid rgba(26,46,74,0.25)",
              }}
            >
              {badge}
            </span>
          ))}
          <span className="text-navy/50 text-sm">／</span>
        </div>

        {/* カード型メリット3点 */}
        <div className="flex flex-col gap-3 mb-8 text-left">
          {[
            {
              num: "①",
              title: "毎日の日経225指数の投資判断をLINEで受け取れる",
              desc: "場引け前に届く、プロの投資判断をリアルタイムで確認。",
            },
            {
              num: "②",
              title: "LINE登録者限定の相場情報・マーケットコメント",
              desc: "一般公開しないディープな相場情報をお届けします。",
            },
            {
              num: "③",
              title: "元大手信託銀行員へのLINE無料相談（1回）",
              desc: "投資・資産形成・相続・不動産等の疑問を直接プロに相談できます。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex items-start gap-4 rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(26,46,74,0.12)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                className="font-bold text-sm flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
                style={{ background: "#1A2E4A", color: "#C9A84C" }}
              >
                {item.num}
              </span>
              <div>
                <p className="text-navy font-bold text-sm leading-snug mb-0.5">{item.title}</p>
                <p className="text-navy/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <a
          href="https://lin.ee/FmH7NXr"
          className="btn-line inline-flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-xl shadow-lg"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
          </svg>
          今すぐBull友になる
        </a>

        <p className="text-navy/40 text-xs mt-4">LINE追加のみ・完全無料</p>
      </div>
    </section>
  );
}
