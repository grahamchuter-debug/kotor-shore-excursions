import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { VisitorTypeSelector } from "@/components/VisitorTypeSelector";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { SpiritOfKotor } from "@/components/SpiritOfKotor";
import { HonestAdvice } from "@/components/HonestAdvice";
import { EditorsChoice } from "@/components/EditorsChoice";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { ArrivalTimeline } from "@/components/ArrivalTimeline";
import { ExcursionCategories } from "@/components/ExcursionCategories";
import { MediterraneanLinks } from "@/components/MediterraneanLinks";

export const metadata = buildMetadata({
  title: "Kotor Shore Excursions & Complete Cruise Planning Guide",
  description:
    "The definitive Kotor cruise planning guide — shore excursions, UNESCO Old Town, Bay of Kotor boat trips, fortress climbs, Perast, Our Lady of the Rocks, ship schedules and honest advice for Montenegro port days.",
  path: "/",
  keywords: [
    "Kotor shore excursions",
    "Kotor cruise excursions",
    "Kotor cruise port",
    "Kotor cruise port guide",
    "Bay of Kotor",
    "Kotor Old Town",
    "Kotor from cruise ship",
    "best Kotor shore excursions",
    "is Kotor walkable",
  ],
});

const SITE_DESCRIPTION =
  "The definitive Kotor cruise planning guide — shore excursions, UNESCO Old Town, Bay of Kotor, fortress views and honest advice for Montenegro port days.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Kotor Shore Excursions & Complete Cruise Planning Guide",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <section className="home-hero">
        <img src={siteImages.hero.src} alt={siteImages.hero.alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100">Montenegro cruise planning authority</p>
          <h1 className="home-hero-heading">
            Find the Best Version of Your Day in Kotor
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Discover carefully selected shore excursions, independent advice and unforgettable experiences in Montenegro&apos;s spectacular Bay of Kotor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shore-excursions" className="btn-accent">Explore Shore Excursions</Link>
            <Link href="/guides/independent-kotor-guide" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              Can I Explore Kotor Independently?
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Return-to-ship confidence</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Transparent, honest advice</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Local expert guides</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Secure booking</span>
          </div>
        </div>
      </section>

      <ExperienceSelector />

      <SpiritOfKotor />

      <HonestAdvice />

      <EditorsChoice />

      <VisitorTypeSelector />

      <ExcursionCategories />

      <section className="section-padding bg-coastal-50">
        <div className="container-wide">
          <p className="section-eyebrow">Everything for your Kotor cruise</p>
          <h2 className="section-title mt-2">The definitive Kotor cruise planning hub</h2>
          <p className="section-subtitle">Not just an excursion catalogue — the full picture from bay arrival to Old Town lanes, fortress views and back to your ship.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Featured Shore Excursions</h2>
              <p className="section-subtitle">Cruise-timed tours designed around your Kotor port day — never oversold.</p>
            </div>
            <Link href="/shore-excursions" className="btn-secondary shrink-0">All Excursions</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.slug === "kotor-perast-our-lady-of-the-rocks";
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    {isEditorsChoice ? (
                      <span className="absolute left-3 top-3 badge-editors-choice">⭐ Editor&apos;s Choice</span>
                    ) : (
                      <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · {e.pace}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CruisePassengerRatings />

      <ArrivalTimeline />

      <section className="section-padding bg-coastal-50">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Blue Cave or Perast?</h3>
            <p className="mt-3 text-gray-700">Speedboat adventure versus baroque bay village — our comparison pages help you choose the right water experience for your hours ashore.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/blue-cave-vs-perast" className="btn-secondary text-sm">Compare options</Link>
              <Link href="/guides/blue-cave-guide" className="btn-secondary text-sm">Blue Cave guide</Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Should you climb the fortress?</h3>
            <p className="mt-3 text-gray-700">1,350 steps to San Giovanni fortress — spectacular views but demanding. Our honest guide helps you decide if your legs and timetable allow it.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/should-i-climb-the-fortress" className="btn-secondary text-sm">Fortress comparison</Link>
              <Link href="/guides/kotor-fortress-guide" className="btn-secondary text-sm">Fortress guide</Link>
              <Link href="/guides/one-day-in-kotor" className="btn-secondary text-sm">One day in Kotor</Link>
            </div>
          </div>
        </div>
      </section>

      <MediterraneanLinks />

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Build your personalised Kotor cruise plan</h2>
          <p className="mt-4 text-white/85">Enter your arrival and departure times, interests and travel style — get tailored excursions, guides and a realistic day plan with return-to-ship confidence.</p>
          <Link href="/cruise-planner" className="btn-accent mt-8 inline-flex">Start the Cruise Planner</Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Kotor Cruise Planning FAQs" />
        </div>
      </section>
    </>
  );
}
