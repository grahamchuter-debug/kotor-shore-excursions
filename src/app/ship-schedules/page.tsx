import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { schedulePorts, getScheduleEntryCount } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portHubPath } from "@/lib/schedule-utils";

const path = "/ship-schedules";

export const metadata = buildMetadata({
  title: "Kotor Cruise Ship Schedules",
  description:
    "Kotor cruise ship schedules by year and month. See which ships call at Port of Kotor port before booking shore excursions, city walls walks or Lokrum Island tours.",
  path,
  keywords: ["Kotor cruise ship schedule", "Kotor cruise calendar", "Port of Kotor ship schedule"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ship Schedules", path },
];

export default function ShipSchedulesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Kotor Cruise Ship Schedules", description: "Kotor cruise ship schedules by year and month.", path })]} />
      <PageHero title="Kotor Cruise Ship Schedules" subtitle="See which ships are in port before you book Kotor excursions. Times and berths are indicative — always confirm with your cruise line." compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          {schedulePorts.map((port) => {
            const count = getScheduleEntryCount(port.slug);
            return (
              <div key={port.slug} className="card-editorial p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900">{port.name}</h2>
                    <p className="mt-2 text-gray-600">{port.scheduleOverview}</p>
                  </div>
                  {count > 0 && <span className="pill">{count} sample entries</span>}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={portHubPath(port.slug)} className="btn-primary text-sm">Full schedule hub</Link>
                  {SCHEDULE_YEARS.map((y) => (
                    <Link key={y} href={portYearPath(port.slug, y)} className="btn-secondary text-sm">{y}</Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
