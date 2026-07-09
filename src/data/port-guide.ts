import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Kotor Cruise Port Guide",
  subtitle: "Port of Kotor terminal, walking to Old Town, tender operations and return-to-ship timing for cruise passengers.",
  terminals: [
    {
      name: "Port of Kotor Main Berth",
      quay: "Commercial cruise berth below Old Town walls",
      usedBy: "Most large ships — MSC, Celebrity, Norwegian, Viking and others on Adriatic itineraries",
      cityAccess: "5–10 min walk to Sea Gate; taxis at terminal exit; excursion coaches at gangway",
    },
    {
      name: "Tender operations",
      quay: "Anchorage in the Bay of Kotor",
      usedBy: "Occasional overflow when berths are full or for very large vessels",
      cityAccess: "Tender to port area then walk to Old Town — add 20–30 minutes to your planning each way",
    },
    {
      name: "Perast boat piers",
      quay: "Small-boat departures — not cruise berth",
      usedBy: "Our Lady of the Rocks boats — reach via excursion or taxi to Perast from Kotor",
      cityAccess: "30–40 min drive from Kotor port to Perast for bay excursions",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Kotor",
      paragraphs: [
        "Cruise ships dock at the Port of Kotor at the southeastern end of the Bay of Kotor, directly below the UNESCO Old Town walls. Unlike ports where heritage sits an hour inland, Kotor's medieval core is genuinely walkable from the gangway.",
        "The Bay of Kotor arrival — sailing past Herceg Novi, Perast and the narrow Verige Strait — is one of Europe's most spectacular cruise approaches. Plan to be on an upper deck 30–60 minutes before docking.",
        "Kotor appears on Adriatic, Greek Isles and Eastern Mediterranean itineraries from April through October, with heaviest traffic June to September.",
      ],
    },
    {
      heading: "Getting from the port to Kotor Old Town",
      paragraphs: [
        "The Sea Gate is 400 metres from the main berth — roughly 5–10 minutes on foot along the flat harbour promenade, or 2–3 minutes by taxi (€3–6).",
        "Excursion coaches and minivans meet passengers at the terminal exit with line flags or name boards. For Perast, Lovćen and Blue Cave you need organised transport — walking is not practical.",
        "The fortress trail starts inside the walls behind St Tryphon Cathedral — buy tickets at the kiosk, not at the cruise terminal.",
      ],
    },
    {
      heading: "Facilities and practicalities",
      paragraphs: [
        "The terminal offers toilets, seating and a tourist information desk. ATMs exist but can run empty on busy multi-ship days — withdraw euros on the ship if needed.",
        "Currency is the euro. Montenegrin is the official language; English is widely spoken in tourist areas. Download offline maps — terminal Wi-Fi is unreliable.",
        "Kotor is compact and generally safe. Watch polished limestone when wet and belongings in crowded Arms Square when multiple ships are in port.",
      ],
    },
    {
      heading: "Return-to-ship timing",
      paragraphs: [
        "Confirm all-aboard time — usually 30–60 minutes before departure. Keep a 60–90 minute buffer beyond your expected travel time, especially returning from Perast when road traffic builds.",
        "Independent walkers should be at the port 90 minutes before all-aboard. Ship excursions carry delay guarantees; reputable independent operators track departure but will not wait if you separate from the group.",
        "Tender operations require an earlier return — allow extra margin to queue for the tender boat back to your ship.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "How far is Kotor Old Town from the cruise port?",
      answer: "About 400 metres — 5–10 minutes on foot to the Sea Gate or 2–3 minutes by taxi.",
    },
    {
      question: "Can I walk from the cruise ship to Kotor Old Town?",
      answer: "Yes — follow the harbour promenade clockwise to the Sea Gate. Flat, scenic and straightforward.",
    },
    {
      question: "Do cruise ships tender in Kotor?",
      answer: "Occasionally when berths are full. Tendering adds 20–30 minutes each way — confirm on your cruise app the evening before.",
    },
    {
      question: "How much time do I need to return from Perast?",
      answer: "Allow 30–40 minutes drive from Perast to the port plus a 60–90 minute buffer before all-aboard. Afternoon bay traffic can add time.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
