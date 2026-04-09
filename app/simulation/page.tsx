"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// ===== 複利計算 =====
function calcFV(monthlyMan: number, years: number, rate: number): number {
  const m = monthlyMan * 10000;
  if (rate === 0) return m * 12 * years;
  const r = rate / 100 / 12;
  const n = years * 12;
  return m * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}
function fmtMan(man: number): string {
  if (man >= 10000) return (man / 10000).toFixed(1) + "億円";
  if (man >= 1000) return Math.round(man / 10) * 10 + "万円";
  return Math.round(man) + "万円";
}
function pctStr(base: number, val: number): string {
  if (base === 0) return "—";
  return "+" + Math.round((val - base) / base * 100) + "%";
}

const S: Record<string, React.CSSProperties> = {
  card: { background: "#fff", borderRadius: "16px", padding: "24px 20px", margin: "16px 14px", boxShadow: "0 2px 12px rgba(26,46,74,0.08)" },
  label: { fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "2px", marginBottom: "6px" } as React.CSSProperties,
  h2: { fontSize: "16px", fontWeight: 700, marginBottom: "18px" } as React.CSSProperties,
  sliderRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" },
  sliderName: { fontSize: "14px", fontWeight: 600 } as React.CSSProperties,
  sliderVal: { fontSize: "18px", fontWeight: 800, color: "#C9A84C" } as React.CSSProperties,
  range: { width: "100%", height: "6px", appearance: "none" as const, background: "#E8EEF4", borderRadius: "3px", outline: "none", cursor: "pointer", accentColor: "#C9A84C" },
  navBtns: { display: "flex", gap: "10px", marginTop: "8px" },
  btnPrev: { flex: 1, padding: "13px", borderRadius: "10px", border: "1.5px solid #E8EEF4", background: "#fff", color: "#6B7280", fontSize: "14px", fontWeight: 700, cursor: "pointer" } as React.CSSProperties,
  btnNext: { flex: 2, padding: "13px", borderRadius: "10px", border: "none", background: "#C9A84C", color: "#1A2E4A", fontSize: "14px", fontWeight: 700, cursor: "pointer" } as React.CSSProperties,
  formLabel: { fontSize: "13px", fontWeight: 600, color: "#1A2E4A", marginBottom: "8px", display: "block" } as React.CSSProperties,
  input: { width: "90px", border: "1.5px solid #E8EEF4", borderRadius: "8px", padding: "11px 14px", fontSize: "14px", color: "#1A2E4A", outline: "none" } as React.CSSProperties,
};

const assets = [
  { rate: 1.4, name: "🇯🇵 日本国債", rateLabel: "利回り 約1.4%", note: "長期予測（JPモルガンAM）" },
  { rate: 4,   name: "🏢 J-REIT",   rateLabel: "利回り 約4%",   note: "分配金利回り実績（2024年末）" },
  { rate: 7.1, name: "🇯🇵 日本株",  rateLabel: "期待リターン 約7.1%", note: "長期予測（JPモルガンAM）" },
  { rate: 5.1, name: "🌍 先進国株", rateLabel: "期待リターン 約5.1%", note: "長期予測（JPモルガンAM）" },
  { rate: 5.2, name: "🌐 世界株式", rateLabel: "期待リターン 約5.2%", note: "長期予測（JPモルガンAM）" },
  { rate: 30,  name: "₿ ビットコイン", rateLabel: "過去平均 約30%〜", note: "高リスク・変動大（分散で一部検討）" },
];

function getAdvice(rate: number): string {
  if (rate === 0) return "📌 まず想定リターン3%の運用を目指しましょう。積立NISAの一般的な参考リターンは3〜5%。まずは無料で口座開設から始めましょう。";
  if (rate <= 2) return "📌 安全性重視の運用水準です。日本国債や定期預金に近い水準。老後資金の一部として安定的に積み立てるならiDeCoも検討してみましょう。";
  if (rate <= 4) return "📌 NISAで非課税運用がおすすめです。NISAを使えば、運用益が全額非課税になります。口座開設は無料・最短即日。";
  if (rate <= 6) return "📌 NISAとiDeCoの併用で節税効果を最大化。iDeCoは掛金が所得控除になるため、さらにお得に老後資金を積立できます。";
  if (rate <= 15) return "📌 積極運用の水準です。リスク管理も大切に。分散投資でリスクを低減しながら運用することが一般的です。";
  return "📌 ビットコインは超高リスク・超高リターンの資産です。資産全体の5〜10%以内での分散投資が一般的とされています。";
}

interface Checks { nisa:boolean; dc:boolean; matching:boolean; ideco:boolean; kabu:boolean; hoken:boolean; loan3:boolean; alt:boolean; }

function buildPriorities(checks: Checks, housing: string, insVal: number) {
  const cards: { num:string; highlight:boolean; title:string; desc:string; note?:string; cta?:string; style:"gold"|"navy"|"green"|"outline"; href?:string; }[] = [];
  let idx = 1;
  const n = (i: number) => ["優先①","優先②","優先③","優先④","優先⑤"][i-1]||"優先";
  if (!checks.nisa) cards.push({ num:n(idx++), highlight:true, title:"NISA口座を開設しましょう", desc:"運用益が全額非課税になります。まず取り組むべき制度として一般的に広く知られています。", cta:"NISA口座を開設する（無料）", style:"gold", href:"/accounts/stock" });
  if (checks.dc && !checks.matching) cards.push({ num:n(idx++), highlight:false, title:"企業型DCのマッチング拠出を確認しましょう", desc:"2026年4月より上限が撤廃され、拠出限度額内で自由に上乗せ可能になりました。", note:"※2026年12月以降は上限が月6.2万円に拡大予定", style:"green" });
  if (checks.kabu) cards.push({ num:n(idx++), highlight:false, title:"持株会の奨励金を最大活用しましょう", desc:"持株会の奨励金は、使えるなら最大限活用したい制度です。まずは奨励金が出る上限の掛金額を確認し、無理のない範囲で活用するのがお勧めです。一方で、自社株に偏りすぎるとリスクも高まるため、その点は注意しましょう。", style:"green" });
  if (checks.nisa && !checks.ideco && !checks.dc) cards.push({ num:n(idx++), highlight:false, title:"iDeCoで節税しながら老後資金を積み立てましょう", desc:"掛金が全額所得控除になるため、節税しながら老後資金を積み立てられます。", cta:"iDeCoで将来に備える", style:"navy", href:"/accounts/ideco" });
  if (checks.hoken && housing==="持ち家（ローンあり）" && checks.loan3) cards.push({ num:"確認事項", highlight:false, title:"生命保険料、払いすぎている可能性があります。", desc:"住宅ローンで3大疾病特約付き団信に加入している場合、保障が重複しているケースが多いです。", note:"※ご自身の保険内容を確認した上で専門家にご相談ください。", style:"green" });
  if (checks.hoken && insVal > 0) cards.push({ num:"確認事項", highlight:false, title:"変額保険・積立保険の見直しを検討しましょう。", desc:"資産形成が目的なら、変額保険よりNISAなどの制度を優先して考える方が一般的です。保障が必要なら、まずは必要な保障額を確認し、保険は保険、運用は運用で分ける方がコストを抑えやすくなります。", style:"green" });
  if (checks.alt) cards.push({ num:"次のステップ", highlight:false, title:"オルタナティブ投資に関心がある場合は、投資対象を理解することで、より自分に合った選択がしやすくなります。", desc:"不動産やインフラ、暗号資産などは、株式や債券とは異なる特徴があるため、分散投資を考える際の選択肢の一つになります。", cta:"オルタナティブ投資を学ぶ", style:"outline", href:"/alternative" });
  else if (checks.nisa && (checks.ideco || checks.matching)) cards.push({ num:"次のステップ", highlight:false, title:"オルタナティブ投資で資産分散を検討しましょう", desc:"株・債券以外への分散として、不動産やインフラ、暗号資産などへの少額投資も選択肢の一つです。", cta:"オルタナティブ投資について詳しく知る", style:"outline", href:"/alternative" });
  if (cards.length === 0) cards.push({ num:"", highlight:false, title:"現状の資産形成は順調です", desc:"NISA・iDeCo・DC等をバランスよく活用されています。次のステップとして相続対策や不動産投資についてもご相談ください。", cta:"コラムを読む", style:"navy", href:"/column" });
  return cards;
}

function RadioGroup({ label, options, value, onChange }: { label:string; options:string[]; value:string; onChange:(v:string)=>void; }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={S.formLabel}>{label}</label>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
        {options.map(v => (
          <button key={v} onClick={()=>onChange(v)} style={{ border: value===v?"1.5px solid #C9A84C":"1.5px solid #E8EEF4", borderRadius:"8px", padding:"8px 12px", fontSize:"13px", cursor:"pointer", background:value===v?"#FDF8EE":"#fff", color:"#1A2E4A", fontWeight:value===v?700:500, transition:"all 0.15s" }}>{v}</button>
        ))}
      </div>
    </div>
  );
}

function NumberInput({ label, value, onChange, placeholder }: { label:string; value:string; onChange:(v:string)=>void; placeholder:string; }) {
  return (
    <div style={{ marginBottom:"18px" }}>
      <label style={S.formLabel}>{label}</label>
      <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
        <input type="number" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} min={0} style={S.input} />
        <span style={{ fontSize:"13px", color:"#6B7280" }}>万円</span>
      </div>
    </div>
  );
}

export default function SimulationPage() {
  // Savings sim
  const [monthly, setMonthly] = useState(2);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(5);
  const [activeAsset, setActiveAsset] = useState<number|null>(null);

  // Detail form
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [age, setAge] = useState("");
  const [spouse, setSpouse] = useState("");
  const [kids, setKids] = useState("");
  const [housing, setHousing] = useState("");
  const [income, setIncome] = useState("");
  const [expB, setExpB] = useState("");
  const [expC, setExpC] = useState("");
  const [expD, setExpD] = useState("");
  const [assetCash, setAssetCash] = useState("");
  const [assetStock, setAssetStock] = useState("");
  const [assetIns, setAssetIns] = useState("");
  const [assetOther, setAssetOther] = useState("");
  const [checks, setChecks] = useState<Checks>({ nisa:false, dc:false, matching:false, ideco:false, kabu:false, hoken:false, loan3:false, alt:false });

  const saveMan = Math.round(monthly * 12 * years);
  const inv3Man = Math.round(calcFV(monthly, years, 3) / 10000);
  const invRMan = Math.round(calcFV(monthly, years, rate) / 10000);
  const maxV = Math.max(saveMan, inv3Man, invRMan, 1);
  const PX = 130;
  const saveH = saveMan / maxV * PX;
  const inv3H = inv3Man / maxV * PX;
  const invRH = invRMan / maxV * PX;

  const A = parseFloat(income)||0, B = parseFloat(expB)||0, C = parseFloat(expC)||0, D = parseFloat(expD)||0;
  const E = B+C+D, G = Math.round((A-E)*10)/10;
  const cash=parseFloat(assetCash)||0, stock=parseFloat(assetStock)||0, ins=parseFloat(assetIns)||0, oth=parseFloat(assetOther)||0;
  const totalA = cash+stock+ins+oth||1;

  const ctaStyle = (s: string, href: string) => {
    const bgMap: Record<string,string> = { gold:"#C9A84C", navy:"#1A2E4A", green:"#06C755", outline:"#1A2E4A" };
    const clrMap: Record<string,string> = { gold:"#1A2E4A", navy:"#fff", green:"#fff", outline:"#fff" };
    const bg = bgMap[s]||"#1A2E4A", color = clrMap[s]||"#fff";
    const inner = <span>{href==="line"?"LINEで詳しく相談する":""}</span>;
    if (href === "line") return <a href="https://lin.ee/FmH7NXr" target="_blank" rel="noopener noreferrer" style={{ display:"block", marginTop:"12px", padding:"11px", borderRadius:"8px", fontSize:"13px", fontWeight:700, textAlign:"center", background:bg, color, textDecoration:"none" }}>{inner}</a>;
    return null;
  };
  void ctaStyle;

  const StepDot = ({ s }: { s: number }) => (
    <div style={{ width:"28px", height:"28px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:700, background:step>s?"#1A2E4A":step===s?"#C9A84C":"#E8EEF4", color:step>s?"#fff":step===s?"#1A2E4A":"#9CA3AF", flexShrink:0, transition:"all 0.3s" }}>
      {step > s ? "✓" : s}
    </div>
  );

  return (
    <>
      <Header />
      <main style={{ background:"#F4F4F2", minHeight:"100vh" }}>

        {/* Hero */}
        <section style={{ background:"#1A2E4A", color:"#F4F4F2", textAlign:"center", padding:"48px 24px 40px" }}>
          <p style={{ color:"#C9A84C", fontSize:"12px", letterSpacing:"2px", marginBottom:"10px" }}>FREE SIMULATOR</p>
          <h1 style={{ fontSize:"clamp(1.4rem,5vw,1.8rem)", fontWeight:800, lineHeight:1.4, marginBottom:"12px" }}>毎月いくら積み立てると<br />将来どうなる？</h1>
          <p style={{ fontSize:"13px", opacity:0.8, lineHeight:1.7 }}>積立額、積立期間、想定リターンを選ぶだけ。<br />あなたの将来の資産設計イメージがわかります。</p>
        </section>


        <div style={{ maxWidth:"640px", margin:"0 auto" }}>

          {/* Input Card */}
          <div style={S.card}>
            <p style={S.label}>STEP 1</p>
            <h2 style={S.h2}>積立条件を入力してください</h2>
            {[
              { label:"💰 毎月の積立額", val:monthly, unit:"万円", min:0.5, max:30, step:0.5, set:(v:number)=>setMonthly(v) },
              { label:"📅 積立期間", val:years, unit:"年", min:5, max:40, step:5, set:(v:number)=>setYears(v) },
            ].map(sl => (
              <div key={sl.label} style={{ marginBottom:"22px" }}>
                <div style={S.sliderRow}><span style={S.sliderName}>{sl.label}</span><span style={S.sliderVal}>{sl.val}{sl.unit}</span></div>
                <input type="range" min={sl.min} max={sl.max} step={sl.step} value={sl.val} onChange={e=>sl.set(parseFloat(e.target.value))} style={S.range} />
              </div>
            ))}
            <div>
              <p style={{ fontSize:"12px", fontWeight:700, color:"#6B7280", marginBottom:"6px" }}>📊 資産クラス別の参考リターンから選ぶ（任意）</p>
              <p style={{ fontSize:"10px", color:"#9CA3AF", marginBottom:"10px", lineHeight:1.5 }}>※過去実績・長期予測の参考値です。将来の運用成果を保証するものではありません。<br />出典：JPモルガンAM 長期資本市場予測2025年版・各種公開データ</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
                {assets.map((a,i) => (
                  <button key={i} onClick={()=>{ setRate(a.rate); setActiveAsset(i); }} style={{ border:activeAsset===i?"1.5px solid #C9A84C":"1.5px solid #E8EEF4", borderRadius:"10px", padding:"10px 8px", background:activeAsset===i?"#FDF8EE":"#fff", cursor:"pointer", textAlign:"left", transition:"all 0.15s" }}>
                    <div style={{ fontSize:"12px", fontWeight:700, color:"#1A2E4A", marginBottom:"2px" }}>{a.name}</div>
                    <div style={{ fontSize:"13px", fontWeight:800, color:"#C9A84C" }}>{a.rateLabel}</div>
                    <div style={{ fontSize:"9px", color:"#9CA3AF", marginTop:"2px", lineHeight:1.4 }}>{a.note}</div>
                  </button>
                ))}
              </div>
            </div>
            <div style={{ marginTop:"18px" }}>
              <div style={S.sliderRow}><span style={S.sliderName}>📈 想定リターン（手動調整も可）</span><span style={S.sliderVal}>{rate}%</span></div>
              <input type="range" min={0} max={30} step={0.5} value={rate} onChange={e=>{ setRate(parseFloat(e.target.value)); setActiveAsset(null); }} style={S.range} />
            </div>
          </div>

          {/* Result Card */}
          <div style={S.card}>
            <p style={S.label}>RESULT</p>
            <h2 style={S.h2}>将来の資産シミュレーション</h2>
            <div style={{ background:"#F4F4F2", borderRadius:"12px", padding:"18px 14px", marginBottom:"18px" }}>
              <p style={{ fontSize:"12px", color:"#6B7280", marginBottom:"14px" }}>元本 vs 運用後の試算額</p>
              <div style={{ display:"flex", alignItems:"flex-end", gap:"10px", height:"160px" }}>
                {[
                  { h:saveH, bg:"#B0BEC5", pct:"基準（0%）", pctColor:"#9CA3AF", amt:fmtMan(saveMan), lbl:"貯金のみ" },
                  { h:inv3H, bg:"#1A2E4A", pct:pctStr(saveMan,inv3Man), pctColor:"#1A7A4A", amt:fmtMan(inv3Man), lbl:"3%（長期積立の一例）" },
                  { h:invRH, bg:"#C9A84C", pct:pctStr(saveMan,invRMan), pctColor:"#1A7A4A", amt:fmtMan(invRMan), lbl:`想定${rate}%` },
                ].map((b,i) => (
                  <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:"4px", height:"100%", justifyContent:"flex-end" }}>
                    <p style={{ fontSize:"11px", fontWeight:800, color:b.pctColor, textAlign:"center" }}>{b.pct}</p>
                    <p style={{ fontSize:"11px", fontWeight:700, color:"#1A2E4A", textAlign:"center" }}>{b.amt}</p>
                    <div style={{ width:"100%", borderRadius:"6px 6px 0 0", background:b.bg, height:`${b.h}px`, minHeight:"4px", transition:"height 0.45s" }} />
                    <p style={{ fontSize:"9px", color:"#6B7280", textAlign:"center", whiteSpace:"nowrap" }}>{b.lbl}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:"#1A2E4A", borderRadius:"12px", padding:"18px", color:"#F4F4F2", marginBottom:"16px" }}>
              <p style={{ fontSize:"11px", color:"#C9A84C", marginBottom:"4px" }}>リターン3%運用で貯金より…</p>
              <p style={{ fontSize:"26px", fontWeight:800, color:"#C9A84C" }}>+{fmtMan(inv3Man-saveMan)}</p>
              <p style={{ fontSize:"11px", color:"rgba(244,244,242,0.55)", marginTop:"4px" }}>（月2万円 × 30年・想定リターン3%の場合）</p>
              <p style={{ fontSize:"11px", color:"rgba(244,244,242,0.7)", marginTop:"8px", lineHeight:1.6, borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:"8px" }}>NISAを使えば、運用益が全額非課税になります。</p>
            </div>
            <div style={{ background:"#fff", borderLeft:"4px solid #C9A84C", borderRadius:"0 8px 8px 0", padding:"12px 14px", fontSize:"13px", lineHeight:1.7 }}>{getAdvice(rate)}</div>
          </div>

          {/* CTA Buttons */}
          <div style={{ padding:"0 14px 8px" }}>
            {[
              { href:"/accounts/stock", label:"NISA口座を開設する（無料）", bg:"#C9A84C", color:"#1A2E4A" },
              { href:"/accounts/ideco", label:"iDeCoで将来に備える", bg:"#1A2E4A", color:"#F4F4F2" },
              { href:"/alternative", label:"オルタナティブ投資に興味がある", bg:"#5B7FA6", color:"#fff" },
            ].map(b => <Link key={b.href} href={b.href} style={{ display:"block", width:"100%", padding:"15px", borderRadius:"12px", fontSize:"14px", fontWeight:700, textAlign:"center", background:b.bg, color:b.color, marginBottom:"10px", textDecoration:"none" }}>{b.label}</Link>)}
            <a href="https://lin.ee/FmH7NXr" target="_blank" rel="noopener noreferrer" style={{ display:"block", width:"100%", padding:"15px", borderRadius:"12px", fontSize:"14px", fontWeight:700, textAlign:"center", background:"#06C755", color:"#fff", textDecoration:"none" }}>まずはLINEで無料相談する</a>
          </div>

          {/* Detail Section Header */}
          {/* 下向き矢印アニメーション */}
          <div style={{ textAlign:"center", padding:"20px 0 4px", background:"#F4F4F2" }}>
            <style>{`
              @keyframes bounceDown {
                0%, 100% { transform: translateY(0); opacity: 0.5; }
                50% { transform: translateY(6px); opacity: 1; }
              }
              .bounce-arrow { animation: bounceDown 1.4s ease-in-out infinite; }
            `}</style>
            <div className="bounce-arrow" style={{ display:"inline-block" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <p style={{ fontSize:"11px", color:"#1A2E4A", fontWeight:700, marginTop:"4px" }}>さらに詳しく診断できます</p>
          </div>

          <div style={{
            background: "linear-gradient(135deg,#0d1b2e 0%,#1A2E4A 60%,#0d1b2e 100%)",
            color: "#F4F4F2",
            textAlign: "center",
            padding: "36px 24px 32px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* 背景の光彩 */}
            <div style={{
              position:"absolute", top:"-60px", left:"50%", transform:"translateX(-50%)",
              width:"340px", height:"200px",
              background:"radial-gradient(ellipse,rgba(201,168,76,0.18) 0%,transparent 70%)",
              pointerEvents:"none",
            }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <p style={{ color:"#C9A84C", fontSize:"10px", letterSpacing:"3px", fontWeight:700, marginBottom:"12px" }}>DETAIL SIMULATION</p>

              {/* ソーシャルプルーフバッジ */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"6px",
                background:"rgba(201,168,76,0.12)", border:"1px solid rgba(201,168,76,0.35)",
                borderRadius:"20px", padding:"5px 14px", marginBottom:"16px",
              }}>
                <span style={{ fontSize:"13px" }}>✅</span>
                <span style={{ fontSize:"11px", color:"#C9A84C", fontWeight:700 }}>あなたの優先順位が具体的にわかります</span>
              </div>

              <h2 style={{ fontSize:"22px", fontWeight:800, lineHeight:1.4, marginBottom:"12px" }}>
                家計・資産の状況を入力して<br />
                <span style={{ color:"#C9A84C" }}>最適なアクションを確認する</span>
              </h2>
              <p style={{ fontSize:"12px", color:"rgba(244,244,242,0.65)", lineHeight:1.8, marginBottom:"18px" }}>
                NISA・iDeCo・保険・持株会など<br />
                あなたの状況に合った優先順位をAIが診断します。
              </p>

              {/* ベネフィット一覧 */}
              <div style={{ display:"inline-flex", flexDirection:"column", gap:"6px", textAlign:"left", marginBottom:"4px" }}>
                {[
                  "所要時間：約2〜3分",
                  "無料・登録不要",
                  "入力内容は外部に送信されません",
                ].map((txt, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"12px", color:"rgba(244,244,242,0.75)" }}>
                    <span style={{ color:"#C9A84C", fontWeight:700, flexShrink:0 }}>✓</span>
                    {txt}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step Progress */}
          {!showResult && (
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"4px", padding:"16px 14px 0" }}>
              {[1,2,3,4].map(s => (
                <>{/* eslint-disable-next-line react/jsx-key */}
                  <StepDot key={s} s={s} />
                  {s < 4 && <div key={`l${s}`} style={{ flex:1, height:"2px", maxWidth:"32px", background:step>s?"#1A2E4A":"#E8EEF4" }} />}
                </>
              ))}
            </div>
          )}

          {/* STEP 1 */}
          {!showResult && step === 1 && (
            <div style={S.card}>
              <p style={S.label}>STEP 1 / 4</p>
              <h2 style={S.h2}>家族構成を教えてください</h2>
              <RadioGroup label="年齢" options={["20代","30代","40代","50代","60代以上"]} value={age} onChange={setAge} />
              <RadioGroup label="配偶者" options={["あり","なし"]} value={spouse} onChange={setSpouse} />
              <RadioGroup label="扶養している子ども" options={["なし","1人","2人","3人以上"]} value={kids} onChange={setKids} />
              <RadioGroup label="住まい" options={["持ち家（ローンあり）","持ち家（完済）","賃貸"]} value={housing} onChange={setHousing} />
              <div style={S.navBtns}><button onClick={()=>setStep(2)} style={S.btnNext}>次へ →</button></div>
            </div>
          )}

          {/* STEP 2 */}
          {!showResult && step === 2 && (
            <div style={S.card}>
              <p style={S.label}>STEP 2 / 4</p>
              <h2 style={S.h2}>毎月のお金の流れを入力してください</h2>
              <p style={{ fontSize:"11px", color:"#9CA3AF", marginBottom:"18px" }}>※おおよその金額で構いません</p>
              <NumberInput label="A. 毎月の収入（手取り）" value={income} onChange={setIncome} placeholder="30" />
              <NumberInput label="B. 必要支出（食費・住宅費・光熱費など）" value={expB} onChange={setExpB} placeholder="15" />
              <NumberInput label="C. 楽しむ支出（娯楽・外食など）" value={expC} onChange={setExpC} placeholder="3" />
              <NumberInput label="D. 将来への支出（積立・保険料・持株会など）" value={expD} onChange={setExpD} placeholder="2" />
              <div style={S.navBtns}>
                <button onClick={()=>setStep(1)} style={S.btnPrev}>← 戻る</button>
                <button onClick={()=>setStep(3)} style={S.btnNext}>次へ →</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {!showResult && step === 3 && (
            <div style={S.card}>
              <p style={S.label}>STEP 3 / 4</p>
              <h2 style={S.h2}>現在の貯金・資産状況を教えてください</h2>
              <p style={{ fontSize:"11px", color:"#9CA3AF", marginBottom:"18px" }}>※おおよその合計金額で構いません</p>
              <NumberInput label="預貯金（普通・定期預金）" value={assetCash} onChange={setAssetCash} placeholder="200" />
              <NumberInput label="投資信託・株式" value={assetStock} onChange={setAssetStock} placeholder="0" />
              <NumberInput label="保険（解約返戻金など現在の資産価値）" value={assetIns} onChange={setAssetIns} placeholder="0" />
              <NumberInput label="不動産・その他" value={assetOther} onChange={setAssetOther} placeholder="0" />
              <div style={S.navBtns}>
                <button onClick={()=>setStep(2)} style={S.btnPrev}>← 戻る</button>
                <button onClick={()=>setStep(4)} style={S.btnNext}>次へ →</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {!showResult && step === 4 && (
            <div style={S.card}>
              <p style={S.label}>STEP 4 / 4</p>
              <h2 style={S.h2}>現在の状況を教えてください</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {([
                  { key:"nisa", label:"NISA口座を持っている" },
                  { key:"dc", label:"企業型DC（確定拠出年金）がある" },
                  { key:"matching", label:"企業型DCのマッチング拠出を活用している" },
                  { key:"ideco", label:"iDeCoに加入している" },
                  { key:"kabu", label:"持株会に加入している", sub:"奨励金の有無も後で確認しましょう" },
                  { key:"hoken", label:"生命保険に加入している", sub:"変額保険・積立保険を含む" },
                  { key:"loan3", label:"住宅ローンに3大疾病特約をつけている", sub:"団信の特約内容を確認しましょう" },
                  { key:"alt", label:"オルタナティブ投資に興味がある", sub:"不動産デジタル証券・暗号資産など" },
                ] as {key:keyof Checks; label:string; sub?:string}[]).map(({ key, label, sub }) => {
                  const checked = checks[key];
                  return (
                    <div key={key} onClick={()=>setChecks(p=>({...p,[key]:!p[key]}))} style={{ display:"flex", alignItems:"flex-start", gap:"10px", padding:"12px 14px", border:checked?"1.5px solid #C9A84C":"1.5px solid #E8EEF4", borderRadius:"10px", cursor:"pointer", background:checked?"#FDF8EE":"#fff", transition:"all 0.15s" }}>
                      <div style={{ width:"20px", height:"20px", borderRadius:"4px", flexShrink:0, marginTop:"1px", display:"flex", alignItems:"center", justifyContent:"center", border:checked?"2px solid #C9A84C":"2px solid #E8EEF4", background:checked?"#C9A84C":"transparent", color:"#fff", fontSize:"12px" }}>{checked?"✓":""}</div>
                      <div><p style={{ fontSize:"13px", fontWeight:500, lineHeight:1.5 }}>{label}</p>{sub&&<p style={{ fontSize:"11px", color:"#9CA3AF", marginTop:"2px" }}>{sub}</p>}</div>
                    </div>
                  );
                })}
              </div>
              <div style={S.navBtns}>
                <button onClick={()=>setStep(3)} style={S.btnPrev}>← 戻る</button>
                <button onClick={()=>setShowResult(true)} style={S.btnNext}>診断結果を見る</button>
              </div>
            </div>
          )}

          {/* Result */}
          {showResult && (
            <div>
              <div style={{ padding:"24px 14px 8px", textAlign:"center" }}>
                <p style={S.label}>DIAGNOSIS RESULT</p>
                <p style={{ fontSize:"18px", fontWeight:800 }}>あなたの診断結果</p>
              </div>

              {/* CF */}
              <div style={S.card}>
                <p style={S.label}>キャッシュフロー診断</p>
                <h2 style={S.h2}>毎月のお金の流れ</h2>
                <div style={{ background:"#F4F4F2", borderRadius:"12px", padding:"16px" }}>
                  {[["A. 収入",A+"万円"],["B. 必要支出",B+"万円"],["C. 楽しむ支出",C+"万円"],["D. 将来への支出",D+"万円"],["支出合計（E=B+C+D）",E+"万円"]].map(([l,v])=>(
                    <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", borderBottom:"1px solid #E8EEF4", fontSize:"13px" }}>
                      <span style={{ color:"#6B7280" }}>{l}</span><span style={{ fontWeight:600 }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", fontSize:"14px" }}>
                    <span style={{ color:"#6B7280" }}>余剰資金（G=A-E）</span>
                    <span style={{ fontWeight:700, fontSize:"16px", color:G>=0?"#1A7A4A":"#D03030" }}>{G>=0?"+":""}{G}万円</span>
                  </div>
                </div>
              </div>

              {/* Assets */}
              <div style={S.card}>
                <p style={S.label}>貯金の色分け</p>
                <h2 style={S.h2}>資産の内訳</h2>
                <div style={{ background:"#F4F4F2", borderRadius:"12px", padding:"16px" }}>
                  {[["預貯金",cash,"#B0BEC5"],["投資・株",stock,"#1A2E4A"],["保険",ins,"#C9A84C"],["不動産他",oth,"#6B7280"]].map(([l,v,c])=>(
                    <div key={l as string} style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                      <span style={{ fontSize:"12px", color:"#6B7280", width:"64px", flexShrink:0 }}>{l as string}</span>
                      <div style={{ flex:1, height:"10px", background:"#E8EEF4", borderRadius:"5px", overflow:"hidden" }}>
                        <div style={{ height:"100%", borderRadius:"5px", background:c as string, width:`${(v as number)/totalA*100}%`, transition:"width 0.5s" }} />
                      </div>
                      <span style={{ fontSize:"12px", fontWeight:700, width:"56px", textAlign:"right", flexShrink:0 }}>{v as number}万円</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priorities */}
              <div style={S.card}>
                <p style={S.label}>優先順位アドバイス</p>
                <h2 style={S.h2}>今すぐ取り組むべきこと</h2>
                {buildPriorities(checks, housing, ins).map((p,i) => {
                  const bgMap: Record<string,string> = { gold:"#C9A84C", navy:"#1A2E4A", green:"#06C755", outline:"#1A2E4A" };
                  const clrMap: Record<string,string> = { gold:"#1A2E4A", navy:"#fff", green:"#fff", outline:"#fff" };
                  const ctaBg = bgMap[p.style], ctaClr = clrMap[p.style];
                  const isLine = p.href === "line";
                  return (
                    <div key={i} style={{ border:p.highlight?"1.5px solid #C9A84C":"1.5px solid #E8EEF4", borderRadius:"12px", padding:"16px", marginBottom:"10px", background:p.highlight?"#FDF8EE":"#fff" }}>
                      {p.num && <p style={{ fontSize:"10px", fontWeight:700, color:"#C9A84C", marginBottom:"4px" }}>{p.num}</p>}
                      <p style={{ fontSize:"14px", fontWeight:700, marginBottom:"6px", color:"#1A2E4A" }}>{p.title}</p>
                      <p style={{ fontSize:"12px", color:"#6B7280", lineHeight:1.7 }}>{p.desc}</p>
                      {p.note && <p style={{ fontSize:"11px", color:"#9CA3AF", marginTop:"6px", lineHeight:1.6, fontStyle:"italic" }}>{p.note}</p>}
                      {p.cta && (isLine
                        ? <a href="https://lin.ee/FmH7NXr" target="_blank" rel="noopener noreferrer" style={{ display:"block", marginTop:"12px", padding:"11px", borderRadius:"8px", fontSize:"13px", fontWeight:700, textAlign:"center", background:ctaBg, color:ctaClr, textDecoration:"none" }}>{p.cta}</a>
                        : <Link href={p.href!} style={{ display:"block", marginTop:"12px", padding:"11px", borderRadius:"8px", fontSize:"13px", fontWeight:700, textAlign:"center", background:ctaBg, color:ctaClr, textDecoration:"none" }}>{p.cta}</Link>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ padding:"0 14px 16px" }}>
                <a href="https://lin.ee/FmH7NXr" target="_blank" rel="noopener noreferrer" style={{ display:"block", width:"100%", padding:"15px", borderRadius:"12px", fontSize:"14px", fontWeight:700, textAlign:"center", background:"#06C755", color:"#fff", textDecoration:"none" }}>まずはLINEで無料相談する</a>
                <button onClick={()=>{ setShowResult(false); setStep(1); }} style={{ display:"block", margin:"12px auto 0", background:"none", border:"none", fontSize:"13px", color:"#9CA3AF", cursor:"pointer", textDecoration:"underline" }}>← もう一度診断する</button>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div style={{ fontSize:"10px", color:"#9CA3AF", textAlign:"center", padding:"16px 14px 32px", lineHeight:1.7 }}>
            本シミュレーションは概算であり、投資助言を目的とするものではありません。<br />
            掲載している参考リターンは過去実績・長期予測の参考値であり、将来の運用成果を保証するものではありません。<br />
            出典：JPモルガン・アセットマネジメント「長期資本市場予測2025年版」・J-REIT分配金利回り実績等。<br />
            投資は自己責任でお願いします。2026年4月時点の情報に基づきます。
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
