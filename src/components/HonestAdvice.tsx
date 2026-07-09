import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do you actually need a shore excursion in Kotor?</h2>
        <p className="section-subtitle">Advice from an experienced cruiser — not a salesperson.</p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Yes, many passengers have a wonderful day without one</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Kotor is one of the Mediterranean&apos;s most walkable cruise ports. Step off the ship, stroll to the Sea Gate and you&apos;re inside a UNESCO-listed medieval town within minutes. Many passengers simply enjoy:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Old Town lanes and squares</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Fortress climb (if you have the legs)</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Harbour cafés and marina views</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Shopping and ice cream stops</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              On a standard 8-hour call, a self-guided Old Town morning is genuinely excellent — and free.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">But excursions are worthwhile when you want to see more of Montenegro</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              The bay and mountains are what make Kotor extraordinary — and they&apos;re hard to reach independently on a tight schedule:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-maple-600 mt-0.5">→</span> <span><strong>Perast</strong> — baroque waterfront village 20 minutes by boat</span></li>
              <li className="flex items-start gap-2"><span className="text-maple-600 mt-0.5">→</span> <span><strong>Our Lady of the Rocks</strong> — artificial island church, only reachable by boat</span></li>
              <li className="flex items-start gap-2"><span className="text-maple-600 mt-0.5">→</span> <span><strong>Blue Cave</strong> — speedboat adventure along the Adriatic coast</span></li>
              <li className="flex items-start gap-2"><span className="text-maple-600 mt-0.5">→</span> <span><strong>Lovćen National Park</strong> — hairpin roads, Njegoš Mausoleum and mountain panoramas</span></li>
              <li className="flex items-start gap-2"><span className="text-maple-600 mt-0.5">→</span> <span><strong>Local guides</strong> — context that transforms medieval streets from pretty to fascinating</span></li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Transport beyond the Old Town is limited — organised excursions handle boat connections, mountain roads and return timing so you don&apos;t watch the clock.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/can-you-visit-kotor-without-excursion" className="btn-secondary text-sm">Can I visit without an excursion?</Link>
          <Link href="/guides/independent-kotor-guide" className="btn-secondary text-sm">Full independent guide</Link>
          <Link href="/compare/diy-vs-guided" className="btn-secondary text-sm">DIY vs guided</Link>
        </div>
      </div>
    </section>
  );
}
