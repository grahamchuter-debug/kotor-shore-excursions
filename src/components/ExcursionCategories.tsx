import Link from "next/link";
import { subjectImages } from "@/lib/images";

const CATEGORIES = [
  {
    slug: "history",
    title: "History",
    description: "UNESCO Old Town, Venetian walls and maritime heritage — medieval Kotor on foot.",
    href: "/guides/kotor-old-town-guide",
    imageKey: "history",
    emoji: "🏰",
  },
  {
    slug: "boat-trips",
    title: "Boat Trips",
    description: "Perast, Our Lady of the Rocks and Blue Cave — the bay from the water.",
    href: "/shore-excursions/perast-bay-cruise",
    imageKey: "boat",
    emoji: "⛵",
  },
  {
    slug: "nature",
    title: "Nature",
    description: "Lovćen National Park, mountain serpentines and Adriatic coastal scenery.",
    href: "/guides/lovcen-national-park-guide",
    imageKey: "fortress",
    emoji: "⛰",
  },
  {
    slug: "adventure",
    title: "Adventure",
    description: "Fortress climb, Blue Cave speedboats and active mountain exploration.",
    href: "/shore-excursions/blue-cave-boat-trip",
    imageKey: "blue-cave",
    emoji: "🧗",
  },
  {
    slug: "private-tours",
    title: "Private Tours",
    description: "Custom itineraries with your own guide — pace and stops on your terms.",
    href: "/shore-excursions/private-kotor-tour",
    imageKey: "luxury",
    emoji: "🚗",
  },
  {
    slug: "luxury",
    title: "Luxury Experiences",
    description: "Private yacht charters and premium small-group touring in the bay.",
    href: "/shore-excursions/luxury-private-yacht",
    imageKey: "luxury",
    emoji: "✨",
  },
  {
    slug: "short-port",
    title: "Short Port Calls",
    description: "Focused Old Town walks and fortress viewpoints when hours are limited.",
    href: "/shore-excursions/short-port-call-kotor",
    imageKey: "old-town",
    emoji: "⏱",
  },
];

export function ExcursionCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Excursion categories</p>
        <h2 className="section-title mt-2">Find the right Kotor experience</h2>
        <p className="section-subtitle">
          Richer editorial cards to help you choose — each links to the most relevant excursions and planning guides.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const image = subjectImages[cat.imageKey] ?? subjectImages["old-town"];
            return (
              <Link
                key={cat.slug}
                href={cat.href}
                className="card-editorial group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image.src}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/60 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute left-3 top-3 text-xl" aria-hidden="true">{cat.emoji}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{cat.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{cat.description}</p>
                  <span className="mt-4 text-sm font-semibold text-maple-600">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
