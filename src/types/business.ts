/**
 * A local business that has had promotional content made for it, shown on the
 * home-page "See How It Works" map alongside the videos each creator produced.
 */
export interface FeatureVideo {
  /** Creator handle or name credited for the video, once known. */
  creator?: string;
  /** Link to the published video (Instagram, TikTok, etc.). */
  url: string;
  /**
   * Optional thumbnail image path (e.g. a saved frame under /images/videos/).
   * TikTok links get a thumbnail automatically via oEmbed; Instagram requires
   * a Meta app token for that, so Reels need this set manually or they fall
   * back to a placeholder card.
   */
  thumbnail?: string;
  /**
   * View/like counts, snapshotted at data-entry time (no public API serves
   * these live from the browser). TikTok numbers can be scraped when the link
   * is added; Instagram numbers must be read from the app.
   */
  views?: number;
  likes?: number;
}

export interface Business {
  id: string;
  name: string;
  /** e.g. "Restaurant", "Winery", "Boutique". */
  category: string;
  town: string;
  location: { lat: number; lng: number };
  videos: FeatureVideo[];
}
