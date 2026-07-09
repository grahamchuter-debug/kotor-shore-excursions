interface Rating {
  label: string;
  stars: number;
}

const RATINGS: Rating[] = [
  { label: "Walking from Ship", stars: 5 },
  { label: "Scenery", stars: 5 },
  { label: "History", stars: 5 },
  { label: "Independent Exploring", stars: 5 },
  { label: "Families", stars: 4 },
  { label: "Adventure", stars: 4 },
  { label: "Shopping", stars: 3 },
  { label: "Value", stars: 4 },
];

function StarRow({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "opacity-100" : "opacity-25"} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}

export function CruisePassengerRatings() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Cruise passenger snapshot</p>
        <h2 className="section-title mt-2">How Kotor scores for cruise passengers</h2>
        <p className="section-subtitle">
          An honest at-a-glance view of what Kotor delivers — based on port logistics, sights and real passenger experience.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RATINGS.map((r) => (
            <div key={r.label} className="card-feature flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-gray-800">{r.label}</span>
              <StarRow count={r.stars} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Kotor is one of the Mediterranean&apos;s most walkable cruise ports — but bay excursions and mountain trips reward passengers who venture beyond the Old Town walls.
        </p>
      </div>
    </section>
  );
}
