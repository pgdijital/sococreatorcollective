import type { ContentType, Creator } from '@/types/creator';

export const SORT_OPTIONS = [
  { value: 'ig-followers', label: 'Instagram Followers' },
  { value: 'tiktok-followers', label: 'TikTok Followers' },
  { value: 'avg-views', label: 'Average Views' },
  { value: 'name', label: 'Name (A–Z)' },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]['value'];

export interface CreatorFilters {
  search: string;
  contentType: ContentType | 'all';
  sort: SortOption;
}

export const DEFAULT_FILTERS: CreatorFilters = {
  search: '',
  contentType: 'all',
  sort: 'ig-followers',
};

export function applyFilters(creators: Creator[], filters: CreatorFilters): Creator[] {
  const search = filters.search.trim().toLowerCase();

  const matched = creators.filter((creator) => {
    if (filters.contentType !== 'all' && !creator.contentTypes.includes(filters.contentType)) {
      return false;
    }
    if (search) {
      const haystack =
        `${creator.name} ${creator.handle} ${creator.region} ${creator.blurb}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  return sortCreators(matched, filters.sort);
}

function sortCreators(creators: Creator[], sort: SortOption): Creator[] {
  const sorted = [...creators];
  switch (sort) {
    case 'ig-followers':
      return sorted.sort((a, b) => b.instagramFollowers - a.instagramFollowers);
    case 'tiktok-followers':
      return sorted.sort((a, b) => (b.tiktokFollowers ?? 0) - (a.tiktokFollowers ?? 0));
    case 'avg-views':
      return sorted.sort((a, b) => b.avgViews - a.avgViews);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
}
