import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/market/japan");

/* ── 型定義 ── */

export type MarketArticleMeta = {
  slug: string; // date string: "2026-09-18"
  title: string;
  date: string;
  updated: string;
  description: string;
  summary: string;
  points: string[];
  market_view: string;
  next_points: string[];
  tags: string[];
  instagram_url: string;
  author: string;
};

export type MarketArticle = {
  meta: MarketArticleMeta;
  content: string; // MDX body（日本株市場の動き本文）
};

export type MonthlyArchive = {
  year: number;
  month: number;
  label: string; // "2026年9月"
  count: number;
};

/* ── 内部ヘルパー ── */

function parseArticleFile(filePath: string): MarketArticle | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    if (!data.published) return null;

    const dateVal =
      typeof data.date === "object" && data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date || "");

    const updatedVal =
      typeof data.updated === "object" && data.updated instanceof Date
        ? data.updated.toISOString().split("T")[0]
        : String(data.updated || dateVal);

    return {
      meta: {
        slug: dateVal || path.basename(filePath, ".mdx"),
        title: data.title || "",
        date: dateVal,
        updated: updatedVal,
        description: data.description || "",
        summary: data.summary || "",
        points: Array.isArray(data.points) ? data.points : [],
        market_view: data.market_view || "",
        next_points: Array.isArray(data.next_points) ? data.next_points : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        instagram_url: data.instagram_url || "",
        author: data.author || "谷本光章",
      },
      content,
    };
  } catch {
    return null;
  }
}

/* ── キャッシュ ── */

let cachedArticles: MarketArticleMeta[] | null = null;
let cachedArticleMap: Map<string, MarketArticle> | null = null;

function loadAllArticles(): { metas: MarketArticleMeta[]; map: Map<string, MarketArticle> } {
  if (cachedArticles && cachedArticleMap) {
    return { metas: cachedArticles, map: cachedArticleMap };
  }

  if (!fs.existsSync(contentDir)) {
    cachedArticles = [];
    cachedArticleMap = new Map();
    return { metas: cachedArticles, map: cachedArticleMap };
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  const metas: MarketArticleMeta[] = [];
  const map = new Map<string, MarketArticle>();

  for (const file of files) {
    const article = parseArticleFile(path.join(contentDir, file));
    if (article) {
      metas.push(article.meta);
      map.set(article.meta.slug, article);
    }
  }

  metas.sort((a, b) => b.date.localeCompare(a.date));
  cachedArticles = metas;
  cachedArticleMap = map;
  return { metas, map };
}

/* ── 公開関数 ── */

/** 全記事のメタ情報を日付降順で取得 */
export function getAllMarketArticles(): MarketArticleMeta[] {
  return loadAllArticles().metas;
}

/** スラッグ（日付文字列）で1記事取得 */
export function getMarketArticleBySlug(
  slug: string
): MarketArticle | null {
  return loadAllArticles().map.get(slug) || null;
}

/** 指定月の記事を日付降順で取得 */
export function getArticlesByMonth(
  year: number,
  month: number
): MarketArticleMeta[] {
  const prefix = `${year}-${String(month).padStart(2, "0")}`;
  return getAllMarketArticles().filter((a) => a.date.startsWith(prefix));
}

/** 前後の営業日記事を取得 */
export function getAdjacentArticles(slug: string): {
  prev: MarketArticleMeta | null; // 前営業日（古い）
  next: MarketArticleMeta | null; // 次の営業日（新しい）
} {
  const all = getAllMarketArticles(); // 日付降順
  const index = all.findIndex((a) => a.slug === slug);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: index < all.length - 1 ? all[index + 1] : null,
    next: index > 0 ? all[index - 1] : null,
  };
}

/** 同タグの関連記事を取得 */
export function getRelatedArticles(
  slug: string,
  limit = 4
): MarketArticleMeta[] {
  const article = getMarketArticleBySlug(slug);
  if (!article) return [];

  const all = getAllMarketArticles().filter((a) => a.slug !== slug);
  const tags = new Set(article.meta.tags);

  const scored = all.map((a) => ({
    article: a,
    score: a.tags.filter((t) => tags.has(t)).length,
  }));

  scored.sort((a, b) => b.score - a.score || b.article.date.localeCompare(a.article.date));
  return scored.slice(0, limit).map((s) => s.article);
}

/** 月別アーカイブリストを取得 */
export function getMonthlyArchive(): MonthlyArchive[] {
  const all = getAllMarketArticles();
  const months = new Map<
    string,
    { year: number; month: number; count: number }
  >();

  for (const article of all) {
    const parts = article.date.split("-");
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    const key = `${y}-${String(m).padStart(2, "0")}`;
    const existing = months.get(key);
    if (existing) {
      existing.count++;
    } else {
      months.set(key, { year: y, month: m, count: 1 });
    }
  }

  return Array.from(months.values())
    .sort((a, b) => b.year * 100 + b.month - (a.year * 100 + a.month))
    .map((m) => ({
      ...m,
      label: `${m.year}年${m.month}月`,
    }));
}
