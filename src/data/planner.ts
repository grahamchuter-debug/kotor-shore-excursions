import { excursions } from "./excursions";

export interface PlannerInput {
  timeframe: "short" | "standard" | "long";
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "history", label: "History & heritage" },
  { id: "fortress", label: "Fortress climb" },
  { id: "viewpoints", label: "Viewpoints & panoramas" },
  { id: "bay", label: "Bay of Kotor & Perast" },
  { id: "islands", label: "Island churches & boat trips" },
  { id: "food", label: "Food & wine" },
  { id: "boat", label: "Boat trips & Blue Cave" },
  { id: "family", label: "Family-friendly" },
  { id: "old-town", label: "Old Town & culture" },
  { id: "photography", label: "Photography" },
  { id: "mountains", label: "Mountains & Lovćen" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  history: ["old-town-walking-tour", "kotor-perast-our-lady-of-the-rocks", "kotor-highlights"],
  fortress: ["fortress-climb-tour", "kotor-highlights", "old-town-walking-tour"],
  viewpoints: ["fortress-climb-tour", "lovcen-national-park", "kotor-highlights"],
  bay: ["kotor-perast-our-lady-of-the-rocks", "perast-bay-cruise", "luxury-private-yacht"],
  islands: ["kotor-perast-our-lady-of-the-rocks", "perast-bay-cruise", "blue-cave-boat-trip"],
  food: ["food-wine-tour", "old-town-walking-tour", "kotor-highlights"],
  boat: ["blue-cave-boat-trip", "perast-bay-cruise", "luxury-private-yacht"],
  family: ["family-kotor", "perast-bay-cruise", "old-town-walking-tour"],
  "old-town": ["old-town-walking-tour", "short-port-call-kotor", "kotor-highlights"],
  photography: ["fortress-climb-tour", "kotor-perast-our-lady-of-the-rocks", "blue-cave-boat-trip"],
  mountains: ["lovcen-national-park", "private-kotor-tour", "kotor-highlights"],
};

const ITINERARY_THEMES: Record<
  string,
  { headline: string; slugs: string[]; summary: string }
> = {
  "editors-choice": {
    headline: "Editor's Choice — Perast • Our Lady of the Rocks • Old Town",
    slugs: ["kotor-perast-our-lady-of-the-rocks", "kotor-highlights", "old-town-walking-tour"],
    summary: "The essential Kotor trio — baroque bay, island church and UNESCO Old Town sequenced with expert timing.",
  },
  "best-historic": {
    headline: "Historic Kotor",
    slugs: ["old-town-walking-tour", "kotor-perast-our-lady-of-the-rocks", "fortress-climb-tour"],
    summary: "Venetian walls, maritime heritage and baroque Perast without rushing.",
  },
  "best-view": {
    headline: "Best Viewpoints",
    slugs: ["fortress-climb-tour", "lovcen-national-park", "kotor-highlights"],
    summary: "Fortress ramparts, Njegoš mausoleum and bay panoramas.",
  },
  "best-coastal": {
    headline: "Bay of Kotor",
    slugs: ["kotor-perast-our-lady-of-the-rocks", "perast-bay-cruise", "blue-cave-boat-trip"],
    summary: "Perast, island church and Blue Cave — Adriatic water over mountain steps.",
  },
  "best-food": {
    headline: "Food & Wine",
    slugs: ["food-wine-tour", "old-town-walking-tour", "kotor-highlights"],
    summary: "Njeguški pršut, Adriatic seafood and Vranac wine fitted to your port hours.",
  },
  "best-independent": {
    headline: "Independent Explorer",
    slugs: ["old-town-walking-tour", "short-port-call-kotor", "fortress-climb-tour"],
    summary: "Walk to Sea Gate, explore lanes and manage your own return buffer to the port.",
  },
  "best-families": {
    headline: "Family Day",
    slugs: ["family-kotor", "perast-bay-cruise", "old-town-walking-tour"],
    summary: "Cats, gentle walks and bay boat trips paced for children.",
  },
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

function usableHours(input: PlannerInput): number {
  if (input.arrivalTime && input.departureTime) {
    const [aH, aM] = input.arrivalTime.split(":").map(Number);
    const [dH, dM] = input.departureTime.split(":").map(Number);
    const arrivalMins = aH * 60 + aM;
    const departMins = dH * 60 + dM;
    const raw = (departMins - arrivalMins) / 60;
    return Math.max(0, raw - 1.5);
  }
  const map = { short: 5, standard: 7.5, long: 10 };
  return map[input.timeframe];
}

function pickTheme(input: PlannerInput): keyof typeof ITINERARY_THEMES {
  const { interests, children, style, mobility, timeframe } = input;
  const active = interests.length ? interests : ["old-town", "history"];

  if (children > 0 || active.includes("family")) return "best-families";
  if (style === "diy" || (active.includes("old-town") && style !== "guided")) return "best-independent";
  if (active.includes("food")) return "best-food";
  if (active.includes("boat") || active.includes("bay") || active.includes("islands")) return "best-coastal";
  if (active.includes("viewpoints") || active.includes("photography")) return "best-view";
  if (active.includes("mountains")) return "best-view";
  if (active.includes("fortress") || active.includes("history")) return "best-historic";
  if (timeframe === "short" || usableHours(input) < 6) return "best-independent";
  if (mobility === "limited") return "best-coastal";
  return "editors-choice";
}

export function generateKotorPlan(input: PlannerInput): PlannerResult {
  const { timeframe, arrivalTime, departureTime, adults, children, interests, mobility, budget, style } = input;
  const party = adults + children;
  const hasKids = children > 0;
  const hours = usableHours(input);

  const themeKey = pickTheme(input);
  const theme = ITINERARY_THEMES[themeKey];

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  for (const s of theme.slugs) pushSlug(s);

  const activeInterests = interests.length ? interests : ["old-town", "history"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("family-kotor");
  if (mobility === "limited") pushSlug("private-kotor-tour");
  if (style === "diy") pushSlug("old-town-walking-tour");
  if (budget === "premium") pushSlug("private-kotor-tour");
  if (timeframe === "short" || hours < 6) pushSlug("short-port-call-kotor");

  const reasonMap: Record<string, string> = {
    "kotor-perast-our-lady-of-the-rocks": "Editor's Choice — Perast, island church and Old Town on one relaxed day.",
    "kotor-highlights": "Old Town, fortress summit and bay views sequenced for active passengers.",
    "old-town-walking-tour": "Sea Gate and cathedral — best anchor for any call length.",
    "fortress-climb-tour": "1,350 steps to San Giovanni — Kotor's signature panorama.",
    "perast-bay-cruise": "Baroque Perast and Our Lady of the Rocks by boat.",
    "blue-cave-boat-trip": "Swim in the luminous Blue Cave on the outer bay.",
    "food-wine-tour": "Njeguški pršut, seafood and Vranac wine tastings.",
    "family-kotor": "Paced routing with cats, boats and short walks for children.",
    "private-kotor-tour": mobility === "limited" ? "Private vehicle at each stop — essential for easy access." : "Flexible routing for your group.",
    "lovcen-national-park": "Njegoš Mausoleum and serpentine views over all Montenegro.",
    "short-port-call-kotor": "Essential Old Town when hours are tight.",
    "luxury-private-yacht": "Private yacht through the Bay of Kotor.",
  };

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => excursionLink(s, reasonMap[s] ?? "A strong match for your Kotor port day."))
    .filter((x): x is PlannerLink => x !== null);

  const transfers: PlannerLink[] = [
    {
      label: "Kotor Cruise Port Guide",
      href: "/cruise-port-guide",
      why: "Port layout, walking to Sea Gate, tender tips and taxi prices.",
    },
  ];
  if (party >= 3 || hasKids || mobility === "limited" || budget === "premium") {
    transfers.push({
      label: "Private Kotor Tour",
      href: "/shore-excursions/private-kotor-tour",
      why: "Strongest return-to-ship confidence for your group when bay traffic builds.",
    });
  }

  const logistics: PlannerLink[] = [
    { label: "Ship Schedules", href: "/ship-schedules/kotor", why: "See how many ships share your port day." },
    {
      label: "First-Time Kotor Guide",
      href: "/guides/kotor-for-first-time-visitors",
      why: "Choose your anchor sight when hours are tight.",
    },
    {
      label: "DIY vs Guided",
      href: "/compare/diy-vs-guided",
      why: "When independent Old Town walks beat organised tours.",
    },
  ];

  const topExc = excursionLinks[0]?.label ?? theme.headline;
  const dayPlan: { time: string; text: string }[] = [];

  const arriveLabel = arrivalTime ?? (timeframe === "short" ? "08:00" : timeframe === "long" ? "07:00" : "07:30");
  const departLabel = departureTime ?? (timeframe === "short" ? "14:00" : timeframe === "long" ? "18:00" : "17:00");

  dayPlan.push({
    time: "On arrival",
    text: `Disembark at Port of Kotor (${arriveLabel}). Be on deck for the bay sail-in if you arrived early. Meet your excursion at the terminal exit, or walk to Sea Gate (5–10 min) for an independent start.`,
  });

  if (themeKey === "best-coastal") {
    dayPlan.push({
      time: "Morning",
      text: `Depart for Perast and bay boat — ${topExc}. Morning boats beat afternoon chop.`,
    });
    dayPlan.push({
      time: "Midday",
      text: "Our Lady of the Rocks church visit and Perast waterfront stroll — allow 2+ hours on the bay.",
    });
    dayPlan.push({
      time: "Afternoon",
      text: "Return coach to Kotor — quick Sea Gate photo stop only unless departure is 18:00 or later.",
    });
  } else if (themeKey === "best-food") {
    dayPlan.push({ time: "Morning", text: "Old Town walk to St Tryphon and Arms Square before lunch crowds." });
    dayPlan.push({ time: "Midday", text: "Konoba lunch with pršut and Vranac — allow 90 minutes seated." });
    dayPlan.push({ time: "Afternoon", text: "Coffee on the square and souvenir browsing before walking back to port." });
  } else if (themeKey === "best-independent") {
    dayPlan.push({ time: "Morning", text: "Walk to Sea Gate — St Tryphon, Arms Square and Maritime Museum at your pace." });
    dayPlan.push({ time: "Midday", text: "Lunch in a side-lane konoba — black risotto or grilled branzino." });
    dayPlan.push({ time: "Afternoon", text: "Optional fortress climb if fit, or harbour rampart walk — return 90 minutes before all-aboard." });
  } else if (themeKey === "best-view") {
    dayPlan.push({ time: "Morning", text: "Fortress climb or Lovćen drive first for best light and cooler temperatures." });
    dayPlan.push({ time: "Midday", text: "Descent to Old Town — short lunch near Arms Square." });
    dayPlan.push({ time: "Afternoon", text: "Maritime Museum or cathedral if legs allow — otherwise harbour photos." });
  } else if (hasKids) {
    dayPlan.push({ time: "Morning", text: "Cat Museum and gentle Old Town lanes — short distances for children." });
    dayPlan.push({ time: "Midday", text: "Perast boat ride or harbour promenade ice cream." });
    dayPlan.push({ time: "Afternoon", text: "Early return to ship — avoid fortress climb with toddlers." });
  } else {
    dayPlan.push({
      time: "Morning",
      text: `Old Town or bay anchor first: ${topExc}. Early starts beat fortress and Perast crowds.`,
    });
    dayPlan.push({ time: "Midday", text: "Arms Square lunch and St Tryphon cathedral if not visited morning." });
    dayPlan.push({ time: "Afternoon", text: "Free time in Old Town lanes or quick fortress if hours allow." });
  }

  dayPlan.push({
    time: "Return buffer",
    text: `Be back at Port of Kotor 60–90 minutes before all-aboard (${departLabel} sailing). Perast road traffic and fortress descent can add 20–30 minutes in peak season.`,
  });

  const interestLabels = activeInterests
    .map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i)
    .join(", ")
    .toLowerCase();

  return {
    headline: theme.headline,
    summary: `${theme.summary} A ${timeframe} Kotor port day (~${hours.toFixed(1)} usable hours) for ${party} guest${party === 1 ? "" : "s"} interested in ${interestLabels}.`,
    excursions: excursionLinks,
    transfers,
    stay: [],
    logistics,
    dayPlan,
  };
}

/** @deprecated Use generateKotorPlan */
export const generateDubrovnikPlan = generateKotorPlan;
/** @deprecated Use generateKotorPlan */
export const generateCorfuPlan = generateKotorPlan;
