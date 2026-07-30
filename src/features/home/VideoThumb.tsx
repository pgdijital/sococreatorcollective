import { useEffect, useState } from 'react';
import type { FeatureVideo } from '@/types/business';
import { formatCount } from '@/utils/format';
import styles from './BusinessMap.module.css';

/**
 * TikTok's public oEmbed endpoint returns a signed thumbnail URL that expires,
 * so thumbnails are fetched when a popup opens rather than stored in the data.
 * Results are cached per session; a failed or non-TikTok lookup caches null so
 * the placeholder renders without refetching.
 */
const thumbnailCache = new Map<string, string | null>();

function useVideoThumbnail(video: FeatureVideo): string | null {
  const [thumbnail, setThumbnail] = useState<string | null>(
    video.thumbnail ?? thumbnailCache.get(video.url) ?? null,
  );

  useEffect(() => {
    if (video.thumbnail || thumbnailCache.has(video.url)) return;
    if (!video.url.includes('tiktok.com')) {
      thumbnailCache.set(video.url, null);
      return;
    }
    let cancelled = false;
    fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(video.url)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { thumbnail_url?: string } | null) => {
        const url = data?.thumbnail_url ?? null;
        thumbnailCache.set(video.url, url);
        if (!cancelled) setThumbnail(url);
      })
      .catch(() => thumbnailCache.set(video.url, null));
    return () => {
      cancelled = true;
    };
  }, [video.url, video.thumbnail]);

  return thumbnail;
}

function platformLabel(url: string): string {
  if (url.includes('tiktok.com')) return 'TikTok';
  if (url.includes('instagram.com')) return 'Instagram';
  return 'Video';
}

export function VideoThumb({ video }: { video: FeatureVideo }) {
  const thumbnail = useVideoThumbnail(video);

  return (
    <a
      className={styles.videoThumb}
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        video.creator
          ? `Watch the ${platformLabel(video.url)} video by ${video.creator}`
          : `Watch the ${platformLabel(video.url)} video`
      }
    >
      <span className={styles.thumbFrame}>
        {thumbnail ? (
          <img src={thumbnail} alt="" loading="lazy" />
        ) : (
          <span className={styles.thumbPlaceholder}>{platformLabel(video.url)}</span>
        )}
        <span className={styles.thumbPlay} aria-hidden="true">
          ▶
        </span>
      </span>
      {video.creator && <span className={styles.thumbCreator}>{video.creator}</span>}
      {(video.views != null || video.likes != null) && (
        <span className={styles.thumbStats}>
          {video.views != null && <span>▷ {formatCount(video.views)}</span>}
          {video.likes != null && <span>♥ {formatCount(video.likes)}</span>}
        </span>
      )}
    </a>
  );
}
