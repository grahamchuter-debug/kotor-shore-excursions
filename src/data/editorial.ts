import type { EditorialCategory } from "./types";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our top pick after comparing options for Kotor cruise passengers." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Venetian walls, maritime heritage and baroque Perast without rushing." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "The smartest DIY approach when you prefer to explore from the cruise port." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Perast, Our Lady of the Rocks and Bay of Kotor cruises timed to your ship." },
  { id: "best-view", label: "Best Viewpoints", shortLabel: "Viewpoints", description: "Fortress ramparts, Lovćen mausoleum and bay panorama photography." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Paced for children and mixed-age groups with reliable return timing." },
  { id: "best-photography", label: "Best for Photography", shortLabel: "Photography", description: "Fortress outlooks, bay reflections and baroque waterfront angles." },
  { id: "best-food", label: "Best Food & Wine Experience", shortLabel: "Food & Wine", description: "Njeguški pršut, Adriatic seafood and Vranac tastings that fit a cruise schedule." },
  { id: "best-luxury", label: "Best Luxury Experience", shortLabel: "Luxury", description: "Private yachts, premium vehicles and exclusive bay access from the port." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "A rewarding alternative away from the busiest fortress trail queues." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "Strong sightseeing per euro when budget matters as much as timing." },
  { id: "best-short-port", label: "Best for Short Port Calls", shortLabel: "Short Port", description: "Realistic when your ship is in Kotor for under seven usable hours." },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
