export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Cruise ship entering the Bay of Kotor with medieval town and mountains",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Kotor cruise planning — Old Town, Bay of Kotor and Port of Kotor",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Kotor Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Cruise ships at the Port of Kotor",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "old-town": { src: `${B}/old-town.jpg`, alt: "Kotor Old Town medieval streets and squares" },
  medieval: { src: `${B}/medieval.jpg`, alt: "St Tryphon Cathedral and medieval Kotor Old Town" },
  bay: { src: `${B}/bay.jpg`, alt: "Our Lady of the Rocks island church on the Bay of Kotor" },
  "blue-cave": { src: `${B}/blue-cave.jpg`, alt: "Blue Cave (Plava Špilja) on the Bay of Kotor" },
  walls: { src: `${B}/fortress.jpg`, alt: "San Giovanni fortress walls above Kotor Old Town" },
  fortress: { src: `${B}/fortress.jpg`, alt: "Kotor fortress ramparts and mountain backdrop" },
  perast: { src: `${B}/boat.jpg`, alt: "Perast baroque waterfront on the Bay of Kotor" },
  coast: { src: `${B}/coast.jpg`, alt: "Bay of Kotor coastline and mountains" },
  beach: { src: `${B}/coast.jpg`, alt: "Adriatic coast near Kotor" },
  boat: { src: `${B}/boat.jpg`, alt: "Boat trip on the Bay of Kotor" },
  food: { src: `${B}/food.jpg`, alt: "Montenegrin cuisine in Kotor Old Town" },
  wine: { src: `${B}/wine.jpg`, alt: "Montenegrin wine tasting" },
  history: { src: `${B}/history.jpg`, alt: "Medieval Kotor historic landmarks" },
  family: { src: `${B}/family.jpg`, alt: "Family exploring Kotor from cruise ship" },
  luxury: { src: `${B}/luxury.jpg`, alt: "Private luxury Kotor shore excursion" },
  private: { src: `${B}/private.jpg`, alt: "Private touring in Kotor Old Town" },
  compare: { src: `${B}/compare.jpg`, alt: "Comparing Kotor cruise excursion options" },
  port: { src: `${B}/cruise-port.jpg`, alt: "Port of Kotor cruise terminal" },
  highlights: { src: `${B}/highlights.jpg`, alt: "Kotor highlights from cruise port" },
  photography: { src: `${B}/photography.jpg`, alt: "Kotor photography viewpoints" },
  city: { src: `${B}/old-town.jpg`, alt: "Kotor Old Town from cruise port" },
  mountains: { src: `${B}/mountains.jpg`, alt: "Lovćen mountains above Bay of Kotor" },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "kotor-perast-our-lady-of-the-rocks": "boat",
  "kotor-highlights": "highlights",
  "old-town-walking-tour": "old-town",
  "fortress-climb-tour": "fortress",
  "blue-cave-boat-trip": "boat",
  "perast-bay-cruise": "boat",
  "lovcen-national-park": "mountains",
  "food-wine-tour": "food",
  "private-kotor-tour": "luxury",
  "family-kotor": "family",
  "short-port-call-kotor": "old-town",
  "luxury-private-yacht": "luxury",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("old-town");

const highlightImageKeys: Record<string, string> = {
  "kotor-old-town-guide": "old-town",
  "kotor-fortress-guide": "fortress",
  "our-lady-of-the-rocks-guide": "boat",
  "perast-guide": "boat",
  "blue-cave-guide": "coast",
  "lovcen-national-park-guide": "mountains",
  "one-day-in-kotor": "highlights",
  "best-things-to-do-cruise-ship": "highlights",
  "kotor-for-families": "family",
  "kotor-for-first-time-visitors": "highlights",
  "independent-kotor-guide": "old-town",
  "is-kotor-walkable": "old-town",
  "what-to-wear-montenegro": "coast",
  "best-restaurants-kotor-old-town": "food",
  "kotor-cruise-tips": "port",
  "kotor-cruise-port-guide": "port",
};

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "old-town");
}

export function getGuideImage(imageKey: string): SiteImage {
  return pick(imageKey);
}

export function getComparisonImage(slug: string): SiteImage {
  const keys: Record<string, string> = {
    "blue-cave-vs-perast": "boat",
    "should-i-climb-the-fortress": "fortress",
    "best-excursion-first-time-visitors": "highlights",
    "private-tour-vs-group-tour": "luxury",
    "can-you-visit-kotor-without-excursion": "old-town",
    "diy-vs-guided": "old-town",
  };
  return pick(keys[slug] ?? "compare");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("old-town");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("port");
}
