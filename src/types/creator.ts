/**
 * Core domain types, served from static data via services/creatorService.ts.
 */

export const CONTENT_TYPES = [
  'hotel',
  'wine-tasting',
  'restaurant',
  'boutique',
  'travel-experience',
  'outdoor',
  'cafe',
  'wellness',
  'brewery',
  'events',
  'beauty',
  'food-review',
  'lifestyle',
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  hotel: 'Hotels & Stays',
  'wine-tasting': 'Wine Tasting',
  restaurant: 'Restaurants',
  boutique: 'Boutiques & Retail',
  'travel-experience': 'Travel Experiences',
  outdoor: 'Outdoor & Adventure',
  cafe: 'Cafés & Bakeries',
  wellness: 'Wellness & Spa',
  brewery: 'Breweries & Cider',
  events: 'Events & Music',
  beauty: 'Beauty',
  'food-review': 'Food Reviews',
  lifestyle: 'Lifestyle',
};

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface Creator {
  id: string;
  name: string;
  /** Social handle, e.g. "@napavalleytip". */
  handle: string;
  /** Link to the creator's Instagram profile. */
  instagramUrl: string;
  photoUrl: string;
  /** Short first-person description of personality and brand. */
  blurb: string;
  /** Region the creator covers, e.g. "Sonoma County". */
  region: string;
  location: GeoPoint;
  /** Instagram follower count. */
  instagramFollowers: number;
  /** TikTok follower count. null when the creator isn't on TikTok. */
  tiktokFollowers: number | null;
  /** Typical average views across platforms per post (from the media kit). */
  avgViews: number;
  /** What a standard paid package includes. */
  packageIncludes: string;
  /** Types of paid-post opportunities the creator wants. */
  contentTypes: ContentType[];
  /** Vetted, established McBratney Media partner — shown as a badge on the card. */
  verifiedPartner?: boolean;
  /** McBratney Media's take on which opportunities suit this creator. */
  agencyNote: string;
}
