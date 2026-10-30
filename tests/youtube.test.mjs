// Run with Node.js 24+: node --test tests/youtube.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { japanDate, parseVideoFeed, parseShortsPage, parsePublishDate, loadLatestVideos } from "../lib/youtube-source.ts";

const channelId = "UCqw3_fimbEinIe6fuA7cdrQ";
const ids = ["_9u5NT910Zs", "34GRCU3sEWE", "byHyo_sWfQs"];
function channelPage(videoIds = ids, channel = channelId) {
  return `<script>var ytInitialData = ${JSON.stringify({
    metadata: { channelMetadataRenderer: { externalId: channel } },
    contents: { items: videoIds.map((id, i) => ({ shortsLockupViewModel: {
      onTap: { innertubeCommand: { reelWatchEndpoint: { videoId: id } } },
      overlayMetadata: { primaryText: { content: `動画 ${i}` } },
    } })) },
  })};</script>`;
}
const entry = (id, title, date) => `<entry><yt:videoId>${id}</yt:videoId><title>${title}</title><published>${date}</published></entry>`;

test("RSS dates stay paired with their entry, even without a channel published date", () => {
  const xml = `<feed><title>チャンネル</title>${entry(ids[1], "日本株 &amp; AI &#x26; 金利", "2026-10-29T05:00:00Z")}${entry(ids[0], "最新", "2026-10-30T05:00:00Z")}</feed>`;
  const videos = parseVideoFeed(xml);
  assert.deepEqual(videos.map(v => [v.id, v.published]), [[ids[0], "2026-10-30"], [ids[1], "2026-10-29"]]);
  assert.equal(videos[1].title, "日本株 & AI & 金利");
});

test("YouTube US timestamps display the Japanese publication date", () => {
  assert.equal(japanDate("2026-10-29T21:52:28-07:00"), "2026-10-30");
  assert.equal(parsePublishDate('<meta itemprop="datePublished" content="2026-10-29T21:52:28-07:00">'), "2026-10-30");
  assert.equal(japanDate("invalid"), "");
  assert.equal(parsePublishDate("no metadata"), "");
});

test("Shorts parser preserves latest order, removes duplicates and rejects wrong channels", () => {
  assert.deepEqual(parseShortsPage(channelPage([...ids, ids[0]])).map(v => v.id), ids);
  assert.throws(() => parseShortsPage(channelPage(ids, "different-channel")));
  assert.throws(() => parseShortsPage("<html>Consent screen</html>"));
  assert.throws(() => parseShortsPage(channelPage([])));
  assert.equal(parseVideoFeed("<html>404</html>").length, 0);
});

test("RSS 404 falls back to live Shorts and a new upload replaces the old first video", async () => {
  let current = ids;
  const fetcher = async url => {
    if (url.includes("/feeds/")) return new Response("", { status: 404 });
    if (url.endsWith("/shorts")) return new Response(channelPage(current));
    return new Response('<meta itemprop="datePublished" content="2026-10-29T21:52:28-07:00">');
  };
  assert.deepEqual((await loadLatestVideos(3, fetcher)).map(v => v.id), ids);
  current = ["newVideo123", ...ids];
  const videos = await loadLatestVideos(3, fetcher);
  assert.deepEqual(videos.map(v => v.id), ["newVideo123", ids[0], ids[1]]);
  assert.equal(videos[0].published, "2026-10-30");
});

test("healthy RSS needs no channel scraping; complete failure throws to preserve cached success", async () => {
  let calls = 0;
  const videos = await loadLatestVideos(3, async () => {
    calls++;
    return new Response(`<feed>${entry(ids[0], "最新", "2026-10-30T05:00:00Z")}</feed>`);
  });
  assert.equal(calls, 1);
  assert.equal(videos[0].id, ids[0]);
  await assert.rejects(loadLatestVideos(3, async () => new Response("", { status: 503 })));
});

test("missing video dates do not discard newly discovered videos", async () => {
  const videos = await loadLatestVideos(3, async url => url.endsWith("/shorts")
    ? new Response(channelPage()) : new Response("", { status: 503 }));
  assert.deepEqual(videos.map(v => v.id), ids);
  assert(videos.every(v => v.published === ""));
});
