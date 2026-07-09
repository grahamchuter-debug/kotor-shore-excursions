import Link from "next/link";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteImages } from "@/lib/images";

export function SpiritOfKotor() {
  return (
    <section className="section-padding bg-coastal-900 text-white">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow text-coastal-200">The spirit of Kotor</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              One of Europe&apos;s hidden gems — and the arrival is part of the attraction
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85">
              <p>
                Kotor isn&apos;t a destination that rewards rushing. Wander the UNESCO-listed Old Town beneath dramatic mountain walls, cruise across one of Europe&apos;s most beautiful bays, discover tiny island churches, or escape into Montenegro&apos;s mountains for spectacular panoramic views.
              </p>
              <p>
                Whether you prefer exploring independently or joining a guided excursion, Kotor offers one of the most memorable cruise days anywhere in the Mediterranean.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/guides/kotor-old-town-guide" className="btn-accent">Old Town Guide</Link>
              <Link href="/guides/independent-kotor-guide" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Independent Guide
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <ResponsiveImage
              image={siteImages.hero}
              role="card"
              imgClassName="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/40 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
