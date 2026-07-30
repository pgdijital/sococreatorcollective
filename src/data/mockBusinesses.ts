import type { Business } from '@/types/business';

/**
 * Sonoma County businesses featured on the home-page map. Coordinates are the
 * geocoded street addresses of each business (via OpenStreetMap Nominatim,
 * July 2026). Creator credits, thumbnails, and view/like counts for the
 * Instagram posts are pending — Instagram blocks unauthenticated lookups, so
 * those fields are filled in manually as the info comes in.
 */
export const MOCK_BUSINESSES: Business[] = [
  {
    id: 'b01',
    name: 'Rainsong Shoes',
    category: 'Boutique',
    town: 'Healdsburg',
    // 117 Plaza St, Healdsburg, CA 95448
    location: { lat: 38.6114, lng: -122.8699 },
    videos: [{ url: 'https://www.instagram.com/p/DbCQlU6BMTc/' }],
  },
  {
    id: 'b02',
    name: 'Pure Superfood',
    category: 'Superfood Café',
    town: 'Santa Rosa',
    // 750 Stony Point Rd, Ste A-145, Santa Rosa, CA 95407
    location: { lat: 38.428, lng: -122.7404 },
    videos: [{ url: 'https://www.instagram.com/p/DaiuacnhdXs/' }],
  },
  {
    id: 'b03',
    name: 'The River Electric',
    category: 'Resort & Swim Club',
    town: 'Guerneville',
    // 16101 Neeley Rd, Guerneville, CA 95446
    location: { lat: 38.4985, lng: -122.9929 },
    videos: [{ url: 'https://www.instagram.com/p/DbB8YiFBe3i/' }],
  },
  {
    id: 'b04',
    name: 'Stumptown Brewery',
    category: 'Brewery',
    town: 'Guerneville',
    // 15045 River Rd, Guerneville, CA 95446
    location: { lat: 38.514, lng: -122.9833 },
    videos: [{ url: 'https://www.instagram.com/p/DXsV64tj8-7/' }],
  },
  {
    id: 'b05',
    name: 'SoulScape Rituals',
    category: 'Wellness Studio',
    town: 'Sebastopol',
    // 496 S Main St, Sebastopol, CA 95472
    location: { lat: 38.3981, lng: -122.8222 },
    videos: [{ url: 'https://www.instagram.com/p/DOWk5fnEjqm/' }],
  },
  {
    id: 'b06',
    name: 'Little Delights',
    category: 'Shop',
    town: 'Petaluma',
    // Inside Bow N Arrow & Friends, Petaluma Village Premium Outlets,
    // 2200 Petaluma Blvd N, Petaluma, CA 94952
    location: { lat: 38.2571, lng: -122.6506 },
    videos: [{ url: 'https://www.instagram.com/p/Da_qxlwsO-W/' }],
  },
];
