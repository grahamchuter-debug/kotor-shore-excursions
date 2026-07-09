import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Kotor Shore Excursions</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">
              The definitive Kotor cruise planning guide — shore excursions from the Port of Kotor, UNESCO Old Town, Bay of Kotor boat trips, fortress climbs, Perast, Our Lady of the Rocks and honest advice for Montenegro cruise passengers.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Kotor Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/guides/one-day-in-kotor" className="hover:text-white">One Day in Kotor</Link></li>
              <li><Link href="/ship-schedules/kotor" className="hover:text-white">Ship Schedules</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Kotor guides</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/guides/kotor-fortress-guide" className="hover:text-white">Fortress Guide</Link></li>
              <li><Link href="/guides/kotor-old-town-guide" className="hover:text-white">Old Town Guide</Link></li>
              <li><Link href="/guides/independent-kotor-guide" className="hover:text-white">Independent Guide</Link></li>
              <li><Link href="/cruise-port-guide" className="hover:text-white">Cruise Port Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Compare &amp; enquire</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/compare/blue-cave-vs-perast" className="hover:text-white">Blue Cave vs Perast</Link></li>
              <li><Link href="/compare/diy-vs-guided" className="hover:text-white">DIY vs Guided</Link></li>
              <li><Link href="/guides/kotor-for-first-time-visitors" className="hover:text-white">First-Time Visitors</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Kotor cruise planning resource — not affiliated with any cruise line or the Port of Kotor.
      </div>
    </footer>
  );
}
