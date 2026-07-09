import type { FAQ, VisitorType, ExperienceCard } from "./types";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Kotor for the day on a cruise",
    shortLabel: "Port day",
    description: "You're calling at Kotor for the day. Find shore excursions, planning guides and a realistic port-day itinerary from the Port of Kotor.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Kotor",
    shortLabel: "First visit",
    description: "Fortress or Perast? Our first-timer guides and comparison pages help you choose confidently.",
    href: "/guides/kotor-for-first-time-visitors",
    cta: "First-timer guide",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description: "Walk to the Sea Gate, explore Old Town lanes, manage your own return — when DIY beats a ship tour.",
    href: "/guides/independent-kotor-guide",
    cta: "Independent guide",
  },
  {
    id: "planner",
    label: "I want a personalised itinerary",
    shortLabel: "Custom plan",
    description: "Tell us your hours ashore, interests and budget — get a tailored Kotor plan with return-to-ship timing.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "medieval-history",
    title: "Medieval History",
    description: "Venetian walls, St Tryphon Cathedral and maritime museums — UNESCO Kotor from the cruise port.",
    href: "/guides/kotor-old-town-guide",
    cta: "Explore Old Town",
    imageKey: "medieval",
  },
  {
    slug: "bay-cruises",
    title: "Bay Cruises",
    description: "Perast baroque waterfront, Our Lady of the Rocks and fjord-like Bay of Kotor boat trips.",
    href: "/guides/perast-guide",
    cta: "Explore the bay",
    imageKey: "bay",
  },
  {
    slug: "blue-cave",
    title: "Blue Cave",
    description: "Speedboat to Plava Špilja — luminous blue swimming and Adriatic coastal adventure.",
    href: "/guides/blue-cave-guide",
    cta: "Explore Blue Cave",
    imageKey: "blue-cave",
  },
  {
    slug: "scenic-mountains",
    title: "Scenic Mountains",
    description: "Lovćen National Park, Kotor Serpentine hairpins and Njegoš Mausoleum panoramas.",
    href: "/guides/lovcen-national-park-guide",
    cta: "Explore mountains",
    imageKey: "mountains",
  },
  {
    slug: "food-wine",
    title: "Food & Wine",
    description: "Njeguški pršut, Adriatic seafood and Vranac wine — Montenegrin flavours in the Old Town.",
    href: "/guides/montenegro-food-wine-guide",
    cta: "Taste Montenegro",
    imageKey: "food",
  },
  {
    slug: "private-touring",
    title: "Private Touring",
    description: "Private vehicles and yachts — custom fortress, Perast or Lovćen routing at your pace.",
    href: "/shore-excursions/private-kotor-tour",
    cta: "Go private",
    imageKey: "private",
  },
];

export const coreSections: HomeSection[] = [
  { slug: "shore-excursions", number: "01", title: "Shore Excursions", description: "Perast, fortress, Old Town and Blue Cave — cruise-timed from Port of Kotor.", href: "/shore-excursions", cta: "Browse excursions" },
  { slug: "guides", number: "02", title: "Kotor Planning Guides", description: "Authority guides for Old Town, fortress, bay trips, food and every type of passenger.", href: "/guides", cta: "Read guides" },
  { slug: "cruise-port-guide", number: "03", title: "Kotor Cruise Port Guide", description: "Port layout, walking to Sea Gate, tender operations and practical arrival advice.", href: "/cruise-port-guide", cta: "Port guide" },
  { slug: "cruise-planner", number: "04", title: "Kotor Cruise Planner", description: "Answer a few questions — get a tailored itinerary with return-to-ship confidence.", href: "/cruise-planner", cta: "Start planning" },
  { slug: "compare", number: "05", title: "Compare Options", description: "Blue Cave vs Perast, fortress climb, DIY vs guided — honest comparisons.", href: "/compare/blue-cave-vs-perast", cta: "Compare options" },
  { slug: "ship-schedules", number: "06", title: "Cruise Ship Schedules", description: "See which ships call at Kotor and plan around published arrival and departure times.", href: "/ship-schedules/kotor", cta: "View schedules" },
  { slug: "one-day", number: "07", title: "One Day in Kotor", description: "Hour-by-hour sample itineraries from gangway to all-aboard.", href: "/guides/one-day-in-kotor", cta: "One-day guide" },
  { slug: "faq", number: "08", title: "FAQ", description: "Kotor cruise port questions answered — timing, taxis, excursions and return buffers.", href: "/faq", cta: "Read FAQs" },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "How far is Kotor Old Town from the cruise port?",
      answer: "About 400 metres — 5–10 minutes on foot to the Sea Gate or 2–3 minutes by taxi.",
    },
    {
      question: "Can I climb the fortress on a Kotor port day?",
      answer: "Yes on calls of 6+ usable hours. Allow 2–2.5 hours for the climb plus Old Town time, with a 60–90 minute return buffer.",
    },
    {
      question: "Should I book a shore excursion or explore independently?",
      answer: "Old Town is excellent for independent walks. Perast, Lovćen and Blue Cave benefit from pre-booked tours — see our DIY vs guided comparison.",
    },
    {
      question: "What is the best Kotor excursion for first-timers?",
      answer: "Kotor, Perast & Our Lady of the Rocks on 7+ hour calls — or a focused Old Town walk on shorter calls. See our first-timer guide.",
    },
    {
      question: "Where do cruise ships dock in Kotor?",
      answer: "At the Port of Kotor, walking distance to the Old Town. Some vessels tender when berths are full — confirm on your cruise app.",
    },
  ];
}
