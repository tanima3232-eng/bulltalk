export default function LineCtaBanner() {
  return (
    <section className="brand-band py-16 px-4 text-white">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
          🔥 BULL友 MEMBERS ONLY
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
          Bull友になる
        </h2>

        {/* 安心バッジ */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className="text-xs font-bold text-gold/70 shrink-0">＼</span>
          <div className="flex flex-wrap justify-center gap-2 min-w-0">
            {["✓ 完全無料", "✓ LINE追加するだけ", "✓ 特典あり"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center font-bold rounded-full whitespace-nowrap bg-white/5 text-white/80 border border-white/[0.15] text-[11px] px-2.5 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
          <span className="text-xs font-bold text-gold/70 shrink-0">／</span>
        </div>

        {/* カード型メリット3点 */}
        <div className="flex flex-col gap-3 mb-8 text-left">
          {[
            {
              num: "①",
              title: "『プロが最初に決めている資産配分の考え方』ブック",
              desc: "資産形成の考え方をまとめた全21ページPDFを無料公開。",
            },
            {
              num: "②",
              title: "元大手信託銀行員への無料相談（1回）",
              desc: "投資・資産形成・相続・不動産等の疑問を直接プロに相談できます。",
            },
            {
              num: "③",
              title: "LINE登録者限定の相場情報・マーケットコメント",
              desc: "一般公開しないディープな相場情報をお届けします。",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="brand-panel-dark flex items-start gap-3 sm:gap-4 p-4 sm:p-5"
            >
              <span
                className="font-bold text-sm flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-sky-400/10 border border-sky-300/[0.15] text-gold"
              >
                {item.num}
              </span>
              <div className="min-w-0">
                <p className="text-white font-bold text-sm leading-relaxed mb-1">{item.title}</p>
                <p className="text-white/75 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <a
          href="https://lin.ee/FmH7NXr"
          className="btn-line inline-flex items-center justify-center gap-3 w-full sm:w-auto max-w-full text-base sm:text-lg px-6 sm:px-8 py-4 rounded-xl"
        >
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" />
          </svg>
          今すぐBull友になる
        </a>

        <p className="text-white/60 text-xs mt-4">LINE追加のみ・完全無料</p>
      </div>
    </section>
  );
}
