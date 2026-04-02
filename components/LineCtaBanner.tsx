export default function LineCtaBanner() {
  return (
    <section className="bg-gold py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-navy/60 text-xs font-bold uppercase tracking-widest mb-4">
          🔥 BULL友 MEMBERS ONLY
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
          完全無料でBull友会員になる
        </h2>
        <p className="text-navy/70 text-sm mb-8">
          LINEを友だち追加するだけ。1分で完了します。
        </p>

        {/* メリット3点 */}
        <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
          {[
            { num: "①", text: "毎日の「買い・売り」判断をLINEで受け取れる" },
            { num: "②", text: "LINE登録者限定の相場情報・マーケットコメント" },
            { num: "③", text: "元大手信託銀行員へのLINE無料相談（1回）" },
          ].map((item) => (
            <li key={item.num} className="flex items-start gap-3">
              <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-navy text-gold font-bold text-xs">
                {item.num}
              </span>
              <span className="text-navy/90 text-sm font-medium leading-snug pt-0.5">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="https://lin.ee/FmH7NXr"
          className="btn-line inline-flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-xl shadow-lg"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
          </svg>
          LINE追加で無料でBull友会員になる
        </a>

        <p className="text-navy/40 text-xs mt-4">※ 完全無料・投資情報のみ配信・退会はいつでも可能</p>
      </div>
    </section>
  );
}
