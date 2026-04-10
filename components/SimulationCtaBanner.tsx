import Link from "next/link";

export default function SimulationCtaBanner() {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #0f2540 0%, #0e4a5a 60%, #0a6a72 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* アイコン */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl"
          style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)" }}
        >
          📊
        </div>

        {/* ラベル */}
        <p className="text-xs font-bold uppercase tracking-widest mb-3"
           style={{ color: "rgba(255,255,255,0.55)" }}>
          FREE SIMULATION
        </p>

        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
          <span className="md:hidden">あなたに最適な<br />資産形成方法がわかる！</span>
          <span className="hidden md:inline">あなたに最適な資産形成方法がわかる！</span>
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-8"
           style={{ color: "rgba(255,255,255,0.7)" }}>
          <span className="md:hidden">積立シミュレーションから、NISA・iDeCoの優先順位まで。<br />あなたの資産形成に必要な情報が<br />すべてわかります。</span>
          <span className="hidden md:inline">積立シミュレーションから、NISA・iDeCoの優先順位まで。<br />あなたの資産形成に必要な情報がすべてわかります。</span>
        </p>


        {/* バッジ */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {["✓ 完全無料", "✓ 登録不要", "✓ 1分で完了"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-bold rounded-full px-4 py-1.5"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTAボタン */}
        <Link
          href="/simulation"
          className="inline-flex items-center justify-center gap-2 font-bold text-base px-10 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #e5c76b 100%)",
            color: "#0f2540",
          }}
        >
          <span>📊</span>
          シミュレーションを実施する
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
