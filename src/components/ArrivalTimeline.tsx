interface TimelineItem {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const TIMELINE: TimelineItem[] = [
  {
    time: "30 min before",
    title: "Be on your balcony or top deck",
    description: "The sail-in through the Bay of Kotor is one of Europe's greatest cruise arrivals. Don't miss it for breakfast in the dining room.",
    highlight: true,
  },
  {
    time: "Approach",
    title: "Mountain scenery unfolds",
    description: "Dramatic limestone cliffs rise on both sides as the ship navigates the narrow inlet channel toward Kotor.",
    highlight: true,
  },
  {
    time: "Arrival",
    title: "Fortress walls come into view",
    description: "The medieval ramparts climbing San Giovanni fortress are your first glimpse of the UNESCO Old Town.",
  },
  {
    time: "Mid-bay",
    title: "Our Lady of the Rocks",
    description: "Look to starboard for the artificial island church — you'll visit it on bay excursions, but the first sight from the ship is magical.",
  },
  {
    time: "Docking",
    title: "Morning photography",
    description: "Best light is early morning. If you're exploring independently, head straight to the Sea Gate before tour groups arrive.",
  },
  {
    time: "Departure",
    title: "Sail away at golden hour",
    description: "Evening departures offer a second chance at bay photography. Position yourself on the side facing the channel exit.",
    highlight: true,
  },
];

export function ArrivalTimeline() {
  return (
    <section className="section-padding bg-coastal-50">
      <div className="container-wide">
        <p className="section-eyebrow">Before you leave the ship</p>
        <h2 className="section-title mt-2">Don&apos;t miss the Kotor arrival</h2>
        <p className="section-subtitle">
          The sail-in through the Bay of Kotor rivals any sight ashore. Here&apos;s where to stand and what to watch for.
        </p>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-coastal-200 hidden sm:block" aria-hidden="true" />
          <div className="space-y-6">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative sm:pl-12">
                <div
                  className={`hidden sm:block absolute left-2.5 top-5 h-3 w-3 rounded-full border-2 border-white ${
                    item.highlight ? "bg-maple-500 ring-2 ring-maple-500/30" : "bg-coastal-400"
                  }`}
                  aria-hidden="true"
                />
                <div className={`card-feature ${item.highlight ? "border-maple-500/20 bg-gradient-to-br from-maple-500/5 to-white" : ""}`}>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="pill-accent text-xs font-semibold">{item.time}</span>
                    <h3 className="font-display text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Tip: Port-side or starboard depends on your approach direction — ask the cruise director the evening before for the best viewing side.
        </p>
      </div>
    </section>
  );
}
