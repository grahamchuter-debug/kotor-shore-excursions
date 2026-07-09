import type { GuidePage } from "./types";

export const cruisePlanningPages: GuidePage[] = [
  {
    slug: "mediterranean-cruise-planner",
    title: "Mediterranean Cruise Planner",
    seoTitle: "Mediterranean Cruise Planner — Port-by-Port Shore Excursion Guides",
    metaDescription: "Plan your Mediterranean cruise holistically — Kotor, Dubrovnik, Corfu, Greek Isles and Western Med authority guides linked for multi-port itineraries.",
    tagline: "One itinerary, many ports — link to the right guide at every stop.",
    overview: "Mediterranean cruises string together markedly different ports — walkable Kotor, distant Rome, island Corfu. Our network links authoritative port guides so you plan each day correctly.",
    body: ["Kotor sits on most Adriatic and Eastern Mediterranean cruise itineraries — often paired with Dubrovnik, Corfu, Venice and Greek ports. Plan each port day using dedicated authority guides rather than generic cruise forums.", "Use Kotor for Bay of Kotor and fortress planning; Dubrovnik for walled-city and Lokrum guides; Corfu for Paleokastritsa and Achilleion. Match excursion booking to each port's geography — not one-size-fits-all ship tours.", "Book independent excursions per port where walkability and timing favour it — Kotor and Dubrovnik Old Towns reward DIY; Rome and Lovćen need organised transport."],
    highlights: ["Port-specific authority guides", "Linked Adriatic neighbours", "Realistic per-port timing"],
    tips: ["Plan each port separately", "Book early for peak July slots", "Keep 60–90 min buffers everywhere"],
    faqs: [{ question: "Is this site only for Kotor?", answer: "Kotor is our focus — we link to Dubrovnik, Corfu and broader Med planning resources." }, { question: "Where is the main Med planner?", answer: "https://mediterraneancruiseplanner.com — hub for multi-port itinerary tools." }],
    relatedSlugs: ["dubrovnik-shore-excursions", "corfu-shore-excursions", "adriatic-cruise-ports"],
    imageKey: "city",
    hubPath: "/plan-your-cruise-holiday",
  },
  {
    slug: "dubrovnik-shore-excursions",
    title: "Dubrovnik Shore Excursions — Adriatic Neighbour",
    seoTitle: "Dubrovnik Shore Excursions — Cruise Port Guide (External)",
    metaDescription: "Planning Dubrovnik on the same cruise as Kotor? Authority guide for Gruž port, city walls, Lokrum and Old Town at dubrovnikshoreexcursion.com.",
    tagline: "Kotor today, Dubrovnik tomorrow — plan both Adriatic gems correctly.",
    overview: "Dubrovnik and Kotor often appear on the same Adriatic itinerary — but they demand different planning. Dubrovnik's Old Town is 2.5 km from Gruž port; Kotor's is 400 metres from the gangway.",
    body: ["Kotor sits on most Adriatic and Eastern Mediterranean cruise itineraries — often paired with Dubrovnik, Corfu, Venice and Greek ports. Plan each port day using dedicated authority guides rather than generic cruise forums.", "Dubrovnik highlights: city walls circuit, Mount Srđ cable car, Lokrum Island boat and Game of Thrones locations. Allow 10–15 minutes taxi from Gruž to Pile Gate — not walkable from the terminal like Kotor.", "Full authority site: https://dubrovnikshoreexcursion.com — shore excursions, comparisons, ship schedules and cruise planner for Gruž port days."],
    highlights: ["Gruž port 2.5 km from walls", "City walls and cable car", "Lokrum island boat trips"],
    tips: ["Do not assume Kotor timing fits Dubrovnik", "Pre-book wall tickets in peak season", "Allow longer port transfers"],
    faqs: [{ question: "Is this relevant on a Kotor port day?", answer: "Yes — Kotor sits on most Adriatic and Eastern Mediterranean itineraries from April through October." }, { question: "Where can I plan other ports?", answer: "See our Mediterranean cruise planning hub for Dubrovnik, Corfu and multi-port itineraries." }],
    recommendations: [
      { category: "editors-choice", title: "Dubrovnik Shore Excursions", description: "Full Dubrovnik cruise planning authority.", href: "https://dubrovnikshoreexcursion.com" },
      { category: "best-historic", title: "City Walls Guide", description: "Dubrovnik ramparts from Gruž.", href: "https://dubrovnikshoreexcursion.com/guides/walking-city-walls" }
    ],
    relatedSlugs: ["corfu-shore-excursions", "adriatic-cruise-ports", "mediterranean-cruise-planner"],
    imageKey: "old-town",
    hubPath: "/plan-your-cruise-holiday",
  },
  {
    slug: "corfu-shore-excursions",
    title: "Corfu Shore Excursions — Ionian Adriatic",
    seoTitle: "Corfu Shore Excursions — Cruise Port Guide (External)",
    metaDescription: "Calling at Corfu on your Mediterranean cruise? Authority guide for Paleokastritsa, Old Town and Achilleion at corfushoreexcursion.com.",
    tagline: "Ionian elegance meets Adriatic drama — Corfu needs its own plan.",
    overview: "Corfu pairs UNESCO Old Town walkability with island drives to Paleokastritsa beaches and Achilleion Palace — different geography from inlet-like Kotor.",
    body: ["Kotor sits on most Adriatic and Eastern Mediterranean cruise itineraries — often paired with Dubrovnik, Corfu, Venice and Greek ports. Plan each port day using dedicated authority guides rather than generic cruise forums.", "Corfu ships dock at Neo Limani — 2 km from Old Town (5–10 min taxi). Highlights: Paleokastritsa coves, Achilleion, Kanoni viewpoint and Liston promenade.", "Full authority site: https://corfushoreexcursion.com — excursions, comparisons and port guides for Ionian cruise days."],
    highlights: ["Neo Limani cruise terminal", "Paleokastritsa beaches", "Achilleion Palace"],
    tips: ["Allow drive time to Paleokastritsa", "Old Town walkable like Kotor", "Book coaches before peak season"],
    faqs: [{ question: "Is this relevant on a Kotor port day?", answer: "Yes — Kotor sits on most Adriatic and Eastern Mediterranean itineraries from April through October." }, { question: "Where can I plan other ports?", answer: "See our Mediterranean cruise planning hub for Dubrovnik, Corfu and multi-port itineraries." }],
    recommendations: [
      { category: "editors-choice", title: "Corfu Shore Excursions", description: "Full Corfu cruise planning authority.", href: "https://corfushoreexcursion.com" },
      { category: "best-coastal", title: "Paleokastritsa Guide", description: "Turquoise coves from Neo Limani.", href: "https://corfushoreexcursion.com/guides/paleokastritsa-from-cruise-port" }
    ],
    relatedSlugs: ["dubrovnik-shore-excursions", "adriatic-cruise-ports", "mediterranean-cruise-planner"],
    imageKey: "beach",
    hubPath: "/plan-your-cruise-holiday",
  },
  {
    slug: "adriatic-cruise-ports",
    title: "Adriatic Cruise Ports Hub",
    seoTitle: "Adriatic Cruise Ports — Kotor, Dubrovnik & Corfu Planning Hub",
    metaDescription: "Compare Adriatic cruise ports Kotor, Dubrovnik and Corfu — walkability, excursions and realistic timing on Eastern Mediterranean itineraries.",
    tagline: "The Adriatic's big three port days — how they differ and how to plan each.",
    overview: "Eastern Mediterranean and Adriatic itineraries typically include two or three of Kotor, Dubrovnik and Corfu. Each port rewards different excursion choices — do not repeat the same planning logic.",
    body: ["Kotor sits on most Adriatic and Eastern Mediterranean cruise itineraries — often paired with Dubrovnik, Corfu, Venice and Greek ports. Plan each port day using dedicated authority guides rather than generic cruise forums.", "Kotor: walkable Old Town, fortress climb, Perast bay cruises. Dubrovnik: taxi-dependent walls and cable car, Lokrum boats. Corfu: Old Town walk plus Paleokastritsa drives. Match energy levels across consecutive sea days.", "Link to each authority: kotorshoreexcursion.com (this site), dubrovnikshoreexcursion.com, corfushoreexcursion.com — plus https://mediterraneancruiseplanner.com for full-itinerary tools."],
    highlights: ["Kotor — bay arrival, walkable walls", "Dubrovnik — ramparts and cable car", "Corfu — beaches and palaces"],
    tips: ["Plan each port separately", "Vary active and relaxed days", "Book bay trips in calm weather"],
    faqs: [{ question: "Is this relevant on a Kotor port day?", answer: "Yes — Kotor sits on most Adriatic and Eastern Mediterranean itineraries from April through October." }, { question: "Where can I plan other ports?", answer: "See our Mediterranean cruise planning hub for Dubrovnik, Corfu and multi-port itineraries." }],
    relatedSlugs: ["dubrovnik-shore-excursions", "corfu-shore-excursions", "mediterranean-cruise-planner"],
    imageKey: "boat",
    hubPath: "/plan-your-cruise-holiday",
  },
  {
    slug: "kotor-to-dubrovnik-itinerary",
    title: "Kotor & Dubrovnik on the Same Cruise",
    seoTitle: "Kotor and Dubrovnik Same Cruise — How to Plan Both Port Days",
    metaDescription: "Your cruise visits both Kotor and Dubrovnik — how to plan each port day differently for fortress, walls, Perast and Lokrum.",
    tagline: "Two walled UNESCO cities, one week — avoid duplicating the same day twice.",
    overview: "Passengers on Adriatic loops often call at Kotor and Dubrovnik within the same sailing. Both offer walled Old Towns — but Kotor's port is walkable while Dubrovnik needs taxi time from Gruž.",
    body: ["Kotor sits on most Adriatic and Eastern Mediterranean cruise itineraries — often paired with Dubrovnik, Corfu, Venice and Greek ports. Plan each port day using dedicated authority guides rather than generic cruise forums.", "Suggested split: Kotor day for Perast bay cruise OR fortress climb; Dubrovnik day for city walls and cable car OR Lokrum. Doing full highlights at both ports back-to-back exhausts even fit travellers.", "Cross-link planning: our Kotor Editor's Choice Perast excursion pairs well before a Dubrovnik walls day — vary water and walking focuses."],
    highlights: ["Kotor — bay or fortress anchor", "Dubrovnik — walls or cable car", "Rest day between if possible"],
    tips: ["Do not climb Kotor fortress AND Dubrovnik walls consecutive days unless very fit", "Book both ports before sailing", "Use each city's authority site"],
    faqs: [{ question: "Is this relevant on a Kotor port day?", answer: "Yes — Kotor sits on most Adriatic and Eastern Mediterranean itineraries from April through October." }, { question: "Where can I plan other ports?", answer: "See our Mediterranean cruise planning hub for Dubrovnik, Corfu and multi-port itineraries." }],
    recommendations: [
      { category: "editors-choice", title: "Kotor Perast Excursion", description: "Bay focus on Kotor day.", href: "/shore-excursions/kotor-perast-our-lady-of-the-rocks" },
      { category: "editors-choice", title: "Dubrovnik Highlights", description: "Walls focus on Dubrovnik day.", href: "https://dubrovnikshoreexcursion.com/shore-excursions/dubrovnik-highlights" }
    ],
    relatedSlugs: ["dubrovnik-shore-excursions", "adriatic-cruise-ports", "one-day-in-kotor"],
    imageKey: "city",
    hubPath: "/plan-your-cruise-holiday",
  },
  {
    slug: "eastern-mediterranean-port-guide",
    title: "Eastern Mediterranean Cruise Ports",
    seoTitle: "Eastern Mediterranean Cruise Ports — Planning Guide",
    metaDescription: "Eastern Mediterranean cruise ports beyond Kotor — Dubrovnik, Corfu, Santorini, Mykonos and Venice linked for itinerary planning.",
    tagline: "Beyond Montenegro — link to the right guide at every Eastern Med stop.",
    overview: "Eastern Mediterranean sailings combine Adriatic gems with Greek islands and sometimes Venice. Each port has distinct transfer realities — Kotor and Corfu Old Towns are walkable; Rome and Florence are not.",
    body: ["Kotor sits on most Adriatic and Eastern Mediterranean cruise itineraries — often paired with Dubrovnik, Corfu, Venice and Greek ports. Plan each port day using dedicated authority guides rather than generic cruise forums.", "Authority partners: Dubrovnik (dubrovnikshoreexcursion.com), Corfu (corfushoreexcursion.com), broader Med hub (mediterraneancruiseplanner.com). Greek island guides vary — confirm walkability per port.", "Book key ticketed sights before sailing — Dubrovnik walls, Vatican if Rome appears, and popular Kotor bay excursions in July."],
    highlights: ["Adriatic walkable ports", "Greek island tender alerts", "Hub linking all authorities"],
    tips: ["Read each port's dedicated guide", "Never assume Rome timing fits Kotor", "Build rest days into planning"],
    faqs: [{ question: "Is this relevant on a Kotor port day?", answer: "Yes — Kotor sits on most Adriatic and Eastern Mediterranean itineraries from April through October." }, { question: "Where can I plan other ports?", answer: "See our Mediterranean cruise planning hub for Dubrovnik, Corfu and multi-port itineraries." }],
    relatedSlugs: ["mediterranean-cruise-planner", "adriatic-cruise-ports", "dubrovnik-shore-excursions"],
    imageKey: "city",
    hubPath: "/plan-your-cruise-holiday",
  }
];

export function getCruisePlanningPageBySlug(slug: string): GuidePage | undefined {
  return cruisePlanningPages.find((p) => p.slug === slug);
}

export function getAllCruisePlanningSlugs(): string[] {
  return cruisePlanningPages.map((p) => p.slug);
}

export const mediterraneanLinks = [
  {
    title: "Dubrovnik Shore Excursions",
    description: "Adriatic neighbour — city walls, cable car and Lokrum from Gruž cruise port.",
    href: "https://dubrovnikshoreexcursion.com",
  },
  {
    title: "Corfu Shore Excursions",
    description: "Ionian elegance — Paleokastritsa, Achilleion and UNESCO Old Town.",
    href: "https://corfushoreexcursion.com",
  },
  {
    title: "Mediterranean Cruise Planner",
    description: "Multi-port itinerary tools for Eastern Mediterranean and Adriatic cruises.",
    href: "https://mediterraneancruiseplanner.com",
  },
  {
    title: "Adriatic Cruise Ports Hub",
    description: "Compare Kotor, Dubrovnik and Corfu — walkability, timing and excursion choices.",
    href: "/guides/adriatic-cruise-ports",
  },
  {
    title: "Kotor & Dubrovnik Same Cruise",
    description: "Plan both walled UNESCO cities differently on the same sailing.",
    href: "/guides/kotor-to-dubrovnik-itinerary",
  },
  {
    title: "Eastern Mediterranean Ports",
    description: "Beyond Montenegro — linked guides for Greek islands, Venice and more.",
    href: "/guides/eastern-mediterranean-port-guide",
  },
];
