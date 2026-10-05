#!/usr/bin/env node
/**
 * Bulltalk 日本株マーケット記事パーサー
 *
 * 「Antigravity_日本株_日次記事データ_2026_改訂版.md」を読み込み、
 * 日付ごとに個別のMDXファイルを content/market/japan/ に生成します。
 */

const fs = require('fs');
const path = require('path');

// ── パス設定 ──
const inputFile = path.resolve(
  __dirname,
  '..',
  '..',
  'Antigravity_日本株_日次記事データ_2026_改訂版.md'
);
const outputDir = path.resolve(__dirname, '..', 'content', 'market', 'japan');

fs.mkdirSync(outputDir, { recursive: true });

// ── 入力ファイル読み込み ──
console.log(`Reading: ${inputFile}`);
const raw = fs.readFileSync(inputFile, 'utf-8').replace(/\r\n/g, '\n');

// ── 記事ブロックに分割 ──
const blocks = raw.split('\n---\n');
console.log(`Found ${blocks.length} blocks`);

let count = 0;
let skipped = 0;
const generated = [];

for (const block of blocks) {
  const trimmed = block.trim();
  if (!trimmed) continue;

  // 記事ヘッディング検出
  const headingMatch = trimmed.match(
    /^#\s+【(\d{4})年(\d{1,2})月(\d{1,2})日\s+日本株】(.+)$/m
  );
  if (!headingMatch) continue;

  const [, year, mRaw, dRaw, headingTitlePart] = headingMatch;
  const month = mRaw.padStart(2, '0');
  const day = dRaw.padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  // 8月8日は除外（削除済み）
  if (dateStr === '2026-08-08') {
    console.log(`  ⏭ Skipping ${dateStr} (deleted)`);
    skipped++;
    continue;
  }

  // ── YAMLコードブロックからメタデータ抽出 ──
  const yamlMatch = trimmed.match(/```yaml\n([\s\S]*?)\n```/);
  let yamlTitle = '';
  let yamlDesc = '';
  let yamlTags = [];
  let yamlAuthor = '谷本光章';

  if (yamlMatch) {
    const y = yamlMatch[1];
    const tm = y.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
    if (tm) yamlTitle = tm[1].replace(/\\"/g, '"');
    const dm = y.match(/description:\s*"((?:[^"\\]|\\.)*)"/);
    if (dm) yamlDesc = dm[1].replace(/\\"/g, '"');
    const tagm = y.match(/tags:\s*\[([^\]]*)\]/);
    if (tagm) {
      yamlTags = tagm[1]
        .split(',')
        .map((t) => t.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    }
    const am = y.match(/author:\s*"(.+?)"/);
    if (am) yamlAuthor = am[1];
  }

  const title =
    yamlTitle ||
    `【${year}年${parseInt(mRaw)}月${parseInt(dRaw)}日 日本株】${headingTitlePart}`;

  // ── セクション抽出ヘルパー ──
  function extractSection(sectionName) {
    const escaped = sectionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(
      `## ${escaped}\\s*\\n\\n?([\\s\\S]*?)(?=\\n## |$)`
    );
    const match = trimmed.match(regex);
    return match ? match[1].trim() : '';
  }

  // ── 各セクション抽出 ──
  const summaryText = extractSection('今日の日本株まとめ');
  const pointsText = extractSection('今日のポイント');
  const bodyText = extractSection('日本株市場の動き');
  const viewText = extractSection('本日の相場観');
  const nextText = extractSection('翌営業日に向けて確認したいポイント');

  // ポイント解析
  const points = pointsText
    .split('\n')
    .filter((l) => l.match(/^[-・]\s/))
    .map((l) => l.replace(/^[-・]\s+/, '').trim())
    .filter(Boolean);

  // 相場観（太字マーカー除去）
  const marketView = viewText.replace(/\*\*/g, '').trim();

  // 翌営業日ポイント
  const nextLines = nextText
    .split('\n')
    .filter((l) => l.match(/^[-・]\s/))
    .map((l) => l.replace(/^[-・]\s+/, '').trim())
    .filter(Boolean);
  const nextPoints =
    nextLines.length > 0 ? nextLines : nextText ? [nextText] : [];

  // description 自動生成
  const description =
    yamlDesc || summaryText.substring(0, 160).replace(/\n/g, ' ');

  // ── YAML文字列エスケープ ──
  function esc(s) {
    if (!s) return '""';
    return (
      '"' +
      s
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, ' ')
        .replace(/\r/g, '') +
      '"'
    );
  }

  // ── frontmatter 構築 ──
  const fm = [
    '---',
    `title: ${esc(title)}`,
    `date: "${dateStr}"`,
    `updated: "${dateStr}"`,
    `description: ${esc(description)}`,
    `summary: ${esc(summaryText.replace(/\n/g, ' '))}`,
    'points:',
  ];

  if (points.length > 0) {
    points.forEach((p) => fm.push(`  - ${esc(p)}`));
  }

  fm.push(`market_view: ${esc(marketView)}`);
  fm.push('tags:');

  if (yamlTags.length > 0) {
    yamlTags.forEach((t) => fm.push(`  - ${esc(t)}`));
  } else {
    fm.push('  - "日本株"');
  }

  fm.push(`next_points:`);
  if (nextPoints.length > 0) {
    nextPoints.forEach((p) => fm.push(`  - ${esc(p)}`));
  }

  fm.push('instagram_url: ""');
  fm.push(`author: ${esc(yamlAuthor)}`);
  fm.push('published: true');
  fm.push('---');

  // ── MDX本文構築 ──
  const bodyParts = [fm.join('\n'), ''];

  if (bodyText) {
    bodyParts.push(bodyText);
  }

  bodyParts.push('');

  const mdxContent = bodyParts.join('\n');
  const filename = `${dateStr}.mdx`;

  fs.writeFileSync(path.join(outputDir, filename), mdxContent, 'utf-8');
  count++;
  generated.push({ date: dateStr, title: title.substring(0, 70) });
}

// ── 結果報告 ──
generated.sort((a, b) => b.date.localeCompare(a.date));
console.log(`\n✅ Generated ${count} MDX files (skipped ${skipped})`);
console.log(`   Output: ${outputDir}\n`);
generated.forEach((a) => console.log(`  ${a.date}  ${a.title}`));
