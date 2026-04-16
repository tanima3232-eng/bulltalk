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
    id: "g-0sOZb_f90",
    title: "4/16 日本株",
    url: "https://www.youtube.com/shorts/g-0sOZb_f90",
    thumbnail: "https://i.ytimg.com/vi/g-0sOZb_f90/hqdefault.jpg",
    published: "2026-04-16",
  },
  {
    id: "n2sTAADLUWA",
    title: "4/15 日本株｜停戦期待で700円超の上げも、上値は追いにくい局面",
    url: "https://www.youtube.com/shorts/n2sTAADLUWA",
    thumbnail: "https://i.ytimg.com/vi/n2sTAADLUWA/hqdefault.jpg",
    published: "2026-04-15",
  },
  {
    id: "AFrqqKEH1rg",
    title: "4/14 日本株｜停戦期待で楽観継続も、まだリスクは消えていない",
    url: "https://www.youtube.com/shorts/AFrqqKEH1rg",
    thumbnail: "https://i.ytimg.com/vi/AFrqqKEH1rg/hqdefault.jpg",
    published: "2026-04-14",
  },
  {
    id: "jetXSiYPCbk",
    title: "4/13 日本株｜中東緊張再燃、原油上昇で株には逆風",
    url: "https://www.youtube.com/shorts/jetXSiYPCbk",
    thumbnail: "https://i.ytimg.com/vi/jetXSiYPCbk/hqdefault.jpg",
    published: "2026-04-13",
  },
  {
    id: "rzpZSIHfzDE",
    title: "富裕層に絶対に聞いてはいけない話",
    url: "https://www.youtube.com/shorts/rzpZSIHfzDE",
    thumbnail: "https://i.ytimg.com/vi/rzpZSIHfzDE/hqdefault.jpg",
    published: "2026-04-11",
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
