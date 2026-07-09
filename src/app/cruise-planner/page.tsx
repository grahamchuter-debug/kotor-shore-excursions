import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { KotorCruisePlanner } from "@/components/KotorCruisePlanner";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/cruise-planner";
const description =
  "Build a personalised Kotor cruise plan. Enter your arrival and departure times, party size, interests, mobility, budget and travel style — get tailored excursions, guides and a realistic day plan.";

export const metadata = buildMetadata({
  title: "Kotor Cruise Planner",
  description,
  path,
  keywords: ["Kotor cruise planner", "Kotor cruise day plan", "Kotor port day itinerary"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Kotor Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Kotor Cruise Planner", description, path })]} />
      <PageHero
        title="Kotor Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial itinerary recommendations from Editor's Choice Perast excursions to fortress climbs, Blue Cave adventures and independent Old Town walks."
        imageSrc={siteImages.hero.src}
        imageAlt={siteImages.hero.alt}
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <KotorCruisePlanner />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
