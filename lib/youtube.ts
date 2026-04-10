export type YTVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

const CHANNEL_ID = "UCqw3_fimbEinIe6fuA7cdrQ";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// ===== 手動フォールバックリスト =====
// RSSで取得できない場合（Shorts未対応など）はこちらを使用。
// 新しい動画を上げたら先頭に追加してください。
const FALLBACK_VIDEOS: YTVideo[] = [
  {
    id: "rIwi0mzsQJw",
    title: "4/10 日本株｜停戦継続期待で上昇も、CPI・中東リスクで上値重い",
    url: "https://www.youtube.com/shorts/rIwi0mzsQJw",
    thumbnail: "https://i.ytimg.com/vi/rIwi0mzsQJw/hqdefault.jpg",
    published: "2026-04-10",
  },
  {
    id: "9bdegMXCeas",
    title: "4/9 日本株｜本日は様子見、攻めるなら売り📉",
    url: "https://www.youtube.com/shorts/9bdegMXCeas",
    thumbnail: "https://i.ytimg.com/vi/9bdegMXCeas/hqdefault.jpg",
    published: "2026-04-09",
  },
  {
    id: "OtdkmKTdaIA",
    title: "4/8 日本株｜中東リスク緩和・原油下落→日本株上昇。上値目安57,000〜58,000円",
    url: "https://www.youtube.com/shorts/OtdkmKTdaIA",
    thumbnail: "https://i.ytimg.com/vi/OtdkmKTdaIA/hqdefault.jpg",
    published: "2026-04-08",
  },
];

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
    if (!res.ok) return FALLBACK_VIDEOS.slice(0, count);

    const xml = await res.text();

    const videoIds = extractAll(xml, "yt:videoId");
    const titles = extractAll(xml, "title").slice(1); // 最初はチャンネルタイトルなのでスキップ
    const publishedDates = extractAll(xml, "published").slice(1); // チャンネル公開日をスキップ

    // RSSに動画がない場合はフォールバックを返す
    if (videoIds.length === 0) return FALLBACK_VIDEOS.slice(0, count);

    return videoIds.slice(0, count).map((id, i) => ({
      id,
      title: titles[i] || "動画タイトル",
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      published: (publishedDates[i] || "").slice(0, 10),
    }));
  } catch {
    return FALLBACK_VIDEOS.slice(0, count);
  }
}
