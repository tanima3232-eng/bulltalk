export type YTVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

const CHANNEL_ID = "UCqw3_fimbEinIe6fuA7cdrQ";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const SHORTS_URL = "https://www.youtube.com/@bulltalk_jp/shorts";
const VIDEO_ID = /^[a-zA-Z0-9_-]{11}$/;

/** YouTubeの米国時刻・UTC表記を日本時間の日付に揃える。 */
export function japanDate(value: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "";
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function decodeXml(value: string): string {
  const entities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (match, entity: string) => {
      if (!entity.startsWith("#")) return entities[entity.toLowerCase()] || match;
      const code = entity[1].toLowerCase() === "x"
        ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
      return code <= 0x10ffff ? String.fromCodePoint(code) : match;
    });
}

export function parseVideoFeed(xml: string): YTVideo[] {
  const entries = xml.match(/<entry\b[^>]*>[\s\S]*?<\/entry>/g) || [];
  return entries.flatMap((entry) => {
    const tag = (name: string) => entry.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1]?.trim() || "";
    const id = tag("yt:videoId");
    const title = decodeXml(tag("title"));
    const published = japanDate(tag("published"));
    if (!VIDEO_ID.test(id) || !title || !published) return [];
    return [{ id, title, published, url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }];
  }).sort((a, b) => b.published.localeCompare(a.published));
}

type JsonObject = Record<string, unknown>;
function object(value: unknown): JsonObject {
  return value && typeof value === "object" ? value as JsonObject : {};
}

/** RSS障害時はチャンネルの「最新」Shorts一覧を使う。スクリプトは実行しない。 */
export function parseShortsPage(html: string): YTVideo[] {
  const json = html.match(/(?:var\s+ytInitialData\s*=|window\["ytInitialData"\]\s*=)\s*({[\s\S]*?});\s*<\/script>/)?.[1];
  if (!json) throw new Error("YouTube channel data missing");
  const data = object(JSON.parse(json));
  const channel = object(object(data.metadata).channelMetadataRenderer);
  if (channel.externalId !== CHANNEL_ID) throw new Error("Unexpected YouTube channel");
  const videos: YTVideo[] = [];
  const seen = new Set<string>();
  function visit(value: unknown) {
    const node = object(value);
    const shorts = object(node.shortsLockupViewModel);
    const command = object(object(shorts.onTap).innertubeCommand);
    const legacy = object(node.reelItemRenderer);
    const id = object(command.reelWatchEndpoint).videoId ?? legacy.videoId;
    const primaryText = object(object(shorts.overlayMetadata).primaryText).content;
    const legacyTitle = object(legacy.title);
    const runs = Array.isArray(legacyTitle.runs) ? legacyTitle.runs : [];
    const title = primaryText ?? legacyTitle.simpleText ?? runs.map((run) => object(run).text || "").join("");
    if (typeof id === "string" && VIDEO_ID.test(id) && typeof title === "string" && title) {
      if (!seen.has(id)) {
        videos.push({ id, title, published: "", url: `https://www.youtube.com/shorts/${id}`,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` });
        seen.add(id);
      }
      return;
    }
    for (const child of Object.values(node)) {
      if (child && typeof child === "object") visit(child);
    }
  }
  visit(data.contents);
  if (!videos.length) throw new Error("YouTube Shorts list empty");
  return videos;
}

export function parsePublishDate(html: string): string {
  const tag = html.match(/<meta\b[^>]*itemprop="datePublished"[^>]*>/)?.[0];
  return japanDate(tag?.match(/content="([^"]+)"/)?.[1] || "");
}

export async function loadLatestVideos(count = 6, fetcher: typeof fetch = fetch): Promise<YTVideo[]> {
  async function read(url: string): Promise<string> {
    // 呼び出し元のunstable_cacheが内部fetchを非キャッシュ化する。
    // Next.js 14の静的生成では明示的なno-store指定を避ける。
    const response = await fetcher(url, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error(`YouTube returned ${response.status}`);
    return response.text();
  }
  try {
    const videos = parseVideoFeed(await read(RSS_URL));
    if (videos.length) return videos.slice(0, count);
  } catch {
    // RSSが404等を返しても、公開中のチャンネル一覧で再取得する。
  }

  const videos = parseShortsPage(await read(SHORTS_URL)).slice(0, count);
  return Promise.all(videos.map(async (video) => {
    try {
      return { ...video, published: parsePublishDate(await read(`https://www.youtube.com/watch?v=${video.id}`)) };
    } catch {
      // 日付だけ取得できない場合も、新しい動画を古い動画で置き換えない。
      return video;
    }
  }));
}
