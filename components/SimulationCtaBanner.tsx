import Link from "next/link";

export default function SimulationCtaBanner() {
  return (
    <section className="brand-band py-16 px-4 text-white">
      <div className="max-w-2xl mx-auto text-center">
        {/* アイコン */}
        <div
          className="brand-panel-dark w-16 h-16 flex items-center justify-center mx-auto mb-5 text-3xl"
        >
          📊
        </div>

        {/* ラベル */}
        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
          FREE SIMULATION
        </p>

        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
          <span className="md:hidden">あなたに最適な<br />資産形成方法がわかる！</span>
          <span className="hidden md:inline">あなたに最適な資産形成方法がわかる！</span>
        </h2>
        <p className="text-white/75 text-xs md:text-base leading-relaxed mb-8">
          <span className="md:hidden">積立シミュレーションから、NISA・iDeCoの優先順位まで。<br />あなたの資産形成に必要な情報が<br />すべてわかります。</span>
          <span className="hidden md:inline">積立シミュレーションから、NISA・iDeCoの優先順位まで。<br />あなたの資産形成に必要な情報がすべてわかります。</span>
        </p>


        {/* バッジ */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {["✓ 完全無料", "✓ 登録不要", "✓ 1分で完了"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-bold rounded-full px-3 py-1.5 bg-white/5 text-white/80 border border-white/[0.15] whitespace-nowrap"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTAボタン */}
        <Link
          href="/simulation"
          className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto max-w-full text-sm sm:text-base px-4 sm:px-8 py-4 rounded-xl"
        >
          <span className="shrink-0">📊</span>
          <span className="min-w-0">シミュレーションを実施する</span>
          <span className="shrink-0">→</span>
        </Link>
      </div>
    </section>
  );
}
