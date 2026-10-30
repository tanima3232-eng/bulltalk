import { unstable_cache } from "next/cache";
import { loadLatestVideos, type YTVideo } from "./youtube-source";

export type { YTVideo } from "./youtube-source";

// 初回取得も失敗した場合だけ使う、2026-10-30にYouTubeで確認済みの控え。
// 通常は公開情報から自動取得し、再取得に失敗しても最後に成功したキャッシュを維持する。
const INITIAL_VIDEOS: YTVideo[] = [
  { id: "_9u5NT910Zs", title: "10/30 日本株", published: "2026-10-30" },
  { id: "34GRCU3sEWE", title: "10/29 日本株", published: "2026-10-29" },
  { id: "byHyo_sWfQs", title: "10/28 日本株", published: "2026-10-28" },
].map((video) => ({
  ...video,
  url: `https://www.youtube.com/shorts/${video.id}`,
  thumbnail: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
}));

// 大きなYouTubeのHTMLではなく、正常に取得できた動画情報だけを保存する。
const getCachedVideos = unstable_cache(
  async (count: number) => {
    const videos = await loadLatestVideos(count);
    console.info("[YouTube] Refreshed latest videos:", videos.map((video) => video.id).join(", "));
    return videos;
  },
  ["bulltalk-youtube-latest-v2"],
  { revalidate: 900 },
);

export async function getLatestVideos(count = 6): Promise<YTVideo[]> {
  try {
    return await getCachedVideos(count);
  } catch (error) {
    console.warn("[YouTube] Latest videos unavailable; using initial snapshot", error);
    return INITIAL_VIDEOS.slice(0, count);
  }
}
