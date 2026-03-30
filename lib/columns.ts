import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/column");

export type ColumnMeta = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  excerpt: string;
  date: string;
};

export function getAllColumns(): ColumnMeta[] {
  const categories = ["souzoku", "fudosan", "asset"];
  const columns: ColumnMeta[] = [];

  for (const cat of categories) {
    const catDir = path.join(contentDir, cat);
    if (!fs.existsSync(catDir)) continue;

    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const filePath = path.join(catDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      columns.push({
        slug: file.replace(".mdx", ""),
        title: data.title || "",
        category: data.category || cat,
        categoryLabel: data.categoryLabel || cat,
        excerpt: data.excerpt || "",
        date: data.date || "",
      });
    }
  }

  return columns.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getColumnBySlug(slug: string): { meta: ColumnMeta; content: string } | null {
  const categories = ["souzoku", "fudosan", "asset"];

  for (const cat of categories) {
    const filePath = path.join(contentDir, cat, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        meta: {
          slug,
          title: data.title || "",
          category: data.category || cat,
          categoryLabel: data.categoryLabel || cat,
          excerpt: data.excerpt || "",
          date: data.date || "",
        },
        content,
      };
    }
  }

  return null;
}
