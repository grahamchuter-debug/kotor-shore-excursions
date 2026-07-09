import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Kotor?",
    answer:
      "At the Port of Kotor, walking distance to the Old Town Sea Gate. Some vessels tender when berths are full — check your cruise app.",
  },
  {
    question: "How long does the fortress climb take?",
    answer:
      "Roughly 1,350 steps — 60–90 minutes up and 30–45 minutes down at a moderate pace. Allow 2–2.5 hours total including Old Town access.",
  },
  {
    question: "Can I visit Kotor Old Town without a shore excursion?",
    answer:
      "Yes — walk 5–10 minutes to the Sea Gate. Fortress tickets at the trailhead; Perast needs taxi or tour.",
  },
  {
    question: "What is the best Kotor excursion for first-time visitors?",
    answer:
      "Kotor, Perast & Our Lady of the Rocks on 7+ hour calls — or Old Town walking tour on shorter calls.",
  },
  {
    question: "Should I book excursions through my cruise line?",
    answer:
      "Ship tours guarantee the vessel waits if their excursion is late. Reputable independent operators track all-aboard with buffers — often smaller groups and lower prices.",
  },
  {
    question: "Is a Kotor port day long enough for fortress and Perast?",
    answer:
      "Tight on standard 8-hour calls — choose fortress OR Perast as your second anchor. Highlights tours sequence sights on longer calls.",
  },
  {
    question: "How early should I return to the port from Perast?",
    answer:
      "Allow 30–40 minutes drive plus 60–90 minutes before all-aboard. Book excursions with ship-tracking for safest timing.",
  },
  {
    question: "What currency is used in Kotor?",
    answer:
      "The euro. Cards work in most Old Town establishments; carry cash for taxis, small vendors and church donations.",
  },
  {
    question: "Are Kotor shore excursions suitable for limited mobility?",
    answer:
      "Old Town cobbles and fortress steps are challenging. Perast waterfront, bay boat trips and private tours with vehicle drops work better than fortress climbs.",
  },
  {
    question: "When is peak cruise season in Kotor?",
    answer:
      "April through October, with heaviest ship traffic June to September. Book Perast and fortress excursions before sailing in July and August.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
