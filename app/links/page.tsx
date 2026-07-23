"use client";

import { useState } from "react";

const LINE_URL = "https://lin.ee/FmH7NXr";

/* ================== 属性定義 ================== */
const AGE_OPTIONS = [
  { k: "20s30s", t: "20〜30代" },
  { k: "40s50s", t: "40〜50代" },
  { k: "60plus", t: "60代〜" },
];
const HOUSING_OPTIONS = [
  { k: "owner", t: "持ち家" },
  { k: "renter", t: "賃貸" },
];
const FAMILY_OPTIONS = [
  { k: "single", t: "独身" },
  { k: "couple", t: "夫婦のみ" },
  { k: "kids", t: "子どもあり" },
];

type Attrs = { age: string | null; housing: string | null; family: string | null };
type Question = { q: string; hint: string; type: string };

function buildHokenQuestions(a: Attrs): Omit<Question, "type">[] {
  const isSenior = a.age === "60plus";
  const hasKids = a.family === "kids";
  let q1;
  if (hasKids) {
    q1 = { q: "お子さんの教育資金や、もしもの時の保障額に不安がある", hint: "お子さんが生まれたタイミングで保障額を見直す人は多いです。独身時代のままだと、必要な保障額が足りていないケースもあります。" };
  } else if (isSenior) {
    q1 = { q: "医療・介護保障の内容が、今の年齢に合っているか確認していない", hint: "医療保険は年齢によって必要な保障が変わります。60代以降は入院日数の設定や介護保障の有無がポイントになりやすいです。" };
  } else {
    q1 = { q: "医療保険や就業不能保障が、今のライフスタイルに合っているか気になる", hint: "独身の時に契約した保険は、家族ができたタイミングで見直すのが基本です。" };
  }
  const q2 = { q: "毎月の保険料が家計の負担になっている気がする", hint: "同じ保障内容でも、保険会社や商品によって保険料が大きく変わることがあります。一度は複数社で比較してみる価値があります。" };
  let q3;
  if (isSenior) {
    q3 = { q: "保険の保障期間・払込期間が、今の年齢に合っているか確認していない", hint: "払込期間が長いままだと、リタイア後も保険料の負担が続くことがあります。払込満了の時期は要チェックです。" };
  } else {
    q3 = { q: "保険を見直したのは5年以上前、または一度もない", hint: "保険は「入ったら終わり」ではなく、結婚・出産・転職などの節目で見直すのが基本です。" };
  }
  return [q1, q2, q3];
}

function buildFudousanQuestions(a: Attrs): Omit<Question, "type">[] {
  const isOwner = a.housing === "owner";
  const isSenior = a.age === "60plus";
  let q1, q2;
  if (isOwner) {
    q1 = { q: "自宅の住宅ローンの借り換えや繰上げ返済を検討したことがある", hint: "金利のタイプ(変動・固定)や残りの返済期間によっては、借り換えで総支払額が数十万〜数百万円変わることもあります。" };
    q2 = { q: "自宅の売却や住み替えを考えたことがある", hint: "住み替えでは「売り先行」か「買い先行」かで、必要な資金計画がまったく変わります。" };
  } else {
    q1 = { q: "将来的にマイホーム購入を考えている、または迷っている", hint: "「賃貸か持ち家か」は月々の支払いだけでなく、生涯コストで比較すると答えが変わることが多いテーマです。" };
    q2 = { q: "このまま賃貸を続けるべきか、持ち家にすべきか迷っている", hint: "住宅ローン控除など、購入のタイミングによって有利・不利が変わる制度もあります(制度内容は要確認)。" };
  }
  let q3;
  if (isSenior) {
    q3 = { q: "空き家や使っていない不動産の扱いについて悩んでいる", hint: "空き家を放置すると、固定資産税の負担が増えたり、管理責任を問われることがあります。" };
  } else {
    q3 = { q: "実家や親名義の不動産の将来について、悩んでいる、または話していない", hint: "実家の名義や将来の使い道は、早めに家族で共有しておくと、相続時のトラブルを防ぎやすくなります。" };
  }
  return [q1, q2, q3];
}

function buildSouzokuQuestions(a: Attrs): Omit<Question, "type">[] {
  const isSenior = a.age === "60plus";
  const hasKids = a.family === "kids";
  let q1, q2;
  if (isSenior) {
    q1 = { q: "相続税がどれくらいかかるか、把握していない", hint: "相続税には基礎控除があり、「3,000万円+600万円×法定相続人の数」までは課税されません。まずは概算を知ることが第一歩です。" };
    q2 = { q: "遺言書や生前贈与について、まだ考えたことがない", hint: "生前贈与には年間110万円までの非課税枠があります(制度は変更されることがあるため要確認)。" };
  } else {
    q1 = { q: "将来、親の相続で困らないか漠然とした不安がある", hint: "相続の準備は「亡くなってから」ではなく「元気なうちに話しておく」ことが一番のポイントです。" };
    q2 = { q: "実家や親の資産について、家族と話したことがない", hint: "資産の全体像を家族で共有しておくだけで、いざという時の手続きがスムーズになります。" };
  }
  let q3;
  if (hasKids && !isSenior) {
    q3 = { q: "自分の相続で、将来子どもに迷惑をかけないか気になる", hint: "相続税がかからない家庭でも、遺産の分け方で揉めるケースは意外と多いです。分け方を決めておくことは有効な備えです。" };
  } else {
    q3 = { q: "将来の相続について、家族と具体的に話し合ったことがない", hint: "相続の話し合いは「揉めるから避ける」より「揉めないために早めに話す」方がうまくいきやすいです。" };
  }
  return [q1, q2, q3];
}

function buildQuestions(a: Attrs): Question[] {
  const h = buildHokenQuestions(a).map(x => ({ ...x, type: "hoken" }));
  const f = buildFudousanQuestions(a).map(x => ({ ...x, type: "fudousan" }));
  const s = buildSouzokuQuestions(a).map(x => ({ ...x, type: "souzoku" }));
  return [h[0], f[0], s[0], h[1], f[1], s[1], h[2], f[2], s[2]];
}

const STEPS = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const CHOICES = [{ k: "yes", t: "はい" }, { k: "maybe", t: "どちらでも" }, { k: "no", t: "いいえ" }];

const AGE_LABEL: Record<string, string> = { "20s30s": "20〜30代", "40s50s": "40〜50代", "60plus": "60代〜" };
const HOUSING_LABEL: Record<string, string> = { owner: "持ち家", renter: "賃貸" };
const FAMILY_LABEL: Record<string, string> = { single: "独身", couple: "夫婦のみ", kids: "お子さんあり" };

function attrLabel(a: Attrs) {
  return `${AGE_LABEL[a.age!]}・${HOUSING_LABEL[a.housing!]}・${FAMILY_LABEL[a.family!]}`;
}

type ResultData = {
  tag: string; title: string; lead: string; bullets: string[];
  fig?: { label: string; rows: { k: string; v: string; hl?: boolean }[]; note: string } | null;
};

function hokenResult(a: Attrs): ResultData {
  const isSenior = a.age === "60plus", hasKids = a.family === "kids";
  const bullets: string[] = [];
  if (hasKids) bullets.push("お子さんの教育資金や必要保障額が、今のままで十分か");
  else if (isSenior) bullets.push("医療・介護保障が、今の年齢に合っているか");
  else bullets.push("今のライフスタイルに保障内容が合っているか");
  bullets.push("同じ保障を、もっと抑えた保険料で確保できないか");
  bullets.push("不要な特約が付いたままになっていないか");
  return {
    tag: "保険 見直しタイプ", title: "今の保障、\n実は「払いすぎ」かも",
    lead: "保険の保障内容・保険料に見直しの余地がありそうなタイプです。", bullets,
    fig: { label: "見直し事例(月額保険料)", rows: [{ k: "見直し前", v: "12,000円" }, { k: "見直し後", v: "7,800円", hl: true }], note: "※保障内容・年齢・健康状態により結果は異なります。上記は見直し事例の一例です。" }
  };
}
function fudousanResult(a: Attrs): ResultData {
  const isOwner = a.housing === "owner", isSenior = a.age === "60plus";
  const bullets: string[] = [];
  if (isOwner) bullets.push("住宅ローンの借り換え・繰上げ返済で負担が減らせないか");
  else bullets.push("賃貸を続ける場合と、購入する場合のトータルコストの比較");
  bullets.push("売る・貸す・持ち続けるの選択肢の整理");
  if (isSenior) bullets.push("空き家を放置するリスクの整理");
  else bullets.push("実家や親名義の不動産、将来どうするかの整理");
  const fig = isOwner ? { label: "試算例:残債2,000万円・残り20年・金利1.5%→0.5%に借り換えた場合", rows: [{ k: "月々の返済額", v: "96,509円 → 87,587円" }, { k: "総支払額の圧縮", v: "約214万円", hl: true }], note: "※借入残高・金利・残期間により結果は変わります。あくまで一例の試算です。" } : null;
  return { tag: "不動産 売買検討タイプ", title: "家の「これから」を\n一度整理してみませんか", lead: "自宅・住まいまわりの選択肢を整理するタイミングにいるタイプです。", bullets, fig };
}
function souzokuResult(a: Attrs): ResultData {
  const isSenior = a.age === "60plus", hasKids = a.family === "kids";
  const bullets: string[] = [];
  if (isSenior) { bullets.push("相続税がかかりそうか、概算の目安"); bullets.push("遺言書・生前贈与でできる備え"); }
  else { bullets.push("親の相続で、将来困らないための準備"); bullets.push("実家や親の資産についての家族間の共有"); }
  if (hasKids && !isSenior) bullets.push("将来、自分の子どもに迷惑をかけない備え方");
  else bullets.push("家族間で揉めやすいポイントの整理");
  const fig = isSenior
    ? { label: "試算例:資産5,000万円・法定相続人2人の場合", rows: [{ k: "基礎控除", v: "4,200万円" }, { k: "課税対象額の目安", v: "約800万円", hl: true }], note: "※基礎控除は「3,000万円+600万円×法定相続人の数」。実際の税額は他の財産評価等により異なる概算です。" }
    : { label: "試算例:生前贈与を10年間活用した場合(年110万円×お子さん2人)", rows: [{ k: "非課税で移転できる累計額", v: "2,200万円", hl: true }], note: "※贈与税の非課税枠(年110万円)は制度変更の可能性があります。最新情報は個別相談にてご確認ください。" };
  return { tag: "相続 準備タイプ", title: "「まだ先」と思っている相続ほど\n早めの整理が安心です", lead: "相続への備えを、これから整えていくタイプです。", bullets, fig };
}

const RESULT_BUILDERS: Record<string, (a: Attrs) => ResultData> = { hoken: hokenResult, fudousan: fudousanResult, souzoku: souzokuResult };

/* ================== メインコンポーネント ================== */
type Screen = "cover" | "attr" | "quiz" | "loading" | "result";

export default function LinksPage() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [attrs, setAttrs] = useState<Attrs>({ age: null, housing: null, family: null });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [resultData, setResultData] = useState<ResultData | null>(null);

  const navy = "#1c3a5c", gold = "#d9a441", blue = "#2f6fb0", blueSoft = "#5b8fc7", lineGreen = "#06c755", bg = "#f8f4ec";

  const attrComplete = attrs.age && attrs.housing && attrs.family;
  const stepComplete = STEPS[step]?.every(qi => answers[qi]);

  function startQuiz() {
    const qs = buildQuestions(attrs);
    setQuestions(qs);
    setStep(0);
    setAnswers({});
    setScreen("quiz");
  }

  function onNext() {
    if (!stepComplete) return;
    if (step < STEPS.length - 1) {
      setStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setScreen("loading");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        const scores: Record<string, number> = { hoken: 0, fudousan: 0, souzoku: 0 };
        questions.forEach((q, i) => {
          if (answers[i] === "yes") scores[q.type] += 1;
          else if (answers[i] === "maybe") scores[q.type] += 0.3;
        });
        let best = "hoken", max = -1;
        ["hoken", "fudousan", "souzoku"].forEach(k => { if (scores[k] > max) { max = scores[k]; best = k; } });
        setResultData(RESULT_BUILDERS[best](attrs));
        setScreen("result");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2300);
    }
  }

  const s: Record<string, React.CSSProperties> = {
    wrap: { maxWidth: 480, margin: "0 auto", minHeight: "100vh", background: "#fff", fontFamily: "'Noto Sans JP', sans-serif", color: navy, lineHeight: 1.7 },
    hero: { background: navy, color: "#fff", padding: "40px 26px 32px", textAlign: "center", position: "relative" },
    eyebrow: { fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", color: gold, marginBottom: 18 },
    h1: { fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 25, lineHeight: 1.7, marginBottom: 12 },
    creds: { fontSize: 11.5, color: "rgba(255,255,255,.75)", letterSpacing: ".02em", marginBottom: 26, borderTop: "1px solid rgba(255,255,255,.18)", borderBottom: "1px solid rgba(255,255,255,.18)", padding: "10px 0" },
    startbtn: { display: "block", width: "100%", background: gold, color: navy, border: "none", borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,.25)", padding: 17, fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 16.5, letterSpacing: ".02em", cursor: "pointer" },
    herofoot: { fontSize: 11, opacity: .65, marginTop: 14 },
    section: { padding: "26px 22px 20px" },
    attrhead: { textAlign: "center", marginBottom: 20 },
    attrLabel: { fontWeight: 700, fontSize: 13, color: blueSoft, marginBottom: 8 },
    chipWrap: { display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 20 },
    nextbtn: { width: "100%", background: blue, color: "#fff", border: "none", borderRadius: 10, boxShadow: "0 4px 14px rgba(47,111,176,.3)", padding: 15, fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 16, letterSpacing: ".02em", cursor: "pointer" },
    stepsWrap: { display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "18px 20px 0" },
    hint: { borderLeft: `3px solid ${gold}`, background: bg, padding: "10px 14px", marginTop: 10, fontSize: 12.5, color: navy, lineHeight: 1.65, borderRadius: "0 8px 8px 0" },
    linebtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", background: lineGreen, color: "#fff", border: "none", borderRadius: 10, boxShadow: "0 4px 14px rgba(6,199,85,.3)", padding: 16, fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 16, letterSpacing: ".02em", textDecoration: "none", cursor: "pointer" },
    rescard: { border: "1px solid rgba(28,58,92,.18)", borderRadius: 14, padding: "26px 22px", textAlign: "center" as const, marginBottom: 20, background: "#fff" },
    figbox: { border: "1px solid rgba(28,58,92,.18)", borderRadius: 10, padding: "14px 16px", margin: "4px 0 14px", background: bg },
    disclaimer: { fontSize: 10.5, color: "#767f8c", textAlign: "center" as const, padding: "20px 26px 30px", lineHeight: 1.7 },
  };

  function ChipBtn({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
    return (
      <button onClick={onClick} style={{ flex: 1, minWidth: 90, background: selected ? navy : "#fff", border: `1.5px solid ${selected ? navy : "rgba(28,58,92,.25)"}`, borderRadius: 10, padding: "12px 6px", fontFamily: "'Noto Sans JP'", fontWeight: 700, fontSize: 13, color: selected ? "#fff" : navy, cursor: "pointer" }}>
        {label}
      </button>
    );
  }

  function StepDot({ n, current, done }: { n: number; current: number; done: boolean }) {
    const active = n === current + 1;
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
        <div style={{ width: 26, height: 26, borderRadius: "50%", border: `1.5px solid ${active ? navy : done ? gold : "rgba(28,58,92,.35)"}`, background: active ? navy : done ? gold : "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: active ? "#fff" : done ? navy : navy }}>{n}</div>
        <span style={{ fontWeight: 700, fontSize: 10.5, color: navy, opacity: .7 }}>Step {n}</span>
      </div>
    );
  }

  return (
    <div style={s.wrap}>
      {/* ── HERO ── */}
      {screen === "cover" && (
        <div style={s.hero}>
          <div style={{ position: "absolute", top: 20, right: 22, width: 54, height: 54, border: "1.5px solid #a1463d", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-6deg)", opacity: .85 }}>
            <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 20, color: "#a1463d" }}>診</span>
          </div>
          <div style={s.eyebrow}>30秒<span style={{ color: "rgba(255,255,255,.4)", margin: "0 6px" }}>/</span>無料<span style={{ color: "rgba(255,255,255,.4)", margin: "0 6px" }}>/</span>匿名でOK</div>
          <h1 style={s.h1}>その保険・不動産・相続、<br /><span style={{ color: gold }}>損してないか</span>チェック</h1>
          <p style={{ fontSize: 13.5, fontWeight: 500, opacity: .9, marginBottom: 22 }}>元大手信託銀行員(12年)がつくった診断。<br />回答するだけで、知らなかったお金の知識も身につきます。</p>
          <div style={s.creds}>元大手信託銀行 12年<span style={{ color: "rgba(255,255,255,.35)", margin: "0 8px" }}>｜</span>FP1級<span style={{ color: "rgba(255,255,255,.35)", margin: "0 8px" }}>｜</span>証券アナリスト<span style={{ color: "rgba(255,255,255,.35)", margin: "0 8px" }}>｜</span>宅地建物取引士</div>
          <button style={s.startbtn} onClick={() => setScreen("attr")}>今すぐ無料診断をはじめる</button>
          <p style={s.herofoot}>診断結果はその場で表示されます。押し売りはしません。</p>
        </div>
      )}

      {/* ── ATTR ── */}
      {screen === "attr" && (
        <div style={s.section}>
          <div style={s.attrhead}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: blueSoft, marginBottom: 6 }}>まずは3つだけ・タップでOK</div>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 17, color: navy }}>あなたに合わせて質問を選びます</h2>
          </div>
          <div style={s.attrLabel}>Q. 年代は?</div>
          <div style={s.chipWrap}>
            {AGE_OPTIONS.map(o => <ChipBtn key={o.k} label={o.t} selected={attrs.age === o.k} onClick={() => setAttrs(a => ({ ...a, age: o.k }))} />)}
          </div>
          <div style={s.attrLabel}>Q. お住まいは?</div>
          <div style={s.chipWrap}>
            {HOUSING_OPTIONS.map(o => <ChipBtn key={o.k} label={o.t} selected={attrs.housing === o.k} onClick={() => setAttrs(a => ({ ...a, housing: o.k }))} />)}
          </div>
          <div style={s.attrLabel}>Q. ご家族は?</div>
          <div style={s.chipWrap}>
            {FAMILY_OPTIONS.map(o => <ChipBtn key={o.k} label={o.t} selected={attrs.family === o.k} onClick={() => setAttrs(a => ({ ...a, family: o.k }))} />)}
          </div>
          <button style={{ ...s.nextbtn, opacity: attrComplete ? 1 : .5, cursor: attrComplete ? "pointer" : "not-allowed" }} disabled={!attrComplete} onClick={startQuiz}>診断を始める</button>
        </div>
      )}

      {/* ── QUIZ ── */}
      {screen === "quiz" && (
        <>
          <div style={s.stepsWrap}>
            <StepDot n={1} current={step} done={step > 0} />
            <span style={{ width: 44, borderTop: "1px solid rgba(28,58,92,.25)", margin: "13px 8px 0" }} />
            <StepDot n={2} current={step} done={step > 1} />
            <span style={{ width: 44, borderTop: "1px solid rgba(28,58,92,.25)", margin: "13px 8px 0" }} />
            <StepDot n={3} current={step} done={step > 2} />
          </div>
          <div style={{ padding: "20px 22px 44px" }}>
            {STEPS[step].map(qi => {
              const Q = questions[qi];
              return (
                <div key={qi} style={{ marginBottom: 26 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 13 }}>
                    <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 20, color: blue, lineHeight: 1.2 }}>Q</span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: navy, paddingTop: 1 }}>{Q.q}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {CHOICES.map(c => (
                      <button key={c.k} onClick={() => setAnswers(a => ({ ...a, [qi]: c.k }))} style={{ flex: 1, background: answers[qi] === c.k ? blue : "#fff", border: `1.5px solid ${answers[qi] === c.k ? blue : "rgba(28,58,92,.25)"}`, borderRadius: 10, padding: "12px 3px", fontFamily: "'Noto Sans JP'", fontWeight: 700, fontSize: 13.5, color: answers[qi] === c.k ? "#fff" : navy, cursor: "pointer" }}>
                        {c.t}
                      </button>
                    ))}
                  </div>
                  <div style={s.hint}>
                    <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: ".1em", color: gold, marginBottom: 3 }}>POINT</span>
                    {Q.hint}
                  </div>
                </div>
              );
            })}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              {step > 0 && (
                <button onClick={() => { setStep(s => s - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ background: "none", border: "none", color: blueSoft, fontFamily: "'Noto Sans JP'", fontWeight: 700, fontSize: 14, cursor: "pointer", padding: "10px 4px" }}>← 戻る</button>
              )}
              <button onClick={onNext} disabled={!stepComplete} style={{ flex: 1, background: stepComplete ? blue : "#d7dbe1", color: "#fff", border: "none", borderRadius: 10, boxShadow: stepComplete ? "0 4px 14px rgba(47,111,176,.3)" : "none", padding: 15, fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 16, letterSpacing: ".02em", cursor: stepComplete ? "pointer" : "not-allowed" }}>
                {step === STEPS.length - 1 ? "結果を見る" : "次へ"}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ── LOADING ── */}
      {screen === "loading" && (
        <div style={{ textAlign: "center", padding: "70px 20px 90px" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 21, lineHeight: 1.6, color: navy, marginBottom: 34 }}>あなたの状況を<br />分析中・・・</div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {[blue, blueSoft, gold].map((c, i) => (
              <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "inline-block", animation: `bnc 1s ${i * 0.18}s infinite ease-in-out` }} />
            ))}
          </div>
          <style>{`@keyframes bnc{0%,80%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-10px);opacity:1}}`}</style>
        </div>
      )}

      {/* ── RESULT ── */}
      {screen === "result" && resultData && (
        <div style={{ padding: "10px 22px 40px" }}>
          <div style={s.rescard}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: blue, borderBottom: `1.5px solid ${blue}`, paddingBottom: 4, marginBottom: 14 }}>{resultData.tag}</span>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: blueSoft, marginBottom: 10, letterSpacing: ".02em" }}>{attrLabel(attrs)}のあなたへ</div>
            <div style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, fontSize: 20, color: navy, lineHeight: 1.65, marginBottom: 14 }}>{resultData.title.split("\n").map((l, i) => <span key={i}>{l}{i < resultData.title.split("\n").length - 1 && <br />}</span>)}</div>
            <div style={{ fontSize: 13.5, color: navy, textAlign: "left" }}>
              <p style={{ marginBottom: 10 }}>{resultData.lead}</p>
              {resultData.fig && (
                <div style={s.figbox}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".08em", color: blueSoft, marginBottom: 8 }}>{resultData.fig.label}</div>
                  {resultData.fig.rows.map((r, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 13, padding: "3px 0", borderBottom: i < resultData.fig!.rows.length - 1 ? "1px dashed rgba(28,58,92,.15)" : "none" }}>
                      <span style={{ color: navy, opacity: .75 }}>{r.k}</span>
                      <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: 14.5, color: r.hl ? "#a1463d" : navy }}>{r.v}</span>
                    </div>
                  ))}
                  <div style={{ fontSize: 10.5, color: navy, opacity: .6, marginTop: 8, lineHeight: 1.6 }}>{resultData.fig.note}</div>
                </div>
              )}
              <ul style={{ margin: "0 0 10px 18px" }}>
                {resultData.bullets.map((b, i) => <li key={i} style={{ marginBottom: 5 }}>{b}</li>)}
              </ul>
            </div>
          </div>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" style={s.linebtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 3.45 1.92 6.47 4.8 8.19L6 22l2.72-1.44C9.77 20.83 10.87 21 12 21c5.52 0 10-4.04 10-9S17.52 2 12 2z" /></svg>
            LINEで無料相談を予約する
          </a>
          <p style={{ fontSize: 12, color: navy, opacity: .65, textAlign: "center", marginTop: 12, lineHeight: 1.6 }}>相談は無料・オンライン可。しつこい営業は一切ありません。<br />まずは状況整理だけのご相談も歓迎です。</p>
          <div style={{ fontSize: 11.5, color: navy, opacity: .7, letterSpacing: ".02em", margin: "22px 0 4px", textAlign: "center", borderTop: "1px solid rgba(28,58,92,.15)", paddingTop: 14 }}>
            元大手信託銀行 12年<span style={{ color: "rgba(28,58,92,.3)", margin: "0 8px" }}>｜</span>FP1級<span style={{ color: "rgba(28,58,92,.3)", margin: "0 8px" }}>｜</span>証券アナリスト<span style={{ color: "rgba(28,58,92,.3)", margin: "0 8px" }}>｜</span>宅地建物取引士
          </div>
        </div>
      )}

      <p style={s.disclaimer}>
        ※本診断は入力内容に基づく簡易的な目安であり、税務・法務上の助言や個別商品のご提案を確定するものではありません。制度や控除額は変更される場合があるため、最新情報は個別相談にてご確認ください。<br />
        正式なご提案・お見積りは、個別相談にて資格者が承ります。
      </p>
    </div>
  );
}
