import type { Creator } from '@/types/creator';

/**
 * Creator roster, populated from the McBratney Media media-kit spreadsheet
 * (Influencers - Sheet3). Profile photos live in public/images/creators;
 * every other field comes from the source data. Blurbs and agency notes are written up from each
 * creator's "Note" column. Read only via services/creatorService.ts.
 *
 * Region coordinates (approximate town centers used for the map):
 *   Napa Valley    38.5025, -122.2654
 *   Sonoma County  38.4405, -122.7144
 *   Bay Area       37.8044, -122.2712
 *   California      37.7749, -122.4194
 */
// BASE_URL prefix keeps photos working when the site is served from a
// subpath (e.g. GitHub Pages https://<user>.github.io/<repo>/).
const creatorPhoto = (file: string) => `${import.meta.env.BASE_URL}images/creators/${file}`;

export const MOCK_CREATORS: Creator[] = [
  {
    id: 'c01',
    name: 'Isabel Freeman',
    handle: '@napavalleytip',
    instagramUrl: 'https://www.instagram.com/napavalleytip/',
    photoUrl: creatorPhoto('isabel.jpg'),
    blurb:
      'Your insider tip for the good life in Napa Valley. I share the wineries, restaurants, hotels, shops, and experiences that make wine country feel vibrant, elevated, and worth the trip.',
    region: 'Napa Valley',
    location: { lat: 38.5025, lng: -122.2654 },
    instagramFollowers: 20900,
    tiktokFollowers: null,
    avgViews: 3500,
    packageIncludes: 'Video on IG + TikTok',
    contentTypes: ['wine-tasting', 'restaurant', 'hotel', 'boutique', 'travel-experience'],
    verifiedPartner: true,
    agencyNote:
      'Isabel is our premium high-end wine-country voice. Her content is polished, lively, and built for aspirational travel and hospitality brands. Best reserved for wineries, upscale hotels, and fine-dining launches where a refined Napa aesthetic matters most.',
  },
  {
    id: 'c02',
    name: 'Jacqi Bonner',
    handle: '@visit.sonoma.county',
    instagramUrl: 'https://www.instagram.com/visit.sonoma.county/',
    photoUrl: creatorPhoto('jacqi.png'),
    blurb:
      'Celebrating the earthy, authentic side of Sonoma County: wine tastings, high-end living, and the handmade, locally owned experiences that make this place special.',
    region: 'Sonoma County',
    location: { lat: 38.4405, lng: -122.7144 },
    instagramFollowers: 10700,
    tiktokFollowers: 17000,
    avgViews: 12500,
    packageIncludes: 'Video on IG + TikTok',
    contentTypes: ['wine-tasting', 'travel-experience', 'boutique', 'lifestyle'],
    verifiedPartner: true,
    agencyNote:
      'Jacqi is a standout pick for Sonoma County: strong combined reach with a natural, authentic tone. Ideal for handmade and locally owned businesses, tasting rooms, and experience-based brands that want to feel genuine rather than glossy.',
  },
  {
    id: 'c03',
    name: 'Cielo Reyes',
    handle: '@esamamacita',
    instagramUrl: 'https://www.instagram.com/esamamacita/',
    photoUrl: creatorPhoto('cielo.jpg'),
    blurb:
      'Beauty, lifestyle, and honest food reviews from an everyday point of view. I share real daily life and genuine excitement about local food, events, and products. No filter, just enthusiasm.',
    region: 'Sonoma County',
    location: { lat: 38.4405, lng: -122.7144 },
    instagramFollowers: 16000,
    tiktokFollowers: 1200,
    avgViews: 2000,
    packageIncludes: 'Video on IG + TikTok',
    contentTypes: ['beauty', 'lifestyle', 'food-review', 'restaurant'],
    verifiedPartner: true,
    agencyNote:
      "Cielo's everyday, layperson perspective reads as trustworthy word-of-mouth. A great fit for local restaurants, beauty and lifestyle products, and community events that want authentic, relatable enthusiasm.",
  },
  {
    id: 'c04',
    name: 'Tara Alvarez',
    handle: '@taratastessf',
    instagramUrl: 'https://www.instagram.com/taratastessf/',
    photoUrl: creatorPhoto('taratastessf.jpg'),
    blurb:
      'A professional diner with an eye for beautiful food. I capture consistently high-quality photos of a wide variety of cuisines and dining experiences across restaurants, wineries, and hotels, but always open to something new.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 10000,
    tiktokFollowers: 19300,
    avgViews: 7500,
    packageIncludes: 'Video on IG + TikTok',
    contentTypes: ['restaurant', 'wine-tasting', 'hotel', 'food-review'],
    agencyNote:
      'Tara delivers professional-grade food photography with strong TikTok reach. Best for restaurants, wineries, and hotels that want polished, appetizing visuals, and she is genuinely open to any dining or hospitality concept.',
  },
  {
    id: 'c05',
    name: 'Paula Biagton',
    handle: '@food_adventures21',
    instagramUrl: 'https://www.instagram.com/food_adventures21/',
    photoUrl: creatorPhoto('paula.jpg'),
    blurb:
      'Fun, relatable food and travel content with a side of humor. I encourage my audience to explore new destinations and support local businesses, with a special love for Asian cuisine and inviting spots worth the trip.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 11800,
    tiktokFollowers: 1000,
    avgViews: 3750,
    packageIncludes: 'Video on Instagram, Facebook, YouTube, TikTok + Story Posts',
    contentTypes: ['restaurant', 'travel-experience', 'lifestyle', 'food-review'],
    agencyNote:
      'Paula offers the widest cross-platform package on the roster (IG, Facebook, YouTube, and TikTok plus stories) with a warm, humorous personality. A strong pick for food, travel, and lifestyle brands that want multi-channel exposure, and especially effective for Asian cuisine and restaurants.',
  },
  {
    id: 'c06',
    name: 'Kristine Pau',
    handle: '@bayeatss',
    instagramUrl: 'https://www.instagram.com/bayeatss/',
    photoUrl: creatorPhoto('kristine.jpg'),
    blurb:
      'Slow, thoughtful content built on honesty. I share dining, hotels, local businesses, and experiences with reviews my audience knows they can trust. No hype, just the real experience.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 11000,
    tiktokFollowers: 500,
    avgViews: 6500,
    packageIncludes: 'Reel / Reel + Stories / Reel + Stories + Carousel',
    contentTypes: ['restaurant', 'hotel', 'travel-experience', 'food-review'],
    verifiedPartner: true,
    agencyNote:
      "Kristine's calling card is trust. Her slow, honest reviews carry real weight with her audience, and she offers flexible package tiers (reel, reel + stories, or the full carousel). Best for dining, hotels, and local businesses confident in their quality and looking for a credible, considered endorsement.",
  },
  {
    id: 'c07',
    name: 'Ari Z',
    handle: '@foodieberrie',
    instagramUrl: 'https://www.instagram.com/foodieberrie/',
    photoUrl: creatorPhoto('ari.jpg'),
    blurb:
      'On the hunt for the best of the best, locally. I review unique foods, products, and experiences, from restaurants and cafés to spas, cooking classes, and craft shops, and only feature the standouts.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 9500,
    tiktokFollowers: 1200,
    avgViews: 2000,
    packageIncludes: 'Reel Post / Carousel Post',
    contentTypes: ['restaurant', 'cafe', 'wellness', 'boutique', 'food-review'],
    agencyNote:
      'Ari has the broadest interest range on the roster (food, cafés, grocery, spas, cooking classes, arts and crafts, and hospitality). A versatile choice for unique local businesses that want a "best of the best" spotlight.',
  },
  {
    id: 'c08',
    name: 'Sarah',
    handle: '@yourfoodiebffl',
    instagramUrl: 'https://www.instagram.com/yourfoodiebffl/',
    photoUrl: creatorPhoto('sarah.jpg'),
    blurb:
      "Your foodie best friend for the Bay Area's hospitality and lifestyle scene. I feature restaurants, hotels, spas, events, cafés, and bakeries: the kinds of places worth telling a friend about.",
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 2000,
    tiktokFollowers: 1000,
    avgViews: 6000,
    packageIncludes: 'Video on IG + TikTok + Shorts',
    contentTypes: ['restaurant', 'hotel', 'wellness', 'events', 'cafe'],
    verifiedPartner: true,
    agencyNote:
      'Sarah punches above her follower count on views, with a three-platform package (IG, TikTok, and Shorts). A friendly, approachable fit for restaurants, hotels, spas, events, cafés, and bakeries looking for lifestyle-aligned content across short-form video.',
  },
  {
    id: 'c09',
    name: 'Ro R',
    handle: '@roinwanderlust',
    instagramUrl: 'https://www.instagram.com/roinwanderlust/',
    photoUrl: creatorPhoto('ro.jpg'),
    blurb:
      'Wanderlust-driven travel and lifestyle content with real reach. I partner with travel, hospitality, and dining brands to bring destinations to life for an audience that loves to explore.',
    region: 'California',
    location: { lat: 37.7749, lng: -122.4194 },
    instagramFollowers: 70600,
    tiktokFollowers: 31000,
    avgViews: 55000,
    packageIncludes: 'Video on IG / + 3 Stories / + 3 Stories + TikTok',
    contentTypes: ['travel-experience', 'hotel', 'restaurant', 'lifestyle'],
    agencyNote:
      "Ro is our largest-reach creator by far, with statewide pull and views that can climb into six figures. A premium pick best suited to travel, hospitality, and dining brands seeking maximum exposure and a polished, wanderlust-forward aesthetic. Scalable package tiers let you dial reach up with added stories and TikTok.",
  },
  {
    id: 'c10',
    name: 'Wendan Li',
    handle: '@wendan.vs.world',
    instagramUrl: 'https://www.instagram.com/wendan.vs.world/',
    photoUrl: creatorPhoto('wendan.jpg'),
    blurb:
      'Taking on the Bay Area one experience at a time. I cover restaurants, wineries, bars, hotels, and activities: the full spectrum of what makes going out here worth it.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 25000,
    tiktokFollowers: null,
    avgViews: 5000,
    packageIncludes: 'Video on IG',
    contentTypes: ['restaurant', 'wine-tasting', 'hotel', 'travel-experience'],
    verifiedPartner: true,
    agencyNote:
      'Wendan brings a solid 25k Instagram following and broad hospitality coverage across restaurants, wineries, bars, hotels, and excursions. An IG-focused pick for experience-driven brands that want reliable reach on a single, well-produced video.',
  },
  {
    id: 'c11',
    name: 'Akshata Katkar',
    handle: '@girl_being_crazy',
    instagramUrl: 'https://www.instagram.com/girl_being_crazy/',
    photoUrl: creatorPhoto('akshata.jpg'),
    blurb:
      'Curating the perfect weekend getaway, one stay at a time. I love stay collaborations, restaurant features, wine tastings, and the unique local experiences that turn a trip into a story.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 12200,
    tiktokFollowers: 1100,
    avgViews: 5500,
    packageIncludes: 'Video on IG + TikTok',
    contentTypes: ['hotel', 'restaurant', 'wine-tasting', 'travel-experience'],
    agencyNote:
      'Akshata specializes in weekend-getaway storytelling and is especially keen on stay collaborations. An excellent fit for hotels, inns, restaurants, and wineries that want to be featured as part of a curated local escape.',
  },
  {
    id: 'c12',
    name: 'Amanda Trieu',
    handle: '@baygirlseat',
    instagramUrl: 'https://www.instagram.com/baygirlseat/',
    photoUrl: creatorPhoto('amandy.jpg'),
    blurb:
      'A little bit of everything from a Bay Area girl who eats: OOTDs, wine, beauty, hotels, and experiences. Flexible content for the brands and moments that fit my everyday life.',
    region: 'Bay Area',
    location: { lat: 37.8044, lng: -122.2712 },
    instagramFollowers: 10700,
    tiktokFollowers: 1100,
    avgViews: 2750,
    packageIncludes: 'Video / Carousel / Stories / Raw Footage / Video + Stories',
    contentTypes: ['boutique', 'wine-tasting', 'beauty', 'hotel', 'lifestyle'],
    agencyNote:
      'Amanda is highly flexible on format (video, carousel, stories, or even raw footage for your own channels) and blends fashion, beauty, wine, and hotels. A well-rounded lifestyle pick for brands that want deliverables tailored to their own marketing needs.',
  },
];
