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
                { href: "/bulltalk", label: "Bulltalkとは" },
                { href: "/column", label: "コラム" },
                { href: "/about", label: "経歴" },
                { href: "/line", label: "無料相談" },
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
            <p className="text-white/60 text-xs leading-relaxed space-y-1">
              本サイトに掲載する情報は、投資助言・法律・税務・不動産に関する専門的アドバイスを提供するものではありません。投資・資産運用・相続・不動産に関するご判断は、必ずご自身の責任において行ってください。掲載情報の正確性には万全を期しておりますが、その内容の正確性・完全性を保証するものではありません。過去の実績・分析・事例は将来の成果を保証するものではありません。レバレッジ型投資信託等はリスクが高く、元本を大幅に下回る損失が生じる可能性があります。相続・不動産・税務に関する内容は法令改正等により変更となる場合があります。最新情報は各専門機関にご確認ください。
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
