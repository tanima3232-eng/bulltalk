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
          <span className="md:hidden">あなたに最適な資産形成方法<br />がわかる！</span>
          <span className="hidden md:inline">あなたに最適な資産形成方法がわかる！</span>
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-8"
           style={{ color: "rgba(255,255,255,0.7)" }}>
          <span className="md:hidden">目標金額・期間・積立額を入力するだけ。<br />元大手信託銀行員が設計した無料シミュレーションを<br />お試しください。</span>
          <span className="hidden md:inline">目標金額・期間・積立額を入力するだけ。<br />元大手信託銀行員が設計した無料シミュレーションをお試しください。</span>
        </p>



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

        <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>
          無料・30秒で完了
        </p>
      </div>
    </section>
  );
}
