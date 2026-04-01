export default function LineCtaBanner() {
  return (
    <section className="bg-gold py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
          Bull友になる（LINE登録）
        </h2>
        <p className="text-navy/80 mb-2">セミナー情報を受け取る</p>
        <p className="text-navy/80 mb-8">無料相談もLINEから</p>
        <a
          href="https://lin.ee/FmH7NXr"
          className="btn-line inline-flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-xl shadow-lg"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z"/>
          </svg>
          LINEで無料相談する
        </a>

      </div>
    </section>
  );
}
