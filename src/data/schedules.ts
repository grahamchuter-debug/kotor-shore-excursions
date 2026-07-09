import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import kotorSchedule from "./imported-schedules/kotor.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Kotor cruise ship schedules?",
    answer:
      "Schedules are compiled from published timetables and updated periodically. Times and berths can change — confirm with your cruise line before booking excursions.",
  },
  {
    question: "How far is Old Town from the cruise port?",
    answer:
      "About 400 metres — 5–10 minutes on foot to the Sea Gate. Allow extra time when multiple ships share the bay.",
  },
  {
    question: "Can I climb the fortress on a short port call?",
    answer:
      "Calls under 6 usable hours are tight — choose Old Town only or a short walking tour. Standard 8–11 hour calls suit fortress and bay excursions.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships share your port day before booking fortress or bay excursions",
  "Start fortress climbs before 10:00 on multi-ship days",
  "Allow 60–90 minute return buffer from Perast to the port",
  "Be on deck for the Bay of Kotor sail-in — it is spectacular",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "kotor",
    name: "Kotor",
    country: "Montenegro",
    seoTitle: "Kotor Cruise Ship Schedule Overview",
    metaDescription:
      "Kotor cruise ship schedule — see which ships call at the Port of Kotor and plan shore excursions around published arrival and departure times.",
    intro:
      "Kotor is a highlight of Adriatic and Eastern Mediterranean itineraries. Check scheduled arrivals and departures before booking fortress, Perast or Blue Cave excursions.",
    description: "Montenegro's winding bay cruise gateway — UNESCO Old Town at the port.",
    scheduleOverview:
      "Peak cruise traffic April through October, with heaviest calls June to September on Adriatic itineraries.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  kotor: kotorSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
