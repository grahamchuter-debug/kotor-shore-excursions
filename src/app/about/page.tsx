import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Kotor Shore Excursions",
  description: "About Kotor Shore Excursions — an independent Kotor cruise planning authority for port-day passengers visiting Port of Kotor and UNESCO Old Town.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Kotor Shore Excursions", description: "About Kotor Shore Excursions.", path })]} />
      <PageHero title="About Kotor Shore Excursions" subtitle="An independent planning authority built for cruise passengers calling at Kotor — one of Europe's most spectacular Adriatic port days." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Kotor. Whether you have one day ashore at Port of Kotor port or want to understand the city walls, Mount Srđ cable car and Lokrum Island before you sail, our goal is to make your port day simple and confident.
            </p>
            <p>
              We focus on the practical decisions that shape a good Kotor cruise day: how far Old Town is from the terminal, whether the city walls fit your hours, when a guided excursion beats walking independently, and how to build a realistic return-to-ship buffer on busy summer roads.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic Croatia tourism. We highlight Ragusa Republic history, Dalmatian food traditions, Adriatic island logistics, Game of Thrones filming locations and honest editorial comparisons when you must choose one anchor sight. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
            <p>
              Have a question we haven&apos;t answered? <a href="/enquire">Get in touch</a> and we&apos;ll help you plan.
            </p>
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
