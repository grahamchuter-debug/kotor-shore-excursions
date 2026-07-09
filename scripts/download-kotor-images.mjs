#!/usr/bin/env node
/**
 * Download Kotor-specific images from Wikimedia Commons (CC-licensed).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const UA = "KotorShoreExcursions/1.0 (https://kotorshoreexcursion.com; image setup)";

const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Kotor Bay Montenegro.jpg",
    "File:Kotor, Montenegro.jpg",
  ],
  "og-default.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Kotor Old Town.jpg",
    "File:Kotor, Montenegro.jpg",
  ],
  "old-town.jpg": [
    "File:Kotor Old Town.jpg",
    "File:Kotor, Montenegro.jpg",
    "File:Stari grad Kotor.jpg",
  ],
  "fortress.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Kotor Fortress.jpg",
    "File:Kotor city walls.jpg",
  ],
  "coast.jpg": [
    "File:Kotor Bay Montenegro.jpg",
    "File:Bay of Kotor.jpg",
    "File:Perast Montenegro.jpg",
  ],
  "boat.jpg": [
    "File:Perast Montenegro.jpg",
    "File:Our Lady of the Rocks Perast.jpg",
    "File:Bay of Kotor boat.jpg",
  ],
  "food.jpg": [
    "File:GreekSalad.jpg",
    "File:Montenegrin cuisine.jpg",
  ],
  "wine.jpg": [
    "File:Red Wine Glass.jpg",
    "File:Vranac wine.jpg",
  ],
  "history.jpg": [
    "File:Kotor Old Town.jpg",
    "File:St Tryphon Cathedral Kotor.jpg",
    "File:Kotor, Montenegro.jpg",
  ],
  "family.jpg": [
    "File:Kotor Old Town.jpg",
    "File:Kotor, Montenegro.jpg",
  ],
  "luxury.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Perast Montenegro.jpg",
  ],
  "compare.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Kotor Bay Montenegro.jpg",
  ],
  "cruise-port.jpg": [
    "File:Kotor cruise port.jpg",
    "File:Port of Kotor.jpg",
    "File:Kotor, Montenegro.jpg",
  ],
  "highlights.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Kotor Bay Montenegro.jpg",
  ],
  "photography.jpg": [
    "File:Bay of Kotor from the Fortress of Saint John.jpg",
    "File:Kotor Fortress.jpg",
  ],
};

mkdirSync(OUT, { recursive: true });

async function fetchCommonsUrl(fileName) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetch(apiUrl, { headers: { "User-Agent": UA } });
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  return page?.imageinfo?.[0]?.url ?? null;
}

async function downloadImage(outFile, candidates) {
  for (const candidate of candidates) {
    try {
      const url = await fetchCommonsUrl(candidate);
      if (!url) continue;
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(join(OUT, outFile), buf);
      console.log(`✓ ${outFile} ← ${candidate}`);
      return true;
    } catch (e) {
      console.warn(`  failed ${candidate}:`, e.message);
    }
  }
  console.warn(`✗ ${outFile} — no candidate worked`);
  return false;
}

async function main() {
  for (const [outFile, candidates] of Object.entries(IMAGE_FILES)) {
    await downloadImage(outFile, candidates);
  }
  console.log("Kotor image download complete.");
}

main();
