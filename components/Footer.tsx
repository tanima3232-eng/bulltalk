import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold mb-3">
              <span className="text-gold">Bull</span>talk
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              元大手信託銀行員・FP1級・証券アナリスト・宅建士が<br />
              日本の金融・投資情報をわかりやすく発信します。
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-gold font-bold mb-3 text-sm uppercase tracking-wider">Navigation</p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "トップ" },
                { href: "/market", label: "225分析" },
                { href: "/column", label: "コラム" },
                { href: "/about", label: "経歴" },
                { href: "/consult", label: "相談" },
                { href: "/line", label: "LINE" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="text-gold font-bold mb-3 text-sm uppercase tracking-wider">免責事項</p>
            <p className="text-white/60 text-xs leading-relaxed">
              本サイトの情報は投資助言ではありません。投資は自己責任でお願いします。
              掲載情報の正確性には細心の注意を払っていますが、その内容を保証するものではありません。
              過去の実績は将来の成果を保証しません。
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-xs">
            Copyright © {year} Bulltalk All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
