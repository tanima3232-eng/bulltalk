export type YTVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

const CHANNEL_ID = "UCqw3_fimbEinIe6fuA7cdrQ";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

/** タグ間のテキストを全て抽出（matchAll/sフラグ不使用の互換実装） */
function extractAll(xml: string, tag: string): string[] {
  const results: string[] = [];
  const open = `<${tag}>`;
  const close = `</${tag}>`;
  let pos = 0;
  while (pos < xml.length) {
    const start = xml.indexOf(open, pos);
    if (start === -1) break;
    const end = xml.indexOf(close, start + open.length);
    if (end === -1) break;
    results.push(xml.slice(start + open.length, end).trim());
    pos = end + close.length;
  }
  return results;
}

export async function getLatestVideos(count = 6): Promise<YTVideo[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 }, // 1時間キャッシュ（動画アップ後1時間以内に自動反映）
    });
    if (!res.ok) return [];

    const xml = await res.text();

    const videoIds = extractAll(xml, "yt:videoId");
    const titles = extractAll(xml, "title").slice(1); // 最初はチャンネルタイトルなのでスキップ
    const publishedDates = extractAll(xml, "published").slice(1); // チャンネル公開日をスキップ

    return videoIds.slice(0, count).map((id, i) => ({
      id,
      title: titles[i] || "動画タイトル",
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      published: (publishedDates[i] || "").slice(0, 10),
    }));
  } catch {
    return [];
  }
}
