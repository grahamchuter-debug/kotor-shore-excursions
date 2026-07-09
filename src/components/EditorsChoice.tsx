import Link from "next/link";
import { getExcursionImage } from "@/lib/images";

export function EditorsChoice() {
  const image = getExcursionImage("kotor-perast-our-lady-of-the-rocks");

  return (
    <section className="section-padding section-signature-hero">
      <div className="container-wide relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge-editors-choice">
              <span aria-hidden="true">⭐</span> Editor&apos;s Choice
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Kotor, Perast &amp; Our Lady of the Rocks
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed">
              Not because it&apos;s the most expensive option — because it combines everything that makes a Kotor port day unforgettable.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Spectacular fjord-like bay scenery</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> UNESCO Old Town history in Kotor</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Relaxed boat ride to Perast</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Our Lady of the Rocks island church</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Comfortable pace — no rushing</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shore-excursions/kotor-perast-our-lady-of-the-rocks" className="btn-accent">
                View this excursion
              </Link>
              <Link href="/compare/best-excursion-first-time-visitors" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Why it wins
              </Link>
            </div>
          </div>
          <div className="card-signature overflow-hidden p-0">
            <div className="relative aspect-[16/10]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                The single best introduction to Montenegro&apos;s Bay of Kotor — scenery, history and a boat ride in one relaxed day. Ideal for first-time visitors with 7+ usable hours ashore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
