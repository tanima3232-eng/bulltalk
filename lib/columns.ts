import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/column");

export type ColumnMeta = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  categoryColor: string;
  excerpt: string;
  date: string;
  order: number;
};

// カテゴリ表示順：資産形成 → 相続 → 不動産
const CATEGORY_MAP: Record<string, { label: string; color: string; priority: number }> = {
  asset:   { label: "資産形成", color: "#C9A84C", priority: 0 },
  souzoku: { label: "相続",     color: "#7B5EA7", priority: 1 },
  fudosan: { label: "不動産",   color: "#2E7D32", priority: 2 },
};

export function getAllColumns(): ColumnMeta[] {
  const categories = ["fudosan", "souzoku", "asset"];
  const columns: ColumnMeta[] = [];

  for (const cat of categories) {
    const catDir = path.join(contentDir, cat);
    if (!fs.existsSync(catDir)) continue;

    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const filePath = path.join(catDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      if (!data.published) continue;

      const meta = CATEGORY_MAP[cat] ?? { label: cat, color: "#1A2E4A", priority: 99 };
      columns.push({
        slug: data.slug || file.replace(".mdx", ""),
        title: data.title || "",
        category: cat,
        categoryLabel: meta.label,
        categoryColor: meta.color,
        excerpt: data.excerpt || "",
        date: data.date || "",
        order: meta.priority * 1000 + (data.order ?? 999),
      });
    }
  }

  return columns.sort((a, b) => a.order - b.order);
}

export function getColumnBySlug(
  slug: string
): { meta: ColumnMeta; content: string } | null {
  const categories = ["fudosan", "souzoku", "asset"];

  for (const cat of categories) {
    const catDir = path.join(contentDir, cat);
    if (!fs.existsSync(catDir)) continue;

    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const filePath = path.join(catDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      if (data.slug === slug || file.replace(".mdx", "") === slug) {
        const meta = CATEGORY_MAP[cat] ?? { label: cat, color: "#1A2E4A" };
        return {
          meta: {
            slug,
            title: data.title || "",
            category: cat,
            categoryLabel: meta.label,
            categoryColor: meta.color,
            excerpt: data.excerpt || "",
            date: data.date || "",
            order: data.order ?? 999,
          },
          content,
        };
      }
    }
  }

  return null;
}
