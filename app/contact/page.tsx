"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineCtaBanner from "@/components/LineCtaBanner";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@adfin.jp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "（未記入）",
          category: formData.category || "（未選択）",
          message: formData.message,
          _subject: `【Bulltalkお問い合わせ】${formData.name}様より`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", category: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              コンサルティング・研修・セミナーのご依頼やご質問など、<br className="hidden md:inline" />
              お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-offwhite py-16 px-4">
          <div className="max-w-2xl mx-auto">

            {/* 成功メッセージ */}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-8">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-xl font-bold text-green-800 mb-2">
                  お問い合わせを受け付けました
                </h2>
                <p className="text-green-700 text-sm leading-relaxed">
                  ご連絡ありがとうございます。<br />
                  内容を確認のうえ、2営業日以内にご返信いたします。
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 btn-primary text-sm"
                >
                  新しいお問い合わせをする
                </button>
              </div>
            )}

            {/* フォーム */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 md:p-10">
                <div className="space-y-6">

                  {/* お名前 */}
                  <div>
                    <label htmlFor="name" className="block text-navy font-bold text-sm mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="例：谷本 光章"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label htmlFor="email" className="block text-navy font-bold text-sm mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="例：info@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>

                  {/* 会社名・団体名 */}
                  <div>
                    <label htmlFor="company" className="block text-navy font-bold text-sm mb-2">
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="例：株式会社〇〇"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>

                  {/* お問い合わせ種別 */}
                  <div>
                    <label htmlFor="category" className="block text-navy font-bold text-sm mb-2">
                      お問い合わせ種別
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">選択してください</option>
                      <option value="研修・セミナー依頼">研修・セミナー依頼</option>
                      <option value="コンサルティング依頼">コンサルティング依頼</option>
                      <option value="FP相談">FP相談</option>
                      <option value="講演依頼">講演依頼</option>
                      <option value="取材・メディア">取材・メディア</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label htmlFor="message" className="block text-navy font-bold text-sm mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="ご依頼やご質問の内容をご記入ください"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-vertical"
                    />
                  </div>

                  {/* エラーメッセージ */}
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                      <p className="text-red-700 text-sm">
                        送信に失敗しました。お手数ですが、もう一度お試しいただくか、<br />
                        直接 <a href="mailto:info@adfin.jp" className="underline font-bold">info@adfin.jp</a> までご連絡ください。
                      </p>
                    </div>
                  )}

                  {/* 送信ボタン */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                      status === "submitting"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-navy text-white hover:bg-[#2a4470] hover:shadow-lg active:scale-[0.98]"
                    }`}
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        送信中...
                      </span>
                    ) : (
                      "送信する"
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* 補足情報 */}
            <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h3 className="font-bold text-navy text-base mb-4">📌 お問い合わせについて</h3>
              <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-gold font-bold shrink-0">●</span>
                  <span>通常2営業日以内にご返信いたします。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold shrink-0">●</span>
                  <span>研修・セミナーの内容やご予算は、ご要望に応じて柔軟にカスタマイズ可能です。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold shrink-0">●</span>
                  <span>
                    お急ぎの場合は{" "}
                    <a href="https://lin.ee/FmH7NXr" className="text-green-600 font-bold hover:underline">
                      LINE
                    </a>{" "}
                    からもお気軽にご連絡ください。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold shrink-0">●</span>
                  <span>
                    メールでの直接のご連絡：
                    <a href="mailto:info@adfin.jp" className="text-navy font-bold hover:underline ml-1">
                      info@adfin.jp
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <LineCtaBanner />
      </main>
      <Footer />
    </>
  );
}
